webpackJsonp([14],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentMethodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(42);
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







var PaymentMethodPage = (function (_super) {
    __extends(PaymentMethodPage, _super);
    function PaymentMethodPage(navCtrl, navParams, app, parseService, toastCtrl, viewCtrl, alertCtrl, modalCtrl, loadingCtrl, popoverCtrl, translate, geolocation, globalConfig) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
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
        _this.bookingData.stayType = _this.getStayingType(_this.bookingData.mode);
        _this.transitPrice = _this.bookingData.priceList[_this.bookingData.duration - 1].price * (100 - _this.bookingData.discountRate) / 100;
        _this.hour24Price = _this.bookingData.pricing24 * (100 - _this.bookingData.discountRate) / 100;
        _this.nightPrice = _this.bookingData.price * _this.bookingData.duration * (100 - _this.bookingData.discountRate) / 100;
        _this.uniqueDigit = _this.bookingData.uniqueCode;
        console.log("pricedetail");
        console.log(_this.transitPrice);
        console.log(_this.bookingData.roomQty);
        console.log(_this.uniqueDigit);
        return _this;
    }
    PaymentMethodPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.pop({
                animate: true,
                animation: 'ios-transition',
                direction: 'back'
            });
        };
    };
    PaymentMethodPage.prototype.getStayingType = function (code) {
        var transit;
        var hours;
        var night;
        var other;
        this.translate.get('TRANSIT').subscribe(function (value) { transit = value; });
        this.translate.get('HOURS').subscribe(function (value) { hours = value; });
        this.translate.get('NIGHT').subscribe(function (value) { night = value; });
        this.translate.get('OTHER').subscribe(function (value) { other = value; });
        switch (code.toString()) {
            case '0':
                return transit;
            case '1':
                return '24 ' + hours;
            case '2':
                return '1 ' + night;
            default:
                return other;
        }
    };
    PaymentMethodPage.prototype.showTotalPrice = function (price) {
        console.log(price);
    };
    PaymentMethodPage.prototype.paymethod = function (methodtype) {
        switch (methodtype) {
            case 1:
                console.log("Masuk 1a");
                this.navCtrl.push("MethodTransferPage", {
                    classDetail: this.bookingData
                });
                break;
            case 2:
                console.log("Masuk 2a");
                this.navCtrl.push("MethodCreditPage", {
                    classDetail: this.bookingData
                });
                break;
        }
    };
    PaymentMethodPage.prototype.presentPopover = function (myEvent) {
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
    ], PaymentMethodPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], PaymentMethodPage.prototype, "nav", void 0);
    PaymentMethodPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment-method',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/payment-method/payment-method.html"*/'<!--\n  Generated template for the PaymentConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="cls-search-rest" [ngClass]="searchModeClass">\n\n    <ion-navbar>\n        <ion-title>{{"PAYMENT_METHOD" | translate}}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                <ion-icon name="md-more"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar class="extra-header">\n        <ion-title no-padding class="custom-header">\n      <span class="text-tax">\n        {{"PRICING_NOTICE" | translate }}\n      </span>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="cls-bck-grey">\n    <ion-grid padding>\n        <ion-row align-items-center>\n            <ion-col class="text-title">\n                {{bookingData.propName}}\n            </ion-col>\n            <!-- <ion-col text-right>\n            <button ion-button small clear color="dark">DETAILS</button>\n          </ion-col> -->\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <span class="text-subtitle">{{"ROOM_TYPE" | translate}}</span>\n                <br />\n                <span class="text-content">{{bookingData.name}}</span>\n            </ion-col>\n            <ion-col>\n                <span class="text-subtitle">{{"DURATION" | translate}}</span>\n                <br />\n                <span class="text-content" *ngIf="bookingData.mode == 0">{{bookingData.stayType}} • {{bookingData.duration}} {{"HOUR(S)" | translate}}</span>\n                <span class="text-content" *ngIf="bookingData.mode == 1">{{bookingData.stayType}}</span>\n                <span class="text-content" *ngIf="bookingData.mode == 2">{{bookingData.duration}} {{"NIGHT(S)" | translate}}</span>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <span class="text-subtitle">Check In</span>\n                <br />\n                <span class="text-content" *ngIf="bookingData.mode != 2">{{bookingData.propDetail.checkIn | date:\'d MMM y • H:mm\'}}</span>\n                <span class="text-content" *ngIf="bookingData.mode == 2">{{bookingData.checkIn | date:\'d MMM y\'}}</span>\n            </ion-col>\n            <ion-col>\n                <span class="text-subtitle">{{"TOTAL_PRICE" | translate}}</span>\n                <br />\n                <span text-right *ngIf="bookingData.mode == 0" class="text-price">{{currencySymbol}} {{transitPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>\n                <span text-right *ngIf="bookingData.mode == 1" class="text-price">{{currencySymbol}} {{hour24Price * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>\n                <span text-right *ngIf="bookingData.mode == 2" class="text-price">{{currencySymbol}} {{nightPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div class="separator-with-shadow">\n\n    </div>\n    <ion-grid padding>\n        <ion-row align-items-center>\n            <button class=\'hidden-button\' ion-button (click)="paymethod(1)">\n            <ion-col class="text-header">\n                {{"TRANSFER" | translate}}\n            </ion-col>\n            <ion-col text-right>\n                &gt;\n          </ion-col>\n            </button>\n        </ion-row>\n        <ion-row>\n            <button class=\'hidden-button\' ion-button (click)="paymethod(1)">\n            <ion-col>\n                <img class="payment-icon" src="assets/images/payment/bca.png" />\n            </ion-col>\n            </button>\n        </ion-row>\n    </ion-grid>\n    <div class="separator-with-shadow">\n\n    </div>\n    <ion-grid padding>\n        <ion-row align-items-center>\n            <button class=\'hidden-button\' ion-button (click)="paymethod(2)">\n            <ion-col class="text-header">\n                {{"CREDIT_CARD" | translate}}\n            </ion-col>\n            <ion-col text-right>\n                &gt;\n              </ion-col>\n            </button>\n        </ion-row>\n        <ion-row>\n            <button class=\'hidden-button\' ion-button (click)="paymethod(2)">\n            <ion-col>\n                <img class="payment-icon" src="assets/images/payment/visa.png" />&nbsp;\n                <img class="payment-icon" src="assets/images/payment/mastercard.png" />\n            </ion-col>\n            </button>\n        </ion-row>\n    </ion-grid>\n    <div class="separator-with-shadow">\n\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/payment-method/payment-method.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
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
    ], PaymentMethodPage);
    return PaymentMethodPage;
}(__WEBPACK_IMPORTED_MODULE_4__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=payment-method.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageModule", function() { return PaymentMethodPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_method__ = __webpack_require__(1117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentMethodPageModule = (function () {
    function PaymentMethodPageModule() {
    }
    PaymentMethodPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__payment_method__["a" /* PaymentMethodPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__payment_method__["a" /* PaymentMethodPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__payment_method__["a" /* PaymentMethodPage */]
            ]
        })
    ], PaymentMethodPageModule);
    return PaymentMethodPageModule;
}());

//# sourceMappingURL=payment-method.module.js.map

/***/ })

});
//# sourceMappingURL=14.js.map