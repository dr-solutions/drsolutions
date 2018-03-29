webpackJsonp([0],{

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		165
	],
	"../pages/ionic-my/ionic-my.module": [
		214
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__komponenten_komponenten__ = __webpack_require__(84);
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
    HomePage.prototype.goToKomponenten = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__komponenten_komponenten__["a" /* KomponentenPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n  <ion-footer>\n    <ion-toolbar color="primary">\n      <ion-title (click)="goToKomponenten()">Zu den Komponenten</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__ = __webpack_require__(168);
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
            selector: 'page-actionsheet',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/actionsheet/actionsheet.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Actionsheet Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>  \n\n  <button ion-button color="primary" (click)="presentActionSheet()">Öffne Actionsheet</button>\n\n  <ion-row>\n    <span>Random Integer</span>\n  </ion-row>\n  <ion-row>\n    <span>{{ randomInt }}</span>\n  </ion-row>\n  <ion-row></ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/actionsheet/actionsheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__["a" /* RandomIntProvider */]])
    ], ActionsheetPage);
    return ActionsheetPage;
}());

//# sourceMappingURL=actionsheet.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomIntProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
            .map(this._mapDataToBenutzer);
    };
    RandomIntProvider.prototype._logResponse = function (res) {
        console.log('Response: ', res);
    };
    RandomIntProvider.prototype._mapDataToBenutzer = function (res) {
        console.log('Response: ', res);
        return res.generatedInteger;
    };
    RandomIntProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], RandomIntProvider);
    return RandomIntProvider;
}());

//# sourceMappingURL=random-int.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertPage = (function () {
    function AlertPage(navCtrl, navParams, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.titel = '';
    }
    AlertPage.prototype.showBasicAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Normaler Alert Titel',
            message: 'Das ist die Nachricht des Alerts',
            buttons: ['Okeey']
        });
        alert.present();
    };
    AlertPage.prototype.showCheckboxAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Klick doch');
        alert.addInput({
            type: 'checkbox',
            label: 'Test 1',
            value: 'test1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Test2',
            value: 'test2'
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Test3',
            value: 'test3'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okay',
            handler: function (data) {
                _this.testCheckboxOpen = false;
                _this.testCheckboxResult = data;
            }
        });
        alert.present().then(function () {
            _this.testCheckboxOpen = true;
        });
    };
    AlertPage.prototype.showRadioAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Klick doch, aber nur eins!');
        alert.addInput({
            type: 'radio',
            label: 'Radio 1',
            value: 'radio1'
        });
        alert.addInput({
            type: 'radio',
            label: 'Radio2',
            value: 'radio2'
        });
        alert.addInput({
            type: 'radio',
            label: 'Radio3',
            value: 'radio3',
            checked: true
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Okeey',
            handler: function (data) {
                _this.testRadioOpen = false;
                _this.testRadioResult = data;
            }
        });
        alert.present().then(function () {
            _this.testRadioOpen = true;
        });
    };
    AlertPage.prototype.showConfirmAlert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Confirm Titel',
            message: 'Wollen Sie wirklich?',
            buttons: [
                {
                    text: 'Nein',
                    handler: function () {
                        _this.testConfirmResult = 'Nein';
                    }
                },
                {
                    text: 'Ja',
                    handler: function () {
                        _this.testConfirmResult = 'Ja';
                    }
                }
            ]
        });
        confirm.present();
    };
    AlertPage.prototype.showPromptAlert = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Eingabe ist erforderlich',
            message: "Geben Sie etwas ein",
            inputs: [
                {
                    name: 'titel',
                    placeholder: 'Titel'
                },
            ],
            buttons: [
                {
                    text: 'Abbrechen',
                    handler: function (data) {
                        console.log('Abbrechen clicked');
                    }
                },
                {
                    text: 'Speichern',
                    handler: function (data) {
                        if (!data.titel) {
                            // Bewirkt das Alert nicht geschlossen wird
                            var deleteToast = _this.toastCtrl.create({
                                message: 'Titel erforderlich',
                                position: 'top',
                                cssClass: 'warnungToast',
                                duration: 2000
                            });
                            deleteToast.present();
                            return false;
                        }
                        else {
                            _this.titel = data.titel;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/alert/alert.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Alert Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block primary (click)="showBasicAlert()">Basis Alert</button>\n\n  <button ion-button block primary (click)="showCheckboxAlert()">Checkbox Alert</button>\n\n  <button ion-button block primary (click)="showRadioAlert()">Radio Alert</button>\n\n  <button ion-button block primary (click)="showConfirmAlert()">Confirm Alert</button>\n  \n  <button ion-button block primary (click)="showPromptAlert()">Prompt Alert</button>\n\n  <ion-row>\n      Checkbox Ergebnisse: {{ testCheckboxResult }}\n  </ion-row>\n\n  <ion-row>\n      Radio Ergebnis: {{ testRadioResult }}\n  </ion-row>\n\n  <ion-row>\n      Confirm Ergebnis: {{ testConfirmResult }}\n  </ion-row>\n\n  <ion-row>\n      Prompt Ergebnisse: {{ titel }}\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/alert/alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_benutzer_benutzer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_sliding_item_sliding__ = __webpack_require__(86);
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
    function ListPage(navCtrl, navParams, benutzerProvider, storage, toastCtrl, datePipe) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.benutzerProvider = benutzerProvider;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.datePipe = datePipe;
    }
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('Sliding aktiviert: ', this.list.sliding);
        this.benutzerProvider.getBenutzer().subscribe(function (benutzer) {
            _this.benutzerList = benutzer;
            console.log(_this.benutzerList[0].login.username + ' wird in den Store geschrieben');
            _this.storage.set('benutzer_' + _this.benutzerList[0].login.username, _this.benutzerList[0].login.username);
        });
    };
    ListPage.prototype.itemSelected = function (benutzer) {
        var messageText = benutzer.gender === 'female'
            ? 'Sie ist registriert seit: ' + this.datePipe.transform(new Date(benutzer.registered), 'dd.MM.yyyy HH:mm:ss')
            : 'Er ist registriert seit: ' + this.datePipe.transform(new Date(benutzer.registered), 'dd.MM.yyyy HH:mm:ss');
        var benutzerToast = this.toastCtrl.create({
            message: messageText,
            duration: 3000,
            cssClass: 'infoToast'
        });
        benutzerToast.present();
    };
    ListPage.prototype.goToSlidingPage = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_sliding_item_sliding__["a" /* ItemSlidingPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* List */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* List */])
    ], ListPage.prototype, "list", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/list/list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>List und Storage Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>Avatar (clicking) List:</ion-row>\n  <ion-list>\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n      <ion-avatar item-left>\n        <img src="{{ benutzer.picture.thumbnail }}">\n      </ion-avatar>\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n    </ion-item>\n  </ion-list>\n\n  <ion-row>No-line List:</ion-row>\n  <ion-list no-lines>\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n      <ion-avatar item-left>\n        <img src="{{ benutzer.picture.thumbnail }}">\n      </ion-avatar>\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n    </ion-item>\n  </ion-list>\n\n  <ion-row>Inset List:</ion-row>\n  <ion-list inset>\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n      <ion-avatar item-left>\n        <img src="{{ benutzer.picture.thumbnail }}">\n      </ion-avatar>\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n    </ion-item>\n  </ion-list>\n\n  <ion-row>Divider List:</ion-row>\n  <ion-item-group>\n    <ion-item>Item 1</ion-item>\n    <ion-item-divider color="primary">Item Divider 1</ion-item-divider>\n    <ion-item>Item 2</ion-item>\n    <ion-item>Item 3</ion-item>\n    <ion-item-divider>Item Divider 2</ion-item-divider>\n    <ion-item>Item 4</ion-item>\n  </ion-item-group>\n\n  <ion-row>Überschrift List:</ion-row>\n  <ion-list no-lines>\n    <ion-list-header>\n      Benutzer Überschrift\n    </ion-list-header>\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n      <ion-avatar item-left>\n        <img src="{{ benutzer.picture.thumbnail }}">\n      </ion-avatar>\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n    </ion-item>\n  </ion-list>\n\n  <ion-row>Icon List:</ion-row>\n  <ion-list>\n    <ion-item>\n      <ion-icon large name="leaf" item-start></ion-icon>\n      Item 1\n      <ion-icon name="rose" item-end></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="rose" item-start></ion-icon>\n      Item 1\n      <ion-icon large name="leaf" item-end></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>Multiple Line List:</ion-row>\n  <ion-list>\n    <ion-item>\n      <ion-icon large name="ice-cream" item-start></ion-icon>\n      <h2>Mehrere Zeilen</h2>\n      <h3>sind natürlich</h3>\n      <p>genauso möglich und auch ziemlich cool</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>Sliding List:</ion-row>\n  <button ion-button outline (click)="goToSlidingPage()">Item Sliding</button>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
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
            _this.laender = laender
                .filter(function (land) { return land.population > 10000000; })
                .sort(function (a, b) { return a.population > b.population ? -1 : 1; });
        });
    };
    BadgePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-badge',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/badge/badge.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Badge Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item *ngFor="let land of laender">\n    <img src="{{ land.flag }}" item-start/>\n    {{ land .name }} \n    <ion-row>\n      Einwohnerzahl:\n    </ion-row>\n    <ion-badge item-end color="btnColor">\n      {{ land.population | number }}\n    </ion-badge>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/badge/badge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], BadgePage);
    return BadgePage;
}());

//# sourceMappingURL=badge.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
            selector: 'page-app',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/app/app.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>App Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  Dies ist ein Beispiel für die verschiedenen Ionic Methoden. Source Code + Konsole ansehen.\n\n  <span>Reihenfolge</span>:\n\n  <ion-list>\n    <ion-item>1. ionViewCanEnter\n      <ion-item> return true oder false</ion-item>\n    </ion-item>\n    <ion-item>2. ionViewDidLoad</ion-item>\n    <ion-item>3. ionViewWillEnter</ion-item>\n    <ion-item>4. ionViewDidEnter</ion-item>\n    <ion-item>5. ionViewWillLeave</ion-item>\n    <ion-item>6. ionViewDidLeave</ion-item>\n    <ion-item>7. ionViewWillUnload</ion-item>\n    <ion-item>8. ionViewCanLeave\n      <ion-item> return true oder false</ion-item>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], AppPage);
    return AppPage;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
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
            _this.laender = laender.filter(function (land) { return land.name.startsWith('A'); });
        });
    };
    AvatarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-avatar',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/avatar/avatar.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Avatar Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let land of laender">\n      <ion-avatar item-start>\n        <img src="{{ land.flag }}">\n      </ion-avatar>\n      {{ land.alpha3Code }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/avatar/avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
    ButtonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-button',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/button/button.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Button Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <button ion-button color="btnColor">Normal Button</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" outline>Outline Button</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" clear>Clear Button</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" round>Round Button</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" block>Block Button</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" full>Full Button</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" small>Small Button Größe</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor">Default Button Größe</button> \n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" large>Large Button Größe</button> \n  </ion-row>\n\n  <ion-row>\n    <button ion-button icon-left color="btnColor">\n      <ion-icon name="ice-cream"></ion-icon>\n      Left Icon Button\n    </button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button icon-right color="btnColor">\n      Right Icon Button\n      <ion-icon name="ice-cream"></ion-icon>\n    </button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button icon-only color="btnColor">\n      <ion-icon name="ice-cream"></ion-icon>\n    </button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" solid>Solid Button</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" strong>Strong Button</button>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/button/button.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
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
            selector: 'page-card',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/card/card.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Card Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let land of laender" class="myCard">\n\n    <ion-card-header class="cardHeader">\n      {{ land.name }}\n    </ion-card-header>\n\n    <ion-card-title>\n      Hauptstadt: {{ land.capital }}\n    </ion-card-title>\n      \n    <ion-card-content class="cardContent">\n      <img src="{{ land.flag }}">\n      <p class="cardText">Einwohnerzahl:</p>\n      <p class="cardText">{{ land.population }}</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col *ngFor="let callingCode of land.callingCodes">\n        <button ion-button icon-left clear small>\n          <ion-icon name="call"></ion-icon>\n          <div>+{{ callingCode }}</div>\n        </button>\n      </ion-col>\n      <ion-col *ngFor="let domain of land.topLevelDomain">\n        <button ion-button icon-left clear small>\n          <ion-icon name="globe"></ion-icon>\n          <div>{{ domain }}</div>\n        </button>\n      </ion-col>\n    </ion-row>\n      \n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/card/card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
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
        console.log('Checkbox clicked: ', border);
    };
    CheckboxPage.prototype.checkboxChanged = function (checkbox, border) {
        this.checkboxMap.set(border, checkbox.checked);
        if (this.checkboxMap.get(border)) {
            if (!this.checkboxArray || this.checkboxArray.length === 0) {
                this.checkboxArray = [];
                this.checkboxArray.push(border);
            }
            else {
                if (!(this.checkboxArray.indexOf(border) >= 0)) {
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
            selector: 'page-checkbox',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/checkbox/checkbox.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checkbox Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-label>Grenzländer von Österreich</ion-label>\n    <ion-label>Für mehr Infos klicken</ion-label>\n    <ion-item *ngFor="let border of borders">\n      <ion-checkbox color="primary" \n                    (ionChange)="checkboxChanged($event, border)"\n                    (click)="checkboxClicked(border)">\n      </ion-checkbox>\n      <ion-label>{{ getLandNameByAlpha3Code(border) }}</ion-label>\n    </ion-item>\n\n\n    <ion-item *ngFor="let border of checkboxArray">\n      <ion-row>Name: {{ getLandByAlpha3Code(border).name }}</ion-row>\n      <ion-row>Nativer Name: {{ getLandByAlpha3Code(border).nativeName }}</ion-row>\n      <ion-row>Region: {{ getLandByAlpha3Code(border).region }}</ion-row>\n      <ion-row>Subregion: {{ getLandByAlpha3Code(border).subregion }}</ion-row>\n      <ion-row>Hauptstadt: {{ getLandByAlpha3Code(border).capital }}</ion-row>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/checkbox/checkbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], CheckboxPage);
    return CheckboxPage;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChipPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
            selector: 'page-chip',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/chip/chip.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Chip Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-chip>\n    <ion-label>Default Chip</ion-label>\n  </ion-chip>\n    \n  <ion-chip>\n    <ion-label color="secondary">Color Label</ion-label>\n  </ion-chip>\n    \n  <ion-chip color="secondary">\n    <ion-label color="dark">Color Label und Chip</ion-label>\n  </ion-chip>\n    \n  <ion-chip>\n    <ion-icon name="ice-cream"></ion-icon>\n    <ion-label>Mit Icon</ion-label>\n  </ion-chip>\n  \n  <ion-chip>\n    <ion-icon name="ice-cream" color="secondary"></ion-icon>\n    <ion-label>Mit Color Icon</ion-label>\n  </ion-chip>\n  \n  <ion-chip>\n    <ion-icon name="ice-cream"></ion-icon>\n  </ion-chip>\n\n  <ion-chip color="nigger" (click)="showMessage()">\n    <ion-label color="white">Kann auch geklickt werden</ion-label>\n    <ion-icon name="ice-cream" color="secondary"></ion-icon>\n  </ion-chip>\n\n  <ion-row *ngIf="show">Überraschung</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/chip/chip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ChipPage);
    return ChipPage;
}());

//# sourceMappingURL=chip.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColAndConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
            selector: 'page-col-and-config',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/col-and-config/col-and-config.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Col und Config "Beispiel"</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <a href="https://ionicframework.com/docs/api/components/grid/Col/">Col</a>\n  <a href="https://ionicframework.com/docs/api/config/Config/">Config</a>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/col-and-config/col-and-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ColAndConfigPage);
    return ColAndConfigPage;
}());

//# sourceMappingURL=col-and-config.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
    ], ContentPage.prototype, "content", void 0);
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-content',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/content/content.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Content Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <button ion-button icon-left color="btnColor" (click)="toBottom()">\n      <ion-icon name="ice-cream"></ion-icon>\n      Zum Schluss\n    </button>\n  </ion-row>\n\n  <ion-list *ngFor="let land of laender">\n    <ion-item>{{ land.name }}</ion-item>\n  </ion-list>\n\n  <ion-row>\n    <button ion-button icon-left color="btnColor" (click)="toTop()">\n      <ion-icon name="ice-cream"></ion-icon>\n      Zum Start\n    </button>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/content/content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatetimePage = (function () {
    function DatetimePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDate4 = '2017-01-01';
        this.myDate5 = '2017-02-02';
        this.monthNames = [
            'Jänner Oida',
            'Februar Oida',
            'März Oida',
            'April Oida',
            'Mai Oida',
            'Juni Oida',
            'Juli Oida',
            'August Oida',
            'September Oida',
            'Oktober Oida',
            'November Oida',
            'Dezember Oida',
        ];
        this.monthNamesShort = [
            'JäO',
            'FeO',
            'MäO',
            'ApO',
            'MaO',
            'JuO',
            'JuO',
            'AuO',
            'SeO',
            'OkO',
            'NoO',
            'DeO',
        ];
        this.dayNames = [
            'Montag Oida',
            'Dienstag Oida',
            'Mittwoch Oida',
            'Donnerstag Oida',
            'Freitag Oida',
            'Sanstag Oida',
            'Sonntag Oida',
        ];
        this.dayNamesShort = [
            'MO Oida',
            'DI Oida',
            'MI Oida',
            'DO Oida',
            'FR Oida',
            'SA Oida',
            'SO Oida',
        ];
    }
    DatetimePage.prototype.ionViewDidLeave = function () {
        console.log(this.myDate1);
    };
    DatetimePage.prototype.canceled = function () {
        console.log('Datepicker gecanceled');
    };
    DatetimePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datetime',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/datetime/datetime.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Datetime Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="myDate1" placeholder="Datum auswählen"></ion-datetime>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Testdatum 2</ion-label>\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="myDate2"></ion-datetime>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>Testdatum 3</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY"\n                    [(ngModel)]="myDate3" \n                    cancelText="Abruch Abruch Abruch"\n                    doneText="Haben Fertig"\n                    (ionCancel)="canceled()"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Testdatum 4</ion-label>\n        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="myDate4" min="2016" max="2020-10-31"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Testdatum 4</ion-label>\n      <ion-datetime displayFormat="DDDD MMMM YYYY" \n                    [(ngModel)]="myDate4"\n                    min="2017"\n                    max="2019"\n                    [monthNames]="monthNames"\n                    [dayNames]="dayNames">\n      </ion-datetime>\n    </ion-item>\n\n    <ion-item>\n        <ion-label>Testdatum 5</ion-label>\n        <ion-datetime displayFormat="DDD MMM YYYY" \n                      [(ngModel)]="myDate5"\n                      min="2017"\n                      max="2019"\n                      [monthShortNames]="monthNamesShort"\n                      [dayShortNames]="dayNamesShort">\n        </ion-datetime>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/datetime/datetime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], DatetimePage);
    return DatetimePage;
}());

//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_sub_events_sub__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    EventsPage.prototype.buttonClicked = function () {
        this.events.publish('mein:input', this.myInput);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__events_sub_events_sub__["a" /* EventsSubPage */]);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/events/events.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Events Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-input  placeholder="Text eingeben"\n              stacked\n              value=""\n              [(ngModel)]="myInput">\n  </ion-input>\n\n  <ion-row>\n      <button ion-button icon-left color="btnColor" small (click)="buttonClicked()">\n        <ion-icon name="ice-cream"></ion-icon>\n        Ab zur nächsten Seite mit den Wert des Inputs\n      </button>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsSubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventsSubPage = (function () {
    function EventsSubPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.events.subscribe('mein:input', function (input) {
            console.log('Input Text war:', input);
        });
    }
    // Unsubscribe funktioniert nicht ...
    // Scheiß events
    // Besser this.navCtrl.push(Seite, data);
    EventsSubPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('mein:input', function (input) {
            console.log('unsubscribed');
        });
    };
    EventsSubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-sub',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/events-sub/events-sub.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ebents Sub Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  In Konsole schauen :)\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/events-sub/events-sub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], EventsSubPage);
    return EventsSubPage;
}());

//# sourceMappingURL=events-sub.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FabPage = (function () {
    function FabPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FabPage.prototype.ionViewDidLoad = function () {
    };
    FabPage.prototype.share = function (socialNet, fab) {
        // wenn man fab.close() aufruft benötigt man #fab 
        fab.close();
        // Toogling the list (not useful here)
        // fab.toggleList();
        console.log("Clicked:", socialNet);
    };
    FabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fab',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/fab/fab.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Fab Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-fab top right edge>\n    <button ion-fab color="primary" mini><ion-icon name="add"></ion-icon></button>\n    <ion-fab-list>\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>  \n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n    \n  <ion-fab right bottom>\n    <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n    <ion-fab-list side="left">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n   \n  <ion-fab left top>\n    <button ion-fab color="secondary"><ion-icon name="arrow-dropright"></ion-icon></button>\n    <ion-fab-list side="right">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  \n  <ion-fab left bottom>\n    <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n  \n  <ion-fab center middle>\n    <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="bottom">\n      <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="left">\n      <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n    </ion-fab-list>\n    <ion-fab-list side="right">\n      <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n   \n  <!-- wenn man fab.close() aufruft benötigt man #fab -->\n  <ion-fab #fab right middle>\n    <button ion-fab color="danger"><ion-icon name="ice-cream"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button ion-fab (click)="share(\'facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n      <button ion-fab (click)="share(\'twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/fab/fab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], FabPage);
    return FabPage;
}());

//# sourceMappingURL=fab.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GesturesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GesturesPage = (function () {
    function GesturesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.press = 0;
        this.pan = 0;
        this.swipe = 0;
        this.tap = 0;
        this.rotate = 0;
        this.pinch = 0;
    }
    GesturesPage.prototype.pressEvent = function (event) {
        console.log(event);
        this.press++;
    };
    GesturesPage.prototype.panEvent = function (event) {
        this.pan++;
    };
    GesturesPage.prototype.swipeEvent = function (event) {
        this.swipe++;
    };
    GesturesPage.prototype.tapEvent = function (event) {
        this.tap++;
    };
    GesturesPage.prototype.rotateEvent = function (event) {
        this.rotate++;
    };
    /*
    Keine Ahnung was pinched ist :D
    */
    GesturesPage.prototype.pinchEvent = function (event) {
        this.pinch++;
    };
    GesturesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gestures',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/gestures/gestures.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gestures Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card (tap)="tapEvent($event)"\n            (press)="pressEvent($event)"\n            (pan)="panEvent($event)"\n            (swipe)="swipeEvent($event)"\n            (rotate)="rotateEvent($event)"\n            (pinch)="pinchEvent($event)"\n            class="myCard">\n    <ion-item color="primary">\n      Tapped: {{tap}} times\n    </ion-item>\n    \n    <ion-item color="primary">\n      Pressed: {{press}} times\n    </ion-item>\n\n    <ion-item color="primary">\n      Panned: {{pan}} times\n    </ion-item>\n    \n    <ion-item color="primary">\n      Swiped: {{swipe}} times\n    </ion-item>\n    \n    <ion-item color="primary">\n      Rotated: {{rotate}} times\n    </ion-item>\n    \n    <ion-item color="primary">\n      Pinched: {{pinch}} times\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/gestures/gestures.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], GesturesPage);
    return GesturesPage;
}());

//# sourceMappingURL=gestures.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HapticPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HapticPage = (function () {
    function HapticPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HapticPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-haptic',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/haptic/haptic.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Haptic Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <a href="https://ionicframework.com/docs/api/tap-click/Haptic/">Haptic</a>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/haptic/haptic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], HapticPage);
    return HapticPage;
}());

//# sourceMappingURL=haptic.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideWhenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
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
 * Generated class for the HideWhenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HideWhenPage = (function () {
    function HideWhenPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HideWhenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HideWhenPage');
    };
    HideWhenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hide-when',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/hide-when/hide-when.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>HideWhen Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div hideWhen="android">\n    I am hidden on Android!\n  </div>\n       \n  <div hideWhen="ios">\n    I am hidden on iOS!\n  </div>\n       \n  <div hideWhen="android,ios">\n    I am hidden on Android and iOS!\n  </div>\n       \n  <div hideWhen="portrait">\n    I am hidden on Portrait!\n  </div>\n       \n  <div hideWhen="landscape">\n    I am hidden on Landscape!\n  </div>\n\n  <ion-icon name="logo-apple" hideWhen="android, windows">\n    Aktuelle Platform\n  </ion-icon>\n\n  <ion-icon name="logo-android" hideWhen="ios, windows">\n    Aktuelle Platform\n  </ion-icon>\n\n  <ion-icon name="logo-windows" hideWhen="android, ios">\n    Aktuelle Platform\n  </ion-icon>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/hide-when/hide-when.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], HideWhenPage);
    return HideWhenPage;
}());

//# sourceMappingURL=hide-when.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconPage = (function () {
    function IconPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myColor = 'primary';
    }
    IconPage.prototype.changeColor = function () {
        if (this.myColor === 'primary') {
            this.myColor = 'btnColor';
        }
        else {
            this.myColor = 'primary';
        }
    };
    IconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-icon',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/icon/icon.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Icon Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-icon name="ice-cream" \n            class="myIconSizedUp"\n            (click)="changeColor()" \n            [color]="myColor"> \n  </ion-icon>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/icon/icon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], IconPage);
    return IconPage;
}());

//# sourceMappingURL=icon.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImgPage = (function () {
    function ImgPage(navCtrl, navParams, laenderProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laenderProvider = laenderProvider;
        this.laenderProvider.getLaenderImages().subscribe(function (flaggen) {
            _this.flaggen = flaggen.filter(function (flagge) { return flagge.endsWith('r.svg'); });
        });
    }
    ImgPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImgPage');
    };
    ImgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-img',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/img/img.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Img Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-item *ngFor="let flagge of flaggen" color="nigger">\n    <ion-img  src="{{ flagge }}"\n              height="80"\n              width="160"\n              cache="true">\n    </ion-img>\n    <!-- fter an image has been successfully downloaded, it can be cached in-memory. \n    This is useful for VirtualScroll by allowing image responses to be cached, \n    and not rendered, until after scrolling has completed, which allows for smoother scrolling. -->\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/img/img.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ImgPage);
    return ImgPage;
}());

//# sourceMappingURL=img.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScrollPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfiniteScrollPage = (function () {
    function InfiniteScrollPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfiniteScrollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-infinite-scroll',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/infinite-scroll/infinite-scroll.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Infinite Scroll Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>Finde ich nicht recht schön</p>\n\n  <a href="https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/">Infinite Scroll</a>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/infinite-scroll/infinite-scroll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], InfiniteScrollPage);
    return InfiniteScrollPage;
}());

//# sourceMappingURL=infinite-scroll.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemPage = (function () {
    function ItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ItemPage.prototype.buttonClick = function () { };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/item/item.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Item Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>Buttons und Links die klickbar sind sollten einen Pfeil haben</ion-row>\n\n  <ion-row>Item wird meistens in Liste verwendet</ion-row>\n\n  <ion-item>\n    Item\n  </ion-item>\n\n  <ion-list-header>\n    List Header\n  </ion-list-header>\n\n  <ion-item-divider>\n    Item Divider\n  </ion-item-divider>\n\n  <button ion-item (click)="buttonClick()">\n    Button Item\n  </button>\n\n  <a ion-item href="https://www.ionicframework.com">\n    Link Item\n  </a>\n\n  <ion-item detail-push>\n    Item with Detail Arrow\n  </ion-item>\n\n  <button ion-item detail-none (click)="buttonClick()">\n    Button Item with no Detail Arrow\n  </button>\n\n  <ion-item no-lines>\n    Item with no border\n  </ion-item>\n\n  <ion-item text-wrap>\n    Multiline text that should wrap when it is too long to fit on one line in the item.\n  </ion-item>\n\n  <ion-item>\n    <ion-label>\n      Item Label\n    </ion-label>\n    <div item-content>\n      Item Content next to the label\n    </div>\n  </ion-item>\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/item/item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemRecorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemRecorderPage = (function () {
    function ItemRecorderPage(navCtrl, navParams, laenderProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.laenderProvider = laenderProvider;
        this.laenderProvider.getLaender().subscribe(function (laender) {
            _this.items = laender.filter(function (land) { return land.name.startsWith('D'); });
            _this.items1 = laender.filter(function (land) { return land.name.startsWith('D'); });
            _this.items2 = laender.filter(function (land) { return land.name.startsWith('D'); });
        });
    }
    ItemRecorderPage.prototype.reorderItems = function (indexes) {
        var element = this.items[indexes.from];
        this.items.splice(indexes.from, 1);
        this.items.splice(indexes.to, 0, element);
    };
    ItemRecorderPage.prototype.reorderItems2 = function (indexes) {
        this.items1 = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* reorderArray */])(this.items1, indexes);
    };
    ItemRecorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-recorder',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/item-recorder/item-recorder.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Item Recorder Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-list-header>Header</ion-list-header>\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">\n      <ion-item *ngFor="let item of items">{{ item.name }}</ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Header 1</ion-list-header>\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems2($event)">\n      <ion-item *ngFor="let item of items1">{{ item.name }}</ion-item>\n    </ion-item-group>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>Header 2</ion-list-header>\n    <ion-item-group reorder="true" (ionItemReorder)="$event.applyTo(items2)">\n      <ion-item *ngFor="let item of items2">{{ item.name }}</ion-item>\n    </ion-item-group>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/item-recorder/item-recorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ItemRecorderPage);
    return ItemRecorderPage;
}());

//# sourceMappingURL=item-recorder.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeyboardPage = (function () {
    function KeyboardPage(navCtrl, navParams, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
        this.nachricht = "";
        this.nachricht1 = "";
        this.nachricht2 = "";
        this.keyboard.onClose(this.closeCallback());
        this.keyboard.hideFormAccessoryBar(false);
    }
    KeyboardPage.prototype.closeCallback = function () {
        this.nachricht = 'Funktionalität die vor dem Schließen des Keyboards ausgeführt werden soll';
    };
    KeyboardPage.prototype.closeKeyboard = function () {
        if (this.keyboard.isOpen()) {
            this.nachricht1 = 'Keyboard ist offen und wird geschlossen';
            this.keyboard.close();
        }
        else {
            this.nachricht2 = 'Keyboard ist nicht offen und kann deshalb nicht geschlossen werden';
        }
    };
    KeyboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-keyboard',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/keyboard/keyboard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Keyboard Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-input type="text" placeholder="nur zum öffnen des Keyboards"></ion-input>\n\n  <button ion-button outline (click)="closeKeyboard()">Keyboard schließen</button>\n\n  <ion-row>\n    {{ nachricht }}\n  </ion-row>\n  <ion-row>\n    {{ nachricht1 }}\n  </ion-row>\n  <ion-row>\n    {{ nachricht2 }}\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/keyboard/keyboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */]])
    ], KeyboardPage);
    return KeyboardPage;
}());

//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LabelPage = (function () {
    function LabelPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LabelPage.prototype.goToInputPage = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__input_input__["a" /* InputPage */]);
    };
    LabelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-label',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/label/label.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Label Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button (click)="goToInputPage()">Siehe Input</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/label/label.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], LabelPage);
    return LabelPage;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingPage = (function () {
    function LoadingPage(navCtrl, navParams, loadingCtrl, laenderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.laenderProvider = laenderProvider;
    }
    LoadingPage.prototype.ionViewDidLoad = function () {
        var loader = this.loadingCtrl.create({
            content: "Sachen machen............. Bitte warten...",
            duration: 3000,
        });
        loader.present();
    };
    LoadingPage.prototype.backendCall = function () {
        var loader = this.loadingCtrl.create({
            content: "Sachen laden",
        });
        loader.present();
        this.laenderProvider.getLaender().subscribe(function (laender) {
            loader.dismiss();
        });
    };
    LoadingPage.prototype.spinner1 = function () {
        var loader = this.loadingCtrl.create({
            duration: 2000,
            spinner: 'ios'
        });
        loader.present();
    };
    LoadingPage.prototype.spinner2 = function () {
        var loader = this.loadingCtrl.create({
            duration: 2000,
            spinner: 'ios-small'
        });
        loader.present();
    };
    LoadingPage.prototype.spinner3 = function () {
        var loader = this.loadingCtrl.create({
            duration: 3000,
            spinner: 'bubbles'
        });
        loader.present();
    };
    LoadingPage.prototype.spinner4 = function () {
        var loader = this.loadingCtrl.create({
            duration: 2000,
            spinner: 'circles'
        });
        loader.present();
    };
    LoadingPage.prototype.spinner5 = function () {
        var loader = this.loadingCtrl.create({
            duration: 2000,
            spinner: 'crescent'
        });
        loader.present();
    };
    LoadingPage.prototype.spinner6 = function () {
        var loader = this.loadingCtrl.create({
            duration: 2000,
            spinner: 'dots'
        });
        loader.present();
    };
    LoadingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loading',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/loading/loading.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Loading Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <button ion-button outline btnColor (click)="backendCall()">Sachen machen</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button outline btnColor (click)="spinner1()">Ios</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button outline btnColor (click)="spinner2()">Ios-small</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button outline btnColor (click)="spinner3()">bubbles</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button outline btnColor (click)="spinner4()">circles</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button outline btnColor (click)="spinner5()">crescent</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button outline btnColor (click)="spinner6()">Dots</button>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/loading/loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_example1_modal_example1__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_example2_modal_example2__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.data = {
            id: '123',
            vorname: 'Max',
            nachname: 'Mustermann'
        };
        this.historie = [];
    }
    ModalPage.prototype.openModal = function () {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modal_example1_modal_example1__["a" /* ModalExample1Page */]);
        profileModal.present();
    };
    ModalPage.prototype.openModalWithParams = function () {
        var _this = this;
        var example2Modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__modal_example2_modal_example2__["a" /* ModalExample2Page */], { data: this.data });
        example2Modal.onWillDismiss(function (data) {
            console.log('Gleich schließ ich mich ...');
        });
        example2Modal.onDidDismiss(function (data) {
            console.log(data);
            if (data) {
                _this.data = data.daten;
                _this.historie.push(data.letzter ? 'Der Vorname war: ' + data.letzter : 'Der Vorname war leer');
                _this.historie.push(_this.data.vorname ? 'Der Vorname ist jetzt: ' + _this.data.vorname : 'Der Vorname wurde gelöscht');
            }
        });
        example2Modal.present();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/modal/modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Modal Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <button ion-button color="btnColor" outline (click)="openModal()">Modal öffnen</button>\n  </ion-row>\n\n  <ion-row>\n    <button ion-button color="btnColor" outline (click)="openModalWithParams()">Modal mit Params öffnen</button>\n  </ion-row>\n  <ion-row>Hier werden die Daten: id, vorname, nachname an den Modal übergeben</ion-row>\n  <ion-row>Id: {{data.id}}</ion-row>\n  <ion-row>\n    <ion-label>Vorname: {{data.vorname}}</ion-label>\n  </ion-row>\n  <ion-row>Nachname: {{data.nachname}}</ion-row>\n\n  <ion-row>Der Modal ändert den Vornamen beim Speichern Button</ion-row>\n\n\n  <ion-list>\n    <ion-list-header>\n      Historie der Vornamen\n    </ion-list-header>\n    <ion-item *ngFor="let vornamenHistorie of historie">{{ vornamenHistorie }}</ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/modal/modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalExample1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalExample1Page = (function () {
    function ModalExample1Page(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ModalExample1Page.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalExample1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-example1',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/modal-example1/modal-example1.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Modal 1</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="closeModal()">schließen</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  Hallo i bims 1 Modal\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/modal-example1/modal-example1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ModalExample1Page);
    return ModalExample1Page;
}());

//# sourceMappingURL=modal-example1.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaenderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
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
    LaenderProvider.prototype.getLaenderImages = function () {
        return this.httpClient.get('https://restcountries.eu/rest/v2/regionalbloc/eu')
            .do(this._logResponse)
            .map(this._mapDataToLaenderImages)
            .catch(this._throwError);
    };
    LaenderProvider.prototype._logResponse = function (res) {
        console.log('Response: ', res);
    };
    LaenderProvider.prototype._mapDataToLaender = function (res) {
        return res;
    };
    LaenderProvider.prototype._mapDataToLaenderImages = function (res) {
        return res.map(function (res) { return res.flag; });
    };
    LaenderProvider.prototype._throwError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('Server error');
    };
    LaenderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], LaenderProvider);
    return LaenderProvider;
}());

//# sourceMappingURL=laender.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalExample2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalExample2Page = (function () {
    function ModalExample2Page(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.daten = navParams.get('data');
    }
    ModalExample2Page.prototype.vornameAendern = function () {
        var vorherigerVorname = this.daten.vorname;
        this.daten.vorname = this.vorname;
        this.viewCtrl.dismiss({ daten: this.daten, letzter: vorherigerVorname });
    };
    ModalExample2Page.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalExample2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-example2',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/modal-example2/modal-example2.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Modal 2</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">abbrechen</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-input type="text" placeholder="Vornamen ändern" [(ngModel)]="vorname"></ion-input>\n\n  <button ion-button (click)="vornameAendern()">Vorname ändern</button>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/modal-example2/modal-example2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]])
    ], ModalExample2Page);
    return ModalExample2Page;
}());

//# sourceMappingURL=modal-example2.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavPage = (function () {
    function NavPage() {
    }
    NavPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nav',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/nav/nav.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nav Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/components/nav/Nav/">Nav</a>\n  </ion-row>\n  <br>\n  <br>\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/components/toolbar/Navbar/">Navbar</a>\n  </ion-row>\n  <br>\n  <br>\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/navigation/NavController/">NavController</a>\n  </ion-row>\n  <br>\n  <br>\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/navigation/NavParams/">NavParams</a>\n  </ion-row>\n  <br>\n  <br>\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/components/nav/NavPop/">NavPop</a>\n  </ion-row>\n  <br>\n  <br>\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/components/nav/NavPush/">NavPush</a>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/nav/nav.html"*/,
        })
    ], NavPage);
    return NavPage;
}());

//# sourceMappingURL=nav.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectPage = (function () {
    function SelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectPage');
    };
    SelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/select/select.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>select</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <a href="https://ionicframework.com/docs/api/components/option/Option/">Option nicht vergessen</a>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/select/select.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SelectPage);
    return SelectPage;
}());

//# sourceMappingURL=select.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotePage = (function () {
    function NotePage() {
    }
    NotePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-note',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/note/note.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Note Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-note item-start>\n        Note links\n      </ion-note>\n      Mein Item\n      <ion-note item-end>\n        Note rechts\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-note>Normales Note ohne Liste</ion-note>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/note/note.html"*/,
        })
    ], NotePage);
    return NotePage;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlatformPage = (function () {
    function PlatformPage(navCtrl, navParams, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.dir = this.platform.dir();
        this.height = this.platform.height();
        this.width = this.platform.width();
        this.android = this.platform.is('android');
        this.ios = this.platform.is('ios');
        this.ipad = this.platform.is('ipad');
        this.iphone = this.platform.is('iphone');
        this.mobile = this.platform.is('mobile');
        this.mobileweb = this.platform.is('mobileweb'); // browser of a mobile device
        this.phablet = this.platform.is('phablet');
        this.tablet = this.platform.is('tablet');
        this.windows = this.platform.is('windows');
        this.core = this.platform.is('core'); // desktop
        this.cordova = this.platform.is('cordova');
        this.landscape = this.platform.isLandscape();
        this.portrait = this.platform.isPortrait();
        this.lang = this.platform.lang();
        this.platforms = this.platform.platforms();
        this.url = this.platform.url();
        console.log(this.platform.versions());
        // Wenn app in den Hintergrund kommt (z.B.: eine andere App öffnet sich)
        this.platform.pause.subscribe(function (e) {
            console.log(e);
        });
        // App kommt wieder hoch
        this.platform.resume.subscribe(function (e) {
        });
    }
    PlatformPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-platform',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/platform/platform.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Platform Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-col col-5>dir():</ion-col>\n    <ion-col col-7>{{ dir }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>width():</ion-col>\n    <ion-col col-7>{{ width }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>height():</ion-col>\n    <ion-col col-7>{{ height }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'android\'):</ion-col>\n    <ion-col col-7>{{ android }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'ios\'):</ion-col>\n    <ion-col col-7>{{ ios }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'ipad\'):</ion-col>\n    <ion-col col-7>{{ ipad }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'iphone\'):</ion-col>\n    <ion-col col-7>{{ iphone }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'mobile\'):</ion-col>\n    <ion-col col-7>{{ mobile }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'mobileweb\'):</ion-col>\n    <ion-col col-7>{{ mobileweb }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'phablet\'):</ion-col>\n    <ion-col col-7>{{ phablet }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'tablet\'):</ion-col>\n    <ion-col col-7>{{ tablet }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'windows\'):</ion-col>\n    <ion-col col-7>{{ windows }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'core\'):</ion-col>\n    <ion-col col-7>{{ core }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>is(\'cordova\'):</ion-col>\n    <ion-col col-7>{{ cordova }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>isLandscape():</ion-col>\n    <ion-col col-7>{{ landscape }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>isPortrait():</ion-col>\n    <ion-col col-7>{{ portrait }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>lang():</ion-col>\n    <ion-col col-7>{{ lang }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>platforms():</ion-col>\n    <ion-col col-7>returns all active platforms z.B.: ios, iphone and mobile</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>ready():</ion-col>\n    <ion-col col-7>\n      <a href="https://ionicframework.com/docs/api/platform/Platform/#ready">siehe Ready</a>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>registerBackButtonAction(fn, priority):</ion-col>\n    <ion-col col-7>Funktion (fn) wird ausgeführt, wenn der \'Hardware\' Back Button gedrückt wird (nur android und windows). Default Priority\n      0. Nur die höchste wird ausgeführt</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>registerBackButtonAction(fn, priority):</ion-col>\n    <ion-col col-7>Funktion (fn) wird ausgeführt, wenn der \'Hardware\' Back Button gedrückt wird (nur android und windows). Default Priority\n      0. Nur die höchste wird ausgeführt</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>setDir(dir, updateDocument):</ion-col>\n    <ion-col col-7>rtl oder ltr und true oder false</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>setLang(language, updateDocument):</ion-col>\n    <ion-col col-7>z.B.: de oder en-GB und true oder false</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>url():</ion-col>\n    <ion-col col-7>{{ url }}</ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5>versions():</ion-col>\n    <ion-col col-7>siehe console</ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/platform/platform.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */]])
    ], PlatformPage);
    return PlatformPage;
}());

//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformConfigTokenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlatformConfigTokenPage = (function () {
    function PlatformConfigTokenPage() {
    }
    PlatformConfigTokenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-platform-config-token',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/platform-config-token/platform-config-token.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PlatformConfigToken Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>Keine Ahnung was das sein soll ...</ion-row>\n\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/platform/PlatformConfigToken/">PlatformConfigToken</a>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/platform-config-token/platform-config-token.html"*/,
        })
    ], PlatformConfigTokenPage);
    return PlatformConfigTokenPage;
}());

//# sourceMappingURL=platform-config-token.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popover_example_popover_example__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = (function () {
    function PopoverPage(navCtrl, navParams, popoverCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.myColor = 'primary';
    }
    PopoverPage.prototype.presentPopover = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__components_popover_example_popover_example__["a" /* PopoverExampleComponent */], { data: this.myColor });
        popover.onDidDismiss(function (data) {
            if (data && data.color) {
                _this.myColor = data.color;
            }
            if (data && data.sameColor) {
                var warningToast = _this.toastCtrl.create({
                    message: data.sameColor,
                    position: 'bottom',
                    cssClass: 'warnungToast',
                    duration: 2000
                });
                warningToast.present();
            }
        });
        popover.present({
            ev: myEvent
        });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/popover/popover.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Popover Beispiel</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list >\n    <ion-item [color]="myColor">Item 1</ion-item>\n    <ion-item>Item 2</ion-item>\n    <ion-item [color]="myColor">Item 3</ion-item>\n    <ion-item>Item 4</ion-item>\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/popover/popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverExampleComponent = (function () {
    function PopoverExampleComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.color = this.navParams.get('data');
    }
    PopoverExampleComponent.prototype.save = function (color) {
        if (this.color === color) {
            this.viewCtrl.dismiss({ sameColor: 'Die Farbe ' + color + ' ist schon gesetzt!' });
        }
        else {
            this.color = color;
            this.viewCtrl.dismiss({ color: this.color });
        }
    };
    // Eigentlich sollte ein Popover gar keinen Close Button haben
    PopoverExampleComponent.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover-example',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/components/popover-example/popover-example.html"*/'<ion-item-group>\n  <ion-item-divider></ion-item-divider>\n  <ion-row (click)="save(\'secondary\')" align-self-center>\n    <ion-col offset-2 col-6>\n      <ion-label>Secondary</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <div class="secondaryCircle"></div>\n    </ion-col>\n  </ion-row>\n\n  <ion-item-divider></ion-item-divider>\n  <ion-row (click)="save(\'danger\')">\n    <ion-col offset-2 col-6>\n      <ion-label>Danger</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <div class="dangerCircle"></div>\n    </ion-col>\n  </ion-row>\n\n  <ion-item-divider></ion-item-divider>\n  <ion-row (click)="save(\'nigger\')">\n    <ion-col offset-2 col-6>\n      <ion-label>Nigger</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <div class="niggerCircle"></div>\n    </ion-col>\n  </ion-row>\n\n  <ion-item-divider></ion-item-divider>\n  <ion-row (click)="save(\'primary\')">\n    <ion-col offset-2 col-6>\n      <ion-label>Primary</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <div class="primaryCircle"></div>\n    </ion-col>\n  </ion-row>\n\n  <ion-item-divider></ion-item-divider>\n  <ion-row (click)="close()">\n    <ion-col offset-2 col-6>\n      <ion-label>Abbrechen</ion-label>\n    </ion-col>\n    <ion-col col-2>\n      <ion-icon class="largeClose_icon" name="close"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-item-group>\n\n<!-- nicht so fancy :) -->\n<!-- <ion-list>\n  <ion-list-header>Farben ändern</ion-list-header>\n  <button ion-item (click)="save(\'secondary\')">Secondary</button>\n  <button ion-item (click)="save(\'danger\')">Danger</button>\n  <button ion-item (click)="save(\'nigger\')">Nigger</button>\n  <button ion-item (click)="save(\'primary\')">Primary</button>\n  <button ion-item (click)="close()">Abbrechen</button>\n</ion-list> -->'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/components/popover-example/popover-example.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], PopoverExampleComponent);
    return PopoverExampleComponent;
}());

//# sourceMappingURL=popover-example.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioPage = (function () {
    function RadioPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            {
                label: 'bla',
                value: 'bla1',
                checked: true
            },
            {
                label: 'foo',
                value: 'foo1',
                checked: false
            }
        ];
    }
    RadioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-radio',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/radio/radio.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Radio Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list radio-group>\n    <ion-list-header>\n      Einfache Radio Buttons\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Radio 1 ist default checked</ion-label>\n      <ion-radio checked="true" value="value1"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Radio 2</ion-label>\n      <ion-radio value="value2"></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Radio 3 ist disabled</ion-label>\n      <ion-radio value="value3" disabled="true"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/radio/radio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], RadioPage);
    return RadioPage;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioGroupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RadioGroupPage = (function () {
    function RadioGroupPage() {
        this.spracheForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            "sprache": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]({ value: 'java', disabled: false })
        });
    }
    RadioGroupPage.prototype.selectionChanged = function (item) {
        console.log('Selektierter Wert: ', item);
    };
    RadioGroupPage.prototype.getSelected = function (sprache) {
        return this.spracheForm.get('sprache').value === sprache;
    };
    RadioGroupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-radio-group',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/radio-group/radio-group.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>RadioGroup Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="spracheForm">\n    <ion-list radio-group formControlName="sprache" (ionChange)="selectionChanged($event)">\n\n      <ion-list-header>\n        Sprachen\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Java</ion-label>\n        <ion-radio value="java" checked="true"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>C++</ion-label>\n        <ion-radio value="cPlusPlus"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Python</ion-label>\n        <ion-radio value="python"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>C</ion-label>\n        <ion-radio value="c"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <img src="https://i.imgur.com/OzGlXoP.jpg" *ngIf="getSelected(\'java\')">\n    <img src="https://i.ytimg.com/vi/-HE9Dj9WuuY/maxresdefault.jpg" *ngIf="getSelected(\'cPlusPlus\')">\n    <img src="https://qph.fs.quoracdn.net/main-qimg-6aacbbc7aab3db69e8945ce5ae5fb18b" *ngIf="getSelected(\'python\')">\n    <img src="http://ds.arm.com/media/uploads/Working_With_ARM_DS5/Download-install-License/hello_world.c.png" *ngIf="getSelected(\'c\')">\n\n    \n  </form>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/radio-group/radio-group.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], RadioGroupPage);
    return RadioGroupPage;
}());

//# sourceMappingURL=radio-group.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RangePage = (function () {
    function RangePage() {
        this.brightness = 20;
        this.contrast = 0;
        this.warmth = 1300;
        this.structure = { lower: 33, upper: 60 };
        this.fontSize = 14;
        this.meinText = 'Mein Text';
    }
    RangePage.prototype.rangeChanged = function (item) {
        if (item.value === 22) {
            item.color = 'danger';
        }
        else {
            item.color = 'primary';
        }
    };
    RangePage.prototype.log = function (item) {
        console.log(item);
        console.log(item.value);
    };
    RangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-range',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/range/range.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Range Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-badge item-start color="btnColor">{{ brightness }}</ion-badge>\n      <ion-range [(ngModel)]="brightness">\n        <ion-icon range-left small name="sunny"></ion-icon>\n        <ion-icon range-right name="sunny"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-badge item-start color="btnColor">{{ contrast }}</ion-badge>\n      <ion-range min="-200" max="200" pin="true" [(ngModel)]="contrast" color="secondary">\n        <ion-icon range-left small name="contrast"></ion-icon>\n        <ion-icon range-right name="contrast"></ion-icon>\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-badge item-start color="btnColor">{{ structure.lower }}</ion-badge>\n      <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark">\n        <ion-icon range-left small name="brush"></ion-icon>\n        <ion-icon range-right name="brush"></ion-icon>\n      </ion-range>\n      <ion-badge item-end color="btnColor">{{ structure.upper }}</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-badge item-start color="btnColor">{{ warmth }}</ion-badge>\n      <ion-range min="1000" max="2000" step="100" snaps="true" [(ngModel)]="warmth" color="danger">\n        <ion-icon range-left small color="danger" name="thermometer"></ion-icon>\n        <ion-icon range-right color="danger" name="thermometer"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-badge item-start color="btnColor">{{ fontSize }}</ion-badge>\n      <ion-range  min="10" \n                  max="22" \n                  step="2" \n                  snaps="true" \n                  [(ngModel)]="fontSize" \n                  debounce="1000"\n                  (ionChange)="rangeChanged($event)" \n                  (ionBlur)="log($event)">\n        <ion-label range-left>Klein</ion-label>\n        <ion-label range-right>Groß</ion-label>\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-label [ngStyle]="{\'font-size\': fontSize+\'px\' }">{{ meinText }}</ion-label>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/range/range.html"*/,
        })
    ], RangePage);
    return RangePage;
}());

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefresherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_benutzer_benutzer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RefresherPage = (function () {
    function RefresherPage(benutzerProvider, toastCtrl) {
        this.benutzerProvider = benutzerProvider;
        this.toastCtrl = toastCtrl;
        this.max = 0;
    }
    RefresherPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.benutzerProvider.getBenutzer().subscribe(function (benutzer) {
            _this.benutzerList = benutzer.slice(0, 2);
        });
    };
    RefresherPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        console.log(refresher);
        if (this.max >= 5) {
            this._presentToast();
            refresher.cancel();
        }
        else {
            this.benutzerProvider.getBenutzer().subscribe(function (benutzer) {
                _this.benutzerList = _this.benutzerList.concat(benutzer.slice(0, 1));
                _this.max++;
                refresher.complete();
            });
        }
        /*
        Refreher States:
          inactive    -   The refresher is not being pulled down or refreshing and is currently hidden.
          pulling     -   The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it’ll refresh.
          cancelling  -   The user pulled down the refresher and let go, but did not pull down far enough to kick off the refreshing state.
                          After letting go, the refresher is in the cancelling state while it is closing,
                          and will go back to the inactive state once closed.
          ready       -   The user has pulled down the refresher far enough that if they let go, it’ll begin the refreshing state.
          refreshing  -   The refresher is actively waiting on the async operation to end. Once the refresh handler calls complete()
                          it will begin the completing state.
          completing  -   The refreshing state has finished and the refresher is in the process of closing itself. Once closed,
                          the refresher will go back to the inactive state.
        */
    };
    RefresherPage.prototype._presentToast = function () {
        var haltStopToast = this.toastCtrl.create({
            message: 'Halt Stop! Genug akutalisiert',
            position: 'bottom',
            cssClass: 'warnungToast',
            duration: 2000
        });
        haltStopToast.present();
    };
    RefresherPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-refresher',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/refresher/refresher.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Refresher Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)" *ngIf="max <= 5">\n    <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Runter ziehen zum aktualisieren" refreshingSpinner="bubbles"\n      refreshingText="Aktualisieren...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list inset>\n    <ion-list-header>\n      5x darfst du ziehen\n    </ion-list-header>\n    <ion-item *ngFor="let benutzer of benutzerList">\n      <ion-avatar item-left>\n        <img src="{{ benutzer.picture.thumbnail }}">\n      </ion-avatar>\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n    </ion-item>\n  </ion-list>\n\n  <!-- \n    pullingIcon Property kann alle ionic-items anzeigen\n    \n    refreshingSpinner Property kann folgende Werte haben (so wie ion-spinner):\n        ios	\n        ios-small	\n        bubbles	\n        circles	\n        crescent	\n        dots\n  -->\n\n  <a href="https://ionicframework.com/docs/api/components/refresher/Refresher/#input-properties">Input und Output Properties</a>\n\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/refresher/refresher.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */]])
    ], RefresherPage);
    return RefresherPage;
}());

//# sourceMappingURL=refresher.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterModeConfigsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RegisterModeConfigsPage = (function () {
    function RegisterModeConfigsPage() {
    }
    RegisterModeConfigsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register-mode-configs',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/register-mode-configs/register-mode-configs.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>RegisterModeConfigs Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>Keine Ahnung was das sein soll ...</ion-row>\n\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/config/registerModeConfigs/">RegisterModeConfigs</a>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/register-mode-configs/register-mode-configs.html"*/,
        })
    ], RegisterModeConfigsPage);
    return RegisterModeConfigsPage;
}());

//# sourceMappingURL=register-mode-configs.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_grid__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RowPage = (function () {
    function RowPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RowPage.prototype.goToGrid = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__grid_grid__["a" /* GridPage */]);
    };
    RowPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-row',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/row/row.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Row Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <a href="https://ionicframework.com/docs/api/components/grid/Row/">Row Properties</a>\n  </ion-row>\n  <br>\n  <br>\n  <ion-row>\n    <button ion-button outline (click)="goToGrid()">siehe Grid</button>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/row/row.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], RowPage);
    return RowPage;
}());

//# sourceMappingURL=row.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicMyPageModule", function() { return IonicMyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_my__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IonicMyPageModule = (function () {
    function IonicMyPageModule() {
    }
    IonicMyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_my__["a" /* IonicMyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ionic_my__["a" /* IonicMyPage */]),
            ],
        })
    ], IonicMyPageModule);
    return IonicMyPageModule;
}());

//# sourceMappingURL=ionic-my.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_termin_termin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__termin_erstellung_termin_erstellung__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__termin_bearbeitung_termin_bearbeitung__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_person_person__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TerminPage = (function () {
    function TerminPage(navCtrl, navParams, toastCtrl, alertCtrl, terminProvider, personProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.terminProvider = terminProvider;
        this.personProvider = personProvider;
    }
    TerminPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.terminProvider.getTermine().subscribe(function (termine) {
            console.log('Das sind alle Termine: ', termine);
            _this.termine = termine;
        });
    };
    TerminPage.prototype.goToTerminErstellung = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__termin_erstellung_termin_erstellung__["a" /* TerminErstellungPage */]);
    };
    TerminPage.prototype.goToTerminBearbeitung = function (termin) {
        var _this = this;
        this.personProvider.getPersonenSelect().subscribe(function (personen) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__termin_bearbeitung_termin_bearbeitung__["a" /* TerminBearbeitungPage */], { termin: termin, personen: personen });
        });
    };
    TerminPage.prototype.showConfirmation = function (id) {
        this.showDeleteConfirmation(id);
    };
    TerminPage.prototype.showDeleteConfirmation = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Termin wird gelöscht',
            message: 'Wollen Sie den Termin wirklich löschen',
            buttons: [
                {
                    text: 'Ja',
                    handler: function () {
                        _this.terminLoeschen(id);
                    }
                },
                {
                    text: 'Nein',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    TerminPage.prototype.terminLoeschen = function (id) {
        var _this = this;
        var termin = this.termine.find(function (termin) { return termin.id === id; });
        this.terminProvider.terminLoeschen(id).subscribe(function (termine) {
            _this.termine = termine;
            var deleteToast = _this.toastCtrl.create({
                message: termin.bezeichnung + ' wurde erfolgreich gelöscht',
                position: 'top',
                cssClass: 'erfolgreichToast',
                duration: 2000
            });
            deleteToast.present();
        });
    };
    TerminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termin',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/termin/termin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Termine</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col offset-3>\n      <button ion-button icon-right color="primary" (click)="goToTerminErstellung()">\n        Termin anlegen\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item *ngFor="let termin of termine">\n      <ion-list-header>\n        <ion-row>\n          <ion-col col-1>\n            <ion-icon name="calendar"></ion-icon>\n          </ion-col>\n          <ion-col col-11>\n            {{ termin.id }} {{ termin.bezeichnung }}\n          </ion-col>\n        </ion-row>\n      </ion-list-header>\n      <ion-row>\n        <ion-list>\n          <ion-list-header>\n            Beteiligte Personen\n          </ion-list-header>\n          <ion-item *ngFor="let personen of termin.beteiligtePersonen">{{personen.label}}</ion-item>\n        </ion-list>\n      </ion-row>\n      <ion-row>\n        <ion-item>Zeitpunkt: {{ termin.zeitpunkt | date:\'dd.MM.yyyy HH:mm\'}}</ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button icon-right color="primary" (click)="goToTerminBearbeitung(termin)" mini>\n            Bearbeiten\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button icon-right color="primary" (click)="showConfirmation(termin.id)" mini>\n            Löschen\n            <ion-icon name="trash"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/termin/termin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_termin_termin__["a" /* TerminProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_person_person__["a" /* PersonProvider */]])
    ], TerminPage);
    return TerminPage;
}());

//# sourceMappingURL=termin.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpConstants; });
var HttpConstants = (function () {
    function HttpConstants() {
    }
    HttpConstants.LOCALHOST_API = 'http://localhost:8080/dr-solutions/rest/';
    HttpConstants.RENES_IP_API = 'http://192.168.1.9:8080/dr-solutions/rest/';
    return HttpConstants;
}());

//# sourceMappingURL=httpConstants.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminErstellungPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_termin_termin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_person_person__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TerminErstellungPage = (function () {
    function TerminErstellungPage(navCtrl, navParams, toastCtrl, formBuilder, terminProvider, personProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.terminProvider = terminProvider;
        this.personProvider = personProvider;
        this.personProvider.getPersonenSelect().subscribe(function (personen) {
            _this.personen = personen;
        });
        this.terminErstellungsForm = formBuilder.group({
            bezeichnung: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            beiteiligtePersonen: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            zeitpunkt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
    }
    TerminErstellungPage.prototype.submitTerminErstellungs = function () {
        var _this = this;
        if (this.terminErstellungsForm.valid) {
            var bezeichnung = this.terminErstellungsForm.get('bezeichnung').value;
            var beteiligte = this.terminErstellungsForm.get('beiteiligtePersonen').value;
            var zeitpunkt = this.terminErstellungsForm.get('zeitpunkt').value;
            var termin_1 = {
                'bezeichnung': bezeichnung,
                'beteiligtePersonen': beteiligte,
                'zeitpunkt': zeitpunkt
            };
            this.terminProvider.terminErstellen(termin_1).subscribe(function (termine) {
                console.log(termine);
                _this.navCtrl.pop();
                var createToast = _this.toastCtrl.create({
                    message: termin_1.bezeichnung + ' wurde erfolgreich erstellt',
                    position: 'bottom',
                    cssClass: 'erfolgreichToast',
                    duration: 2000
                });
                createToast.present();
            });
        }
    };
    TerminErstellungPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termin-erstellung',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/termin-erstellung/termin-erstellung.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Termin Erstellung</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      Termin erstellen\n    </ion-card-header>\n    <ion-card-content>\n      <form (submit)="submitTerminErstellungs()" [formGroup]="terminErstellungsForm">\n        <ion-list>\n          <ion-item>\n            <ion-label for="bezeichnung" floating>Bezeichnung</ion-label>\n            <ion-input formControlName="bezeichnung" type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label for="beiteiligtePersonen" floating>Beteiligte</ion-label>\n            <ion-select formControlName="beiteiligtePersonen" multiple="true">\n              <ion-option *ngFor="let beteiligtePerson of personen" \n                          [value]="beteiligtePerson.value" \n                          [selected]="beteiligtePerson.selected">\n                {{ beteiligtePerson.label }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-datetime displayFormat="DD.MM.YYYY HH:mm" pickerFormat="DD.MM.YYYY HH:mm" formControlName="zeitpunkt" placeholder="Zeitpunkt auswählen" min="2012"\n              cancelText="Abbrechen" doneText="Zeitpunkt übernehmen"></ion-datetime>\n          </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="!terminErstellungsForm.valid">\n          Termin erstellen\n        </button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/termin-erstellung/termin-erstellung.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_termin_termin__["a" /* TerminProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_person_person__["a" /* PersonProvider */]])
    ], TerminErstellungPage);
    return TerminErstellungPage;
}());

//# sourceMappingURL=termin-erstellung.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminBearbeitungPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_termin_termin__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminBearbeitungPage = (function () {
    function TerminBearbeitungPage(navCtrl, toastCtrl, formBuilder, navParams, terminProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.terminProvider = terminProvider;
        this.termin = this.navParams.get('termin');
        this.personen = this.navParams.get('personen');
        this.terminBearbeitungsForm = formBuilder.group({
            bezeichnung: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            beiteiligtePersonen: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            zeitpunkt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        if (this.personen) {
            this.terminBearbeitungsForm.patchValue({ 'bezeichnung': this.termin.bezeichnung });
            this.terminBearbeitungsForm.patchValue({ 'beiteiligtePersonen': this.termin.beteiligtePersonen });
            this.terminBearbeitungsForm.patchValue({ 'zeitpunkt': this.termin.zeitpunkt });
        }
    }
    TerminBearbeitungPage.prototype.submitTerminBearbeitung = function () {
        var _this = this;
        if (this.terminBearbeitungsForm.valid) {
            var bezeichnung = this.terminBearbeitungsForm.get('bezeichnung').value;
            var beteiligte = this.terminBearbeitungsForm.get('beiteiligtePersonen').value;
            var zeitpunkt = this.terminBearbeitungsForm.get('zeitpunkt').value;
            var termin_1 = {
                'id': this.termin.id,
                'bezeichnung': bezeichnung,
                'beteiligtePersonen': beteiligte,
                'zeitpunkt': zeitpunkt
            };
            this.terminProvider.terminAendern(termin_1).subscribe(function (termine) {
                console.log(termine);
                _this.navCtrl.pop();
                var createToast = _this.toastCtrl.create({
                    message: termin_1.bezeichnung + ' wurde erfolgreich geändert',
                    position: 'bottom',
                    cssClass: 'erfolgreichToast',
                    duration: 2000
                });
                createToast.present();
            });
        }
    };
    TerminBearbeitungPage.prototype.compareSelectedPersonen = function (p1, p2) {
        return p1 && p2 ? p1.value === p2.value : p1 === p2;
    };
    TerminBearbeitungPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termin-bearbeitung',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/termin-bearbeitung/termin-bearbeitung.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Termin Bearbeitung</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-header>\n      Termin bearbeiten\n    </ion-card-header>\n    <ion-card-content>\n      <form (submit)="submitTerminBearbeitung()" [formGroup]="terminBearbeitungsForm">\n        <ion-list>\n          <ion-item>\n            <ion-label for="bezeichnung" floating>Bezeichnung</ion-label>\n            <ion-input formControlName="bezeichnung" type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label for="beiteiligtePersonen" floating>Beteiligte</ion-label>\n            <ion-select formControlName="beiteiligtePersonen" multiple="true" [compareWith]="compareSelectedPersonen">\n              <ion-option *ngFor="let beteiligtePerson of personen" \n                          [value]="beteiligtePerson">\n                {{ beteiligtePerson.label }}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-datetime displayFormat="DD.MM.YYYY HH:mm" formControlName="zeitpunkt" placeholder="Zeitpunkt auswählen" min="2012"\n              cancelText="Abbrechen" doneText="Zeitpunkt übernehmen"></ion-datetime>\n          </ion-item>\n        </ion-list>\n        <button ion-button block type="submit" [disabled]="!terminBearbeitungsForm.valid">\n          Termin bearbeiten\n        </button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/termin-bearbeitung/termin-bearbeitung.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_termin_termin__["a" /* TerminProvider */]])
    ], TerminBearbeitungPage);
    return TerminBearbeitungPage;
}());

//# sourceMappingURL=termin-bearbeitung.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_person_person__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonPage = (function () {
    function PersonPage(navCtrl, navParams, toastCtrl, alertCtrl, personProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.personProvider = personProvider;
    }
    PersonPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.personProvider.getPersonen().subscribe(function (personen) {
            _this.personen = personen;
        });
    };
    PersonPage.prototype.goToPersonErstellung = function () {
        //this.navCtrl.push(TerminErstellungPage);
    };
    PersonPage.prototype.goToPersonBearbeitung = function (person) {
        //this.personProvider.getPersonen().subscribe((personen: Person[]) => {
        //  this.navCtrl.push(TerminBearbeitungPage, { person: person});
        //});
    };
    PersonPage.prototype.showConfirmation = function (id) {
        this.showDeleteConfirmation(id);
    };
    PersonPage.prototype.showDeleteConfirmation = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Person wird gelöscht',
            message: 'Wollen Sie die Person wirklich löschen',
            buttons: [
                {
                    text: 'Ja',
                    handler: function () {
                        _this.personLoeschen(id);
                    }
                },
                {
                    text: 'Nein',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        confirm.present();
    };
    PersonPage.prototype.personLoeschen = function (id) {
        var _this = this;
        var person = this.personen.find(function (p) { return p.id === id; });
        this.personProvider.personLoeschen(id).subscribe(function (personen) {
            _this.personen = personen;
            var deleteToast = _this.toastCtrl.create({
                message: person.vorname + ' ' + person.nachname + ' wurde erfolgreich gelöscht',
                position: 'top',
                cssClass: 'erfolgreichToast',
                duration: 2000
            });
            deleteToast.present();
        });
    };
    PersonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-person',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/person/person.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Personen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-fab top right edge>\n    <button ion-fab color="primary" mini (click)="goToPersonErstellung()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item *ngFor="let person of personen">\n      <ion-row>\n        <ion-col col-2>\n          <ion-icon name="person" item-start color="dark"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <h2>{{ person.vorname }} {{ person.nachname }}</h2>\n          <h3>{{ person.telefon }}</h3>\n          <p>{{ person.mail }}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/person/person.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_person_person__["a" /* PersonProvider */]])
    ], PersonPage);
    return PersonPage;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(286);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_komponenten_komponenten__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_actionsheet_actionsheet__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_alert_alert__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_benutzer_benutzer__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_random_int_random_int__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_laender_laender__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_badge_badge__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_app_app__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_avatar_avatar__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_button_button__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_card_card__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_checkbox_checkbox__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chip_chip__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_col_and_config_col_and_config__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_content_content__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_datetime_datetime__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_events_events__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_events_sub_events_sub__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_fab_fab__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_gestures_gestures__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_grid_grid__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_haptic_haptic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_hide_when_hide_when__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_icon_icon__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_img_img__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_infinite_scroll_infinite_scroll__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_input_input__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_termin_termin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_termin_erstellung_termin_erstellung__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_handler_myErrorHandler__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_ionic_my_ionic_my_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_home_home_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_item_item__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_item_recorder_item_recorder__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_item_sliding_item_sliding__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_keyboard_keyboard__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_label_label__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_loading_loading__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_person_person__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_interceptor_myHttpInterceptor__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_termin_bearbeitung_termin_bearbeitung__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_modal_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_modal_example1_modal_example1__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_modal_example2_modal_example2__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_nav_nav__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_select_select__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_note_note__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_platform_platform__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_platform_config_token_platform_config_token__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_popover_popover__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_popover_example_popover_example__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_radio_radio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_radio_group_radio_group__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_range_range__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_person_person__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_refresher_refresher__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_register_mode_configs_register_mode_configs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_row_row__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































// import { HttpInterceptor } from '../providers/interceptor/httpInterceptor';






























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_komponenten_komponenten__["a" /* KomponentenPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_actionsheet_actionsheet__["a" /* ActionsheetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_badge_badge__["a" /* BadgePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_app_app__["a" /* AppPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_checkbox_checkbox__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chip_chip__["a" /* ChipPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_col_and_config_col_and_config__["a" /* ColAndConfigPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_content_content__["a" /* ContentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_datetime_datetime__["a" /* DatetimePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_events_sub_events_sub__["a" /* EventsSubPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_fab_fab__["a" /* FabPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_gestures_gestures__["a" /* GesturesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_grid_grid__["a" /* GridPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_haptic_haptic__["a" /* HapticPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_hide_when_hide_when__["a" /* HideWhenPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_icon_icon__["a" /* IconPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_img_img__["a" /* ImgPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_infinite_scroll_infinite_scroll__["a" /* InfiniteScrollPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_item_recorder_item_recorder__["a" /* ItemRecorderPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_item_sliding_item_sliding__["a" /* ItemSlidingPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_keyboard_keyboard__["a" /* KeyboardPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_label_label__["a" /* LabelPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_modal_example1_modal_example1__["a" /* ModalExample1Page */],
                __WEBPACK_IMPORTED_MODULE_57__pages_modal_example2_modal_example2__["a" /* ModalExample2Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_nav_nav__["a" /* NavPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_note_note__["a" /* NotePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_platform_platform__["a" /* PlatformPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_platform_config_token_platform_config_token__["a" /* PlatformConfigTokenPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_64__components_popover_example_popover_example__["a" /* PopoverExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_radio_radio__["a" /* RadioPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_radio_group_radio_group__["a" /* RadioGroupPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_range_range__["a" /* RangePage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_refresher_refresher__["a" /* RefresherPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_register_mode_configs_register_mode_configs__["a" /* RegisterModeConfigsPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_row_row__["a" /* RowPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__["a" /* TerminPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termin_erstellung_termin_erstellung__["a" /* TerminErstellungPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_termin_bearbeitung_termin_bearbeitung__["a" /* TerminBearbeitungPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_person_person__["a" /* PersonPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_44__pages_home_home_module__["HomePageModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ionic-my/ionic-my.module#IonicMyPageModule', name: 'meinePage', segment: 'myPage', priority: 'high', defaultHistory: ['home'] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_43__pages_ionic_my_ionic_my_module__["IonicMyPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_komponenten_komponenten__["a" /* KomponentenPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_actionsheet_actionsheet__["a" /* ActionsheetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_badge_badge__["a" /* BadgePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_app_app__["a" /* AppPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_avatar_avatar__["a" /* AvatarPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_button_button__["a" /* ButtonPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_checkbox_checkbox__["a" /* CheckboxPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chip_chip__["a" /* ChipPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_col_and_config_col_and_config__["a" /* ColAndConfigPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_content_content__["a" /* ContentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_datetime_datetime__["a" /* DatetimePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_events_sub_events_sub__["a" /* EventsSubPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_fab_fab__["a" /* FabPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_gestures_gestures__["a" /* GesturesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_grid_grid__["a" /* GridPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_haptic_haptic__["a" /* HapticPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_hide_when_hide_when__["a" /* HideWhenPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_icon_icon__["a" /* IconPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_img_img__["a" /* ImgPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_infinite_scroll_infinite_scroll__["a" /* InfiniteScrollPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_input_input__["a" /* InputPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_item_recorder_item_recorder__["a" /* ItemRecorderPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_item_sliding_item_sliding__["a" /* ItemSlidingPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_keyboard_keyboard__["a" /* KeyboardPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_label_label__["a" /* LabelPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_loading_loading__["a" /* LoadingPage */],
                __WEBPACK_IMPORTED_MODULE_55__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_56__pages_modal_example1_modal_example1__["a" /* ModalExample1Page */],
                __WEBPACK_IMPORTED_MODULE_57__pages_modal_example2_modal_example2__["a" /* ModalExample2Page */],
                __WEBPACK_IMPORTED_MODULE_58__pages_nav_nav__["a" /* NavPage */],
                __WEBPACK_IMPORTED_MODULE_60__pages_note_note__["a" /* NotePage */],
                __WEBPACK_IMPORTED_MODULE_61__pages_platform_platform__["a" /* PlatformPage */],
                __WEBPACK_IMPORTED_MODULE_62__pages_platform_config_token_platform_config_token__["a" /* PlatformConfigTokenPage */],
                __WEBPACK_IMPORTED_MODULE_63__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_64__components_popover_example_popover_example__["a" /* PopoverExampleComponent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_radio_radio__["a" /* RadioPage */],
                __WEBPACK_IMPORTED_MODULE_66__pages_radio_group_radio_group__["a" /* RadioGroupPage */],
                __WEBPACK_IMPORTED_MODULE_67__pages_range_range__["a" /* RangePage */],
                __WEBPACK_IMPORTED_MODULE_69__pages_refresher_refresher__["a" /* RefresherPage */],
                __WEBPACK_IMPORTED_MODULE_70__pages_register_mode_configs_register_mode_configs__["a" /* RegisterModeConfigsPage */],
                __WEBPACK_IMPORTED_MODULE_71__pages_row_row__["a" /* RowPage */],
                __WEBPACK_IMPORTED_MODULE_59__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__["a" /* TerminPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termin_erstellung_termin_erstellung__["a" /* TerminErstellungPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_termin_bearbeitung_termin_bearbeitung__["a" /* TerminBearbeitungPage */],
                __WEBPACK_IMPORTED_MODULE_68__pages_person_person__["a" /* PersonPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                [
                    { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_42__providers_handler_myErrorHandler__["a" /* MyErrorHandler */] },
                    { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_53__providers_interceptor_myHttpInterceptor__["b" /* MyHttpInterceptor */], multi: true },
                    { provide: __WEBPACK_IMPORTED_MODULE_53__providers_interceptor_myHttpInterceptor__["a" /* DEFAULT_TIMEOUT */], useValue: __WEBPACK_IMPORTED_MODULE_53__providers_interceptor_myHttpInterceptor__["c" /* defaultTimeout */] }
                ],
                __WEBPACK_IMPORTED_MODULE_12__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_random_int_random_int__["a" /* RandomIntProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_laender_laender__["a" /* LaenderProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_termin_termin__["a" /* TerminProvider */],
                __WEBPACK_IMPORTED_MODULE_50__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_52__providers_person_person__["a" /* PersonProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterValidator; });
var AlterValidator = (function () {
    function AlterValidator() {
    }
    AlterValidator.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "Keine Zahl": true
            };
        }
        if (control.value % 1 !== 0) {
            return {
                "Keine Ganzahl": true
            };
        }
        if (control.value < 18) {
            return {
                "Zu jung": true
            };
        }
        if (control.value > 120) {
            return {
                "Zu alt": true
            };
        }
        return null;
    };
    return AlterValidator;
}());

//# sourceMappingURL=alterValidator.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicMyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IonicMyPage = (function () {
    function IonicMyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IonicMyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ionic-my',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/ionic-my/ionic-my.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>IonicPage Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>Die Page hat ein eigenes Modul.</ion-row>\n  <ion-row>Dieses wird in App Modules injected (Das Modul und nicht die Page ansich).</ion-row>\n\n  <ion-row>Die Page selbst hat @IonicPage decorator</ion-row>\n\n  <ion-row>\n    Properties für diesen Decorator:\n  </ion-row>\n  <ion-row>\n    name: \'meinePage\'\n  </ion-row>\n  <ion-row>\n    segment: \'myPage\'\n  </ion-row>\n  <ion-row>\n    // Wenn segement nicht angegeben wird wird name verwendet\n  </ion-row>\n  <ion-row>\n    Zu segement Propertie können auch \'Url-Params\' angegeben werden\' z.b.: segment: \'myPage:id\'\n  </ion-row>\n  <ion-row>\n    Diese muss dann beim wechsel (this.navCtrl.push) angegeben werden\n  </ion-row>\n  <ion-row>\n    defaultHistory: [\'list\']\n  </ion-row>\n  <ion-row>\n    defaultHistory wird verwendet um mit den Back Button speziell hin zu navigieren. z.B.: Back button würde jetzt zu list wechseln\n  </ion-row>\n  <ion-row>\n    priority: \'high\'\n  </ion-row>\n  <ion-row>\n    Default priority: \'off\'. High bedeutet beim App start die Page schon laden (nicht erst beim Klick auf die Page).\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/ionic-my/ionic-my.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], IonicMyPage);
    return IonicMyPage;
}());

//# sourceMappingURL=ionic-my.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_komponenten_komponenten__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_termin_termin__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_person_person__ = __webpack_require__(262);
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
            { title: 'Komponenten', component: __WEBPACK_IMPORTED_MODULE_5__pages_komponenten_komponenten__["a" /* KomponentenPage */] },
            { title: 'Termin', component: __WEBPACK_IMPORTED_MODULE_6__pages_termin_termin__["a" /* TerminPage */] },
            { title: 'Personen', component: __WEBPACK_IMPORTED_MODULE_7__pages_person_person__["a" /* PersonPage */] }
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
        this.platform.setLang('de', true);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyErrorHandler = (function () {
    function MyErrorHandler(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    MyErrorHandler.prototype.handleError = function (error) {
        var backendExceptionToast = this.toastCtrl.create({
            message: 'Fehler: ' + error.error,
            position: 'top',
            cssClass: 'fehlerToast',
            duration: 5000
        });
        var backendNichtVerfuegbarToast = this.toastCtrl.create({
            message: 'Backend läuft nicht',
            position: 'middle',
            cssClass: 'fehlerToast',
            duration: 5000
        });
        var timeoutToast = this.toastCtrl.create({
            message: 'Request Timeout',
            position: 'middle',
            cssClass: 'fehlerToast',
            duration: 5000
        });
        if (error.status === 500) {
            backendExceptionToast.present();
            return;
        }
        if (error.status === 0 && error.url === null) {
            backendNichtVerfuegbarToast.present();
            return;
        }
        if (error.message === 'Timeout has occurred' && error.name === 'TimeoutError') {
            timeoutToast.present();
            return;
        }
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

//# sourceMappingURL=myErrorHandler.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_timeout__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DEFAULT_TIMEOUT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('defaultTimeout');
var defaultTimeout = 5000;
var MyHttpInterceptor = (function () {
    function MyHttpInterceptor(defaultTimeout) {
        this.defaultTimeout = defaultTimeout;
    }
    MyHttpInterceptor.prototype.intercept = function (req, next) {
        var timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
        return next.handle(req).timeout(timeout);
    };
    MyHttpInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(DEFAULT_TIMEOUT)),
        __metadata("design:paramtypes", [Object])
    ], MyHttpInterceptor);
    return MyHttpInterceptor;
}());

//# sourceMappingURL=myHttpInterceptor.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpConstants_httpConstants__ = __webpack_require__(259);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TerminProvider = (function () {
    function TerminProvider(httpClient) {
        this.httpClient = httpClient;
        this.API = __WEBPACK_IMPORTED_MODULE_2__httpConstants_httpConstants__["a" /* HttpConstants */].RENES_IP_API;
        this.SERVICE_NAME = 'terminService/';
    }
    TerminProvider.prototype.getTermine = function () {
        return this.httpClient.get(this.API + this.SERVICE_NAME + 'getAllTermine')
            .do(this._logResponse)
            .map(this._mapDataToTermine);
    };
    TerminProvider.prototype.terminErstellen = function (termin) {
        return this.httpClient.post(this.API + this.SERVICE_NAME + 'saveOrUpdateTermin', termin)
            .do(this._logResponse)
            .map(this._mapDataToTermine);
    };
    TerminProvider.prototype.terminAendern = function (termin) {
        return this.httpClient.post(this.API + this.SERVICE_NAME + 'saveOrUpdateTermin', termin)
            .do(this._logResponse)
            .map(this._mapDataToTermine);
    };
    TerminProvider.prototype.terminLoeschen = function (id) {
        return this.httpClient.post(this.API + this.SERVICE_NAME + 'deleteTermin', id)
            .map(this._mapDataToTermine);
    };
    TerminProvider.prototype._logResponse = function (res) {
        console.log('Response: ', res);
    };
    TerminProvider.prototype._mapDataToTermine = function (res) {
        return res;
    };
    TerminProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], TerminProvider);
    return TerminProvider;
}());

//# sourceMappingURL=termin.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpConstants_httpConstants__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonProvider = (function () {
    function PersonProvider(http) {
        this.http = http;
        this.API = __WEBPACK_IMPORTED_MODULE_2__httpConstants_httpConstants__["a" /* HttpConstants */].RENES_IP_API;
        this.SERVICE_NAME = 'personService/';
    }
    PersonProvider.prototype.getPersonenSelect = function () {
        return this.http.get(this.API + this.SERVICE_NAME + 'getAllPersonenSelect')
            .map(this._mapDataToPersonenSelect);
    };
    PersonProvider.prototype.getPersonen = function () {
        return this.http.get(this.API + this.SERVICE_NAME + 'getAllPersonen')
            .map(this._mapDataToPersonenSelect);
    };
    PersonProvider.prototype.personErstellen = function (person) {
        return this.http.post(this.API + this.SERVICE_NAME + 'saveOrUpdatePerson', person)
            .map(this._mapDataToPersonen);
    };
    PersonProvider.prototype.personAendern = function (person) {
        return this.http.post(this.API + this.SERVICE_NAME + 'saveOrUpdatePerson', person)
            .map(this._mapDataToPersonen);
    };
    PersonProvider.prototype.personLoeschen = function (id) {
        return this.http.post(this.API + this.SERVICE_NAME + 'deletePerson', id)
            .map(this._mapDataToPersonen);
    };
    PersonProvider.prototype._mapDataToPersonenSelect = function (res) {
        return res;
    };
    PersonProvider.prototype._mapDataToPersonen = function (res) {
        return res;
    };
    PersonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PersonProvider);
    return PersonProvider;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KomponentenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionsheet_actionsheet__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__badge_badge__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__avatar_avatar__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button_button__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_card__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkbox_checkbox__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chip_chip__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__col_and_config_col_and_config__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_content__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datetime_datetime__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__events_events__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fab_fab__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gestures_gestures__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__grid_grid__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__haptic_haptic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__hide_when_hide_when__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__icon_icon__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__img_img__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__infinite_scroll_infinite_scroll__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__input_input__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__item_item__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__item_sliding_item_sliding__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__item_recorder_item_recorder__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__keyboard_keyboard__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__label_label__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__loading_loading__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modal_modal__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__nav_nav__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__select_select__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__note_note__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__platform_platform__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__platform_config_token_platform_config_token__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__popover_popover__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__radio_radio__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__radio_group_radio_group__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__range_range__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__refresher_refresher__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__register_mode_configs_register_mode_configs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__row_row__ = __webpack_require__(213);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__datetime_datetime__["a" /* DatetimePage */]);
    };
    KomponentenPage.prototype.goToEvents = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__events_events__["a" /* EventsPage */]);
    };
    KomponentenPage.prototype.goToFabButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__fab_fab__["a" /* FabPage */]);
    };
    KomponentenPage.prototype.goToGestures = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_17__gestures_gestures__["a" /* GesturesPage */]);
    };
    KomponentenPage.prototype.goToGrid = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_18__grid_grid__["a" /* GridPage */]);
    };
    KomponentenPage.prototype.goToHaptic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_19__haptic_haptic__["a" /* HapticPage */]);
    };
    KomponentenPage.prototype.goToHideWhen = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_20__hide_when_hide_when__["a" /* HideWhenPage */]);
    };
    KomponentenPage.prototype.goToIcon = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_21__icon_icon__["a" /* IconPage */]);
    };
    KomponentenPage.prototype.goToImg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_22__img_img__["a" /* ImgPage */]);
    };
    KomponentenPage.prototype.goToInfiniteScroll = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_23__infinite_scroll_infinite_scroll__["a" /* InfiniteScrollPage */]);
    };
    KomponentenPage.prototype.goToInput = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_24__input_input__["a" /* InputPage */]);
    };
    KomponentenPage.prototype.goToIonicPage = function () {
        this.navCtrl.push('meinePage');
    };
    KomponentenPage.prototype.goToItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_25__item_item__["a" /* ItemPage */]);
    };
    KomponentenPage.prototype.goToItemRecorder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_27__item_recorder_item_recorder__["a" /* ItemRecorderPage */]);
    };
    KomponentenPage.prototype.goToItemSliding = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_26__item_sliding_item_sliding__["a" /* ItemSlidingPage */]);
    };
    KomponentenPage.prototype.goToKeyboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_28__keyboard_keyboard__["a" /* KeyboardPage */]);
    };
    KomponentenPage.prototype.goToLabel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_29__label_label__["a" /* LabelPage */]);
    };
    KomponentenPage.prototype.goToList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */]);
    };
    KomponentenPage.prototype.goToLoadingController = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_30__loading_loading__["a" /* LoadingPage */]);
    };
    KomponentenPage.prototype.goToModalController = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_31__modal_modal__["a" /* ModalPage */]);
    };
    KomponentenPage.prototype.goToNav = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_32__nav_nav__["a" /* NavPage */]);
    };
    KomponentenPage.prototype.goToNote = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_34__note_note__["a" /* NotePage */]);
    };
    KomponentenPage.prototype.goToPlatform = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_35__platform_platform__["a" /* PlatformPage */]);
    };
    KomponentenPage.prototype.goToPlatformConfigToken = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_36__platform_config_token_platform_config_token__["a" /* PlatformConfigTokenPage */]);
    };
    KomponentenPage.prototype.goToPopoverController = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_37__popover_popover__["a" /* PopoverPage */]);
    };
    KomponentenPage.prototype.goToRadioButton = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_38__radio_radio__["a" /* RadioPage */]);
    };
    KomponentenPage.prototype.goToRadioGroup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_39__radio_group_radio_group__["a" /* RadioGroupPage */]);
    };
    KomponentenPage.prototype.goToRange = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_40__range_range__["a" /* RangePage */]);
    };
    KomponentenPage.prototype.goToRefresher = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_41__refresher_refresher__["a" /* RefresherPage */]);
    };
    KomponentenPage.prototype.goToregisterModeConfigs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_42__register_mode_configs_register_mode_configs__["a" /* RegisterModeConfigsPage */]);
    };
    KomponentenPage.prototype.goToRow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_43__row_row__["a" /* RowPage */]);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_33__select_select__["a" /* SelectPage */]);
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
            selector: 'page-komponenten',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/komponenten/komponenten.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <ion-icon name="happy" color="nigger"></ion-icon>\n      Komponenten\n      <ion-icon name="happy" color="nigger"></ion-icon>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToActionsheet()">\n          Actionsheet\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToAlert()">\n          Alert\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToApp()">\n          App\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToAvatar()">\n          Avatar\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToBadge()">\n          Badge\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToButton()">\n          Button\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToCard()">\n          Card\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToCheckbox()">\n          Checkbox\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToChip()">\n          Chip\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToColAndConfig()">\n          Col and Config\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToContent()">\n          Content\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToDateTime()">\n          DateTime\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToEvents()">\n          Events\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToFabButton()">\n          FabButton\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToGestures()">\n          Gestures\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToGrid()">\n          Grid\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToHaptic()">\n          Haptic\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToHideWhen()">\n          HideWhen\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToIcon()">\n          Icon\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToImg()">\n          Img\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToInfiniteScroll()">\n          InfiniteScroll\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToInput()">\n          Input\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToIonicPage()">\n          IonicPage\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToItem()">\n          Item\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemRecorder()">\n          ItemRecorder\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemSliding()">\n          ItemSliding\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToKeyboard()">\n          Keyboard\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToLabel()">\n          Label\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToList()">\n          List und Storage\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToLoadingController()">\n          LoadingController\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToModalController()">\n          ModalController\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToNav()">\n          Nav\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToNote()">\n          Note\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToPlatform()">\n          Platform\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToPlatformConfigToken()">\n          PlatformConfToken\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToPopoverController()">\n          PopoverController\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToRadioButton()">\n          RadioButton\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToRadioGroup()">\n          RadioGroup\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToRange()">\n          Range\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToRefresher()">\n          Refresher\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToregisterModeConfigs()">\n          registerModeConfigs\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToRow()">\n          Row\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToScroll()">\n          Scroll\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToSearchbar()">\n          Searchbar\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToSegment()">\n          Segment\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToSegmentButton()">\n          SegmentButton\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToSelect()">\n          Select / Option\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToShowWhen()">\n          ShowWhen\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToSlide()">\n          Slide\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToSpinner()">\n          Spinner\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToSplitPane()">\n          SplitPane\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToTab()">\n          Tab\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToTabs()">\n          Tabs\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToThumbnail()">\n          Thumbnail\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToTitle()">\n          Title\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToToastController()">\n          ToastController\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToToogle()">\n          Toogle\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToToolbar()">\n          Toolbar\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToTypography()">\n          Typography\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToViewController()">\n          ViewController\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button icon-left outline color="btnColor" (click)="goToVirualScroll()">\n          VirtualScroll\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/komponenten/komponenten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], KomponentenPage);
    return KomponentenPage;
}());

//# sourceMappingURL=komponenten.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenutzerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
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
            .map(this._mapDataToBenutzer); // gleich wie .map((res) => this._mapDataToBenutzer(res))
    };
    BenutzerProvider.prototype._logResponse = function (res) {
        console.log('Response: ', res);
    };
    BenutzerProvider.prototype._mapDataToBenutzer = function (res) {
        return res.results;
    };
    BenutzerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], BenutzerProvider);
    return BenutzerProvider;
}());

//# sourceMappingURL=benutzer.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemSlidingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemSlidingPage = (function () {
    function ItemSlidingPage(navCtrl, navParams, toastCtrl, laenderProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.laenderProvider = laenderProvider;
        this.geleseneLaender = [];
        this.laenderProvider.getLaender().subscribe(function (laender) {
            _this.items = laender.filter(function (land) { return land.name.startsWith('D'); });
        });
    }
    ItemSlidingPage.prototype.onDrag = function (item) {
        var percent = item.getSlidingPercent();
        if (percent > 0) {
            // positive
            console.log('right side');
        }
        else {
            // negative
            console.log('left side');
        }
        // Müllt die Console voll 
        // if (Math.abs(percent) > 1) {
        //   console.log('overscroll');
        // }
    };
    ItemSlidingPage.prototype.teilen = function (item) {
        var teilenToast = this.toastCtrl.create({
            message: 'Geteilt',
            position: 'bottom',
            cssClass: 'erfolgreichToast',
            duration: 1000
        });
        teilenToast.present();
    };
    ItemSlidingPage.prototype.gelesen = function (item, laendername) {
        this.geleseneLaender.push(laendername);
        item.close();
    };
    ItemSlidingPage.prototype.delete = function (item, land) {
        console.log(item);
        var index = this.items.indexOf(land);
        this.items.splice(index, 1);
    };
    ItemSlidingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-sliding',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/item-sliding/item-sliding.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Item Sliding Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list *ngFor="let land of items">\n    <ion-item-sliding #item (ionDrag)="onDrag($event)" (ionSwipe)="delete($event, land)">\n      <ion-item>\n        <img src="{{ land.flag }}" width="40" height="20"> {{ land.name }}\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button (click)="teilen(item)">\n          <ion-icon name="share"></ion-icon>\n          Teilen\n        </button>\n        <button ion-button (click)="gelesen(item, land.name)">Gelesen</button>\n      </ion-item-options>\n\n      <ion-item-options side="right">\n        <button ion-button expandable color="primary" (click)="delete(item, land)">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-item *ngFor="let gelesenesLand of geleseneLaender">\n    {{ gelesenesLand }} wurde gelesen!\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/item-sliding/item-sliding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ItemSlidingPage);
    return ItemSlidingPage;
}());

//# sourceMappingURL=item-sliding.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridPage = (function () {
    function GridPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GridPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-grid',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/grid/grid.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Grid Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p padding>\n    Equal-width columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <p padding>\n    Setting one column width\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-6>\n        <div>2 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6>\n        <div>1 of 3 (wider)</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Variable-width columns\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div>Variable width content</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col col-auto>\n        <div><ion-icon name="globe"></ion-icon></div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Offsetting columns\n  </p>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col offset-4>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col offset-4>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Push and pull\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-9 push-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-6 push-3>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3 push-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-3 pull-9>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Setting all column widths<br>\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <div>1 of 3</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 3</div>\n      </ion-col>\n      <ion-col col-5>\n        <div>3 of 3</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Vertical alignment\n  </p>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4 <br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4 <br>#<br>#</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-start>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-end>\n      <ion-col>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col align-self-start>\n        <div>1 of 4</div>\n      </ion-col>\n      <ion-col align-self-center>\n        <div>2 of 4</div>\n      </ion-col>\n      <ion-col align-self-end>\n        <div>3 of 4</div>\n      </ion-col>\n      <ion-col>\n        <div>4 of 4 <br>#<br>#<br>#</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <p padding>\n    Horizontal Alignment\n  </p>\n  <ion-grid>\n    <ion-row justify-content-start>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-center>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-end>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-around>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row justify-content-between>\n      <ion-col col-3>\n        <div>1 of 2</div>\n      </ion-col>\n      <ion-col col-3>\n        <div>2 of 2</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/grid/grid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], GridPage);
    return GridPage;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_alterValidator__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputPage = (function () {
    function InputPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auto = {
            marke: '',
            modell: ''
        };
        this.form1 = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            vorname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            nachname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required),
            alter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__validators_alterValidator__["a" /* AlterValidator */].isValid)
        });
        this.form2 = formBuilder.group({
            vorname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            nachname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            alter: ['', __WEBPACK_IMPORTED_MODULE_3__validators_alterValidator__["a" /* AlterValidator */].isValid]
        });
    }
    InputPage.prototype.onSubmitTemplateDrivenForm = function (form) {
        console.log(form);
    };
    InputPage.prototype.processForm1 = function (formGroup) {
        if (this.form1.invalid) {
            console.log('fail');
            this._validateAllFields(this.form1);
        }
        console.log('Form: ', this.form1);
    };
    InputPage.prototype.processForm2 = function () {
        if (this.form2.invalid) {
            console.log('fail');
        }
        console.log('Form: ', this.form2);
    };
    InputPage.prototype._validateAllFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]) {
                _this._validateAllFields(control);
            }
        });
    };
    InputPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-input',template:/*ion-inline-start:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/input/input.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Input Beispiel</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- input events können auch bei ion-input verwendet werden -->\n  <!-- (keyup), (keydown), (keypress), (input), (change), (focus), (invalid), (change), .... -->\n  <form name="testForm">\n    <ion-card>\n      <ion-card-header>\n        Verschiedene "Styles"\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label fixed>Fixed Label</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Floating Label</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Inline Label</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Placeholder"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>Stacked Label</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Floating Label</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n      <ion-card-header>\n        Verschiedene Typen\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-input type="text" placeholder="Text"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="email" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="number" placeholder="Number"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="search" placeholder="Search"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="tel" placeholder="Tel"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="url" placeholder="Url"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Other Properties\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-input type="text" placeholder="Readonly" readonly></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Min 2 max 5" min="2" max="5"></ion-input>\n        </ion-item>      \n        <ion-item>\n          <ion-input type="text" placeholder="ClearOnEdit" clearOnEdit></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="ClearInput" clearInput></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Autocorrect" autocorrect="on"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Autocomplete" autocomplete="on"></ion-input>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </form>\n\n  <ion-card>\n    <ion-card-header>\n      Template Driven Form\n    </ion-card-header>\n    <ion-card-content>\n      <form #templateDrivenForm="ngForm" (ngSubmit)="onSubmitTemplateDrivenForm(templateDrivenForm)">\n        <ion-item>\n          <ion-label for="marke" floating>Automarke</ion-label>\n          <ion-input type="text" [(ngModel)]="auto.marke" name="marke" required></ion-input>\n        </ion-item>\n        <!-- Submit Button kann [disabled]="templateDrivenForm.invalid" haben -->\n        <button ion-button type="submit">Sign up</button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Reactive Form\n    </ion-card-header>\n    <ion-card-content>\n      <form (submit)="processForm1()" [formGroup]="form1">\n        <ion-list>\n          <ion-item>\n            <ion-label for="vorname" floating>Vorname</ion-label>\n            <ion-input formControlName="vorname" type="text"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!form1.controls.vorname.valid  && (form1.controls.vorname.dirty || form1.controls.vorname.touched)">\n            <p class="errorMessage">Bitte Vornamen eingeben</p>\n          </ion-item>\n          <ion-item>\n            <ion-label for="nachname" floating>Nachname</ion-label>\n            <ion-input formControlName="nachname" type="text"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!form1.controls.nachname.valid  && (form1.controls.nachname.dirty || form1.controls.nachname.touched)">\n            <p class="errorMessage">Bitte Nachnamen eingeben</p>\n          </ion-item>\n          <ion-item>\n            <ion-label for="alter" floating>Alter</ion-label>\n            <ion-input formControlName="alter" type="text"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!form1.controls.alter.valid  && (form1.controls.alter.dirty || form1.controls.alter.touched)">\n            <p class="errorMessage">Bitte korrektes Alter eingeben</p>\n          </ion-item>\n        </ion-list>\n        <!-- Submit Button sollte [disabled]="!form1.valid" haben -->\n        <button ion-button block type="submit">Submit</button>\n\n        <p>Vorname: {{ form1.get(\'vorname\').value }}</p>\n        <p>Nachname: {{ form1.get(\'nachname\').value }}</p>\n        <p>Alter: {{ form1.get(\'alter\').value }}</p>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Reactive Form 2\n    </ion-card-header>\n    <ion-card-content>\n      <form (submit)="processForm2()" [formGroup]="form2">\n        <ion-list>\n          <ion-item>\n            <ion-label for="vorname" floating>Vorname</ion-label>\n            <ion-input formControlName="vorname" type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label for="nachname" floating>Nachname</ion-label>\n            <ion-input formControlName="nachname" type="text"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label for="alter" floating>Alter</ion-label>\n            <ion-input formControlName="alter" type="text"></ion-input>\n          </ion-item>\n        </ion-list>\n        <!-- Submit Button sollte [disabled]="!form1.valid" haben -->\n        <button ion-button block type="submit">Submit</button>\n\n        <p>Name value: {{ form2.get(\'vorname\').value }}</p>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/renedolar/Work/Git-Repository/drsolutions/src/pages/input/input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map