import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppCoreModule } from './core/modules/appcore/appcore.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './home/home.module';
import { HelperTabsPageModule } from './helpers/helper-tabs/helper-tabs.module';
import { JobsPageModule } from './helpers/jobs/jobs.module';
import { NearByPageModule } from './helpers/near-by/near-by.module';
import { ProfilePageModule } from './helpers/profile/profile.module';
import { ProviderTabsPageModule } from './providers/provider-tabs/provider-tabs.module';
import { HelpersPageModule } from './providers/helpers/helpers.module';
import { DataPageModule } from './providers/data/data.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppCoreModule,
    AppRoutingModule,
    DataPageModule,
    HelperTabsPageModule,
    HelpersPageModule,
    HttpClientModule,
    HomePageModule,
    JobsPageModule,
    NearByPageModule,
    ProfilePageModule,
    ProviderTabsPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
