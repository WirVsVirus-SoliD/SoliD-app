import { Injectable } from '@angular/core';
import { uuid } from 'uuidv4';

import { environment as ENVIRONMENT } from './../../../../environments/environment';

export class AppLogger {

  constructor(public component: string, private env: any) {
  }

  error(methodName: string, data: any): any { return this._log('error', methodName, data); }
  warn(methodName: string, data: any): any { return this._log('warn', methodName, data); }
  debug(methodName: string, data: any): any { return this._log('debug', methodName, data); }
  info(methodName: string, data: any): any { return this._log('info', methodName, data); }

  private _log(level: string, methodName: string, data: any): any {

    let logId: string, message: any, stack: any[], stackEntry: any;
    let _data = (data instanceof Object) ? Object.assign({}, data) : data;
    if(data instanceof Object && data.logId) {
      logId = _data.logId;
      message = _data[_data.level];
      stack = _data.stack;

      delete _data.logId;
      delete _data[_data.level];
      delete _data.stack;

      stackEntry = { method: _data.method };
      stackEntry[_data.level] = _data.data;
      stack.push(stackEntry);

    } else {
      logId = uuid();
      message = (_data.message) ? _data.message : ((_data.error) ? _data.error : _data);
      stack = [];
      stackEntry = _data;
    }

    let logObj = {
      logId: logId,
      method: this.component + '.' + methodName,
      level: level,
      stack: stack,
      data: (stackEntry instanceof Object) ? Object.assign({}, stackEntry) : stackEntry
    };

    logObj[level] = message;

    if(this.env.production) { /*write to db or elsewhere*/ }
    else if(!this.env.production && this.env.logging.loglevel.some(l => l.toLowerCase() === level.toLowerCase())) { console.log(logObj); }

    return logObj;
  }

  private stringify(logObj: any): string {
    let message: string;
    try { message = JSON.stringify(logObj); } catch(ex) { message = logObj; }
    return message;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  private _loggerList: AppLogger[] = [];
  private _env = {
    production: false,
    logging: {
      loglevel: ['error']
    }
  };

  constructor() {
    // overwrite default values for logging with values from the environment file
    this._env = Object.assign(this._env, ENVIRONMENT);
  }

  public getLogger(component: string): any {
    let logger = this._loggerList.find(l => l.component === component);
    if(logger) return logger;
    logger = new AppLogger(component, this._env);
    this._loggerList.push(logger);
    return logger;
  }

}
