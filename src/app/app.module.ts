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
import { LaenderProvider } from '../providers/laender/laender';
import { BadgePage } from '../pages/badge/badge';
import { AppPage } from '../pages/app/app';
import { AvatarPage } from '../pages/avatar/avatar';
import { ButtonPage } from '../pages/button/button';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { ChipPage } from '../pages/chip/chip';
import { ColAndConfigPage } from '../pages/col-and-config/col-and-config';
import { ContentPage } from '../pages/content/content';
import { DatetimePage } from '../pages/datetime/datetime';
import { EventsPage } from '../pages/events/events';
import { EventsSubPage } from '../pages/events-sub/events-sub';
import { FabPage } from '../pages/fab/fab';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';
import { HapticPage } from '../pages/haptic/haptic';
import { HideWhenPage } from '../pages/hide-when/hide-when';
import { IconPage } from '../pages/icon/icon';
import { ImgPage } from '../pages/img/img';
import { InfiniteScrollPage } from '../pages/infinite-scroll/infinite-scroll';
import { InputPage } from '../pages/input/input';
import { TerminProvider } from '../providers/termin/termin';
import { TerminPage } from '../pages/termin/termin';
import { TerminSubPage } from '../pages/termin-sub/termin-sub';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KomponentenPage,
    ActionsheetPage,
    AlertPage,
    ListPage,
    BadgePage,
    AppPage,
    AvatarPage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    ChipPage,
    ColAndConfigPage,
    ContentPage,
    DatetimePage,
    EventsPage,
    EventsSubPage,
    FabPage,
    GesturesPage,
    GridPage,
    HapticPage,
    HideWhenPage,
    IconPage,
    ImgPage,
    InfiniteScrollPage,
    InputPage,
    TerminPage,
    TerminSubPage
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
    ListPage,
    BadgePage,
    AppPage,
    AvatarPage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    ChipPage,
    ColAndConfigPage,
    ContentPage,
    DatetimePage,
    EventsPage,
    EventsSubPage,
    FabPage,
    GesturesPage,
    GridPage,
    HapticPage,
    HideWhenPage,
    IconPage,
    ImgPage,
    InfiniteScrollPage,
    InputPage,
    TerminPage,
    TerminSubPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BenutzerProvider,
    RandomIntProvider,
    LaenderProvider,
    TerminProvider
  ]
})
export class AppModule {}
