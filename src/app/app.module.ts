import { IonicStorageModule } from '@ionic/storage';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { KomponentenPage } from '../pages/komponenten/komponenten';
import { ActionsheetPage } from '../pages/actionsheet/actionsheet';
import { AlertPage } from '../pages/alert/alert';
import { ListPage } from '../pages/list/list';

import { BenutzerProvider } from '../providers/benutzer/benutzer';
import { RandomIntProvider } from '../providers/random-int/random-int';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KomponentenPage,
    ActionsheetPage,
    AlertPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KomponentenPage,
    ActionsheetPage,
    AlertPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BenutzerProvider,
    RandomIntProvider
  ]
})
export class AppModule {}
