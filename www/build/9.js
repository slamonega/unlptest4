webpackJsonp([9],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_api_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_util_service__ = __webpack_require__(159);
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
* Component for profile editing
*/
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, builder, apiService, util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.builder = builder;
        this.apiService = apiService;
        this.util = util;
        this.cities = [];
        this.showCities = false;
        this.active = false;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.active = true;
        this.resetForm();
    };
    ProfilePage.prototype.resetForm = function () {
        var user = this.apiService.getUserData();
        var rules = {
            email: [user.email, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            name: [user.name, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            phone: [user.phone, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            password: [''],
            password_confirmation: ['']
        };
        if (this.apiService.getSettings().multiple_cities) {
            this.cities = this.apiService.getCities();
            rules['city_id'] = [user.city_id, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]];
            this.showCities = true;
        }
        this.profileForm = this.builder.group(rules);
    };
    ProfilePage.prototype.save = function () {
        var _this = this;
        this.util.showLoader();
        this.apiService.saveUserData(this.profileForm.value).then(function (data) {
            _this.util.hideLoader();
            if (!data.success) {
                _this.util.alert(data.errors, '');
            }
            else {
                _this.resetForm();
                _this.navCtrl.pop();
            }
        }, function () {
            _this.util.hideLoader();
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'profile',template:/*ion-inline-start:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\personal\profile\profile.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>{{ \'profile.title\' | translate }}</ion-title>\n\n		<ion-buttons end>\n\n			<button ion-button block (click)="save()">\n\n				{{ \'profile.save\' | translate }}\n\n			</button>\n\n		</ion-buttons>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<form (ngSubmit)="save()" *ngIf="active" novalidate [formGroup]="profileForm" class="signup-form">\n\n		<ion-item>\n\n			<ion-label stacked>{{ \'profile.email\' | translate }}</ion-label>\n\n			<ion-input type="text" [formControl]="profileForm.controls.email">\n\n			</ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label stacked>{{ \'profile.name\' | translate }}</ion-label>\n\n			<ion-input type="text" [formControl]="profileForm.controls.name">\n\n			</ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label stacked>{{ \'profile.phone\' | translate }}</ion-label>\n\n			<ion-input type="text" [formControl]="profileForm.controls.phone">\n\n			</ion-input>\n\n		</ion-item>\n\n		<ion-item *ngIf="showCities">\n\n			<ion-label stacked>{{ \'profile.city\' | translate }}</ion-label>\n\n			<ion-select placeholder="{{ \'signup.city\' | translate }}" [formControl]="profileForm.controls.city_id">\n\n				<ion-option *ngFor="let city of cities" value="{{ city.id }}">{{ city.name }}</ion-option>\n\n			</ion-select>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label stacked>{{ \'profile.password\' | translate }}</ion-label>\n\n			<ion-input type="password" [formControl]="profileForm.controls.password">\n\n			</ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n			<ion-label stacked>{{ \'profile.password_confirmation\' | translate }}</ion-label>\n\n			<ion-input type="password" [formControl]="profileForm.controls.password_confirmation">\n\n			</ion-input>\n\n		</ion-item>\n\n	</form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\slamonega\Documents\App Economia Social\giraffy-delivery-complete-food-delivery-platform-with-mobile-apps\application\src\pages\personal\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_api_service__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_4__services_util_service__["a" /* UtilService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=9.js.map