import { NgModule, ErrorHandler, Injector } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { AppTranslateModule } from './../apptranslate/apptranslate.module';

import { GlobalErrorHandlerService } from './../../services/base/globalerrorhandler.service';
import { InjectorService } from './../../services/base/injector.service';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    AppTranslateModule,
    SharedModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
  ],
  exports: [],
  bootstrap: []
})
export class AppCoreModule {
  constructor(injector: Injector) {
    InjectorService.injector = injector;
  }
}
