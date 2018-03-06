webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.letzteBenutzer = [];
        this.storage.forEach(function (value, key, index) {
            if (key.startsWith('benutzer_')) {
                _this.storage.get(key).then(function (value) {
                    console.log('Benutzerstorage: ', value);
                });
            }
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KomponentenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionsheet_actionsheet__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__badge_badge__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__avatar_avatar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button_button__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_card__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkbox_checkbox__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chip_chip__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__col_and_config_col_and_config__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_content__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var KomponentenPage = (function () {
    function KomponentenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    KomponentenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KomponentenPage');
    };
    KomponentenPage.prototype.goToActionsheet = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__actionsheet_actionsheet__["a" /* ActionsheetPage */]);
    };
    KomponentenPage.prototype.goToAlert = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__alert_alert__["a" /* AlertPage */]);
    };
    KomponentenPage.prototype.goToApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__app_app__["a" /* AppPage */]);
    };
    KomponentenPage.prototype.goToAvatar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__avatar_avatar__["a" /* AvatarPage */]);
    };
    KomponentenPage.prototype.goToBadge = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__badge_badge__["a" /* BadgePage */]);
    };
    KomponentenPage.prototype.goToButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__button_button__["a" /* ButtonPage */]);
    };
    KomponentenPage.prototype.goToCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__card_card__["a" /* CardPage */]);
    };
    KomponentenPage.prototype.goToCheckbox = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__checkbox_checkbox__["a" /* CheckboxPage */]);
    };
    KomponentenPage.prototype.goToChip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__chip_chip__["a" /* ChipPage */]);
    };
    KomponentenPage.prototype.goToColAndConfig = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__col_and_config_col_and_config__["a" /* ColAndConfigPage */]);
    };
    KomponentenPage.prototype.goToContent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__content_content__["a" /* ContentPage */]);
    };
    KomponentenPage.prototype.goToDateTime = function () {
    };
    KomponentenPage.prototype.goToEvents = function () {
    };
    KomponentenPage.prototype.goToFabButton = function () {
    };
    KomponentenPage.prototype.goToFabContainer = function () {
    };
    KomponentenPage.prototype.goToFooter = function () {
    };
    KomponentenPage.prototype.goToGrid = function () {
    };
    KomponentenPage.prototype.goToHaptic = function () {
    };
    KomponentenPage.prototype.goToHeader = function () {
    };
    KomponentenPage.prototype.goToHideWhen = function () {
    };
    KomponentenPage.prototype.goToIcon = function () {
    };
    KomponentenPage.prototype.goToImg = function () {
    };
    KomponentenPage.prototype.goToInfiniteScroll = function () {
    };
    KomponentenPage.prototype.goToInput = function () {
    };
    KomponentenPage.prototype.goToIonicErrorHandler = function () {
    };
    KomponentenPage.prototype.goToIonicModule = function () {
    };
    KomponentenPage.prototype.goToIonicPage = function () {
    };
    KomponentenPage.prototype.goToIonicPageModule = function () {
    };
    KomponentenPage.prototype.goToItem = function () {
    };
    KomponentenPage.prototype.goToItemOptions = function () {
    };
    KomponentenPage.prototype.goToItemRecorder = function () {
    };
    KomponentenPage.prototype.goToItemSliding = function () {
    };
    KomponentenPage.prototype.goToKeyboard = function () {
    };
    KomponentenPage.prototype.goToLabel = function () {
    };
    KomponentenPage.prototype.goToList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    KomponentenPage.prototype.goToLoadingController = function () {
    };
    KomponentenPage.prototype.goToMenu = function () {
    };
    KomponentenPage.prototype.goToMenuClose = function () {
    };
    KomponentenPage.prototype.goToMenuController = function () {
    };
    KomponentenPage.prototype.goToMenuToggle = function () {
    };
    KomponentenPage.prototype.goToModalController = function () {
    };
    KomponentenPage.prototype.goToNav = function () {
    };
    KomponentenPage.prototype.goToNavbar = function () {
    };
    KomponentenPage.prototype.goToNavController = function () {
    };
    KomponentenPage.prototype.goToNavParams = function () {
    };
    KomponentenPage.prototype.goToNavPop = function () {
    };
    KomponentenPage.prototype.goToNavPush = function () {
    };
    KomponentenPage.prototype.goToNote = function () {
    };
    KomponentenPage.prototype.goToOption = function () {
    };
    KomponentenPage.prototype.goToPlatform = function () {
    };
    KomponentenPage.prototype.goToPlatformConfigToken = function () {
    };
    KomponentenPage.prototype.goToPopoverController = function () {
    };
    KomponentenPage.prototype.goToRadioButton = function () {
    };
    KomponentenPage.prototype.goToRadioGroup = function () {
    };
    KomponentenPage.prototype.goToRange = function () {
    };
    KomponentenPage.prototype.goToRefresher = function () {
    };
    KomponentenPage.prototype.goToregisterModeConfigs = function () {
    };
    KomponentenPage.prototype.goToRow = function () {
    };
    KomponentenPage.prototype.goToScroll = function () {
    };
    KomponentenPage.prototype.goToSearchbar = function () {
    };
    KomponentenPage.prototype.goToSegment = function () {
    };
    KomponentenPage.prototype.goToSegmentButton = function () {
    };
    KomponentenPage.prototype.goToSelect = function () {
    };
    KomponentenPage.prototype.goToShowWhen = function () {
    };
    KomponentenPage.prototype.goToSlide = function () {
    };
    KomponentenPage.prototype.goToSpinner = function () {
    };
    KomponentenPage.prototype.goToSplitPane = function () {
    };
    KomponentenPage.prototype.goToTab = function () {
    };
    KomponentenPage.prototype.goToTabs = function () {
    };
    KomponentenPage.prototype.goToThumbnail = function () {
    };
    KomponentenPage.prototype.goToTitle = function () {
    };
    KomponentenPage.prototype.goToToastController = function () {
    };
    KomponentenPage.prototype.goToToogle = function () {
    };
    KomponentenPage.prototype.goToToolbar = function () {
    };
    KomponentenPage.prototype.goToTypography = function () {
    };
    KomponentenPage.prototype.goToViewController = function () {
    };
    KomponentenPage.prototype.goToVirualScroll = function () {
    };
    KomponentenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-komponenten',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\komponenten\komponenten.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <ion-icon  name="happy" color="nigger"></ion-icon>\n\n      Komponenten\n\n      <ion-icon  name="happy" color="nigger"></ion-icon>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding> \n\n\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToActionsheet()">\n\n          Actionsheet\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToAlert()">\n\n          Alert\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToApp()">\n\n          App\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToAvatar()">\n\n          Avatar\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToBadge()">\n\n          Badge\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToButton()">\n\n          Button\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToCard()">\n\n            Card\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToCheckbox()">\n\n            Checkbox\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToChip()">\n\n          Chip\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToColAndConfig()">\n\n          Col and Config\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToContent()">\n\n          Content\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToDateTime()">\n\n          DateTime\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToEvents()">\n\n          Events\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToFabButton()">\n\n          FabButton\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToFabContainer()">\n\n          FabContainer\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToFooter()">\n\n          Footer\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToGrid()">\n\n          Grid\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToHaptic()">\n\n          Haptic\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToHeader()">\n\n          Header\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToHideWhen()">\n\n          HideWhen\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIcon()">\n\n          Icon\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToImg()">\n\n          Img\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToInfiniteScroll()">\n\n          InfiniteScroll\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToInput()">\n\n          Input\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIonicErrorHandler()">\n\n          IonicErrorHandler\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIonicModule()">\n\n          IonicModule\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIonicPage()">\n\n          IonicPage\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIonicPageModule()">\n\n          IonicPageModule\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItem()">\n\n          Item\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemOptions()">\n\n          ItemOptions\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemRecorder()">\n\n          ItemRecorder\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemSliding()">\n\n          ItemSliding\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToKeyboard()">\n\n          Keyboard\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToLabel()">\n\n          Label\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToList()">\n\n          List\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToLoadingController()">\n\n          LoadingController\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenu()">\n\n          Menu\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenuClose()">\n\n          MenuClose\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenuController()">\n\n          MenuController\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenuToggle()">\n\n          MenuToggle\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToModalController()">\n\n            ModalController\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNav()">\n\n            Nav\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavbar()">\n\n            Navbar\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavController()">\n\n            NavController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavParams()">\n\n            NavParams\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavPop()">\n\n            NavPop\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavPush()">\n\n            NavPush\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNote()">\n\n            Note\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToOption()">\n\n            Option\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToPlatform()">\n\n            Platform\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToPlatformConfigToken()">\n\n            PlatformConfigToken\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToPopoverController()">\n\n            PopoverController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRadioButton()">\n\n            RadioButton\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRadioGroup()">\n\n            RadioGroup\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRange()">\n\n            Range\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRefresher()">\n\n            Refresher\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToregisterModeConfigs()">\n\n            registerModeConfigs\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRow()">\n\n            Row\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToScroll()">\n\n            Scroll\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSearchbar()">\n\n            Searchbar\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSegment()">\n\n            Segment\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSegmentButton()">\n\n            SegmentButton\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSelect()">\n\n            Select\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToShowWhen()">\n\n            ShowWhen\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSlide()">\n\n            Slide\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSpinner()">\n\n            Spinner\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSplitPane()">\n\n            SplitPane\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTab()">\n\n            Tab\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTabs()">\n\n            Tabs\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToThumbnail()">\n\n            Thumbnail\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTitle()">\n\n            Title\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToToastController()">\n\n            ToastController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToToogle()">\n\n            Toogle\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToToolbar()">\n\n            Toolbar\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTypography()">\n\n            Typography\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToViewController()">\n\n            ViewController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToVirualScroll()">\n\n            VirtualScroll\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    \n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\komponenten\komponenten.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object])
    ], KomponentenPage);
    return KomponentenPage;
    var _a, _b;
}());

//# sourceMappingURL=komponenten.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActionsheetPage = (function () {
    function ActionsheetPage(navCtrl, actionSheetCtrl, navParams, randomIntProvider) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navParams = navParams;
        this.randomIntProvider = randomIntProvider;
        this.randomInt = 0;
    }
    ActionsheetPage.prototype.ionViewDidLoad = function () {
    };
    ActionsheetPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Testtitel',
            subTitle: 'Untertitel',
            buttons: [
                {
                    text: 'Test backend',
                    role: 'destructive',
                    icon: 'ice-cream',
                    handler: function () {
                        console.log('Test backend clicked');
                        var navTransition = actionSheet.dismiss();
                        _this.randomIntProvider.getRandomInteger()
                            .subscribe(function (randomInt) {
                            console.log(randomInt);
                            _this.randomInt = randomInt;
                            navTransition.then(function () {
                                // this.navCtrl.pop();
                            });
                        }, function (err) {
                            console.error(err);
                            _this.errorMessage = err;
                        });
                        return false;
                    }
                },
                {
                    text: 'Nichts passiert',
                    handler: function () {
                        console.log('nichts');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                }
            ]
        });
        actionSheet.present();
    };
    ActionsheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-actionsheet',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\actionsheet\actionsheet.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Actionsheet Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>  \n\n\n\n  <button ion-button color="primary" (click)="presentActionSheet()">Öffne Actionsheet</button>\n\n\n\n  <ion-row>\n\n    <span>Random Integer</span>\n\n  </ion-row>\n\n  <ion-row>\n\n    <span>{{ randomInt }}</span>\n\n  </ion-row>\n\n  <ion-row></ion-row>\n\n\n\n  <ion-row *ngIf="errorMessage">\n\n    <span>Error:</span>\n\n    <span>{{ errorMessage }}</span>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\actionsheet\actionsheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__["a" /* RandomIntProvider */]])
    ], ActionsheetPage);
    return ActionsheetPage;
}());

//# sourceMappingURL=actionsheet.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomIntProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RandomIntProvider = (function () {
    function RandomIntProvider(http) {
        this.http = http;
        console.log('Hello RandomIntProvider Provider');
    }
    RandomIntProvider.prototype.getRandomInteger = function () {
        return this.http.get('http://localhost:8080/backend-service/rest/backendService/generateRandomIntegerText?max=1001')
            .do(this._logResponse)
            .map(this._mapDataToBenutzer)
            .catch(this._handleError);
    };
    RandomIntProvider.prototype._logResponse = function (res) {
        console.log('Response: ', res);
    };
    RandomIntProvider.prototype._mapDataToBenutzer = function (res) {
        console.log('Response: ', res);
        return res.generatedInteger;
    };
    RandomIntProvider.prototype._handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__["ErrorObservable"]('Something bad happened; please try again later.');
    };
    ;
    RandomIntProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RandomIntProvider);
    return RandomIntProvider;
}());

//# sourceMappingURL=random-int.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertPage = (function () {
    function AlertPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertPage');
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\alert\alert.html"*/'<!--\n\n  Generated template for the AlertPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Alert Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\alert\alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_benutzer_benutzer__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(navCtrl, navParams, benutzerProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.benutzerProvider = benutzerProvider;
        this.storage = storage;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.benutzerProvider.getBenutzer().subscribe(function (data) {
            _this.benutzerList = data;
            console.log('Benutzer:', _this.benutzerList);
            _this.storage.set('benutzer_' + _this.benutzerList[0].login.username, _this.benutzerList[0].login.username);
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\list\list.html"*/'<!--\n\n  Generated template for the ListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>list</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let benutzer of benutzerList">\n\n      <ion-avatar item-left>\n\n        <img src="{{ benutzer.picture.thumbnail }}">\n\n      </ion-avatar>\n\n      {{ benutzer.name.first }} \n\n      {{ benutzer.name.last }} \n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenutzerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BenutzerProvider = (function () {
    function BenutzerProvider(httpClient) {
        this.httpClient = httpClient;
    }
    BenutzerProvider.prototype.getBenutzer = function () {
        return this.httpClient.get('https://randomuser.me/api/?results=5')
            .do(this._logResponse) // gleich wie .do((res) => this._logResponse(res))
            .map(this._mapDataToBenutzer) // gleich wie .map((res) => this._mapDataToBenutzer(res))
            .catch(this._throwError);
    };
    BenutzerProvider.prototype._logResponse = function (res) {
        console.log('Response: ', res);
    };
    BenutzerProvider.prototype._mapDataToBenutzer = function (res) {
        return res.results;
    };
    BenutzerProvider.prototype._throwError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error');
    };
    BenutzerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BenutzerProvider);
    return BenutzerProvider;
}());

//# sourceMappingURL=benutzer.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BadgePage = (function () {
    function BadgePage(navCtrl, navParams, laenderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laenderProvider = laenderProvider;
    }
    BadgePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.laenderProvider.getLaender().subscribe(function (laender) {
            _this.laender = laender;
        });
    };
    BadgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-badge',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\badge\badge.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Badge Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item *ngFor="let land of laender">\n\n    <img src="{{ land.flag }}" item-start/>\n\n    {{ land .name }} \n\n    <ion-row>\n\n      Einwohnerzahl:\n\n    </ion-row>\n\n    <ion-badge item-end color="btnColor">\n\n      {{ land.population | number }}\n\n    </ion-badge>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\badge\badge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], BadgePage);
    return BadgePage;
}());

//# sourceMappingURL=badge.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppPage = (function () {
    function AppPage(navCtrl, navParams, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.app.getActiveNavContainers().forEach(function (navigationContainer) {
            console.log(navigationContainer.id);
            console.log(navigationContainer.name);
            console.log(navigationContainer.parent);
            console.log(navigationContainer.getType());
            console.log(navigationContainer.getSecondaryIdentifier());
            console.log(_this.app.getNavByIdOrName(navigationContainer.id));
            console.log(_this.app.getRootNavById(navigationContainer.id));
            navigationContainer.getAllChildNavs().forEach(function (navigationContainer) {
                console.log(navigationContainer.id);
                console.log(navigationContainer.name);
                console.log(navigationContainer.parent);
            });
            navigationContainer.getAllChildNavs().forEach(function (navigationContainer) {
                console.log(navigationContainer.id);
                console.log(navigationContainer.name);
                console.log(navigationContainer.parent);
            });
            console.log(_this.app.getRootNavs());
            console.log(_this.app.isScrolling());
        });
    }
    AppPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
    };
    AppPage.prototype.ionViewWillUnload = function () {
        console.log('ionViewWillUnload');
    };
    AppPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter');
    };
    AppPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidEnter');
    };
    AppPage.prototype.ionViewDidLeave = function () {
        console.log('ionViewDidLeave');
    };
    AppPage.prototype.ionViewWillLeave = function () {
        console.log('ionViewWillLeave');
    };
    AppPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-app',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\app\app.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>App Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  Dies ist ein Beispiel für die verschiedenen Ionic Methoden.\n\n  Source Code + Konsole ansehen.\n\n\n\n  <span>Reihenfolge</span>:\n\n\n\n  <ion-list>\n\n    <ion-item>1. ionViewDidLoad</ion-item>\n\n    <ion-item>2. ionViewWillEnter</ion-item>\n\n    <ion-item>3. ionViewDidEnter</ion-item>\n\n    <ion-item>4. ionViewWillLeave</ion-item>\n\n    <ion-item>5. ionViewDidLeave</ion-item>\n\n    <ion-item>6. ionViewWillUnload</ion-item>  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
    ], AppPage);
    return AppPage;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvatarPage = (function () {
    function AvatarPage(navCtrl, navParams, laenderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laenderProvider = laenderProvider;
    }
    AvatarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.laenderProvider.getLaender().subscribe(function (laender) {
            _this.laender = laender;
        });
    };
    AvatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avatar',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\avatar\avatar.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Avatar Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let land of laender">\n\n      <ion-avatar item-start>\n\n        <img src="{{ land.flag }}">\n\n      </ion-avatar>\n\n      {{ land.alpha3Code }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\avatar\avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonPage = (function () {
    function ButtonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.buttonClicked = false;
    }
    ButtonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ButtonPage');
    };
    ButtonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-button',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\button\button.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Button Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor">Normal Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" outline>Outline Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" clear>Clear Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" round>Round Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" block>Block Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" full>Full Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" small>Small Button Größe</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor">Default Button Größe</button> \n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" large>Large Button Größe</button> \n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Left Icon Button\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-right color="btnColor">\n\n      Right Icon Button\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-only color="btnColor">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" solid>Solid Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" strong>Strong Button</button>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\button\button.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardPage = (function () {
    function CardPage(navCtrl, navParams, laenderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laenderProvider = laenderProvider;
    }
    CardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.laenderProvider.getLaender().subscribe(function (laender) {
            _this.laender = laender.filter(function (land) { return land.population > 200000000; });
        });
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\card\card.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Card Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngFor="let land of laender" class="myCard">\n\n\n\n    <ion-card-header class="cardHeader">\n\n      {{ land.name }}\n\n    </ion-card-header>\n\n\n\n    <ion-card-title>\n\n      Hauptstadt: {{ land.capital }}\n\n    </ion-card-title>\n\n      \n\n    <ion-card-content class="cardContent">\n\n      <img src="{{ land.flag }}">\n\n      <p class="cardText">Einwohnerzahl:</p>\n\n      <p class="cardText">{{ land.population }}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col *ngFor="let callingCode of land.callingCodes">\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="call"></ion-icon>\n\n          <div>+{{ callingCode }}</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col *ngFor="let domain of land.topLevelDomain">\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="globe"></ion-icon>\n\n          <div>{{ domain }}</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n      \n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\card\card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckboxPage = (function () {
    function CheckboxPage(navCtrl, navParams, laenderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laenderProvider = laenderProvider;
        this.checked = false;
        this.checkboxMap = new Map();
    }
    CheckboxPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.laenderProvider.getLaender().subscribe(function (laender) {
            _this.laender = laender;
            _this.borders = laender.find(function (land) { return land.alpha3Code === 'AUT'; }).borders;
        });
    };
    CheckboxPage.prototype.checkboxClicked = function (border) {
        console.log('Border: ', border);
    };
    CheckboxPage.prototype.checkboxChanged = function (checkbox, border) {
        this.checkboxMap.set(border, checkbox.checked);
        if (this.checkboxMap.get(border)) {
            if (!this.checkboxArray || this.checkboxArray.length === 0) {
                this.checkboxArray = [];
                this.checkboxArray.push(border);
            }
            else {
                if (!this.checkboxArray.includes(border)) {
                    this.checkboxArray.push(border);
                }
                ;
            }
            ;
        }
        else {
            var index = this.checkboxArray.indexOf(border);
            this.checkboxArray.splice(index, 1);
        }
    };
    CheckboxPage.prototype.getLandByAlpha3Code = function (alpha3Code) {
        return this.laender.find(function (land) { return land.alpha3Code === alpha3Code; });
    };
    CheckboxPage.prototype.getLandNameByAlpha3Code = function (alpha3Code) {
        return this.laender.find(function (land) { return land.alpha3Code === alpha3Code; }).name;
    };
    CheckboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkbox',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\checkbox\checkbox.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Checkbox Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-label>Grenzländer von Österreich</ion-label>\n\n    <ion-label>Für mehr Infos klicken</ion-label>\n\n    <ion-item *ngFor="let border of borders">\n\n      <ion-checkbox color="primary" \n\n                    (ionChange)="checkboxChanged($event, border)"\n\n                    (click)="checkboxClicked(border)">\n\n      </ion-checkbox>\n\n      <ion-label>{{ getLandNameByAlpha3Code(border) }}</ion-label>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item *ngFor="let border of checkboxArray">\n\n      <ion-row>Name: {{ getLandByAlpha3Code(border).name }}</ion-row>\n\n      <ion-row>Nativer Name: {{ getLandByAlpha3Code(border).nativeName }}</ion-row>\n\n      <ion-row>Region: {{ getLandByAlpha3Code(border).region }}</ion-row>\n\n      <ion-row>Subregion: {{ getLandByAlpha3Code(border).subregion }}</ion-row>\n\n      <ion-row>Hauptstadt: {{ getLandByAlpha3Code(border).capital }}</ion-row>\n\n    </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\checkbox\checkbox.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]) === "function" && _c || Object])
    ], CheckboxPage);
    return CheckboxPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChipPage = (function () {
    function ChipPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.show = false;
    }
    ChipPage.prototype.ionViewDidLoad = function () {
    };
    ChipPage.prototype.showMessage = function () {
        return this.show
            ? this.show = false
            : this.show = true;
    };
    ChipPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chip',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\chip\chip.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Chip Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-chip>\n\n    <ion-label>Default Chip</ion-label>\n\n  </ion-chip>\n\n    \n\n  <ion-chip>\n\n    <ion-label color="secondary">Color Label</ion-label>\n\n  </ion-chip>\n\n    \n\n  <ion-chip color="secondary">\n\n    <ion-label color="dark">Color Label und Chip</ion-label>\n\n  </ion-chip>\n\n    \n\n  <ion-chip>\n\n    <ion-icon name="ice-cream"></ion-icon>\n\n    <ion-label>Mit Icon</ion-label>\n\n  </ion-chip>\n\n  \n\n  <ion-chip>\n\n    <ion-icon name="ice-cream" color="secondary"></ion-icon>\n\n    <ion-label>Mit Color Icon</ion-label>\n\n  </ion-chip>\n\n  \n\n  <ion-chip>\n\n    <ion-icon name="ice-cream"></ion-icon>\n\n  </ion-chip>\n\n\n\n  <ion-chip color="nigger" (click)="showMessage()">\n\n    <ion-label color="white">Kann auch geklickt werden</ion-label>\n\n    <ion-icon name="ice-cream" color="secondary"></ion-icon>\n\n  </ion-chip>\n\n\n\n  <ion-row *ngIf="show">Überraschung</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\chip\chip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChipPage);
    return ChipPage;
}());

//# sourceMappingURL=chip.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColAndConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColAndConfigPage = (function () {
    function ColAndConfigPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ColAndConfigPage.prototype.ionViewDidLoad = function () {
    };
    ColAndConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-col-and-config',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\col-and-config\col-and-config.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Col und Config "Beispiel"</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <a href="https://ionicframework.com/docs/api/components/grid/Col/">Col</a>\n\n  <a href="https://ionicframework.com/docs/api/config/Config/">Config</a>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\col-and-config\col-and-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ColAndConfigPage);
    return ColAndConfigPage;
}());

//# sourceMappingURL=col-and-config.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_komponenten_komponenten__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_actionsheet_actionsheet__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_alert_alert__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_list_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_benutzer_benutzer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_random_int_random_int__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_laender_laender__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_badge_badge__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_app_app__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_avatar_avatar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_button_button__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_card_card__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_checkbox_checkbox__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chip_chip__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_col_and_config_col_and_config__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_content_content__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_komponenten_komponenten__["a" /* KomponentenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_actionsheet_actionsheet__["a" /* ActionsheetPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_badge_badge__["a" /* BadgePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_app_app__["a" /* AppPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_checkbox_checkbox__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chip_chip__["a" /* ChipPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_col_and_config_col_and_config__["a" /* ColAndConfigPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_content_content__["a" /* ContentPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_komponenten_komponenten__["a" /* KomponentenPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_actionsheet_actionsheet__["a" /* ActionsheetPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_badge_badge__["a" /* BadgePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_app_app__["a" /* AppPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_checkbox_checkbox__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_chip_chip__["a" /* ChipPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_col_and_config_col_and_config__["a" /* ColAndConfigPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_content_content__["a" /* ContentPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_random_int_random_int__["a" /* RandomIntProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_laender_laender__["a" /* LaenderProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_komponenten_komponenten__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Komponenten', component: __WEBPACK_IMPORTED_MODULE_5__pages_komponenten_komponenten__["a" /* KomponentenPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentPage = (function () {
    function ContentPage(navCtrl, navParams, laenderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laenderProvider = laenderProvider;
    }
    ContentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.laenderProvider.getLaender().subscribe(function (laender) {
            _this.laender = laender.filter(function (land) { return land.area > 1000000; });
        });
    };
    ContentPage.prototype.toTop = function () {
        this.content.scrollToTop();
    };
    ContentPage.prototype.toBottom = function () {
        this.content.scrollToBottom();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]) === "function" && _a || Object)
    ], ContentPage.prototype, "content", void 0);
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\content\content.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Content Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor" (click)="toBottom()">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Zum Schluss\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-list *ngFor="let land of laender">\n\n    <ion-item>{{ land.name }}</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor" (click)="toTop()">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Zum Start\n\n    </button>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\content\content.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]) === "function" && _d || Object])
    ], ContentPage);
    return ContentPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaenderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LaenderProvider = (function () {
    function LaenderProvider(httpClient) {
        this.httpClient = httpClient;
        console.log('Hello LaenderProvider Provider');
    }
    LaenderProvider.prototype.getLaender = function () {
        return this.httpClient.get('https://restcountries.eu/rest/v2/all')
            .do(this._logResponse)
            .map(this._mapDataToLaender)
            .catch(this._throwError);
    };
    LaenderProvider.prototype._logResponse = function (res) {
        console.log('Response: ', res);
    };
    LaenderProvider.prototype._mapDataToLaender = function (res) {
        return res;
    };
    LaenderProvider.prototype._throwError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error');
    };
    LaenderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LaenderProvider);
    return LaenderProvider;
}());

//# sourceMappingURL=laender.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map