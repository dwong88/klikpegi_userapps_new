webpackJsonp([15],{

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(221);
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
 * Generated class for the PaymentConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentDetailPage = (function (_super) {
    __extends(PaymentDetailPage, _super);
    function PaymentDetailPage(navCtrl, navParams, app, parseService, toastCtrl, viewCtrl, alertCtrl, modalCtrl, loadingCtrl, popoverCtrl, translate, geolocation, globalConfig, inAppbrowser) {
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
        _this.inAppbrowser = inAppbrowser;
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
        _this.footerIsHidden = false;
        console.log(_this.hour24Price, _this.nightPrice);
        _this.generateUniqueCode();
        _this.intervalWindow = false;
        return _this;
    }
    PaymentDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.pop({
                animate: true,
                animation: 'ios-transition',
                direction: 'back'
            });
        };
    };
    PaymentDetailPage.prototype.getStayingType = function (code) {
        var transit;
        var hours;
        var night;
        var other;
        this.translate.get('TRANSIT').subscribe(function (value) {
            transit = value;
        });
        this.translate.get('HOURS').subscribe(function (value) {
            hours = value;
        });
        this.translate.get('NIGHT').subscribe(function (value) {
            night = value;
        });
        this.translate.get('OTHER').subscribe(function (value) {
            other = value;
        });
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
    PaymentDetailPage.prototype.showTotalPrice = function (price) {
        console.log(price);
    };
    PaymentDetailPage.prototype.bookRoom = function () {
    };
    PaymentDetailPage.prototype.selectPaymentMethod = function () {
        var _this = this;
        var bookingLoading;
        var bookingSuccess;
        this.translate.get('BOOKING_ROOM').subscribe(function (value) {
            bookingLoading = value;
        });
        this.translate.get('BOOKING_SUCCESS').subscribe(function (value) {
            bookingSuccess = value;
        });
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
                // console.log("stringify success");
                // console.log(this.parseService.bookedRoomOrderId);
                // console.log(JSON.stringify(success));
                if (__WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].DEVELOPMENT_MODE) {
                    _this.refWindow = window.open(__WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].GHOURS_PAYMENT_URL + "/" + _this.parseService.bookedRoomOrderId + "/" + __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SRC_PAYMENT, '_blank', __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].IN_APP_BROWSER_OPTIONS);
                }
                else {
                    _this.refWindow = _this.inAppbrowser.create(__WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].GHOURS_PAYMENT_URL + "/" + _this.parseService.bookedRoomOrderId + "/" + __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SRC_PAYMENT, '_blank', __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].IN_APP_BROWSER_OPTIONS);
                }
                _this.refWindow.on("loadstop").subscribe(function (event) {
                    console.log("masuk subscribe loadstop");
                    _this.refWindow.executeScript({ code: "localStorage.setItem( 'payment_status', '" + __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].PAYMENT_STATUS.NEW + "' );" });
                    // Start an interval
                    _this.intervalWindow = setInterval((function () {
                        var _this = this;
                        var statusPayment = __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].PAYMENT_STATUS.NEW, isGetReturn = false;
                        var inReturn = setInterval(function () {
                            if (isGetReturn) {
                                clearInterval(inReturn);
                                // If a name was set, clear the interval and close the InAppBrowser.
                                if (statusPayment != __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].PAYMENT_STATUS.NEW) {
                                    if (_this.intervalWindow !== false)
                                        clearInterval(_this.intervalWindow);
                                    _this.refWindow.close();
                                }
                            }
                        }, 300);
                        // Execute JavaScript to check for the existence of a name in the
                        // child browser's localStorage.
                        this.refWindow.executeScript({
                            code: "localStorage.getItem( 'payment_status' )"
                        }, function (values) {
                            isGetReturn = true;
                            statusPayment = values[0];
                        });
                    }).bind(_this), 1000);
                });
                _this.refWindow.on("exit").subscribe(function (event) {
                    console.log("masuk subscribe exit");
                    if (_this.intervalWindow !== false)
                        clearInterval(_this.intervalWindow);
                    _this.navCtrl.popToRoot().then(function () {
                        _this.navCtrl.parent.select(2);
                        // var selTab = this.navCtrl.parent.getSelected();
                        // selTab.rootParams = {'statusCode': 2};
                    });
                });
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
        //
        // this.navCtrl.push("PaymentMethodPage", {
        //     classDetail: this.bookingData
        // });
    };
    PaymentDetailPage.prototype.presentAlert = function () {
        var _this = this;
        var loginTitle;
        var loginSubTitle;
        var loginBtn;
        var registerBtn;
        var cancelBtn;
        this.translate.get('LOG_IN_REQUIRED').subscribe(function (value) {
            loginTitle = value;
        });
        this.translate.get('LOG_IN_TO_BOOK_ROOM').subscribe(function (value) {
            loginSubTitle = value;
        });
        this.translate.get('LOG_IN').subscribe(function (value) {
            loginBtn = value;
        });
        this.translate.get('REGISTER').subscribe(function (value) {
            registerBtn = value;
        });
        this.translate.get('CANCEL').subscribe(function (value) {
            cancelBtn = value;
        });
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
    // presentLoginModal() {
    //   var bookingLoading; var bookingSuccess;
    //   this.translate.get('BOOKING_ROOM').subscribe(value => { bookingLoading = value; });
    //   this.translate.get('BOOKING_SUCCESS').subscribe(value => { bookingSuccess = value; });
    //
    //   let self = this;
    //   let loading = this.loadingCtrl.create({
    //     spinner: 'hide',
    //     content: bookingLoading,
    //   });
    //   // this.navCtrl.push(LoginModalPage)
    //   let login = this.modalCtrl.create("LoginModalPage");
    //   login.present();
    //
    //   login.onDidDismiss(data => {
    //     if (this.parseService.getCurrentUser() != null) {
    //       loading.present()
    //       this.parseService.bookRoom(this.bookingData).then(success => {
    //         loading.dismiss()
    //         let toast = this.toastCtrl.create({
    //           message: bookingSuccess,
    //           duration: 1000,
    //           position: 'bottom'
    //         })
    //         toast.present();
    //         // this.navCtrl.setRoot(TabsPage)
    //         this.navCtrl.popToRoot().then(
    //           this.navCtrl.parent.select(1)
    //         );
    //       });
    //     }
    //
    //   });
    // }
    PaymentDetailPage.prototype.generateUniqueCode = function () {
        if (__WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].KODE_UNIQUE == 0) {
            var random = Math.random() * 999;
            __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].KODE_UNIQUE = Math.floor(random);
        }
        this.uniqueDigit = __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].KODE_UNIQUE;
        this.bookingData.uniqueCode = __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */].KODE_UNIQUE;
    };
    PaymentDetailPage.prototype.presentPopover = function (myEvent) {
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
    ], PaymentDetailPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], PaymentDetailPage.prototype, "nav", void 0);
    PaymentDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment-detail',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/payment-detail/payment-detail.html"*/'<!--\n  Generated template for the PaymentConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="cls-search-rest" [ngClass]="searchModeClass">\n\n  <ion-navbar>\n    <ion-title>{{"BOOKING_CONFIRMATION" | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="extra-header">\n    <ion-title no-padding class="custom-header">\n      <span class="text-tax">\n        {{"PRICING_NOTICE" | translate }}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="cls-bck-grey">\n  <ion-grid padding>\n    <ion-row align-items-center>\n      <ion-col class="text-title">\n        {{bookingData.propName}}\n      </ion-col>\n      <!-- <ion-col text-right>\n      <button ion-button small clear color="dark">DETAILS</button>\n    </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">{{"ROOM_TYPE" | translate}}</span>\n        <br />\n        <span class="text-content">{{bookingData.name}}</span>\n      </ion-col>\n      <ion-col>\n        <span class="text-subtitle">{{"DURATION" | translate}}</span>\n        <br />\n        <span class="text-content" *ngIf="bookingData.mode == 0">{{bookingData.stayType}} • {{bookingData.duration}} {{"HOUR(S)" | translate}}</span>\n        <span class="text-content" *ngIf="bookingData.mode == 1">{{bookingData.stayType}}</span>\n        <span class="text-content" *ngIf="bookingData.mode == 2">{{bookingData.duration}} {{"NIGHT(S)" | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">Check In</span>\n        <br />\n        <span class="text-content" *ngIf="bookingData.mode != 2">{{bookingData.propDetail.checkIn | date:\'d MMM y • H:mm\'}}</span>\n        <span class="text-content" *ngIf="bookingData.mode == 2">{{bookingData.checkIn | date:\'d MMM y\'}}</span>\n      </ion-col>\n      <!--<ion-col>-->\n        <!--<span class="text-subtitle">Check Out</span>-->\n        <!--<br />-->\n        <!--<span class="text-content" *ngIf="bookingData.mode != 2">{{bookingData.checkOut | date:\'d MMM y • H:mm\'}}</span>-->\n        <!--<span class="text-content" *ngIf="bookingData.mode == 2">{{bookingData.checkOut | date:\'d MMM y \'}}{{bookingData.propDetail.checkOut | date:\'• H:mm\'}}</span>-->\n      <!--</ion-col>-->\n    </ion-row>\n  </ion-grid>\n  <div class="separator-with-shadow">\n\n  </div>\n  <!--<ion-grid padding>-->\n    <!--<ion-row align-items-center>-->\n      <!--<ion-col class="text-header">-->\n        <!--Transfer to-->\n      <!--</ion-col>-->\n      <!--&lt;!&ndash; <ion-col text-right>-->\n      <!--<button ion-button small clear color="dark">DETAILS</button>-->\n    <!--</ion-col> &ndash;&gt;-->\n    <!--</ion-row>-->\n    <!--<ion-row>-->\n      <!--<ion-col>-->\n        <!--<span class="text-subtitle">{{"BANK_NAME" | translate}}</span>-->\n        <!--<br />-->\n        <!--<span class="text-content">{{bank?.bankName || \'-\'}}</span>-->\n      <!--</ion-col>-->\n      <!--<ion-col>-->\n        <!--<span class="text-subtitle">{{"ACCOUNT_NUMBER" | translate}}</span>-->\n        <!--<br />-->\n        <!--<span class="text-content">{{bank?.bankAccount || \'-\'}}</span>-->\n      <!--</ion-col>-->\n    <!--</ion-row>-->\n    <!--<ion-row>-->\n      <!--<ion-col>-->\n        <!--<span class="text-subtitle">{{"ACCOUNT_HOLDER_NAME" | translate}}</span>-->\n        <!--<br />-->\n        <!--<span class="text-content">klikpegi.com</span>-->\n      <!--</ion-col>-->\n      <!--<ion-col>-->\n        <!--<span class="text-subtitle">{{"TOTAL_AMOUNT" | translate}}</span>-->\n        <!--<br />-->\n        <!--&lt;!&ndash; <span class="text-content"></span> &ndash;&gt;-->\n        <!--<span class="text-price" *ngIf="bookingData.mode == 0">{{transitPrice * bookingData.roomQty - uniqueDigit | number:\'1.0-0\'}}</span>-->\n        <!--<span class="text-price" *ngIf="bookingData.mode == 1">{{hour24Price * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>-->\n        <!--<span class="text-price" *ngIf="bookingData.mode == 2">{{nightPrice * bookingData.roomQty - uniqueDigit | number:\'1.0-0\'}}</span>-->\n      <!--</ion-col>-->\n    <!--</ion-row>-->\n  <!--</ion-grid>-->\n  <!--<div class="separator">-->\n\n  <!--</div>-->\n  <ion-grid padding>\n    <ion-row align-items-center>\n      <ion-col class="text-header">\n        {{"PRICE_DETAILS" | translate}}\n      </ion-col>\n      <!-- <ion-col text-right>\n    <button ion-button small clear color="dark">DETAILS</button>\n  </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-content" *ngIf="bookingData.mode == 0">{{bookingData.duration}} {{"HOUR(S)" | translate}} • {{bookingData.roomQty}} room(s)</span>\n        <span class="text-content" *ngIf="bookingData.mode == 1">{{bookingData.stayType}} • {{bookingData.roomQty}} room(s) </span>\n        <span class="text-content" *ngIf="bookingData.mode == 2">{{bookingData.duration}} {{"NIGHT(S)" | translate}} • {{bookingData.roomQty}} room(s)</span>\n      </ion-col>\n      <ion-col text-right>\n        <span text-right class="text-content" *ngIf="bookingData.mode == 0">{{currencySymbol}} {{bookingData.priceList[bookingData.duration-1].price * bookingData.roomQty | number:\'1.0-0\'}}</span>\n        <span text-right class="text-content" *ngIf="bookingData.mode == 1">{{currencySymbol}} {{bookingData.pricing24 * bookingData.roomQty | number:\'1.0-0\'}}</span>\n        <span text-right class="text-content" *ngIf="bookingData.mode == 2">{{currencySymbol}} {{bookingData.price * bookingData.duration * bookingData.roomQty | number:\'1.0-0\'}}</span>\n        \n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-content">{{bookingData.discountRate}}% OFF</span>\n      </ion-col>\n      <ion-col text-right>\n        <span class="text-content" *ngIf="bookingData.mode == 0">- {{currencySymbol}} {{(bookingData.discountRate * (bookingData.priceList[bookingData.duration-1].price * bookingData.roomQty)) / 100| number:\'1.0-0\'}}</span>\n        <span class="text-content" *ngIf="bookingData.mode == 1">- {{currencySymbol}} {{(bookingData.discountRate * (bookingData.pricing24 * bookingData.roomQty)) / 100| number:\'1.0-0\'}}</span>\n        <span class="text-content" *ngIf="bookingData.mode == 2">- {{currencySymbol}} {{(bookingData.discountRate * (bookingData.price * bookingData.duration * bookingData.roomQty)) / 100| number:\'1.0-0\'}}</span>\n        <br />\n        <!-- <span class="text-content"></span> -->\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-content">\n          {{"UNIQUE_CODE" | translate}}\n        </span>\n      </ion-col>\n      <ion-col text-right class="text-content">\n        - {{uniqueDigit}}\n      </ion-col>\n    </ion-row>\n    <ion-row padding-top>\n      <ion-col>\n        <span class="text-content">{{"TOTAL_PRICE" | translate}}</span>\n      </ion-col>\n      <ion-col text-right>\n        <span text-right *ngIf="bookingData.mode == 0" class="text-price">{{currencySymbol}} {{transitPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>\n        <span text-right *ngIf="bookingData.mode == 1" class="text-price">{{currencySymbol}} {{hour24Price * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>\n        <span text-right *ngIf="bookingData.mode == 2" class="text-price">{{currencySymbol}} {{nightPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="separator-with-shadow">\n\n  </div>\n  <ion-grid padding>\n    <ion-row>\n      <ion-col class="text-header">\n        {{"GUEST_DETAILS" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="text-subcontent">\n        <span class="text-content">{{bookingData.orderData.fullName}}</span>\n        <br />{{bookingData.orderData.email}}\n        <br/> {{bookingData.orderData.phoneNo}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="bookingData.orderData?.guest">\n      <ion-col>\n        <span class="text-subtitle">{{"BOOKING_FOR" | translate}}</span>\n        <br />\n        <span class="text-content">{{bookingData.orderData?.guest}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">{{"SPECIAL_REQUEST" | translate}}</span>\n        <br />\n        <span class="text-content">{{bookingData.orderData?.additional || \'-\'}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="separator-with-shadow">\n\n  </div>\n</ion-content>\n\n<ion-footer padding-horizontal *ngIf="!footerIsHidden" [ngClass]="searchModeClass">\n  <ion-row align-items-center>\n    <!--<ion-col text-justify class="text-content">-->\n      <!--{{"YOU_NEED_TO_PAY" | translate}}-->\n      <!--<br/>-->\n      <!--<span class="text-price" *ngIf="bookingData.mode == 0">{{transitPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>-->\n      <!--<span class="text-price" *ngIf="bookingData.mode == 1">{{hour24Price * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>-->\n      <!--<span class="text-price" *ngIf="bookingData.mode == 2">{{nightPrice * bookingData.roomQty - uniqueDigit| number:\'1.0-0\'}}</span>-->\n    <!--</ion-col>-->\n    <!--<ion-col>-->\n      <!--<button ion-button block (click)="bookRoom()">OK</button>-->\n    <!--</ion-col>-->\n    <ion-col>\n      <button ion-button block (click)="selectPaymentMethod()">{{"SELECT_PAYMENT_METHOD" | translate}}</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/payment-detail/payment-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */]]
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
            __WEBPACK_IMPORTED_MODULE_5__providers_global_configuration_service__["a" /* GlobalConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PaymentDetailPage);
    return PaymentDetailPage;
}(__WEBPACK_IMPORTED_MODULE_4__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=payment-detail.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmationPageModule", function() { return PaymentConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_detail__ = __webpack_require__(1116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentConfirmationPageModule = (function () {
    function PaymentConfirmationPageModule() {
    }
    PaymentConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__payment_detail__["a" /* PaymentDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__payment_detail__["a" /* PaymentDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__payment_detail__["a" /* PaymentDetailPage */]
            ]
        })
    ], PaymentConfirmationPageModule);
    return PaymentConfirmationPageModule;
}());

//# sourceMappingURL=payment-detail.module.js.map

/***/ })

});
//# sourceMappingURL=15.js.map