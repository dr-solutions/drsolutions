webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpConstants_httpConstants__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
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
    }
    PersonProvider.prototype.getPersonen = function () {
        var personSelect = [];
        var person1 = { value: 2, label: 'Jakob Kraushofer', selected: false };
        var person2 = { value: 1, label: 'Rene Dolar', selected: false };
        var person3 = { value: 3, label: 'Lisa Perina', selected: false };
        personSelect.push(person1);
        personSelect.push(person2);
        personSelect.push(person3);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(personSelect);
        // return this.http.get(this.API + 'getAllPersonen')
        //   .map(this._mapDataToPersonenSelect);
    };
    PersonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PersonProvider);
    return PersonProvider;
}());

//# sourceMappingURL=person.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		163
	],
	"../pages/ionic-my/ionic-my.module": [
		208
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
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(164);
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__komponenten_komponenten__ = __webpack_require__(83);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__ = __webpack_require__(166);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_random_int_random_int__["a" /* RandomIntProvider */]])
    ], ActionsheetPage);
    return ActionsheetPage;
}());

//# sourceMappingURL=actionsheet.js.map

/***/ }),

/***/ 166:
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

/***/ 167:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_benutzer_benutzer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_sliding_item_sliding__ = __webpack_require__(84);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenutzerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(172);
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

/***/ 173:
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
            selector: 'page-badge',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\badge\badge.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Badge Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item *ngFor="let land of laender">\n\n    <img src="{{ land.flag }}" item-start/>\n\n    {{ land .name }} \n\n    <ion-row>\n\n      Einwohnerzahl:\n\n    </ion-row>\n\n    <ion-badge item-end color="btnColor">\n\n      {{ land.population | number }}\n\n    </ion-badge>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\badge\badge.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], BadgePage);
    return BadgePage;
}());

//# sourceMappingURL=badge.js.map

/***/ }),

/***/ 174:
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
            selector: 'page-app',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\app\app.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>App Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  Dies ist ein Beispiel für die verschiedenen Ionic Methoden. Source Code + Konsole ansehen.\n\n\n\n  <span>Reihenfolge</span>:\n\n\n\n  <ion-list>\n\n    <ion-item>1. ionViewCanEnter\n\n      <ion-item> return true oder false</ion-item>\n\n    </ion-item>\n\n    <ion-item>2. ionViewDidLoad</ion-item>\n\n    <ion-item>3. ionViewWillEnter</ion-item>\n\n    <ion-item>4. ionViewDidEnter</ion-item>\n\n    <ion-item>5. ionViewWillLeave</ion-item>\n\n    <ion-item>6. ionViewDidLeave</ion-item>\n\n    <ion-item>7. ionViewWillUnload</ion-item>\n\n    <ion-item>8. ionViewCanLeave\n\n      <ion-item> return true oder false</ion-item>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\app\app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
    ], AppPage);
    return AppPage;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 175:
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
            selector: 'page-avatar',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\avatar\avatar.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Avatar Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let land of laender">\n\n      <ion-avatar item-start>\n\n        <img src="{{ land.flag }}">\n\n      </ion-avatar>\n\n      {{ land.alpha3Code }}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\avatar\avatar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], AvatarPage);
    return AvatarPage;
}());

//# sourceMappingURL=avatar.js.map

/***/ }),

/***/ 176:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ButtonPage);
    return ButtonPage;
}());

//# sourceMappingURL=button.js.map

/***/ }),

/***/ 177:
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
            selector: 'page-card',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\card\card.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Card Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card *ngFor="let land of laender" class="myCard">\n\n\n\n    <ion-card-header class="cardHeader">\n\n      {{ land.name }}\n\n    </ion-card-header>\n\n\n\n    <ion-card-title>\n\n      Hauptstadt: {{ land.capital }}\n\n    </ion-card-title>\n\n      \n\n    <ion-card-content class="cardContent">\n\n      <img src="{{ land.flag }}">\n\n      <p class="cardText">Einwohnerzahl:</p>\n\n      <p class="cardText">{{ land.population }}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col *ngFor="let callingCode of land.callingCodes">\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="call"></ion-icon>\n\n          <div>+{{ callingCode }}</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col *ngFor="let domain of land.topLevelDomain">\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="globe"></ion-icon>\n\n          <div>{{ domain }}</div>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n      \n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\card\card.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 178:
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
            selector: 'page-checkbox',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\checkbox\checkbox.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Checkbox Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-label>Grenzländer von Österreich</ion-label>\n\n    <ion-label>Für mehr Infos klicken</ion-label>\n\n    <ion-item *ngFor="let border of borders">\n\n      <ion-checkbox color="primary" \n\n                    (ionChange)="checkboxChanged($event, border)"\n\n                    (click)="checkboxClicked(border)">\n\n      </ion-checkbox>\n\n      <ion-label>{{ getLandNameByAlpha3Code(border) }}</ion-label>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item *ngFor="let border of checkboxArray">\n\n      <ion-row>Name: {{ getLandByAlpha3Code(border).name }}</ion-row>\n\n      <ion-row>Nativer Name: {{ getLandByAlpha3Code(border).nativeName }}</ion-row>\n\n      <ion-row>Region: {{ getLandByAlpha3Code(border).region }}</ion-row>\n\n      <ion-row>Subregion: {{ getLandByAlpha3Code(border).subregion }}</ion-row>\n\n      <ion-row>Hauptstadt: {{ getLandByAlpha3Code(border).capital }}</ion-row>\n\n    </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\checkbox\checkbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], CheckboxPage);
    return CheckboxPage;
}());

//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ 179:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ChipPage);
    return ChipPage;
}());

//# sourceMappingURL=chip.js.map

/***/ }),

/***/ 180:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ColAndConfigPage);
    return ColAndConfigPage;
}());

//# sourceMappingURL=col-and-config.js.map

/***/ }),

/***/ 181:
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
            selector: 'page-content',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\content\content.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Content Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor" (click)="toBottom()">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Zum Schluss\n\n    </button>\n\n  </ion-row>\n\n\n\n  <ion-list *ngFor="let land of laender">\n\n    <ion-item>{{ land.name }}</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <button ion-button icon-left color="btnColor" (click)="toTop()">\n\n      <ion-icon name="ice-cream"></ion-icon>\n\n      Zum Start\n\n    </button>\n\n  </ion-row>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\content\content.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_laender_laender__["a" /* LaenderProvider */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ 182:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], DatetimePage);
    return DatetimePage;
}());

//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_sub_events_sub__ = __webpack_require__(184);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 184:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], EventsSubPage);
    return EventsSubPage;
}());

//# sourceMappingURL=events-sub.js.map

/***/ }),

/***/ 185:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], FabPage);
    return FabPage;
}());

//# sourceMappingURL=fab.js.map

/***/ }),

/***/ 186:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], GesturesPage);
    return GesturesPage;
}());

//# sourceMappingURL=gestures.js.map

/***/ }),

/***/ 187:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], GridPage);
    return GridPage;
}());

//# sourceMappingURL=grid.js.map

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
            selector: 'page-haptic',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\haptic\haptic.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Haptic Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <a href="https://ionicframework.com/docs/api/tap-click/Haptic/">Haptic</a>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\haptic\haptic.html"*/,
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
            selector: 'page-hide-when',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\hide-when\hide-when.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>HideWhen Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div hideWhen="android">\n\n    I am hidden on Android!\n\n  </div>\n\n       \n\n  <div hideWhen="ios">\n\n    I am hidden on iOS!\n\n  </div>\n\n       \n\n  <div hideWhen="android,ios">\n\n    I am hidden on Android and iOS!\n\n  </div>\n\n       \n\n  <div hideWhen="portrait">\n\n    I am hidden on Portrait!\n\n  </div>\n\n       \n\n  <div hideWhen="landscape">\n\n    I am hidden on Landscape!\n\n  </div>\n\n\n\n  <ion-icon name="logo-apple" hideWhen="android, windows">\n\n    Aktuelle Platform\n\n  </ion-icon>\n\n\n\n  <ion-icon name="logo-android" hideWhen="ios, windows">\n\n    Aktuelle Platform\n\n  </ion-icon>\n\n\n\n  <ion-icon name="logo-windows" hideWhen="android, ios">\n\n    Aktuelle Platform\n\n  </ion-icon>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\hide-when\hide-when.html"*/,
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
            selector: 'page-icon',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\icon\icon.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Icon Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-icon name="ice-cream" \n\n            class="myIconSizedUp"\n\n            (click)="changeColor()" \n\n            [color]="myColor"> \n\n  </ion-icon>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\icon\icon.html"*/,
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
            selector: 'page-img',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\img\img.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Img Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-item *ngFor="let flagge of flaggen" color="nigger">\n\n    <ion-img  src="{{ flagge }}"\n\n              height="80"\n\n              width="160"\n\n              cache="true">\n\n    </ion-img>\n\n    <!-- fter an image has been successfully downloaded, it can be cached in-memory. \n\n    This is useful for VirtualScroll by allowing image responses to be cached, \n\n    and not rendered, until after scrolling has completed, which allows for smoother scrolling. -->\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\img\img.html"*/,
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
            selector: 'page-infinite-scroll',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\infinite-scroll\infinite-scroll.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Infinite Scroll Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <p>Finde ich nicht recht schön</p>\n\n\n\n  <a href="https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/">Infinite Scroll</a>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\infinite-scroll\infinite-scroll.html"*/,
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
            selector: 'page-item',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item\item.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>Buttons und Links die klickbar sind sollten einen Pfeil haben</ion-row>\n\n\n\n  <ion-row>Item wird meistens in Liste verwendet</ion-row>\n\n\n\n  <ion-item>\n\n    Item\n\n  </ion-item>\n\n\n\n  <ion-list-header>\n\n    List Header\n\n  </ion-list-header>\n\n\n\n  <ion-item-divider>\n\n    Item Divider\n\n  </ion-item-divider>\n\n\n\n  <button ion-item (click)="buttonClick()">\n\n    Button Item\n\n  </button>\n\n\n\n  <a ion-item href="https://www.ionicframework.com">\n\n    Link Item\n\n  </a>\n\n\n\n  <ion-item detail-push>\n\n    Item with Detail Arrow\n\n  </ion-item>\n\n\n\n  <button ion-item detail-none (click)="buttonClick()">\n\n    Button Item with no Detail Arrow\n\n  </button>\n\n\n\n  <ion-item no-lines>\n\n    Item with no border\n\n  </ion-item>\n\n\n\n  <ion-item text-wrap>\n\n    Multiline text that should wrap when it is too long to fit on one line in the item.\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>\n\n      Item Label\n\n    </ion-label>\n\n    <div item-content>\n\n      Item Content next to the label\n\n    </div>\n\n  </ion-item>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item\item.html"*/,
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
            selector: 'page-item-recorder',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-recorder\item-recorder.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Recorder Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Header</ion-list-header>\n\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">\n\n      <ion-item *ngFor="let item of items">{{ item.name }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Header 1</ion-list-header>\n\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems2($event)">\n\n      <ion-item *ngFor="let item of items1">{{ item.name }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-list-header>Header 2</ion-list-header>\n\n    <ion-item-group reorder="true" (ionItemReorder)="$event.applyTo(items2)">\n\n      <ion-item *ngFor="let item of items2">{{ item.name }}</ion-item>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-recorder\item-recorder.html"*/,
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
            selector: 'page-keyboard',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\keyboard\keyboard.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Keyboard Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-input type="text" placeholder="nur zum öffnen des Keyboards"></ion-input>\n\n\n\n  <button ion-button outline (click)="closeKeyboard()">Keyboard schließen</button>\n\n\n\n  <ion-row>\n\n    {{ nachricht }}\n\n  </ion-row>\n\n  <ion-row>\n\n    {{ nachricht1 }}\n\n  </ion-row>\n\n  <ion-row>\n\n    {{ nachricht2 }}\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\keyboard\keyboard.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_input__ = __webpack_require__(85);
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
            selector: 'page-loading',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\loading\loading.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Loading Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="backendCall()">Sachen machen</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner1()">Ios</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner2()">Ios-small</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner3()">bubbles</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner4()">circles</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner5()">crescent</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button outline btnColor (click)="spinner6()">Dots</button>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\loading\loading.html"*/,
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
            selector: 'page-modal',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\modal\modal.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Modal Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" outline (click)="openModal()">Modal öffnen</button>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <button ion-button color="btnColor" outline (click)="openModalWithParams()">Modal mit Params öffnen</button>\n\n  </ion-row>\n\n  <ion-row>Hier werden die Daten: id, vorname, nachname an den Modal übergeben</ion-row>\n\n  <ion-row>Id: {{data.id}}</ion-row>\n\n  <ion-row>\n\n    <ion-label>Vorname: {{data.vorname}}</ion-label>\n\n  </ion-row>\n\n  <ion-row>Nachname: {{data.nachname}}</ion-row>\n\n\n\n  <ion-row>Der Modal ändert den Vornamen beim Speichern Button</ion-row>\n\n\n\n\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Historie der Vornamen\n\n    </ion-list-header>\n\n    <ion-item *ngFor="let vornamenHistorie of historie">{{ vornamenHistorie }}</ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\modal\modal.html"*/,
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
            selector: 'page-modal-example1',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\modal-example1\modal-example1.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Modal 1</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="closeModal()">schließen</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  Hallo i bims 1 Modal\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\modal-example1\modal-example1.html"*/,
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
            selector: 'page-modal-example2',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\modal-example2\modal-example2.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Modal 2</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="closeModal()">abbrechen</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-input type="text" placeholder="Vornamen ändern" [(ngModel)]="vorname"></ion-input>\n\n\n\n  <button ion-button (click)="vornameAendern()">Vorname ändern</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\modal-example2\modal-example2.html"*/,
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
            selector: 'page-nav',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\nav\nav.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Nav Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <a href="https://ionicframework.com/docs/api/components/nav/Nav/">Nav</a>\n\n  </ion-row>\n\n  <br>\n\n  <br>\n\n  <ion-row>\n\n    <a href="https://ionicframework.com/docs/api/components/toolbar/Navbar/">Navbar</a>\n\n  </ion-row>\n\n  <br>\n\n  <br>\n\n  <ion-row>\n\n    <a href="https://ionicframework.com/docs/api/navigation/NavController/">NavController</a>\n\n  </ion-row>\n\n  <br>\n\n  <br>\n\n  <ion-row>\n\n    <a href="https://ionicframework.com/docs/api/navigation/NavParams/">NavParams</a>\n\n  </ion-row>\n\n  <br>\n\n  <br>\n\n  <ion-row>\n\n    <a href="https://ionicframework.com/docs/api/components/nav/NavPop/">NavPop</a>\n\n  </ion-row>\n\n  <br>\n\n  <br>\n\n  <ion-row>\n\n    <a href="https://ionicframework.com/docs/api/components/nav/NavPush/">NavPush</a>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\nav\nav.html"*/,
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
            selector: 'page-select',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\select\select.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>select</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <a href="https://ionicframework.com/docs/api/components/option/Option/">Option nicht vergessen</a>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\select\select.html"*/,
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
            selector: 'page-note',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\note\note.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Note Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-note item-start>\n\n        Note links\n\n      </ion-note>\n\n      Mein Item\n\n      <ion-note item-end>\n\n        Note rechts\n\n      </ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-note>Normales Note ohne Liste</ion-note>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\note\note.html"*/,
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
            selector: 'page-platform',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\platform\platform.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Platform Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-5>dir():</ion-col>\n\n    <ion-col col-7>{{ dir }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>width():</ion-col>\n\n    <ion-col col-7>{{ width }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>height():</ion-col>\n\n    <ion-col col-7>{{ height }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'android\'):</ion-col>\n\n    <ion-col col-7>{{ android }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'ios\'):</ion-col>\n\n    <ion-col col-7>{{ ios }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'ipad\'):</ion-col>\n\n    <ion-col col-7>{{ ipad }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'iphone\'):</ion-col>\n\n    <ion-col col-7>{{ iphone }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'mobile\'):</ion-col>\n\n    <ion-col col-7>{{ mobile }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'mobileweb\'):</ion-col>\n\n    <ion-col col-7>{{ mobileweb }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'phablet\'):</ion-col>\n\n    <ion-col col-7>{{ phablet }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'tablet\'):</ion-col>\n\n    <ion-col col-7>{{ tablet }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'windows\'):</ion-col>\n\n    <ion-col col-7>{{ windows }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'core\'):</ion-col>\n\n    <ion-col col-7>{{ core }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>is(\'cordova\'):</ion-col>\n\n    <ion-col col-7>{{ cordova }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>isLandscape():</ion-col>\n\n    <ion-col col-7>{{ landscape }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>isPortrait():</ion-col>\n\n    <ion-col col-7>{{ portrait }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>lang():</ion-col>\n\n    <ion-col col-7>{{ lang }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>platforms():</ion-col>\n\n    <ion-col col-7>returns all active platforms z.B.: ios, iphone and mobile</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>ready():</ion-col>\n\n    <ion-col col-7>\n\n      <a href="https://ionicframework.com/docs/api/platform/Platform/#ready">siehe Ready</a>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>registerBackButtonAction(fn, priority):</ion-col>\n\n    <ion-col col-7>Funktion (fn) wird ausgeführt, wenn der \'Hardware\' Back Button gedrückt wird (nur android und windows). Default Priority\n\n      0. Nur die höchste wird ausgeführt</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>registerBackButtonAction(fn, priority):</ion-col>\n\n    <ion-col col-7>Funktion (fn) wird ausgeführt, wenn der \'Hardware\' Back Button gedrückt wird (nur android und windows). Default Priority\n\n      0. Nur die höchste wird ausgeführt</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>setDir(dir, updateDocument):</ion-col>\n\n    <ion-col col-7>rtl oder ltr und true oder false</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>setLang(language, updateDocument):</ion-col>\n\n    <ion-col col-7>z.B.: de oder en-GB und true oder false</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>url():</ion-col>\n\n    <ion-col col-7>{{ url }}</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-5>versions():</ion-col>\n\n    <ion-col col-7>siehe console</ion-col>\n\n  </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\platform\platform.html"*/,
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
            selector: 'page-platform-config-token',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\platform-config-token\platform-config-token.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>PlatformConfigToken Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>Keine Ahnung was das sein soll ...</ion-row>\n\n\n\n  <ion-row>\n\n    <a href="https://ionicframework.com/docs/api/platform/PlatformConfigToken/">PlatformConfigToken</a>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\platform-config-token\platform-config-token.html"*/,
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
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\popover\popover.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Popover Beispiel</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-list >\n\n    <ion-item [color]="myColor">Item 1</ion-item>\n\n    <ion-item>Item 2</ion-item>\n\n    <ion-item [color]="myColor">Item 3</ion-item>\n\n    <ion-item>Item 4</ion-item>\n\n  </ion-list>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* PopoverController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]) === "function" && _d || Object])
    ], PopoverPage);
    return PopoverPage;
    var _a, _b, _c, _d;
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
            selector: 'popover-example',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\components\popover-example\popover-example.html"*/'<ion-item-group>\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-row (click)="save(\'secondary\')" align-self-center>\n\n    <ion-col offset-2 col-6>\n\n      <ion-label>Secondary</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <div class="secondaryCircle"></div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-row (click)="save(\'danger\')">\n\n    <ion-col offset-2 col-6>\n\n      <ion-label>Danger</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <div class="dangerCircle"></div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-row (click)="save(\'nigger\')">\n\n    <ion-col offset-2 col-6>\n\n      <ion-label>Nigger</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <div class="niggerCircle"></div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-row (click)="save(\'primary\')">\n\n    <ion-col offset-2 col-6>\n\n      <ion-label>Primary</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <div class="primaryCircle"></div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-row (click)="close()">\n\n    <ion-col offset-2 col-6>\n\n      <ion-label>Abbrechen</ion-label>\n\n    </ion-col>\n\n    <ion-col col-2>\n\n      <ion-icon class="largeClose_icon" name="close"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-item-group>\n\n\n\n<!-- nicht so fancy :) -->\n\n<!-- <ion-list>\n\n  <ion-list-header>Farben ändern</ion-list-header>\n\n  <button ion-item (click)="save(\'secondary\')">Secondary</button>\n\n  <button ion-item (click)="save(\'danger\')">Danger</button>\n\n  <button ion-item (click)="save(\'nigger\')">Nigger</button>\n\n  <button ion-item (click)="save(\'primary\')">Primary</button>\n\n  <button ion-item (click)="close()">Abbrechen</button>\n\n</ion-list> -->'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\components\popover-example\popover-example.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]) === "function" && _b || Object])
    ], PopoverExampleComponent);
    return PopoverExampleComponent;
    var _a, _b;
}());

//# sourceMappingURL=popover-example.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicMyPageModule", function() { return IonicMyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_my__ = __webpack_require__(316);
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

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_termin_termin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__termin_erstellung_termin_erstellung__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__termin_bearbeitung_termin_bearbeitung__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_person_person__ = __webpack_require__(108);
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
        this.personProvider.getPersonen().subscribe(function (personen) {
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
            selector: 'page-termin',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin\termin.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Termine</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-row>\n\n    <ion-col offset-3>\n\n      <button ion-button icon-right color="primary" (click)="goToTerminErstellung()">\n\n        Termin anlegen\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor="let termin of termine">\n\n      <ion-list-header>\n\n        <ion-row>\n\n          <ion-col col-1>\n\n            <ion-icon name="calendar"></ion-icon>\n\n          </ion-col>\n\n          <ion-col col-11>\n\n            {{ termin.id }} {{ termin.bezeichnung }}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-list-header>\n\n      <ion-row>\n\n        <ion-list>\n\n          <ion-list-header>\n\n            Beteiligte Personen\n\n          </ion-list-header>\n\n          <ion-item *ngFor="let personen of termin.beteiligtePersonen">{{personen.label}}</ion-item>\n\n        </ion-list>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-item>Zeitpunkt: {{ termin.zeitpunkt | date:\'dd.MM.yyyy HH:mm\'}}</ion-item>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button icon-right color="primary" (click)="goToTerminBearbeitung(termin)" mini>\n\n            Bearbeiten\n\n            <ion-icon name="create"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button icon-right color="primary" (click)="showConfirmation(termin.id)" mini>\n\n            Löschen\n\n            <ion-icon name="trash"></ion-icon>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin\termin.html"*/,
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

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpConstants; });
var HttpConstants = (function () {
    function HttpConstants() {
    }
    HttpConstants.LOCALHOST_API = 'http://localhost:8080/dr-solutions/rest/terminService/';
    HttpConstants.RENES_IP_API = 'http://192.168.1.9:8080/dr-solutions/rest/terminService/';
    return HttpConstants;
}());

//# sourceMappingURL=httpConstants.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminErstellungPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_termin_termin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_person_person__ = __webpack_require__(108);
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
        this.personProvider.getPersonen().subscribe(function (personen) {
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
            selector: 'page-termin-erstellung',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin-erstellung\termin-erstellung.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Termin Erstellung</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Termin erstellen\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="submitTerminErstellungs()" [formGroup]="terminErstellungsForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="bezeichnung" floating>Bezeichnung</ion-label>\n\n            <ion-input formControlName="bezeichnung" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="beiteiligtePersonen" floating>Beteiligte</ion-label>\n\n            <ion-select formControlName="beiteiligtePersonen" multiple="true">\n\n              <ion-option *ngFor="let beteiligtePerson of personen" \n\n                          [value]="beteiligtePerson.value" \n\n                          [selected]="beteiligtePerson.selected">\n\n                {{ beteiligtePerson.label }}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-datetime displayFormat="DD.MM.YYYY" formControlName="zeitpunkt" placeholder="Zeitpunkt auswählen" min="2017" max="2020"\n\n              cancelText="Abbrechen" doneText="Zeitpunkt übernehmen"></ion-datetime>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="!terminErstellungsForm.valid">\n\n          Termin erstellen\n\n        </button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin-erstellung\termin-erstellung.html"*/,
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

/***/ 255:
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
        var _this = this;
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
        if (this.termin && this.termin.beteiligtePersonen) {
            this.termin.beteiligtePersonen.forEach(function (person) {
                var personIsAlreadySelected = _this.personen
                    .find(function (beteiligtePerson) { return beteiligtePerson.value === person.value; });
                var index = _this.personen.indexOf(personIsAlreadySelected);
                _this.personen[index].selected = true;
            });
            if (this.personen) {
                this.terminBearbeitungsForm.patchValue({ 'bezeichnung': this.termin.bezeichnung });
                this.terminBearbeitungsForm.patchValue({ 'beiteiligtePersonen': this.personen });
                this.terminBearbeitungsForm.patchValue({ 'zeitpunkt': this.termin.zeitpunkt });
            }
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
    TerminBearbeitungPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-termin-bearbeitung',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin-bearbeitung\termin-bearbeitung.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Termin Bearbeitung</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Termin bearbeiten\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="submitTerminBearbeitung()" [formGroup]="terminBearbeitungsForm">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="bezeichnung" floating>Bezeichnung</ion-label>\n\n            <ion-input formControlName="bezeichnung" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="beiteiligtePersonen" floating>Beteiligte</ion-label>\n\n            <ion-select formControlName="beiteiligtePersonen" multiple="true">\n\n              <ion-option *ngFor="let beteiligtePerson of personen" \n\n                          [value]="beteiligtePerson.value" \n\n                          [selected]="beteiligtePerson.selected">\n\n                {{ beteiligtePerson.label }}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-datetime displayFormat="DD.MM.YYYY" formControlName="zeitpunkt" placeholder="Zeitpunkt auswählen" min="2017" max="2020"\n\n              cancelText="Abbrechen" doneText="Zeitpunkt übernehmen"></ion-datetime>\n\n          </ion-item>\n\n        </ion-list>\n\n        <button ion-button block type="submit" [disabled]="!terminBearbeitungsForm.valid">\n\n          Termin bearbeiten\n\n        </button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\termin-bearbeitung\termin-bearbeitung.html"*/,
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

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(279);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_komponenten_komponenten__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_actionsheet_actionsheet__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_alert_alert__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_benutzer_benutzer__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_random_int_random_int__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_laender_laender__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_badge_badge__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_app_app__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_avatar_avatar__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_button_button__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_card_card__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_checkbox_checkbox__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chip_chip__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_col_and_config_col_and_config__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_content_content__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_datetime_datetime__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_events_events__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_events_sub_events_sub__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_fab_fab__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_gestures_gestures__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_grid_grid__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_haptic_haptic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_hide_when_hide_when__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_icon_icon__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_img_img__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_infinite_scroll_infinite_scroll__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_input_input__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_termin_termin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_termin_erstellung_termin_erstellung__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_handler_myErrorHandler__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_ionic_my_ionic_my_module__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_home_home_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_item_item__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_item_recorder_item_recorder__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_item_sliding_item_sliding__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_keyboard_keyboard__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_label_label__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_loading_loading__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_person_person__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_interceptor_myHttpInterceptor__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_termin_bearbeitung_termin_bearbeitung__ = __webpack_require__(255);
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
                __WEBPACK_IMPORTED_MODULE_59__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__["a" /* TerminPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termin_erstellung_termin_erstellung__["a" /* TerminErstellungPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_termin_bearbeitung_termin_bearbeitung__["a" /* TerminBearbeitungPage */]
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
                __WEBPACK_IMPORTED_MODULE_59__pages_select_select__["a" /* SelectPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_termin_termin__["a" /* TerminPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_termin_erstellung_termin_erstellung__["a" /* TerminErstellungPage */],
                __WEBPACK_IMPORTED_MODULE_54__pages_termin_bearbeitung_termin_bearbeitung__["a" /* TerminBearbeitungPage */]
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

/***/ 315:
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

/***/ 316:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], IonicMyPage);
    return IonicMyPage;
}());

//# sourceMappingURL=ionic-my.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_komponenten_komponenten__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_termin_termin__ = __webpack_require__(252);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 344:
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return defaultTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyHttpInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_timeout__ = __webpack_require__(346);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpConstants_httpConstants__ = __webpack_require__(253);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], TerminProvider);
    return TerminProvider;
}());

//# sourceMappingURL=termin.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KomponentenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actionsheet_actionsheet__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__badge_badge__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__avatar_avatar__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__button_button__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__card_card__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__checkbox_checkbox__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chip_chip__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__col_and_config_col_and_config__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__content_content__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__datetime_datetime__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__events_events__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__fab_fab__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gestures_gestures__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__grid_grid__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__haptic_haptic__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__hide_when_hide_when__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__icon_icon__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__img_img__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__infinite_scroll_infinite_scroll__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__input_input__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__item_item__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__item_sliding_item_sliding__ = __webpack_require__(84);
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
            selector: 'page-komponenten',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\komponenten\komponenten.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <ion-icon name="happy" color="nigger"></ion-icon>\n\n      Komponenten\n\n      <ion-icon name="happy" color="nigger"></ion-icon>\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToActionsheet()">\n\n          Actionsheet\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToAlert()">\n\n          Alert\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToApp()">\n\n          App\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToAvatar()">\n\n          Avatar\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToBadge()">\n\n          Badge\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToButton()">\n\n          Button\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToCard()">\n\n          Card\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToCheckbox()">\n\n          Checkbox\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToChip()">\n\n          Chip\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToColAndConfig()">\n\n          Col and Config\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToContent()">\n\n          Content\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToDateTime()">\n\n          DateTime\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToEvents()">\n\n          Events\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToFabButton()">\n\n          FabButton\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToGestures()">\n\n          Gestures\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToGrid()">\n\n          Grid\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToHaptic()">\n\n          Haptic\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToHideWhen()">\n\n          HideWhen\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIcon()">\n\n          Icon\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToImg()">\n\n          Img\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToInfiniteScroll()">\n\n          InfiniteScroll\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToInput()">\n\n          Input\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToIonicPage()">\n\n          IonicPage\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItem()">\n\n          Item\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemRecorder()">\n\n          ItemRecorder\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToItemSliding()">\n\n          ItemSliding\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToKeyboard()">\n\n          Keyboard\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToLabel()">\n\n          Label\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToList()">\n\n          List und Storage\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToLoadingController()">\n\n          LoadingController\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToModalController()">\n\n          ModalController\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToNav()">\n\n          Nav\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToNote()">\n\n          Note\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToPlatform()">\n\n          Platform\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToPlatformConfigToken()">\n\n          PlatformConfToken\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToPopoverController()">\n\n          PopoverController\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToRadioButton()">\n\n          RadioButton\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToRadioGroup()">\n\n          RadioGroup\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToRange()">\n\n          Range\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToRefresher()">\n\n          Refresher\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToregisterModeConfigs()">\n\n          registerModeConfigs\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToRow()">\n\n          Row\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToScroll()">\n\n          Scroll\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToSearchbar()">\n\n          Searchbar\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToSegment()">\n\n          Segment\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToSegmentButton()">\n\n          SegmentButton\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToSelect()">\n\n          Select / Option\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToShowWhen()">\n\n          ShowWhen\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToSlide()">\n\n          Slide\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToSpinner()">\n\n          Spinner\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToSplitPane()">\n\n          SplitPane\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToTab()">\n\n          Tab\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToTabs()">\n\n          Tabs\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToThumbnail()">\n\n          Thumbnail\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToTitle()">\n\n          Title\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToToastController()">\n\n          ToastController\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToToogle()">\n\n          Toogle\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToToolbar()">\n\n          Toolbar\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToTypography()">\n\n          Typography\n\n        </button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToViewController()">\n\n          ViewController\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button icon-left outline color="btnColor" (click)="goToVirualScroll()">\n\n          VirtualScroll\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\komponenten\komponenten.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], KomponentenPage);
    return KomponentenPage;
}());

//# sourceMappingURL=komponenten.js.map

/***/ }),

/***/ 84:
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
            selector: 'page-item-sliding',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-sliding\item-sliding.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Item Sliding Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list *ngFor="let land of items">\n\n    <ion-item-sliding #item (ionDrag)="onDrag($event)" (ionSwipe)="delete($event, land)">\n\n      <ion-item>\n\n        <img src="{{ land.flag }}" width="40" height="20"> {{ land.name }}\n\n      </ion-item>\n\n      <ion-item-options side="left">\n\n        <button ion-button (click)="teilen(item)">\n\n          <ion-icon name="share"></ion-icon>\n\n          Teilen\n\n        </button>\n\n        <button ion-button (click)="gelesen(item, land.name)">Gelesen</button>\n\n      </ion-item-options>\n\n\n\n      <ion-item-options side="right">\n\n        <button ion-button expandable color="primary" (click)="delete(item, land)">Delete</button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  <ion-item *ngFor="let gelesenesLand of geleseneLaender">\n\n    {{ gelesenesLand }} wurde gelesen!\n\n  </ion-item>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\item-sliding\item-sliding.html"*/,
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_alterValidator__ = __webpack_require__(315);
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
            selector: 'page-input',template:/*ion-inline-start:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\input\input.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Input Beispiel</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- input events können auch bei ion-input verwendet werden -->\n\n  <!-- (keyup), (keydown), (keypress), (input), (change), (focus), (invalid), (change), .... -->\n\n  <form name="testForm">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Verschiedene "Styles"\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label fixed>Fixed Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Floating Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Inline Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Placeholder"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label stacked>Stacked Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Floating Label</ion-label>\n\n          <ion-input type="text"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    \n\n    <ion-card>\n\n      <ion-card-header>\n\n        Verschiedene Typen\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Text"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="password" placeholder="Password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="email" placeholder="Email"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="number" placeholder="Number"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="search" placeholder="Search"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="tel" placeholder="Tel"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="url" placeholder="Url"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Other Properties\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Readonly" readonly></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Min 2 max 5" min="2" max="5"></ion-input>\n\n        </ion-item>      \n\n        <ion-item>\n\n          <ion-input type="text" placeholder="ClearOnEdit" clearOnEdit></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="ClearInput" clearInput></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Autocorrect" autocorrect="on"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Autocomplete" autocomplete="on"></ion-input>\n\n        </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n  </form>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Template Driven Form\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form #templateDrivenForm="ngForm" (ngSubmit)="onSubmitTemplateDrivenForm(templateDrivenForm)">\n\n        <ion-item>\n\n          <ion-label for="marke" floating>Automarke</ion-label>\n\n          <ion-input type="text" [(ngModel)]="auto.marke" name="marke" required></ion-input>\n\n        </ion-item>\n\n        <!-- Submit Button kann [disabled]="templateDrivenForm.invalid" haben -->\n\n        <button ion-button type="submit">Sign up</button>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reactive Form\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="processForm1()" [formGroup]="form1">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="vorname" floating>Vorname</ion-label>\n\n            <ion-input formControlName="vorname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!form1.controls.vorname.valid  && (form1.controls.vorname.dirty || form1.controls.vorname.touched)">\n\n            <p class="errorMessage">Bitte Vornamen eingeben</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="nachname" floating>Nachname</ion-label>\n\n            <ion-input formControlName="nachname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!form1.controls.nachname.valid  && (form1.controls.nachname.dirty || form1.controls.nachname.touched)">\n\n            <p class="errorMessage">Bitte Nachnamen eingeben</p>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="alter" floating>Alter</ion-label>\n\n            <ion-input formControlName="alter" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item *ngIf="!form1.controls.alter.valid  && (form1.controls.alter.dirty || form1.controls.alter.touched)">\n\n            <p class="errorMessage">Bitte korrektes Alter eingeben</p>\n\n          </ion-item>\n\n        </ion-list>\n\n        <!-- Submit Button sollte [disabled]="!form1.valid" haben -->\n\n        <button ion-button block type="submit">Submit</button>\n\n\n\n        <p>Vorname: {{ form1.get(\'vorname\').value }}</p>\n\n        <p>Nachname: {{ form1.get(\'nachname\').value }}</p>\n\n        <p>Alter: {{ form1.get(\'alter\').value }}</p>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Reactive Form 2\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <form (submit)="processForm2()" [formGroup]="form2">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label for="vorname" floating>Vorname</ion-label>\n\n            <ion-input formControlName="vorname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="nachname" floating>Nachname</ion-label>\n\n            <ion-input formControlName="nachname" type="text"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label for="alter" floating>Alter</ion-label>\n\n            <ion-input formControlName="alter" type="text"></ion-input>\n\n          </ion-item>\n\n        </ion-list>\n\n        <!-- Submit Button sollte [disabled]="!form1.valid" haben -->\n\n        <button ion-button block type="submit">Submit</button>\n\n\n\n        <p>Name value: {{ form2.get(\'vorname\').value }}</p>\n\n      </form>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\jogl2\Desktop\work\drsolutions\src\pages\input\input.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], InputPage);
    return InputPage;
}());

//# sourceMappingURL=input.js.map

/***/ })

},[257]);
//# sourceMappingURL=main.js.map