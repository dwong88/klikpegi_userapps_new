webpackJsonp([19],{

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodCreditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(22);
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








var MethodCreditPage = (function (_super) {
    __extends(MethodCreditPage, _super);
    function MethodCreditPage(formBuilder, navCtrl, navParams, app, parseService, toastCtrl, viewCtrl, alertCtrl, modalCtrl, loadingCtrl, popoverCtrl, translate, geolocation, globalConfig) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.formBuilder = formBuilder;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.app = app;
        _this.parseService = parseService;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.alertCtrl = alertCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.popoverCtrl = popoverCtrl;
        _this.translate = translate;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        _this.bookingData = '';
        _this.transitPrice = 0;
        _this.hour24Price = 0;
        _this.nightPrice = 0;
        _this.parseService.getGlobalSettings().then(function (data) {
            _this.bank = data.bank[0];
            return _this.bank;
        });
        _this.bookingData = navParams.get('classDetail');
        console.log(_this.bookingData.propDetail);
        _this.transitPrice = _this.bookingData.priceList[_this.bookingData.duration - 1].price * (100 - _this.bookingData.discountRate) / 100;
        _this.hour24Price = _this.bookingData.pricing24 * (100 - _this.bookingData.discountRate) / 100;
        _this.nightPrice = _this.bookingData.price * _this.bookingData.duration * (100 - _this.bookingData.discountRate) / 100;
        _this.footerIsHidden = false;
        _this.paymentForm = _this.formBuilder.group({
            cc_no: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required])],
            cc_valid_until: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required])],
            cc_cvv: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required])],
            cc_name: ['', __WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_7__angular_forms__["Validators"].required])]
        });
        return _this;
    }
    MethodCreditPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.pop({
                animate: true,
                animation: 'ios-transition',
                direction: 'back'
            });
        };
    };
    MethodCreditPage.prototype.bookRoom = function () {
        var _this = this;
        var bookingLoading;
        var bookingSuccess;
        this.translate.get('BOOKING_ROOM').subscribe(function (value) { bookingLoading = value; });
        this.translate.get('BOOKING_SUCCESS').subscribe(function (value) { bookingSuccess = value; });
        var self = this;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: bookingLoading,
        });
        if (this.parseService.getCurrentUser() != null) {
            console.log(this.bookingData);
            loading.present();
            this.parseService.bookRoom(this.bookingData).then(function (success) {
                //this.parseService.sendEmail(this.bookingData, "bookingPlacement");
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: bookingSuccess,
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
                _this.navCtrl.popToRoot().then(_this.navCtrl.parent.select(2));
            }, function (err) {
                loading.dismiss();
                var toast = _this.toastCtrl.create({
                    message: err,
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
            });
        }
        else {
            this.presentAlert();
        }
    };
    MethodCreditPage.prototype.presentAlert = function () {
        var _this = this;
        var loginTitle;
        var loginSubTitle;
        var loginBtn;
        var registerBtn;
        var cancelBtn;
        this.translate.get('LOG_IN_REQUIRED').subscribe(function (value) { loginTitle = value; });
        this.translate.get('LOG_IN_TO_BOOK_ROOM').subscribe(function (value) { loginSubTitle = value; });
        this.translate.get('LOG_IN').subscribe(function (value) { loginBtn = value; });
        this.translate.get('REGISTER').subscribe(function (value) { registerBtn = value; });
        this.translate.get('CANCEL').subscribe(function (value) { cancelBtn = value; });
        var alert = this.alertCtrl.create({
            title: loginTitle,
            subTitle: loginSubTitle,
            buttons: [
                {
                    text: loginBtn,
                    handler: function () {
                        var login = _this.modalCtrl.create("LoginPage");
                        login.present();
                    }
                },
                {
                    text: registerBtn,
                    handler: function () {
                        var register = _this.modalCtrl.create("SignUpPage");
                        register.present();
                    }
                },
                cancelBtn
            ]
        });
        alert.present();
    };
    MethodCreditPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create("PopoverPage", {
            data: [4, 1, 2]
        }, {
            cssClass: 'backdropOpacity'
        });
        popover.present({
            ev: myEvent
        });
        popover.onDidDismiss(function (data) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], MethodCreditPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MethodCreditPage.prototype, "nav", void 0);
    MethodCreditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-method-credit',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/method-credit/method-credit.html"*/'<!--\n  Generated template for the PaymentConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="cls-search-rest" [ngClass]="searchModeClass">\n\n    <ion-navbar>\n        <ion-title>{{"CREDIT_CARD" | translate}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                <ion-icon name="md-more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar class="extra-header">\n        <ion-title no-padding class="custom-header">\n      <span class="text-tax">\n        {{"PRICING_NOTICE" | translate }}\n      </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="cls-bck-grey">\n    <div padding class="text-header">\n        {{"PRICE_DETAILS" | translate}}\n    </div>\n\n    <ion-grid padding class="realcolor">\n        <ion-row class="catch-eye">\n            <ion-col>\n                {{bookingData.propName}}\n            </ion-col>\n            <ion-col text-right>\n                <span *ngIf="bookingData.mode == 0">{{currencySymbol}} {{transitPrice * bookingData.roomQty | number:\'1.0-0\'}}</span>\n                <span *ngIf="bookingData.mode == 1">{{currencySymbol}} {{hour24Price * bookingData.roomQty | number:\'1.0-0\'}}</span>\n                <span *ngIf="bookingData.mode == 2">{{currencySymbol}} {{nightPrice * bookingData.roomQty | number:\'1.0-0\'}}</span>\n            </ion-col>\n        </ion-row>\n        <ion-row class="catch-eye">\n            <ion-col>\n                {{"UNIQUE_CODE" | translate}}\n            </ion-col>\n            <ion-col text-right>\n                - {{bookingData.uniqueCode}}\n            </ion-col>\n        </ion-row>\n\n        <ion-row class="catch-eye">\n            <ion-col>\n                {{"TOTAL_PRICE" | translate}}\n            </ion-col>\n            <ion-col text-right>\n                <span *ngIf="bookingData.mode == 0" class="text-price">{{currencySymbol}} {{transitPrice * bookingData.roomQty - bookingData.uniqueCode | number:\'1.0-0\'}}</span>\n                <span *ngIf="bookingData.mode == 1" class="text-price">{{currencySymbol}} {{hour24Price * bookingData.roomQty - bookingData.uniqueCode | number:\'1.0-0\'}}</span>\n                <span *ngIf="bookingData.mode == 2" class="text-price">{{currencySymbol}} {{nightPrice * bookingData.roomQty - bookingData.uniqueCode | number:\'1.0-0\'}}</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <div class="separator-with-shadow">\n\n    </div>\n\n    <form [formGroup]="paymentForm">\n        <ion-grid padding>\n            <ion-row>\n                <ion-col>\n                    <ion-input type="number" formControlName="cc_no" [(ngModel)]="cc_no" placeholder="{{\'CREDIT_CARD_NUMBER\' | translate}}"></ion-input>\n                    <div *ngIf="!paymentForm.controls.cc_no.valid && paymentForm.controls.cc_no.dirty" class="div-error-msg">\n                        <p>{{"INVALID_CREDIT_CARD_NO" | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 text-right style="padding-top: 20px;">\n                    <img class="payment-icon" src="assets/images/payment/visa.png" />&nbsp;\n                    <img class="payment-icon" src="assets/images/payment/mastercard.png" />\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-input type="text" formControlName="cc_name" [(ngModel)]="cc_name" placeholder="{{\'CREDIT_CARD_NAME\' | translate}}"></ion-input>\n                    <div *ngIf="!paymentForm.controls.cc_name.valid && paymentForm.controls.cc_name.dirty" class="div-error-msg">\n                        <p>{{"INVALID_NAME" | translate}}</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col>\n                    <ion-input type="text" formControlName="cc_valid_until" [(ngModel)]="cc_valid_until" placeholder="{{\'VALID_UNTIL\' | translate}}"></ion-input>\n                    <div *ngIf="!paymentForm.controls.cc_valid_until.valid && paymentForm.controls.cc_valid_until.dirty" class="div-error-msg">\n                        <p>{{"INVALID_VALID_UNTIL" | translate}}</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>\n                <ion-col>\n                    <ion-input type="password" formControlName="cc_cvv" [(ngModel)]="cc_cvv" placeholder="{{\'CVV3\' | translate}}"></ion-input>\n                    <div *ngIf="!paymentForm.controls.cc_cvv.valid && paymentForm.controls.cc_cvv.dirty" class="div-error-msg">\n                        <p>{{"INVALID_CVV3" | translate}}</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n    <div class="separator-with-shadow">\n\n    </div>\n</ion-content>\n\n<ion-footer padding-horizontal [ngClass]="searchModeClass">\n    <ion-row align-items-center>\n        <!--<ion-col text-justify class="text-content">-->\n        <!--{{"YOU_NEED_TO_PAY" | translate}}-->\n        <!--<br/>-->\n        <!--<span class="text-price" *ngIf="bookingData.mode == 0">{{transitPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>-->\n        <!--<span class="text-price" *ngIf="bookingData.mode == 1">{{hour24Price * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>-->\n        <!--<span class="text-price" *ngIf="bookingData.mode == 2">{{nightPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>-->\n        <!--</ion-col>-->\n        <!--<ion-col>-->\n        <!--<button ion-button block (click)="bookRoom()">OK</button>-->\n        <!--</ion-col>-->\n        <ion-col>\n            <button ion-button block (click)="bookRoom()">{{"PAY_NOW" | translate}}</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/method-credit/method-credit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], MethodCreditPage);
    return MethodCreditPage;
}(__WEBPACK_IMPORTED_MODULE_4__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=method-credit.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodCreditPageModule", function() { return MethodCreditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__method_credit__ = __webpack_require__(1112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MethodCreditPageModule = (function () {
    function MethodCreditPageModule() {
    }
    MethodCreditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__method_credit__["a" /* MethodCreditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__method_credit__["a" /* MethodCreditPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__method_credit__["a" /* MethodCreditPage */]
            ]
        })
    ], MethodCreditPageModule);
    return MethodCreditPageModule;
}());

//# sourceMappingURL=method-credit.module.js.map

/***/ })

});
//# sourceMappingURL=19.js.map