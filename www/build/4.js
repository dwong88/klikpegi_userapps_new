webpackJsonp([4],{

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_event_emitter__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(122);
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
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserProfilePage = (function (_super) {
    __extends(UserProfilePage, _super);
    function UserProfilePage(app, navCtrl, navParams, viewCtrl, parseService, loadingCtrl, alertCtrl, toastCtrl, globalEvent, modalCtrl, popoverCtrl, translate, facebook, googlePlus, geolocation, globalConfig) {
        var _this = _super.call(this, navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, loadingCtrl, toastCtrl, translate, parseService, facebook, googlePlus, geolocation, globalConfig) || this;
        _this.app = app;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.parseService = parseService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.toastCtrl = toastCtrl;
        _this.globalEvent = globalEvent;
        _this.modalCtrl = modalCtrl;
        _this.popoverCtrl = popoverCtrl;
        _this.translate = translate;
        _this.facebook = facebook;
        _this.googlePlus = googlePlus;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        _this.model = {};
        _this.user = '';
        _this.isOwner = false;
        _this.toggleText = 'Switch to owner menu';
        _this.ownerStatus = false;
        _this.root = '';
        _this.userExist = false;
        return _this;
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserProfilePage');
    };
    UserProfilePage.prototype.ionViewDidEnter = function () {
        if (this.parseService.getCurrentUser() != null) {
            console.log('user exist');
            this.userExist = true;
            this.user = this.parseService.getCurrentUser();
            console.log(this.user);
        }
        else {
            console.log('ga ada user');
            this.userExist = false;
        }
        // this.root = this.app.getRootNav();
    };
    UserProfilePage.prototype.editProfile = function () {
        this.navCtrl.push("EditProfilePage");
    };
    UserProfilePage.prototype.presentLoginModal = function () {
        var _this = this;
        var login = this.modalCtrl.create("LoginPage");
        login.present();
        login.onDidDismiss(function (data) {
            if (_this.parseService.getCurrentUser() != null) {
                console.log('user exist');
                _this.userExist = true;
                _this.user = _this.parseService.getCurrentUser();
            }
            else {
                console.log('ga ada user');
                _this.userExist = false;
            }
        });
    };
    UserProfilePage.prototype.logout = function () {
        var _this = this;
        var logoutLoading;
        var logoutSuccess;
        var logoutFail;
        this.translate.get('LOADING_LOG_OUT').subscribe(function (value) { logoutLoading = value; });
        this.translate.get('LOG_OUT_SUCCESS').subscribe(function (value) { logoutSuccess = value; });
        this.translate.get('LOG_OUT_FAIL').subscribe(function (value) { logoutFail = value; });
        var loading = this.loadingCtrl.create({
            content: logoutLoading
        });
        loading.present();
        console.log("prof1");
        this.parseService.logoutUser().then(function (success) {
            console.log("prof2");
            console.log(success);
            loading.dismiss();
            _this.globalEvent.isLoggedIn.emit(false);
            _this.navCtrl.popToRoot().then(_this.navCtrl.parent.select(0));
            // this.navCtrl.popToRoot();
            // this.navCtrl.setRoot(TabsPage, {tabIndex: 0});
            _this.presentToast(logoutSuccess);
            console.log("prof3");
        }, function (err) {
            console.log("prof4");
            loading.dismiss();
            console.log("prof5");
            _this.presentToast(logoutFail);
        });
    };
    UserProfilePage.prototype.presentRegisterModal = function () {
        var register = this.modalCtrl.create("SignUpPage");
        register.present();
    };
    UserProfilePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create("PopoverPage", {
            data: [2, 3]
        }, {
            cssClass: 'backdropOpacity'
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
        });
    };
    UserProfilePage.prototype.login = function (method) {
        switch (method) {
            case "email": {
                this.manualLogin(this.model.username, this.model.password, __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.RELOAD_ROOT, 'UserProfilePage');
                break;
            }
            case "facebook": {
                this.facebookLogin(__WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.RELOAD_ROOT, __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                break;
            }
            case "google": {
                this.googleLogin(__WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.RELOAD_ROOT, __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                break;
            }
        }
    };
    UserProfilePage.prototype.helpCenter = function () {
        this.navCtrl.push("HelpPage");
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-profile',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/user-profile/user-profile.html"*/'<!--\n  Generated template for the UserProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="klikpegihead">\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="border-bottom: 0px;">{{"ACCOUNT" | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="klikpegi-bg" *ngIf="!userExist">\n  <ion-grid padding-horizontal>\n    <ion-row padding-vertical>\n      <ion-col text-center>\n        <img class="ghours-logo-full" scroll="false" src="assets/images/ghours_full.png" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-bottom class="row-hello-prof">\n      <ion-col text-center>\n        <span class="text-content-light header-greet darkcolor">\n          {{"YOU_NEED_TO_LOGIN_SUBTITLE.FIRST" | translate}}\n          <br /> {{"YOU_NEED_TO_LOGIN_SUBTITLE.SECOND" | translate}}\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-vertical class="cls-submit-form-login">\n      <ion-col>\n        <button class="bordergrey" ion-button block (click)="presentLoginModal()" style="font-weight: bold;" [innerHTML]="\'SIGN_IN_SPACE\' | translate"></button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-bottom class="cls-submit-form-login" style="margin-top: -1rem;">\n      <ion-col>\n        <button class="bordergrey" ion-button block icon-left style="background-color:white; color: #00447C; font-weight: bold;" (click)="login(\'facebook\')">\n          <ion-icon name="logo-facebook"></ion-icon>&nbsp;\n          F a c e b o o k\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-bottom class="cls-submit-form-login" style="margin-top: -1rem;">\n      <ion-col>\n        <button class="bordergrey" ion-button block icon-left style="background-color: white; color: red; font-weight: bold;" (click)="login(\'google\')">\n          <ion-icon name="logo-google"></ion-icon>&nbsp;\n          G o o g l e\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-bottom text-center align-items-center class="cls-form-devider" style="margin-top: -1rem;">\n      <ion-col>\n        <div class="div-devider">\n\n        </div>\n      </ion-col>\n      <ion-col col-2 text-center class="text-subcontent-large">\n        {{"OR" | translate}}\n      </ion-col>\n      <ion-col>\n        <div class="div-devider">\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style="margin-top: -1rem;">\n      <ion-col class="text-content-light">\n        {{"NEW_GHOURSID" | translate}}?\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="cls-submit-form-login">\n      <ion-col>\n        <button class="bgwhite" ion-button block (click)="presentRegisterModal()" style="font-weight: bold;" [innerHTML]="\'CREATE_ACCOUNT\' | translate"></button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n\n<ion-content *ngIf="userExist">\n  <div class="cls-profile-login"></div>\n  <ion-list>\n\n    <ion-item no-lines>\n      <ion-row padding class="row-hello-prof">\n        <ion-col>\n          <span class="text-hello-dark-real darkcolor">{{ "HELLO" | translate }},</span>\n          <br />\n          <span class="text-content-light header-greet darkcolor-real">\n            {{user.email}}\n          </span>\n            <div class="edit-icon" (click)="editProfile()">\n                <img class="icon-img" src="assets/images/profile-icon/edit.png" />\n            </div>\n        </ion-col>\n      </ion-row>\n        <div padding>\n\n        </div>\n    </ion-item>\n\n\n    <ion-item no-lines (click)="helpCenter()">\n      <ion-avatar item-start>\n        <img class="avatar-img" src="assets/images/profile-icon/help.png" />\n      </ion-avatar>\n      <span class="text-content">{{"HELP_CENTER" | translate}}</span>\n      <br />\n      <span class="text-subcontent">{{"HELP_CENTER_SUBTITLE" | translate}}</span>\n    </ion-item>\n    <div class="div-separator">\n\n    </div>\n    <ion-item no-lines>\n      <ion-avatar item-start>\n        <img class="avatar-img" src="assets/images/profile-icon/refundable.png" />\n      </ion-avatar>\n      <span class="text-content">{{"MY_REFUND" | translate}}</span>\n      <br />\n      <span class="text-subcontent">{{"MY_REFUND_SUBTITLE" | translate}}</span>\n    </ion-item>\n    <div class="div-separator">\n\n    </div>\n    <ion-item no-lines>\n      <ion-avatar item-start>\n        <img class="avatar-img" src="assets/images/profile-icon/smartphone.png" />\n      </ion-avatar>\n      <span class="text-content">{{"PUSH_NOTIFICATION" | translate}}</span>\n      <br />\n      <span class="text-subcontent">{{"PUSH_NOTIFICATION_SUBTITLE" | translate}}</span>\n    </ion-item>\n    <div class="section-separator">\n\n    </div>\n    <ion-item no-lines (click)=logout()>\n      <ion-avatar item-start>\n        <img class="avatar-img" src="assets/images/profile-icon/logout.png" />\n      </ion-avatar>\n      <span class="text-content">{{"LOG_OUT" | translate}}</span>\n    </ion-item>\n    <div class="section-separator">\n\n    </div>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/user-profile/user-profile.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_event_emitter__["a" /* GlobalEventEmitterProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], UserProfilePage);
    return UserProfilePage;
}(__WEBPACK_IMPORTED_MODULE_9__components_LoginHandler__["a" /* LoginHandler */]));

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile__ = __webpack_require__(1127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserProfilePageModule = (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__user_profile__["a" /* UserProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__user_profile__["a" /* UserProfilePage */]
            ]
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ })

});
//# sourceMappingURL=4.js.map