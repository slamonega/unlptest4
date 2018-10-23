webpackJsonp([15],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(65);
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
 * Service with auxiliary utilities
 * such as loading backdrop and quick alert calls
 */
var UtilService = (function () {
    function UtilService(loadingCtrl, alertCtrl, translate) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.loader = null;
    }
    UtilService.prototype.alert = function (text, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                this.translate.instant('buttons.ok')
            ]
        });
        alert.present();
    };
    UtilService.prototype.showLoader = function () {
        if (this.loader != null) {
            return;
        }
        this.loader = this.loadingCtrl.create({});
        this.loader.present();
    };
    UtilService.prototype.hideLoader = function () {
        if (this.loader != null) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
    ], UtilService);
    return UtilService;
}());

//# sourceMappingURL=util_service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Service to init device to receive push notifications
 */
var PushService = (function () {
    function PushService() {
    }
    PushService.prototype.init = function (id) {
        var notificationOpenedCallback = function (jsonData) {
        };
        if (window['plugins'] && window['plugins'].OneSignal) {
            window['plugins'].OneSignal.startInit(id)
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        }
    };
    PushService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PushService);
    return PushService;
}());

//# sourceMappingURL=push_service.js.map

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/catalog/categories/categories.module": [
		690,
		14
	],
	"../pages/catalog/products/products.module": [
		691,
		7
	],
	"../pages/catalog/restaurants/restaurants.module": [
		692,
		13
	],
	"../pages/news/news_detail/news_detail.module": [
		693,
		3
	],
	"../pages/news/news_feed/news_feed.module": [
		694,
		2
	],
	"../pages/ordering/address_map/address_map.module": [
		697,
		6
	],
	"../pages/ordering/cart/cart.module": [
		695,
		12
	],
	"../pages/ordering/credit_card_input/credit_card_input.module": [
		696,
		11
	],
	"../pages/ordering/order/order.module": [
		699,
		5
	],
	"../pages/personal/login/login.module": [
		700,
		10
	],
	"../pages/personal/loyalty/loyalty.module": [
		698,
		4
	],
	"../pages/personal/order_view/order_view.module": [
		701,
		1
	],
	"../pages/personal/orders_history/orders_history.module": [
		703,
		0
	],
	"../pages/personal/profile/profile.module": [
		702,
		9
	],
	"../pages/personal/signup/signup.module": [
		704,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 215;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_push_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_api_service__ = __webpack_require__(38);
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
 * WelcomePage component
 */
var Welcome = (function () {
    function Welcome(nav, storage, push, api) {
        this.nav = nav;
        this.storage = storage;
        this.push = push;
        this.api = api;
        this.signup = false;
        this.signup = (this.api.getSettings().signup_required == 1);
    }
    Welcome.prototype.goToSignup = function () {
        this.nav.setRoot('SignupPage');
    };
    Welcome.prototype.goToLogin = function () {
        this.nav.setRoot('LoginPage');
    };
    Welcome.prototype.startApp = function () {
        this.push.init(this.api.getSettings().pushwoosh_id);
        this.storage.set('welcomeShown', '1').then(function () {
        }, function () {
        });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        // StatusBar.styleDefault();
        // StatusBar.overlaysWebView(false);
        // StatusBar.backgroundColorByHexString('F8F8F8');
        // StatusBar.show();
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\welcome\welcome.html"*/'<div class="welcome-screen">\n    <div class="welcome-group">\n        <p class="text-center">\n            <!--<span class="welcome-icon">-->\n              <!--<span class="inner"></span>-->\n            <!--</span>-->\n            <span class="welcome-text">\n                {{ \'welcome.welcome\' | translate }}<br/>{{ \'welcome.app_name\' | translate }}\n            </span>\n        </p>\n    </div>\n    <div class="welcome-content" *ngIf="!signup">\n        <button ion-button block large class="start-button" (click)="startApp()">{{ \'welcome.start\' | translate }}</button>\n    </div>\n    <div class="welcome-content" *ngIf="signup">\n        <button ion-button block large class="start-button" (click)="goToSignup()">{{ \'welcome.signup\' | translate }}</button>\n        <div class="text-center">\n            <a (click)="goToLogin()">{{ \'welcome.login\' | translate }}</a>\n        </div>\n    </div>\n</div>\n'/*ion-inline-end:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\welcome\welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__services_push_service__["a" /* PushService */],
            __WEBPACK_IMPORTED_MODULE_5__services_api_service__["a" /* APIService */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Loading = (function () {
    function Loading() {
    }
    Loading = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\loading\loading.html"*/'<div class="loading">\n	<div class="loading-text">{{ \'loading\' | translate }}</div>\n</div>\n'/*ion-inline-end:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\loading\loading.html"*/
        })
    ], Loading);
    return Loading;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EcurrencyPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ecurrency__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EcurrencyPipeModule = (function () {
    function EcurrencyPipeModule() {
    }
    EcurrencyPipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__ecurrency__["a" /* ECurrencyPipe */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__ecurrency__["a" /* ECurrencyPipe */]
            ]
        })
    ], EcurrencyPipeModule);
    return EcurrencyPipeModule;
}());

//# sourceMappingURL=ecurrency.module.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__(38);
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
 * Service to handle orders history
 * Using server if we have user signup
 * Otherwise stores everything locally
 */
var OrderHistoryService = (function () {
    function OrderHistoryService(storage, apiService) {
        this.storage = storage;
        this.apiService = apiService;
        this.items = [];
    }
    OrderHistoryService.prototype.getItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.apiService.getSettings().signup_required == 1) {
                _this.apiService.getOrders().subscribe(function (v) {
                    _this.items = v;
                    resolve(_this.items);
                }, function () {
                    reject();
                });
            }
            else {
                _this.storage.get('ordersHistory').then(function (v) {
                    if (v) {
                        _this.items = JSON.parse(v);
                        resolve(_this.items);
                    }
                    else {
                        reject();
                    }
                }, function () {
                    reject();
                });
            }
        });
    };
    OrderHistoryService.prototype.add = function (order) {
        var _this = this;
        var addOrder = function (order) {
            _this.items.unshift(order);
            _this.storage.set('ordersHistory', JSON.stringify(_this.items)).then(function () { }, function () { });
        };
        if (this.apiService.getSettings().signup_required != 1) {
            if (this.items.length) {
                addOrder(order);
            }
            else {
                this.storage.get('ordersHistory').then(function (v) {
                    if (v) {
                        _this.items = JSON.parse(v);
                    }
                    addOrder(order);
                }, function () { });
            }
        }
    };
    OrderHistoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* APIService */]])
    ], OrderHistoryService);
    return OrderHistoryService;
}());

//# sourceMappingURL=order_history_service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorHandler */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_loading_loading__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_api_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_push_service__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_util_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_order_history_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_ecurrency_module__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















__WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].init('5d523476', {
    appVersion: '1.2.1'
});
var MyErrorHandler = (function () {
    function MyErrorHandler(injector, platform) {
        this.platform = platform;
        try {
            this.ionicErrorHandler = injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */]);
        }
        catch (e) {
        }
    }
    MyErrorHandler.prototype.handleError = function (err) {
        if (this.platform.is('browser')) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].monitoring.handleNewError(err);
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MyErrorHandler);
    return MyErrorHandler;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_19__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_8__pages_loading_loading__["a" /* Loading */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/catalog/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalog/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/catalog/restaurants/restaurants.module#RestaurantsPageModule', name: 'RestaurantsPage', segment: 'restaurants', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news_detail/news_detail.module#NewsDetailPageModule', name: 'NewsDetailPage', segment: 'news_detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news_feed/news_feed.module#NewsFeedPageModule', name: 'NewsFeedPage', segment: 'news_feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/credit_card_input/credit_card_input.module#CreditCardInputModule', name: 'CreditCardInput', segment: 'credit_card_input', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/address_map/address_map.module#AddressMapModule', name: 'AddressMap', segment: 'address_map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/loyalty/loyalty.module#LoyaltyPageModule', name: 'LoyaltyPage', segment: 'loyalty', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ordering/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/order_view/order_view.module#OrdersHistoryPageModule', name: 'OrderViewPage', segment: 'order_view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/orders_history/orders_history.module#OrdersHistoryPageModule', name: 'OrdersHistoryPage', segment: 'orders_history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_18__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_ecurrency_module__["a" /* EcurrencyPipeModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_8__pages_loading_loading__["a" /* Loading */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_api_service__["a" /* APIService */],
                __WEBPACK_IMPORTED_MODULE_14__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_15__services_push_service__["a" /* PushService */],
                __WEBPACK_IMPORTED_MODULE_16__services_util_service__["a" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_17__services_order_history_service__["a" /* OrderHistoryService */],
                // Comment these lines to disable ionic monitoring
                // IonicErrorHandler,
                // {provide: ErrorHandler, useClass: MyErrorHandler}
                // Uncomment this line to disable ionic monitoring
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
 * Service for API access
 */
var APIService = (function () {
    function APIService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.headers = null;
        this.loginStatus$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
        // this.rootUrl = 'http://localhost:8000/api/';
        this.rootUrl = 'http://delivery.giraffy.tech/api/';
        // this.rootUrl = 'http://foodypoint.giraffy.tech/api/';
        // this.rootUrl = 'http://10.0.3.2:8000/api/';
        // this.rootUrl = 'http://192.168.8.100:8000/api/';
        this.categories = [];
        this.restaurants = [];
        this.delivery_areas = [];
        this.token = null;
        this.userData = {
            id: null,
            city_id: null,
            name: '',
            phone: ''
        };
    }
    APIService.prototype.getLoginStatus = function () {
        return this.loginStatus$;
    };
    APIService.prototype.reloadCategories = function (restaurant_id) {
        var _this = this;
        var url = this.rootUrl + "categories";
        if (restaurant_id) {
            url = url + "?restaurant_id=" + restaurant_id;
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(url).toPromise().then(function (response) {
                _this.categories = response.json();
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.reloadRestaurants = function (city_id) {
        var _this = this;
        var url = this.rootUrl + "restaurants";
        if (city_id) {
            url = url + "?city_id=" + city_id;
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(url).toPromise().then(function (response) {
                _this.restaurants = response.json();
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.loadDeliveryAreas = function (city_id) {
        var _this = this;
        var url = this.rootUrl + "delivery_areas";
        if (city_id) {
            url = url + "?city_id=" + city_id;
        }
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(url).toPromise().then(function (response) {
                _this.delivery_areas = response.json();
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.getCategories = function () {
        return this.categories;
    };
    APIService.prototype.getRestaurants = function () {
        return this.restaurants;
    };
    APIService.prototype.getSettings = function () {
        return this.settings;
    };
    APIService.prototype.getDeliveryAreas = function () {
        return this.delivery_areas;
    };
    APIService.prototype.getCities = function () {
        return this.cities;
    };
    APIService.prototype.getToken = function () {
        return this.token;
    };
    APIService.prototype.getUserData = function () {
        return this.userData;
    };
    APIService.prototype.getProducts = function (category_id) {
        var url = this.rootUrl + ("products?category_id=" + category_id);
        return this.http.get(url).toPromise();
    };
    APIService.prototype.getNews = function (page, city_id) {
        var url = this.rootUrl + ("news?page=" + page);
        if (city_id) {
            url = url + "&city_id=" + city_id;
        }
        return this.http.get(url).toPromise();
    };
    APIService.prototype.createOrder = function (data) {
        return this.http.post(this.rootUrl + "order", data, {
            headers: this.headers
        }).toPromise();
    };
    APIService.prototype.validateDiscount = function (data) {
        return this.http.post(this.rootUrl + "promo_codes/validate", data).map(function (response) {
            return response.json();
        });
    };
    APIService.prototype.setToken = function (v) {
        this.token = v;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            token: this.token
        });
    };
    APIService.prototype.isLoggedIn = function () {
        return (this.token != null && (this.settings.signup_required == 1));
    };
    APIService.prototype.init = function () {
        var _this = this;
        var serverFetched = false;
        this.storage.get('data').then(function (v) {
            if (v && !serverFetched) {
                var data = JSON.parse(v);
                _this.categories = data.categories;
                _this.settings = data.settings;
            }
        });
        this.storage.get('token').then(function (v) {
            if (v) {
                _this.setToken(v);
            }
        });
        this.storage.get('userData').then(function (v) {
            if (v) {
                _this.userData = JSON.parse(v);
            }
        }, function (e) {
        });
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "settings").toPromise().then(function (response) {
                serverFetched = true;
                var data = response.json();
                _this.storage.set('data', JSON.stringify(data)).then(function () {
                }, function () {
                });
                _this.categories = data.categories;
                _this.settings = data.settings;
                if (data.delivery_areas) {
                    _this.delivery_areas = data.delivery_areas;
                }
                if (data.cities) {
                    _this.cities = data.cities;
                }
                resolve();
            }, function () {
                reject();
            });
        });
        return promise;
    };
    APIService.prototype.signup = function (data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "customers", data).map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.login = function (email, password) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(_this.rootUrl + "login", {
                email: email,
                password: password
            }).map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.token) {
                    _this.setToken(response.token);
                    _this.userData = response.customer;
                    _this.storage.set('token', response.token).then(function () {
                    }, function () {
                    });
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                    }, function () {
                    });
                    _this.loginStatus$.next(true);
                    resolve(response);
                }
                else {
                    reject({});
                }
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.saveUserData = function (data) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put(_this.rootUrl + "customers/1", data, {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                if (response.success) {
                    var reload_1 = false;
                    if (_this.userData.city_id != response.customer.city_id) {
                        reload_1 = true;
                    }
                    _this.userData = response.customer;
                    _this.storage.set('userData', JSON.stringify(response.customer)).then(function () {
                        if (reload_1) {
                            window['location'].reload();
                        }
                    }, function () {
                    });
                }
                resolve(response);
            }, function () {
                reject({});
            });
        });
        return promise;
    };
    APIService.prototype.getOrders = function () {
        return this.http.get(this.rootUrl + "orders", {
            headers: this.headers
        }).map(function (response) {
            return response.json();
        });
    };
    APIService.prototype.loadUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.rootUrl + "me", {
                headers: _this.headers
            }).map(function (response) {
                return response.json();
            }).subscribe(function (response) {
                _this.storage.set('userData', JSON.stringify(response)).then(function () { }, function () { });
                _this.userData = response;
                resolve(response);
            }, function () {
                reject({});
            });
        });
    };
    APIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], APIService);
    return APIService;
}());

//# sourceMappingURL=api_service.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ECurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(38);
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
 * Ecurrency pipe for displaying money values
 */
var ECurrencyPipe = (function () {
    function ECurrencyPipe(apiService) {
        this.apiService = apiService;
    }
    ECurrencyPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return this.apiService.getSettings().currency_format.
            replace(':value', parseFloat(value).toFixed(2));
    };
    ECurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'ecurrency' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* APIService */]])
    ], ECurrencyPipe);
    return ECurrencyPipe;
}());

//# sourceMappingURL=ecurrency.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_loading_loading__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_api_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_util_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(65);
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
    function MyApp(platform, statusBar, splashScreen, storage, cart, api, translate, util) {
        var _this = this;
        this.storage = storage;
        this.cart = cart;
        this.api = api;
        this.translate = translate;
        this.util = util;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_loading_loading__["a" /* Loading */];
        this.loggedIn = false;
        this.translate.setDefaultLang('en');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            storage.ready().then(function () {
                cart.init();
                _this.api.getLoginStatus().subscribe(function () {
                    _this.loggedIn = true;
                });
                storage.get('welcomeShown').then(function (v) {
                    if (v) {
                        var settings = _this.api.getSettings();
                        if (settings && settings.signup_required == 1) {
                            _this.loggedIn = true;
                        }
                        _this.api.init().then(function () {
                            _this.loggedIn = _this.api.isLoggedIn();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                            splashScreen.hide();
                        });
                    }
                    else {
                        _this.api.init().then(function () {
                            _this.loggedIn = _this.api.isLoggedIn();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */]);
                            splashScreen.hide();
                        }, function () {
                            window['location'].reload();
                        });
                    }
                }, function () {
                    _this.api.init().then(function () {
                        _this.loggedIn = _this.api.isLoggedIn();
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */]);
                        splashScreen.hide();
                    }, function () {
                        window['location'].reload();
                    });
                });
            });
        });
    }
    MyApp.prototype.openProfile = function () {
        this.nav.push('ProfilePage');
    };
    MyApp.prototype.openHistory = function () { };
    MyApp.prototype.logout = function () {
        this.util.showLoader();
        this.storage.clear().then(function () {
            window['location'].reload();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myNav'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\app\app.html"*/'<!-- <ion-split-pane> -->\n	<ion-menu [content]="myNav" persistent="true" type="overlay" [hidden]="!loggedIn">\n		<ion-content>\n			<div>\n				<ion-list>\n					<button menuClose ion-item (click)="openProfile()" class="-b5">\n						{{ \'menu.profile\' | translate }}\n					</button>\n					<button menuClose ion-item (click)="logout()" class="-b7">\n						{{ \'menu.logout\' | translate }}\n					</button>\n				</ion-list>\n			</div>\n		</ion-content>\n	</ion-menu>\n	<ion-nav #myNav swipeBackEnabled="false" [root]="rootPage"></ion-nav>\n<!-- </ion-split-pane> -->'/*ion-inline-end:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_10__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_8__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__services_util_service__["a" /* UtilService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__(38);
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
 * Service handling shopping cart operations
 */
var CartService = (function () {
    function CartService(storage, alertCtrl, translate, apiService) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.apiService = apiService;
        this.items = [];
        this._itemsCount$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
    }
    CartService.prototype.init = function () {
        var _this = this;
        this.storage.get('cart').then(function (v) {
            if (v) {
                _this.items = JSON.parse(v);
                _this._itemsCount$.next(_this.getCartCount());
            }
        });
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.clear = function () {
        this.items.splice(0, this.items.length);
        this.save();
    };
    CartService.prototype.getCartCount = function () {
        var count = 0;
        this.items.forEach(function (item) {
            count = count + item.count;
        });
        return count;
    };
    CartService.prototype.doAddItem = function (product, count) {
        var item = null;
        this.items.forEach(function (cart_item) {
            if (cart_item.product.id == product.id) {
                item = cart_item;
            }
        });
        if (item == null) {
            this.items.push({
                product: product,
                count: count
            });
        }
        else {
            item.count = item.count + count;
        }
        this.save();
    };
    CartService.prototype.hasItem = function (product) {
        var result = false;
        this.items.forEach(function (cart_item) {
            if (cart_item.product.id == product.id) {
                result = true;
            }
        });
        return result;
    };
    CartService.prototype.addItem = function (product, count) {
        var _this = this;
        if (this.items.length > 0 && this.apiService.getSettings().multiple_restaurants) {
            if (this.items[0].product.restaurant_id != product.restaurant_id) {
                var confirm_1 = this.alertCtrl.create({
                    title: this.translate.instant('cart.add_from_other_restaurant_title'),
                    message: this.translate.instant('cart.add_from_other_restaurant_text'),
                    buttons: [{
                            text: this.translate.instant('buttons.cancel')
                        }, {
                            text: this.translate.instant('buttons.ok'),
                            handler: function () {
                                _this.items = [];
                                _this.doAddItem(product, count);
                            }
                        }]
                });
                confirm_1.present();
            }
            else {
                this.doAddItem(product, count);
            }
        }
        else {
            this.doAddItem(product, count);
        }
    };
    CartService.prototype.decreaseCount = function (item) {
        var ind = this.items.indexOf(item);
        if (ind >= 0) {
            this.items[ind].count = this.items[ind].count - 1;
            if (this.items[ind].count == 0) {
                this.removeItem(item);
            }
            else {
                this.save();
            }
        }
    };
    CartService.prototype.setItemCount = function (product, count) {
        var item = null;
        this.items.forEach(function (cart_item) {
            if (cart_item.product.id == product.id) {
                item = cart_item;
            }
        });
        if (item == null) {
            this.items.push({
                product: product,
                count: count
            });
        }
        else {
            item.count = count;
        }
        this.save();
    };
    CartService.prototype.removeItem = function (item) {
        var ind = this.items.indexOf(item);
        if (ind >= 0) {
            this.items.splice(ind, 1);
            this.save();
        }
    };
    CartService.prototype.save = function () {
        this.storage.set('cart', JSON.stringify(this.items)).then(function () { });
        this._itemsCount$.next(this.getCartCount());
    };
    Object.defineProperty(CartService.prototype, "itemsCount$", {
        get: function () {
            return this._itemsCount$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* APIService */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart_service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cart_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(38);
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
 * Tabs primary component
 */
var TabsPage = (function () {
    function TabsPage(cart, apiService) {
        var _this = this;
        this.cart = cart;
        this.apiService = apiService;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab0Root = 'NewsFeedPage';
        this.tab1Root = 'CategoriesPage';
        this.tab2Root = 'CartPage';
        this.tab3Root = 'OrdersHistoryPage';
        this.tab4Root = 'LoyaltyPage';
        this.count = 0;
        this.count = cart.getCartCount();
        if (this.apiService.getSettings().multiple_restaurants) {
            this.tab1Root = 'RestaurantsPage';
        }
        this.cart.itemsCount$.subscribe(function (v) {
            _this.count = v;
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\tabs\tabs.html"*/'<ion-tabs>\n	<ion-tab [root]="tab0Root" tabTitle="{{ \'tabs.news\' | translate }} " tabIcon="paper"></ion-tab>\n	<ion-tab [root]="tab1Root" tabTitle="{{ \'tabs.menu\' | translate }} " tabIcon="cafe"></ion-tab>\n	<ion-tab [root]="tab2Root" tabTitle="{{ \'tabs.cart\' | translate }}" tabIcon="cart" tabBadge="{{ count > 0 ? count : \'\' }}"></ion-tab>\n	<ion-tab [root]="tab3Root" tabTitle="{{ \'tabs.orders_list\' | translate }}" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="{{ \'tabs.loyalty\' | translate }}" tabIcon="ribbon"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* APIService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map