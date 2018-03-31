import { IonicStorageModule } from '@ionic/storage';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
import { TerminErstellungPage } from '../pages/termin-erstellung/termin-erstellung';
import { PersonBearbeitungPage } from '../pages/person-bearbeitung/person-bearbeitung';
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
// import { HttpInterceptor } from '../providers/interceptor/httpInterceptor';
import { MyErrorHandler } from '../providers/handler/myErrorHandler';
import { IonicMyPageModule } from '../pages/ionic-my/ionic-my.module';
import { HomePageModule } from '../pages/home/home.module';
import { ItemPage } from '../pages/item/item';
import { ItemRecorderPage } from '../pages/item-recorder/item-recorder';
import { ItemSlidingPage } from '../pages/item-sliding/item-sliding';
import { KeyboardPage } from '../pages/keyboard/keyboard';
import { LabelPage } from '../pages/label/label';
import { DatePipe } from '@angular/common';
import { LoadingPage } from '../pages/loading/loading';
import { PersonProvider } from '../providers/person/person';
import { MyHttpInterceptor, DEFAULT_TIMEOUT, defaultTimeout } from '../providers/interceptor/myHttpInterceptor';
import { TerminBearbeitungPage } from '../pages/termin-bearbeitung/termin-bearbeitung';
import { ModalPage } from '../pages/modal/modal';
import { ModalExample1Page } from '../pages/modal-example1/modal-example1';
import { ModalExample2Page } from '../pages/modal-example2/modal-example2';
import { NavPage } from '../pages/nav/nav';
import { SelectPage } from '../pages/select/select';
import { NotePage } from '../pages/note/note';
import { PlatformPage } from '../pages/platform/platform';
import { PlatformConfigTokenPage } from '../pages/platform-config-token/platform-config-token';
import { PopoverPage } from '../pages/popover/popover';
import { PopoverExampleComponent } from '../components/popover-example/popover-example';
import { RadioPage } from '../pages/radio/radio';
import { RadioGroupPage } from '../pages/radio-group/radio-group';
import { RangePage } from '../pages/range/range';
import { PersonPage } from '../pages/person/person';
import { RefresherPage } from '../pages/refresher/refresher';
import { RegisterModeConfigsPage } from '../pages/register-mode-configs/register-mode-configs';
import { RowPage } from '../pages/row/row';
import { PersonErstellungPage } from '../pages/person-erstellung/person-erstellung';

@NgModule({
  declarations: [
    MyApp,
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
    ItemPage,
    ItemRecorderPage,
    ItemSlidingPage,
    KeyboardPage,
    LabelPage,
    LoadingPage,
    ModalPage,
    ModalExample1Page,
    ModalExample2Page,
    NavPage,
    NotePage,
    PlatformPage,
    PlatformConfigTokenPage,
    PopoverPage,
    PopoverExampleComponent,
    RadioPage,
    RadioGroupPage,
    RangePage,
    RefresherPage,
    RegisterModeConfigsPage,
    RowPage,
    SelectPage,
    TerminPage,
    TerminErstellungPage,
    TerminBearbeitungPage,    
    PersonPage,
    PersonBearbeitungPage,
    PersonErstellungPage    
  ],
  imports: [
    HomePageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    IonicMyPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    ItemPage,
    ItemRecorderPage,
    ItemSlidingPage,
    KeyboardPage,
    LabelPage,
    LoadingPage,
    ModalPage,
    ModalExample1Page,
    ModalExample2Page,
    NavPage,
    NotePage,
    PlatformPage,
    PlatformConfigTokenPage,
    PopoverPage,
    PopoverExampleComponent,
    RadioPage,
    RadioGroupPage,
    RangePage,
    RefresherPage,
    RegisterModeConfigsPage,
    RowPage,
    SelectPage,
    TerminPage,
    TerminErstellungPage,
    TerminBearbeitungPage,
    PersonPage,
    PersonBearbeitungPage,
    PersonErstellungPage    
  ],
  providers: [        
    StatusBar,
    SplashScreen,
    [
      {provide: ErrorHandler, useClass: MyErrorHandler}, 
      {provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true},
      {provide: DEFAULT_TIMEOUT, useValue: defaultTimeout}
    ],
    BenutzerProvider,
    RandomIntProvider,
    LaenderProvider,
    TerminProvider,
    DatePipe,
    PersonProvider
  ]
})
export class AppModule {}
