import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams, TranslateCompiler } from '@ngx-translate/core';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export class CustomMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        return '{{ ' + params.key + ' }}';
    }
}

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [ HttpClient ],
            },
            compiler: {
              provide: TranslateCompiler,
              useClass: TranslateMessageFormatCompiler
            },
            missingTranslationHandler: { provide: MissingTranslationHandler, useClass: CustomMissingTranslationHandler },
            useDefaultLang: false
        })
  ],
  providers: [],
  bootstrap: []
})
export class AppTranslateModule {
}
