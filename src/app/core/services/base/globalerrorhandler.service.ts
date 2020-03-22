import { ErrorHandler, Injectable } from '@angular/core';
import { LoggingService, AppLogger } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {

  private serviceLogger: AppLogger

  constructor(loggingSrv: LoggingService) {
    this.serviceLogger = loggingSrv.getLogger('services.GlobalErrorHandlerService');
  }

  handleError(error: any) {
    let e = (error.message) ? { message: error.message, error: error } : { error: error };
    this.serviceLogger.error('handleError', e);
    throw error;
  }
}
