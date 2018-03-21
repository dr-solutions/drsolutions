<<<<<<< Updated upstream
webpackJsonp([0],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpConstants_httpConstants__ = __webpack_require__(330);
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
        console.log('Hello TerminProvider Provider');
    }
    TerminProvider.prototype.getTermine = function () {
        return this.httpClient.get(this.API + 'getAllTermine')
            .do(this._logResponse)
            .map(this._mapDataToTermine);
    };
    TerminProvider.prototype.terminErstellen = function (termin) {
        return this.httpClient.post(this.API + 'saveOrUpdateTermin', termin)
            .do(this._logResponse)
            .map(this._mapDataToTermine);
    };
    TerminProvider.prototype.terminAendern = function (termin) {
        return this.httpClient.post(this.API + 'saveOrUpdateTermin', termin)
            .do(this._logResponse)
            .map(this._mapDataToTermine);
    };
    TerminProvider.prototype.terminLoeschen = function (id) {
        return this.httpClient.post(this.API + 'deleteTermin', id)
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], TerminProvider);
    return TerminProvider;
    var _a;
}());

//# sourceMappingURL=termin.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		161
	],
	"../pages/ionic-my/ionic-my.module": [
		196
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(162);
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__komponenten_komponenten__ = __webpack_require__(82);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n\n\n  <ion-footer>\n\n    <ion-toolbar color="primary">\n\n      <ion-title (click)="goToKomponenten()">Zu den Komponenten</ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__ = __webpack_require__(164);
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
            selector: 'page-actionsheet',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\actionsheet\actionsheet.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Actionsheet Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>  \n\n\n\n  <button ion-button color="primary" (click)="presentActionSheet()">Öffne Actionsheet</button>\n\n\n\n  <ion-row>\n\n    <span>Random Integer</span>\n\n  </ion-row>\n\n  <ion-row>\n\n    <span>{{ randomInt }}</span>\n\n  </ion-row>\n\n  <ion-row></ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\actionsheet\actionsheet.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__["a" /* RandomIntProvider */]])
    ], ActionsheetPage);
    return ActionsheetPage;
}());

//# sourceMappingURL=actionsheet.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomIntProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RandomIntProvider);
    return RandomIntProvider;
}());

//# sourceMappingURL=random-int.js.map

/***/ }),

/***/ 165:
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
            selector: 'page-alert',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\alert\alert.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Alert Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button block primary (click)="showBasicAlert()">Basis Alert</button>\n\n\n\n  <button ion-button block primary (click)="showCheckboxAlert()">Checkbox Alert</button>\n\n\n\n  <button ion-button block primary (click)="showRadioAlert()">Radio Alert</button>\n\n\n\n  <button ion-button block primary (click)="showConfirmAlert()">Confirm Alert</button>\n\n  \n\n  <button ion-button block primary (click)="showPromptAlert()">Prompt Alert</button>\n\n\n\n  <ion-row>\n\n      Checkbox Ergebnisse: {{ testCheckboxResult }}\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n      Radio Ergebnis: {{ testRadioResult }}\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n      Confirm Ergebnis: {{ testConfirmResult }}\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n      Prompt Ergebnisse: {{ titel }}\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\alert\alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_benutzer_benutzer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_sliding_item_sliding__ = __webpack_require__(83);
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
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\list\list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>List und Storage Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>Avatar (clicking) List:</ion-row>\n\n  <ion-list>\n\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n\n      <ion-avatar item-left>\n\n        <img src="{{ benutzer.picture.thumbnail }}">\n\n      </ion-avatar>\n\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>No-line List:</ion-row>\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n\n      <ion-avatar item-left>\n\n        <img src="{{ benutzer.picture.thumbnail }}">\n\n      </ion-avatar>\n\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>Inset List:</ion-row>\n\n  <ion-list inset>\n\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n\n      <ion-avatar item-left>\n\n        <img src="{{ benutzer.picture.thumbnail }}">\n\n      </ion-avatar>\n\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>Divider List:</ion-row>\n\n  <ion-item-group>\n\n    <ion-item>Item 1</ion-item>\n\n    <ion-item-divider color="primary">Item Divider 1</ion-item-divider>\n\n    <ion-item>Item 2</ion-item>\n\n    <ion-item>Item 3</ion-item>\n\n    <ion-item-divider>Item Divider 2</ion-item-divider>\n\n    <ion-item>Item 4</ion-item>\n\n  </ion-item-group>\n\n\n\n  <ion-row>Überschrift List:</ion-row>\n\n  <ion-list no-lines>\n\n    <ion-list-header>\n\n      Benutzer Überschrift\n\n    </ion-list-header>\n\n    <ion-item *ngFor="let benutzer of benutzerList" (click)="itemSelected(benutzer)">\n\n      <ion-avatar item-left>\n\n        <img src="{{ benutzer.picture.thumbnail }}">\n\n      </ion-avatar>\n\n      {{ benutzer.name.first }} {{ benutzer.name.last }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>Icon List:</ion-row>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon large name="leaf" item-start></ion-icon>\n\n      Item 1\n\n      <ion-icon name="rose" item-end></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="rose" item-start></ion-icon>\n\n      Item 1\n\n      <ion-icon large name="leaf" item-end></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>Multiple Line List:</ion-row>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon large name="ice-cream" item-start></ion-icon>\n\n      <h2>Mehrere Zeilen</h2>\n\n      <h3>sind natürlich</h3>\n\n      <p>genauso möglich und auch ziemlich cool</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>Sliding List:</ion-row>\n\n  <button ion-button outline (click)="goToSlidingPage()">Item Sliding</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\list\list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenutzerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(170);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BenutzerProvider);
    return BenutzerProvider;
}());

//# sourceMappingURL=benutzer.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
            selector: 'page-badge',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\badge\badge.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Badge Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item *ngFor="let land of laender">\n\n    <img src="{{ land.flag }}" item-start/>\n\n    {{ land .name }} \n\n    <ion-row>\n\n      Einwohnerzahl:\n\n    </ion-row>\n\n    <ion-badge item-end color="btnColor">\n\n      {{ land.population | number }}\n\n    </ion-badge>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\badge\badge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], BadgePage);
    return BadgePage;
}());

//# sourceMappingURL=badge.js.map

/***/ }),

/***/ 172:
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
            selector: 'page-app',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\app\app.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>App Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  Dies ist ein Beispiel für die verschiedenen Ionic Methoden.\n\n  Source Code + Konsole ansehen.\n\n\n\n  <span>Reihenfolge</span>:\n\n\n\n  <ion-list>\n\n    <ion-item>1. ionViewDidLoad</ion-item>\n\n    <ion-item>2. ionViewWillEnter</ion-item>\n\n    <ion-item>3. ionViewDidEnter</ion-item>\n\n    <ion-item>4. ionViewWillLeave</ion-item>\n\n    <ion-item>5. ionViewDidLeave</ion-item>\n\n    <ion-item>6. ionViewWillUnload</ion-item>  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], AppPage);
    return AppPage;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
            selector: 'page-avatar',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\avatar\avatar.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Avatar Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let land of laender">\n\n      <ion-avatar item-start>\n\n        <img src="{{ land.flag }}">\n\n      </ion-avatar>\n\n      {{ land.alpha3Code }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\avatar\avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 174:
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
            selector: 'page-button',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\button\button.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Button Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor">Normal Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" outline>Outline Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" clear>Clear Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" round>Round Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" block>Block Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" full>Full Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" small>Small Button Größe</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor">Default Button Größe</button> \n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" large>Large Button Größe</button> \n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Left Icon Button\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-right color="btnColor">\n\n      Right Icon Button\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-only color="btnColor">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" solid>Solid Button</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" strong>Strong Button</button>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\button\button.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
            selector: 'page-checkbox',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\checkbox\checkbox.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Checkbox Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-label>Grenzländer von Österreich</ion-label>\n\n    <ion-label>Für mehr Infos klicken</ion-label>\n\n    <ion-item *ngFor="let border of borders">\n\n      <ion-checkbox color="primary" \n\n                    (ionChange)="checkboxChanged($event, border)"\n\n                    (click)="checkboxClicked(border)">\n\n      </ion-checkbox>\n\n      <ion-label>{{ getLandNameByAlpha3Code(border) }}</ion-label>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item *ngFor="let border of checkboxArray">\n\n      <ion-row>Name: {{ getLandByAlpha3Code(border).name }}</ion-row>\n\n      <ion-row>Nativer Name: {{ getLandByAlpha3Code(border).nativeName }}</ion-row>\n\n      <ion-row>Region: {{ getLandByAlpha3Code(border).region }}</ion-row>\n\n      <ion-row>Subregion: {{ getLandByAlpha3Code(border).subregion }}</ion-row>\n\n      <ion-row>Hauptstadt: {{ getLandByAlpha3Code(border).capital }}</ion-row>\n\n    </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\checkbox\checkbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], CheckboxPage);
    return CheckboxPage;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 177:
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
            selector: 'page-chip',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\chip\chip.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Chip Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-chip>\n\n    <ion-label>Default Chip</ion-label>\n\n  </ion-chip>\n\n    \n\n  <ion-chip>\n\n    <ion-label color="secondary">Color Label</ion-label>\n\n  </ion-chip>\n\n    \n\n  <ion-chip color="secondary">\n\n    <ion-label color="dark">Color Label und Chip</ion-label>\n\n  </ion-chip>\n\n    \n\n  <ion-chip>\n\n    <ion-icon name="ice-cream"></ion-icon>\n\n    <ion-label>Mit Icon</ion-label>\n\n  </ion-chip>\n\n  \n\n  <ion-chip>\n\n    <ion-icon name="ice-cream" color="secondary"></ion-icon>\n\n    <ion-label>Mit Color Icon</ion-label>\n\n  </ion-chip>\n\n  \n\n  <ion-chip>\n\n    <ion-icon name="ice-cream"></ion-icon>\n\n  </ion-chip>\n\n\n\n  <ion-chip color="nigger" (click)="showMessage()">\n\n    <ion-label color="white">Kann auch geklickt werden</ion-label>\n\n    <ion-icon name="ice-cream" color="secondary"></ion-icon>\n\n  </ion-chip>\n\n\n\n  <ion-row *ngIf="show">Überraschung</ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\chip\chip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ChipPage);
    return ChipPage;
}());

//# sourceMappingURL=chip.js.map

/***/ }),

/***/ 178:
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
            selector: 'page-col-and-config',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\col-and-config\col-and-config.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Col und Config "Beispiel"</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <a href="https://ionicframework.com/docs/api/components/grid/Col/">Col</a>\n\n  <a href="https://ionicframework.com/docs/api/config/Config/">Config</a>\n\n  \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\col-and-config\col-and-config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ColAndConfigPage);
    return ColAndConfigPage;
}());

//# sourceMappingURL=col-and-config.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
            selector: 'page-content',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\content\content.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Content Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor" (click)="toBottom()">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Zum Schluss\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-list *ngFor="let land of laender">\n\n    <ion-item>{{ land.name }}</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor" (click)="toTop()">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Zum Start\n\n    </button>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\content\content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 180:
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
            selector: 'page-datetime',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\datetime\datetime.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Datetime Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="myDate1" placeholder="Datum auswählen"></ion-datetime>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>Testdatum 2</ion-label>\n\n      <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="myDate2"></ion-datetime>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label>Testdatum 3</ion-label>\n\n      <ion-datetime displayFormat="MMM DD YYYY"\n\n                    [(ngModel)]="myDate3" \n\n                    cancelText="Abruch Abruch Abruch"\n\n                    doneText="Haben Fertig"\n\n                    (ionCancel)="canceled()"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Testdatum 4</ion-label>\n\n        <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="myDate4" min="2016" max="2020-10-31"></ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Testdatum 4</ion-label>\n\n      <ion-datetime displayFormat="DDDD MMMM YYYY" \n\n                    [(ngModel)]="myDate4"\n\n                    min="2017"\n\n                    max="2019"\n\n                    [monthNames]="monthNames"\n\n                    [dayNames]="dayNames">\n\n      </ion-datetime>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n        <ion-label>Testdatum 5</ion-label>\n\n        <ion-datetime displayFormat="DDD MMM YYYY" \n\n                      [(ngModel)]="myDate5"\n\n                      min="2017"\n\n                      max="2019"\n\n                      [monthShortNames]="monthNamesShort"\n\n                      [dayShortNames]="dayNamesShort">\n\n        </ion-datetime>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\datetime\datetime.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], DatetimePage);
    return DatetimePage;
}());

//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_sub_events_sub__ = __webpack_require__(182);
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
            selector: 'page-events',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\events\events.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Events Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-input  placeholder="Text eingeben"\n\n              stacked\n\n              value=""\n\n              [(ngModel)]="myInput">\n\n  </ion-input>\n\n\n\n  <ion-row>\n\n      <button ion-button icon-left color="btnColor" small (click)="buttonClicked()">\n\n        <ion-icon name="ice-cream"></ion-icon>\n\n        Ab zur nächsten Seite mit den Wert des Inputs\n\n      </button>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\events\events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 182:
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
            selector: 'page-events-sub',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\events-sub\events-sub.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Ebents Sub Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  In Konsole schauen :)\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\events-sub\events-sub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], EventsSubPage);
    return EventsSubPage;
}());

//# sourceMappingURL=events-sub.js.map

/***/ }),

/***/ 183:
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
            selector: 'page-fab',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\fab\fab.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Fab Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-fab top right edge>\n\n    <button ion-fab color="primary" mini><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list>\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>  \n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n    \n\n  <ion-fab right bottom>\n\n    <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n   \n\n  <ion-fab left top>\n\n    <button ion-fab color="secondary"><ion-icon name="arrow-dropright"></ion-icon></button>\n\n    <ion-fab-list side="right">\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  \n\n  <ion-fab left bottom>\n\n    <button ion-fab color="dark"><ion-icon name="arrow-dropup"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  \n\n  <ion-fab center middle>\n\n    <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="bottom">\n\n      <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n    <ion-fab-list side="right">\n\n      <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n   \n\n  <!-- wenn man fab.close() aufruft benötigt man #fab -->\n\n  <ion-fab #fab right middle>\n\n    <button ion-fab color="danger"><ion-icon name="ice-cream"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="share(\'facebook\', fab)"><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab (click)="share(\'twitter\', fab)"><ion-icon name="logo-twitter"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\fab\fab.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], FabPage);
    return FabPage;
}());

//# sourceMappingURL=fab.js.map

/***/ }),

/***/ 184:
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
            selector: 'page-gestures',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\gestures\gestures.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Gestures Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card (tap)="tapEvent($event)"\n\n            (press)="pressEvent($event)"\n\n            (pan)="panEvent($event)"\n\n            (swipe)="swipeEvent($event)"\n\n            (rotate)="rotateEvent($event)"\n\n            (pinch)="pinchEvent($event)"\n\n            class="myCard">\n\n    <ion-item color="primary">\n\n      Tapped: {{tap}} times\n\n    </ion-item>\n\n    \n\n    <ion-item color="primary">\n\n      Pressed: {{press}} times\n\n    </ion-item>\n\n\n\n    <ion-item color="primary">\n\n      Panned: {{pan}} times\n\n    </ion-item>\n\n    \n\n    <ion-item color="primary">\n\n      Swiped: {{swipe}} times\n\n    </ion-item>\n\n    \n\n    <ion-item color="primary">\n\n      Rotated: {{rotate}} times\n\n    </ion-item>\n\n    \n\n    <ion-item color="primary">\n\n      Pinched: {{pinch}} times\n\n    </ion-item>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\gestures\gestures.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], GesturesPage);
    return GesturesPage;
}());

//# sourceMappingURL=gestures.js.map

/***/ }),

/***/ 185:
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
            selector: 'page-grid',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\grid\grid.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Grid Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <p padding>\n\n    Equal-width columns\n\n  </p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>1 of 3</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 3</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 3</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <p padding>\n\n    Setting one column width\n\n  </p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>1 of 3</div>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <div>2 of 3 (wider)</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 3</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <div>1 of 3 (wider)</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 3</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 3</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <p padding>\n\n    Variable-width columns\n\n  </p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>1 of 3</div>\n\n      </ion-col>\n\n      <ion-col col-auto>\n\n        <div>Variable width content</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 3</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>1 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 4</div>\n\n      </ion-col>\n\n      <ion-col col-auto>\n\n        <div><ion-icon name="globe"></ion-icon></div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>4 of 4</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <p padding>\n\n    Offsetting columns\n\n  </p>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col offset-4>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col offset-4>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <p padding>\n\n    Push and pull\n\n  </p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-9 push-3>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col col-3 pull-9>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6 push-3>\n\n        <div>1 of 3</div>\n\n      </ion-col>\n\n      <ion-col col-3 push-3>\n\n        <div>2 of 3</div>\n\n      </ion-col>\n\n      <ion-col col-3 pull-9>\n\n        <div>3 of 3</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <p padding>\n\n    Setting all column widths<br>\n\n  </p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <div>1 of 3</div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div>2 of 3</div>\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        <div>3 of 3</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <p padding>\n\n    Vertical alignment\n\n  </p>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div>1 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 4 <br>#</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 4 <br>#<br>#</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>4 of 4 <br>#<br>#<br>#</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row align-items-start>\n\n      <ion-col>\n\n        <div>1 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>4 of 4 <br>#<br>#<br>#</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row align-items-center>\n\n      <ion-col>\n\n        <div>1 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>4 of 4 <br>#<br>#<br>#</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row align-items-end>\n\n      <ion-col>\n\n        <div>1 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>2 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>3 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>4 of 4 <br>#<br>#<br>#</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col align-self-start>\n\n        <div>1 of 4</div>\n\n      </ion-col>\n\n      <ion-col align-self-center>\n\n        <div>2 of 4</div>\n\n      </ion-col>\n\n      <ion-col align-self-end>\n\n        <div>3 of 4</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>4 of 4 <br>#<br>#<br>#</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <p padding>\n\n    Horizontal Alignment\n\n  </p>\n\n  <ion-grid>\n\n    <ion-row justify-content-start>\n\n      <ion-col col-3>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row justify-content-center>\n\n      <ion-col col-3>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row justify-content-end>\n\n      <ion-col col-3>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row justify-content-around>\n\n      <ion-col col-3>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row justify-content-between>\n\n      <ion-col col-3>\n\n        <div>1 of 2</div>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n        <div>2 of 2</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\grid\grid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], GridPage);
    return GridPage;
}());

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 186:
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
            selector: 'page-haptic',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\haptic\haptic.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Haptic Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <a href="https://ionicframework.com/docs/api/tap-click/Haptic/">Haptic</a>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\haptic\haptic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HapticPage);
    return HapticPage;
}());

//# sourceMappingURL=haptic.js.map

/***/ }),

/***/ 187:
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
            selector: 'page-hide-when',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\hide-when\hide-when.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>HideWhen Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div hideWhen="android">\n\n    I am hidden on Android!\n\n  </div>\n\n       \n\n  <div hideWhen="ios">\n\n    I am hidden on iOS!\n\n  </div>\n\n       \n\n  <div hideWhen="android,ios">\n\n    I am hidden on Android and iOS!\n\n  </div>\n\n       \n\n  <div hideWhen="portrait">\n\n    I am hidden on Portrait!\n\n  </div>\n\n       \n\n  <div hideWhen="landscape">\n\n    I am hidden on Landscape!\n\n  </div>\n\n\n\n  <ion-icon name="logo-apple" hideWhen="android, windows">\n\n    Aktuelle Platform\n\n  </ion-icon>\n\n\n\n  <ion-icon name="logo-android" hideWhen="ios, windows">\n\n    Aktuelle Platform\n\n  </ion-icon>\n\n\n\n  <ion-icon name="logo-windows" hideWhen="android, ios">\n\n    Aktuelle Platform\n\n  </ion-icon>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\hide-when\hide-when.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], HideWhenPage);
    return HideWhenPage;
}());

//# sourceMappingURL=hide-when.js.map

/***/ }),

/***/ 188:
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
            selector: 'page-icon',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\icon\icon.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Icon Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-icon name="ice-cream" \n\n            class="myIconSizedUp"\n\n            (click)="changeColor()" \n\n            [color]="myColor"> \n\n  </ion-icon>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\icon\icon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], IconPage);
    return IconPage;
}());

//# sourceMappingURL=icon.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
            selector: 'page-img',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\img\img.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Img Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-item *ngFor="let flagge of flaggen" color="nigger">\n\n    <ion-img  src="{{ flagge }}"\n\n              height="80"\n\n              width="160"\n\n              cache="true">\n\n    </ion-img>\n\n    <!-- fter an image has been successfully downloaded, it can be cached in-memory. \n\n    This is useful for VirtualScroll by allowing image responses to be cached, \n\n    and not rendered, until after scrolling has completed, which allows for smoother scrolling. -->\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\img\img.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ImgPage);
    return ImgPage;
}());

//# sourceMappingURL=img.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaenderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LaenderProvider);
    return LaenderProvider;
}());

//# sourceMappingURL=laender.js.map

/***/ }),

/***/ 190:
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
            selector: 'page-infinite-scroll',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\infinite-scroll\infinite-scroll.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Infinite Scroll Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <p>Finde ich nicht recht schön</p>\n\n\n\n  <a href="https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/">Infinite Scroll</a>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\infinite-scroll\infinite-scroll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], InfiniteScrollPage);
    return InfiniteScrollPage;
}());

//# sourceMappingURL=infinite-scroll.js.map

/***/ }),

/***/ 191:
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
            selector: 'page-item',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item\item.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>Buttons und Links die klickbar sind sollten einen Pfeil haben</ion-row>\n\n\n\n  <ion-row>Item wird meistens in Liste verwendet</ion-row>\n\n\n\n  <ion-item>\n\n    Item\n\n  </ion-item>\n\n\n\n  <ion-list-header>\n\n    List Header\n\n  </ion-list-header>\n\n\n\n  <ion-item-divider>\n\n    Item Divider\n\n  </ion-item-divider>\n\n\n\n  <button ion-item (click)="buttonClick()">\n\n    Button Item\n\n  </button>\n\n\n\n  <a ion-item href="https://www.ionicframework.com">\n\n    Link Item\n\n  </a>\n\n\n\n  <ion-item detail-push>\n\n    Item with Detail Arrow\n\n  </ion-item>\n\n\n\n  <button ion-item detail-none (click)="buttonClick()">\n\n    Button Item with no Detail Arrow\n\n  </button>\n\n\n\n  <ion-item no-lines>\n\n    Item with no border\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    Multiline text that should wrap when it is too long to fit on one line in the item.\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>\n\n      Item Label\n\n    </ion-label>\n\n    <div item-content>\n\n      Item Content next to the label\n\n    </div>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item\item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemRecorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
        this.items1 = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* reorderArray */])(this.items1, indexes);
    };
    ItemRecorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-recorder',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-recorder\item-recorder.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Recorder Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Header</ion-list-header>\n\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">\n\n      <ion-item *ngFor="let item of items">{{ item.name }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Header 1</ion-list-header>\n\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems2($event)">\n\n      <ion-item *ngFor="let item of items1">{{ item.name }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Header 2</ion-list-header>\n\n    <ion-item-group reorder="true" (ionItemReorder)="$event.applyTo(items2)">\n\n      <ion-item *ngFor="let item of items2">{{ item.name }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-recorder\item-recorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ItemRecorderPage);
    return ItemRecorderPage;
}());

//# sourceMappingURL=item-recorder.js.map

/***/ }),

/***/ 193:
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
            selector: 'page-keyboard',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\keyboard\keyboard.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Keyboard Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-input type="text" placeholder="nur zum öffnen des Keyboards"></ion-input>\n\n\n\n  <button ion-button outline (click)="closeKeyboard()">Keyboard schließen</button>\n\n\n\n  <ion-row>\n\n    {{ nachricht }}\n\n  </ion-row>\n\n  <ion-row>\n\n    {{ nachricht1 }}\n\n  </ion-row>\n\n  <ion-row>\n\n    {{ nachricht2 }}\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\keyboard\keyboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Keyboard */]])
    ], KeyboardPage);
    return KeyboardPage;
}());

//# sourceMappingURL=keyboard.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input__ = __webpack_require__(84);
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
            selector: 'page-label',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\label\label.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Label Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button (click)="goToInputPage()">Siehe Input</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\label\label.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], LabelPage);
    return LabelPage;
}());

//# sourceMappingURL=label.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
            selector: 'page-loading',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\loading\loading.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Loading Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="backendCall()">Sachen machen</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner1()">Ios</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner2()">Ios-small</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner3()">bubbles</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner4()">circles</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner5()">crescent</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner6()">Dots</button>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\loading\loading.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], LoadingPage);
    return LoadingPage;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicMyPageModule", function() { return IonicMyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_my__ = __webpack_require__(302);
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_termin_termin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__termin_sub_termin_sub__ = __webpack_require__(241);
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
    function TerminPage(navCtrl, navParams, toastCtrl, alertCtrl, terminProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.terminProvider = terminProvider;
        this.terminProvider.getTermine().subscribe(function (termine) {
            console.log('Das sind alle Termine: ', termine);
            _this.termine = termine;
        });
    }
    TerminPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.terminProvider.getTermine().subscribe(function (termine) {
            console.log('Das sind alle Termine: ', termine);
            _this.termine = termine;
        });
    };
    TerminPage.prototype.goToTerminErstellung = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__termin_sub_termin_sub__["a" /* TerminSubPage */], { operation: 'erstellen' });
    };
    TerminPage.prototype.goToTerminBearbeitung = function (termin) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__termin_sub_termin_sub__["a" /* TerminSubPage */], { termin: termin, operation: 'bearbeiten' });
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
            selector: 'page-termin',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin\termin.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Termine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <ion-col offset-3>\n\n      <button ion-button icon-right color="primary" (click)="goToTerminErstellung()">\n\n        Termin anlegen\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let termin of termine">\n\n      <ion-list-header>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <ion-icon name="calendar"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            {{ termin.id }} {{ termin.bezeichnung }}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list-header>\n\n      <ion-row>\n\n        <ion-item>Beteiligte: {{ termin.beteiligtePersonen }}</ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-item>Zeitpunkt: {{ termin.zeitpunt | date:\'dd.MM.yyyy\'}}</ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-right color="primary" (click)="goToTerminBearbeitung(termin)" mini>\n\n            Bearbeiten\n\n            <ion-icon name="create"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-right color="primary" (click)="showConfirmation(termin.id)" mini>\n\n            Löschen\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin\termin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_termin_termin__["a" /* TerminProvider */]])
    ], TerminPage);
    return TerminPage;
}());

//# sourceMappingURL=termin.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminSubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_termin_termin__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TerminSubPage = (function () {
    function TerminSubPage(navCtrl, navParams, toastCtrl, formBuilder, terminProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.terminProvider = terminProvider;
        this.operation = this.navParams.get("operation");
        this.termin = this.navParams.get('termin');
        this.terminErstellungsForm = formBuilder.group({
            bezeichnung: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            beiteiligtePersonen: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required])],
            zeitpunkt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        this.terminBearbeitungsForm = formBuilder.group({
            bezeichnung: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            beiteiligtePersonen: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            zeitpunkt: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]
        });
        if (this.operation === 'bearbeiten' && this.termin) {
            console.log('hallo', this.termin);
            this.terminBearbeitungsForm.patchValue({ 'bezeichnung': this.termin.bezeichnung });
            this.terminBearbeitungsForm.patchValue({ 'beiteiligtePersonen': this.termin.beteiligtePersonen });
            this.terminBearbeitungsForm.patchValue({ 'zeitpunkt': this.termin.zeitpunt });
        }
    }
    TerminSubPage.prototype.submitTerminErstellungs = function () {
        var _this = this;
        if (this.terminErstellungsForm.valid) {
            var bezeichnung = this.terminErstellungsForm.get('bezeichnung').value;
            var beteiligte = this.terminErstellungsForm.get('beiteiligtePersonen').value;
            var zeitpunkt = this.terminErstellungsForm.get('zeitpunkt').value;
            var termin_1 = {
                'bezeichnung': bezeichnung,
                'beteiligtePersonen': beteiligte,
                'zeitpunt': zeitpunkt
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
    TerminSubPage.prototype.submitTerminBearbeitung = function () {
        var _this = this;
        if (this.terminBearbeitungsForm.valid) {
            var bezeichnung = this.terminBearbeitungsForm.get('bezeichnung').value;
            var beteiligte = this.terminBearbeitungsForm.get('beiteiligtePersonen').value;
            var zeitpunkt = this.terminBearbeitungsForm.get('zeitpunkt').value;
            var termin_2 = {
                'id': this.termin.id,
                'bezeichnung': bezeichnung,
                'beteiligtePersonen': beteiligte,
                'zeitpunt': zeitpunkt
            };
            this.terminProvider.terminAendern(termin_2).subscribe(function (termine) {
                console.log(termine);
                _this.navCtrl.pop();
                var createToast = _this.toastCtrl.create({
                    message: termin_2.bezeichnung + ' wurde erfolgreich geändert',
                    position: 'bottom',
                    cssClass: 'erfolgreichToast',
                    duration: 2000
                });
                createToast.present();
            });
        }
    };
    TerminSubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termin-sub',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin-sub\termin-sub.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title *ngIf="operation === \'erstellen\'">Termin Erstellung</ion-title>\n\n    <ion-title *ngIf="operation === \'bearbeiten\'">Termin Bearbeitung</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-card *ngIf="operation === \'erstellen\'">\n\n    <ion-card-header>\n\n      Termin erstellen\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="submitTerminErstellungs()" [formGroup]="terminErstellungsForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="bezeichnung" floating>Bezeichnung</ion-label>\n\n            <ion-input formControlName="bezeichnung" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="beiteiligtePersonen" floating>Beteiligte</ion-label>\n\n            <ion-input formControlName="beiteiligtePersonen" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-datetime displayFormat="DD.MM.YYYY"\n\n                          formControlName="zeitpunkt"\n\n                          placeholder="Zeitpunkt auswählen"\n\n                          min="2017"\n\n                          max="2020"\n\n                          cancelText="Abbrechen"\n\n                          doneText="Zeitpunkt übernehmen"></ion-datetime>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button ion-button block type="submit" \n\n                [disabled]="!terminErstellungsForm.valid">\n\n          Termin erstellen\n\n        </button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card *ngIf="operation === \'bearbeiten\'">\n\n    <ion-card-header>\n\n      Termin bearbeiten\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="submitTerminBearbeitung()" [formGroup]="terminBearbeitungsForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="bezeichnung" floating>Bezeichnung</ion-label>\n\n            <ion-input formControlName="bezeichnung" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="beiteiligtePersonen" floating>Beteiligte</ion-label>\n\n            <ion-input formControlName="beiteiligtePersonen" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-datetime displayFormat="DD.MM.YYYY"\n\n                          formControlName="zeitpunkt"\n\n                          placeholder="Zeitpunkt auswählen"\n\n                          min="2017"\n\n                          max="2020"\n\n                          cancelText="Abbrechen"\n\n                          doneText="Zeitpunkt übernehmen"></ion-datetime>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button ion-button block type="submit" \n\n                [disabled]="!terminBearbeitungsForm.valid">\n\n          Termin bearbeiten\n\n        </button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin-sub\termin-sub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_termin_termin__["a" /* TerminProvider */]])
    ], TerminSubPage);
    return TerminSubPage;
}());

//# sourceMappingURL=termin-sub.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_komponenten_komponenten__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_actionsheet_actionsheet__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_benutzer_benutzer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_random_int_random_int__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_laender_laender__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_badge_badge__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_app_app__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_avatar_avatar__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_button_button__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_card_card__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_checkbox_checkbox__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chip_chip__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_col_and_config_col_and_config__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_content_content__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_datetime_datetime__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_events_events__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_events_sub_events_sub__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_fab_fab__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_gestures_gestures__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_grid_grid__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_haptic_haptic__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_hide_when_hide_when__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_icon_icon__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_img_img__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_infinite_scroll_infinite_scroll__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_input_input__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_termin_termin__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_termin_sub_termin_sub__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_handler_myErrorHandler__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_ionic_my_ionic_my_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_home_home_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_item_item__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_item_recorder_item_recorder__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_item_sliding_item_sliding__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_keyboard_keyboard__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_label_label__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_loading_loading__ = __webpack_require__(195);
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
                __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__["a" /* TerminPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termin_sub_termin_sub__["a" /* TerminSubPage */]
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
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
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
                __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__["a" /* TerminPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termin_sub_termin_sub__["a" /* TerminSubPage */]
            ],
            providers: [
                // {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true},
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_42__providers_handler_myErrorHandler__["a" /* MyErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_benutzer_benutzer__["a" /* BenutzerProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_random_int_random_int__["a" /* RandomIntProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_laender_laender__["a" /* LaenderProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_termin_termin__["a" /* TerminProvider */],
                __WEBPACK_IMPORTED_MODULE_50__angular_common__["d" /* DatePipe */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
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

/***/ 302:
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
            selector: 'page-ionic-my',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\ionic-my\ionic-my.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>IonicPage Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>Die Page hat ein eigenes Modul.</ion-row>\n\n  <ion-row>Dieses wird in App Modules injected (Das Modul und nicht die Page ansich).</ion-row>\n\n\n\n  <ion-row>Die Page selbst hat @IonicPage decorator</ion-row>\n\n\n\n  <ion-row>\n\n    Properties für diesen Decorator:\n\n  </ion-row>\n\n  <ion-row>\n\n    name: \'meinePage\'\n\n  </ion-row>\n\n  <ion-row>\n\n    segment: \'myPage\'\n\n  </ion-row>\n\n  <ion-row>\n\n    // Wenn segement nicht angegeben wird wird name verwendet\n\n  </ion-row>\n\n  <ion-row>\n\n    Zu segement Propertie können auch \'Url-Params\' angegeben werden\' z.b.: segment: \'myPage:id\'\n\n  </ion-row>\n\n  <ion-row>\n\n    Diese muss dann beim wechsel (this.navCtrl.push) angegeben werden\n\n  </ion-row>\n\n  <ion-row>\n\n    defaultHistory: [\'list\']\n\n  </ion-row>\n\n  <ion-row>\n\n    defaultHistory wird verwendet um mit den Back Button speziell hin zu navigieren. z.B.: Back button würde jetzt zu list wechseln\n\n  </ion-row>\n\n  <ion-row>\n\n    priority: \'high\'\n\n  </ion-row>\n\n  <ion-row>\n\n    Default priority: \'off\'. High bedeutet beim App start die Page schon laden (nicht erst beim Klick auf die Page).\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\ionic-my\ionic-my.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], IonicMyPage);
    return IonicMyPage;
}());

//# sourceMappingURL=ionic-my.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_komponenten_komponenten__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_termin_termin__ = __webpack_require__(240);
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
            { title: 'Termin', component: __WEBPACK_IMPORTED_MODULE_6__pages_termin_termin__["a" /* TerminPage */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 329:
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
        if (error.status === 500) {
            backendExceptionToast.present();
            return;
        }
        if (error.status === 0 && error.url === null) {
            backendNichtVerfuegbarToast.present();
            return;
        }
        throw error;
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

//# sourceMappingURL=myErrorHandler.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpConstants; });
var HttpConstants = (function () {
    function HttpConstants() {
    }
    HttpConstants.LOCALHOST_API = 'http://localhost:8080/dr-solutions/rest/backendService/';
    HttpConstants.RENES_IP_API = 'http://192.168.1.9:8080/dr-solutions/rest/backendService/';
    return HttpConstants;
}());

//# sourceMappingURL=httpConstants.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KomponentenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionsheet_actionsheet__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__badge_badge__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__avatar_avatar__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button_button__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_card__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkbox_checkbox__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chip_chip__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__col_and_config_col_and_config__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_content__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datetime_datetime__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__events_events__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fab_fab__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gestures_gestures__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__grid_grid__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__haptic_haptic__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__hide_when_hide_when__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__icon_icon__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__img_img__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__infinite_scroll_infinite_scroll__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__input_input__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__item_item__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__item_sliding_item_sliding__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__item_recorder_item_recorder__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__keyboard_keyboard__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__label_label__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__loading_loading__ = __webpack_require__(195);
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
            selector: 'page-komponenten',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\komponenten\komponenten.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <ion-icon  name="happy" color="nigger"></ion-icon>\n\n      Komponenten\n\n      <ion-icon  name="happy" color="nigger"></ion-icon>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding> \n\n\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToActionsheet()">\n\n          Actionsheet\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToAlert()">\n\n          Alert\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToApp()">\n\n          App\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToAvatar()">\n\n          Avatar\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToBadge()">\n\n          Badge\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToButton()">\n\n          Button\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToCard()">\n\n            Card\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToCheckbox()">\n\n            Checkbox\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToChip()">\n\n          Chip\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToColAndConfig()">\n\n          Col and Config\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToContent()">\n\n          Content\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToDateTime()">\n\n          DateTime\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToEvents()">\n\n          Events\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToFabButton()">\n\n          FabButton\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToGestures()">\n\n          Gestures\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToGrid()">\n\n          Grid\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToHaptic()">\n\n          Haptic\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToHideWhen()">\n\n          HideWhen\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIcon()">\n\n          Icon\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToImg()">\n\n          Img\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToInfiniteScroll()">\n\n          InfiniteScroll\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToInput()">\n\n          Input\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIonicPage()">\n\n          IonicPage\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToItem()">\n\n            Item\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemRecorder()">\n\n          ItemRecorder\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemSliding()">\n\n          ItemSliding\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToKeyboard()">\n\n          Keyboard\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToLabel()">\n\n          Label\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToList()">\n\n          List und Storage\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToLoadingController()">\n\n          LoadingController\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenu()">\n\n          Menu\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenuClose()">\n\n          MenuClose\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenuController()">\n\n          MenuController\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToMenuToggle()">\n\n          MenuToggle\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToModalController()">\n\n            ModalController\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNav()">\n\n            Nav\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavbar()">\n\n            Navbar\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavController()">\n\n            NavController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavParams()">\n\n            NavParams\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavPop()">\n\n            NavPop\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNavPush()">\n\n            NavPush\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToNote()">\n\n            Note\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToOption()">\n\n            Option\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToPlatform()">\n\n            Platform\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToPlatformConfigToken()">\n\n            PlatformConfigToken\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToPopoverController()">\n\n            PopoverController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRadioButton()">\n\n            RadioButton\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRadioGroup()">\n\n            RadioGroup\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRange()">\n\n            Range\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRefresher()">\n\n            Refresher\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToregisterModeConfigs()">\n\n            registerModeConfigs\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToRow()">\n\n            Row\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToScroll()">\n\n            Scroll\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSearchbar()">\n\n            Searchbar\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSegment()">\n\n            Segment\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSegmentButton()">\n\n            SegmentButton\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSelect()">\n\n            Select\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToShowWhen()">\n\n            ShowWhen\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSlide()">\n\n            Slide\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSpinner()">\n\n            Spinner\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToSplitPane()">\n\n            SplitPane\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTab()">\n\n            Tab\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTabs()">\n\n            Tabs\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToThumbnail()">\n\n            Thumbnail\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTitle()">\n\n            Title\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToToastController()">\n\n            ToastController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToToogle()">\n\n            Toogle\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToToolbar()">\n\n            Toolbar\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToTypography()">\n\n            Typography\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToViewController()">\n\n            ViewController\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-left outline color="btnColor" (click)="goToVirualScroll()">\n\n            VirtualScroll\n\n          </button>\n\n        </ion-col>\n\n    </ion-row>\n\n    \n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\komponenten\komponenten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], KomponentenPage);
    return KomponentenPage;
}());

//# sourceMappingURL=komponenten.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemSlidingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__ = __webpack_require__(19);
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
            selector: 'page-item-sliding',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-sliding\item-sliding.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Sliding Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list *ngFor="let land of items">\n\n    <ion-item-sliding #item (ionDrag)="onDrag($event)" (ionSwipe)="delete($event, land)">\n\n      <ion-item>\n\n        <img src="{{ land.flag }}" width="40" height="20"> {{ land.name }}\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button (click)="teilen(item)">\n\n          <ion-icon name="share"></ion-icon>\n\n          Teilen\n\n        </button>\n\n        <button ion-button (click)="gelesen(item, land.name)">Gelesen</button>\n\n      </ion-item-options>\n\n\n\n      <ion-item-options side="right">\n\n        <button ion-button expandable color="primary" (click)="delete(item, land)">Delete</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-item *ngFor="let gelesenesLand of geleseneLaender">\n\n    {{ gelesenesLand }} wurde gelesen!\n\n  </ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-sliding\item-sliding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ItemSlidingPage);
    return ItemSlidingPage;
}());

//# sourceMappingURL=item-sliding.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_alterValidator__ = __webpack_require__(301);
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
            selector: 'page-input',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\input\input.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Input Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- input events können auch bei ion-input verwendet werden -->\n\n  <!-- (keyup), (keydown), (keypress), (input), (change), (focus), (invalid), (change), .... -->\n\n  <form name="testForm">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Verschiedene "Styles"\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label fixed>Fixed Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Floating Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Inline Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Placeholder"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Floating Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Floating Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <ion-card>\n\n      <ion-card-header>\n\n        Verschiedene Typen\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="password" placeholder="Password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="email" placeholder="Email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Number"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="search" placeholder="Search"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="tel" placeholder="Tel"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="url" placeholder="Url"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Other Properties\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Readonly" readonly></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Min 2 max 5" min="2" max="5"></ion-input>\n\n        </ion-item>      \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="ClearOnEdit" clearOnEdit></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="ClearInput" clearInput></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Autocorrect" autocorrect="on"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Autocomplete" autocomplete="on"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </form>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Template Driven Form\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form #templateDrivenForm="ngForm" (ngSubmit)="onSubmitTemplateDrivenForm(templateDrivenForm)">\n\n        <ion-item>\n\n          <ion-label for="marke" floating>Automarke</ion-label>\n\n          <ion-input type="text" [(ngModel)]="auto.marke" name="marke" required></ion-input>\n\n        </ion-item>\n\n        <!-- Submit Button kann [disabled]="templateDrivenForm.invalid" haben -->\n\n        <button ion-button type="submit">Sign up</button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reactive Form\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="processForm1()" [formGroup]="form1">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="vorname" floating>Vorname</ion-label>\n\n            <ion-input formControlName="vorname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!form1.controls.vorname.valid  && (form1.controls.vorname.dirty || form1.controls.vorname.touched)">\n\n            <p class="errorMessage">Bitte Vornamen eingeben</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="nachname" floating>Nachname</ion-label>\n\n            <ion-input formControlName="nachname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!form1.controls.nachname.valid  && (form1.controls.nachname.dirty || form1.controls.nachname.touched)">\n\n            <p class="errorMessage">Bitte Nachnamen eingeben</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="alter" floating>Alter</ion-label>\n\n            <ion-input formControlName="alter" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!form1.controls.alter.valid  && (form1.controls.alter.dirty || form1.controls.alter.touched)">\n\n            <p class="errorMessage">Bitte korrektes Alter eingeben</p>\n\n          </ion-item>\n\n        </ion-list>\n\n        <!-- Submit Button sollte [disabled]="!form1.valid" haben -->\n\n        <button ion-button block type="submit">Submit</button>\n\n\n\n        <p>Vorname: {{ form1.get(\'vorname\').value }}</p>\n\n        <p>Nachname: {{ form1.get(\'nachname\').value }}</p>\n\n        <p>Alter: {{ form1.get(\'alter\').value }}</p>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reactive Form 2\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="processForm2()" [formGroup]="form2">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="vorname" floating>Vorname</ion-label>\n\n            <ion-input formControlName="vorname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="nachname" floating>Nachname</ion-label>\n\n            <ion-input formControlName="nachname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="alter" floating>Alter</ion-label>\n\n            <ion-input formControlName="alter" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <!-- Submit Button sollte [disabled]="!form1.valid" haben -->\n\n        <button ion-button block type="submit">Submit</button>\n\n\n\n        <p>Name value: {{ form2.get(\'vorname\').value }}</p>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\input\input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map
=======
webpackJsonp([0],{154:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id=154},170:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id=170},200:function(l,n,u){"use strict";function o(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,7,"button",[["class","item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,6).close()&&o}if("click"===n){o=!1!==a.openPage(l.context.$implicit)&&o}return o},un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,4,{contentLabel:0}),ul._18(603979776,5,{_buttons:1}),ul._18(603979776,6,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),ul.Y(6,16384,null,0,cn.a,[sn.a],{menuClose:[0,"menuClose"]},null),(l()(),ul._20(7,2,["\n        ","\n      "]))],function(l,n){l(n,6,0,"")},function(l,n){l(n,7,0,n.context.$implicit.title)})}function a(l){return ul._22(0,[ul._18(402653184,1,{nav:0}),(l()(),ul.Z(1,0,null,null,28,"ion-menu",[["role","navigation"]],null,null,null,_n.b,_n.a)),ul._17(6144,null,dn.a,null,[bn.a]),ul.Y(3,245760,null,2,bn.a,[sn.a,ul.j,tn.a,gn.a,ul.z,pn.a,mn.l,hn.a,fn.a],{content:[0,"content"]},null),ul._18(335544320,2,{menuContent:0}),ul._18(335544320,3,{menuNav:0}),(l()(),ul._20(-1,0,["\n  "])),(l()(),ul.Z(7,0,null,0,10,"ion-header",[],null,null,null,null,null)),ul.Y(8,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(10,0,null,null,6,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,Cn.b,Cn.a)),ul.Y(11,49152,null,0,vn.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n      "])),(l()(),ul.Z(13,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(14,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Menu"])),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,0,["\n\n  "])),(l()(),ul.Z(19,0,null,0,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(20,4374528,[[2,4]],0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n    "])),(l()(),ul.Z(22,0,null,1,5,"ion-list",[],null,null,null,null,null)),ul.Y(23,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.U(16777216,null,null,1,null,o)),ul.Y(26,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul._20(-1,0,["\n\n"])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n"])),(l()(),ul.Z(32,0,null,null,2,"ion-nav",[["swipeBackEnabled","false"]],null,null,null,In.b,In.a)),ul._17(6144,null,dn.a,null,[Ln.a]),ul.Y(34,4374528,[[1,4],["content",4]],0,Ln.a,[[2,Zn.a],[2,Tn.a],fn.a,tn.a,gn.a,ul.j,ul.u,ul.z,ul.i,mn.l,Dn.a,[2,Mn.a],hn.a,ul.k],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null)],function(l,n){var u=n.component;l(n,3,0,ul._13(n,34));l(n,26,0,u.pages);l(n,34,0,"false",u.rootPage)},function(l,n){l(n,10,0,ul._13(n,11)._sbPadding);l(n,19,0,ul._13(n,20).statusbarPadding,ul._13(n,20)._hasRefresher)})}function t(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,20,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul.Z(3,0,null,null,16,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==ul._13(l,8).toggle()&&o}return o},Sn.b,Sn.a)),ul.Y(7,1097728,[[1,4]],0,On.a,[[8,""],tn.a,ul.j,ul.z],null,null),ul.Y(8,1064960,null,0,An.a,[sn.a,[2,Zn.a],[2,On.a],[2,yn.a]],{menuToggle:[0,"menuToggle"]},null),ul.Y(9,16384,null,1,Rn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),ul._18(603979776,1,{_buttons:1}),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(13,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(16,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(17,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Home"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n"])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul.Z(22,0,null,null,30,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(23,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(25,0,null,1,1,"h3",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["Ionic Menu Starter"])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(28,0,null,1,4,"p",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    If you get lost, the "])),(l()(),ul.Z(30,0,null,null,1,"a",[["href","http://ionicframework.com/docs/v2"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["docs"])),(l()(),ul._20(-1,null,[" will show you the way.\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(34,0,null,1,5,"button",[["ion-button",""],["menuToggle",""],["secondary",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==ul._13(l,36).toggle()&&o}return o},Sn.b,Sn.a)),ul.Y(35,1097728,[[2,4]],0,On.a,[[8,""],tn.a,ul.j,ul.z],null,null),ul.Y(36,1064960,null,0,An.a,[sn.a,[2,Zn.a],[2,On.a],[2,yn.a]],{menuToggle:[0,"menuToggle"]},null),ul.Y(37,16384,null,1,Rn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),ul._18(603979776,2,{_buttons:1}),(l()(),ul._20(-1,0,["Toggle Menu"])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(41,0,null,1,10,"ion-footer",[],null,null,null,null,null)),ul.Y(42,16384,null,0,En.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(44,0,null,null,6,"ion-toolbar",[["class","toolbar"],["color","primary"]],[[2,"statusbar-padding",null]],null,null,Cn.b,Cn.a)),ul.Y(45,49152,null,0,vn.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,3,["\n      "])),(l()(),ul.Z(47,0,null,3,2,"ion-title",[],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToKomponenten()&&o}return o},zn.b,zn.a)),ul.Y(48,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Zu den Komponenten"])),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,36,0,"");l(n,45,0,"primary")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,6,0,ul._13(n,8).isHidden);l(n,12,0,ul._13(n,13)._hidden);l(n,22,0,ul._13(n,23).statusbarPadding,ul._13(n,23)._hasRefresher);l(n,34,0,ul._13(n,36).isHidden);l(n,44,0,ul._13(n,45)._sbPadding)})}function e(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,26,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,22,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==ul._13(l,8).toggle()&&o}return o},Sn.b,Sn.a)),ul.Y(7,1097728,[[1,4]],0,On.a,[[8,""],tn.a,ul.j,ul.z],null,null),ul.Y(8,1064960,null,0,An.a,[sn.a,[2,Zn.a],[2,On.a],[2,yn.a]],{menuToggle:[0,"menuToggle"]},null),ul.Y(9,16384,null,1,Rn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),ul._18(603979776,1,{_buttons:1}),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(12,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(13,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(16,0,null,3,8,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(17,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(19,0,null,0,1,"ion-icon",[["color","nigger"],["name","happy"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(20,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),ul._20(-1,0,["\n      Komponenten\n      "])),(l()(),ul.Z(22,0,null,0,1,"ion-icon",[["color","nigger"],["name","happy"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(23,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(28,0,null,null,758,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(29,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,[" \n\n  "])),(l()(),ul.Z(31,0,null,1,754,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(32,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(34,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(35,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(37,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(38,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(40,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToActionsheet()&&o}return o},Sn.b,Sn.a)),ul.Y(41,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Actionsheet\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(45,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(46,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(48,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToAlert()&&o}return o},Sn.b,Sn.a)),ul.Y(49,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Alert\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(54,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(55,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(57,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(58,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(60,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToApp()&&o}return o},Sn.b,Sn.a)),ul.Y(61,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          App\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(65,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(66,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(68,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToAvatar()&&o}return o},Sn.b,Sn.a)),ul.Y(69,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Avatar\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(74,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(75,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(77,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(78,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(80,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToBadge()&&o}return o},Sn.b,Sn.a)),ul.Y(81,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Badge\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(85,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(86,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(88,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToButton()&&o}return o},Sn.b,Sn.a)),ul.Y(89,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Button\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(94,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(95,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(97,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(98,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(100,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToCard()&&o}return o},Sn.b,Sn.a)),ul.Y(101,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Card\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(105,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(106,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(108,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToCheckbox()&&o}return o},Sn.b,Sn.a)),ul.Y(109,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Checkbox\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(114,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(115,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(117,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(118,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(120,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToChip()&&o}return o},Sn.b,Sn.a)),ul.Y(121,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Chip\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(125,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(126,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(128,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToColAndConfig()&&o}return o},Sn.b,Sn.a)),ul.Y(129,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Col and Config\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(134,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(135,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(137,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(138,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(140,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToContent()&&o}return o},Sn.b,Sn.a)),ul.Y(141,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Content\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(145,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(146,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(148,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToDateTime()&&o}return o},Sn.b,Sn.a)),ul.Y(149,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          DateTime\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(154,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(155,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(157,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(158,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(160,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToEvents()&&o}return o},Sn.b,Sn.a)),ul.Y(161,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Events\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(165,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(166,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(168,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToFabButton()&&o}return o},Sn.b,Sn.a)),ul.Y(169,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          FabButton\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(174,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(175,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(177,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(178,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(180,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToGestures()&&o}return o},Sn.b,Sn.a)),ul.Y(181,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Gestures\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(185,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(186,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(188,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToGrid()&&o}return o},Sn.b,Sn.a)),ul.Y(189,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Grid\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(194,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(195,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(197,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(198,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(200,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToHaptic()&&o}return o},Sn.b,Sn.a)),ul.Y(201,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Haptic\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(205,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(206,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(208,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToHideWhen()&&o}return o},Sn.b,Sn.a)),ul.Y(209,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          HideWhen\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(214,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(215,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(217,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(218,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(220,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToIcon()&&o}return o},Sn.b,Sn.a)),ul.Y(221,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Icon\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(225,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(226,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(228,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToImg()&&o}return o},Sn.b,Sn.a)),ul.Y(229,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Img\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(234,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(235,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(237,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(238,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(240,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToInfiniteScroll()&&o}return o},Sn.b,Sn.a)),ul.Y(241,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          InfiniteScroll\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(245,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(246,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(248,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToInput()&&o}return o},Sn.b,Sn.a)),ul.Y(249,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Input\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(254,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(255,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(257,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(258,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(260,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToIonicErrorHandler()&&o}return o},Sn.b,Sn.a)),ul.Y(261,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          IonicErrorHandler\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(265,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(266,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(268,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToIonicModule()&&o}return o},Sn.b,Sn.a)),ul.Y(269,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          IonicModule\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(274,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(275,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(277,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(278,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(280,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToIonicPage()&&o}return o},Sn.b,Sn.a)),ul.Y(281,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          IonicPage\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(285,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(286,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(288,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToIonicPageModule()&&o}return o},Sn.b,Sn.a)),ul.Y(289,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          IonicPageModule\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(294,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(295,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(297,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(298,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(300,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToItem()&&o}return o},Sn.b,Sn.a)),ul.Y(301,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Item\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(305,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(306,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(308,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToItemOptions()&&o}return o},Sn.b,Sn.a)),ul.Y(309,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          ItemOptions\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(314,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(315,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(317,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(318,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(320,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToItemRecorder()&&o}return o},Sn.b,Sn.a)),ul.Y(321,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          ItemRecorder\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(325,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(326,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(328,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToItemSliding()&&o}return o},Sn.b,Sn.a)),ul.Y(329,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          ItemSliding\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(334,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(335,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(337,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(338,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(340,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToKeyboard()&&o}return o},Sn.b,Sn.a)),ul.Y(341,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Keyboard\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(345,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(346,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(348,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToLabel()&&o}return o},Sn.b,Sn.a)),ul.Y(349,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Label\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(354,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(355,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(357,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(358,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(360,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToList()&&o}return o},Sn.b,Sn.a)),ul.Y(361,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          List\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(365,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(366,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(368,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToLoadingController()&&o}return o},Sn.b,Sn.a)),ul.Y(369,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          LoadingController\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(374,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(375,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(377,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(378,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(380,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToMenu()&&o}return o},Sn.b,Sn.a)),ul.Y(381,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          Menu\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(385,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(386,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(388,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToMenuClose()&&o}return o},Sn.b,Sn.a)),ul.Y(389,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          MenuClose\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(394,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(395,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(397,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(398,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(400,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToMenuController()&&o}return o},Sn.b,Sn.a)),ul.Y(401,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          MenuController\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(405,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(406,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(408,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToMenuToggle()&&o}return o},Sn.b,Sn.a)),ul.Y(409,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n          MenuToggle\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(414,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(415,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(417,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(418,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(420,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToModalController()&&o}return o},Sn.b,Sn.a)),ul.Y(421,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            ModalController\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(425,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(426,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(428,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToNav()&&o}return o},Sn.b,Sn.a)),ul.Y(429,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Nav\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(434,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(435,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(437,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(438,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(440,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToNavbar()&&o}return o},Sn.b,Sn.a)),ul.Y(441,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Navbar\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(445,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(446,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(448,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToNavController()&&o}return o},Sn.b,Sn.a)),ul.Y(449,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            NavController\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(454,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(455,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(457,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(458,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(460,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToNavParams()&&o}return o},Sn.b,Sn.a)),ul.Y(461,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            NavParams\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(465,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(466,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(468,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToNavPop()&&o}return o},Sn.b,Sn.a)),ul.Y(469,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            NavPop\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(474,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(475,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(477,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(478,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(480,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToNavPush()&&o}return o},Sn.b,Sn.a)),ul.Y(481,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            NavPush\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(485,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(486,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(488,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToNote()&&o}return o},Sn.b,Sn.a)),ul.Y(489,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Note\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(494,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(495,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(497,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(498,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(500,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToOption()&&o}return o},Sn.b,Sn.a)),ul.Y(501,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Option\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(505,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(506,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(508,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToPlatform()&&o}return o},Sn.b,Sn.a)),ul.Y(509,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Platform\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(514,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(515,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(517,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(518,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(520,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToPlatformConfigToken()&&o}return o},Sn.b,Sn.a)),ul.Y(521,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            PlatformConfigToken\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(525,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(526,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(528,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToPopoverController()&&o}return o},Sn.b,Sn.a)),ul.Y(529,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            PopoverController\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(534,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(535,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(537,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(538,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(540,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToRadioButton()&&o}return o},Sn.b,Sn.a)),ul.Y(541,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            RadioButton\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(545,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(546,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(548,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToRadioGroup()&&o}return o},Sn.b,Sn.a)),ul.Y(549,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            RadioGroup\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(554,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(555,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(557,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(558,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(560,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToRange()&&o}return o},Sn.b,Sn.a)),ul.Y(561,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Range\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(565,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(566,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(568,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToRefresher()&&o}return o},Sn.b,Sn.a)),ul.Y(569,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Refresher\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(574,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(575,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(577,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(578,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(580,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToregisterModeConfigs()&&o}return o},Sn.b,Sn.a)),ul.Y(581,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            registerModeConfigs\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(585,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(586,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(588,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToRow()&&o}return o},Sn.b,Sn.a)),ul.Y(589,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Row\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(594,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(595,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(597,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(598,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(600,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToScroll()&&o}return o},Sn.b,Sn.a)),ul.Y(601,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Scroll\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(605,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(606,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(608,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToSearchbar()&&o}return o},Sn.b,Sn.a)),ul.Y(609,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Searchbar\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(614,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(615,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(617,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(618,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(620,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToSegment()&&o}return o},Sn.b,Sn.a)),ul.Y(621,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Segment\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(625,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(626,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(628,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToSegmentButton()&&o}return o},Sn.b,Sn.a)),ul.Y(629,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            SegmentButton\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(634,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(635,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(637,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(638,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(640,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToSelect()&&o}return o},Sn.b,Sn.a)),ul.Y(641,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Select\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(645,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(646,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(648,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToShowWhen()&&o}return o},Sn.b,Sn.a)),ul.Y(649,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            ShowWhen\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(654,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(655,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(657,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(658,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(660,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToSlide()&&o}return o},Sn.b,Sn.a)),ul.Y(661,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Slide\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(665,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(666,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(668,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToSpinner()&&o}return o},Sn.b,Sn.a)),ul.Y(669,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Spinner\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(674,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(675,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(677,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(678,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(680,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToSplitPane()&&o}return o},Sn.b,Sn.a)),ul.Y(681,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            SplitPane\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(685,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(686,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(688,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToTab()&&o}return o},Sn.b,Sn.a)),ul.Y(689,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Tab\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(694,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(695,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(697,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(698,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(700,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToTabs()&&o}return o},Sn.b,Sn.a)),ul.Y(701,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Tabs\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(705,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(706,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(708,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToThumbnail()&&o}return o},Sn.b,Sn.a)),ul.Y(709,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Thumbnail\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(714,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(715,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(717,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(718,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(720,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToTitle()&&o}return o},Sn.b,Sn.a)),ul.Y(721,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Title\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(725,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(726,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(728,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToToastController()&&o}return o},Sn.b,Sn.a)),ul.Y(729,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            ToastController\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(734,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(735,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(737,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(738,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(740,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToToogle()&&o}return o},Sn.b,Sn.a)),ul.Y(741,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Toogle\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(745,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(746,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(748,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToToolbar()&&o}return o},Sn.b,Sn.a)),ul.Y(749,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Toolbar\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(754,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(755,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(757,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(758,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(760,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToTypography()&&o}return o},Sn.b,Sn.a)),ul.Y(761,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            Typography\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(765,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(766,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(768,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToViewController()&&o}return o},Sn.b,Sn.a)),ul.Y(769,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            ViewController\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(774,0,null,null,10,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(775,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(777,0,null,null,6,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(778,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(780,0,null,null,2,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["outline",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToVirualScroll()&&o}return o},Sn.b,Sn.a)),ul.Y(781,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["\n            VirtualScroll\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n    \n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,8,0,"");l(n,13,0,"menu");l(n,20,0,"nigger","happy");l(n,23,0,"nigger","happy");l(n,41,0,"btnColor","");l(n,49,0,"btnColor","");l(n,61,0,"btnColor","");l(n,69,0,"btnColor","");l(n,81,0,"btnColor","");l(n,89,0,"btnColor","");l(n,101,0,"btnColor","");l(n,109,0,"btnColor","");l(n,121,0,"btnColor","");l(n,129,0,"btnColor","");l(n,141,0,"btnColor","");l(n,149,0,"btnColor","");l(n,161,0,"btnColor","");l(n,169,0,"btnColor","");l(n,181,0,"btnColor","");l(n,189,0,"btnColor","");l(n,201,0,"btnColor","");l(n,209,0,"btnColor","");l(n,221,0,"btnColor","");l(n,229,0,"btnColor","");l(n,241,0,"btnColor","");l(n,249,0,"btnColor","");l(n,261,0,"btnColor","");l(n,269,0,"btnColor","");l(n,281,0,"btnColor","");l(n,289,0,"btnColor","");l(n,301,0,"btnColor","");l(n,309,0,"btnColor","");l(n,321,0,"btnColor","");l(n,329,0,"btnColor","");l(n,341,0,"btnColor","");l(n,349,0,"btnColor","");l(n,361,0,"btnColor","");l(n,369,0,"btnColor","");l(n,381,0,"btnColor","");l(n,389,0,"btnColor","");l(n,401,0,"btnColor","");l(n,409,0,"btnColor","");l(n,421,0,"btnColor","");l(n,429,0,"btnColor","");l(n,441,0,"btnColor","");l(n,449,0,"btnColor","");l(n,461,0,"btnColor","");l(n,469,0,"btnColor","");l(n,481,0,"btnColor","");l(n,489,0,"btnColor","");l(n,501,0,"btnColor","");l(n,509,0,"btnColor","");l(n,521,0,"btnColor","");l(n,529,0,"btnColor","");l(n,541,0,"btnColor","");l(n,549,0,"btnColor","");l(n,561,0,"btnColor","");l(n,569,0,"btnColor","");l(n,581,0,"btnColor","");l(n,589,0,"btnColor","");l(n,601,0,"btnColor","");l(n,609,0,"btnColor","");l(n,621,0,"btnColor","");l(n,629,0,"btnColor","");l(n,641,0,"btnColor","");l(n,649,0,"btnColor","");l(n,661,0,"btnColor","");l(n,669,0,"btnColor","");l(n,681,0,"btnColor","");l(n,689,0,"btnColor","");l(n,701,0,"btnColor","");l(n,709,0,"btnColor","");l(n,721,0,"btnColor","");l(n,729,0,"btnColor","");l(n,741,0,"btnColor","");l(n,749,0,"btnColor","");l(n,761,0,"btnColor","");l(n,769,0,"btnColor","");l(n,781,0,"btnColor","")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,6,0,ul._13(n,8).isHidden);l(n,12,0,ul._13(n,13)._hidden);l(n,19,0,ul._13(n,20)._hidden);l(n,22,0,ul._13(n,23)._hidden);l(n,28,0,ul._13(n,29).statusbarPadding,ul._13(n,29)._hasRefresher)})}function i(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,8,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(1,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["Error:"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(6,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),ul._20(7,null,["",""])),(l()(),ul._20(-1,null,["\n  "]))],null,function(l,n){l(n,7,0,n.component.errorMessage)})}function r(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Actionsheet Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,26,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["  \n\n  "])),(l()(),ul.Z(15,0,null,1,2,"button",[["color","primary"],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.presentActionSheet()&&o}return o},Sn.b,Sn.a)),ul.Y(16,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["Öffne Actionsheet"])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(19,0,null,1,5,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(20,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(22,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["Random Integer"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(26,0,null,1,5,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(27,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(29,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),ul._20(30,null,["",""])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(33,0,null,1,1,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(34,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.U(16777216,null,1,1,null,i)),ul.Y(37,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,16,0,"primary");l(n,37,0,u.errorMessage)},function(l,n){var u=n.component;l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,30,0,u.randomInt)})}function c(l){return ul._22(0,[(l()(),ul._20(-1,null,["\n"])),(l()(),ul.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(2,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(5,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(7,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(8,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Alert Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(13,0,null,null,2,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(14,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],null,function(l,n){l(n,4,0,ul._13(n,5)._hidden,ul._13(n,5)._sbPadding);l(n,13,0,ul._13(n,14).statusbarPadding,ul._13(n,14)._hasRefresher)})}function s(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,12,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(7,0,null,0,4,"ion-avatar",[["item-left",""]],null,null,null,null,null)),ul.Y(8,16384,null,0,au.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(12,2,["\n      "," \n      "," \n    "]))],null,function(l,n){l(n,10,0,ul._2(1,"",n.context.$implicit.picture.thumbnail,""));l(n,12,0,n.context.$implicit.name.first,n.context.$implicit.name.last)})}function _(l){return ul._22(0,[(l()(),ul._20(-1,null,["\n"])),(l()(),ul.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(2,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(5,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(7,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(8,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["list"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(13,0,null,null,9,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(14,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(16,0,null,1,5,"ion-list",[],null,null,null,null,null)),ul.Y(17,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.U(16777216,null,null,1,null,s)),ul.Y(20,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n"]))],function(l,n){l(n,20,0,n.component.benutzerList)},function(l,n){l(n,4,0,ul._13(n,5)._hidden,ul._13(n,5)._sbPadding);l(n,13,0,ul._13(n,14).statusbarPadding,ul._13(n,14)._hasRefresher)})}function d(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,17,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul.Z(7,0,null,0,0,"img",[["item-start",""]],[[8,"src",4]],null,null,null,null)),(l()(),ul._20(8,2,["\n    "," \n    "])),(l()(),ul.Z(9,0,null,2,2,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(10,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      Einwohnerzahl:\n    "])),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul.Z(13,0,null,4,3,"ion-badge",[["color","btnColor"],["item-end",""]],null,null,null,null,null)),ul.Y(14,16384,null,0,iu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(15,null,["\n      ","\n    "])),ul._16(16,1),(l()(),ul._20(-1,2,["\n  "]))],function(l,n){l(n,14,0,"btnColor")},function(l,n){l(n,7,0,ul._2(1,"",n.context.$implicit.flag,""));l(n,8,0,n.context.$implicit.name);l(n,15,0,ul._21(n,15,0,l(n,16,0,ul._13(n.parent,0),n.context.$implicit.population)))})}function b(l){return ul._22(0,[ul._14(0,xn.e,[ul.r]),(l()(),ul.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(2,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(5,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(7,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(8,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Badge Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(13,0,null,null,5,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(14,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.U(16777216,null,1,1,null,d)),ul.Y(17,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,1,["\n"]))],function(l,n){l(n,17,0,n.component.laender)},function(l,n){l(n,4,0,ul._13(n,5)._hidden,ul._13(n,5)._sbPadding);l(n,13,0,ul._13(n,14).statusbarPadding,ul._13(n,14)._hasRefresher)})}function g(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["App Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,57,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  Dies ist ein Beispiel für die verschiedenen Ionic Methoden.\n  Source Code + Konsole ansehen.\n\n  "])),(l()(),ul.Z(15,0,null,1,1,"span",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["Reihenfolge"])),(l()(),ul._20(-1,1,[":\n\n  "])),(l()(),ul.Z(18,0,null,1,50,"ion-list",[],null,null,null,null,null)),ul.Y(19,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(21,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(22,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(26,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["1. ionViewDidLoad"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(29,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(30,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,4,{contentLabel:0}),ul._18(603979776,5,{_buttons:1}),ul._18(603979776,6,{_icons:1}),ul.Y(34,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["2. ionViewWillEnter"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(37,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(38,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,7,{contentLabel:0}),ul._18(603979776,8,{_buttons:1}),ul._18(603979776,9,{_icons:1}),ul.Y(42,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["3. ionViewDidEnter"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(45,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(46,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,10,{contentLabel:0}),ul._18(603979776,11,{_buttons:1}),ul._18(603979776,12,{_icons:1}),ul.Y(50,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["4. ionViewWillLeave"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(53,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(54,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,13,{contentLabel:0}),ul._18(603979776,14,{_buttons:1}),ul._18(603979776,15,{_icons:1}),ul.Y(58,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["5. ionViewDidLeave"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(61,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(62,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,16,{contentLabel:0}),ul._18(603979776,17,{_buttons:1}),ul._18(603979776,18,{_icons:1}),ul.Y(66,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["6. ionViewWillUnload"])),(l()(),ul._20(-1,null,["  \n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],null,function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function p(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,12,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(7,0,null,0,4,"ion-avatar",[["item-start",""]],null,null,null,null,null)),ul.Y(8,16384,null,0,au.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(10,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(12,2,["\n      ","\n    "]))],null,function(l,n){l(n,10,0,ul._2(1,"",n.context.$implicit.flag,""));l(n,12,0,n.context.$implicit.alpha3Code)})}function m(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Avatar Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,9,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,5,"ion-list",[],null,null,null,null,null)),ul.Y(16,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.U(16777216,null,null,1,null,p)),ul.Y(19,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,19,0,n.component.laender)},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function h(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Button Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,123,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(16,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(18,0,null,null,2,"button",[["color","btnColor"],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(19,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["Normal Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(23,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(24,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(26,0,null,null,2,"button",[["color","btnColor"],["ion-button",""],["outline",""]],null,null,null,Sn.b,Sn.a)),ul.Y(27,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),ul._20(-1,0,["Outline Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(31,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(32,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(34,0,null,null,2,"button",[["clear",""],["color","btnColor"],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(35,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],clear:[1,"clear"]},null),(l()(),ul._20(-1,0,["Clear Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(39,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(40,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(42,0,null,null,2,"button",[["color","btnColor"],["ion-button",""],["round",""]],null,null,null,Sn.b,Sn.a)),ul.Y(43,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],round:[1,"round"]},null),(l()(),ul._20(-1,0,["Round Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(47,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(48,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(50,0,null,null,2,"button",[["block",""],["color","btnColor"],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(51,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],block:[1,"block"]},null),(l()(),ul._20(-1,0,["Block Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(55,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(56,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(58,0,null,null,2,"button",[["color","btnColor"],["full",""],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(59,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],full:[1,"full"]},null),(l()(),ul._20(-1,0,["Full Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(63,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(64,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(66,0,null,null,2,"button",[["color","btnColor"],["ion-button",""],["small",""]],null,null,null,Sn.b,Sn.a)),ul.Y(67,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],small:[1,"small"]},null),(l()(),ul._20(-1,0,["Small Button Größe"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(71,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(72,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(74,0,null,null,2,"button",[["color","btnColor"],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(75,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["Default Button Größe"])),(l()(),ul._20(-1,null,[" \n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(79,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(80,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(82,0,null,null,2,"button",[["color","btnColor"],["ion-button",""],["large",""]],null,null,null,Sn.b,Sn.a)),ul.Y(83,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],large:[1,"large"]},null),(l()(),ul._20(-1,0,["Large Button Größe"])),(l()(),ul._20(-1,null,[" \n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(87,0,null,1,9,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(88,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(90,0,null,null,5,"button",[["color","btnColor"],["icon-left",""],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(91,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(93,0,null,0,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(94,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n      Left Icon Button\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(98,0,null,1,9,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(99,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(101,0,null,null,5,"button",[["color","btnColor"],["icon-right",""],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(102,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n      Right Icon Button\n      "])),(l()(),ul.Z(104,0,null,0,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(105,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(109,0,null,1,9,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(110,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(112,0,null,null,5,"button",[["color","btnColor"],["icon-only",""],["ion-button",""]],null,null,null,Sn.b,Sn.a)),ul.Y(113,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(115,0,null,0,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(116,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(120,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(121,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(123,0,null,null,2,"button",[["color","btnColor"],["ion-button",""],["solid",""]],null,null,null,Sn.b,Sn.a)),ul.Y(124,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],solid:[1,"solid"]},null),(l()(),ul._20(-1,0,["Solid Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(128,0,null,1,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(129,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(131,0,null,null,2,"button",[["color","btnColor"],["ion-button",""],["strong",""]],null,null,null,Sn.b,Sn.a)),ul.Y(132,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],strong:[1,"strong"]},null),(l()(),ul._20(-1,0,["Strong Button"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,19,0,"btnColor");l(n,27,0,"btnColor","");l(n,35,0,"btnColor","");l(n,43,0,"btnColor","");l(n,51,0,"btnColor","");l(n,59,0,"btnColor","");l(n,67,0,"btnColor","");l(n,75,0,"btnColor");l(n,83,0,"btnColor","");l(n,91,0,"btnColor");l(n,94,0,"ice-cream");l(n,102,0,"btnColor");l(n,105,0,"ice-cream");l(n,113,0,"btnColor");l(n,116,0,"ice-cream");l(n,124,0,"btnColor","");l(n,132,0,"btnColor","")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,93,0,ul._13(n,94)._hidden);l(n,104,0,ul._13(n,105)._hidden);l(n,115,0,ul._13(n,116)._hidden)})}function f(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(1,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(3,0,null,null,8,"button",[["clear",""],["icon-left",""],["ion-button",""],["small",""]],null,null,null,Sn.b,Sn.a)),ul.Y(4,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{small:[0,"small"],clear:[1,"clear"]},null),(l()(),ul._20(-1,0,["\n          "])),(l()(),ul.Z(6,0,null,0,1,"ion-icon",[["name","call"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(7,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n          "])),(l()(),ul.Z(9,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),ul._20(10,null,["+",""])),(l()(),ul._20(-1,0,["\n        "])),(l()(),ul._20(-1,null,["\n      "]))],function(l,n){l(n,4,0,"","");l(n,7,0,"call")},function(l,n){l(n,6,0,ul._13(n,7)._hidden);l(n,10,0,n.context.$implicit)})}function Y(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(1,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(3,0,null,null,8,"button",[["clear",""],["icon-left",""],["ion-button",""],["small",""]],null,null,null,Sn.b,Sn.a)),ul.Y(4,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{small:[0,"small"],clear:[1,"clear"]},null),(l()(),ul._20(-1,0,["\n          "])),(l()(),ul.Z(6,0,null,0,1,"ion-icon",[["name","globe"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(7,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n          "])),(l()(),ul.Z(9,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),ul._20(10,null,["",""])),(l()(),ul._20(-1,0,["\n        "])),(l()(),ul._20(-1,null,["\n      "]))],function(l,n){l(n,4,0,"","");l(n,7,0,"globe")},function(l,n){l(n,6,0,ul._13(n,7)._hidden);l(n,10,0,n.context.$implicit)})}function Z(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,32,"ion-card",[["class","myCard"]],null,null,null,null,null)),ul.Y(1,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(3,0,null,null,2,"ion-card-header",[["class","cardHeader"]],null,null,null,null,null)),ul.Y(4,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(5,null,["\n      ","\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(7,0,null,null,2,"ion-card-title",[],null,null,null,null,null)),ul.Y(8,16384,null,0,fu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(9,null,["\n      Hauptstadt: ","\n    "])),(l()(),ul._20(-1,null,["\n      \n    "])),(l()(),ul.Z(11,0,null,null,10,"ion-card-content",[["class","cardContent"]],null,null,null,null,null)),ul.Y(12,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(14,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(16,0,null,null,1,"p",[["class","cardText"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Einwohnerzahl:"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(19,0,null,null,1,"p",[["class","cardText"]],null,null,null,null,null)),(l()(),ul._20(20,null,["",""])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(23,0,null,null,8,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(24,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.U(16777216,null,null,1,null,f)),ul.Y(27,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.U(16777216,null,null,1,null,Y)),ul.Y(30,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n      \n  "]))],function(l,n){l(n,27,0,n.context.$implicit.callingCodes);l(n,30,0,n.context.$implicit.topLevelDomain)},function(l,n){l(n,5,0,n.context.$implicit.name);l(n,9,0,n.context.$implicit.capital);l(n,14,0,ul._2(1,"",n.context.$implicit.flag,""));l(n,20,0,n.context.$implicit.population)})}function C(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Card Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,5,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.U(16777216,null,1,1,null,Z)),ul.Y(16,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,16,0,n.component.laender)},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function v(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,15,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(7,0,null,0,3,"ion-checkbox",[["color","primary"]],[[2,"checkbox-disabled",null]],[[null,"ionChange"],[null,"click"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,9)._click(u)&&o}if("ionChange"===n){o=!1!==a.checkboxChanged(u,l.context.$implicit)&&o}if("click"===n){o=!1!==a.checkboxClicked(l.context.$implicit)&&o}return o},vu.b,vu.a)),ul._17(5120,null,Fl.k,function(l){return[l]},[zu.a]),ul.Y(9,1228800,null,0,zu.a,[tn.a,an.a,[2,on.a],ul.j,ul.z],{color:[0,"color"]},{ionChange:"ionChange"}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(12,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(13,16384,[[1,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(14,null,["",""])),(l()(),ul._20(-1,2,["\n    "]))],function(l,n){l(n,9,0,"primary")},function(l,n){var u=n.component;l(n,7,0,ul._13(n,9)._disabled);l(n,14,0,u.getLandNameByAlpha3Code(n.context.$implicit))})}function z(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,4,{contentLabel:0}),ul._18(603979776,5,{_buttons:1}),ul._18(603979776,6,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(7,0,null,2,2,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(8,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(9,null,["Name: ",""])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(11,0,null,2,2,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(12,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(13,null,["Nativer Name: ",""])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(15,0,null,2,2,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(16,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(17,null,["Region: ",""])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(19,0,null,2,2,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(20,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(21,null,["Subregion: ",""])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(23,0,null,2,2,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(24,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(25,null,["Hauptstadt: ",""])),(l()(),ul._20(-1,2,["\n    "]))],null,function(l,n){var u=n.component;l(n,9,0,u.getLandByAlpha3Code(n.context.$implicit).name);l(n,13,0,u.getLandByAlpha3Code(n.context.$implicit).nativeName);l(n,17,0,u.getLandByAlpha3Code(n.context.$implicit).region);l(n,21,0,u.getLandByAlpha3Code(n.context.$implicit).subregion);l(n,25,0,u.getLandByAlpha3Code(n.context.$implicit).capital)})}function j(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Checkbox Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,16,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n    "])),(l()(),ul.Z(15,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(16,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Grenzländer von Österreich"])),(l()(),ul._20(-1,1,["\n    "])),(l()(),ul.Z(19,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(20,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Für mehr Infos klicken"])),(l()(),ul._20(-1,1,["\n    "])),(l()(),ul.U(16777216,null,1,1,null,v)),ul.Y(24,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,1,["\n\n\n    "])),(l()(),ul.U(16777216,null,1,1,null,z)),ul.Y(27,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,24,0,u.borders);l(n,27,0,u.checkboxArray)},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function y(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,2,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(1,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["Überraschung"]))],null,null)}function k(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Chip Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,69,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,6,"ion-chip",[],null,null,null,null,null)),ul.Y(16,16384,null,0,wu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(18,0,null,null,2,"ion-label",[],null,null,null,null,null)),ul.Y(19,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Default Chip"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n    \n  "])),(l()(),ul.Z(23,0,null,1,6,"ion-chip",[],null,null,null,null,null)),ul.Y(24,16384,null,0,wu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(26,0,null,null,2,"ion-label",[["color","secondary"]],null,null,null,null,null)),ul.Y(27,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),(l()(),ul._20(-1,null,["Color Label"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n    \n  "])),(l()(),ul.Z(31,0,null,1,6,"ion-chip",[["color","secondary"]],null,null,null,null,null)),ul.Y(32,16384,null,0,wu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(34,0,null,null,2,"ion-label",[["color","dark"]],null,null,null,null,null)),ul.Y(35,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),(l()(),ul._20(-1,null,["Color Label und Chip"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n    \n  "])),(l()(),ul.Z(39,0,null,1,9,"ion-chip",[],null,null,null,null,null)),ul.Y(40,16384,null,0,wu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(42,0,null,null,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(43,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(45,0,null,null,2,"ion-label",[],null,null,null,null,null)),ul.Y(46,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Mit Icon"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n  \n  "])),(l()(),ul.Z(50,0,null,1,9,"ion-chip",[],null,null,null,null,null)),ul.Y(51,16384,null,0,wu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(53,0,null,null,1,"ion-icon",[["color","secondary"],["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(54,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(56,0,null,null,2,"ion-label",[],null,null,null,null,null)),ul.Y(57,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Mit Color Icon"])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n  \n  "])),(l()(),ul.Z(61,0,null,1,5,"ion-chip",[],null,null,null,null,null)),ul.Y(62,16384,null,0,wu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(64,0,null,null,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(65,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(68,0,null,1,9,"ion-chip",[["color","nigger"]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.showMessage()&&o}return o},null,null)),ul.Y(69,16384,null,0,wu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(71,0,null,null,2,"ion-label",[["color","white"]],null,null,null,null,null)),ul.Y(72,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),(l()(),ul._20(-1,null,["Kann auch geklickt werden"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(75,0,null,null,1,"ion-icon",[["color","secondary"],["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(76,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.U(16777216,null,1,1,null,y)),ul.Y(80,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,27,0,"secondary");l(n,32,0,"secondary");l(n,35,0,"dark");l(n,43,0,"ice-cream");l(n,54,0,"secondary","ice-cream");l(n,65,0,"ice-cream");l(n,69,0,"nigger");l(n,72,0,"white");l(n,76,0,"secondary","ice-cream");l(n,80,0,u.show)},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,42,0,ul._13(n,43)._hidden);l(n,53,0,ul._13(n,54)._hidden);l(n,64,0,ul._13(n,65)._hidden);l(n,75,0,ul._13(n,76)._hidden)})}function w(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,['Col und Config "Beispiel"'])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,8,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,1,"a",[["href","https://ionicframework.com/docs/api/components/grid/Col/"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Col"])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(18,0,null,1,1,"a",[["href","https://ionicframework.com/docs/api/config/Config/"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Config"])),(l()(),ul._20(-1,1,["\n  \n\n"])),(l()(),ul._20(-1,null,["\n"]))],null,function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function T(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-list",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(3,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(4,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,2,{contentLabel:0}),ul._18(603979776,3,{_buttons:1}),ul._18(603979776,4,{_icons:1}),ul.Y(8,16384,null,0,rn.a,[],null,null),(l()(),ul._20(9,2,["",""])),(l()(),ul._20(-1,null,["\n  "]))],null,function(l,n){l(n,9,0,n.context.$implicit.name)})}function P(l){return ul._22(0,[ul._18(402653184,1,{content:0}),(l()(),ul.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(2,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(5,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(7,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(8,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Content Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(13,0,null,null,27,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(14,4374528,[[1,4]],0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(16,0,null,1,9,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(17,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(19,0,null,null,5,"button",[["color","btnColor"],["icon-left",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.toBottom()&&o}return o},Sn.b,Sn.a)),ul.Y(20,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(22,0,null,0,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(23,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n      Zum Schluss\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.U(16777216,null,1,1,null,T)),ul.Y(28,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(30,0,null,1,9,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(31,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(33,0,null,null,5,"button",[["color","btnColor"],["icon-left",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.toTop()&&o}return o},Sn.b,Sn.a)),ul.Y(34,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(36,0,null,0,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(37,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n      Zum Start\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,20,0,"btnColor");l(n,23,0,"ice-cream");l(n,28,0,u.laender);l(n,34,0,"btnColor");l(n,37,0,"ice-cream")},function(l,n){l(n,4,0,ul._13(n,5)._hidden,ul._13(n,5)._sbPadding);l(n,13,0,ul._13(n,14).statusbarPadding,ul._13(n,14)._hasRefresher);l(n,22,0,ul._13(n,23)._hidden);l(n,36,0,ul._13(n,37)._hidden)})}function x(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Datetime Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,118,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,114,"ion-list",[],null,null,null,null,null)),ul.Y(16,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(18,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(19,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(23,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(25,0,null,3,5,"ion-datetime",[["displayFormat","MMM DD YYYY"],["placeholder","Datum auswählen"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,26)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,26)._keyup()&&o}if("ngModelChange"===n){o=!1!==(a.myDate1=u)&&o}return o},Mu.b,Mu.a)),ul.Y(26,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{displayFormat:[0,"displayFormat"],placeholder:[1,"placeholder"]},null),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(28,671744,null,0,Fl.p,[[8,null],[8,null],[8,null],[2,Fl.k]],{model:[0,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(30,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul._20(-1,null,["\n  \n    "])),(l()(),ul.Z(33,0,null,null,17,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(34,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,4,{contentLabel:0}),ul._18(603979776,5,{_buttons:1}),ul._18(603979776,6,{_icons:1}),ul.Y(38,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(40,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(41,16384,[[4,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Testdatum 2"])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(44,0,null,3,5,"ion-datetime",[["displayFormat","h:mm A"],["pickerFormat","h mm A"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,45)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,45)._keyup()&&o}if("ngModelChange"===n){o=!1!==(a.myDate2=u)&&o}return o},Mu.b,Mu.a)),ul.Y(45,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{displayFormat:[0,"displayFormat"],pickerFormat:[1,"pickerFormat"]},null),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(47,671744,null,0,Fl.p,[[8,null],[8,null],[8,null],[2,Fl.k]],{model:[0,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(49,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul._20(-1,null,["\n    \n    "])),(l()(),ul.Z(52,0,null,null,17,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(53,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,7,{contentLabel:0}),ul._18(603979776,8,{_buttons:1}),ul._18(603979776,9,{_icons:1}),ul.Y(57,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(59,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(60,16384,[[7,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Testdatum 3"])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(63,0,null,3,5,"ion-datetime",[["cancelText","Abruch Abruch Abruch"],["displayFormat","MMM DD YYYY"],["doneText","Haben Fertig"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionCancel"],[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,64)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,64)._keyup()&&o}if("ngModelChange"===n){o=!1!==(a.myDate3=u)&&o}if("ionCancel"===n){o=!1!==a.canceled()&&o}return o},Mu.b,Mu.a)),ul.Y(64,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{displayFormat:[0,"displayFormat"],cancelText:[1,"cancelText"],doneText:[2,"doneText"]},{ionCancel:"ionCancel"}),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(66,671744,null,0,Fl.p,[[8,null],[8,null],[8,null],[2,Fl.k]],{model:[0,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(68,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(71,0,null,null,17,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(72,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,10,{contentLabel:0}),ul._18(603979776,11,{_buttons:1}),ul._18(603979776,12,{_icons:1}),ul.Y(76,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul.Z(78,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(79,16384,[[10,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Testdatum 4"])),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul.Z(82,0,null,3,5,"ion-datetime",[["displayFormat","MMM DD YYYY"],["max","2020-10-31"],["min","2016"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,83)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,83)._keyup()&&o}if("ngModelChange"===n){o=!1!==(a.myDate4=u)&&o}return o},Mu.b,Mu.a)),ul.Y(83,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{min:[0,"min"],max:[1,"max"],displayFormat:[2,"displayFormat"]},null),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(85,671744,null,0,Fl.p,[[8,null],[8,null],[8,null],[2,Fl.k]],{model:[0,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(87,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(90,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(91,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,13,{contentLabel:0}),ul._18(603979776,14,{_buttons:1}),ul._18(603979776,15,{_icons:1}),ul.Y(95,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(97,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(98,16384,[[13,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Testdatum 4"])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(101,0,null,3,6,"ion-datetime",[["displayFormat","DDDD MMMM YYYY"],["max","2019"],["min","2017"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,102)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,102)._keyup()&&o}if("ngModelChange"===n){o=!1!==(a.myDate4=u)&&o}return o},Mu.b,Mu.a)),ul.Y(102,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{min:[0,"min"],max:[1,"max"],displayFormat:[2,"displayFormat"],monthNames:[3,"monthNames"],dayNames:[4,"dayNames"]},null),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(104,671744,null,0,Fl.p,[[8,null],[8,null],[8,null],[2,Fl.k]],{model:[0,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(106,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(110,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(111,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,16,{contentLabel:0}),ul._18(603979776,17,{_buttons:1}),ul._18(603979776,18,{_icons:1}),ul.Y(115,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul.Z(117,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(118,16384,[[16,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Testdatum 5"])),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul.Z(121,0,null,3,6,"ion-datetime",[["displayFormat","DDD MMM YYYY"],["max","2019"],["min","2017"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0,a=l.component;if("click"===n){o=!1!==ul._13(l,122)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,122)._keyup()&&o}if("ngModelChange"===n){o=!1!==(a.myDate5=u)&&o}return o},Mu.b,Mu.a)),ul.Y(122,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{min:[0,"min"],max:[1,"max"],displayFormat:[2,"displayFormat"],monthShortNames:[3,"monthShortNames"],dayShortNames:[4,"dayShortNames"]},null),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(124,671744,null,0,Fl.p,[[8,null],[8,null],[8,null],[2,Fl.k]],{model:[0,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(126,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,26,0,"MMM DD YYYY","Datum auswählen");l(n,28,0,u.myDate1);l(n,45,0,"h:mm A","h mm A");l(n,47,0,u.myDate2);l(n,64,0,"MMM DD YYYY","Abruch Abruch Abruch","Haben Fertig");l(n,66,0,u.myDate3);l(n,83,0,"2016","2020-10-31","MMM DD YYYY");l(n,85,0,u.myDate4);l(n,102,0,"2017","2019","DDDD MMMM YYYY",u.monthNames,u.dayNames);l(n,104,0,u.myDate4);l(n,122,0,"2017","2019","DDD MMM YYYY",u.monthNamesShort,u.dayNamesShort);l(n,124,0,u.myDate5)},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,25,0,ul._13(n,26)._disabled,ul._13(n,30).ngClassUntouched,ul._13(n,30).ngClassTouched,ul._13(n,30).ngClassPristine,ul._13(n,30).ngClassDirty,ul._13(n,30).ngClassValid,ul._13(n,30).ngClassInvalid,ul._13(n,30).ngClassPending);l(n,44,0,ul._13(n,45)._disabled,ul._13(n,49).ngClassUntouched,ul._13(n,49).ngClassTouched,ul._13(n,49).ngClassPristine,ul._13(n,49).ngClassDirty,ul._13(n,49).ngClassValid,ul._13(n,49).ngClassInvalid,ul._13(n,49).ngClassPending);l(n,63,0,ul._13(n,64)._disabled,ul._13(n,68).ngClassUntouched,ul._13(n,68).ngClassTouched,ul._13(n,68).ngClassPristine,ul._13(n,68).ngClassDirty,ul._13(n,68).ngClassValid,ul._13(n,68).ngClassInvalid,ul._13(n,68).ngClassPending);l(n,82,0,ul._13(n,83)._disabled,ul._13(n,87).ngClassUntouched,ul._13(n,87).ngClassTouched,ul._13(n,87).ngClassPristine,ul._13(n,87).ngClassDirty,ul._13(n,87).ngClassValid,ul._13(n,87).ngClassInvalid,ul._13(n,87).ngClassPending);l(n,101,0,ul._13(n,102)._disabled,ul._13(n,106).ngClassUntouched,ul._13(n,106).ngClassTouched,ul._13(n,106).ngClassPristine,ul._13(n,106).ngClassDirty,ul._13(n,106).ngClassValid,ul._13(n,106).ngClassInvalid,ul._13(n,106).ngClassPending);l(n,121,0,ul._13(n,122)._disabled,ul._13(n,126).ngClassUntouched,ul._13(n,126).ngClassTouched,ul._13(n,126).ngClassPristine,ul._13(n,126).ngClassDirty,ul._13(n,126).ngClassValid,ul._13(n,126).ngClassInvalid,ul._13(n,126).ngClassPending)})}function I(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Events Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,20,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,5,"ion-input",[["placeholder","Text eingeben"],["stacked",""],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var o=!0;if("ngModelChange"===n){o=!1!==(l.component.myInput=u)&&o}return o},Ou.b,Ou.a)),ul.Y(16,671744,null,0,Fl.p,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(18,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(19,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{value:[0,"value"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(22,0,null,1,9,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(23,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(25,0,null,null,5,"button",[["color","btnColor"],["icon-left",""],["ion-button",""],["small",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.buttonClicked()&&o}return o},Sn.b,Sn.a)),ul.Y(26,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"],small:[1,"small"]},null),(l()(),ul._20(-1,0,["\n        "])),(l()(),ul.Z(28,0,null,0,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(29,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n        Ab zur nächsten Seite mit den Wert des Inputs\n      "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,16,0,n.component.myInput);l(n,19,0,"","Text eingeben");l(n,26,0,"btnColor","");l(n,29,0,"ice-cream")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,15,0,ul._13(n,18).ngClassUntouched,ul._13(n,18).ngClassTouched,ul._13(n,18).ngClassPristine,ul._13(n,18).ngClassDirty,ul._13(n,18).ngClassValid,ul._13(n,18).ngClassInvalid,ul._13(n,18).ngClassPending);l(n,28,0,ul._13(n,29)._hidden)})}function L(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Ebents Sub Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,2,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  In Konsole schauen :)\n\n"])),(l()(),ul._20(-1,null,["\n"]))],null,function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function D(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Fab Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,224,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,0,34,"ion-fab",[["edge",""],["right",""],["top",""]],null,null,null,Xu.b,Xu.a)),ul.Y(16,1228800,null,2,Wu.a,[gn.a],null,null),ul._18(335544320,1,{_mainButton:0}),ul._18(603979776,2,{_fabLists:1}),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(20,0,null,0,3,"button",[["color","primary"],["ion-fab",""],["mini",""]],null,null,null,Hu.b,Hu.a)),ul.Y(21,49152,[[1,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(22,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(23,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(25,0,null,0,23,"ion-fab-list",[],null,null,null,null,null)),ul.Y(26,16384,[[2,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,3,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(29,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(30,49152,[[3,4],[1,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(31,0,null,0,1,"ion-icon",[["name","logo-facebook"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(32,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(34,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(35,49152,[[3,4],[1,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(36,0,null,0,1,"ion-icon",[["name","logo-twitter"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(37,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["  \n      "])),(l()(),ul.Z(39,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(40,49152,[[3,4],[1,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(41,0,null,0,1,"ion-icon",[["name","logo-vimeo"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(42,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(44,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(45,49152,[[3,4],[1,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(46,0,null,0,1,"ion-icon",[["name","logo-googleplus"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(47,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n  "])),(l()(),ul._20(-1,1,["\n    \n  "])),(l()(),ul.Z(51,0,null,0,34,"ion-fab",[["bottom",""],["right",""]],null,null,null,Xu.b,Xu.a)),ul.Y(52,1228800,null,2,Wu.a,[gn.a],null,null),ul._18(335544320,4,{_mainButton:0}),ul._18(603979776,5,{_fabLists:1}),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(56,0,null,0,3,"button",[["color","light"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(57,49152,[[4,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(58,0,null,0,1,"ion-icon",[["name","arrow-dropleft"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(59,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(61,0,null,0,23,"ion-fab-list",[["side","left"]],null,null,null,null,null)),ul.Y(62,16384,[[5,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,6,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(65,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(66,49152,[[6,4],[4,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(67,0,null,0,1,"ion-icon",[["name","logo-facebook"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(68,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(70,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(71,49152,[[6,4],[4,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(72,0,null,0,1,"ion-icon",[["name","logo-twitter"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(73,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(75,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(76,49152,[[6,4],[4,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(77,0,null,0,1,"ion-icon",[["name","logo-vimeo"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(78,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(80,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(81,49152,[[6,4],[4,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(82,0,null,0,1,"ion-icon",[["name","logo-googleplus"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(83,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n  "])),(l()(),ul._20(-1,1,["\n   \n  "])),(l()(),ul.Z(87,0,null,0,34,"ion-fab",[["left",""],["top",""]],null,null,null,Xu.b,Xu.a)),ul.Y(88,1228800,null,2,Wu.a,[gn.a],null,null),ul._18(335544320,7,{_mainButton:0}),ul._18(603979776,8,{_fabLists:1}),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(92,0,null,0,3,"button",[["color","secondary"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(93,49152,[[7,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(94,0,null,0,1,"ion-icon",[["name","arrow-dropright"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(95,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(97,0,null,0,23,"ion-fab-list",[["side","right"]],null,null,null,null,null)),ul.Y(98,16384,[[8,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,9,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(101,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(102,49152,[[9,4],[7,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(103,0,null,0,1,"ion-icon",[["name","logo-facebook"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(104,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(106,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(107,49152,[[9,4],[7,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(108,0,null,0,1,"ion-icon",[["name","logo-twitter"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(109,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(111,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(112,49152,[[9,4],[7,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(113,0,null,0,1,"ion-icon",[["name","logo-vimeo"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(114,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(116,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(117,49152,[[9,4],[7,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(118,0,null,0,1,"ion-icon",[["name","logo-googleplus"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(119,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n  "])),(l()(),ul._20(-1,1,["\n  \n  "])),(l()(),ul.Z(123,0,null,0,34,"ion-fab",[["bottom",""],["left",""]],null,null,null,Xu.b,Xu.a)),ul.Y(124,1228800,null,2,Wu.a,[gn.a],null,null),ul._18(335544320,10,{_mainButton:0}),ul._18(603979776,11,{_fabLists:1}),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(128,0,null,0,3,"button",[["color","dark"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(129,49152,[[10,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(130,0,null,0,1,"ion-icon",[["name","arrow-dropup"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(131,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(133,0,null,0,23,"ion-fab-list",[["side","top"]],null,null,null,null,null)),ul.Y(134,16384,[[11,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,12,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(137,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(138,49152,[[12,4],[10,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(139,0,null,0,1,"ion-icon",[["name","logo-facebook"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(140,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(142,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(143,49152,[[12,4],[10,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(144,0,null,0,1,"ion-icon",[["name","logo-twitter"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(145,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(147,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(148,49152,[[12,4],[10,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(149,0,null,0,1,"ion-icon",[["name","logo-vimeo"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(150,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(152,0,null,null,3,"button",[["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(153,49152,[[12,4],[10,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(154,0,null,0,1,"ion-icon",[["name","logo-googleplus"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(155,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n  "])),(l()(),ul._20(-1,1,["\n  \n  "])),(l()(),ul.Z(159,0,null,0,49,"ion-fab",[["center",""],["middle",""]],null,null,null,Xu.b,Xu.a)),ul.Y(160,1228800,null,2,Wu.a,[gn.a],null,null),ul._18(335544320,13,{_mainButton:0}),ul._18(603979776,14,{_fabLists:1}),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(164,0,null,0,3,"button",[["color","danger"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(165,49152,[[13,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(166,0,null,0,1,"ion-icon",[["name","md-share"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(167,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(169,0,null,0,8,"ion-fab-list",[["side","top"]],null,null,null,null,null)),ul.Y(170,16384,[[14,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,15,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(173,0,null,null,3,"button",[["color","primary"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(174,49152,[[15,4],[13,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(175,0,null,0,1,"ion-icon",[["name","logo-vimeo"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(176,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(179,0,null,0,8,"ion-fab-list",[["side","bottom"]],null,null,null,null,null)),ul.Y(180,16384,[[14,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,16,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(183,0,null,null,3,"button",[["color","secondary"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(184,49152,[[16,4],[13,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(185,0,null,0,1,"ion-icon",[["name","logo-facebook"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(186,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(189,0,null,0,8,"ion-fab-list",[["side","left"]],null,null,null,null,null)),ul.Y(190,16384,[[14,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,17,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(193,0,null,null,3,"button",[["color","light"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(194,49152,[[17,4],[13,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(195,0,null,0,1,"ion-icon",[["name","logo-googleplus"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(196,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(199,0,null,0,8,"ion-fab-list",[["side","right"]],null,null,null,null,null)),ul.Y(200,16384,[[14,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,18,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(203,0,null,null,3,"button",[["color","dark"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(204,49152,[[18,4],[13,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(205,0,null,0,1,"ion-icon",[["name","logo-twitter"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(206,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n  "])),(l()(),ul._20(-1,1,["\n   \n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(211,0,null,0,24,"ion-fab",[["middle",""],["right",""]],null,null,null,Xu.b,Xu.a)),ul.Y(212,1228800,[["fab",4]],2,Wu.a,[gn.a],null,null),ul._18(335544320,19,{_mainButton:0}),ul._18(603979776,20,{_fabLists:1}),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(216,0,null,0,3,"button",[["color","danger"],["ion-fab",""]],null,null,null,Hu.b,Hu.a)),ul.Y(217,49152,[[19,4]],0,qu.a,[tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul.Z(218,0,null,0,1,"ion-icon",[["name","ice-cream"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(219,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul.Z(221,0,null,0,13,"ion-fab-list",[["side","top"]],null,null,null,null,null)),ul.Y(222,16384,[[20,4]],1,Gu.a,[ul.j,ul.z,tn.a,gn.a],null,null),ul._18(603979776,21,{_setbuttons:1}),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(225,0,null,null,3,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.share("facebook",ul._13(l,212))&&o}return o},Hu.b,Hu.a)),ul.Y(226,49152,[[21,4],[19,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(227,0,null,0,1,"ion-icon",[["name","logo-facebook"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(228,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(230,0,null,null,3,"button",[["ion-fab",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.share("twitter",ul._13(l,212))&&o}return o},Hu.b,Hu.a)),ul.Y(231,49152,[[21,4],[19,4]],0,qu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul.Z(232,0,null,0,1,"ion-icon",[["name","logo-twitter"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(233,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,0,["\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,21,0,"primary");l(n,23,0,"add");l(n,32,0,"logo-facebook");l(n,37,0,"logo-twitter");l(n,42,0,"logo-vimeo");l(n,47,0,"logo-googleplus");l(n,57,0,"light");l(n,59,0,"arrow-dropleft");l(n,68,0,"logo-facebook");l(n,73,0,"logo-twitter");l(n,78,0,"logo-vimeo");l(n,83,0,"logo-googleplus");l(n,93,0,"secondary");l(n,95,0,"arrow-dropright");l(n,104,0,"logo-facebook");l(n,109,0,"logo-twitter");l(n,114,0,"logo-vimeo");l(n,119,0,"logo-googleplus");l(n,129,0,"dark");l(n,131,0,"arrow-dropup");l(n,140,0,"logo-facebook");l(n,145,0,"logo-twitter");l(n,150,0,"logo-vimeo");l(n,155,0,"logo-googleplus");l(n,165,0,"danger");l(n,167,0,"md-share");l(n,174,0,"primary");l(n,176,0,"logo-vimeo");l(n,184,0,"secondary");l(n,186,0,"logo-facebook");l(n,194,0,"light");l(n,196,0,"logo-googleplus");l(n,204,0,"dark");l(n,206,0,"logo-twitter");l(n,217,0,"danger");l(n,219,0,"ice-cream");l(n,228,0,"logo-facebook");l(n,233,0,"logo-twitter")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,22,0,ul._13(n,23)._hidden);l(n,31,0,ul._13(n,32)._hidden);l(n,36,0,ul._13(n,37)._hidden);l(n,41,0,ul._13(n,42)._hidden);l(n,46,0,ul._13(n,47)._hidden);l(n,58,0,ul._13(n,59)._hidden);l(n,67,0,ul._13(n,68)._hidden);l(n,72,0,ul._13(n,73)._hidden);l(n,77,0,ul._13(n,78)._hidden);l(n,82,0,ul._13(n,83)._hidden);l(n,94,0,ul._13(n,95)._hidden);l(n,103,0,ul._13(n,104)._hidden);l(n,108,0,ul._13(n,109)._hidden);l(n,113,0,ul._13(n,114)._hidden);l(n,118,0,ul._13(n,119)._hidden);l(n,130,0,ul._13(n,131)._hidden);l(n,139,0,ul._13(n,140)._hidden);l(n,144,0,ul._13(n,145)._hidden);l(n,149,0,ul._13(n,150)._hidden);l(n,154,0,ul._13(n,155)._hidden);l(n,166,0,ul._13(n,167)._hidden);l(n,175,0,ul._13(n,176)._hidden);l(n,185,0,ul._13(n,186)._hidden);l(n,195,0,ul._13(n,196)._hidden);l(n,205,0,ul._13(n,206)._hidden);l(n,218,0,ul._13(n,219)._hidden);l(n,227,0,ul._13(n,228)._hidden);l(n,232,0,ul._13(n,233)._hidden)})}function M(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Gestures Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,54,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,50,"ion-card",[["class","myCard"]],null,[[null,"tap"],[null,"press"],[null,"pan"],[null,"swipe"],[null,"rotate"],[null,"pinch"]],function(l,n,u){var o=!0,a=l.component;if("tap"===n){o=!1!==a.tapEvent(u)&&o}if("press"===n){o=!1!==a.pressEvent(u)&&o}if("pan"===n){o=!1!==a.panEvent(u)&&o}if("swipe"===n){o=!1!==a.swipeEvent(u)&&o}if("rotate"===n){o=!1!==a.rotateEvent(u)&&o}if("pinch"===n){o=!1!==a.pinchEvent(u)&&o}return o},null,null)),ul.Y(16,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(18,0,null,null,6,"ion-item",[["class","item item-block"],["color","primary"]],null,null,null,un.b,un.a)),ul.Y(19,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],{color:[0,"color"]},null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(23,16384,null,0,rn.a,[],null,null),(l()(),ul._20(24,2,["\n      Tapped: "," times\n    "])),(l()(),ul._20(-1,null,["\n    \n    "])),(l()(),ul.Z(26,0,null,null,6,"ion-item",[["class","item item-block"],["color","primary"]],null,null,null,un.b,un.a)),ul.Y(27,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],{color:[0,"color"]},null),ul._18(335544320,4,{contentLabel:0}),ul._18(603979776,5,{_buttons:1}),ul._18(603979776,6,{_icons:1}),ul.Y(31,16384,null,0,rn.a,[],null,null),(l()(),ul._20(32,2,["\n      Pressed: "," times\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(34,0,null,null,6,"ion-item",[["class","item item-block"],["color","primary"]],null,null,null,un.b,un.a)),ul.Y(35,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],{color:[0,"color"]},null),ul._18(335544320,7,{contentLabel:0}),ul._18(603979776,8,{_buttons:1}),ul._18(603979776,9,{_icons:1}),ul.Y(39,16384,null,0,rn.a,[],null,null),(l()(),ul._20(40,2,["\n      Panned: "," times\n    "])),(l()(),ul._20(-1,null,["\n    \n    "])),(l()(),ul.Z(42,0,null,null,6,"ion-item",[["class","item item-block"],["color","primary"]],null,null,null,un.b,un.a)),ul.Y(43,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],{color:[0,"color"]},null),ul._18(335544320,10,{contentLabel:0}),ul._18(603979776,11,{_buttons:1}),ul._18(603979776,12,{_icons:1}),ul.Y(47,16384,null,0,rn.a,[],null,null),(l()(),ul._20(48,2,["\n      Swiped: "," times\n    "])),(l()(),ul._20(-1,null,["\n    \n    "])),(l()(),ul.Z(50,0,null,null,6,"ion-item",[["class","item item-block"],["color","primary"]],null,null,null,un.b,un.a)),ul.Y(51,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],{color:[0,"color"]},null),ul._18(335544320,13,{contentLabel:0}),ul._18(603979776,14,{_buttons:1}),ul._18(603979776,15,{_icons:1}),ul.Y(55,16384,null,0,rn.a,[],null,null),(l()(),ul._20(56,2,["\n      Rotated: "," times\n    "])),(l()(),ul._20(-1,null,["\n    \n    "])),(l()(),ul.Z(58,0,null,null,6,"ion-item",[["class","item item-block"],["color","primary"]],null,null,null,un.b,un.a)),ul.Y(59,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],{color:[0,"color"]},null),ul._18(335544320,16,{contentLabel:0}),ul._18(603979776,17,{_buttons:1}),ul._18(603979776,18,{_icons:1}),ul.Y(63,16384,null,0,rn.a,[],null,null),(l()(),ul._20(64,2,["\n      Pinched: "," times\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,19,0,"primary");l(n,27,0,"primary");l(n,35,0,"primary");l(n,43,0,"primary");l(n,51,0,"primary");l(n,59,0,"primary")},function(l,n){var u=n.component;l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,24,0,u.tap);l(n,32,0,u.press);l(n,40,0,u.pan);l(n,48,0,u.swipe);l(n,56,0,u.rotate);l(n,64,0,u.pinch)})}function F(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Grid Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,605,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,1,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Equal-width columns\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(18,0,null,1,45,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(19,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(21,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(22,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(24,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(25,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(27,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(31,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(32,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(34,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(39,0,null,null,23,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(40,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(42,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(43,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(45,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(49,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(50,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(52,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(56,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(57,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(59,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n\n  "])),(l()(),ul.Z(65,0,null,1,1,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Setting one column width\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(68,0,null,1,52,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(69,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(71,0,null,null,23,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(72,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(74,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(75,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(77,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(81,0,null,null,5,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(82,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(84,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 3 (wider)"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(88,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(89,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(91,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(96,0,null,null,23,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(97,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(99,0,null,null,5,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(100,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(102,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 3 (wider)"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(106,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(107,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(109,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(113,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(114,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(116,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(122,0,null,1,1,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Variable-width columns\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(125,0,null,1,60,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(126,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(128,0,null,null,23,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(129,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(131,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(132,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(134,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(138,0,null,null,5,"ion-col",[["class","col"],["col-auto",""]],null,null,null,null,null)),ul.Y(139,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(141,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["Variable width content"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(145,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(146,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(148,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(153,0,null,null,31,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(154,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(156,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(157,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(159,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(163,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(164,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(166,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(170,0,null,null,6,"ion-col",[["class","col"],["col-auto",""]],null,null,null,null,null)),ul.Y(171,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(173,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),ul.Z(174,0,null,null,1,"ion-icon",[["name","globe"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(175,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(178,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(179,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(181,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["4 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(187,0,null,1,1,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Offsetting columns\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(190,0,null,1,38,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(191,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(193,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(194,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(196,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(197,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(199,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(203,0,null,null,5,"ion-col",[["class","col"],["offset-4",""]],null,null,null,null,null)),ul.Y(204,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(206,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(211,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(212,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(214,0,null,null,5,"ion-col",[["class","col"],["offset-4",""]],null,null,null,null,null)),ul.Y(215,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(217,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(221,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(222,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(224,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(230,0,null,1,1,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Push and pull\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(233,0,null,1,45,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(234,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(236,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(237,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(239,0,null,null,5,"ion-col",[["class","col"],["col-9",""],["push-3",""]],null,null,null,null,null)),ul.Y(240,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(242,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(246,0,null,null,5,"ion-col",[["class","col"],["col-3",""],["pull-9",""]],null,null,null,null,null)),ul.Y(247,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(249,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(254,0,null,null,23,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(255,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(257,0,null,null,5,"ion-col",[["class","col"],["col-6",""],["push-3",""]],null,null,null,null,null)),ul.Y(258,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(260,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(264,0,null,null,5,"ion-col",[["class","col"],["col-3",""],["push-3",""]],null,null,null,null,null)),ul.Y(265,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(267,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(271,0,null,null,5,"ion-col",[["class","col"],["col-3",""],["pull-9",""]],null,null,null,null,null)),ul.Y(272,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(274,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(280,0,null,1,3,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Setting all column widths"])),(l()(),ul.Z(282,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(285,0,null,1,27,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(286,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(288,0,null,null,23,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(289,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(291,0,null,null,5,"ion-col",[["class","col"],["col-4",""]],null,null,null,null,null)),ul.Y(292,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(294,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(298,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(299,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(301,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(305,0,null,null,5,"ion-col",[["class","col"],["col-5",""]],null,null,null,null,null)),ul.Y(306,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(308,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 3"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(314,0,null,1,1,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Vertical alignment\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(317,0,null,1,160,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(318,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(320,0,null,null,42,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(321,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(323,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(324,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(326,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(330,0,null,null,7,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(331,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(333,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 4 "])),(l()(),ul.Z(335,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(339,0,null,null,9,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(340,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(342,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 4 "])),(l()(),ul.Z(344,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(346,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(350,0,null,null,11,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(351,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(353,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["4 of 4 "])),(l()(),ul.Z(355,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(357,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(359,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(364,0,null,null,36,"ion-row",[["align-items-start",""],["class","row"]],null,null,null,null,null)),ul.Y(365,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(367,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(368,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(370,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(374,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(375,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(377,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(381,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(382,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(384,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(388,0,null,null,11,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(389,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(391,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["4 of 4 "])),(l()(),ul.Z(393,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(395,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(397,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(402,0,null,null,36,"ion-row",[["align-items-center",""],["class","row"]],null,null,null,null,null)),ul.Y(403,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(405,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(406,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(408,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(412,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(413,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(415,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(419,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(420,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(422,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(426,0,null,null,11,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(427,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(429,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["4 of 4 "])),(l()(),ul.Z(431,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(433,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(435,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(440,0,null,null,36,"ion-row",[["align-items-end",""],["class","row"]],null,null,null,null,null)),ul.Y(441,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(443,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(444,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(446,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(450,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(451,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(453,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(457,0,null,null,5,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(458,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(460,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(464,0,null,null,11,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(465,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(467,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["4 of 4 "])),(l()(),ul.Z(469,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(471,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(473,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(479,0,null,1,40,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(480,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(482,0,null,null,36,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(483,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(485,0,null,null,5,"ion-col",[["align-self-start",""],["class","col"]],null,null,null,null,null)),ul.Y(486,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(488,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(492,0,null,null,5,"ion-col",[["align-self-center",""],["class","col"]],null,null,null,null,null)),ul.Y(493,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(495,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(499,0,null,null,5,"ion-col",[["align-self-end",""],["class","col"]],null,null,null,null,null)),ul.Y(500,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(502,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["3 of 4"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(506,0,null,null,11,"ion-col",[["class","col"]],null,null,null,null,null)),ul.Y(507,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(509,0,null,null,7,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["4 of 4 "])),(l()(),ul.Z(511,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(513,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul.Z(515,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["#"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(521,0,null,1,1,"p",[["padding",""]],null,null,null,null,null)),(l()(),ul._20(-1,null,["\n    Horizontal Alignment\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(524,0,null,1,92,"ion-grid",[["class","grid"]],null,null,null,null,null)),ul.Y(525,16384,null,0,Wn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(527,0,null,null,16,"ion-row",[["class","row"],["justify-content-start",""]],null,null,null,null,null)),ul.Y(528,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(530,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(531,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(533,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(537,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(538,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(540,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(545,0,null,null,16,"ion-row",[["class","row"],["justify-content-center",""]],null,null,null,null,null)),ul.Y(546,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(548,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(549,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(551,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(555,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(556,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(558,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(563,0,null,null,16,"ion-row",[["class","row"],["justify-content-end",""]],null,null,null,null,null)),ul.Y(564,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(566,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(567,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(569,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(573,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(574,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(576,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(581,0,null,null,16,"ion-row",[["class","row"],["justify-content-around",""]],null,null,null,null,null)),ul.Y(582,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(584,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(585,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(587,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(591,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(592,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(594,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(599,0,null,null,16,"ion-row",[["class","row"],["justify-content-between",""]],null,null,null,null,null)),ul.Y(600,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(602,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(603,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(605,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["1 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(609,0,null,null,5,"ion-col",[["class","col"],["col-3",""]],null,null,null,null,null)),ul.Y(610,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(612,0,null,null,1,"div",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["2 of 2"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,175,0,"globe")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,174,0,ul._13(n,175)._hidden)})}function B(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Haptic Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,5,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,1,"a",[["href","https://ionicframework.com/docs/api/tap-click/Haptic/"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Haptic"])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],null,function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function V(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["HideWhen Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,37,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,2,"div",[["hideWhen","android"]],[[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(16,147456,null,0,to.a,[[8,"android"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    I am hidden on Android!\n  "])),(l()(),ul._20(-1,1,["\n       \n  "])),(l()(),ul.Z(19,0,null,1,2,"div",[["hideWhen","ios"]],[[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(20,147456,null,0,to.a,[[8,"ios"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    I am hidden on iOS!\n  "])),(l()(),ul._20(-1,1,["\n       \n  "])),(l()(),ul.Z(23,0,null,1,2,"div",[["hideWhen","android,ios"]],[[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(24,147456,null,0,to.a,[[8,"android,ios"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    I am hidden on Android and iOS!\n  "])),(l()(),ul._20(-1,1,["\n       \n  "])),(l()(),ul.Z(27,0,null,1,2,"div",[["hideWhen","portrait"]],[[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(28,147456,null,0,to.a,[[8,"portrait"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    I am hidden on Portrait!\n  "])),(l()(),ul._20(-1,1,["\n       \n  "])),(l()(),ul.Z(31,0,null,1,2,"div",[["hideWhen","landscape"]],[[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(32,147456,null,0,to.a,[[8,"landscape"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    I am hidden on Landscape!\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(35,0,null,1,3,"ion-icon",[["hideWhen","android, windows"],["name","logo-apple"],["role","img"]],[[2,"hide",null],[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(36,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),ul.Y(37,147456,null,0,to.a,[[8,"android, windows"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    Aktuelle Platform\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(40,0,null,1,3,"ion-icon",[["hideWhen","ios, windows"],["name","logo-android"],["role","img"]],[[2,"hide",null],[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(41,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),ul.Y(42,147456,null,0,to.a,[[8,"ios, windows"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    Aktuelle Platform\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(45,0,null,1,3,"ion-icon",[["hideWhen","android, ios"],["name","logo-windows"],["role","img"]],[[2,"hide",null],[2,"hidden-hide-when",null]],null,null,null,null)),ul.Y(46,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),ul.Y(47,147456,null,0,to.a,[[8,"android, ios"],gn.a,ul.u],null,null),(l()(),ul._20(-1,null,["\n    Aktuelle Platform\n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,36,0,"logo-apple");l(n,41,0,"logo-android");l(n,46,0,"logo-windows")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,15,0,ul._13(n,16).isMatch);l(n,19,0,ul._13(n,20).isMatch);l(n,23,0,ul._13(n,24).isMatch);l(n,27,0,ul._13(n,28).isMatch);l(n,31,0,ul._13(n,32).isMatch);l(n,35,0,ul._13(n,36)._hidden,ul._13(n,37).isMatch);l(n,40,0,ul._13(n,41)._hidden,ul._13(n,42).isMatch);l(n,45,0,ul._13(n,46)._hidden,ul._13(n,47).isMatch)})}function S(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Icon Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,6,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,2,"ion-icon",[["class","myIconSizedUp"],["name","ice-cream"],["role","img"]],[[2,"hide",null]],[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.changeColor()&&o}return o},null,null)),ul.Y(16,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{color:[0,"color"],name:[1,"name"]},null),(l()(),ul._20(-1,null,[" \n  "])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,16,0,n.component.myColor,"ice-cream")},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,15,0,ul._13(n,16)._hidden)})}function O(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,11,"ion-item",[["class","item item-block"],["color","nigger"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],{color:[0,"color"]},null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul.Z(7,0,null,2,2,"ion-img",[["cache","true"],["height","80"],["width","160"]],null,null,null,so.b,so.a)),ul.Y(8,1228800,null,0,_o.a,[ul.j,ul.z,gn.a,[2,wn.a],hn.a],{src:[0,"src"],cache:[1,"cache"],width:[2,"width"],height:[3,"height"]},null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,2,["\n    "])),(l()(),ul._20(-1,2,["\n  "]))],function(l,n){l(n,1,0,"nigger");l(n,8,0,ul._2(1,"",n.context.$implicit,""),"true","160","80")},null)}function A(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Img Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,5,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n  \n  "])),(l()(),ul.U(16777216,null,1,1,null,O)),ul.Y(16,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){l(n,16,0,n.component.flaggen)},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function R(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Infinite Scroll Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,8,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(15,0,null,1,1,"p",[],null,null,null,null,null)),(l()(),ul._20(-1,null,["Finde ich nicht recht schön"])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(18,0,null,1,1,"a",[["href","https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Infinite Scroll"])),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],null,function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher)})}function N(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,64,{contentLabel:0}),ul._18(603979776,65,{_buttons:1}),ul._18(603979776,66,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(7,0,null,2,1,"p",[["class","errorMessage"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Bitte Vornamen eingeben"])),(l()(),ul._20(-1,2,["\n          "]))],null,null)}function E(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,70,{contentLabel:0}),ul._18(603979776,71,{_buttons:1}),ul._18(603979776,72,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(7,0,null,2,1,"p",[["class","errorMessage"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Bitte Nachnamen eingeben"])),(l()(),ul._20(-1,2,["\n          "]))],null,null)}function U(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,76,{contentLabel:0}),ul._18(603979776,77,{_buttons:1}),ul._18(603979776,78,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(7,0,null,2,1,"p",[["class","errorMessage"]],null,null,null,null,null)),(l()(),ul._20(-1,null,["Bitte korrektes Alter eingeben"])),(l()(),ul._20(-1,2,["\n          "]))],null,null)}function $(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(6,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(7,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Input Beispiel"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(12,0,null,null,505,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(13,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.Z(17,0,null,1,270,"form",[["name","testForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0;if("submit"===n){o=!1!==ul._13(l,19).onSubmit(u)&&o}if("reset"===n){o=!1!==ul._13(l,19).onReset()&&o}return o},null,null)),ul.Y(18,16384,null,0,Fl.u,[],null,null),ul.Y(19,4210688,null,0,Fl.o,[[8,null],[8,null]],null,null),ul._17(2048,null,Fl.b,null,[Fl.o]),ul.Y(21,16384,null,0,Fl.n,[Fl.b],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(23,0,null,null,96,"ion-card",[],null,null,null,null,null)),ul.Y(24,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(26,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(27,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,['\n        Verschiedene "Styles"\n      '])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(30,0,null,null,88,"ion-card-content",[],null,null,null,null,null)),ul.Y(31,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(33,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(34,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(38,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(40,0,null,1,2,"ion-label",[["fixed",""]],null,null,null,null,null)),ul.Y(41,16384,[[1,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,""],[8,null]],null,null),(l()(),ul._20(-1,null,["Fixed Label"])),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(44,0,null,3,1,"ion-input",[["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(45,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(48,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(49,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,4,{contentLabel:0}),ul._18(603979776,5,{_buttons:1}),ul._18(603979776,6,{_icons:1}),ul.Y(53,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(55,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),ul.Y(56,16384,[[4,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Floating Label"])),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(59,0,null,3,1,"ion-input",[["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(60,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(63,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(64,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,7,{contentLabel:0}),ul._18(603979776,8,{_buttons:1}),ul._18(603979776,9,{_icons:1}),ul.Y(68,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(70,0,null,1,2,"ion-label",[],null,null,null,null,null)),ul.Y(71,16384,[[7,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Inline Label"])),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(74,0,null,3,1,"ion-input",[["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(75,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(78,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(79,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,10,{contentLabel:0}),ul._18(603979776,11,{_buttons:1}),ul._18(603979776,12,{_icons:1}),ul.Y(83,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(85,0,null,3,1,"ion-input",[["placeholder","Placeholder"],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(86,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(89,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(90,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,13,{contentLabel:0}),ul._18(603979776,14,{_buttons:1}),ul._18(603979776,15,{_icons:1}),ul.Y(94,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(96,0,null,1,2,"ion-label",[["stacked",""]],null,null,null,null,null)),ul.Y(97,16384,[[13,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,""],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Floating Label"])),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(100,0,null,3,1,"ion-input",[["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(101,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(104,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(105,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,16,{contentLabel:0}),ul._18(603979776,17,{_buttons:1}),ul._18(603979776,18,{_icons:1}),ul.Y(109,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(111,0,null,1,2,"ion-label",[["floating",""]],null,null,null,null,null)),ul.Y(112,16384,[[16,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Floating Label"])),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(115,0,null,3,1,"ion-input",[["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(116,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n    \n    "])),(l()(),ul.Z(121,0,null,null,87,"ion-card",[],null,null,null,null,null)),ul.Y(122,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(124,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(125,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n        Verschiedene Typen\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(128,0,null,null,79,"ion-card-content",[],null,null,null,null,null)),ul.Y(129,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(131,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(132,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,19,{contentLabel:0}),ul._18(603979776,20,{_buttons:1}),ul._18(603979776,21,{_icons:1}),ul.Y(136,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(138,0,null,3,1,"ion-input",[["placeholder","Text"],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(139,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(142,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(143,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,22,{contentLabel:0}),ul._18(603979776,23,{_buttons:1}),ul._18(603979776,24,{_icons:1}),ul.Y(147,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(149,0,null,3,1,"ion-input",[["placeholder","Password"],["type","password"]],null,null,null,Ou.b,Ou.a)),ul.Y(150,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(153,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(154,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,25,{contentLabel:0}),ul._18(603979776,26,{_buttons:1}),ul._18(603979776,27,{_icons:1}),ul.Y(158,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(160,0,null,3,1,"ion-input",[["placeholder","Email"],["type","email"]],null,null,null,Ou.b,Ou.a)),ul.Y(161,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(164,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(165,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,28,{contentLabel:0}),ul._18(603979776,29,{_buttons:1}),ul._18(603979776,30,{_icons:1}),ul.Y(169,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(171,0,null,3,1,"ion-input",[["placeholder","Number"],["type","number"]],null,null,null,Ou.b,Ou.a)),ul.Y(172,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(175,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(176,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,31,{contentLabel:0}),ul._18(603979776,32,{_buttons:1}),ul._18(603979776,33,{_icons:1}),ul.Y(180,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(182,0,null,3,1,"ion-input",[["placeholder","Search"],["type","search"]],null,null,null,Ou.b,Ou.a)),ul.Y(183,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(186,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(187,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,34,{contentLabel:0}),ul._18(603979776,35,{_buttons:1}),ul._18(603979776,36,{_icons:1}),ul.Y(191,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(193,0,null,3,1,"ion-input",[["placeholder","Tel"],["type","tel"]],null,null,null,Ou.b,Ou.a)),ul.Y(194,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(197,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(198,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,37,{contentLabel:0}),ul._18(603979776,38,{_buttons:1}),ul._18(603979776,39,{_icons:1}),ul.Y(202,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(204,0,null,3,1,"ion-input",[["placeholder","Url"],["type","url"]],null,null,null,Ou.b,Ou.a)),ul.Y(205,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n\n    "])),(l()(),ul.Z(210,0,null,null,76,"ion-card",[],null,null,null,null,null)),ul.Y(211,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(213,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(214,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n        Other Properties\n      "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(217,0,null,null,68,"ion-card-content",[],null,null,null,null,null)),ul.Y(218,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(220,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(221,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,40,{contentLabel:0}),ul._18(603979776,41,{_buttons:1}),ul._18(603979776,42,{_icons:1}),ul.Y(225,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(227,0,null,3,1,"ion-input",[["placeholder","Readonly"],["readonly",""],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(228,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],readonly:[1,"readonly"],placeholder:[2,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(231,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(232,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,43,{contentLabel:0}),ul._18(603979776,44,{_buttons:1}),ul._18(603979776,45,{_icons:1}),ul.Y(236,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(238,0,null,3,1,"ion-input",[["max","5"],["min","2"],["placeholder","Min 2 max 5"],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(239,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],placeholder:[1,"placeholder"],min:[2,"min"],max:[3,"max"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["      \n        "])),(l()(),ul.Z(242,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(243,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,46,{contentLabel:0}),ul._18(603979776,47,{_buttons:1}),ul._18(603979776,48,{_icons:1}),ul.Y(247,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(249,0,null,3,1,"ion-input",[["clearOnEdit",""],["placeholder","ClearOnEdit"],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(250,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],clearOnEdit:[1,"clearOnEdit"],placeholder:[2,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(253,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(254,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,49,{contentLabel:0}),ul._18(603979776,50,{_buttons:1}),ul._18(603979776,51,{_icons:1}),ul.Y(258,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(260,0,null,3,1,"ion-input",[["clearInput",""],["placeholder","ClearInput"],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(261,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{clearInput:[0,"clearInput"],type:[1,"type"],placeholder:[2,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(264,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(265,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,52,{contentLabel:0}),ul._18(603979776,53,{_buttons:1}),ul._18(603979776,54,{_icons:1}),ul.Y(269,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(271,0,null,3,1,"ion-input",[["autocorrect","on"],["placeholder","Autocorrect"],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(272,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],autocorrect:[1,"autocorrect"],placeholder:[2,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(275,0,null,null,9,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(276,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,55,{contentLabel:0}),ul._18(603979776,56,{_buttons:1}),ul._18(603979776,57,{_icons:1}),ul.Y(280,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(282,0,null,3,1,"ion-input",[["autocomplete","on"],["placeholder","Autocomplete"],["type","text"]],null,null,null,Ou.b,Ou.a)),ul.Y(283,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"],autocomplete:[1,"autocomplete"],placeholder:[2,"placeholder"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(289,0,null,1,42,"ion-card",[],null,null,null,null,null)),ul.Y(290,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(292,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(293,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      Template Driven Form\n    "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(296,0,null,null,34,"ion-card-content",[],null,null,null,null,null)),ul.Y(297,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(299,0,null,null,30,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,a=l.component;if("submit"===n){o=!1!==ul._13(l,301).onSubmit(u)&&o}if("reset"===n){o=!1!==ul._13(l,301).onReset()&&o}if("ngSubmit"===n){o=!1!==a.onSubmitTemplateDrivenForm(ul._13(l,301))&&o}return o},null,null)),ul.Y(300,16384,null,0,Fl.u,[],null,null),ul.Y(301,4210688,[["templateDrivenForm",4]],0,Fl.o,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),ul._17(2048,null,Fl.b,null,[Fl.o]),ul.Y(303,16384,null,0,Fl.n,[Fl.b],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(305,0,null,null,18,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(306,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,58,{contentLabel:0}),ul._18(603979776,59,{_buttons:1}),ul._18(603979776,60,{_icons:1}),ul.Y(310,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(312,0,null,1,2,"ion-label",[["floating",""],["for","marke"]],null,null,null,null,null)),ul.Y(313,16384,[[58,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Automarke"])),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul.Z(316,0,null,3,6,"ion-input",[["name","marke"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var o=!0;if("ngModelChange"===n){o=!1!==(l.component.auto.marke=u)&&o}return o},Ou.b,Ou.a)),ul.Y(317,16384,null,0,Fl.r,[],{required:[0,"required"]},null),ul._17(1024,null,Fl.j,function(l){return[l]},[Fl.r]),ul.Y(319,671744,null,0,Fl.p,[[2,Fl.b],[2,Fl.j],[8,null],[8,null]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),ul._17(2048,null,Fl.l,null,[Fl.p]),ul.Y(321,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(322,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(326,0,null,null,2,"button",[["ion-button",""],["type","submit"]],null,null,null,Sn.b,Sn.a)),ul.Y(327,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,0,["Sign up"])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(333,0,null,1,98,"ion-card",[],null,null,null,null,null)),ul.Y(334,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(336,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(337,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      Reactive Form\n    "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(340,0,null,null,90,"ion-card-content",[],null,null,null,null,null)),ul.Y(341,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(343,0,null,null,86,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,a=l.component;if("submit"===n){o=!1!==ul._13(l,345).onSubmit(u)&&o}if("reset"===n){o=!1!==ul._13(l,345).onReset()&&o}if("submit"===n){o=!1!==a.processForm1()&&o}return o},null,null)),ul.Y(344,16384,null,0,Fl.u,[],null,null),ul.Y(345,540672,null,0,Fl.h,[[8,null],[8,null]],{form:[0,"form"]},null),ul._17(2048,null,Fl.b,null,[Fl.h]),ul.Y(347,16384,null,0,Fl.n,[Fl.b],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(349,0,null,null,65,"ion-list",[],null,null,null,null,null)),ul.Y(350,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(352,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(353,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,61,{contentLabel:0}),ul._18(603979776,62,{_buttons:1}),ul._18(603979776,63,{_icons:1}),ul.Y(357,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(359,0,null,1,2,"ion-label",[["floating",""],["for","vorname"]],null,null,null,null,null)),ul.Y(360,16384,[[61,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Vorname"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(363,0,null,3,4,"ion-input",[["formControlName","vorname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(364,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(366,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(367,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.U(16777216,null,null,1,null,N)),ul.Y(371,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(373,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(374,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,67,{contentLabel:0}),ul._18(603979776,68,{_buttons:1}),ul._18(603979776,69,{_icons:1}),ul.Y(378,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(380,0,null,1,2,"ion-label",[["floating",""],["for","nachname"]],null,null,null,null,null)),ul.Y(381,16384,[[67,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Nachname"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(384,0,null,3,4,"ion-input",[["formControlName","nachname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(385,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(387,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(388,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.U(16777216,null,null,1,null,E)),ul.Y(392,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(394,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(395,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,73,{contentLabel:0}),ul._18(603979776,74,{_buttons:1}),ul._18(603979776,75,{_icons:1}),ul.Y(399,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(401,0,null,1,2,"ion-label",[["floating",""],["for","alter"]],null,null,null,null,null)),ul.Y(402,16384,[[73,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Alter"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(405,0,null,3,4,"ion-input",[["formControlName","alter"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(406,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(408,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(409,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.U(16777216,null,null,1,null,U)),ul.Y(413,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(417,0,null,null,2,"button",[["block",""],["ion-button",""],["type","submit"]],null,null,null,Sn.b,Sn.a)),ul.Y(418,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{block:[0,"block"]},null),(l()(),ul._20(-1,0,["Submit"])),(l()(),ul._20(-1,null,["\n\n        "])),(l()(),ul.Z(421,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ul._20(422,null,["Vorname: ",""])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(424,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ul._20(425,null,["Nachname: ",""])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(427,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ul._20(428,null,["Alter: ",""])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(433,0,null,1,83,"ion-card",[],null,null,null,null,null)),ul.Y(434,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(436,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(437,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      Reactive Form 2\n    "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(440,0,null,null,75,"ion-card-content",[],null,null,null,null,null)),ul.Y(441,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(443,0,null,null,71,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,a=l.component;if("submit"===n){o=!1!==ul._13(l,445).onSubmit(u)&&o}if("reset"===n){o=!1!==ul._13(l,445).onReset()&&o}if("submit"===n){o=!1!==a.processForm2()&&o}return o},null,null)),ul.Y(444,16384,null,0,Fl.u,[],null,null),ul.Y(445,540672,null,0,Fl.h,[[8,null],[8,null]],{form:[0,"form"]},null),ul._17(2048,null,Fl.b,null,[Fl.h]),ul.Y(447,16384,null,0,Fl.n,[Fl.b],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(449,0,null,null,56,"ion-list",[],null,null,null,null,null)),ul.Y(450,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(452,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(453,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,79,{contentLabel:0}),ul._18(603979776,80,{_buttons:1}),ul._18(603979776,81,{_icons:1}),ul.Y(457,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(459,0,null,1,2,"ion-label",[["floating",""],["for","vorname"]],null,null,null,null,null)),ul.Y(460,16384,[[79,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Vorname"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(463,0,null,3,4,"ion-input",[["formControlName","vorname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(464,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(466,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(467,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(470,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(471,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,82,{contentLabel:0}),ul._18(603979776,83,{_buttons:1}),ul._18(603979776,84,{_icons:1}),ul.Y(475,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(477,0,null,1,2,"ion-label",[["floating",""],["for","nachname"]],null,null,null,null,null)),ul.Y(478,16384,[[82,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Nachname"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(481,0,null,3,4,"ion-input",[["formControlName","nachname"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(482,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(484,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(485,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(488,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(489,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,85,{contentLabel:0}),ul._18(603979776,86,{_buttons:1}),ul._18(603979776,87,{_icons:1}),ul.Y(493,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(495,0,null,1,2,"ion-label",[["floating",""],["for","alter"]],null,null,null,null,null)),ul.Y(496,16384,[[85,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Alter"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(499,0,null,3,4,"ion-input",[["formControlName","alter"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(500,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(502,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(503,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(508,0,null,null,2,"button",[["block",""],["ion-button",""],["type","submit"]],null,null,null,Sn.b,Sn.a)),ul.Y(509,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{block:[0,"block"]},null),(l()(),ul._20(-1,0,["Submit"])),(l()(),ul._20(-1,null,["\n\n        "])),(l()(),ul.Z(512,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),ul._20(513,null,["Name value: ",""])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,45,0,"text");l(n,60,0,"text");l(n,75,0,"text");l(n,86,0,"text","Placeholder");l(n,101,0,"text");l(n,116,0,"text");l(n,139,0,"text","Text");l(n,150,0,"password","Password");l(n,161,0,"email","Email");l(n,172,0,"number","Number");l(n,183,0,"search","Search");l(n,194,0,"tel","Tel");l(n,205,0,"url","Url");l(n,228,0,"text","","Readonly");l(n,239,0,"text","Min 2 max 5","2","5");l(n,250,0,"text","","ClearOnEdit");l(n,261,0,"","text","ClearInput");l(n,272,0,"text","on","Autocorrect");l(n,283,0,"text","on","Autocomplete");l(n,317,0,"");l(n,319,0,"marke",u.auto.marke);l(n,322,0,"text");l(n,345,0,u.form1);l(n,364,0,"vorname");l(n,367,0,"text");l(n,371,0,!u.form1.controls.vorname.valid&&(u.form1.controls.vorname.dirty||u.form1.controls.vorname.touched));l(n,385,0,"nachname");l(n,388,0,"text");l(n,392,0,!u.form1.controls.nachname.valid&&(u.form1.controls.nachname.dirty||u.form1.controls.nachname.touched));l(n,406,0,"alter");l(n,409,0,"text");l(n,413,0,!u.form1.controls.alter.valid&&(u.form1.controls.alter.dirty||u.form1.controls.alter.touched));l(n,418,0,"");l(n,445,0,u.form2);l(n,464,0,"vorname");l(n,467,0,"text");l(n,482,0,"nachname");l(n,485,0,"text");l(n,500,0,"alter");l(n,503,0,"text");l(n,509,0,"")},function(l,n){var u=n.component;l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,12,0,ul._13(n,13).statusbarPadding,ul._13(n,13)._hasRefresher);l(n,17,0,ul._13(n,21).ngClassUntouched,ul._13(n,21).ngClassTouched,ul._13(n,21).ngClassPristine,ul._13(n,21).ngClassDirty,ul._13(n,21).ngClassValid,ul._13(n,21).ngClassInvalid,ul._13(n,21).ngClassPending);l(n,299,0,ul._13(n,303).ngClassUntouched,ul._13(n,303).ngClassTouched,ul._13(n,303).ngClassPristine,ul._13(n,303).ngClassDirty,ul._13(n,303).ngClassValid,ul._13(n,303).ngClassInvalid,ul._13(n,303).ngClassPending);l(n,316,0,ul._13(n,317).required?"":null,ul._13(n,321).ngClassUntouched,ul._13(n,321).ngClassTouched,ul._13(n,321).ngClassPristine,ul._13(n,321).ngClassDirty,ul._13(n,321).ngClassValid,ul._13(n,321).ngClassInvalid,ul._13(n,321).ngClassPending);l(n,343,0,ul._13(n,347).ngClassUntouched,ul._13(n,347).ngClassTouched,ul._13(n,347).ngClassPristine,ul._13(n,347).ngClassDirty,ul._13(n,347).ngClassValid,ul._13(n,347).ngClassInvalid,ul._13(n,347).ngClassPending);l(n,363,0,ul._13(n,366).ngClassUntouched,ul._13(n,366).ngClassTouched,ul._13(n,366).ngClassPristine,ul._13(n,366).ngClassDirty,ul._13(n,366).ngClassValid,ul._13(n,366).ngClassInvalid,ul._13(n,366).ngClassPending);l(n,384,0,ul._13(n,387).ngClassUntouched,ul._13(n,387).ngClassTouched,ul._13(n,387).ngClassPristine,ul._13(n,387).ngClassDirty,ul._13(n,387).ngClassValid,ul._13(n,387).ngClassInvalid,ul._13(n,387).ngClassPending);l(n,405,0,ul._13(n,408).ngClassUntouched,ul._13(n,408).ngClassTouched,ul._13(n,408).ngClassPristine,ul._13(n,408).ngClassDirty,ul._13(n,408).ngClassValid,ul._13(n,408).ngClassInvalid,ul._13(n,408).ngClassPending);l(n,422,0,u.form1.get("vorname").value);l(n,425,0,u.form1.get("nachname").value);l(n,428,0,u.form1.get("alter").value);l(n,443,0,ul._13(n,447).ngClassUntouched,ul._13(n,447).ngClassTouched,ul._13(n,447).ngClassPristine,ul._13(n,447).ngClassDirty,ul._13(n,447).ngClassValid,ul._13(n,447).ngClassInvalid,ul._13(n,447).ngClassPending);l(n,463,0,ul._13(n,466).ngClassUntouched,ul._13(n,466).ngClassTouched,ul._13(n,466).ngClassPristine,ul._13(n,466).ngClassDirty,ul._13(n,466).ngClassValid,ul._13(n,466).ngClassInvalid,ul._13(n,466).ngClassPending);l(n,481,0,ul._13(n,484).ngClassUntouched,ul._13(n,484).ngClassTouched,ul._13(n,484).ngClassPristine,ul._13(n,484).ngClassDirty,ul._13(n,484).ngClassValid,ul._13(n,484).ngClassInvalid,ul._13(n,484).ngClassPending);l(n,499,0,ul._13(n,502).ngClassUntouched,ul._13(n,502).ngClassTouched,ul._13(n,502).ngClassPristine,ul._13(n,502).ngClassDirty,ul._13(n,502).ngClassValid,ul._13(n,502).ngClassInvalid,ul._13(n,502).ngClassPending);l(n,513,0,u.form2.get("vorname").value)})}function X(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,13,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(1,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(3,0,null,null,9,"ion-col",[["class","col"],["offset-3",""]],null,null,null,null,null)),ul.Y(4,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(6,0,null,null,5,"button",[["color","primary"],["icon-right",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToTerminErstellung()&&o}return o},Sn.b,Sn.a)),ul.Y(7,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n        Termin anlegen\n        "])),(l()(),ul.Z(9,0,null,0,1,"ion-icon",[["name","add"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(10,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "]))],function(l,n){l(n,7,0,"primary");l(n,10,0,"add")},function(l,n){l(n,9,0,ul._13(n,10)._hidden)})}function W(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,80,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(1,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,2,{contentLabel:0}),ul._18(603979776,3,{_buttons:1}),ul._18(603979776,4,{_icons:1}),ul.Y(5,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(7,0,null,2,21,"ion-list-header",[["class","item"]],null,null,null,un.b,un.a)),ul.Y(8,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,5,{contentLabel:0}),ul._18(603979776,6,{_buttons:1}),ul._18(603979776,7,{_icons:1}),ul.Y(12,16384,null,0,Yo.a,[tn.a,ul.z,ul.j,[8,null]],null,null),(l()(),ul._20(-1,2,["\n        "])),(l()(),ul.Z(14,0,null,2,13,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(15,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(17,0,null,null,5,"ion-col",[["class","col"],["col-1",""]],null,null,null,null,null)),ul.Y(18,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n            "])),(l()(),ul.Z(20,0,null,null,1,"ion-icon",[["name","calendar"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(21,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(24,0,null,null,2,"ion-col",[["class","col"],["col-11",""]],null,null,null,null,null)),ul.Y(25,16384,null,0,qn.a,[],null,null),(l()(),ul._20(26,null,["\n            "," ","\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(30,0,null,2,10,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(31,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(33,0,null,null,6,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(34,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,8,{contentLabel:0}),ul._18(603979776,9,{_buttons:1}),ul._18(603979776,10,{_icons:1}),ul.Y(38,16384,null,0,rn.a,[],null,null),(l()(),ul._20(39,2,["Beteiligte: ",""])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(42,0,null,2,11,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(43,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(45,0,null,null,7,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(46,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,11,{contentLabel:0}),ul._18(603979776,12,{_buttons:1}),ul._18(603979776,13,{_icons:1}),ul.Y(50,16384,null,0,rn.a,[],null,null),(l()(),ul._20(51,2,["Zeitpunkt: ",""])),ul._16(52,2),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,2,["\n      "])),(l()(),ul.Z(55,0,null,2,24,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(56,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(58,0,null,null,9,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(59,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(61,0,null,null,5,"button",[["color","primary"],["icon-right",""],["ion-button",""],["mini",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.goToTerminBearbeitung(l.context.$implicit)&&o}return o},Sn.b,Sn.a)),ul.Y(62,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n            Bearbeiten\n            "])),(l()(),ul.Z(64,0,null,0,1,"ion-icon",[["name","create"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(65,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(69,0,null,null,9,"ion-col",[["class","col"],["col-6",""]],null,null,null,null,null)),ul.Y(70,16384,null,0,qn.a,[],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(72,0,null,null,5,"button",[["color","primary"],["icon-right",""],["ion-button",""],["mini",""]],null,[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==l.component.showConfirmation(l.context.$implicit.id)&&o}return o},Sn.b,Sn.a)),ul.Y(73,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{color:[0,"color"]},null),(l()(),ul._20(-1,0,["\n            Löschen\n            "])),(l()(),ul.Z(75,0,null,0,1,"ion-icon",[["name","trash"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(76,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,2,["\n    "]))],function(l,n){l(n,21,0,"calendar");l(n,62,0,"primary");l(n,65,0,"create");l(n,73,0,"primary");l(n,76,0,"trash")},function(l,n){l(n,20,0,ul._13(n,21)._hidden);l(n,26,0,n.context.$implicit.id,n.context.$implicit.bezeichnung);l(n,39,0,n.context.$implicit.beteiligtePersonen);l(n,51,0,ul._21(n,51,0,l(n,52,0,ul._13(n.parent,0),n.context.$implicit.zeitpunt,"dd.MM.yyyy")));l(n,64,0,ul._13(n,65)._hidden);l(n,75,0,ul._13(n,76)._hidden)})}function H(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,18,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(1,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(3,0,null,null,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(4,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(6,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,null,null)),ul.Y(7,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),(l()(),ul._20(-1,null,["Error:"])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(11,0,null,null,6,"ion-row",[["class","row"]],null,null,null,null,null)),ul.Y(12,16384,null,0,Hn.a,[],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(14,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,null,null)),ul.Y(15,16384,null,0,ju.a,[tn.a,ul.j,ul.z,[8,null],[8,null],[8,null],[8,null]],{color:[0,"color"]},null),(l()(),ul._20(16,null,["",""])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "]))],function(l,n){l(n,7,0,"danger");l(n,15,0,"danger")},function(l,n){l(n,16,0,n.component.errorMessage)})}function q(l){return ul._22(0,[ul._14(0,xn.d,[ul.r]),(l()(),ul.Z(1,0,null,null,20,"ion-header",[],null,null,null,null,null)),ul.Y(2,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(4,0,null,null,16,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(5,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(7,0,null,0,8,"button",[["ion-button",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==ul._13(l,9).toggle()&&o}return o},Sn.b,Sn.a)),ul.Y(8,1097728,[[1,4]],0,On.a,[[8,""],tn.a,ul.j,ul.z],null,null),ul.Y(9,1064960,null,0,An.a,[sn.a,[2,Zn.a],[2,On.a],[2,yn.a]],{menuToggle:[0,"menuToggle"]},null),ul.Y(10,16384,null,1,Rn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),ul._18(603979776,1,{_buttons:1}),(l()(),ul._20(-1,0,["\n      "])),(l()(),ul.Z(13,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),ul.Y(14,147456,null,0,Nn.a,[tn.a,ul.j,ul.z],{name:[0,"name"]},null),(l()(),ul._20(-1,0,["\n    "])),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.Z(17,0,null,3,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(18,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Termine"])),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(23,0,null,null,15,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(24,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.U(16777216,null,1,1,null,X)),ul.Y(27,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.Z(29,0,null,1,5,"ion-list",[],null,null,null,null,null)),ul.Y(30,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.U(16777216,null,null,1,null,W)),ul.Y(33,802816,null,0,xn.j,[ul.I,ul.F,ul.p],{ngForOf:[0,"ngForOf"]},null),(l()(),ul._20(-1,null,["\n  "])),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.U(16777216,null,1,1,null,H)),ul.Y(37,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,9,0,"");l(n,14,0,"menu");l(n,27,0,!u.errorMessage);l(n,33,0,u.termine);l(n,37,0,u.errorMessage)},function(l,n){l(n,4,0,ul._13(n,5)._hidden,ul._13(n,5)._sbPadding);l(n,7,0,ul._13(n,9).isHidden);l(n,13,0,ul._13(n,14)._hidden);l(n,23,0,ul._13(n,24).statusbarPadding,ul._13(n,24)._hasRefresher)})}function G(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(1,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Termin Erstellung"]))],null,null)}function K(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,2,"ion-title",[],null,null,null,zn.b,zn.a)),ul.Y(1,49152,null,0,jn.a,[tn.a,ul.j,ul.z,[2,vn.a],[2,yn.a]],null,null),(l()(),ul._20(-1,0,["Termin Bearbeitung"]))],null,null)}function J(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,76,"ion-card",[],null,null,null,null,null)),ul.Y(1,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(3,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(4,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      Termin erstellen\n    "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(7,0,null,null,68,"ion-card-content",[],null,null,null,null,null)),ul.Y(8,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(10,0,null,null,64,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,a=l.component;if("submit"===n){o=!1!==ul._13(l,12).onSubmit(u)&&o}if("reset"===n){o=!1!==ul._13(l,12).onReset()&&o}if("submit"===n){o=!1!==a.submitTerminErstellungs()&&o}return o},null,null)),ul.Y(11,16384,null,0,Fl.u,[],null,null),ul.Y(12,540672,null,0,Fl.h,[[8,null],[8,null]],{form:[0,"form"]},null),ul._17(2048,null,Fl.b,null,[Fl.h]),ul.Y(14,16384,null,0,Fl.n,[Fl.b],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(16,0,null,null,53,"ion-list",[],null,null,null,null,null)),ul.Y(17,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(19,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(20,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,1,{contentLabel:0}),ul._18(603979776,2,{_buttons:1}),ul._18(603979776,3,{_icons:1}),ul.Y(24,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(26,0,null,1,2,"ion-label",[["floating",""],["for","bezeichnung"]],null,null,null,null,null)),ul.Y(27,16384,[[1,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Bezeichnung"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(30,0,null,3,4,"ion-input",[["formControlName","bezeichnung"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(31,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(33,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(34,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(37,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(38,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,4,{contentLabel:0}),ul._18(603979776,5,{_buttons:1}),ul._18(603979776,6,{_icons:1}),ul.Y(42,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(44,0,null,1,2,"ion-label",[["floating",""],["for","beiteiligtePersonen"]],null,null,null,null,null)),ul.Y(45,16384,[[4,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Beteiligte"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(48,0,null,3,4,"ion-input",[["formControlName","beiteiligtePersonen"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(49,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(51,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(52,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(55,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(56,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,7,{contentLabel:0}),ul._18(603979776,8,{_buttons:1}),ul._18(603979776,9,{_icons:1}),ul.Y(60,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(62,0,null,3,5,"ion-datetime",[["cancelText","Abbrechen"],["displayFormat","DD.MM.YYYY"],["doneText","Zeitpunkt übernehmen"],["formControlName","zeitpunkt"],["max","2020"],["min","2017"],["placeholder","Zeitpunkt auswählen"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==ul._13(l,63)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,63)._keyup()&&o}return o},Mu.b,Mu.a)),ul.Y(63,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{min:[0,"min"],max:[1,"max"],displayFormat:[2,"displayFormat"],cancelText:[3,"cancelText"],doneText:[4,"doneText"],placeholder:[5,"placeholder"]},null),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(65,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[2,Fl.k]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(67,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(71,0,null,null,2,"button",[["block",""],["ion-button",""],["type","submit"]],[[8,"disabled",0]],null,null,Sn.b,Sn.a)),ul.Y(72,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{block:[0,"block"]},null),(l()(),ul._20(-1,0,["\n          Termin erstellen\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "]))],function(l,n){l(n,12,0,n.component.terminErstellungsForm);l(n,31,0,"bezeichnung");l(n,34,0,"text");l(n,49,0,"beiteiligtePersonen");l(n,52,0,"text");l(n,63,0,"2017","2020","DD.MM.YYYY","Abbrechen","Zeitpunkt übernehmen","Zeitpunkt auswählen");l(n,65,0,"zeitpunkt");l(n,72,0,"")},function(l,n){var u=n.component;l(n,10,0,ul._13(n,14).ngClassUntouched,ul._13(n,14).ngClassTouched,ul._13(n,14).ngClassPristine,ul._13(n,14).ngClassDirty,ul._13(n,14).ngClassValid,ul._13(n,14).ngClassInvalid,ul._13(n,14).ngClassPending);l(n,30,0,ul._13(n,33).ngClassUntouched,ul._13(n,33).ngClassTouched,ul._13(n,33).ngClassPristine,ul._13(n,33).ngClassDirty,ul._13(n,33).ngClassValid,ul._13(n,33).ngClassInvalid,ul._13(n,33).ngClassPending);l(n,48,0,ul._13(n,51).ngClassUntouched,ul._13(n,51).ngClassTouched,ul._13(n,51).ngClassPristine,ul._13(n,51).ngClassDirty,ul._13(n,51).ngClassValid,ul._13(n,51).ngClassInvalid,ul._13(n,51).ngClassPending);l(n,62,0,ul._13(n,63)._disabled,ul._13(n,67).ngClassUntouched,ul._13(n,67).ngClassTouched,ul._13(n,67).ngClassPristine,ul._13(n,67).ngClassDirty,ul._13(n,67).ngClassValid,ul._13(n,67).ngClassInvalid,ul._13(n,67).ngClassPending);l(n,71,0,!u.terminErstellungsForm.valid)})}function Q(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,76,"ion-card",[],null,null,null,null,null)),ul.Y(1,16384,null,0,mu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(3,0,null,null,2,"ion-card-header",[],null,null,null,null,null)),ul.Y(4,16384,null,0,hu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      Termin bearbeiten\n    "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul.Z(7,0,null,null,68,"ion-card-content",[],null,null,null,null,null)),ul.Y(8,16384,null,0,Yu.a,[tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul.Z(10,0,null,null,64,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var o=!0,a=l.component;if("submit"===n){o=!1!==ul._13(l,12).onSubmit(u)&&o}if("reset"===n){o=!1!==ul._13(l,12).onReset()&&o}if("submit"===n){o=!1!==a.submitTerminBearbeitung()&&o}return o},null,null)),ul.Y(11,16384,null,0,Fl.u,[],null,null),ul.Y(12,540672,null,0,Fl.h,[[8,null],[8,null]],{form:[0,"form"]},null),ul._17(2048,null,Fl.b,null,[Fl.h]),ul.Y(14,16384,null,0,Fl.n,[Fl.b],null,null),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(16,0,null,null,53,"ion-list",[],null,null,null,null,null)),ul.Y(17,16384,null,0,Pn.a,[tn.a,ul.j,ul.z,gn.a,mn.l,hn.a],null,null),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(19,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(20,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,10,{contentLabel:0}),ul._18(603979776,11,{_buttons:1}),ul._18(603979776,12,{_icons:1}),ul.Y(24,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(26,0,null,1,2,"ion-label",[["floating",""],["for","bezeichnung"]],null,null,null,null,null)),ul.Y(27,16384,[[10,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Bezeichnung"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(30,0,null,3,4,"ion-input",[["formControlName","bezeichnung"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(31,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(33,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(34,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(37,0,null,null,16,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(38,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,13,{contentLabel:0}),ul._18(603979776,14,{_buttons:1}),ul._18(603979776,15,{_icons:1}),ul.Y(42,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(44,0,null,1,2,"ion-label",[["floating",""],["for","beiteiligtePersonen"]],null,null,null,null,null)),ul.Y(45,16384,[[13,4]],0,ju.a,[tn.a,ul.j,ul.z,[8,""],[8,null],[8,null],[8,null]],null,null),(l()(),ul._20(-1,null,["Beteiligte"])),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(48,0,null,3,4,"ion-input",[["formControlName","beiteiligtePersonen"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,Ou.b,Ou.a)),ul.Y(49,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[8,null]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(51,16384,null,0,Fl.m,[Fl.l],null,null),ul.Y(52,5423104,null,0,Au.a,[tn.a,gn.a,an.a,fn.a,ul.j,ul.z,[2,wn.a],[2,on.a],[2,Fl.l],hn.a],{type:[0,"type"]},null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n          "])),(l()(),ul.Z(55,0,null,null,13,"ion-item",[["class","item item-block"]],null,null,null,un.b,un.a)),ul.Y(56,1097728,null,3,on.a,[an.a,tn.a,ul.j,ul.z,[2,en.a]],null,null),ul._18(335544320,16,{contentLabel:0}),ul._18(603979776,17,{_buttons:1}),ul._18(603979776,18,{_icons:1}),ul.Y(60,16384,null,0,rn.a,[],null,null),(l()(),ul._20(-1,2,["\n            "])),(l()(),ul.Z(62,0,null,3,5,"ion-datetime",[["cancelText","Abbrechen"],["displayFormat","DD.MM.YYYY"],["doneText","Zeitpunkt übernehmen"],["formControlName","zeitpunkt"],["max","2020"],["min","2017"],["placeholder","Zeitpunkt auswählen"]],[[2,"datetime-disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"click"],[null,"keyup.space"]],function(l,n,u){var o=!0;if("click"===n){o=!1!==ul._13(l,63)._click(u)&&o}if("keyup.space"===n){o=!1!==ul._13(l,63)._keyup()&&o}return o},Mu.b,Mu.a)),ul.Y(63,1228800,null,0,Fu.a,[an.a,tn.a,ul.j,ul.z,[2,on.a],[2,Bu.a]],{min:[0,"min"],max:[1,"max"],displayFormat:[2,"displayFormat"],cancelText:[3,"cancelText"],doneText:[4,"doneText"],placeholder:[5,"placeholder"]},null),ul._17(1024,null,Fl.k,function(l){return[l]},[Fu.a]),ul.Y(65,671744,null,0,Fl.f,[[3,Fl.b],[8,null],[8,null],[2,Fl.k]],{name:[0,"name"]},null),ul._17(2048,null,Fl.l,null,[Fl.f]),ul.Y(67,16384,null,0,Fl.m,[Fl.l],null,null),(l()(),ul._20(-1,2,["\n          "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul._20(-1,null,["\n        "])),(l()(),ul.Z(71,0,null,null,2,"button",[["block",""],["ion-button",""],["type","submit"]],[[8,"disabled",0]],null,null,Sn.b,Sn.a)),ul.Y(72,1097728,null,0,On.a,[[8,""],tn.a,ul.j,ul.z],{block:[0,"block"]},null),(l()(),ul._20(-1,0,["\n          Termin bearbeiten\n        "])),(l()(),ul._20(-1,null,["\n      "])),(l()(),ul._20(-1,null,["\n    "])),(l()(),ul._20(-1,null,["\n  "]))],function(l,n){l(n,12,0,n.component.terminBearbeitungsForm);l(n,31,0,"bezeichnung");l(n,34,0,"text");l(n,49,0,"beiteiligtePersonen");l(n,52,0,"text");l(n,63,0,"2017","2020","DD.MM.YYYY","Abbrechen","Zeitpunkt übernehmen","Zeitpunkt auswählen");l(n,65,0,"zeitpunkt");l(n,72,0,"")},function(l,n){var u=n.component;l(n,10,0,ul._13(n,14).ngClassUntouched,ul._13(n,14).ngClassTouched,ul._13(n,14).ngClassPristine,ul._13(n,14).ngClassDirty,ul._13(n,14).ngClassValid,ul._13(n,14).ngClassInvalid,ul._13(n,14).ngClassPending);l(n,30,0,ul._13(n,33).ngClassUntouched,ul._13(n,33).ngClassTouched,ul._13(n,33).ngClassPristine,ul._13(n,33).ngClassDirty,ul._13(n,33).ngClassValid,ul._13(n,33).ngClassInvalid,ul._13(n,33).ngClassPending);l(n,48,0,ul._13(n,51).ngClassUntouched,ul._13(n,51).ngClassTouched,ul._13(n,51).ngClassPristine,ul._13(n,51).ngClassDirty,ul._13(n,51).ngClassValid,ul._13(n,51).ngClassInvalid,ul._13(n,51).ngClassPending);l(n,62,0,ul._13(n,63)._disabled,ul._13(n,67).ngClassUntouched,ul._13(n,67).ngClassTouched,ul._13(n,67).ngClassPristine,ul._13(n,67).ngClassDirty,ul._13(n,67).ngClassValid,ul._13(n,67).ngClassInvalid,ul._13(n,67).ngClassPending);l(n,71,0,!u.terminBearbeitungsForm.valid)})}function ll(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,12,"ion-header",[],null,null,null,null,null)),ul.Y(1,16384,null,0,Yn.a,[tn.a,ul.j,ul.z,[2,Zn.a]],null,null),(l()(),ul._20(-1,null,["\n\n  "])),(l()(),ul.Z(3,0,null,null,8,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,Vn.b,Vn.a)),ul.Y(4,49152,null,0,yn.a,[fn.a,[2,Zn.a],[2,Tn.a],tn.a,ul.j,ul.z],null,null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.U(16777216,null,3,1,null,G)),ul.Y(7,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,3,["\n    "])),(l()(),ul.U(16777216,null,3,1,null,K)),ul.Y(10,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,3,["\n  "])),(l()(),ul._20(-1,null,["\n\n"])),(l()(),ul._20(-1,null,["\n\n\n"])),(l()(),ul.Z(14,0,null,null,8,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,kn.b,kn.a)),ul.Y(15,4374528,null,0,wn.a,[tn.a,gn.a,hn.a,ul.j,ul.z,fn.a,pn.a,ul.u,[2,Zn.a],[2,Tn.a]],null,null),(l()(),ul._20(-1,1,["\n  "])),(l()(),ul.U(16777216,null,1,1,null,J)),ul.Y(18,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,1,["\n\n  "])),(l()(),ul.U(16777216,null,1,1,null,Q)),ul.Y(21,16384,null,0,xn.k,[ul.I,ul.F],{ngIf:[0,"ngIf"]},null),(l()(),ul._20(-1,1,["\n\n"])),(l()(),ul._20(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,7,0,"erstellen"===u.operation);l(n,10,0,"bearbeiten"===u.operation);l(n,18,0,"erstellen"===u.operation);l(n,21,0,"bearbeiten"===u.operation)},function(l,n){l(n,3,0,ul._13(n,4)._hidden,ul._13(n,4)._sbPadding);l(n,14,0,ul._13(n,15).statusbarPadding,ul._13(n,15)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var nl=u(49),ul=u(0),ol=(u(2),u(77)),al=u(53),tl=(u(16),u(102)),el=u(103),il=u(194),rl=function(){function l(l){this.http=l,console.log("Hello RandomIntProvider Provider")}return l.prototype.getRandomInteger=function(){return this.http.get("http://localhost:8080/backend-service/rest/backendService/generateRandomIntegerText?max=1001").do(this._logResponse).map(this._mapDataToBenutzer).catch(this._handleError)},l.prototype._logResponse=function(l){console.log("Response: ",l)},l.prototype._mapDataToBenutzer=function(l){return console.log("Response: ",l),l.generatedInteger},l.prototype._handleError=function(l){return l.error instanceof ErrorEvent?console.error("An error occurred:",l.error.message):console.error("Backend returned code "+l.status+", body was: "+l.error),new il.ErrorObservable("Something bad happened; please try again later.")},l}(),cl=function(){function l(l,n,u,o){this.navCtrl=l,this.actionSheetCtrl=n,this.navParams=u,this.randomIntProvider=o,this.randomInt=0}return l.prototype.ionViewDidLoad=function(){},l.prototype.presentActionSheet=function(){var l=this,n=this.actionSheetCtrl.create({title:"Testtitel",subTitle:"Untertitel",buttons:[{text:"Test backend",role:"destructive",icon:"ice-cream",handler:function(){console.log("Test backend clicked");var u=n.dismiss();return l.randomIntProvider.getRandomInteger().subscribe(function(n){console.log(n),l.randomInt=n,u.then(function(){})},function(n){console.error(n),l.errorMessage=n}),!1}},{text:"Nichts passiert",handler:function(){console.log("nichts")}},{text:"Cancel",role:"cancel"}]});n.present()},l}(),sl=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad AlertPage")},l}(),_l=(u(195),u(196),u(197),function(){function l(l){this.httpClient=l}return l.prototype.getBenutzer=function(){return this.httpClient.get("https://randomuser.me/api/?results=5").do(this._logResponse).map(this._mapDataToBenutzer)},l.prototype._logResponse=function(l){console.log("Response: ",l)},l.prototype._mapDataToBenutzer=function(l){return l.results},l}()),dl=function(){function l(l,n,u,o){this.navCtrl=l,this.navParams=n,this.benutzerProvider=u,this.storage=o}return l.prototype.ionViewDidLoad=function(){var l=this;this.benutzerProvider.getBenutzer().subscribe(function(n){l.benutzerList=n,console.log("Benutzer:",l.benutzerList),l.storage.set("benutzer_"+l.benutzerList[0].login.username,l.benutzerList[0].login.username)})},l}(),bl=u(27),gl=function(){function l(l){this.httpClient=l,console.log("Hello LaenderProvider Provider")}return l.prototype.getLaender=function(){return this.httpClient.get("https://restcountries.eu/rest/v2/all").do(this._logResponse).map(this._mapDataToLaender).catch(this._throwError)},l.prototype.getLaenderImages=function(){return this.httpClient.get("https://restcountries.eu/rest/v2/regionalbloc/eu").do(this._logResponse).map(this._mapDataToLaenderImages).catch(this._throwError)},l.prototype._logResponse=function(l){console.log("Response: ",l)},l.prototype._mapDataToLaender=function(l){return l},l.prototype._mapDataToLaenderImages=function(l){return l.map(function(l){return l.flag})},l.prototype._throwError=function(l){return console.error(l),bl.Observable.throw("Server error")},l}(),pl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.laenderProvider=u}return l.prototype.ionViewDidLoad=function(){var l=this;this.laenderProvider.getLaender().subscribe(function(n){l.laender=n})},l}(),ml=function(){function l(l,n,u){var o=this;this.navCtrl=l,this.navParams=n,this.app=u,this.app.getActiveNavContainers().forEach(function(l){console.log(l.id),console.log(l.name),console.log(l.parent),console.log(l.getType()),console.log(l.getSecondaryIdentifier()),console.log(o.app.getNavByIdOrName(l.id)),console.log(o.app.getRootNavById(l.id)),l.getAllChildNavs().forEach(function(l){console.log(l.id),console.log(l.name),console.log(l.parent)}),l.getAllChildNavs().forEach(function(l){console.log(l.id),console.log(l.name),console.log(l.parent)}),console.log(o.app.getRootNavs()),console.log(o.app.isScrolling())})}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad")},l.prototype.ionViewWillUnload=function(){console.log("ionViewWillUnload")},l.prototype.ionViewWillEnter=function(){console.log("ionViewWillEnter")},l.prototype.ionViewDidEnter=function(){console.log("ionViewDidEnter")},l.prototype.ionViewDidLeave=function(){console.log("ionViewDidLeave")},l.prototype.ionViewWillLeave=function(){console.log("ionViewWillLeave")},l}(),hl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.laenderProvider=u}return l.prototype.ionViewDidLoad=function(){var l=this;this.laenderProvider.getLaender().subscribe(function(n){l.laender=n})},l}(),fl=function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.buttonClicked=!1}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad ButtonPage")},l}(),Yl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.laenderProvider=u}return l.prototype.ionViewDidLoad=function(){var l=this;this.laenderProvider.getLaender().subscribe(function(n){l.laender=n.filter(function(l){return l.population>2e8})})},l}(),Zl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.laenderProvider=u,this.checked=!1,this.checkboxMap=new Map}return l.prototype.ionViewDidLoad=function(){var l=this;this.laenderProvider.getLaender().subscribe(function(n){l.laender=n,l.borders=n.find(function(l){return"AUT"===l.alpha3Code}).borders})},l.prototype.checkboxClicked=function(l){console.log("Checkbox clicked: ",l)},l.prototype.checkboxChanged=function(l,n){if(this.checkboxMap.set(n,l.checked),this.checkboxMap.get(n))this.checkboxArray&&0!==this.checkboxArray.length?this.checkboxArray.indexOf(n)>=0||this.checkboxArray.push(n):(this.checkboxArray=[],this.checkboxArray.push(n));else{var u=this.checkboxArray.indexOf(n);this.checkboxArray.splice(u,1)}},l.prototype.getLandByAlpha3Code=function(l){return this.laender.find(function(n){return n.alpha3Code===l})},l.prototype.getLandNameByAlpha3Code=function(l){return this.laender.find(function(n){return n.alpha3Code===l}).name},l}(),Cl=function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.show=!1}return l.prototype.ionViewDidLoad=function(){},l.prototype.showMessage=function(){return this.show=!this.show},l}(),vl=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){},l}(),zl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.laenderProvider=u}return l.prototype.ionViewDidLoad=function(){var l=this;this.laenderProvider.getLaender().subscribe(function(n){l.laender=n.filter(function(l){return l.area>1e6})})},l.prototype.toTop=function(){this.content.scrollToTop()},l.prototype.toBottom=function(){this.content.scrollToBottom()},l}(),jl=function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.myDate4="2017-01-01",this.myDate5="2017-02-02",this.monthNames=["Jänner Oida","Februar Oida","März Oida","April Oida","Mai Oida","Juni Oida","Juli Oida","August Oida","September Oida","Oktober Oida","November Oida","Dezember Oida"],this.monthNamesShort=["JäO","FeO","MäO","ApO","MaO","JuO","JuO","AuO","SeO","OkO","NoO","DeO"],this.dayNames=["Montag Oida","Dienstag Oida","Mittwoch Oida","Donnerstag Oida","Freitag Oida","Sanstag Oida","Sonntag Oida"],this.dayNamesShort=["MO Oida","DI Oida","MI Oida","DO Oida","FR Oida","SA Oida","SO Oida"]}return l.prototype.ionViewDidLeave=function(){console.log(this.myDate1)},l.prototype.canceled=function(){console.log("Datepicker gecanceled")},l}(),yl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.events=u,this.events.subscribe("mein:input",function(l){console.log("Input Text war:",l)})}return l.prototype.ionViewWillLeave=function(){this.events.unsubscribe("mein:input",function(l){console.log("unsubscribed")})},l}(),kl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.events=u}return l.prototype.buttonClicked=function(){this.events.publish("mein:input",this.myInput),this.navCtrl.push(yl)},l}(),wl=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){},l.prototype.share=function(l,n){n.close(),console.log("Clicked:",l)},l}(),Tl=function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.press=0,this.pan=0,this.swipe=0,this.tap=0,this.rotate=0,this.pinch=0}return l.prototype.pressEvent=function(l){console.log(l),this.press++},l.prototype.panEvent=function(l){this.pan++},l.prototype.swipeEvent=function(l){this.swipe++},l.prototype.tapEvent=function(l){this.tap++},l.prototype.rotateEvent=function(l){this.rotate++},l.prototype.pinchEvent=function(l){this.pinch++},l}(),Pl=function(){return function(l,n){this.navCtrl=l,this.navParams=n}}(),xl=function(){return function(l,n){this.navCtrl=l,this.navParams=n}}(),Il=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad HideWhenPage")},l}(),Ll=function(){function l(l,n){this.navCtrl=l,this.navParams=n,this.myColor="primary"}return l.prototype.changeColor=function(){this.myColor="primary"===this.myColor?"btnColor":"primary"},l}(),Dl=function(){function l(l,n,u){var o=this;this.navCtrl=l,this.navParams=n,this.laenderProvider=u,this.laenderProvider.getLaenderImages().subscribe(function(l){o.flaggen=l})}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad ImgPage")},l}(),Ml=function(){return function(l,n){this.navCtrl=l,this.navParams=n}}(),Fl=u(26),Bl=function(){function l(){}return l.isValid=function(l){return isNaN(l.value)?{"Keine Zahl":!0}:l.value%1!=0?{"Keine Ganzahl":!0}:l.value<18?{"Zu jung":!0}:l.value>120?{"Zu alt":!0}:null},l}(),Vl=function(){function l(l,n,u){this.navCtrl=l,this.navParams=n,this.formBuilder=u,this.auto={marke:"",modell:""},this.form1=new Fl.g({vorname:new Fl.e("",Fl.s.required),nachname:new Fl.e("",Fl.s.required),alter:new Fl.e("",Bl.isValid)}),this.form2=u.group({vorname:["",Fl.s.compose([Fl.s.maxLength(30),Fl.s.pattern("[a-zA-Z ]*"),Fl.s.required])],nachname:["",Fl.s.compose([Fl.s.maxLength(30),Fl.s.pattern("[a-zA-Z ]*"),Fl.s.required])],alter:["",Bl.isValid]})}return l.prototype.onSubmitTemplateDrivenForm=function(l){console.log(l)},l.prototype.processForm1=function(l){this.form1.invalid&&(console.log("fail"),this._validateAllFields(this.form1)),console.log("Form: ",this.form1)},l.prototype.processForm2=function(){this.form2.invalid&&console.log("fail"),console.log("Form: ",this.form2)},l.prototype._validateAllFields=function(l){var n=this;Object.keys(l.controls).forEach(function(u){var o=l.get(u);o instanceof Fl.e?o.markAsTouched({onlySelf:!0}):o instanceof Fl.g&&n._validateAllFields(o)})},l}(),Sl=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad KomponentenPage")},l.prototype.goToActionsheet=function(){this.navCtrl.push(cl)},l.prototype.goToAlert=function(){this.navCtrl.push(sl)},l.prototype.goToApp=function(){this.navCtrl.push(ml)},l.prototype.goToAvatar=function(){this.navCtrl.push(hl)},l.prototype.goToBadge=function(){this.navCtrl.push(pl)},l.prototype.goToButton=function(){this.navCtrl.push(fl)},l.prototype.goToCard=function(){this.navCtrl.push(Yl)},l.prototype.goToCheckbox=function(){this.navCtrl.push(Zl)},l.prototype.goToChip=function(){this.navCtrl.push(Cl)},l.prototype.goToColAndConfig=function(){this.navCtrl.push(vl)},l.prototype.goToContent=function(){this.navCtrl.push(zl)},l.prototype.goToDateTime=function(){this.navCtrl.push(jl)},l.prototype.goToEvents=function(){this.navCtrl.push(kl)},l.prototype.goToFabButton=function(){this.navCtrl.push(wl)},l.prototype.goToGestures=function(){this.navCtrl.push(Tl)},l.prototype.goToGrid=function(){this.navCtrl.push(Pl)},l.prototype.goToHaptic=function(){this.navCtrl.push(xl)},l.prototype.goToHideWhen=function(){this.navCtrl.push(Il)},l.prototype.goToIcon=function(){this.navCtrl.push(Ll)},l.prototype.goToImg=function(){this.navCtrl.push(Dl)},l.prototype.goToInfiniteScroll=function(){this.navCtrl.push(Ml)},l.prototype.goToInput=function(){this.navCtrl.push(Vl)},l.prototype.goToIonicErrorHandler=function(){},l.prototype.goToIonicModule=function(){},l.prototype.goToIonicPage=function(){},l.prototype.goToIonicPageModule=function(){},l.prototype.goToItem=function(){},l.prototype.goToItemOptions=function(){},l.prototype.goToItemRecorder=function(){},l.prototype.goToItemSliding=function(){},l.prototype.goToKeyboard=function(){},l.prototype.goToLabel=function(){},l.prototype.goToList=function(){this.navCtrl.push(dl)},l.prototype.goToLoadingController=function(){},l.prototype.goToMenu=function(){},l.prototype.goToMenuClose=function(){},l.prototype.goToMenuController=function(){},l.prototype.goToMenuToggle=function(){},l.prototype.goToModalController=function(){},l.prototype.goToNav=function(){},l.prototype.goToNavbar=function(){},l.prototype.goToNavController=function(){},l.prototype.goToNavParams=function(){},l.prototype.goToNavPop=function(){},l.prototype.goToNavPush=function(){},l.prototype.goToNote=function(){},l.prototype.goToOption=function(){},l.prototype.goToPlatform=function(){},l.prototype.goToPlatformConfigToken=function(){},l.prototype.goToPopoverController=function(){},l.prototype.goToRadioButton=function(){},l.prototype.goToRadioGroup=function(){},l.prototype.goToRange=function(){},l.prototype.goToRefresher=function(){},l.prototype.goToregisterModeConfigs=function(){},l.prototype.goToRow=function(){},l.prototype.goToScroll=function(){},l.prototype.goToSearchbar=function(){},l.prototype.goToSegment=function(){},l.prototype.goToSegmentButton=function(){},l.prototype.goToSelect=function(){},l.prototype.goToShowWhen=function(){},l.prototype.goToSlide=function(){},l.prototype.goToSpinner=function(){},l.prototype.goToSplitPane=function(){},l.prototype.goToTab=function(){},l.prototype.goToTabs=function(){},l.prototype.goToThumbnail=function(){},l.prototype.goToTitle=function(){},l.prototype.goToToastController=function(){},l.prototype.goToToogle=function(){},l.prototype.goToToolbar=function(){},l.prototype.goToTypography=function(){},l.prototype.goToViewController=function(){},l.prototype.goToVirualScroll=function(){},l}(),Ol=function(){function l(l,n){var u=this;this.navCtrl=l,this.storage=n,this.letzteBenutzer=[],this.storage.forEach(function(l,n,o){n.startsWith("benutzer_")&&u.storage.get(n).then(function(l){console.log("Benutzerstorage: ",l)})})}return l.prototype.goToKomponenten=function(){this.navCtrl.push(Sl)},l}(),Al=function(){function l(l){this.httpClient=l,console.log("Hello TerminProvider Provider")}return l.prototype.getTermine=function(){return this.httpClient.get("http://localhost:8080/dr-solutions/rest/backendService/getAllTermine").do(this._logResponse).map(this._mapDataToTermine)},l.prototype.terminErstellen=function(l){return this.httpClient.post("http://localhost:8080/dr-solutions/rest/backendService/saveOrUpdateTermin",l).do(this._logResponse).map(this._mapDataToTermine)},l.prototype.terminAendern=function(l){return this.httpClient.post("http://localhost:8080/dr-solutions/rest/backendService/saveOrUpdateTermin",l).do(this._logResponse).map(this._mapDataToTermine)},l.prototype.terminLoeschen=function(l){return this.httpClient.post("http://localhost:8080/dr-solutions/rest/backendService/deleteTermin",l).map(this._mapDataToTermine)},l.prototype._logResponse=function(l){console.log("Response: ",l)},l.prototype._mapDataToTermine=function(l){return l},l}(),Rl=function(){function l(l,n,u,o,a){this.navCtrl=l,this.navParams=n,this.toastCtrl=u,this.formBuilder=o,this.terminProvider=a,this.operation=this.navParams.get("operation"),this.termin=this.navParams.get("termin"),this.terminErstellungsForm=o.group({bezeichnung:["",Fl.s.compose([Fl.s.maxLength(30),Fl.s.pattern("[a-zA-Z ]*"),Fl.s.required])],beiteiligtePersonen:["",Fl.s.compose([Fl.s.maxLength(30),Fl.s.pattern("[a-zA-Z ]*"),Fl.s.required])],zeitpunkt:["",Fl.s.required]}),this.terminBearbeitungsForm=o.group({bezeichnung:["",Fl.s.required],beiteiligtePersonen:["",Fl.s.required],zeitpunkt:["",Fl.s.required]}),"bearbeiten"===this.operation&&this.termin&&(console.log("hallo",this.termin),this.terminBearbeitungsForm.patchValue({bezeichnung:this.termin.bezeichnung}),this.terminBearbeitungsForm.patchValue({beiteiligtePersonen:this.termin.beteiligtePersonen}),this.terminBearbeitungsForm.patchValue({zeitpunkt:this.termin.zeitpunt}))}return l.prototype.submitTerminErstellungs=function(){var l=this;if(this.terminErstellungsForm.valid){var n={bezeichnung:this.terminErstellungsForm.get("bezeichnung").value,beteiligtePersonen:this.terminErstellungsForm.get("beiteiligtePersonen").value,zeitpunt:this.terminErstellungsForm.get("zeitpunkt").value};this.terminProvider.terminErstellen(n).subscribe(function(u){console.log(u),l.navCtrl.pop();l.toastCtrl.create({message:n.bezeichnung+" wurde erfolgreich erstellt",position:"bottom",cssClass:"erfolgreichToast",duration:2e3}).present()})}},l.prototype.submitTerminBearbeitung=function(){var l=this;if(this.terminBearbeitungsForm.valid){var n=this.terminBearbeitungsForm.get("bezeichnung").value,u=this.terminBearbeitungsForm.get("beiteiligtePersonen").value,o=this.terminBearbeitungsForm.get("zeitpunkt").value,a={id:this.termin.id,bezeichnung:n,beteiligtePersonen:u,zeitpunt:o};this.terminProvider.terminAendern(a).subscribe(function(n){console.log(n),l.navCtrl.pop();l.toastCtrl.create({message:a.bezeichnung+" wurde erfolgreich geändert",position:"bottom",cssClass:"erfolgreichToast",duration:2e3}).present()})}},l}(),Nl=function(){function l(l,n,u,o,a){var t=this;this.navCtrl=l,this.navParams=n,this.toastCtrl=u,this.alertCtrl=o,this.terminProvider=a,this.terminProvider.getTermine().subscribe(function(l){console.log("Das sind alle Termine: ",l),t.termine=l})}return l.prototype.ionViewDidEnter=function(){var l=this;this.terminProvider.getTermine().subscribe(function(n){console.log("Das sind alle Termine: ",n),l.termine=n})},l.prototype.goToTerminErstellung=function(){this.navCtrl.push(Rl,{operation:"erstellen"})},l.prototype.goToTerminBearbeitung=function(l){this.navCtrl.push(Rl,{termin:l,operation:"bearbeiten"})},l.prototype.showConfirmation=function(l){this.showDeleteConfirmation(l)},l.prototype.showDeleteConfirmation=function(l){var n=this;this.alertCtrl.create({title:"Termin wird gelöscht",message:"Wollen Sie den Termin wirklich löschen",buttons:[{text:"Ja",handler:function(){n.terminLoeschen(l)}},{text:"Nein",role:"cancel",handler:function(){}}]}).present()},l.prototype.terminLoeschen=function(l){var n=this,u=this.termine.find(function(n){return n.id===l});this.terminProvider.terminLoeschen(l).subscribe(function(l){n.termine=l;n.toastCtrl.create({message:u.bezeichnung+" wurde erfolgreich gelöscht",position:"top",cssClass:"erfolgreichToast",duration:2e3}).present()})},l}(),El=function(){function l(l,n,u){this.platform=l,this.statusBar=n,this.splashScreen=u,this.rootPage=Ol,this.initializeApp(),this.pages=[{title:"Home",component:Ol},{title:"Komponenten",component:Sl},{title:"Termin",component:Nl}]}return l.prototype.initializeApp=function(){var l=this;this.platform.ready().then(function(){l.statusBar.styleDefault(),l.splashScreen.hide()})},l.prototype.openPage=function(l){this.nav.setRoot(l.component)},l}(),Ul=function(){function l(l){this.toastCtrl=l}return l.prototype.handleError=function(l){var n=this.toastCtrl.create({message:"Fehler: "+l.error,position:"top",cssClass:"fehlerToast",duration:5e3});if(500!==l.status)throw l;n.present()},l}(),$l=function(){return function(){}}(),Xl=u(62),Wl=u(242),Hl=u(243),ql=u(244),Gl=u(245),Kl=u(246),Jl=u(247),Ql=u(248),ln=u(249),nn=u(250),un=u(35),on=u(21),an=u(19),tn=u(1),en=u(30),rn=u(32),cn=u(119),sn=u(36),_n=u(251),dn=u(48),bn=u(95),gn=u(3),pn=u(12),mn=u(10),hn=u(7),fn=u(6),Yn=u(20),Zn=u(4),Cn=u(198),vn=u(14),zn=u(22),jn=u(18),yn=u(13),kn=u(23),wn=u(9),Tn=u(11),Pn=u(38),xn=u(15),In=u(252),Ln=u(69),Dn=u(45),Mn=u(33),Fn=ul.X({encapsulation:2,styles:[],data:{}}),Bn=ul.V("ng-component",El,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"ng-component",[],null,null,null,a,Fn)),ul.Y(1,49152,null,0,El,[gn.a,tl.a,el.a],null,null)],null,null)},{},{},[]),Vn=u(24),Sn=u(29),On=u(25),An=u(70),Rn=u(73),Nn=u(28),En=u(134),Un=u(78),$n=ul.X({encapsulation:2,styles:[],data:{}}),Xn=ul.V("page-home",Ol,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-home",[],null,null,null,t,$n)),ul.Y(1,49152,null,0,Ol,[Tn.a,Un.a],null,null)],null,null)},{},{},[]),Wn=u(90),Hn=u(37),qn=u(57),Gn=u(8),Kn=ul.X({encapsulation:2,styles:[],data:{}}),Jn=ul.V("page-komponenten",Sl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-komponenten",[],null,null,null,e,Kn)),ul.Y(1,49152,null,0,Sl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),Qn=u(82),lu=ul.X({encapsulation:2,styles:[],data:{}}),nu=ul.V("page-actionsheet",cl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-actionsheet",[],null,null,null,r,lu)),ul.Y(1,49152,null,0,cl,[Tn.a,Qn.a,Gn.a,rl],null,null)],null,null)},{},{},[]),uu=ul.X({encapsulation:2,styles:[],data:{}}),ou=ul.V("page-alert",sl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-alert",[],null,null,null,c,uu)),ul.Y(1,49152,null,0,sl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),au=u(85),tu=ul.X({encapsulation:2,styles:[],data:{}}),eu=ul.V("page-list",dl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-list",[],null,null,null,_,tu)),ul.Y(1,49152,null,0,dl,[Tn.a,Gn.a,_l,Un.a],null,null)],null,null)},{},{},[]),iu=u(113),ru=ul.X({encapsulation:2,styles:[],data:{}}),cu=ul.V("page-badge",pl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-badge",[],null,null,null,b,ru)),ul.Y(1,49152,null,0,pl,[Tn.a,Gn.a,gl],null,null)],null,null)},{},{},[]),su=ul.X({encapsulation:2,styles:[],data:{}}),_u=ul.V("page-app",ml,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-app",[],null,null,null,g,su)),ul.Y(1,49152,null,0,ml,[Tn.a,Gn.a,fn.a],null,null)],null,null)},{},{},[]),du=ul.X({encapsulation:2,styles:[],data:{}}),bu=ul.V("page-avatar",hl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-avatar",[],null,null,null,m,du)),ul.Y(1,49152,null,0,hl,[Tn.a,Gn.a,gl],null,null)],null,null)},{},{},[]),gu=ul.X({encapsulation:2,styles:[],data:{}}),pu=ul.V("page-button",fl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-button",[],null,null,null,h,gu)),ul.Y(1,49152,null,0,fl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),mu=u(55),hu=u(66),fu=u(114),Yu=u(65),Zu=ul.X({encapsulation:2,styles:[],data:{}}),Cu=ul.V("page-card",Yl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-card",[],null,null,null,C,Zu)),ul.Y(1,49152,null,0,Yl,[Tn.a,Gn.a,gl],null,null)],null,null)},{},{},[]),vu=u(253),zu=u(86),ju=u(39),yu=ul.X({encapsulation:2,styles:[],data:{}}),ku=ul.V("page-checkbox",Zl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-checkbox",[],null,null,null,j,yu)),ul.Y(1,49152,null,0,Zl,[Tn.a,Gn.a,gl],null,null)],null,null)},{},{},[]),wu=u(115),Tu=ul.X({encapsulation:2,styles:[],data:{}}),Pu=ul.V("page-chip",Cl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-chip",[],null,null,null,k,Tu)),ul.Y(1,49152,null,0,Cl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),xu=ul.X({encapsulation:2,styles:[],data:{}}),Iu=ul.V("page-col-and-config",vl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-col-and-config",[],null,null,null,w,xu)),ul.Y(1,49152,null,0,vl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),Lu=ul.X({encapsulation:2,styles:[],data:{}}),Du=ul.V("page-content",zl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-content",[],null,null,null,P,Lu)),ul.Y(1,49152,null,0,zl,[Tn.a,Gn.a,gl],null,null)],null,null)},{},{},[]),Mu=u(199),Fu=u(67),Bu=u(51),Vu=ul.X({encapsulation:2,styles:[],data:{}}),Su=ul.V("page-datetime",jl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-datetime",[],null,null,null,x,Vu)),ul.Y(1,49152,null,0,jl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),Ou=u(142),Au=u(58),Ru=u(74),Nu=ul.X({encapsulation:2,styles:[],data:{}}),Eu=ul.V("page-events",kl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-events",[],null,null,null,I,Nu)),ul.Y(1,49152,null,0,kl,[Tn.a,Gn.a,Ru.a],null,null)],null,null)},{},{},[]),Uu=ul.X({encapsulation:2,styles:[],data:{}}),$u=ul.V("page-events-sub",yl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-events-sub",[],null,null,null,L,Uu)),ul.Y(1,49152,null,0,yl,[Tn.a,Gn.a,Ru.a],null,null)],null,null)},{},{},[]),Xu=u(254),Wu=u(88),Hu=u(255),qu=u(56),Gu=u(89),Ku=ul.X({encapsulation:2,styles:[],data:{}}),Ju=ul.V("page-fab",wl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-fab",[],null,null,null,D,Ku)),ul.Y(1,49152,null,0,wl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),Qu=ul.X({encapsulation:2,styles:[],data:{}}),lo=ul.V("page-gestures",Tl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-gestures",[],null,null,null,M,Qu)),ul.Y(1,49152,null,0,Tl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),no=ul.X({encapsulation:2,styles:[],data:{}}),uo=ul.V("page-grid",Pl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-grid",[],null,null,null,F,no)),ul.Y(1,49152,null,0,Pl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),oo=ul.X({encapsulation:2,styles:[],data:{}}),ao=ul.V("page-haptic",xl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-haptic",[],null,null,null,B,oo)),ul.Y(1,49152,null,0,xl,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),to=u(130),eo=ul.X({encapsulation:2,styles:[],data:{}}),io=ul.V("page-hide-when",Il,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-hide-when",[],null,null,null,V,eo)),ul.Y(1,49152,null,0,Il,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),ro=ul.X({encapsulation:2,styles:[],data:{}}),co=ul.V("page-icon",Ll,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-icon",[],null,null,null,S,ro)),ul.Y(1,49152,null,0,Ll,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),so=u(256),_o=u(91),bo=ul.X({encapsulation:2,styles:[],data:{}}),go=ul.V("page-img",Dl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-img",[],null,null,null,A,bo)),ul.Y(1,49152,null,0,Dl,[Tn.a,Gn.a,gl],null,null)],null,null)},{},{},[]),po=ul.X({encapsulation:2,styles:[],data:{}}),mo=ul.V("page-infinite-scroll",Ml,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-infinite-scroll",[],null,null,null,R,po)),ul.Y(1,49152,null,0,Ml,[Tn.a,Gn.a],null,null)],null,null)},{},{},[]),ho=ul.X({encapsulation:2,styles:[],data:{}}),fo=ul.V("page-input",Vl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-input",[],null,null,null,$,ho)),ul.Y(1,49152,null,0,Vl,[Tn.a,Gn.a,Fl.d],null,null)],null,null)},{},{},[]),Yo=u(93),Zo=u(72),Co=u(84),vo=ul.X({encapsulation:2,styles:[],data:{}}),zo=ul.V("page-termin",Nl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-termin",[],null,null,null,q,vo)),ul.Y(1,49152,null,0,Nl,[Tn.a,Gn.a,Zo.a,Co.a,Al],null,null)],null,null)},{},{},[]),jo=ul.X({encapsulation:2,styles:[],data:{}}),yo=ul.V("page-termin-sub",Rl,function(l){return ul._22(0,[(l()(),ul.Z(0,0,null,null,1,"page-termin-sub",[],null,null,null,ll,jo)),ul.Y(1,49152,null,0,Rl,[Tn.a,Gn.a,Zo.a,Fl.d,Al],null,null)],null,null)},{},{},[]),ko=u(141),wo=u(47),To=u(118),Po=u(191),xo=u(64),Io=u(59),Lo=u(121),Do=u(126),Mo=u(138),Fo=u(139),Bo=u(120),Vo=u(140),So=ul.W($l,[Xl.b],function(l){return ul._10([ul._11(512,ul.i,ul.S,[[8,[Wl.a,Hl.a,ql.a,Gl.a,Kl.a,Jl.a,Ql.a,ln.a,nn.a,Bn,Xn,Jn,nu,ou,eu,cu,_u,bu,pu,Cu,ku,Pu,Iu,Du,Su,Eu,$u,Ju,lo,uo,ao,io,co,go,mo,fo,zo,yo]],[3,ul.i],ul.s]),ul._11(5120,ul.r,ul._9,[[3,ul.r]]),ul._11(4608,xn.m,xn.l,[ul.r,[2,xn.u]]),ul._11(5120,ul.b,ul._0,[]),ul._11(5120,ul.p,ul._6,[]),ul._11(5120,ul.q,ul._7,[]),ul._11(4608,nl.c,nl.q,[xn.c]),ul._11(6144,ul.D,null,[nl.c]),ul._11(4608,nl.f,ko.a,[]),ul._11(5120,nl.d,function(l,n,u,o,a){return[new nl.k(l,n),new nl.o(u),new nl.n(o,a)]},[xn.c,ul.u,xn.c,xn.c,nl.f]),ul._11(4608,nl.e,nl.e,[nl.d,ul.u]),ul._11(135680,nl.m,nl.m,[xn.c]),ul._11(4608,nl.l,nl.l,[nl.e,nl.m]),ul._11(6144,ul.B,null,[nl.l]),ul._11(6144,nl.p,null,[nl.m]),ul._11(4608,ul.G,ul.G,[ul.u]),ul._11(4608,nl.h,nl.h,[xn.c]),ul._11(4608,nl.i,nl.i,[xn.c]),ul._11(4608,Fl.v,Fl.v,[]),ul._11(4608,Fl.d,Fl.d,[]),ul._11(4608,al.h,al.m,[xn.c,ul.w,al.k]),ul._11(4608,al.n,al.n,[al.h,al.l]),ul._11(5120,al.a,function(l){return[l]},[al.n]),ul._11(4608,al.j,al.j,[]),ul._11(6144,al.i,null,[al.j]),ul._11(4608,al.g,al.g,[al.i]),ul._11(6144,al.b,null,[al.g]),ul._11(5120,al.f,al.o,[al.b,[2,al.a]]),ul._11(4608,al.c,al.c,[al.f]),ul._11(4608,Qn.a,Qn.a,[fn.a,tn.a]),ul._11(4608,Co.a,Co.a,[fn.a,tn.a]),ul._11(4608,Ru.a,Ru.a,[]),ul._11(4608,an.a,an.a,[]),ul._11(4608,wo.a,wo.a,[gn.a]),ul._11(4608,pn.a,pn.a,[tn.a,gn.a,ul.u,hn.a]),ul._11(4608,To.a,To.a,[fn.a,tn.a]),ul._11(5120,xn.h,Po.b,[xn.s,[2,xn.a],tn.a]),ul._11(4608,xn.g,xn.g,[xn.h]),ul._11(5120,xo.b,xo.d,[fn.a,xo.a]),ul._11(5120,Mn.a,Mn.b,[fn.a,xo.b,xn.g,Io.b,ul.i]),ul._11(4608,Lo.a,Lo.a,[fn.a,tn.a,Mn.a]),ul._11(4608,Bu.a,Bu.a,[fn.a,tn.a]),ul._11(4608,Do.a,Do.a,[fn.a,tn.a,Mn.a]),ul._11(4608,Mo.a,Mo.a,[tn.a,gn.a,hn.a,fn.a,mn.l]),ul._11(4608,Dn.a,Dn.a,[gn.a,tn.a]),ul._11(5120,Un.a,Un.c,[Un.b]),ul._11(4608,tl.a,tl.a,[]),ul._11(4608,el.a,el.a,[]),ul._11(4608,_l,_l,[al.c]),ul._11(4608,rl,rl,[al.c]),ul._11(4608,gl,gl,[al.c]),ul._11(4608,Al,Al,[al.c]),ul._11(512,xn.b,xn.b,[]),ul._11(256,tn.b,{},[]),ul._11(1024,Fo.a,Fo.b,[]),ul._11(1024,gn.a,gn.b,[nl.b,Fo.a,ul.u]),ul._11(1024,tn.a,tn.c,[tn.b,gn.a]),ul._11(512,sn.a,sn.a,[]),ul._11(512,fn.a,fn.a,[tn.a,gn.a,[2,sn.a]]),ul._11(512,Zo.a,Zo.a,[fn.a,tn.a]),ul._11(512,ul.k,Ul,[Zo.a]),ul._11(512,hn.a,hn.a,[gn.a]),ul._11(512,mn.l,mn.l,[fn.a]),ul._11(256,xo.a,{links:[]},[]),ul._11(512,ul.h,ul.h,[]),ul._11(512,Bo.a,Bo.a,[ul.h]),ul._11(1024,Io.b,Io.c,[Bo.a,ul.o]),ul._11(1024,ul.c,function(l,n,u,o,a,t,e,i,r,c,s,_,d){return[nl.s(l),Vo.a(n),Ru.b(u,o),Mo.b(a,t,e,i,r),Io.d(c,s,_,d)]},[[2,ul.t],tn.a,gn.a,hn.a,tn.a,gn.a,hn.a,fn.a,mn.l,tn.a,xo.a,Io.b,ul.u]),ul._11(512,ul.d,ul.d,[[2,ul.c]]),ul._11(131584,ul.f,ul.f,[ul.u,ul.T,ul.o,ul.k,ul.i,ul.d]),ul._11(512,ul.e,ul.e,[ul.f]),ul._11(512,nl.a,nl.a,[[3,nl.a]]),ul._11(512,Fl.t,Fl.t,[]),ul._11(512,Fl.i,Fl.i,[]),ul._11(512,Fl.q,Fl.q,[]),ul._11(512,Po.a,Po.a,[]),ul._11(512,ol.a,ol.a,[]),ul._11(512,al.e,al.e,[]),ul._11(512,al.d,al.d,[]),ul._11(512,$l,$l,[]),ul._11(256,al.k,"XSRF-TOKEN",[]),ul._11(256,al.l,"X-XSRF-TOKEN",[]),ul._11(256,Xl.a,El,[]),ul._11(256,xn.a,"/",[]),ul._11(256,Un.b,null,[])])});Object(ul.M)(),Object(nl.j)().bootstrapModuleFactory(So)}},[200]);
>>>>>>> Stashed changes
