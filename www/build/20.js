webpackJsonp([20],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__ = __webpack_require__(31);
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
 * Generated class for the LoginModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginModalPage = (function () {
    function LoginModalPage(navCtrl, loadingCtrl, navParams, viewCtrl, parseService, toastCtrl, modalCtrl, alertCtrl, plt, facebook, googlePlus, translate, globalConfig) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.parseService = parseService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.facebook = facebook;
        this.googlePlus = googlePlus;
        this.translate = translate;
        this.globalConfig = globalConfig;
        this.model = {};
        this.loading = false;
        this.mainNav = '';
        this.skipStatus = false;
        this.bookingData = '';
        parseService.facebookInit();
    }
    LoginModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginModalPage');
    };
    LoginModalPage.prototype.pwdEncryptor = function (email, pwd) {
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
    LoginModalPage.prototype.pwdDecryptor = function (pwd) {
        // decrypt password
        var decrypted = pwd;
        return decrypted;
    };
    LoginModalPage.prototype.promptPassword = function (email, existingCheckData, method, platform) {
        var _this = this;
        var msgManual;
        var msgSosmed;
        var msgChangePassword;
        var loginLoading;
        var linkAccount;
        var forgotPassword;
        var pwd;
        var send;
        var loginSuccess;
        var loginFail;
        this.translate.get('MESSAGE_LOGIN_MANUAL').subscribe(function (value) { msgManual = value; });
        this.translate.get('MESSAGE_LOGIN_SOSMED').subscribe(function (value) { msgSosmed = value; });
        this.translate.get('MESSAGE_LOGIN_CHANGE_PASSWORD').subscribe(function (value) { msgChangePassword = value; });
        this.translate.get('LOADING_LOGIN').subscribe(function (value) { loginLoading = value; });
        this.translate.get('LINK_ACCOUNT').subscribe(function (value) { linkAccount = value; });
        this.translate.get('FORGOT_PASSWORD').subscribe(function (value) { forgotPassword = value; });
        this.translate.get('PASSWORD').subscribe(function (value) { pwd = value; });
        this.translate.get('SEND').subscribe(function (value) { send = value; });
        this.translate.get('LOG_IN_SUCCESS').subscribe(function (value) { loginSuccess = value; });
        this.translate.get('LOG_IN_FAIL').subscribe(function (value) { loginFail = value; });
        var password;
        var loading = this.loadingCtrl.create({
            content: loginLoading
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
                                            _this.viewCtrl.dismiss();
                                            _this.presentToast(loginSuccess);
                                        }
                                        else if (resLink == 'Linking error') {
                                            loading.dismiss();
                                            _this.presentToast(loginFail);
                                        }
                                    });
                                }
                                else if (resLogin == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    loading.dismiss();
                                    _this.presentToast(loginFail);
                                }
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
        else if (method == 'manualtososmedchangepwd') {
            var alert_3 = this.alertCtrl.create({
                title: linkAccount,
                message: msgChangePassword,
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
                                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
                                            _this.presentToast(loginSuccess);
                                        }
                                        else if (resLink == 'Linking error') {
                                            loading.dismiss();
                                            _this.presentToast(loginFail);
                                        }
                                    });
                                }
                                else if (resLogin == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    loading.dismiss();
                                    _this.presentToast(loginFail);
                                }
                            });
                        }
                    }
                ]
            });
            alert_3.present();
        }
    };
    LoginModalPage.prototype.login = function (method) {
        switch (method) {
            case "email":
                {
                    this.manualLogin();
                    break;
                }
            case "facebook":
                {
                    this.facebookLogin();
                    break;
                }
            case "google":
                {
                    this.googleLogin();
                    break;
                }
        }
    };
    LoginModalPage.prototype.manualLogin = function () {
        var _this = this;
        var loginLoading;
        var invalid;
        var loginSuccess;
        var loginFail;
        this.translate.get('LOADING_LOG_IN').subscribe(function (value) { loginLoading = value; });
        this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(function (value) { invalid = value; });
        this.translate.get('LOG_IN_SUCCESS').subscribe(function (value) { loginSuccess = value; });
        this.translate.get('LOG_IN_FAIL').subscribe(function (value) { loginFail = value; });
        var loading = this.loadingCtrl.create({
            content: loginLoading
        });
        if (this.model.username == '' || this.model.username == null || this.model.password == '' || this.model.password == null) {
            this.presentToast(invalid);
        }
        else {
            loading.present();
            var username_1 = this.model.username.toLowerCase();
            var password_1 = this.pwdEncryptor(username_1, this.model.password);
            // Step for manual login:
            // 1. Login first
            // 2. If success, then user logged in
            // 3. if error, check to database if there's an existing account with different password
            this.parseService.login(username_1, password_1).then(function (res) {
                if (res == 'success') {
                    _this.parseService.existingCheck(username_1).then(function (data) {
                        if (data == null) {
                            console.log('User not exist');
                            loading.dismiss();
                            _this.viewCtrl.dismiss();
                            _this.presentToast(loginSuccess);
                        }
                        else {
                            console.log('User exist');
                            _this.parseService.existingLinking(username_1, password_1, data, 'manual').then(function (resLink) {
                                console.log(resLink);
                                if (resLink == 'Linking success') {
                                    console.log('User login with Google');
                                    loading.dismiss();
                                    _this.viewCtrl.dismiss();
                                    _this.presentToast(loginSuccess);
                                }
                                else if (resLink == 'Linking error') {
                                    loading.dismiss();
                                    _this.presentToast(loginFail);
                                }
                            });
                        }
                    });
                }
                else if (res == 'error') {
                    loading.dismiss();
                    console.log('Wrong username or password');
                    _this.presentToast(loginFail);
                }
            }, function (err) {
                console.log(err);
                loading.dismiss();
                _this.presentToast(err.message);
            });
        }
    };
    LoginModalPage.prototype.googleLogin = function () {
        var _this = this;
        var loginLoading;
        var invalid;
        var loginSuccess;
        var loginFail;
        this.translate.get('LOADING_LOG_IN').subscribe(function (value) { loginLoading = value; });
        this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(function (value) { invalid = value; });
        this.translate.get('LOG_IN_SUCCESS').subscribe(function (value) { loginSuccess = value; });
        this.translate.get('LOG_IN_FAIL').subscribe(function (value) { loginFail = value; });
        var loading = this.loadingCtrl.create({
            content: loginLoading
        });
        this.googlePlus.login({ 'webClientId': this.globalConfig.googleWebClientId, 'offline': true }).then(function (resGooglePlugin) {
            loading.present();
            // Step for google login:
            // 1. Check existing first
            // 2. If null, then user signed up
            // 3. If exist, check to database if there's an existing account with different password
            _this.parseService.existingCheck(resGooglePlugin.email).then(function (data) {
                if (data == null) {
                    console.log('User not exist');
                    var password = _this.pwdEncryptor(resGooglePlugin.email, null);
                    _this.parseService.signup(resGooglePlugin, password, 'google').then(function (success) {
                        console.log(success);
                        loading.dismiss();
                        _this.presentToast(loginSuccess);
                        _this.viewCtrl.dismiss();
                    }, function (err) {
                        console.log(err);
                        loading.dismiss();
                        _this.presentToast(loginFail);
                    });
                }
                else {
                    console.log('User exist');
                    if (data.googleAuth == undefined && data.fbAuth == undefined) {
                        console.log('User exist with Manual account');
                        loading.dismiss();
                        _this.promptPassword(resGooglePlugin.email, data, 'manualtososmed', 'google');
                    }
                    else if (data.googleAuth != undefined) {
                        console.log('User exist with Google account');
                        _this.parseService.login(resGooglePlugin.email, data.googleAuth).then(function (res) {
                            loading.dismiss();
                            if (res == 'success') {
                                console.log('User login with Google');
                                _this.viewCtrl.dismiss();
                                _this.presentToast(loginSuccess);
                            }
                            else if (res == 'error') {
                                console.log('Password has been changed, please input your new password');
                                _this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google');
                            }
                        }, function (err) {
                            console.log(err);
                            loading.dismiss();
                            _this.presentToast(loginFail);
                        });
                    }
                    else if (data.fbAuth != undefined) {
                        console.log('User exist with Facebook account');
                        _this.parseService.login(resGooglePlugin.email, data.fbAuth).then(function (resLogin) {
                            loading.dismiss();
                            if (resLogin == 'success') {
                                _this.parseService.existingLinking(resGooglePlugin.email, data.fbAuth, data, 'google').then(function (resLink) {
                                    console.log(resLink);
                                    if (resLink == 'Linking success') {
                                        console.log('User login with Google');
                                        loading.dismiss();
                                        _this.viewCtrl.dismiss();
                                        _this.presentToast(loginSuccess);
                                    }
                                    else if (resLink == 'Linking error') {
                                        loading.dismiss();
                                        _this.presentToast(loginFail);
                                    }
                                });
                            }
                            else if (resLogin == 'error') {
                                console.log('Password has been changed, please input your new password');
                                _this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google');
                            }
                        });
                    }
                }
            });
        }).catch(function (err) {
            console.log(err);
            loading.dismiss();
            _this.presentToast(loginFail);
        });
    };
    LoginModalPage.prototype.facebookLogin = function () {
        var _this = this;
        var loginLoading;
        var invalid;
        var loginSuccess;
        var loginFail;
        this.translate.get('LOADING_LOG_IN').subscribe(function (value) { loginLoading = value; });
        this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(function (value) { invalid = value; });
        this.translate.get('LOG_IN_SUCCESS').subscribe(function (value) { loginSuccess = value; });
        this.translate.get('LOG_IN_FAIL').subscribe(function (value) { loginFail = value; });
        var loading = this.loadingCtrl.create({
            content: loginLoading
        });
        this.facebook.login(['public_profile', 'email']).then(function (resFbPlugin) {
            _this.facebook.api('/me?fields=id,email,name,first_name,last_name,gender,birthday', ['public_profile', 'email', 'user_birthday']).then(function (profile) {
                loading.present();
                // Step for facebook login:
                // 1. Check existing first
                // 2. If null, then user signed up
                // 3. If exist, check to database if there's an existing account with different password
                _this.parseService.existingCheck(profile.email).then(function (data) {
                    if (data == null) {
                        console.log('User not exist');
                        var password = _this.pwdEncryptor(profile.email, null);
                        _this.parseService.signup(profile, password, 'facebook').then(function (success) {
                            console.log(success);
                            loading.dismiss();
                            _this.presentToast(loginSuccess);
                            _this.viewCtrl.dismiss();
                        }, function (err) {
                            console.log(err);
                            loading.dismiss();
                            _this.presentToast(loginFail);
                        });
                    }
                    else {
                        console.log('User exist');
                        if (data.fbAuth == undefined && data.googleAuth == undefined) {
                            console.log('User exist with Manual account');
                            loading.dismiss();
                            _this.promptPassword(profile.email, data, 'manualtososmed', 'facebook');
                        }
                        else if (data.fbAuth != undefined) {
                            console.log('User exist with Faceboook account');
                            _this.parseService.login(profile.email, data.fbAuth).then(function (res) {
                                loading.dismiss();
                                if (res == 'success') {
                                    console.log('User login with Facebook');
                                    _this.viewCtrl.dismiss();
                                    _this.presentToast(loginSuccess);
                                }
                                else if (res == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    _this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook');
                                }
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                                _this.presentToast(loginFail);
                            });
                        }
                        else if (data.googleAuth != undefined) {
                            console.log('User exist with Google account');
                            _this.parseService.login(profile.email, data.googleAuth).then(function (resLogin) {
                                if (resLogin == 'success') {
                                    _this.parseService.existingLinking(profile.email, data.googleAuth, data, 'facebook').then(function (resLink) {
                                        console.log(resLink);
                                        if (resLink == 'Linking success') {
                                            console.log('User login with Facebook');
                                            loading.dismiss();
                                            _this.presentToast(loginSuccess);
                                            _this.viewCtrl.dismiss();
                                        }
                                        else if (resLink == 'Linking error') {
                                            loading.dismiss();
                                            _this.presentToast(loginFail);
                                        }
                                    });
                                }
                                else if (resLogin == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    _this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook');
                                }
                            });
                        }
                    }
                });
            });
        }, function (err) {
            console.log(err);
            loading.dismiss();
            _this.presentToast(loginFail);
        });
    };
    LoginModalPage.prototype.forgotPassword = function () {
        var modal = this.modalCtrl.create('ForgotPasswordPage');
        modal.present();
    };
    LoginModalPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    LoginModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login-modal',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/login-modal/login-modal.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{"LOG_IN" | translate}}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal()" color="dark">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="klikpegi-bg">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <form (ngSubmit)="login(\'email\');" id="loginForm">\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" [(ngModel)]="model.username" name="username"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"PASSWORD" | translate }}</ion-label>\n            <ion-input type="password" [(ngModel)]="model.password" name="password"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear color="dark" (click)="forgotPassword()" outline>{{"FORGOT_PASSWORD" | translate }}?</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button type="submit" block form="loginForm">{{"LOG_IN" | translate }}</button>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row padding-horizontal padding-top text-center align-items-center>\n      <ion-col>\n        <div style="height: 1px; background-color:rgb(216,216,216)">\n\n        </div>\n      </ion-col>\n      <ion-col col-2 text-center class="text-subcontent-large">\n        {{"OR" | translate }}\n      </ion-col>\n      <ion-col>\n        <div style="height: 1px; background-color:rgb(216,216,216)">\n\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row padding-vertical>\n      <ion-col text-center class="text-content-light">\n        {{"LOG_IN_WITH" | translate }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block icon-left style="background-color:#3b5998" (click)="login(\'facebook\')">\n          <ion-icon name="logo-facebook"></ion-icon>\n          Facebook\n        </button>\n      </ion-col>\n      <ion-col col-1></ion-col>\n      <ion-col>\n        <button ion-button block icon-left style="background-color:#dc4e41" (click)="login(\'google\')">\n          <ion-icon name="logo-google"></ion-icon>\n          Google\n        </button>\n      </ion-col>\n    </ion-row> -->\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/login-modal/login-modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], LoginModalPage);
    return LoginModalPage;
}());

//# sourceMappingURL=login-modal.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalPageModule", function() { return LoginModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_modal__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModalPageModule = (function () {
    function LoginModalPageModule() {
    }
    LoginModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_modal__["a" /* LoginModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login_modal__["a" /* LoginModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ]
        })
    ], LoginModalPageModule);
    return LoginModalPageModule;
}());

//# sourceMappingURL=login-modal.module.js.map

/***/ })

});
//# sourceMappingURL=20.js.map