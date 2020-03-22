import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translateSrv: TranslateService,
    private titleSrv: Title
  ) {
    this.initializeTranslation();
    this.initializeApp();
  }

  initializeTranslation() {
    this.translateSrv.setDefaultLang('de');
    this.translateSrv.use('de');
    this.translateSrv.get('app.title').subscribe(text => this.titleSrv.setTitle(text));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
