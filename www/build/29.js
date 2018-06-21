webpackJsonp([29],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingConfirmationPageModule", function() { return BookingConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__booking_confirmation__ = __webpack_require__(832);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookingConfirmationPageModule = (function () {
    function BookingConfirmationPageModule() {
    }
    BookingConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__booking_confirmation__["a" /* BookingConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__booking_confirmation__["a" /* BookingConfirmationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__booking_confirmation__["a" /* BookingConfirmationPage */]
            ]
        })
    ], BookingConfirmationPageModule);
    return BookingConfirmationPageModule;
}());

//# sourceMappingURL=booking-confirmation.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
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
 * Generated class for the BookingConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BookingConfirmationPage = (function () {
    function BookingConfirmationPage(navCtrl, viewCtrl, navParams, parseService, loadingCtrl, app, translate) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.parseService = parseService;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.translate = translate;
        this.bookingData = '';
        this.roomDetail = '';
        this.skipStatus = false;
        this.loadFinished = false;
        this.transitPrice = 0;
        console.log(navParams.data);
        this.bookingData = navParams.get('classDetail');
        console.log(this.bookingData);
        this.stayingType = this.getStayingType(this.bookingData.mode);
        this.transitPrice = this.bookingData.priceList[this.bookingData.duration - 1].price * (100 - this.bookingData.discountRate) / 100;
        // this.createLoading();
    }
    BookingConfirmationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.pop({
                animate: true,
                animation: 'ios-transition',
                direction: 'back'
            });
        };
    };
    BookingConfirmationPage.prototype.createLoading = function () {
        var bookingDetailsLoading;
        this.translate.get('LOADING_BOOKING_DETAILS').subscribe(function (value) { bookingDetailsLoading = value; });
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: bookingDetailsLoading
        });
        this.loading.present();
    };
    BookingConfirmationPage.prototype.getStayingType = function (code) {
        var transit;
        var hours;
        var night;
        var other;
        this.translate.get('TRANSIT').subscribe(function (value) { transit = value; });
        this.translate.get('HOURS').subscribe(function (value) { hours = value; });
        this.translate.get('NIGHT').subscribe(function (value) { night = value; });
        this.translate.get('OTHER').subscribe(function (value) { other = value; });
        switch (code.toString()) {
            case '0': return transit;
            case '1': return '24 ' + hours;
            case '2': return '1 ' + night;
            default: return other;
        }
    };
    BookingConfirmationPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    BookingConfirmationPage.prototype.showPaymentConfirmation = function () {
        this.navCtrl.push("PaymentDetailPage", { classDetail: this.bookingData }, { animate: true, animation: 'ios-transition', direction: 'forward' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], BookingConfirmationPage.prototype, "navBar", void 0);
    BookingConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-booking-confirmation',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/booking-confirmation/booking-confirmation.html"*/'<!--\n  Generated template for the BookingConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ "BOOKING" | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        <span style="text-transform: capitalized">{{stayingType}}</span> - {{bookingData.duration}} hrs\n      </ion-card-title>\n      <b>{{bookingData.checkIn | date:\'d MMM y HH:mm\'}}</b>\n      <p>{{bookingData.propName}}</p>\n      <ion-row no-padding>\n        <ion-col text-left no-padding>\n          {{bookingData.name}}\n        </ion-col>\n        <ion-col text-right no-padding *ngIf="bookingData.mode == 0">\n          {{transitPrice | currency:\'IDR\'}}\n        </ion-col>\n        <ion-col text-right no-padding *ngIf="bookingData.mode == 2">\n          {{bookingData.price | currency:\'IDR\'}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button block clear (click)="showPaymentConfirmation()" color="grey">{{ "CONTINUE" | translate }}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/booking-confirmation/booking-confirmation.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], BookingConfirmationPage);
    return BookingConfirmationPage;
}());

//# sourceMappingURL=booking-confirmation.js.map

/***/ })

});
//# sourceMappingURL=29.js.map