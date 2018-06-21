webpackJsonp([7],{

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__ = __webpack_require__(31);
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
 * Generated class for the SignUpModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SignUpModalPage = (function () {
    function SignUpModalPage(navCtrl, navParams, formBuilder, parseService, viewCtrl, loadingCtrl, toastCtrl, alertCtrl, modalCtrl, facebook, googlePlus, translate, globalConfig) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.parseService = parseService;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.translate = translate;
        this.globalConfig = globalConfig;
        this.submitAttempt = false;
        this.signUpForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, this.emailValidator])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)])],
        });
    }
    SignUpModalPage.prototype.emailValidator = function (control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    SignUpModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpModalPage');
    };
    SignUpModalPage.prototype.pwdEncryptor = function (email, pwd) {
        var encrypted;
        if (pwd == null) {
            // rand password
            var password = 'go2ghours';
            // encrypt password & email
            encrypted = password;
        }
        else if (pwd != null) {
            // encrypt password & email
            encrypted = String(pwd);
        }
        return encrypted;
    };
    SignUpModalPage.prototype.promptPassword = function (email, existingCheckData, method, platform) {
        var _this = this;
        var msgManual;
        var msgSosmed;
        var msgChangePassword;
        var linkAccount;
        var signupLoading;
        var pwd;
        var forgotPassword;
        var send;
        var signupSuccess;
        var signupFail;
        this.translate.get('MESSAGE_SIGNUP_MANUAL').subscribe(function (value) { msgManual = value; });
        this.translate.get('MESSAGE_SIGNUP_SOSMED').subscribe(function (value) { msgSosmed = value; });
        this.translate.get('LOADING_SIGN_UP').subscribe(function (value) { signupLoading = value; });
        this.translate.get('LINK_ACCOUNT').subscribe(function (value) { linkAccount = value; });
        this.translate.get('PASSWORD').subscribe(function (value) { pwd = value; });
        this.translate.get('FORGOT_PASSWORD').subscribe(function (value) { forgotPassword = value; });
        this.translate.get('SEND').subscribe(function (value) { send = value; });
        this.translate.get('SIGN_UP_SUCCESS').subscribe(function (value) { signupSuccess = value; });
        this.translate.get('SIGN_UP_FAIL').subscribe(function (value) { signupFail = value; });
        var password;
        var loading = this.loadingCtrl.create({
            content: signupLoading
        });
        // sosmed dulu baru manual yang forgot
        if (method == 'sosmedtomanual') {
            var alert_1 = this.alertCtrl.create({
                title: linkAccount,
                message: msgManual,
                buttons: [
                    {
                        text: forgotPassword,
                        handler: function (data) {
                            _this.forgotPassword();
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else if (method == 'manualtososmed') {
            var alert_2 = this.alertCtrl.create({
                title: linkAccount,
                message: msgSosmed,
                inputs: [{
                        name: 'password',
                        placeholder: pwd,
                        type: 'password'
                    }],
                buttons: [
                    {
                        text: send,
                        handler: function (data) {
                            loading.present();
                            password = _this.pwdEncryptor(email, data.password);
                            _this.parseService.login(email, password).then(function (resLogin) {
                                if (resLogin == 'success') {
                                    _this.parseService.existingLinking(email, password, existingCheckData, platform).then(function (resLink) {
                                        console.log(resLink);
                                        if (resLink == 'Linking success') {
                                            console.log('User login with ' + platform);
                                            loading.dismiss();
                                            _this.navCtrl.popToRoot();
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                                            _this.presentToast(signupSuccess);
                                        }
                                        else if (resLink == 'Linking error') {
                                            loading.dismiss();
                                            _this.presentToast(signupFail);
                                        }
                                    });
                                }
                                else if (resLogin == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    loading.dismiss();
                                    _this.presentToast(signupFail);
                                }
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    SignUpModalPage.prototype.signUp = function (method) {
        var _this = this;
        console.log(this.signUpForm.value);
        var invalid;
        this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(function (value) { invalid = value; });
        var formValue = this.signUpForm.value;
        var authData;
        var pwd;
        if (method == 'manual') {
            if (formValue.email == '' || formValue.email == null || formValue.password == '' || formValue.password == null) {
                this.presentToast(invalid);
            }
            else {
                authData = {
                    email: formValue.email
                };
                pwd = formValue.password;
                this.signUpProcess(authData, pwd, method);
            }
        }
        else if (method == 'google') {
            this.googlePlus.login({ 'webClientId': this.globalConfig.googleWebClientId, 'offline': true }).then(function (resGooglePlugin) {
                authData = {
                    email: resGooglePlugin.email,
                    displayName: resGooglePlugin.displayName,
                    givenName: resGooglePlugin.givenName,
                    familyName: resGooglePlugin.familyName
                };
                pwd = _this.pwdEncryptor(resGooglePlugin.email, null);
                _this.signUpProcess(authData, pwd, method);
            });
        }
        else if (method == 'facebook') {
            this.facebook.login(['public_profile', 'email']).then(function (resFbPlugin) {
                _this.facebook.api('/me?fields=id,email,name,first_name,last_name,gender,birthday', ['public_profile', 'email', 'user_birthday']).then(function (profile) {
                    authData = {
                        email: profile.email,
                        fullName: profile.fullName,
                        first_name: profile.first_name,
                        last_name: profile.last_name,
                        gender: profile.gender,
                        birthDate: profile.birthDate
                    };
                    pwd = _this.pwdEncryptor(profile.email, null);
                    _this.signUpProcess(authData, pwd, method);
                });
            });
        }
    };
    SignUpModalPage.prototype.signUpProcess = function (authData, pwd, method) {
        var _this = this;
        console.log(authData);
        var signupLoading;
        var signupSuccess;
        var signupFail;
        this.translate.get('LOADING_SIGN_UP').subscribe(function (value) { signupLoading = value; });
        this.translate.get('SIGN_UP_SUCCESS').subscribe(function (value) { signupSuccess = value; });
        this.translate.get('SIGN_UP_FAIL').subscribe(function (value) { signupFail = value; });
        var loading = this.loadingCtrl.create({
            content: signupLoading
        });
        this.parseService.existingCheck(authData.email).then(function (data) {
            if (data == null) {
                console.log('User not exist');
                _this.parseService.signup(authData, pwd, method).then(function (success) {
                    console.log(success);
                    loading.dismiss();
                    _this.presentToast(signupSuccess);
                    _this.dismissModal();
                }, function (err) {
                    console.log(err);
                    loading.dismiss();
                    _this.presentToast(signupFail);
                });
            }
            else {
                console.log('User exist');
                if (data.googleAuth == undefined && data.fbAuth == undefined) {
                    console.log('User exist with Manual account');
                    loading.dismiss();
                    _this.promptPassword(authData.email, data, 'manualtososmed', method);
                }
                else if (data.googleAuth != undefined || data.fbAuth != undefined) {
                    console.log('User exist with Google or Facebook account');
                    loading.dismiss();
                    _this.promptPassword(authData.email, data, 'sosmedtomanual', method);
                }
            }
        });
    };
    SignUpModalPage.prototype.forgotPassword = function () {
        var modal = this.modalCtrl.create('ForgotPasswordPage');
        modal.present();
    };
    SignUpModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    SignUpModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    SignUpModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up-modal',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/sign-up-modal/sign-up-modal.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="cls-search-rest">\n  <ion-toolbar>\n    <ion-title>{{"REGISTER" | translate}}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal()" color="dark">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding class="klikpegi-bg">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form [formGroup]="signUpForm" (ngSubmit)="signUp(\'manual\')">\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" formControlName="email"></ion-input>\n          </ion-item>\n          <ion-item *ngIf="!signUpForm.controls.email.valid && (signUpForm.controls.email.dirty || submitAttempt)">\n            <p>{{"INVALID_EMAIL" | translate}}</p>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"PASSWORD" | translate}}</ion-label>\n            <ion-input type="password" formControlName="password"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="!signUpForm.controls.password.valid && (signUpForm.controls.password.dirty || submitAttempt)">\n            <p>{{"INVALID_LENGTH" | translate}}</p>\n          </ion-item>\n          <br/>\n          <button ion-button type="submit" block>{{"SIGN_ME_UP" | translate}}</button>\n        </form>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row padding-horizontal padding-top text-center align-items-center>\n      <ion-col>\n        <div style="height: 1px; background-color:rgb(216,216,216)">\n        </div>\n      </ion-col>\n      <ion-col col-2 text-center class="text-subcontent-large">\n        {{"OR" | translate }}\n      </ion-col>\n      <ion-col>\n        <div style="height: 1px; background-color:rgb(216,216,216)">\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-vertical>\n      <ion-col text-center class="text-content-light">\n        {{"LOG_IN_WITH" | translate }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block icon-left style="background-color:#3b5998" (click)="signUp(\'facebook\')">\n          <ion-icon name="logo-facebook"></ion-icon>\n          Facebook\n        </button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col>\n        <button ion-button block icon-left style="background-color:#dc4e41" (click)="signUp(\'google\')">\n          <ion-icon name="logo-google"></ion-icon>\n          Google\n        </button>\n      </ion-col>\n    </ion-row> -->\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/sign-up-modal/sign-up-modal.html"*/,
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
            __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], SignUpModalPage);
    return SignUpModalPage;
}());

//# sourceMappingURL=sign-up-modal.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModalPageModule", function() { return SignUpModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_modal__ = __webpack_require__(1124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignUpModalPageModule = (function () {
    function SignUpModalPageModule() {
    }
    SignUpModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sign_up_modal__["a" /* SignUpModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__sign_up_modal__["a" /* SignUpModalPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], SignUpModalPageModule);
    return SignUpModalPageModule;
}());

//# sourceMappingURL=sign-up-modal.module.js.map

/***/ })

});
//# sourceMappingURL=7.js.map