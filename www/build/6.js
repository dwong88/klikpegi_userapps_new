webpackJsonp([6],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_LoginHandler__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignUpPage = (function (_super) {
    __extends(SignUpPage, _super);
    function SignUpPage(navCtrl, navParams, formBuilder, parseService, viewCtrl, loadingCtrl, toastCtrl, alertCtrl, modalCtrl, facebook, googlePlus, translate, geolocation, globalConfig) {
        var _this = _super.call(this, navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, loadingCtrl, toastCtrl, translate, parseService, facebook, googlePlus, geolocation, globalConfig) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.formBuilder = formBuilder;
        _this.parseService = parseService;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.alertCtrl = alertCtrl;
        _this.modalCtrl = modalCtrl;
        _this.facebook = facebook;
        _this.googlePlus = googlePlus;
        _this.translate = translate;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        _this.submitAttempt = false;
        _this.backToParent = false;
        _this.signUpForm = formBuilder.group({
            fullName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            phoneNo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[0-9]*')])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, _this.emailValidator])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)])],
        });
        if (typeof _this.navParams.get('backToParent') !== 'undefined') {
            _this.backToParent = _this.navParams.get('backToParent');
        }
        return _this;
    }
    SignUpPage.prototype.emailValidator = function (control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.signUp = function (method) {
        var invalid;
        this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(function (value) {
            invalid = value;
        });
        var closeType = __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.RELOAD_ROOT;
        if (this.backToParent)
            closeType = __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL;
        var formValue = this.signUpForm.value;
        var authData;
        var pwd;
        var boolManual = true;
        if (method == 'manual') {
            if (formValue.email == '' || formValue.email == null || formValue.password == '' || formValue.password == null || formValue.fullName == '' || formValue.fullName == null || formValue.phoneNo == '' || formValue.phoneNo == null) {
                this.presentToast(invalid);
                boolManual = false;
            }
            else {
                authData = {
                    email: formValue.email.toLowerCase(),
                    fullName: formValue.fullName.toUpperCase(),
                    phoneNo: formValue.phoneNo
                };
                pwd = formValue.password;
                this.signUpProcess(authData, pwd, method, closeType, __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
            }
        }
        else if (method == 'google') {
            this.googleLogin(closeType, __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
        }
        else if (method == 'facebook') {
            this.facebookLogin(closeType, __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
        }
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="cls-search-rest">\n  <ion-toolbar>\n    <ion-title>{{"SIGN_UP" | translate}}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal()" color="dark">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="klikpegi-bg">\n  <ion-grid padding-horizontal>\n    <ion-row padding-top>\n      <ion-col style="text-align: center;">\n          <img class="ghours-logo-full" scroll="false" src="assets/images/ghours_full.png" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="row-login-form">\n      <ion-col>\n        <form [formGroup]="signUpForm" (ngSubmit)="signUp(\'manual\')" id="signUpForm">\n            <ion-item>\n                <ion-input type="text" formControlName="fullName" placeholder="{{\'FULL_NAME\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="!signUpForm.controls.fullName.valid && signUpForm.controls.fullName.dirty">\n                <p>{{"INVALID_NAME" | translate}}</p>\n            </ion-item>\n\n            <ion-item>\n                <ion-input type="number" formControlName="phoneNo" placeholder="{{\'PHONE_NUMBER\' | translate}}"></ion-input>\n            </ion-item>\n            <ion-item *ngIf="!signUpForm.controls.phoneNo.valid && signUpForm.controls.phoneNo.dirty">\n                <p>{{"INVALID_LENGTH" | translate}}</p>\n            </ion-item>\n\n          <ion-item>\n            <ion-input type="email" formControlName="email" placeholder="{{\'EMAIL_ADDRESS\' | translate}}"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!signUpForm.controls.email.valid && (signUpForm.controls.email.dirty || submitAttempt)">\n            <p>{{"INVALID_EMAIL" | translate}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" formControlName="password" placeholder="{{\'PASSWORD\' | translate}}"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="!signUpForm.controls.password.valid && (signUpForm.controls.password.dirty || submitAttempt)">\n          <p>{{"INVALID_LENGTH" | translate}}</p>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-top class="cls-submit-form-login">\n      <ion-col>\n        <button class="bordergrey" ion-button type="submit" block form="signUpForm" style="font-weight: bold;">{{"SIGN_ME_UP" | translate }}</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center align-items-center class="cls-form-devider" style="padding: 12px;">\n      <ion-col>\n        <div class="div-devider">\n\n        </div>\n      </ion-col>\n      <ion-col col-2 text-center class="text-subcontent-large">\n        {{"OR" | translate}}\n      </ion-col>\n      <ion-col>\n        <div class="div-devider">\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col text-center class="text-content-light">\n        {{"SIGN_UP_WITH" | translate}}\n      </ion-col>\n    </ion-row>\n\n      <ion-row class="cls-submit-form-login">\n          <ion-col>\n              <button class="bordergrey" ion-button block icon-left style="background-color: white; color: #00447C; font-weight: bold;" (click)="signUp(\'facebook\')">\n                  <ion-icon name="logo-facebook"></ion-icon>&nbsp;\n                  F a c e b o o k\n              </button>\n          </ion-col>\n      </ion-row>\n\n      <ion-row padding-top class="cls-submit-form-login" style="margin-top: -1rem;">\n          <ion-col>\n              <button class="bordergrey" ion-button block icon-left style="background-color: white; color: red; font-weight: bold;" (click)="signUp(\'google\')">\n                  <ion-icon name="logo-google"></ion-icon>&nbsp;\n                  G o o g l e\n              </button>\n          </ion-col>\n      </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/sign-up/sign-up.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], SignUpPage);
    return SignUpPage;
}(__WEBPACK_IMPORTED_MODULE_9__components_LoginHandler__["a" /* LoginHandler */]));

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]
            ]
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map