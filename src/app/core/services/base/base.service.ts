import { InjectorService } from './injector.service';
import { LoggingService, AppLogger } from './logging.service';

export class BaseService {

  protected serviceLogger: AppLogger;

  constructor(service: string) {
      this._createLogger(service);
  }

  protected _createLogger(service: string) {
    let loggingSrv = InjectorService.injector.get(LoggingService);
    this.serviceLogger = loggingSrv.getLogger(service);
  }

}
