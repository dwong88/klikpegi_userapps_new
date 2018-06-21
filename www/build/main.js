webpackJsonp([32],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_my_bookings_my_bookings__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage(navParams, translateService) {
        var _this = this;
        this.navParams = navParams;
        this.translateService = translateService;
        this.homePage = "HomePage";
        this.bookingsPage = __WEBPACK_IMPORTED_MODULE_3__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */];
        this.profilePage = "UserProfilePage";
        this.promoPage = "PromoPage";
        // public inboxPage: any = "InboxPage";
        this.mySelectedIndex = 0;
        this.skipStatus = false;
        translateService.get('SEARCH').subscribe(function (value) {
            // value is our translated string
            _this.searchTitle = value;
        });
        translateService.get('BOOKINGS').subscribe(function (value) {
            // value is our translated string
            _this.bookingsTitle = value;
        });
        translateService.get('PROFILE').subscribe(function (value) {
            // value is our translated string
            _this.profileTitle = value;
        });
        this.mySelectedIndex = this.navParams.get('tabIndex') || 0;
        // this.skipStatus = this.navParams.get('skipped');
        // if(this.skipStatus) {
        //   setTimeout(() => {
        //     this.tabs.select(1)
        //   }, 300)
        // }
        // console.log(this.skipStatus)
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad tabs');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('mainTabs'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Tabs"])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'view-tabs',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" #mainTabs>\n  <ion-tab [root]="homePage" tabTitle=" {{\'SEARCH\' | translate }}" tabIcon="search"></ion-tab>\n    <ion-tab [root]="promoPage" tabTitle=" {{\'PROMO\' | translate }}" tabIcon="customicon-promo"></ion-tab>\n  <ion-tab [root]="bookingsPage" tabTitle=" {{\'BOOKINGS\' | translate }}" tabIcon="calendar"></ion-tab>\n    <!--<ion-tab [root]="inboxPage" tabTitle=" {{\'INBOX\' | translate }}" tabIcon="mail"></ion-tab>-->\n  <ion-tab [root]="profilePage" tabTitle=" {{\'PROFILE\' | translate }}" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_my_bookings_detail_my_bookings_detail__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_countdown__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the MyBookings page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MyBookingsPage = (function () {
    function MyBookingsPage(navCtrl, navParams, parseService, alertCtrl, loadingCtrl, modalCtrl, popoverCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.parseService = parseService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.bookingList = '';
        this.userExist = false;
        this.orderStatus = 1;
        this.myCallbackFunction = function (_params) {
            return new Promise(function (resolve, reject) {
                _this.orderStatus = _params;
                resolve();
            });
        };
    }
    MyBookingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyBookingsPage');
    };
    MyBookingsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        var strLoading;
        this.translate.get('LOADING').subscribe(function (value) { strLoading = value; });
        if (this.navParams.get("statusCode") !== undefined)
            this.orderStatus = this.navParams.get("statusCode");
        console.log("masuk1x");
        if (this.parseService.getCurrentUser() != null) {
            console.log('user exist');
            this.userExist = true;
            this.subscription = this.parseService.getLiveBooking();
            console.log("masuk2x");
            this.subscription.on('update', function (object) {
                console.log("data updated");
                console.log("masuk3x");
                _this.parseService.getBookingList().then(function (data) {
                    console.log("masuk4x");
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var booking = data_1[_i];
                        switch (booking.propertyType) {
                            case 0: {
                                booking.propertyType = 'Hotel';
                                break;
                            }
                            default:
                                booking.propertyType = 'Other';
                        }
                    }
                    _this.bookingList = data;
                });
            });
            this.subscription.on('error', function (object) {
                console.log(object);
            });
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: strLoading,
            });
            loading_1.present();
            this.parseService.getBookingList().then(function (data) {
                console.log("masuk6x");
                var index;
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var booking = data_2[_i];
                    // console.log(booking.id, booking.statusCode, booking.orderExpiry)
                    // Check if order have booking expiry
                    if (booking.orderExpiry !== undefined) {
                        //Get expiry time if available
                        booking.expiredTime = booking.orderExpiry.getTime();
                        //Check if order alredy expired for more than 1 day.
                        if (booking.expiredTime + (1000 * 60 * 60 * 24) < (new Date().getTime())) {
                            //Do something here.
                            booking.statusCode = 6;
                        }
                    }
                    switch (booking.propertyType) {
                        case 0: {
                            booking.propertyType = 'Hotel';
                            break;
                        }
                        default:
                            booking.propertyType = 'Other';
                    }
                }
                _this.bookingList = data;
                loading_1.dismiss();
            });
        }
        else {
            console.log('ga ada user');
            this.userExist = false;
        }
    };
    MyBookingsPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        modal.present();
    };
    MyBookingsPage.prototype.showBookingDetail = function (booking) {
        console.log("pindah page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_my_bookings_detail_my_bookings_detail__["a" /* MyBookingsDetailPage */], {
            bookingData: booking,
            callback: this.myCallbackFunction
        });
    };
    MyBookingsPage.prototype.swipeEvent = function (event) {
        console.log("masuk7x");
        console.log(event);
        var i = 0;
        if (event.direction == 4) {
            if (this.orderStatus < 3)
                this.orderStatus = +this.orderStatus + 1;
            else {
                console.log('mentok kanan');
            }
        }
        else if (event.direction == 2) {
            if (this.orderStatus > 1)
                this.orderStatus = +this.orderStatus - 1;
        }
        else {
            console.log('mentok kiri');
        }
    };
    MyBookingsPage.prototype.onFinished = function (booking) {
        setTimeout(function () {
            return booking.expired = true;
        }, 0);
    };
    MyBookingsPage.prototype.getStayingType = function (code) {
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
    MyBookingsPage.prototype.paymentComplete = function (booking) {
        // for(let button of this.segment._buttons.toArray())
        //   button.isActive = false
        var _this = this;
        // this.buttonArr[1].isActive = true
        var requestLoading;
        var confirmPaymentTitle;
        var confirmPaymentSubTitle;
        this.translate.get('LOADING_REQUEST').subscribe(function (value) { requestLoading = value; });
        this.translate.get('NEW_FRIEND').subscribe(function (value) { confirmPaymentTitle = value; });
        this.translate.get('PAYMENT_VERIFYING').subscribe(function (value) { confirmPaymentSubTitle = value; });
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: requestLoading,
        });
        loading.present();
        this.parseService.confirmPayment(booking.id).then(function (success) {
            loading.dismiss();
            console.log(booking.id);
            var alert = _this.alertCtrl.create({
                title: confirmPaymentTitle,
                subTitle: confirmPaymentSubTitle,
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            console.log("order status", _this.orderStatus);
                            _this.orderStatus = 2;
                        }
                    }]
            });
            alert.present();
        }).then(function () {
            console.log(booking);
            _this.parseService.sendEmail(booking, "paymentCompleted");
        });
    };
    MyBookingsPage.prototype.presentPopover = function (myEvent) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Segment"]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ngx_countdown__["a" /* CountdownComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ngx_countdown__["a" /* CountdownComponent */])
    ], MyBookingsPage.prototype, "timer", void 0);
    MyBookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-bookings',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/my-bookings/my-bookings.html"*/'<!--\n  Generated template for the MyBookings page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="klikpegihead">\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ "BOOKINGS" | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding (swipe)="swipeEvent($event)">\n  <div *ngIf="userExist">\n    <ion-segment mode="md" color="grey" [(ngModel)]="orderStatus">\n      <ion-segment-button value="1">\n        {{ "PENDING" | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="2">\n        {{ "ON_REVIEW" | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="3">\n        {{ "ACCEPTED" | translate }}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="orderStatus" *ngIf="userExist">\n    <ion-list *ngSwitchCase="1" (swipe)="swipeEvent($event)">\n      <ng-template ngFor let-booking [ngForOf]="bookingList">\n        <ion-item tappable *ngIf="booking.statusCode == 0" (click)="showBookingDetail(booking)">\n          <ion-badge *ngIf="!booking.expired" class="custom-badge custom-badge-waiting">{{ booking.status | translate }}\n            <countdown [config]="{stopTime: booking.expiredTime, template: \'$!m!:$!s!\'}" (finished)="onFinished(booking)"></countdown>\n          </ion-badge>\n          <ion-badge *ngIf="booking.expired" class="custom-badge custom-badge-expired">{{ "BOOKING_EXPIRED" | translate }}\n            <countdown [config]="{stopTime: booking.expiredTime, template: \'$!m!:$!s!\'}" (finished)="onFinished(booking)"></countdown>\n          </ion-badge>\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==0">{{ "TRANSIT" | translate }}</ion-badge>-->\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==1">24-{{ "HOURS" | translate }}</ion-badge>-->\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==2">1 {{ "NIGHT" | translate }}</ion-badge>-->\n          <h2>{{ booking.propertyName }} • {{ booking.propertyTypeName }}</h2>\n          <p>{{ booking.className }} • {{ booking.unitQty }} units</p>\n          <p>{{ booking.checkIn| date:\'d MMM y\' }}\n            <span *ngIf="booking.type==0">• {{ booking.interval }} {{ "HOURS" | translate }}</span>\n            <span *ngIf="booking.type==1">• 24 {{"NIGHTS" | translate}}</span>\n            <span *ngIf="booking.type==2">• {{ booking.interval }} {{"NIGHTS" | translate }}</span>\n          </p>\n          <!--<button *ngIf="!booking.expired" ion-button color="grey" style="border-radius:4px" (click)="paymentComplete(booking);$event.stopPropagation()">{{ "I\'VE_COMPLETED_PAYMENT" | translate }}</button>-->\n        </ion-item>\n      </ng-template>\n    </ion-list>\n    <ion-list *ngSwitchCase="2" (swipe)="swipeEvent($event)">\n      <ng-template ngFor let-booking [ngForOf]="bookingList">\n        <ion-item tappable *ngIf="booking.statusCode == 1" (click)="showBookingDetail(booking)">\n          <ion-badge class="custom-badge custom-badge-checking">{{ booking.status | translate }}</ion-badge>\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==0">{{ "TRANSIT" | translate }}</ion-badge>-->\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==1">24-{{ "HOURS" | translate }}</ion-badge>-->\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==2">1 {{ "NIGHT" | translate }}</ion-badge>-->\n          <h2>{{ booking.propertyName }} • {{ booking.propertyTypeName }}</h2>\n          <p>{{ booking.className }} • {{ booking.unitQty }} units</p>\n          <p>{{ booking.checkIn| date:\'d MMM y\' }}\n            <span *ngIf="booking.type==0">• {{ booking.interval }} {{ "HOURS" | translate }}</span>\n            <span *ngIf="booking.type==1">• 24 {{"NIGHTS" | translate}}</span>\n            <span *ngIf="booking.type==2">• {{ booking.interval }} {{"NIGHTS" | translate }}</span></p>\n        </ion-item>\n      </ng-template>\n    </ion-list>\n    <ion-list *ngSwitchCase="3" (swipe)="swipeEvent($event)">\n      <ng-template ngFor let-booking [ngForOf]="bookingList">\n        <ion-item tappable *ngIf="booking.statusCode == 2" (click)="showBookingDetail(booking)">\n          <ion-badge class="custom-badge custom-badge-accepted">{{ booking.status | translate }}</ion-badge>\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==0">{{ "TRANSIT" | translate }}</ion-badge>-->\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==1">24-{{ "HOURS" | translate }}</ion-badge>-->\n          <!--<ion-badge class="custom-badge custom-badge-type" *ngIf="booking.type==2">1 {{ "NIGHT" | translate }}</ion-badge>-->\n          <h2>{{ booking.propertyName }} • {{ booking.propertyTypeName }}</h2>\n          <p>{{ booking.className }} • {{ booking.unitQty }} units</p>\n          <p>{{ booking.checkIn| date:\'d MMM y\' }}\n            <span *ngIf="booking.type==0">• {{ booking.interval }}{{ "HOURS" | translate }}</span>\n            <span *ngIf="booking.type==1">• 24 {{"NIGHTS" | translate}}</span>\n            <span *ngIf="booking.type==2">• {{ booking.interval }} {{"NIGHTS" | translate }}</span></p>\n        </ion-item>\n      </ng-template>\n    </ion-list>\n  </div>\n  <!-- <ion-list *ngIf="userExist">\n    <ion-item *ngFor="let booking of bookingList" (click)="showBookingDetail(booking)">\n      <ion-badge color="primary" *ngIf="booking.statusCode == 0">Waiting for payment</ion-badge>\n      <ion-badge color="yellow" *ngIf="booking.statusCode == 1">Reviewing payment</ion-badge>\n      <ion-badge color="secondary" *ngIf="booking.statusCode == 2">Transaction complete</ion-badge>\n      <h2>{{ booking.propertyName }} • {{ booking.propertyType }}</h2>\n      <p>{{ booking.className }} • {{ booking.unitQty }} {{ "UNITS" | translate }}</p>\n      <p>{{ booking.checkIn| date:\'d MMM y • H:mm\' }} • {{ booking.interval }} {{ "HOURS" | translate }}</p>\n    </ion-item>\n  </ion-list> -->\n  <ion-grid *ngIf="!userExist">\n    <ion-row>\n      <ion-col text-center>\n        <img src="assets/images/lock.svg" />\n      </ion-col>\n    </ion-row>\n    <ion-row style="margin-top:20%" text-center>\n      <ion-col>\n        <span class="text-content-big">{{ "YOU_NEED_TO_LOGIN_FIRST" | translate }}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row text-center>\n      <ion-col>\n        <span class="text-content-light">\n            {{ "YOU_NEED_TO_LOGIN_SUBTITLE.FIRST" | translate }}\n          <br /> \n          {{ "YOU_NEED_TO_LOGIN_SUBTITLE.SECOND" | translate }}\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/my-bookings/my-bookings.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], MyBookingsPage);
    return MyBookingsPage;
}());

//# sourceMappingURL=my-bookings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuicktourModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the QuicktourModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var QuicktourModalPage = (function () {
    function QuicktourModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.introBgImg = ["introbg1", "introbg2", "introbg3"];
        this.images = [{
                url: 'assets/images/bgfullklik_intro.jpg'
            }, {
                url: 'assets/images/qt2.png'
            }, {
                url: 'assets/images/qt3.png'
            }];
    }
    QuicktourModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuicktourModalPage');
    };
    QuicktourModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    QuicktourModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-quicktour-modal',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/quicktour-modal/quicktour-modal.html"*/'<!--\n  Generated template for the QuicktourModal page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header transparent>\n  <ion-toolbar text-right style="background:transparent !important">\n    <button ion-button clear icon-only (click)="dismissModal()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-slides pager>\n\n  <ion-slide *ngFor="let image of introBgImg" [ngClass]="image" style="background-repeat:no-repeat;background-size:cover">\n    &nbsp;\n  </ion-slide>\n\n</ion-slides>\n\n<!--<ion-content>-->\n  <!--<ion-slides pager="true">-->\n    <!--<ion-slide *ngFor="let image of images">-->\n      <!--<div>-->\n        <!--<img src="{{image.url}}">-->\n      <!--</div>-->\n    <!--</ion-slide>-->\n  <!--</ion-slides>-->\n<!--</ion-content>-->\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/quicktour-modal/quicktour-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], QuicktourModalPage);
    return QuicktourModalPage;
}());

//# sourceMappingURL=quicktour-modal.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_LoginHandler__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(42);
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










/*
 Generated class for the Login page.
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, loadingCtrl, navParams, viewCtrl, parseService, alertCtrl, toastCtrl, modalCtrl, facebook, googlePlus, plt, translate, geolocation, globalConfig) {
        var _this = _super.call(this, navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, loadingCtrl, toastCtrl, translate, parseService, facebook, googlePlus, geolocation, globalConfig) || this;
        _this.navCtrl = navCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.parseService = parseService;
        _this.alertCtrl = alertCtrl;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.facebook = facebook;
        _this.googlePlus = googlePlus;
        _this.plt = plt;
        _this.translate = translate;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        _this.model = {};
        _this.mainNav = '';
        _this.skipStatus = false;
        _this.bookingData = '';
        _this.backToParent = false;
        _this.skipStatus = navParams.get('skipped');
        _this.roomID = navParams.get("room");
        _this.checkIn = new Date(navParams.get("time")) || new Date();
        if (typeof _this.navParams.get('backToParent') !== 'undefined') {
            _this.backToParent = _this.navParams.get('backToParent');
        }
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function (method) {
        var closeType = __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.RELOAD_ROOT;
        if (this.backToParent)
            closeType = __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL;
        switch (method) {
            case "email": {
                console.log('login123xx');
                this.manualLogin(this.model.username, this.model.password, closeType, __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
                break;
            }
            case "facebook": {
                this.facebookLogin(closeType, __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
                break;
            }
            case "google": {
                this.googleLogin(closeType, __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
                break;
            }
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/login/login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="cls-search-rest">\n  <ion-toolbar>\n    <ion-title>{{"SIGN_IN" | translate}}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal()" color="dark">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="klikpegi-bg">\n  <ion-grid>\n    <ion-row padding class="no-padding">\n      <ion-col style="text-align: center;">\n        <img class="ghours-logo-full" scroll="false" src="assets/images/ghours_full.png" />\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-horizontal class="row-hello-prof no-padding">\n      <ion-col>\n        <span class="text-hello-dark darkcolor">{{ "HELLO" | translate }},</span>\n        <br />\n        <span class="text-content-light header-greet darkcolor">\n          {{"YOU_NEED_TO_LOGIN_SUBTITLE.FIRST" | translate}}\n          <br /> {{"YOU_NEED_TO_LOGIN_SUBTITLE.SECOND" | translate}}\n        </span>\n      </ion-col>\n    </ion-row>\n\n    <div padding-top></div>\n\n    <ion-row class="row-login-form" padding-horizontal>\n      <ion-col>\n        <form (ngSubmit)="login(\'email\');" id="loginForm">\n          <ion-item>\n            <ion-input type="text" [(ngModel)]="model.username" name="username" placeholder="{{\'EMAIL_ADDRESS\' | translate }}"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" [(ngModel)]="model.password" name="password" placeholder="{{\'PASSWORD\' | translate }}"></ion-input>\n          </ion-item>\n        </form>\n      </ion-col>\n    </ion-row>\n    <div padding-top></div>\n\n    <ion-row padding-horizontal class="cls-submit-form-login">\n      <ion-col>\n        <button class="bordergrey" ion-button type="submit" block form="loginForm" style="font-weight: bold;" [innerHTML]="\'SIGN_ME_IN_SPACE\' | translate"></button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-horizontal  class="txt-login-helper no-padding" style="margin-top: -0.4rem;">\n      <ion-col text-right>\n        <button ion-button clear (click)="forgotPassword()" style="color: white;" outline>{{"FORGOT_PASSWORD" | translate }}<span style="color: white;font-family: Arial, \'Segoe UI\', sans-serif;">?</span></button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-horizontal text-center align-items-center class="cls-form-devider" style="padding: 10px;">\n      <ion-col>\n        <div class="div-devider">\n\n        </div>\n      </ion-col>\n      <ion-col col-2 text-center class="text-subcontent-large">\n        {{"OR" | translate}}\n      </ion-col>\n      <ion-col>\n        <div class="div-devider">\n\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-horizontal>\n      <ion-col class="text-content-light">\n        {{"LOG_IN_WITH" | translate}}\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding-horizontal class="cls-submit-form-login">\n      <ion-col>\n        <button class="bordergrey" ion-button block icon-left style="background-color: white; color: #00447C; font-weight: bold;" (click)="login(\'facebook\')">\n          <ion-icon name="logo-facebook"></ion-icon>&nbsp;\n          F a c e b o o k\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row padding class="cls-submit-form-login" style="margin-top: -1rem;">\n      <ion-col>\n        <button class="bordergrey" ion-button block icon-left style="background-color: white; color: red; font-weight: bold;" (click)="login(\'google\')">\n          <ion-icon name="logo-google"></ion-icon>&nbsp;\n          G o o g l e\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], LoginPage);
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_8__components_LoginHandler__["a" /* LoginHandler */]));

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_truncate_dist_truncate_words_pipe__ = __webpack_require__(436);
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










var SearchResultsDetailPage = (function (_super) {
    __extends(SearchResultsDetailPage, _super);
    function SearchResultsDetailPage(navCtrl, navParams, parseService, translate, loadingCtrl, viewCtrl, toastCtrl, alertCtrl, modalCtrl, popoverCtrl, plt, geolocation, globalConfig) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.parseService = parseService;
        _this.translate = translate;
        _this.loadingCtrl = loadingCtrl;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.alertCtrl = alertCtrl;
        _this.modalCtrl = modalCtrl;
        _this.popoverCtrl = popoverCtrl;
        _this.plt = plt;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        _this.loadData = false;
        _this.bookTime = 3;
        _this.roomDetail = '';
        _this.displayAddress = '';
        _this.displayDescription = '';
        _this.displayDescriptionFull = '';
        _this.displayDescriptionCntWords = 0;
        _this.limitWords = __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__["a" /* GlobalConfigurationService */].TRUNCATE_WORDS_COUNT;
        _this.truncating = true;
        _this.amenities = [{
                id: 0,
                title: "FREE_PARKING",
                image: 'assets/images/amenities/Parking.png',
                value: 0
            }, {
                id: 1,
                title: 'NOT_FREE_PARKING',
                image: 'assets/images/amenities/Parking.png',
                value: 0
            }, {
                id: 2,
                title: 'FREE_WI-FI',
                image: 'assets/images/amenities/WiFi.png',
                value: 0
            }, {
                id: 3,
                title: 'ELEVATOR',
                image: 'assets/images/amenities/Elevator.png',
                value: 0
            }, {
                id: 4,
                title: 'RESTAURANT',
                image: 'assets/images/amenities/Restaurant.png',
                value: 0
            }, {
                id: 5,
                title: 'SWIMMING_POOL',
                image: 'assets/images/amenities/Pool.png',
                value: 0
            }, {
                id: 6,
                title: 'GYM',
                image: 'assets/images/amenities/Gym.png',
                value: 0
            }, {
                id: 7,
                title: 'LAUNDRY_SERVICE',
                image: 'assets/images/amenities/Laundry Service.png',
                value: 0
            }, {
                id: 8,
                title: 'BUSINESS_CENTER',
                image: 'assets/images/amenities/Business Center.png',
                value: 0
            }, {
                id: 9,
                title: '24-HOUR_FRONT_DESK',
                image: 'assets/images/amenities/24hr Front Desk.png',
                value: 0
            }, {
                id: 10,
                title: 'ATM',
                image: 'assets/images/amenities/ATM.png',
                value: 0
            }];
        _this.roomOverview = [{
                id: 0,
                value: '',
                image: 'assets/images/room-overview/Room Size.png',
                title: 'ROOM_SIZE'
            },
            {
                id: 1,
                value: '',
                image: 'assets/images/room-overview/Bed.png',
                title: 'BED_TYPE'
            },
        ];
        _this.categories = [{
                id: 0,
                name: "B&B",
            }, {
                id: 1,
                name: "Hostel",
            }, {
                id: 2,
                name: "Apartment",
            }, {
                id: 3,
                name: "Resort",
            }, {
                id: 4,
                name: "Homestay",
            }, {
                id: 5,
                name: "Hotel",
            }, {
                id: 6,
                name: "Villa",
            }];
        _this.shownGroup = null;
        _this.rate = 5;
        _this.searchMode = '';
        _this.currentLanguage = '';
        _this.roomQty = 1;
        _this.initializeData();
        console.log(navParams.data);
        _this.displayAddress = navParams.get('displayAddress') || navParams.get('address');
        _this.thumbnail = navParams.get('room').thumbnail;
        _this.images = navParams.get('gallery');
        //Initial Amenities Data
        for (var _i = 0, _a = navParams.get('amenities'); _i < _a.length; _i++) {
            var amenity = _a[_i];
            _this.amenities[amenity].value = 1;
        }
        var location = navParams.get('location');
        if (location != undefined)
            _this.destination = location.name;
        switch (_this.roomDetail.category) {
            case '0': {
                _this.category = 'Hotel';
            }
            default: {
                _this.category = 'Other';
            }
        }
        __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__["a" /* GlobalConfigurationService */].KODE_UNIQUE = 0;
        return _this;
        // parseService.getRoomDetails(this.roomId).then(details => {
        //   this.roomDetail = details;
        //   loading.dismiss();
        //   this.loadData = true;
        // })
    }
    SearchResultsDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //Change back animation into ios back transition
        this.navBar.backButtonClick = function (e) {
            _this.navCtrl.pop({
                animate: true,
                animation: 'ios-transition',
                direction: 'back'
            });
        };
    };
    SearchResultsDetailPage.prototype.popImagesWindow = function () {
        var currentIndex = this.slides.getActiveIndex();
        var imgUrl = '';
        // if(currentIndex == 0) {
        //   imgUrl = this.roomDetail.thumbnail;
        // } else {
        //     imgUrl = this.images[(currentIndex-1)]._url;
        // }
        imgUrl = this.images[(currentIndex)]._url;
        var modal = this.modalCtrl.create("PopImages", {
            listImages: this.images,
            theThumb: this.roomDetail.thumbnail,
            tabIndex: currentIndex,
            imgUrl: imgUrl
        }, {
            showBackdrop: false,
            enableBackdropDismiss: false,
            enterAnimation: 'modal-fade-enter',
            leaveAnimation: 'modal-fade-leave'
        });
        modal.present();
    };
    SearchResultsDetailPage.prototype.filterArray = function (array, type) {
        return array.filter(function (x) { return x.value == type; });
    };
    SearchResultsDetailPage.prototype.presentConfirm = function (room, interval, checkIn) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Log in required',
            message: 'You are not yet logged in, please log in first',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'Sign in',
                    handler: function () {
                        console.log("sign in clicked");
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */], {
                            skipped: true,
                            bookingDetail: {
                                room: room,
                                interval: interval,
                                checkIn: checkIn
                            }
                        });
                    }
                }]
        });
        alert.present();
    };
    SearchResultsDetailPage.prototype.initializeData = function () {
        var self = this;
        var truncateWords = new __WEBPACK_IMPORTED_MODULE_8_ng2_truncate_dist_truncate_words_pipe__["a" /* TruncateWordsPipe */]();
        this.currentLanguage = this.translate.getDefaultLang();
        this.items = [{
                title: 'RULES',
                text: this.navParams.get("room").rules ? this.navParams.get("room").rules : 'No description yet',
                textINA: this.navParams.get("room").rulesINA ? this.navParams.get("room").rulesINA : 'Belum ada deskripsi',
            }, {
                title: 'CANCELLATION_POLICY',
                text: this.navParams.get("room").cancellationPolicy ? this.navParams.get("room").cancellationPolicy : 'No description yet',
                textINA: this.navParams.get("room").cancellationPolicyINA ? this.navParams.get("room").cancellationPolicyINA : 'Belum ada deskripsi',
            }, {
                title: 'PAYMENT_POLICY',
                text: this.navParams.get("room").paymentPolicy ? this.navParams.get("room").paymentPolicy : 'No description yet',
                textINA: this.navParams.get("room").paymentPolicyINA ? this.navParams.get("room").paymentPolicyINA : 'Belum ada deskripsi',
            }];
        this.roomDetail = this.navParams.get('room');
        if (this.currentLanguage == 'en') {
            this.displayDescriptionFull = this.roomDetail.description;
        }
        else if (this.currentLanguage == 'id') {
            this.displayDescriptionFull = this.roomDetail.descriptionINA;
        }
        this.displayDescriptionCntWords = this.splitTextToWords(this.displayDescriptionFull).length;
        this.displayDescription = truncateWords.transform(this.displayDescriptionFull);
        // this.roomDetail.description = truncateWords.transform(this.roomDetail.description);
        // this.roomDetail.descriptionINA = truncateWords.transform(this.roomDetail.descriptionINA);
        this.roomDetail.roomType = this.getPropertyName(this.roomDetail.type);
        for (var _i = 0, _a = this.roomDetail.classes; _i < _a.length; _i++) {
            var data = _a[_i];
            var basicFacilities = [{
                    id: 0,
                    value: 0,
                    imageA: "assets/images/basic-facilities/Refundable.png",
                    imageB: "assets/images/basic-facilities/Non Refundable.png",
                    title1: "NON_REFUNDABLE",
                    title2: "REFUNDABLE"
                },
                {
                    id: 1,
                    value: 0,
                    imageA: "assets/images/basic-facilities/WiFi.png",
                    imageB: "assets/images/basic-facilities/No WiFi.png",
                    title1: "NO_WI-FI",
                    title2: "FREE_WI-FI"
                },
                {
                    id: 2,
                    value: 0,
                    imageA: "assets/images/basic-facilities/Breakfast.png",
                    imageB: "assets/images/basic-facilities/No Breakfast.png",
                    title1: "NO_BREAKFAST",
                    title2: "FREE_BREAKFAST"
                },
                {
                    id: 3,
                    value: 0,
                    imageA: "assets/images/basic-facilities/Smoking Room.png",
                    imageB: "assets/images/basic-facilities/No Smoking.png",
                    title1: "NO_SMOKING_ROOM",
                    title2: "SMOKING_ROOM"
                },
            ];
            basicFacilities[0].value = data.basicFacilities[0].value;
            basicFacilities[1].value = data.basicFacilities[1].value;
            basicFacilities[2].value = data.basicFacilities[2].value;
            basicFacilities[3].value = data.basicFacilities[3].value;
            var overviewData = [{
                    id: 0,
                    value: '',
                    image: 'assets/images/room-overview/Room Size.png',
                    title: 'ROOM_SIZE'
                },
                {
                    id: 1,
                    value: '',
                    image: 'assets/images/room-overview/Bed.png',
                    title: 'BED_TYPE'
                }
            ];
            overviewData[0].value = data.roomOverview[0];
            overviewData[1].value = data.roomOverview[1];
            data.smoking = data.roomOverview[2];
            data["overviewArr"] = overviewData;
            data["facilityArr"] = basicFacilities;
        }
        this.latitude = this.roomDetail.location._latitude;
        this.longitude = this.roomDetail.location._longitude;
        this.address = this.navParams.get('address');
        this.duration = this.navParams.get('duration');
        this.searchDate = this.navParams.get('checkIn');
        this.searchMode = this.navParams.get('mode');
        this.roomQty = this.navParams.get('roomQty');
        this.loadData = true;
    };
    SearchResultsDetailPage.prototype.getPropertyName = function (code) {
        switch (code) {
            case 0:
                {
                    return 'Hotel';
                }
            default:
                return 'Other';
        }
    };
    SearchResultsDetailPage.prototype.showRoomDetail = function (id) {
        this.navCtrl.push("SearchResultsRoomDetailPage", {
            roomID: id
        });
        console.log(id);
    };
    SearchResultsDetailPage.prototype.navigateTo = function () {
        var destination = this.latitude + ',' + this.longitude;
        if (this.plt.is('ios')) {
            window.open('maps://?q=' + destination, '_system');
        }
        else {
            var label = encodeURI('My Label');
            window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
        }
    };
    SearchResultsDetailPage.prototype.bookRoom = function (time) {
        //Convert string to date of navParams
        var user = this.parseService.getCurrentUser();
        var bookTime = new Date(this.searchDate);
        console.log(user);
        console.log(bookTime);
        if (isNaN(bookTime.getTime())) {
            bookTime = new Date();
            console.log("default time set");
        }
        if (user) {
            this.navCtrl.push("BookingConfirmationPage", {
                bookingDetail: {
                    room: this.roomId,
                    interval: +time,
                    checkIn: bookTime
                }
            });
        }
        else {
            console.log("prompt log in");
            this.presentConfirm(this.roomId, +time, bookTime);
        }
    };
    SearchResultsDetailPage.prototype.showMore = function () {
        var modal = this.modalCtrl.create("AmenitiesModalPage", {
            list: this.amenities
        });
        modal.present();
    };
    SearchResultsDetailPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    SearchResultsDetailPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    SearchResultsDetailPage.prototype.showDetail = function (item) {
        this.addItemData(item);
        // item.mode = this.searchMode;
        // let modal = this.modalCtrl.create("SearchResultsRoomDetailPage", { classDetail: item });
        // modal.present()
        this.navCtrl.push("SearchResultsRoomDetailPage", {
            classDetail: item,
            rules: this.items
        }, {
            animate: true,
            animation: 'ios-transition',
            direction: 'forward'
        });
    };
    SearchResultsDetailPage.prototype.showBookingDetail = function (item) {
        // item.mode = this.searchMode;
        if (this.parseService.getCurrentUser() != null) {
            this.addItemData(item);
            this.navCtrl.push("BookingDetailsPage", {
                classDetail: item,
                rules: this.items
            }, {
                animate: true,
                animation: 'ios-transition',
                direction: 'forward'
            });
        }
        else {
            this.presentLoginRegis(item);
        }
    };
    SearchResultsDetailPage.prototype.presentLoginRegis = function (item) {
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
                        var login = _this.modalCtrl.create("LoginPage", {
                            backToParent: true
                        });
                        login.present();
                        login.onDidDismiss(function () {
                            _this.showBookingDetail(item);
                        });
                    }
                },
                {
                    text: registerBtn,
                    handler: function () {
                        var register = _this.modalCtrl.create("SignUpPage", {
                            backToParent: true
                        });
                        register.present();
                        register.onDidDismiss(function () {
                            _this.showBookingDetail(item);
                        });
                    }
                },
                cancelBtn
            ]
        });
        alert.present();
    };
    SearchResultsDetailPage.prototype.addItemData = function (item) {
        item.propName = this.roomDetail.name;
        item.mode = this.searchMode;
        item.checkIn = this.searchDate;
        item.duration = this.duration;
        item.roomQty = this.roomQty;
        item.propDetail = this.navParams.get('room');
        item.currentLanguage = this.currentLanguage;
        return item;
    };
    SearchResultsDetailPage.prototype.presentPopover = function (myEvent) {
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
    ], SearchResultsDetailPage.prototype, "navBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], SearchResultsDetailPage.prototype, "slides", void 0);
    SearchResultsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-results-detail',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search-results-detail/search-results-detail.html"*/'<ion-header class="cls-search-rest" [ngClass]="searchModeClass">\n  <ion-navbar>\n    <ion-title>\n      <span style="font-size:1.5rem">\n        {{ destination || "NEARBY" | translate}}\n        <br/>\n        <span *ngIf="searchMode == 0" style="font-weight:400">{{searchDate | date:\'d MMM y\'}} • {{duration}} hour(s)</span>\n        <span *ngIf="searchMode == 1" style="font-weight:400">{{searchDate | date:\'d MMM y\'}} • 24 {{"HOURS" | translate}}</span>\n        <span *ngIf="searchMode == 2" style="font-weight:400">{{searchDate | date:\'d MMM y\'}} • {{duration}} night(s)</span>\n      </span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="extra-header">\n    <ion-title no-padding class="custom-header">\n      <span class="text-tax">\n        {{"PRICING_NOTICE" | translate }}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen="true" [ngClass]="searchModeClass">\n  <ion-grid *ngIf="loadData" no-padding>\n    <ion-slides pager="true" style="height:180px;object-fit:cover" (ionSlideTap)="popImagesWindow()">\n      <!--<ion-slide>-->\n        <!--<img src={{roomDetail.thumbnail}} />-->\n      <!--</ion-slide>-->\n      <ion-slide *ngFor="let image of images">\n        <img src={{image._url}}>\n      </ion-slide>\n    </ion-slides>\n    <div padding>\n      <ion-row>\n        <ion-col class="text-title">\n          {{roomDetail.name}}\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center class="div-separator">\n        <!--<ion-col col-3>-->\n          <!--<ion-badge class="custom-badge custom-badge-type">{{roomDetail.category}}</ion-badge>-->\n        <!--</ion-col>-->\n        <ion-col text-left>\n          <rating [(ngModel)]="roomDetail.rating" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n            starIconName="star" nullable="false">\n          </rating>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <span class="text-header">{{"ADDRESS" | translate}}</span>\n          <br/>\n          <span class="text-content">{{displayAddress}}</span>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col>\n        <img src="https://maps.googleapis.com/maps/api/staticmap?size=360x200&scale=2&sensor=false&maptype=roadmap&markers=color:purple|{{latitude}},{{longitude}}&key=AIzaSyBPPdd-znA26ByPuwlZpf_-w7vhDtBpS6w">\n      </ion-col>\n    </ion-row>\n    <ion-row padding align-items-center (click)="showMore()" style="border-bottom: 1px solid lightgrey">\n      <ion-col text-center *ngFor="let item of filterArray(amenities,1) | slice:0:4">\n        <img src="{{item.image}}" style="min-width:36px;max-width:36px" />\n        <br/>\n        <label class="text-small" text-center>{{item.title | translate}}</label>\n      </ion-col>\n      <ion-col text-center *ngIf="filterArray(amenities,1).length > 4">\n        <div>\n          <ion-icon name="add">{{filterArray(amenities,1).length - 4}}</ion-icon>\n          <br/>\n          <label>{{"SEE_ALL" | translate}}</label>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col>\n        <span class="text-header">{{"ABOUT_THIS_PROPERTY" | translate}}</span>\n        <br />\n        <span *ngIf="(displayDescriptionCntWords > 0 && displayDescriptionCntWords <= limitWords)" class="text-content" [innerHTML]="displayDescriptionFull"></span>\n        <span *ngIf="truncating && displayDescriptionCntWords > limitWords" class="text-content" [innerHTML]="displayDescription"></span>\n        <span *ngIf="!truncating && displayDescriptionCntWords > limitWords" class="text-content" [innerHTML]="displayDescriptionFull"></span>\n        <div *ngIf="displayDescriptionCntWords > limitWords" class="toggle-show-less use-search-color">\n          <span #toggelSpan (click)="truncating = toggleShowLess(toggelSpan, truncating)">{{"MORE" | translate}}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="section-separator">\n\n  </div>\n  <ion-list no-margin padding>\n    <ion-row>\n      <ion-col>\n        <b style="text-transform:uppercase;color:rgb(155,155,155)">{{"SELECT_ROOM" | translate}}</b>\n      </ion-col>\n    </ion-row>\n    <ion-row tappable *ngFor="let section of roomDetail.classes" (click)="showDetail(section)">\n      <ion-col>\n        <ion-item class="top-div-separator" no-lines>\n          <ion-thumbnail item-left>\n            <img src={{section.thumbnail}} style="object-fit:contain">\n          </ion-thumbnail>\n          <span class="text-section">{{section.name}}</span>\n          <br />\n          <span class="text-subsection">{{section.roomOverview[0]}} • {{section.unitCapacity}} {{"GUEST(S)" | translate}}/{{"ROOM" | translate}}</span>\n        </ion-item>\n        <ion-item style="padding-left: 0px" no-lines>\n          <ion-row align-items-center>\n            <ion-col col-6 class="text-facility" *ngFor="let type of section.facilityArr">\n              <img style="width:12px;height:12px;margin-bottom:-2px" [src]="type.value == 0 ? type.imageB : type.imageA" />\n              <span *ngIf="type.value == 0">{{type.title1 | translate}}</span>\n              <span *ngIf="type.value == 1">{{type.title2 | translate}}</span>\n            </ion-col>\n          </ion-row>\n          <!-- <ion-row align-items-center>\n            <ion-col class="text-facility">\n              Free Breakfast\n            </ion-col>\n            <ion-col class="text-facility">\n              <img style="width:12px;height:12px;margin-bottom:-2px" [src]="smoking ? \'assets/images/{{"ROOM" | translate}}-overview/Smoking.png\' : \'assets/images/{{"ROOM" | translate}}-overview/No Smoking.png\'" /> No Smoking Room\n            </ion-col>\n          </ion-row> -->\n        </ion-item>\n        <ion-item style="padding-left: 0px" no-lines>\n          <ion-row align-items-center>\n            <ion-col>\n            </ion-col>\n            <ion-col text-right>\n              <span class="text-subprice" *ngIf="searchMode == 0">\n                <span *ngIf="section.discountRate > 0">\n                  <s>\n                    {{currencySymbol}} {{section.priceList[duration-1].price | number:\'1.0-0\'}}\n                  </s>\n                  /{{"ROOM" | translate}} {{"FOR" | translate}} {{duration}} {{"HOURS" | translate}}\n                </span>\n                <span *ngIf="section.discountRate == 0">\n                  Price/{{"ROOM" | translate}} {{"FOR" | translate}} {{duration}} {{"HOURS" | translate}}\n                </span>\n              </span>\n              <span class="text-subprice" *ngIf="searchMode == 1">\n                <span *ngIf="section.discountRate > 0">\n                  <s>\n                    {{currencySymbol}} {{section.pricing24 | number:\'1.0-0\'}}\n                  </s>\n                  /{{"ROOM" | translate}} {{"FOR" | translate}} 24 {{"HOURS" | translate}}\n                </span>\n                <span *ngIf="section.discountRate == 0">\n                  Price/{{"ROOM" | translate}} {{"FOR" | translate}} 24 {{"HOURS" | translate}}\n                </span>\n              </span>\n              <span class="text-subprice" *ngIf="searchMode == 2">\n                <span *ngIf="section.discountRate > 0">\n                  <s>\n                    {{currencySymbol}} {{section.price | number:\'1.0-0\'}}\n                  </s>\n                  /{{"ROOM" | translate}}/night\n                </span>\n                <span *ngIf="section.discountRate == 0">\n                  Price/{{"ROOM" | translate}}/night\n                </span>\n              </span>\n            </ion-col>\n          </ion-row>\n          <ion-row align-items-center>\n            <ion-col>\n              <i class="text-other">{{section.availableUnits}} {{"ROOM(S)" | translate}} {{"LEFT" | translate}}</i>\n            </ion-col>\n            <ion-col text-right>\n              <span class="text-price" *ngIf="searchMode == 0">\n                {{currencySymbol}} {{section.priceList[duration-1].price * ((100-section.discountRate)/100) | number:\'1.0-0\'}}\n              </span>\n              <span class="text-price" *ngIf="searchMode == 1">\n                {{currencySymbol}} {{section.pricing24 * ((100-section.discountRate)/100) | number:\'1.0-0\'}}\n              </span>\n              <span class="text-price" *ngIf="searchMode == 2">\n                {{currencySymbol}} {{section.price * ((100-section.discountRate)/100) | number:\'1.0-0\'}}\n              </span>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <div class="cls-button-submit">\n          <button ion-button block (click)="showBookingDetail(section);$event.stopPropagation()">{{"BOOK_THIS_ROOM" | translate}}</button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n  <div class="section-separator">\n\n  </div>\n  <ion-list>\n    <ion-item *ngFor="let item of items; let i = index" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n      <span class="text-title">{{item.title | translate}}</span>\n      <ion-icon item-end color="success" item-right [name]="isGroupShown(i) ? \'md-arrow-dropdown\' : \'md-arrow-dropright\'"></ion-icon>\n      <div *ngIf="isGroupShown(i)">\n        <span *ngIf="currentLanguage == \'en\'" class="text-content" [innerHTML]="item.text"></span>\n        <span *ngIf="currentLanguage == \'id\'" class="text-content" [innerHTML]="item.textINA"></span>        \n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search-results-detail/search-results-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], SearchResultsDetailPage);
    return SearchResultsDetailPage;
}(__WEBPACK_IMPORTED_MODULE_5__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=search-results-detail.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectivityServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConnectivityServiceProvider = (function () {
    function ConnectivityServiceProvider(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    ConnectivityServiceProvider.prototype.isOnline = function () {
        if (this.onDevice && this.network.onConnect()) {
            return this.network.type !== Connection.NONE;
        }
        else {
            return navigator.onLine;
        }
    };
    ConnectivityServiceProvider.prototype.isOffline = function () {
        if (this.onDevice && this.network.type) {
            return this.network.type === Connection.NONE;
        }
        else {
            return !navigator.onLine;
        }
    };
    ConnectivityServiceProvider.prototype.watchOnline = function () {
        return this.network.onConnect();
    };
    ConnectivityServiceProvider.prototype.watchOffline = function () {
        return this.network.onDisconnect();
    };
    ConnectivityServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], ConnectivityServiceProvider);
    return ConnectivityServiceProvider;
}());

//# sourceMappingURL=connectivity-service.js.map

/***/ }),

/***/ 228:
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
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/amenities-modal/amenities-modal.module": [
		694,
		30
	],
	"../pages/booking-confirmation/booking-confirmation.module": [
		695,
		29
	],
	"../pages/booking-details/booking-details.module": [
		696,
		0
	],
	"../pages/bookings-modal/bookings-modal.module": [
		697,
		28
	],
	"../pages/calendar-modal/calendar-modal.module": [
		698,
		3
	],
	"../pages/edit-password-modal/edit-password-modal.module": [
		699,
		27
	],
	"../pages/edit-profile/edit-profile.module": [
		700,
		26
	],
	"../pages/filter-modal/filter-modal.module": [
		701,
		25
	],
	"../pages/forgot-password/forgot-password.module": [
		702,
		2
	],
	"../pages/help/help.module": [
		703,
		24
	],
	"../pages/home/home.module": [
		704,
		23
	],
	"../pages/inbox/inbox.module": [
		708,
		22
	],
	"../pages/input-biodata/input-biodata.module": [
		705,
		21
	],
	"../pages/login-modal/login-modal.module": [
		706,
		20
	],
	"../pages/login/login.module": [
		707,
		31
	],
	"../pages/maps/maps.module": [
		709,
		1
	],
	"../pages/method-credit/method-credit.module": [
		710,
		19
	],
	"../pages/method-transfer/method-transfer.module": [
		711,
		18
	],
	"../pages/other-amenities-modal/other-amenities-modal.module": [
		712,
		17
	],
	"../pages/payment-confirmation/payment-confirmation.module": [
		713,
		16
	],
	"../pages/payment-detail/payment-detail.module": [
		714,
		15
	],
	"../pages/payment-method/payment-method.module": [
		715,
		14
	],
	"../pages/popimages/pop-images.module": [
		716,
		13
	],
	"../pages/popover/popover.module": [
		717,
		12
	],
	"../pages/promo/promo.module": [
		718,
		11
	],
	"../pages/search-results-room-detail/search-results-room-detail.module": [
		719,
		10
	],
	"../pages/search/search.module": [
		720,
		9
	],
	"../pages/settings/settings.module": [
		721,
		8
	],
	"../pages/sign-up-modal/sign-up-modal.module": [
		722,
		7
	],
	"../pages/sign-up/sign-up.module": [
		723,
		6
	],
	"../pages/tabs-owner/tabs-owner.module": [
		724,
		5
	],
	"../pages/user-profile/user-profile.module": [
		725,
		4
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
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalConfigurationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by wiyantotan on 12/14/17.
 */

var GlobalConfigurationService = (function () {
    function GlobalConfigurationService() {
        this.googleWebClientId = "893535746-sn72vimijokkcl28to64agqaqug1lg6m.apps.googleusercontent.com";
        this.facebookAppId = "1948856395186659";
        this.defaultLang = "id";
    }
    GlobalConfigurationService.SRC_PAYMENT = 'KPG';
    GlobalConfigurationService.CLOSE_PAGE_TYPE = { DISMISS_MODAL: 1, RELOAD_ROOT: 2 };
    GlobalConfigurationService.GHOURS_LOGO_PATH = "assets/images/klikpegi_full.png";
    GlobalConfigurationService.SEARCH_TYPE = { SRC_TRANSIT: 0, SRC_24HOURS: 1, SRC_1NIGHT: 2 };
    GlobalConfigurationService.CNT_DATA_PER_PAGE = 10;
    GlobalConfigurationService.SEARCH_MODE_CURRENT = 0;
    GlobalConfigurationService.TRUNCATE_WORDS_COUNT = 40;
    GlobalConfigurationService.DEVELOPMENT_MODE = false;
    GlobalConfigurationService.VERITRANS_DEV_KEY = {
        CLIENT_KEY: "SB-Mid-client-96jawtCGS_iRIi8E",
        SERVER_KEY: "SB-Mid-client-96jawtCGS_iRIi8E"
    };
    GlobalConfigurationService.VERITRANS_PROD_KEY = {
        CLIENT_KEY: "SB-Mid-client-96jawtCGS_iRIi8E",
        SERVER_KEY: "SB-Mid-client-96jawtCGS_iRIi8E"
    };
    GlobalConfigurationService.GHOURS_PAYMENT_URL = "http://www.g-hours.me/demo/payment/method";
    GlobalConfigurationService.IN_APP_BROWSER_OPTIONS = "location=no,clearcache=yes,clearsessioncache=yes,footer=no";
    GlobalConfigurationService.PAYMENT_STATUS = { COMPLETE: '1', PENDING: '2', ERROR: '3', NEW: '0' };
    GlobalConfigurationService.KODE_UNIQUE = 0;
    GlobalConfigurationService.CURRENCY_SYMBOL = "Rp.";
    GlobalConfigurationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GlobalConfigurationService);
    return GlobalConfigurationService;
}());

//# sourceMappingURL=global-configuration-service.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_parse__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the Parse provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
var ParseService = (function () {
    function ParseService(http, loadingCtrl, globalConfig) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.globalConfig = globalConfig;
        __WEBPACK_IMPORTED_MODULE_5_parse__["initialize"]("KLIKPEGI_ENGINE");
        __WEBPACK_IMPORTED_MODULE_5_parse__["serverURL"] = "http://api.klikpegi.com:8283/klikpegiapi";
    }
    ParseService.prototype.getUserContact = function (keyword) {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        if (user == null) {
            return [];
        }
        else {
            var userContact = user.relation('contact_list');
            var qUserContact = userContact.query();
            // qUserContact.contains("contact_name", keyword);
            qUserContact.contains("contact_name_src", keyword.toLowerCase());
            var contactList_1 = [];
            return qUserContact.find().then(function (contacts) {
                for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
                    var contact = contacts_1[_i];
                    var contactData = {
                        name: contact.get("contact_name"),
                        phone: contact.get("contact_phone"),
                        email: contact.get("contact_email")
                    };
                    contactList_1.push(contactData);
                }
                console.log(JSON.stringify(contactList_1));
                return contactList_1;
            });
        }
    };
    ParseService.prototype.getCurrentUser = function () {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        if (user == null) {
            console.log('no user found');
            return null;
        }
        else {
            var userData = {
                id: user.id,
                fullName: user.get("fullName"),
                email: user.get("username"),
                phoneNo: user.get("phone_number"),
            };
            return userData;
        }
    };
    ParseService.prototype.getRoomList = function () {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        var room = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Room");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](room);
        var roomList = [];
        query.include("owner");
        query.equalTo("owner", {
            __type: "Pointer",
            className: "_User",
            objectId: user.id
        });
        return query.find().then(function (rooms) {
            for (var _i = 0, rooms_1 = rooms; _i < rooms_1.length; _i++) {
                var room_1 = rooms_1[_i];
                var roomData = {
                    name: room_1.get("name"),
                    desc: room_1.get("description"),
                    location: room_1.get("location"),
                    id: room_1.id
                };
                roomList.push(roomData);
            }
            return roomList;
        });
    };
    ParseService.prototype.getGlobalSettings = function () {
        var setting = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Global");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](setting);
        // query.equalTo("objectId", 'ZVkfqnFzg2');
        return query.first().then(function (data) {
            var globalSettings = {
                id: data.id,
                email: data.get('adminEmail'),
                bank: data.get('bankAccount')
            };
            return globalSettings;
        });
    };
    ParseService.prototype.getRoomDetails = function (room_id) {
        var room = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Room");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](room);
        console.log(room_id);
        query.equalTo("objectId", room_id);
        query.include("owner");
        query.include("tenant");
        return query.first().then(function (dt) {
            var detailData = {
                name: dt.get("name"),
                desc: dt.get("description"),
                owner: dt.get("owner").get("first_name"),
                price: dt.get("price"),
                thumbnail: dt.get("thumbnail") ? dt.get("thumbnail")._url : "assets/images/Placeholder.png",
            };
            console.log(detailData);
            return detailData;
        });
    };
    ParseService.prototype.getOwnerRoomDetails = function (room_id) {
        var room = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Room");
        var bookings = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Booking");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](room);
        var bookingsQuery = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](bookings);
        var bookingList = [];
        var roomData = {
            detail: {},
            bookings: {}
        };
        console.log(room_id);
        query.equalTo("objectId", room_id);
        query.include("owner");
        query.include("tenant");
        return query.first().then(function (dt) {
            var detailData = {
                name: dt.get("name"),
                desc: dt.get("description"),
                owner: dt.get("owner").get("first_name"),
                price: dt.get("price"),
            };
            bookingsQuery.equalTo("room", {
                __type: "Pointer",
                className: "Room",
                objectId: room_id
            });
            bookingsQuery.include("tenant");
            return bookingsQuery.find().then(function (bookings) {
                for (var _i = 0, bookings_1 = bookings; _i < bookings_1.length; _i++) {
                    var booking = bookings_1[_i];
                    var bookingData = {
                        tenant: booking.get("tenant").get("first_name"),
                        checkIn: booking.get("start_date"),
                        interval: booking.get("interval")
                    };
                    bookingList.push(bookingData);
                }
                roomData.detail = detailData;
                roomData.bookings = bookingList;
                return roomData;
            });
        });
    };
    ParseService.prototype.getOwnerBookingList = function () {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current().toPointer();
        var booking = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Booking");
        var bookingsQuery = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](booking);
        var room = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Room");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](room);
        var bookingList = [];
        query.include("owner");
        query.equalTo("owner", {
            __type: "Pointer",
            className: "_User",
            objectId: user.objectId
        });
        bookingsQuery.include("room");
        bookingsQuery.include("tenant");
        bookingsQuery.include("room.owner");
        bookingsQuery.matchesQuery("room", query);
        return bookingsQuery.find().then(function (bookings) {
            console.log(bookings);
            for (var _i = 0, bookings_2 = bookings; _i < bookings_2.length; _i++) {
                var booking_1 = bookings_2[_i];
                var tenant = booking_1.get("tenant");
                var bookingData = {
                    tenant: tenant.get("first_name"),
                    checkIn: booking_1.get("start_date"),
                    stayTime: booking_1.get("interval")
                };
                bookingList.push(bookingData);
            }
            return bookingList;
        });
    };
    ParseService.prototype.getBookingList = function () {
        var _this = this;
        console.log("masuk Parse service, get booking list");
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        var order = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Order");
        var orderQuery = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](order);
        var bookingList = [];
        orderQuery.equalTo("booker", {
            __type: "Pointer",
            className: "_User",
            objectId: user.id
        });
        orderQuery.include("class");
        orderQuery.include("class.property");
        orderQuery.include("class.property.owner");
        return orderQuery.find().then(function (orders) {
            var bookingPromise = [];
            var orderList = [];
            console.log(JSON.stringify(orders));
            console.log("don print json stringify");
            var ix = 0;
            for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
                var order_1 = orders_1[_i];
                console.log("get " + ix++);
                var orderData = {
                    id: order_1.id,
                    totalPrice: order_1.get("totalPrice"),
                    uniqueCode: order_1.get("uniqueCode"),
                    propertyName: order_1.get("class").get("property").get("name"),
                    location: order_1.get("class").get("property").get('location'),
                    propertyTypeName: _this.getPropertyName(order_1.get("class").get("property").get("type")),
                    owner: _this.getPropertyName(order_1.get("class").get("property").get("owner").get("username")),
                    discountRate: order_1.get("class").get("discountRate"),
                    transitPrice: order_1.get("class").get("transitPrice"),
                    className: order_1.get("class").get("name"),
                    price: order_1.get("class").get("pricing"),
                    price24: order_1.get("class").get("pricing24"),
                    checkIn: order_1.get("start_date"),
                    type: order_1.get("type"),
                    checkOut: order_1.get("end_date"),
                    interval: order_1.get("interval"),
                    unitQty: order_1.get("unitBooked"),
                    thumbnail: order_1.get("class").get("property").get("thumbnail") ? order_1.get("class").get("property").get("thumbnail")._url : "assets/images/Placeholder.png",
                    statusCode: order_1.get("statusCode"),
                    status: _this.getStatusName(order_1.get("statusCode")),
                    transfer: order_1.get("transfer") ? order_1.get("transfer")._url : undefined,
                    orderData: order_1.get("orderData") ? order_1.get("orderData") : undefined,
                    displayAddress: order_1.get("class").get("property").get('displayAddress') ? order_1.get("class").get("property").get('displayAddress') : order_1.get("class").get("property").get("address"),
                    priceList: order_1.get("priceList"),
                    orderExpiry: order_1.get("orderExpiry")
                };
                orderList.push(orderData);
                console.log("ok" + ix);
                // console.log(orderList)
            }
            console.log("finish parse service get booking list !!");
            return orderList;
        });
    };
    ParseService.prototype.getStatusName = function (code) {
        switch (code) {
            case 0: {
                return 'WAITING_FOR_PAYMENT';
            }
            case 1: {
                return 'LOADING_PAYMENT';
            }
            case 2: {
                return 'TRANSACTION_COMPLETE';
            }
            default:
                return 'Undefined';
        }
    };
    ParseService.prototype.getPropertyName = function (code) {
        switch (code) {
            case 0: {
                return 'Hotel';
            }
            default:
                return 'Other';
        }
    };
    ParseService.prototype.getStayingType = function (code) {
        switch (code.toString()) {
            case '0':
                return 'Transit';
            case '1':
                return '24 Hours';
            case '2':
                return '1 Night';
            default:
                return 'Other';
        }
    };
    ParseService.prototype.getCategoryName = function (code) {
        switch (code) {
            case '0':
                return 'B&B';
            case '1':
                return 'Hostel';
            case '2':
                return 'Apartment';
            case '3':
                return 'Resort';
            case '4':
                return 'Homestay';
            case '5':
                return 'Hotel';
            case '6':
                return 'Villa';
        }
    };
    ParseService.prototype.getRoomType = function (code) {
        switch (+code) {
            case 0: {
                return 'Transit';
            }
            case 1: {
                return '24 hours';
            }
            case 2: {
                return '1 Night';
            }
            default:
                return 'Others';
        }
    };
    ParseService.prototype.getLiveBooking = function () {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        var order = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Order");
        var orderQuery = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](order);
        var bookingList = [];
        console.log(user.id);
        orderQuery.equalTo("booker", {
            __type: "Pointer",
            className: "_User",
            objectId: user.id
        });
        orderQuery.include("class");
        orderQuery.include("class.property");
        return orderQuery.subscribe();
    };
    ParseService.prototype.getBookingDetails = function (booking_id) {
        var booking = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Booking");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](booking);
        console.log(booking_id);
        query.include("room");
        query.include("room.owner");
        query.equalTo("room", {
            __type: "Pointer",
            className: "Room",
            objectId: booking_id
        });
        return query.first().then(function (dt) {
            var room = dt.get("room");
            var detailData = {
                name: room.get("name"),
                desc: room.get("description"),
                owner: room.get("owner").get("first_name"),
                checkIn: dt.get("start_date"),
                interval: dt.get("interval")
            };
            return detailData;
        });
    };
    ParseService.prototype.getTenantDetails = function (room_id) {
        var room = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Room");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](room);
        console.log(room_id);
        query.equalTo("objectId", room_id);
        query.include("tenant");
        return query.first().then(function (dt) {
            var tenantData = {
                tenant: dt.get("tenant").get("first_name"),
                checkIn: dt.get("start_date"),
                interval: dt.get("interval")
            };
            console.log(tenantData);
            return tenantData;
        });
    };
    ParseService.prototype.searchProperties = function (params, opt) {
        var _this = this;
        var now = __WEBPACK_IMPORTED_MODULE_4_moment__().startOf('minute');
        var startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(params.checkIn).startOf('minute');
        var cntDatePerPage = __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CNT_DATA_PER_PAGE;
        var endDate;
        if (params.mode == 0) {
            endDate = startDate.clone().add(+params.duration + 1, 'h');
        }
        if (params.mode == 1) {
            endDate = startDate.clone().add(25, 'h');
        }
        if (params.mode == 2) {
            endDate = startDate.clone().add(+params.duration + 1, 'd');
        }
        var property = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Property");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](property);
        var lat = params.location.geometry.location.lat();
        var lng = params.location.geometry.location.lng();
        var propertyList = [];
        var geoPoint = new __WEBPACK_IMPORTED_MODULE_5_parse__["GeoPoint"]({
            latitude: lat,
            longitude: lng
        });
        var guestLimit = Math.ceil(params.guest / params.room);
        query.include('owner');
        query.withinKilometers("location", geoPoint, +params.radius);
        query.equalTo('isSearchable', true);
        query.ascending(['category', 'id']);
        query.skip((params.pageno * cntDatePerPage));
        query.limit(cntDatePerPage);
        if (opt !== undefined) {
            if (opt.filterOpt !== undefined) {
                var arr = [];
                // If opt.filterOpt undefined, then search all the categories
                if (opt.filterOpt.length == 0) {
                    arr = ['0', '1', '2', '3', '4', '5', '6'];
                }
                else {
                    // If filter opt available, filter the search only from selected categories
                    for (var _i = 0, _a = opt.filterOpt; _i < _a.length; _i++) {
                        var asd = _a[_i];
                        arr.push(asd.toString());
                    }
                }
                query.containedIn('category', arr);
            }
        }
        return query.find().then(function (result) {
            //Query for finding property data
            var promises = [];
            var _loop_1 = function (property_1) {
                var propertyData = {
                    id: property_1.id,
                    owner: property_1.get('owner') ? property_1.get('owner').get('username') : 'undefined',
                    address: property_1.get('address'),
                    displayAddress: property_1.get('displayAddress'),
                    description: property_1.get('description'),
                    descriptionINA: property_1.get('descriptionINA'),
                    amenities: property_1.get('amenities'),
                    name: property_1.get('name'),
                    gallery: property_1.get("images"),
                    thumbnail: property_1.get("thumbnail") ? property_1.get("thumbnail")._url : "assets/images/Placeholder.png",
                    type: property_1.get('type'),
                    location: property_1.get('location'),
                    category: _this.getCategoryName(property_1.get('category')),
                    rules: property_1.get("rules"),
                    rulesINA: property_1.get("rulesINA"),
                    cancellationPolicy: property_1.get("cancellationPolicy"),
                    cancellationPolicyINA: property_1.get("cancellationPolicyINA"),
                    paymentPolicy: property_1.get("paymentPolicy"),
                    paymentPolicyINA: property_1.get("paymentPolicyINA"),
                    rating: property_1.get('ratingStar'),
                    classes: [],
                    availableClass: 0,
                    distance: (property_1.get("location").kilometersTo(geoPoint)).toFixed(2),
                    checkIn: property_1.get("checkIn"),
                    checkOut: property_1.get("checkOut"),
                };
                var classArr = [];
                var classRelation = property_1.relation('classList');
                promises.push(
                //Query for finding class data inside property
                classRelation.query().greaterThanOrEqualTo('guestPerUnit', guestLimit).find().then(function (classes) {
                    var promisesClass = [];
                    var _loop_2 = function (data) {
                        var classData = {
                            id: data.id,
                            name: data.get('name'),
                            price: data.get('pricing'),
                            pricing24: data.get('pricing24'),
                            description: data.get('description'),
                            deposit: data.get('deposit'),
                            gallery: data.get('photos'),
                            thumbnail: data.get('thumbnail') ? data.get('thumbnail')._url : 'assets/images/Placeholder.png',
                            unitCapacity: data.get('guestPerUnit'),
                            priceList: data.get('transitPrice'),
                            basicFacilities: data.get('basicFacilities'),
                            roomOverview: data.get('roomOverview'),
                            roomFacilities: data.get('roomFacilities'),
                            bathroomAmenities: data.get('bathroomAmenities'),
                            otherFacilities: data.get('otherFacilities'),
                            discountRate: data.get('discountRate'),
                            units: [],
                            availableUnits: 0
                        };
                        var unitRelation = data.relation('unitList');
                        var unitArr = [];
                        promisesClass.push(
                        //Query for finding unit data inside class
                        unitRelation.query().equalTo("isHidden", false).find().then(function (units) {
                            var promisesUnit = [];
                            var booking = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Booking");
                            var _loop_3 = function (unit) {
                                var bookingsQuery = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](booking);
                                var unitData = {
                                    id: unit.id,
                                    name: unit.get('name')
                                };
                                //Check in bookings if there are units with booking
                                bookingsQuery.equalTo("unit", {
                                    __type: "Pointer",
                                    className: "Unit",
                                    objectId: unitData.id
                                });
                                bookingsQuery.include("order");
                                //check in bookings if startDate or endDate available
                                bookingsQuery.greaterThan("true_end_date", startDate.toDate());
                                bookingsQuery.lessThan("start_date", endDate.toDate());
                                bookingsQuery.lessThan("orderExpiry", endDate.toDate());
                                promisesUnit.push(bookingsQuery.find(function (dt) {
                                    //Query for finding bookings for particular unit
                                    var bookings = [];
                                    for (var _i = 0, dt_1 = dt; _i < dt_1.length; _i++) {
                                        var booking_2 = dt_1[_i];
                                        console.log(startDate.toDate() + "\n" + endDate.toDate() + "\n" + classData.name + "\n" + booking_2);
                                        var statusCode = booking_2.get("order").get("statusCode");
                                        if (+statusCode != 4 && +statusCode != 3 && +statusCode != 2) {
                                            bookings.push(booking_2);
                                        }
                                    }
                                    if (bookings.length == 0) {
                                        //if no bookings, get unit data
                                        unitArr.push(unitData);
                                    }
                                }));
                            };
                            for (var _i = 0, units_1 = units; _i < units_1.length; _i++) {
                                var unit = units_1[_i];
                                _loop_3(unit);
                            }
                            return __WEBPACK_IMPORTED_MODULE_5_parse__["Promise"].when(promisesUnit).then(function (result) {
                                classData.units = unitArr;
                                classData.availableUnits = unitArr.length;
                                if (classData.availableUnits >= params.room) {
                                    classArr.push(classData);
                                }
                                propertyData.classes = classArr;
                                propertyData.availableClass = classArr.length;
                            }, function (err) {
                                console.log(err);
                            });
                        }));
                    };
                    for (var _i = 0, classes_1 = classes; _i < classes_1.length; _i++) {
                        var data = classes_1[_i];
                        _loop_2(data);
                    }
                    return __WEBPACK_IMPORTED_MODULE_5_parse__["Promise"].when(promisesClass).then(function (result) {
                        if (propertyData.availableClass > 0) {
                            propertyList.push(propertyData);
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }));
            };
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var property_1 = result_1[_i];
                _loop_1(property_1);
            }
            return __WEBPACK_IMPORTED_MODULE_5_parse__["Promise"].when(promises).then(function (result) {
                return propertyList;
            });
        }, function (err) {
            console.log(err);
        });
    };
    ParseService.prototype.bookRoom = function (data) {
        var _this = this;
        var startDate = __WEBPACK_IMPORTED_MODULE_4_moment__(data.checkIn).startOf('minute');
        // let now = moment(new Date())
        var endDate;
        var trueEndDate;
        var hourIn = __WEBPACK_IMPORTED_MODULE_4_moment__(data.propDetail.checkIn).get('hour');
        var minuteIn = __WEBPACK_IMPORTED_MODULE_4_moment__(data.propDetail.checkIn).get('minute');
        var hourOut = __WEBPACK_IMPORTED_MODULE_4_moment__(data.propDetail.checkOut).get('hour');
        var minuteOut = __WEBPACK_IMPORTED_MODULE_4_moment__(data.propDetail.checkOut).get('minute');
        console.log(hourIn, minuteIn, hourOut, minuteOut);
        if (data.mode == 0) {
            endDate = startDate.clone().add(+data.duration, 'h');
            trueEndDate = endDate.clone().add(1, 'h');
        }
        if (data.mode == 1) {
            endDate = startDate.clone().add(24, 'h');
            trueEndDate = endDate.clone().add(1, 'h');
        }
        if (data.mode == 2) {
            //Using today date but using hotel check in and check out time
            startDate = startDate.startOf("day").add(hourIn, 'h').add(minuteIn, 'm');
            endDate = startDate.clone().startOf("day").add(+data.duration, 'd').add(hourOut, 'h').add(minuteOut, 'm');
            trueEndDate = endDate.clone().add(1, 'h');
            console.log(startDate.toDate() + "\n" + endDate.toDate());
        }
        var bookingList = [];
        var newContactList = [];
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        var order = new __WEBPACK_IMPORTED_MODULE_5_parse__["Object"]("Order");
        var relation = order.relation('bookings');
        var i = 0;
        var userEmail = user.get('username');
        var relUserContact = user.relation('contact_list');
        var newUserContact = new __WEBPACK_IMPORTED_MODULE_5_parse__["Object"]("UserContact");
        newUserContact.set("contact_name", data.orderData.fullName);
        newUserContact.set("contact_name_src", data.orderData.fullName.toLowerCase());
        newUserContact.set("contact_email", data.orderData.email);
        newUserContact.set("contact_email_src", data.orderData.email.toLowerCase());
        newUserContact.set("contact_phone", data.orderData.phoneNo);
        newUserContact.set("user", {
            __type: "Pointer",
            className: "_User",
            objectId: user.id
        });
        newContactList.push(newUserContact);
        var existsUserContact = new __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("UserContact");
        var queryExistsUserContact = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](existsUserContact);
        queryExistsUserContact.equalTo("contact_name_src", data.orderData.fullName.toLowerCase());
        queryExistsUserContact.equalTo("contact_phone", data.orderData.phoneNo);
        queryExistsUserContact.equalTo("contact_email_src", data.orderData.email.toLowerCase());
        order.set("booker", user);
        order.set("class", {
            __type: "Pointer",
            className: "PropertyClass",
            objectId: data.id
        });
        if (+data.mode == 2)
            order.set("totalPrice", ((data.price * ((100 - data.discountRate) / 100)) * data.roomQty) - data.uniqueCode);
        if (+data.mode == 1) {
            order.set("totalPrice", data.pricing24);
        }
        if (+data.mode == 0) {
            order.set("totalPrice", data.priceList[+data.duration - 1].price * ((100 - data.discountRate) / 100) * data.roomQty - data.uniqueCode);
        }
        order.set("interval", +data.duration);
        order.set("start_date", startDate.toDate());
        order.set("end_date", endDate.toDate());
        order.set("true_end_date", trueEndDate.toDate());
        order.set("unitBooked", +data.roomQty);
        order.set("statusCode", 0);
        order.set("type", +data.mode);
        order.set("orderData", data.orderData);
        order.set("uniqueCode", data.uniqueCode);
        order.set("orderExpiry", __WEBPACK_IMPORTED_MODULE_4_moment__().add(30, 'm').toDate());
        for (var _i = 0, _a = data.units; _i < _a.length; _i++) {
            var unit = _a[_i];
            if (i < data.roomQty) {
                var booking = new __WEBPACK_IMPORTED_MODULE_5_parse__["Object"]("Booking");
                booking.set("unit", {
                    __type: "Pointer",
                    className: "Unit",
                    objectId: data.units[i++].id
                });
                booking.set("interval", +data.duration);
                booking.set("start_date", startDate.toDate());
                booking.set("end_date", endDate.toDate());
                booking.set("true_end_date", trueEndDate.toDate());
                booking.set("tenant", user);
                booking.set("type", +data.mode);
                booking.set("orderExpiry", __WEBPACK_IMPORTED_MODULE_4_moment__().add(30, 'm').toDate());
                booking.set("order", {
                    __type: "Pointer",
                    className: "Order",
                    objectId: order.id
                });
                bookingList.push(booking);
            }
        }
        return __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].saveAll(bookingList).then(function (success) {
            relation.add(bookingList);
            queryExistsUserContact.find().then(function (contacts) {
                if (contacts.length == 0) {
                    __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].saveAll(newContactList).then(function (success) {
                        relUserContact.add(newContactList);
                        user.save().then(function (success) {
                            console.log(success);
                        }, function (err) {
                            console.log(err);
                        });
                    }, function (error) {
                        console.log('add user contact error');
                        console.log(error);
                    });
                }
            }, function (error) {
                console.log('check user exist error');
                console.log(error);
            });
            return order.save().then(function (success) {
                // console.log("success order save");
                // console.log(JSON.stringify(success));
                // console.log(order.id);
                _this.bookedRoomOrderId = order.id;
                for (var _i = 0, bookingList_1 = bookingList; _i < bookingList_1.length; _i++) {
                    var booking = bookingList_1[_i];
                    booking.set("order", {
                        __type: "Pointer",
                        className: "Order",
                        objectId: order.id
                    });
                }
                return __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].saveAll(bookingList).then(function (success) {
                    console.log('success');
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    ParseService.prototype.sendEmail = function (data, mode) {
        console.log("Masuk send email", data, mode);
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        var userEmail = user.get('username');
        var emails;
        var totalPrice;
        if (+data.mode == 2)
            totalPrice = ((data.price * ((100 - data.discountRate) / 100)) * data.roomQty) - data.uniqueCode;
        if (+data.mode == 0)
            totalPrice = data.priceList[+data.duration - 1].price * ((100 - data.discountRate) / 100) * data.roomQty - data.uniqueCode;
        var subsTag = '{';
        var subsEndTag = '}';
        console.log("log 2");
        if (mode == "bookingPlacement") {
            var bookingPlacedEmails = [{
                    to: data.orderData.email,
                    from: "no-reply@klikpegi.com",
                    subject: "[klikpegi.com] Room Booking",
                    substitutions: {
                        'url': data.thumbnail,
                        'property_name': data.propName,
                        'room_type': data.name,
                        'check_in': data.checkIn,
                        'check_out': data.checkOut.toDate()
                    },
                    templateId: "94066132-d9a6-4c5f-87a1-82176fbda252"
                }, {
                    to: 'cs@klikpegi.com',
                    cc: 'info@klikpegi.com',
                    from: "no-reply@klikpegi.com",
                    subject: "[klikpegi.com] Booking Placed",
                    substitutions: {
                        'booking_ID': data.id,
                        'property_name': data.propName,
                        'property_type': data.propDetail.roomType,
                        'room_type': data.name,
                        'room_qty': data.roomQty,
                        'total_price': totalPrice
                    },
                    templateId: "15ef4b53-824f-4c85-a30d-a548e72a2a4b",
                }];
            emails = bookingPlacedEmails;
        }
        if (mode == "bookingCancel") {
            var bookingCancelEmails = [{
                    to: data.orderData.email,
                    from: "no-reply@klikpegi.com",
                    subject: "[klikpegi.com] Booking Cancelled",
                    substitutions: {
                        'url': data.thumbnail,
                        'property_name': data.propertyName,
                        'room_type': data.className,
                        'check_in': data.checkIn,
                        'check_out': data.checkOut
                    },
                    templateId: "e0789d21-80f7-4adf-a844-f2d8e916ccd5"
                }, {
                    to: 'cs@klikpegi.com',
                    cc: 'info@klikpegi.com',
                    from: "no-reply@klikpegi.com",
                    subject: "[klikpegi.com] Booking Cancelled",
                    substitutions: {
                        'booking_ID': data.id,
                        'property_name': data.propName,
                        'property_type': this.getRoomType(data.type),
                        'room_type': data.name,
                        'room_qty': data.roomQty,
                        'total_price': data.totalPrice,
                        'check_in': data.checkIn,
                        'check_out': data.checkOut
                    },
                    templateId: "3027d00c-e90f-4df1-af64-552d3379580d",
                }];
            emails = bookingCancelEmails;
        }
        if (mode == "paymentCompleted") {
            console.log("log 3");
            var paymentCompletedEmails = [{
                    to: data.orderData.email,
                    from: "no-reply@klikpegi.com",
                    subject: "[klikpegi.com] Payment Completed",
                    substitutions: {
                        'url': data.thumbnail,
                        'property_name': data.propertyName,
                        'room_type': data.className,
                        'check_in': data.checkIn,
                        'check_out': data.checkOut
                    },
                    templateId: "b3d32844-447a-400f-b372-8e4c291f2742"
                }, {
                    to: 'cs@klikpegi.com',
                    cc: 'info@klikpegi.com',
                    from: "no-reply@klikpegi.com",
                    subject: "[klikpegi.com] Payment Completed",
                    substitutions: {
                        'booking_ID': data.id,
                        'property_name': data.propertyName,
                        'property_type': data.propertyTypeName,
                        'room_type': data.className,
                        'room_qty': data.unitQty,
                        'total_price': data.totalPrice,
                        'check_in': data.checkIn,
                        'check_out': data.checkOut
                    },
                    templateId: "07ad9b45-1d86-4684-a080-8dcf32ba7c8e",
                }];
            console.log("log 4");
            emails = paymentCompletedEmails;
        }
        console.log("log 5");
        console.log('email mode', data, mode, emails);
        return __WEBPACK_IMPORTED_MODULE_5_parse__["Cloud"].run("sendMail", {
            msg: emails,
            subsTag: subsTag,
            subsEndTag: subsEndTag
        }).then(function (success) {
            console.log('multiple email sent');
        }, function (err) {
            console.log('failed to send', err);
        });
    };
    ParseService.prototype.cancelBooking = function (id) {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        var order = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Order");
        var orderQuery = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](order);
        var bookingList = [];
        orderQuery.equalTo("booker", {
            __type: "Pointer",
            className: "_User",
            objectId: user.id
        });
        orderQuery.equalTo("objectId", id);
        return orderQuery.first().then(function (data) {
            data.set("statusCode", 4);
            return data.save().then(function (success) {
                console.log(success);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ParseService.prototype.addRoom = function (roomData) {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current().toPointer();
        var room = new __WEBPACK_IMPORTED_MODULE_5_parse__["Object"]("Room");
        var location = new __WEBPACK_IMPORTED_MODULE_5_parse__["GeoPoint"]({
            latitude: roomData.location.lat,
            longitude: roomData.location.lng
        });
        console.log(location);
        console.log(roomData);
        room.set("owner", user);
        room.set("name", roomData.room_name);
        room.set("description", roomData.room_description);
        room.set("price", roomData.room_price);
        room.set("location", location);
        return room.save().then(function (success) {
            console.log(success);
        }, function (err) {
            console.log(err);
        });
    };
    /* User Account Management Module */
    ParseService.prototype.existingCheck = function (username) {
        console.log('parse existing user check');
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend('User');
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](user);
        query.equalTo('username', username);
        return query.first().then(function (user) {
            if (user != undefined) {
                console.log('parse user exist');
                var userData = {
                    fbAuth: user.get('fbAuth'),
                    googleAuth: user.get('googleAuth')
                };
                return userData;
            }
            else {
                console.log('parse user not exist');
                return null;
            }
        }, function (err) {
            console.log(err);
            return null;
        });
    };
    ParseService.prototype.signup = function (authData, pwd, method) {
        console.log('parse signup');
        var user = new __WEBPACK_IMPORTED_MODULE_5_parse__["User"]();
        user.set('username', authData.email);
        user.set('password', pwd);
        if (method == 'manual') {
            console.log('parse signup manual');
            user.set('email', authData.email);
            user.set('name', authData.fullName);
            user.set('fullName', authData.fullName);
            user.set('phone_number', authData.phoneNo);
        }
        else if (method == 'google') {
            console.log('parse signup google');
            user.set('googleAuth', pwd);
            user.set('name', authData.displayName);
            user.set('email', authData.email);
            user.set('first_name', authData.givenName);
            user.set('last_name', authData.familyName);
        }
        else if (method == 'facebook') {
            console.log('parse signup facebook');
            user.set('fbAuth', pwd);
            user.set('name', authData.fullName);
            user.set('email', authData.email);
            user.set('fullName', authData.fullName);
            user.set('first_name', authData.first_name);
            user.set('last_name', authData.last_name);
            user.set('gender', authData.gender);
            user.set('birthDate', authData.birthDate);
        }
        return user.signUp(null).then(function (success) {
            return success;
        }, function (err) {
            return err;
        });
    };
    ParseService.prototype.login = function (username, pwd) {
        console.log('parse login');
        return __WEBPACK_IMPORTED_MODULE_5_parse__["User"].logIn(username, pwd).then(function (success) {
            console.log('Login berhasil', success);
            return 'success';
        }, function (err) {
            console.log('Login failed', err);
            return 'error';
        });
    };
    ParseService.prototype.facebookInit = function () {
        var fbParams = {
            appId: this.globalConfig.facebookAppId,
            xfbml: true,
            version: 'v2.9'
        };
        return __WEBPACK_IMPORTED_MODULE_5_parse__["FacebookUtils"].init(fbParams);
    };
    ParseService.prototype.facebookLogin = function (authData) {
        return __WEBPACK_IMPORTED_MODULE_5_parse__["FacebookUtils"].logIn(authData, {
            success: function (user) {
                if (!user.existed()) {
                    console.log("User signed up and logged in through Facebook!");
                }
                else {
                    console.log("User logged in through Facebook!");
                }
                return user;
            },
            error: function (user, error) {
                return error;
            }
        });
    };
    ParseService.prototype.existingLinking = function (username, pwd, existingCheckData, method) {
        console.log('parse linking');
        var user = new __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend('User');
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](user);
        query.equalTo('username', username);
        return query.first().then(function (data) {
            if (method == 'manual') {
                console.log('Link Manual account to existing account');
                data.set('password', pwd);
                if (existingCheckData.googleAuth != undefined)
                    data.set('googleAuth', pwd);
                if (existingCheckData.fbAuth != undefined)
                    data.set('fbAuth', pwd);
            }
            else if (method == 'google') {
                console.log('Link Google account to existing account');
                data.set('googleAuth', pwd);
            }
            else if (method == 'facebook') {
                console.log('Link Facebook account to existing account');
                data.set('fbAuth', pwd);
            }
            return data.save().then(function (success) {
                console.log(success);
                return 'Linking success';
            }, function (err) {
                console.log(err);
                return 'Linking error';
            });
        });
    };
    ParseService.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_5_parse__["User"].logOut();
    };
    ParseService.prototype.forgotPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_5_parse__["User"].requestPasswordReset(email);
    };
    ParseService.prototype.editPassword = function (password) {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        user.setPassword(password);
        return user.save().then(function (success) {
            console.log(success);
        }, function (err) {
            console.log(err);
        });
    };
    /* User Account Management Module */
    ParseService.prototype.editProfile = function (data) {
        var user = __WEBPACK_IMPORTED_MODULE_5_parse__["User"].current();
        var userPointer = user.toPointer();
        var phoneNumber = +data.phoneNo;
        console.log(userPointer);
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](user);
        query.equalTo("objectId", userPointer.objectId);
        return query.first().then(function (userDetail) {
            userDetail.set("fullName", data.fullName);
            userDetail.set("phone_number", phoneNumber);
            userDetail.set("email", data.email);
            return userDetail.save().then(function (success) {
                console.log(success);
            });
        });
    };
    ParseService.prototype.uploadImage = function (id, image, filename) {
        console.log("id", id);
        console.log("image", image);
        var order = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Order");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](order);
        var ParseFile = new __WEBPACK_IMPORTED_MODULE_5_parse__["File"](filename, {
            base64: image
        });
        query.equalTo("objectId", id);
        return ParseFile.save().then(function (success) {
            console.log(success);
            return query.first().then(function (data) {
                data.set("statusCode", 1);
                data.set("transfer", success);
                return data.save().then(function (success) {
                    console.log(success);
                }, function (error) {
                    console.log(error);
                });
            });
        });
        // let fileTransfer: TransferObject = this.transfer.create()
        // let options: FileUploadOptions = {
        //   fileKey: 'file',
        //   fileName: 'image.jpg',
        // }
    };
    ParseService.prototype.confirmPayment = function (id) {
        var order = __WEBPACK_IMPORTED_MODULE_5_parse__["Object"].extend("Order");
        var query = new __WEBPACK_IMPORTED_MODULE_5_parse__["Query"](order);
        query.equalTo("objectId", id);
        return query.first().then(function (order) {
            order.set("statusCode", 1);
            return order.save().then(function (success) {
                console.log(success);
            });
        });
    };
    ParseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], ParseService);
    return ParseService;
}());

//# sourceMappingURL=parse-service.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBookingsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_countdown__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(221);
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














var MyBookingsDetailPage = (function (_super) {
    __extends(MyBookingsDetailPage, _super);
    function MyBookingsDetailPage(navCtrl, navParams, parseService, loadingCtrl, alertCtrl, toastCtrl, actionSheetCtrl, file, filePath, camera, base64, platform, popoverCtrl, translate, geolocation, launchNavigator, viewCtrl, globalConfig, inAppbrowser) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.parseService = parseService;
        _this.loadingCtrl = loadingCtrl;
        _this.alertCtrl = alertCtrl;
        _this.toastCtrl = toastCtrl;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.file = file;
        _this.filePath = filePath;
        _this.camera = camera;
        _this.base64 = base64;
        _this.platform = platform;
        _this.popoverCtrl = popoverCtrl;
        _this.translate = translate;
        _this.geolocation = geolocation;
        _this.launchNavigator = launchNavigator;
        _this.viewCtrl = viewCtrl;
        _this.globalConfig = globalConfig;
        _this.inAppbrowser = inAppbrowser;
        _this.bookingDetails = '';
        _this.priceString = {
            string1: '',
            string2: ''
        };
        _this.transitPrice = 0;
        _this.lastImage = null;
        _this.lastImagePath = null;
        _this.correctImage = '';
        _this.image64 = '';
        _this.parseService.getGlobalSettings().then(function (data) {
            _this.bank = data.bank[0];
            return _this.bank;
        });
        console.log("masuk mybookingdetail");
        _this.bookingDetails = navParams.get("bookingData");
        _this.bookingDetails.stayType = _this.getStayingType(_this.bookingDetails.type);
        console.log(_this.bookingDetails);
        var string = _this.bookingDetails.totalPrice.toString();
        if (string.length > 3) {
            _this.priceString.string1 = string.substring(0, string.length - 3);
            _this.priceString.string2 = string.substring(string.length - 3, string.length);
        }
        else {
            _this.priceString.string1 = '0';
            _this.priceString.string2 = '0';
        }
        console.log(_this.priceString);
        _this.transitPrice = _this.bookingDetails.transitPrice[+_this.bookingDetails.interval - 1].price;
        console.log("transit price", _this.transitPrice);
        return _this;
    }
    MyBookingsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyBookingsDetailPage');
    };
    MyBookingsDetailPage.prototype.showPaymentConfirmation = function () {
        this.navCtrl.push("PaymentConfirmationPage", {
            bookingData: this.bookingDetails
        });
    };
    MyBookingsDetailPage.prototype.getStayingType = function (code) {
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
    MyBookingsDetailPage.prototype.onFinished = function (booking) {
        setTimeout(function () {
            return booking.expired = true;
        }, 0);
    };
    MyBookingsDetailPage.prototype.cancelConfirm = function (id) {
        var _this = this;
        console.log(this.bookingDetails);
        var cancelTitle;
        var cancelMsg;
        var denyBtn;
        var applyBtn;
        var cancelSuccess;
        var cancelFailed;
        this.translate.get('CANCEL_BOOKING_ALERT_TITLE').subscribe(function (value) { cancelTitle = value; });
        this.translate.get('CANCEL_BOOKING_ALERT_MESSAGE').subscribe(function (value) { cancelMsg = value; });
        this.translate.get('CANCEL_BOOKING_ALERT_DENY').subscribe(function (value) { denyBtn = value; });
        this.translate.get('CANCEL_BOOKING_ALERT_APPLY').subscribe(function (value) { applyBtn = value; });
        this.translate.get('CANCEL_BOOKING_ALERT_SUCCESS').subscribe(function (value) { cancelSuccess = value; });
        this.translate.get('CANCEL_BOOKING_ALERT_FAILED').subscribe(function (value) { cancelFailed = value; });
        var confirm = this.alertCtrl.create({
            title: cancelTitle,
            message: cancelMsg,
            buttons: [{
                    text: denyBtn,
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: applyBtn,
                    handler: function () {
                        _this.parseService.sendEmail(_this.bookingDetails, "bookingCancel").then(function (success) {
                            _this.parseService.cancelBooking(id).then(function (success) {
                                _this.navCtrl.popToRoot();
                                _this.presentToast(cancelSuccess);
                            });
                        }, function (err) {
                            _this.navCtrl.popToRoot();
                            _this.presentToast(cancelFailed);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    MyBookingsDetailPage.prototype.presentActionSheet = function () {
        var _this = this;
        var selectImage;
        var loadLibrary;
        var useCamera;
        var cancel;
        this.translate.get('SELECT_IMAGE_SOURCE').subscribe(function (value) { selectImage = value; });
        this.translate.get('LOAD_FROM_LIBRARY').subscribe(function (value) { loadLibrary = value; });
        this.translate.get('USE_CAMERA').subscribe(function (value) { useCamera = value; });
        this.translate.get('CANCEL').subscribe(function (value) { cancel = value; });
        var actionSheet = this.actionSheetCtrl.create({
            title: selectImage,
            buttons: [{
                    text: loadLibrary,
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: useCamera,
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: cancel,
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    MyBookingsDetailPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var error;
        this.translate.get('ERROR_SELECT_IMAGE').subscribe(function (value) { error = value; });
        // Create options for the Camera Dialog
        var options = {
            quality: 50,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            console.log(imagePath);
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), imagePath);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), imagePath);
            }
        }, function (err) {
            _this.presentToast(error);
        });
    };
    MyBookingsDetailPage.prototype.continuePayment = function () {
        var _this = this;
        if (this.parseService.getCurrentUser() != null) {
            if (__WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].DEVELOPMENT_MODE) {
                this.refWindow = window.open(__WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].GHOURS_PAYMENT_URL + "/" + this.bookingDetails.id, '_blank', __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].IN_APP_BROWSER_OPTIONS);
            }
            else {
                this.refWindow = this.inAppbrowser.create(__WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].GHOURS_PAYMENT_URL + "/" + this.bookingDetails.id, '_blank', __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].IN_APP_BROWSER_OPTIONS);
            }
            this.refWindow.on("loadstop").subscribe(function (event) {
                _this.refWindow.executeScript({ code: "localStorage.setItem( 'payment_status', '" + __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].PAYMENT_STATUS.NEW + "' );" });
                // Start an interval
                _this.intervalWindow = setInterval((function () {
                    var _this = this;
                    var statusPayment = __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].PAYMENT_STATUS.NEW, isGetReturn = false;
                    var inReturn = setInterval(function () {
                        if (isGetReturn) {
                            clearInterval(inReturn);
                            // If a name was set, clear the interval and close the InAppBrowser.
                            if (statusPayment != __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */].PAYMENT_STATUS.NEW) {
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
            this.refWindow.on("exit").subscribe(function (event) {
                if (_this.intervalWindow !== false)
                    clearInterval(_this.intervalWindow);
                _this.navCtrl.popToRoot().then(_this.navCtrl.parent.select(2));
            });
        }
    };
    MyBookingsDetailPage.prototype.completedPayment = function () {
        var _this = this;
        var requestLoading;
        var confirmPaymentTitle;
        var confirmPaymentSubTitle;
        this.translate.get('LOADING_REQUEST').subscribe(function (value) { requestLoading = value; });
        this.translate.get('THANK_YOU').subscribe(function (value) { confirmPaymentTitle = value; });
        this.translate.get('PAYMENT_VERIFYING').subscribe(function (value) { confirmPaymentSubTitle = value; });
        if (this.lastImage !== null) {
            this.uploadImage();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: requestLoading,
            });
            loading_1.present();
            this.parseService.confirmPayment(this.bookingDetails.id).then(function (success) {
                _this.parseService.sendEmail(_this.bookingDetails, "paymentCompleted").then(function (res) {
                    loading_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: confirmPaymentTitle,
                        subTitle: confirmPaymentSubTitle,
                        buttons: [{
                                text: 'OK',
                                handler: function () {
                                    var callback = _this.navParams.get("callback");
                                    callback(2).then(function () {
                                        _this.navCtrl.popToRoot();
                                    });
                                }
                            }]
                    });
                    alert.present();
                }, function (err) {
                    console.log('send email failed');
                    loading_1.dismiss();
                });
            }, function (err) {
                loading_1.dismiss();
                console.log("completed payment error");
            });
        }
    };
    MyBookingsDetailPage.prototype.uploadImage = function () {
        var _this = this;
        var requestLoading;
        var confirmPaymentTitle;
        var confirmPaymentSubTitle;
        var tryAgain;
        this.translate.get('LOADING_REQUEST').subscribe(function (value) { requestLoading = value; });
        this.translate.get('NEW_FRIEND').subscribe(function (value) { confirmPaymentTitle = value; });
        this.translate.get('PAYMENT_VERIFYING').subscribe(function (value) { confirmPaymentSubTitle = value; });
        this.translate.get('FAILED_TRY_AGAIN').subscribe(function (value) { tryAgain = value; });
        //let targetPath = this.pathForImage(this.lastImage)
        var filename = this.lastImage;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: requestLoading,
        });
        if (this.platform.is('ios'))
            this.lastImagePath = this.lastImagePath.replace(/^file:\/\//, '');
        this.base64.encodeFile(this.lastImagePath).then(function (base64File) {
            var base64 = base64File.substr(base64File.indexOf(',') + 1);
            loading.present();
            _this.parseService.uploadImage(_this.bookingDetails.id, base64, filename).then(function (success) {
                var alert = _this.alertCtrl.create({
                    title: confirmPaymentTitle,
                    subTitle: confirmPaymentSubTitle,
                    buttons: [{
                            text: 'OK',
                            handler: function () {
                                _this.navCtrl.popToRoot();
                            }
                        }]
                });
                loading.dismiss();
                alert.present();
            }, function (err) {
                loading.dismiss();
                _this.presentToast(tryAgain);
                console.log(err);
            });
        }, function (err) {
            loading.dismiss();
            _this.presentToast(tryAgain);
            console.log(err);
        });
    };
    // Create a new name for the image
    MyBookingsDetailPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    MyBookingsDetailPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, imagePath) {
        var _this = this;
        var errorStore;
        this.translate.get('ERROR_STORE_FILE').subscribe(function (value) { errorStore = value; });
        console.log("masuk copy file", imagePath);
        var directory = cordova.file.dataDirectory;
        console.log('masuk copy file 2', imagePath);
        this.file.copyFile(namePath, currentName, directory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
            _this.lastImagePath = imagePath;
            console.log('setelah copy file 3', _this.lastImagePath);
        }, function (error) {
            _this.presentToast(errorStore);
        });
    };
    // Always get the accurate path to your apps folder
    MyBookingsDetailPage.prototype.pathForImage = function (img) {
        // this.presentToast('image ada')
        if (img === null) {
            return '';
        }
        else {
            console.log('file path', cordova.file.dataDirectory + img);
            if (this.platform.is('ios')) {
                var itemSrc = cordova.file.dataDirectory + img;
                itemSrc = itemSrc.replace(/^file:\/\//, '');
                return itemSrc;
            }
            else
                return cordova.file.dataDirectory + img;
        }
    };
    MyBookingsDetailPage.prototype.navigateTo = function () {
        var _this = this;
        var destination = this.bookingDetails.location._latitude + ',' + this.bookingDetails.location._longitude;
        this.myLocation().then(function (geoPos) {
            var options = {
                start: geoPos.coords.latitude + ',' + geoPos.coords.longitude
            };
            _this.launchNavigator.navigate(destination, options)
                .then(function (success) { return alert('Launched navigator'); }, function (error) { return alert('Error launching navigator: ' + error); });
        }, function (err) {
            _this.presentToast(err.message);
        });
    };
    MyBookingsDetailPage.prototype.presentPopover = function (myEvent) {
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_12_ngx_countdown__["a" /* CountdownComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12_ngx_countdown__["a" /* CountdownComponent */])
    ], MyBookingsDetailPage.prototype, "timer", void 0);
    MyBookingsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-my-bookings-detail',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/my-bookings-detail/my-bookings-detail.html"*/'<!--\n  Generated template for the MyBookingsDetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="klikpegihead">\n  <ion-navbar>\n    <ion-title style="text-transform:uppercase">{{bookingDetails.id}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid padding *ngIf="bookingDetails.statusCode == 0 && bookingDetails.expired != true">\n    <ion-row align-items-center>\n      <ion-col>\n        <ion-badge class="custom-badge custom-badge-waiting">{{ bookingDetails.status | translate }}\n            <countdown [config]="{stopTime: bookingDetails.expiredTime, template: \'$!m!:$!s!\'}" (finished)="onFinished(bookingDetails)"></countdown>\n        </ion-badge>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class="text-header">\n        {{"YOU_NEED_TO_PAY" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="text-big-price">\n        IDR{{priceString.string1 | number}},\n        <span class="text-digit-price">{{priceString.string2}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-chip color="primary" class="custom-chip-important">\n          <ion-label text-center class="text-warning">\n            <b>{{ "TRANSFER_NOTICE_1" | translate }}</b> {{ "TRANSFER_NOTICE_2" | translate }}</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid padding *ngIf="bookingDetails.expired">\n    <ion-row align-items-center>\n      <ion-col>\n        <ion-chip class="custom-chip custom-chip-expired">\n          <ion-label>{{ "BOOKING_EXPIRED" | translate }}</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class="text-header">\n        {{ "BOOKING_DISMISS_ALERT" | translate }}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid padding *ngIf="bookingDetails.statusCode == 1">\n    <ion-row align-items-center>\n      <ion-col>\n        <ion-chip class="custom-chip custom-chip-checking">\n          <ion-label>{{"CHECKING_PAYMENT" | translate}}</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col class="text-header">\n        {{ "CHECKING_PAYMENT_SUBTITLE" | translate }}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="separator-with-shadow" *ngIf="bookingDetails.statusCode !== 2">\n\n  </div>\n\n  <ion-grid padding *ngIf="bookingDetails.statusCode == 0">\n    <ion-row align-items-center>\n      <ion-col class="text-header">\n        {{"TRANSFER_TO" | translate}}\n      </ion-col>\n      <!-- <ion-col text-right>\n      <button ion-button small clear color="dark">DETAILS</button>\n    </ion-col> -->\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">{{"BANK_NAME" | translate}}</span>\n        <br />\n        <span class="text-content">{{bank?.bankName || \'-\'}}</span>\n      </ion-col>\n      <ion-col>\n        <span class="text-subtitle">{{"ACCOUNT_NUMBER" | translate}}</span>\n        <br />\n        <span class="text-content">{{bank?.bankAccount || \'-\'}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">{{"ACCOUNT_HOLDER_NAME" | translate}}</span>\n        <br />\n        <span class="text-content">Grand Boutique Inn</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="separator-with-shadow" *ngIf="bookingDetails.statusCode == 0">\n\n  </div>\n\n  <ion-grid padding>\n    <ion-row *ngIf="bookingDetails.statusCode !== 2">\n      <ion-col class="text-header">\n        {{"BOOKING_DETAILS" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center *ngIf="bookingDetails.statusCode == 2">\n      <ion-col>\n        <ion-chip class="custom-chip custom-chip-accepted">\n          <ion-label>{{"ACCEPTED" | translate}}</ion-label>\n        </ion-chip>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="text-title">\n        {{bookingDetails.propertyName}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">{{"ROOM_TYPE" | translate}}</span>\n        <br />\n        <span class="text-content">{{bookingDetails.className}}</span>\n      </ion-col>\n      <ion-col>\n        <span class="text-subtitle">{{"DURATION" | translate}}</span>\n        <br />\n        <span class="text-content" *ngIf="bookingDetails.type == 0">{{bookingDetails.stayType}} • {{bookingDetails.interval}} {{"HOUR(S)" | translate}}</span>\n        <span class="text-content" *ngIf="bookingDetails.type == 1">{{bookingDetails.stayType}}</span>\n        <span class="text-content" *ngIf="bookingDetails.type == 2">{{bookingDetails.interval}} {{"NIGHT(S)" | translate}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">Check In</span>\n        <br />\n        <span class="text-content">{{bookingDetails.checkIn | date:\'d MMM y\'}}</span>\n      </ion-col>\n      <ion-col>\n        <span class="text-subtitle">Check Out</span>\n        <br />\n        <span class="text-content">{{bookingDetails.checkOut | date:\'d MMM y\'}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="separator-with-shadow">\n\n  </div>\n  <ion-grid padding *ngIf="bookingDetails.statusCode == 2">\n    <ion-row>\n      <ion-col class="text-header">\n        {{"ADDRESS" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="text-content">\n        {{bookingDetails.displayAddress}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button block outline color="dark">{{"CALL_PROPERTY_OWNER" | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row *ngIf="bookingDetails.statusCode == 2">\n    <ion-col no-padding>\n      <img src="https://maps.googleapis.com/maps/api/staticmap?size=360x200&scale=2&sensor=false&maptype=roadmap&markers=color:red|{{this.bookingDetails.location._latitude}},{{this.bookingDetails.location._longitude}}&key=AIzaSyBPPdd-znA26ByPuwlZpf_-w7vhDtBpS6w">\n      <button no-margin ion-button block color="grey" style="border-radius:0px" (click)="navigateTo()">{{"GET_DIRECTION" | translate}}</button>\n    </ion-col>\n  </ion-row>\n  <ion-grid padding>\n    <ion-row>\n      <ion-col class="text-header">\n        {{"GUEST_DETAILS" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class="text-subcontent" *ngIf="bookingDetails.orderData !== undefined">\n        <span class="text-content">{{bookingDetails.orderData.fullName}}</span>\n        <br /> {{bookingDetails.orderData.email}}\n        <br/> {{bookingDetails.orderData.phoneNo}}\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="bookingDetails.orderData?.guest">\n      <ion-col>\n        <span class="text-subtitle">{{"BOOKING_FOR" | translate}}</span>\n        <br />\n        <span class="text-content">{{bookingDetails.orderData?.guest}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-subtitle">{{"SPECIAL_REQUEST" | translate}}</span>\n        <br />\n        <span class="text-content">{{bookingDetails.orderData?.additional || \'-\'}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="separator-with-shadow">\n\n  </div>\n  <ion-grid padding>\n    <ion-row>\n      <ion-col class="text-header">\n        {{"PRICE_DETAILS" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-content" *ngIf="bookingDetails.type == 0">{{bookingDetails.interval}} hour(s) • {{bookingDetails.unitQty}} {{"ROOM(S)" | translate}}\n        </span>\n        <span class="text-content" *ngIf="bookingDetails.type == 1">24 {{"HOURS" | translate}} • {{bookingDetails.unitQty}} {{"ROOM(S)" | translate}}\n        </span>\n        <span class="text-content" *ngIf="bookingDetails.type == 2">{{bookingDetails.interval}} night(s) • {{bookingDetails.unitQty}} {{"ROOM(S)" | translate}}\n        </span>\n      </ion-col>\n      <ion-col text-right>\n        <span text-right *ngIf="bookingDetails.type == 0" class="text-content">{{currencySymbol}} {{bookingDetails.transitPrice[bookingDetails.interval-1].price * bookingDetails.unitQty | number:\'1.0-0\'}}</span>\n        <span text-right *ngIf="bookingDetails.type == 1" class="text-content">{{currencySymbol}} {{bookingDetails.price24 * bookingDetails.unitQty | number:\'1.0-0\'}}</span>\n        <span text-right *ngIf="bookingDetails.type == 2" class="text-content">{{currencySymbol}} {{bookingDetails.price * bookingDetails.interval * bookingDetails.unitQty | number:\'1.0-0\'}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-content">{{bookingDetails.discountRate}}% OFF</span>\n      </ion-col>\n      <ion-col text-right style="border-bottom:1px solid rgb(237,237,237)">\n        <span class="text-content">- {{currencySymbol}} {{(bookingDetails.discountRate/100) * ( bookingDetails.price * bookingDetails.interval * bookingDetails.unitQty ) | number:\'1.0-0\'}}</span>\n        <br />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-content">\n          {{"UNIQUE_CODE" | translate}}\n        </span>\n      </ion-col>\n      <ion-col text-right class="text-content">\n        - {{bookingDetails.uniqueCode}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <span class="text-content">{{"TOTAL_PRICE" | translate}}</span>\n      </ion-col>\n      <ion-col text-right>\n        <span text-right class="text-price">{{currencySymbol}} {{(bookingDetails.price * bookingDetails.interval * bookingDetails.unitQty)  * ((100 - this.bookingDetails.discountRate) / 100 ) - bookingDetails.uniqueCode| number:\'1.0-0\'}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class="separator-with-shadow">\n\n  </div>\n\n  <div *ngIf="bookingDetails.statusCode == 0">\n    <ion-grid padding>\n      <ion-row align-items-center>\n        <ion-col col-7 class="text-header" text-justify>\n          {{"PROOF_OF_PAYMENT" | translate}}\n          <span class="text-reminder" *ngIf="lastImage !== null">\n            <br />{{"PROOF_OF_PAYMENT_SUBTITLE" | translate}}.</span>\n        </ion-col>\n        <ion-col text-right>\n          <img (click)="presentActionSheet()" style="max-height:80px" src="{{pathForImage(lastImage)}}" [hidden]="lastImage === null">\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="lastImage === null">\n        <ion-col>\n          <button ion-button block outline color="dark" (click)="presentActionSheet()">{{"UPLOAD_PROOF_OF_PAYMENT" | translate}}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <div class="separator-with-shadow">\n\n    </div>\n    <ion-row>\n      <ion-col>\n        <button ion-button block clear color="dark" (click)="cancelConfirm(bookingDetails.id)">{{"CANCEL_BOOKING" | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<ion-footer style="background-color:rgb(234,234,234)" *ngIf="bookingDetails.statusCode == 0" padding>\n  <!--<button ion-button block color="dark" (click)="completedPayment()">{{"I\'VE_COMPLETED_PAYMENT" | translate}}</button>-->\n  <button ion-button block color="dark" (click)="continuePayment()">{{"CONTINUE_PAYMENT" | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/my-bookings-detail/my-bookings-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], MyBookingsDetailPage);
    return MyBookingsDetailPage;
}(__WEBPACK_IMPORTED_MODULE_10__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=my-bookings-detail.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnboardingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_quicktour_modal_quicktour_modal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(42);
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










/*
 Generated class for the Onboarding page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var OnboardingPage = (function (_super) {
    __extends(OnboardingPage, _super);
    function OnboardingPage(navCtrl, viewCtrl, menu, navParams, modalCtrl, translate, loadingCtrl, parseService, toastCtrl, geolocation, globalConfig, platform) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.navCtrl = navCtrl;
        _this.viewCtrl = viewCtrl;
        _this.menu = menu;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.translate = translate;
        _this.loadingCtrl = loadingCtrl;
        _this.parseService = parseService;
        _this.toastCtrl = toastCtrl;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        _this.platform = platform;
        _this.menu.swipeEnable(false);
        _this.bgClsName = "full-screen";
        platform.ready().then(function (readySource) {
            // if(platform.height() > 790) {
            //     this.bgClsName = "full-screen-iphonex";
            // }
            console.log('Width: ' + platform.width());
            console.log('Height: ' + platform.height());
        });
        return _this;
    }
    OnboardingPage.prototype.ionViewDidLoad = function () {
    };
    OnboardingPage.prototype.ionViewWillEnter = function () {
        if (this.parseService.getCurrentUser() != null) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    OnboardingPage.prototype.presentModal = function (page) {
        var modal;
        console.log(page);
        switch (page) {
            case 1:
                {
                    modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_quicktour_modal_quicktour_modal__["a" /* QuicktourModalPage */]);
                    break;
                }
            case 2:
                {
                    modal = this.modalCtrl.create("LoginPage");
                    break;
                }
            case 3:
                {
                    modal = this.modalCtrl.create("SignUpPage");
                    break;
                }
            default:
                {
                    window.alert("An error occurred");
                    break;
                }
        }
        modal.present();
    };
    OnboardingPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    OnboardingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-onboarding',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/onboarding/onboarding.html"*/'<!--\n  Generated template for the Onboarding page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding [class]="bgClsName" no-bounce>\n  <div class="container">\n    <ion-grid>\n      <ion-row>\n        <ion-col text-center>\n          <!-- <img src="assets/images/gbi-logo.png"/> -->\n        </ion-col>\n      </ion-row>\n        <ion-row>\n            <ion-col text-center>\n                &nbsp;\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center>\n                &nbsp;\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col text-center col-6 offset-3>\n                <button ion-button block outline color="light" style="border-radius:10px; font-weight: bold;" (click)="presentModal(1)">{{"QUICK_TOUR" | translate}}</button>\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-content>\n\n  <ion-grid class="footer-nav">\n    <ion-row>\n      <ion-col>\n        <button ion-button block outline color="light" (click)="presentModal(3)">{{"REGISTER" | translate}}</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button block outline color="light" (click)="presentModal(2)">{{"LOG_IN" | translate}}</button>\n      </ion-col>\n    </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <button ion-button block outline color="light" (click)="skip()">{{"SKIP" | translate}}</button>\n    </ion-col>\n  </ion-row>\n  <span text-center class="text-copyright">©{{"COPYRIGHTED_BY" | translate}} klikpegi.com, 2017.</span>\n</ion-grid>'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/onboarding/onboarding.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"]])
    ], OnboardingPage);
    return OnboardingPage;
}(__WEBPACK_IMPORTED_MODULE_6__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=onboarding.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalEventEmitterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the GlobalEventEmitterProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GlobalEventEmitterProvider = (function () {
    function GlobalEventEmitterProvider(http) {
        this.http = http;
        this.fetchUserData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initializePage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isLoggedIn = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        console.log('Hello GlobalEventEmitterProvider Provider');
    }
    GlobalEventEmitterProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GlobalEventEmitterProvider);
    return GlobalEventEmitterProvider;
}());

//# sourceMappingURL=global-event-emitter.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(42);
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
 * Created by wiyantotan on 12/22/17.
 */









var LoginHandler = (function (_super) {
    __extends(LoginHandler, _super);
    function LoginHandler(navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, loadingCtrl, toastCtrl, translate, parseService, facebook, googlePlus, geolocation, globalConfig) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.alertCtrl = alertCtrl;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.translate = translate;
        _this.parseService = parseService;
        _this.facebook = facebook;
        _this.googlePlus = googlePlus;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        return _this;
    }
    LoginHandler.prototype.manualLogin = function (pUsername, pPassword, closePageType, rootPageLoaded) {
        var _this = this;
        var loginLoading;
        var invalid;
        var loginSuccess;
        var loginFail;
        this.translate.get('LOADING_LOG_IN').subscribe(function (value) { loginLoading = value; });
        this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(function (value) { invalid = value; });
        this.translate.get('LOG_IN_SUCCESS').subscribe(function (value) { loginSuccess = value; });
        this.translate.get('LOG_IN_FAIL').subscribe(function (value) { loginFail = value; });
        if (pUsername == '' || pUsername == null || pPassword == '' || pPassword == null) {
            this.presentToast(invalid);
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: loginLoading
            });
            loading_1.present();
            var username_1 = pUsername.toLowerCase();
            var password_1 = this.pwdEncryptor(username_1, pPassword);
            // Step for manual login:
            // 1. Login first
            // 2. If success, then user logged in
            // 3. if error, check to database if there's an existing account with different password
            this.parseService.login(username_1, password_1).then(function (res) {
                console.log("res", res);
                if (res == 'success') {
                    _this.parseService.existingCheck(username_1).then(function (data) {
                        if (data == null) {
                            console.log('User not exist');
                            loading_1.dismiss();
                            if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                _this.viewCtrl.dismiss();
                            }
                            else {
                                _this.navCtrl.popToRoot();
                                _this.navCtrl.setRoot(rootPageLoaded);
                            }
                            _this.presentToast(loginSuccess);
                        }
                        else {
                            console.log('User exist');
                            _this.parseService.existingLinking(username_1, password_1, data, 'manual').then(function (resLink) {
                                console.log(resLink);
                                if (resLink == 'Linking success') {
                                    console.log('User login with Google');
                                    loading_1.dismiss();
                                    if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                        _this.viewCtrl.dismiss();
                                    }
                                    else {
                                        _this.navCtrl.popToRoot();
                                        _this.navCtrl.setRoot(rootPageLoaded);
                                    }
                                    _this.presentToast(loginSuccess);
                                }
                                else if (resLink == 'Linking error') {
                                    loading_1.dismiss();
                                    _this.presentToast(loginFail);
                                }
                            });
                        }
                    });
                }
                else if (res == 'error') {
                    loading_1.dismiss();
                    console.log('Wrong username or password');
                    _this.presentToast(loginFail);
                }
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
                _this.presentToast(err.message);
            });
        }
    };
    LoginHandler.prototype.googleLogin = function (closePageType, rootPageLoaded) {
        var _this = this;
        var signupLoading;
        var signupSuccess;
        var signupFail;
        this.translate.get('LOADING_SIGN_UP').subscribe(function (value) { signupLoading = value; });
        this.translate.get('SIGN_UP_SUCCESS').subscribe(function (value) { signupSuccess = value; });
        this.translate.get('SIGN_UP_FAIL').subscribe(function (value) { signupFail = value; });
        var loading = this.loadingCtrl.create({
            content: signupLoading
        });
        loading.present();
        this.googlePlus.login({
            'webClientId': this.globalConfig.googleWebClientId,
            'offline': true
        }).then(function (resGooglePlugin) {
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
                        if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                            _this.viewCtrl.dismiss();
                        }
                        else {
                            _this.navCtrl.popToRoot();
                            _this.navCtrl.setRoot(rootPageLoaded);
                        }
                        _this.presentToast(signupSuccess);
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
                        _this.promptPassword(resGooglePlugin.email, data, 'manualtososmed', 'google', closePageType, rootPageLoaded);
                    }
                    else if (data.googleAuth != undefined) {
                        console.log('User exist with Google account');
                        _this.parseService.login(resGooglePlugin.email, data.googleAuth).then(function (res) {
                            loading.dismiss();
                            if (res == 'success') {
                                console.log('User login with Google');
                                if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                    _this.viewCtrl.dismiss();
                                }
                                else {
                                    _this.navCtrl.popToRoot();
                                    _this.navCtrl.setRoot(rootPageLoaded);
                                }
                                _this.presentToast(signupSuccess);
                            }
                            else if (res == 'error') {
                                console.log('Password has been changed, please input your new password');
                                _this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google', closePageType, rootPageLoaded);
                            }
                        }, function (err) {
                            console.log(err);
                            loading.dismiss();
                            _this.presentToast(signupFail);
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
                                        if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                            _this.viewCtrl.dismiss();
                                        }
                                        else {
                                            _this.navCtrl.popToRoot();
                                            _this.navCtrl.setRoot(rootPageLoaded);
                                        }
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
                                _this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google', closePageType, rootPageLoaded);
                            }
                        });
                    }
                }
            });
        }).catch(function (err) {
            console.log(err);
            loading.dismiss();
            _this.presentToast(signupFail);
        });
    };
    LoginHandler.prototype.facebookLogin = function (closePageType, rootPageLoaded) {
        var _this = this;
        var signupLoading;
        var signupSuccess;
        var signupFail;
        this.translate.get('LOADING_SIGN_UP').subscribe(function (value) { signupLoading = value; });
        this.translate.get('SIGN_UP_SUCCESS').subscribe(function (value) { signupSuccess = value; });
        this.translate.get('SIGN_UP_FAIL').subscribe(function (value) { signupFail = value; });
        var loading = this.loadingCtrl.create({
            content: signupLoading
        });
        loading.present();
        console.log("start facebook login!");
        this.facebook.login(['public_profile', 'email']).then(function (resFbPlugin) {
            _this.facebook.api('/me?fields=id,email,name,first_name,last_name,gender,birthday', ['public_profile', 'email', 'user_birthday']).then(function (profile) {
                console.log(JSON.stringify(profile));
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
                            if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                _this.viewCtrl.dismiss();
                            }
                            else {
                                _this.navCtrl.popToRoot();
                                _this.navCtrl.setRoot(rootPageLoaded);
                            }
                            _this.presentToast(signupSuccess);
                        }, function (err) {
                            console.log(err);
                            loading.dismiss();
                            _this.presentToast(signupFail);
                        });
                    }
                    else {
                        console.log('User exist');
                        if (data.fbAuth == undefined && data.googleAuth == undefined) {
                            console.log('User exist with Manual account');
                            loading.dismiss();
                            _this.promptPassword(profile.email, data, 'manualtososmed', 'facebook', closePageType, rootPageLoaded);
                        }
                        else if (data.fbAuth != undefined) {
                            console.log('User exist with Faceboook account');
                            _this.parseService.login(profile.email, data.fbAuth).then(function (res) {
                                loading.dismiss();
                                if (res == 'success') {
                                    console.log('User login with Facebook');
                                    if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                        _this.viewCtrl.dismiss();
                                    }
                                    else {
                                        _this.navCtrl.popToRoot();
                                        _this.navCtrl.setRoot(rootPageLoaded);
                                    }
                                    _this.presentToast(signupSuccess);
                                }
                                else if (res == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    _this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook', closePageType, rootPageLoaded);
                                }
                            }, function (err) {
                                console.log(err);
                                loading.dismiss();
                                _this.presentToast(signupFail);
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
                                            if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                                _this.viewCtrl.dismiss();
                                            }
                                            else {
                                                _this.navCtrl.popToRoot();
                                                _this.navCtrl.setRoot(rootPageLoaded);
                                            }
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
                                    _this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook', closePageType, rootPageLoaded);
                                }
                            });
                        }
                    }
                });
            });
        }, function (err) {
            console.log(err);
            loading.dismiss();
            _this.presentToast(signupFail);
        });
    };
    LoginHandler.prototype.promptPassword = function (email, existingCheckData, method, platform, closePageType, rootPageLoaded) {
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
                                            if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                                _this.viewCtrl.dismiss();
                                            }
                                            else {
                                                _this.navCtrl.popToRoot();
                                                _this.navCtrl.setRoot(rootPageLoaded);
                                            }
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
        else if (method == 'manualtososmedchangepwd') {
            var alert_3 = this.alertCtrl.create({
                title: linkAccount,
                message: msgChangePassword,
                inputs: [{
                        name: 'password',
                        placeholder: pwd,
                        type: 'password'
                    }],
                buttons: [{
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
                                            if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                                _this.viewCtrl.dismiss();
                                            }
                                            else {
                                                _this.navCtrl.popToRoot();
                                                _this.navCtrl.setRoot(rootPageLoaded);
                                            }
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
                    }]
            });
            alert_3.present();
        }
    };
    LoginHandler.prototype.signUpProcess = function (authData, pwd, method, closePageType, rootPageLoaded) {
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
        loading.present();
        this.parseService.existingCheck(authData.email).then(function (data) {
            if (data == null) {
                console.log('User not exist');
                _this.parseService.signup(authData, pwd, method).then(function (success) {
                    console.log(success);
                    loading.dismiss();
                    if (closePageType == __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                        _this.viewCtrl.dismiss();
                    }
                    else {
                        _this.navCtrl.popToRoot();
                        _this.navCtrl.setRoot(rootPageLoaded);
                    }
                    _this.presentToast(signupSuccess);
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
                    _this.promptPassword(authData.email, data, 'manualtososmed', method, closePageType, rootPageLoaded);
                }
                else if (data.googleAuth != undefined || data.fbAuth != undefined) {
                    console.log('User exist with Google or Facebook account');
                    loading.dismiss();
                    _this.promptPassword(authData.email, data, 'sosmedtomanual', method, closePageType, rootPageLoaded);
                }
            }
        });
    };
    LoginHandler.prototype.pwdEncryptor = function (email, pwd) {
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
    LoginHandler.prototype.pwdDecryptor = function (pwd) {
        // decrypt password
        var decrypted = pwd;
        return decrypted;
    };
    LoginHandler.prototype.forgotPassword = function () {
        var modal = this.modalCtrl.create('ForgotPasswordPage');
        modal.present();
    };
    LoginHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            providers: [__WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], LoginHandler);
    return LoginHandler;
}(__WEBPACK_IMPORTED_MODULE_0__CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=LoginHandler.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createTranslateLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_autocomplete_page_autocomplete_page__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_onboarding_onboarding__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_results_search_results__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_results_detail_search_results_detail__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_quicktour_modal_quicktour_modal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_facebook__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_countdown__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_my_bookings_my_bookings__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_my_bookings_detail_my_bookings_detail__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic2_rating__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_storage__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_base64__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_plus__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_sqlite__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_sqlite_porter__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_global_event_emitter__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_connectivity_service_connectivity_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_google_maps_google_maps__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_local_database_service_local_database_service__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_screen_orientation__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_launch_navigator__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_truncate__ = __webpack_require__(689);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_fade_transition_ModalFadeEnterTransition__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_fade_transition_ModalFadeLeaveTransition__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ion2_calendar__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_header_color__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_in_app_browser__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {HttpClientModule} from '@angular/common/http';












































var AppModule = (function () {
    function AppModule(config) {
        this.config = config;
        this.setCustomTransitions();
    }
    AppModule.prototype.setCustomTransitions = function () {
        this.config.setTransition('modal-fade-leave', __WEBPACK_IMPORTED_MODULE_41__components_fade_transition_ModalFadeLeaveTransition__["a" /* ModalFadeLeaveTransition */]);
        this.config.setTransition('modal-fade-enter', __WEBPACK_IMPORTED_MODULE_40__components_fade_transition_ModalFadeEnterTransition__["a" /* ModalFadeEnterTransition */]);
    };
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_onboarding_onboarding__["a" /* OnboardingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_bookings_detail_my_bookings_detail__["a" /* MyBookingsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_autocomplete_page_autocomplete_page__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_results_search_results__["a" /* SearchResultsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_results_detail_search_results_detail__["a" /* SearchResultsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_quicktour_modal_quicktour_modal__["a" /* QuicktourModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                //HttpClientModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_countdown__["b" /* CountdownModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_42_ion2_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_26__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_39_ng2_truncate__["a" /* TruncateModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false,
                    tabsHideOnSubPages: true,
                    backButtonIcon: 'ios-arrow-back',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/amenities-modal/amenities-modal.module#AmenitiesModalPageModule', name: 'AmenitiesModalPage', segment: 'amenities-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-confirmation/booking-confirmation.module#BookingConfirmationPageModule', name: 'BookingConfirmationPage', segment: 'booking-confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booking-details/booking-details.module#BookingDetailsPageModule', name: 'BookingDetailsPage', segment: 'booking-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookings-modal/bookings-modal.module#BookingsModalPageModule', name: 'BookingsModalPage', segment: 'bookings-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar-modal/calendar-modal.module#CalendarModalModule', name: 'CalendarModalPage', segment: 'calendar-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-password-modal/edit-password-modal.module#EditPasswordModalPageModule', name: 'EditPasswordModalPage', segment: 'edit-password-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter-modal/filter-modal.module#FilterModalPageModule', name: 'FilterModalPage', segment: 'filter-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/input-biodata/input-biodata.module#InputBiodataPageModule', name: 'InputBiodataPage', segment: 'input-biodata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-modal/login-modal.module#LoginModalPageModule', name: 'LoginModalPage', segment: 'login-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maps/maps.module#MapsPageModule', name: 'MapsPage', segment: 'maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/method-credit/method-credit.module#MethodCreditPageModule', name: 'MethodCreditPage', segment: 'method-credit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/method-transfer/method-transfer.module#MethodTransferPageModule', name: 'MethodTransferPage', segment: 'method-transfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/other-amenities-modal/other-amenities-modal.module#OtherAmenitiesModalPageModule', name: 'OtherAmenitiesModalPage', segment: 'other-amenities-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-confirmation/payment-confirmation.module#PaymentConfirmationPageModule', name: 'PaymentConfirmationPage', segment: 'payment-confirmation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-detail/payment-detail.module#PaymentConfirmationPageModule', name: 'PaymentDetailPage', segment: 'payment-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-method/payment-method.module#PaymentMethodPageModule', name: 'PaymentMethodPage', segment: 'payment-method', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popimages/pop-images.module#PopImagesModule', name: 'PopImages', segment: 'pop-images', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/popover/popover.module#PopoverPageModule', name: 'PopoverPage', segment: 'popover', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promo/promo.module#PromoPageModule', name: 'PromoPage', segment: 'promo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-results-room-detail/search-results-room-detail.module#SearchResultsRoomDetailPageModule', name: 'SearchResultsRoomDetailPage', segment: 'search-results-room-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up-modal/sign-up-modal.module#SignUpModalPageModule', name: 'SignUpModalPage', segment: 'sign-up-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-owner/tabs-owner.module#TabsOwnerPageModule', name: 'TabsOwnerPage', segment: 'tabs-owner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user-profile.module#UserProfilePageModule', name: 'UserProfilePage', segment: 'user-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_onboarding_onboarding__["a" /* OnboardingPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_my_bookings_detail_my_bookings_detail__["a" /* MyBookingsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_autocomplete_page_autocomplete_page__["a" /* AutocompletePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_results_search_results__["a" /* SearchResultsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_search_results_detail_search_results_detail__["a" /* SearchResultsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_quicktour_modal_quicktour_modal__["a" /* QuicktourModalPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_header_color__["a" /* HeaderColor */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_sqlite_porter__["a" /* SQLitePorter */],
                __WEBPACK_IMPORTED_MODULE_17__providers_parse_service__["a" /* ParseService */],
                // { provide: Camera, useClass: CameraMock },
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }, __WEBPACK_IMPORTED_MODULE_32__providers_global_event_emitter__["a" /* GlobalEventEmitterProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_local_database_service_local_database_service__["a" /* LocalDatabaseServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_37__providers_global_configuration_service__["a" /* GlobalConfigurationService */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_launch_navigator__["a" /* LaunchNavigator */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Config"]])
    ], AppModule);
    return AppModule;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalDatabaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the LocalDatabaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocalDatabaseServiceProvider = (function () {
    function LocalDatabaseServiceProvider(http, sqlitePorter, storage, sqlite, platform) {
        var _this = this;
        this.http = http;
        this.sqlitePorter = sqlitePorter;
        this.storage = storage;
        this.sqlite = sqlite;
        this.platform = platform;
        this.databaseReady = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'klikpegi.db',
                location: 'default'
            }).then(function (db) {
                _this.database = db;
                _this.storage.get('database_filled').then(function (value) {
                    if (value) {
                        _this.databaseReady.next(true);
                    }
                    else {
                        _this.fillDatabase();
                    }
                });
            });
        });
    }
    LocalDatabaseServiceProvider.prototype.fillDatabase = function () {
        var _this = this;
        this.http.get('assets/dbInit.sql')
            .map(function (res) { return res.text(); })
            .subscribe(function (sql) {
            _this.sqlitePorter.importSqlToDb(_this.database, sql).then(function (data) {
                _this.databaseReady.next(true);
                _this.storage.set('database_filled', true);
            }).catch(function (e) { return console.log(e); });
        });
    };
    LocalDatabaseServiceProvider.prototype.updateSortFilterConfig = function (sort_type, sort_price_value_low, sort_price_value_high, filter) {
        var param = [sort_type, sort_price_value_low, sort_price_value_high, filter];
        return this.database.executeSql("UPDATE sortfilter SET sort_type=?, sort_price_value_low=?, sort_price_value_high=?, filter_value=? WHERE id=1", param).then(function (res) {
            return res;
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    LocalDatabaseServiceProvider.prototype.getSortFilterConfig = function () {
        return this.database.executeSql('SELECT * FROM sortfilter', []).then(function (data) {
            var config = [];
            if (data.rows.length > 0) {
                for (var i = 0; i < data.rows.length; i++) {
                    config.push({
                        id: data.rows.item(i).id,
                        sort_type: data.rows.item(i).sort_type,
                        sort_price_value_low: data.rows.item(i).sort_price_value_low,
                        sort_price_value_high: data.rows.item(i).sort_price_value_high,
                        filter_value: data.rows.item(i).filter_value
                    });
                }
            }
            return config;
        }, function (err) {
            console.log('Error: ', err);
            return [];
        });
    };
    LocalDatabaseServiceProvider.prototype.getDatabaseState = function () {
        return this.databaseReady.asObservable();
    };
    LocalDatabaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sqlite_porter__["a" /* SQLitePorter */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Platform"]])
    ], LocalDatabaseServiceProvider);
    return LocalDatabaseServiceProvider;
}());

//# sourceMappingURL=local-database-service.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AutocompletePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AutocompletePage = (function () {
    function AutocompletePage(viewCtrl, zone, navCtrl, param) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.param = param;
        this.service = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }
    AutocompletePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AutocompletePage.prototype.chooseItem = function (item) {
        this.viewCtrl.dismiss(item);
    };
    AutocompletePage.prototype.setNearby = function () {
        this.viewCtrl.dismiss('nearby');
    };
    AutocompletePage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: 'IDN' } }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                if (predictions != null) {
                    predictions.forEach(function (prediction) {
                        me.autocompleteItems.push(prediction);
                    });
                }
                else {
                }
            });
        });
    };
    AutocompletePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'autocomplete-page',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/autocomplete-page/autocomplete-page.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Enter address</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismiss()" color="dark">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="true" (ionInput)="updateSearch()" (ionCancel)="dismiss()"></ion-searchbar>\n  <ion-list>\n    <ion-item tappable (click)="setNearby()">\n      Nearby\n    </ion-item>\n    <ion-item no-lines *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/autocomplete-page/autocomplete-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AutocompletePage);
    return AutocompletePage;
}());

//# sourceMappingURL=autocomplete-page.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_results_detail_search_results_detail__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__ = __webpack_require__(31);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/*
 Generated class for the SearchResults page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SearchResultsPage = (function (_super) {
    __extends(SearchResultsPage, _super);
    function SearchResultsPage(navCtrl, navParams, parseService, loadingCtrl, viewCtrl, toastCtrl, modalCtrl, popoverCtrl, translate, globalConfig, geolocation) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.parseService = parseService;
        _this.loadingCtrl = loadingCtrl;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.modalCtrl = modalCtrl;
        _this.popoverCtrl = popoverCtrl;
        _this.translate = translate;
        _this.globalConfig = globalConfig;
        _this.geolocation = geolocation;
        _this.roomList = '';
        _this.isEmpty = false;
        _this.destination = '';
        _this.rate = 0;
        _this.pageno = 0;
        var params = navParams.data;
        _this.searchParams = {
            radius: params.radius,
            location: params.location,
            isNearby: params.nearby,
            checkIn: params.checkIn,
            duration: params.duration,
            guest: params.guest,
            room: params.room,
            mode: params.mode,
            pageno: _this.pageno
        };
        _this.searchDate = navParams.get('checkIn');
        _this.duration = navParams.get('duration');
        _this.isStillLoading = false;
        console.log('masuk search result');
        _this.getLocation(_this.searchParams.location.geometry);
        _this.getProperties();
        __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].KODE_UNIQUE = 0;
        return _this;
    }
    SearchResultsPage.prototype.ionViewDidLoad = function () {
        console.log("Current search mode: " + __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_MODE_CURRENT);
    };
    SearchResultsPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    SearchResultsPage.prototype.ionViewDidEnter = function () {
        this.getAddress(this.searchParams.location.address_components, this.searchParams.location.formatted_address, this.searchParams.isNearby);
    };
    SearchResultsPage.prototype.getProperties = function (mode) {
        var _this = this;
        var searchLoading;
        this.translate.get('LOADING_ROOM').subscribe(function (value) {
            searchLoading = value;
        });
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: searchLoading,
        });
        if (mode !== undefined) {
            console.log("search resule mode undefined");
            //Check if no filter then apply sort directly
            if (mode.filterOpt.length < 1 && mode.priceRange.lower == 0 && mode.priceRange.upper == 2000000) {
                console.log("Masuk sort filter");
                this.roomList = this.sortArray(this.roomList, mode.sortOpt);
                this.scrollToTop();
            }
            else {
                //If filter available, search to parse using default sort (search All categories)
                loading.present();
                this.isStillLoading = true;
                this.parseService.searchProperties(this.searchParams, mode).then(function (results) {
                    console.log('hasil search', results);
                    if (results.length == 0) {
                        _this.isEmpty = true;
                    }
                    _this.getLowestPrice(results);
                    _this.getAddressCountry(results);
                    // Apply local sorting by mode ( distance , ascending price, desecending price)
                    _this.roomList = _this.sortArray(results, mode.sortOpt);
                    console.log('setelah sort', _this.roomList);
                    // Apply local filtering by price range
                    _this.roomList = _this.filterPrice(_this.roomList, mode.priceRange);
                    console.log('setelah filter', _this.roomList);
                    _this.scrollToTop();
                    loading.dismiss();
                    _this.isStillLoading = false;
                }, function (err) {
                    console.log(err);
                    loading.dismiss();
                    _this.isStillLoading = false;
                }).catch(function (unknown) {
                    // this.presentToast(unknown)
                    loading.dismiss();
                    _this.isStillLoading = false;
                });
            }
        }
        else {
            //Normal search with auto sort by range
            loading.present();
            console.log("search resule mode defined");
            this.isStillLoading = true;
            this.parseService.searchProperties(this.searchParams).then(function (results) {
                if (results.length == 0) {
                    _this.isEmpty = true;
                }
                _this.getLowestPrice(results);
                _this.getAddressCountry(results);
                _this.roomList = _this.sortArray(results, 'range');
                _this.scrollToTop();
                loading.dismiss();
                _this.isStillLoading = false;
            }, function (err) {
                console.log(err);
                loading.dismiss();
                _this.isStillLoading = false;
            }).catch(function (unknown) {
                // this.presentToast(unknown)
                loading.dismiss();
                _this.isStillLoading = false;
            });
        }
    };
    SearchResultsPage.prototype.ngOnInit = function () {
    };
    SearchResultsPage.prototype.sortArray = function (data, type) {
        var self = this;
        switch (type) {
            case 'lohai':
                {
                    data.sort(function (a, b) {
                        switch (self.searchParams.mode) {
                            case 0: return (a.transitStartFrom * ((100 - a.discountRate) / 100)) - (b.transitStartFrom * ((100 - b.discountRate) / 100));
                            case 1: return (a.price24StartFrom * ((100 - a.discountRate) / 100)) - (b.price24StartFrom * ((100 - b.discountRate) / 100));
                            case 2: return (a.startFrom * ((100 - a.discountRate) / 100)) - (b.startFrom * ((100 - b.discountRate) / 100));
                        }
                    });
                    return data;
                }
            case 'hailo':
                {
                    data.sort(function (a, b) {
                        switch (self.searchParams.mode) {
                            case 0: return (b.transitStartFrom * ((100 - b.discountRate) / 100)) - (a.transitStartFrom * ((100 - a.discountRate) / 100));
                            case 1: return (b.price24StartFrom * ((100 - b.discountRate) / 100)) - (a.price24StartFrom * ((100 - a.discountRate) / 100));
                            case 2: return (b.startFrom * ((100 - b.discountRate) / 100)) - (a.startFrom * ((100 - a.discountRate) / 100));
                        }
                    });
                    return data;
                }
            case 'range':
                {
                    data.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    return data;
                }
            default:
                {
                    {
                        data.sort(function (a, b) {
                            return a.distance - b.distance;
                        });
                        return data;
                    }
                }
        }
        // Price low - high
    };
    SearchResultsPage.prototype.filterPrice = function (data, range) {
        function isWithinRange(data) {
            return data > range.lower && data < range.upper;
        }
        var filtered;
        switch (this.searchParams.mode) {
            case 0:
                filtered = data.filter(function (price) { return isWithinRange(price.transitStartFrom * ((100 - price.discountRate) / 100)); });
                break;
            case 1:
                filtered = data.filter(function (price) { return isWithinRange(price.price24StartFrom * ((100 - price.discountRate) / 100)); });
                break;
            case 2:
                filtered = data.filter(function (price) { return isWithinRange(price.startFrom * ((100 - price.discountRate) / 100)); });
                break;
        }
        return filtered;
    };
    SearchResultsPage.prototype.getLocation = function (position) {
        this.latitude = position.location.lat();
        this.longitude = position.location.lng();
    };
    SearchResultsPage.prototype.getAddress = function (address, formattedAddress, isNearby) {
        var length = address.length;
        if (isNearby) {
            this.destination = "NEARBY";
        }
        else if (length > 2) {
            this.destination = address[length - 2].long_name + ', ' + address[length - 1].long_name;
        }
        else {
            this.destination = formattedAddress;
        }
    };
    SearchResultsPage.prototype.showPropertyDetail = function (data) {
        var time = this.navParams.get('checkIn');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_results_detail_search_results_detail__["a" /* SearchResultsDetailPage */], {
            address: data.address,
            displayAddress: data.displayAddress,
            amenities: data.amenities,
            position: {
                lng: this.longitude,
                lat: this.latitude
            },
            room: data,
            gallery: data.gallery,
            checkIn: time,
            mode: this.navParams.get('mode'),
            roomQty: this.navParams.get('room'),
            destination: this.destination,
            duration: this.duration,
        }, {
            animate: true,
            animation: 'ios-transition',
            direction: 'forward'
        });
    };
    SearchResultsPage.prototype.dismissModal = function () {
        this.searchModeClass = '';
        this.viewCtrl.dismiss();
    };
    SearchResultsPage.prototype.getLowestPrice = function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var propertyList = data_1[_i];
            var priceList = [];
            var transitList = [];
            var price24List = [];
            for (var _a = 0, _b = propertyList.classes; _a < _b.length; _a++) {
                var classList = _b[_a];
                var priceData = {
                    price: classList.price,
                    discountRate: classList.discountRate
                };
                priceList.push(priceData);
                var transitData = {
                    price: classList.priceList[this.duration - 1].price,
                    discountRate: classList.discountRate
                };
                transitList.push(transitData);
                var price24Data = {
                    price: classList.pricing24,
                    discountRate: classList.discountRate
                };
                price24List.push(price24Data);
            }
            var lowestPrice = this.findMin(priceList);
            propertyList.startFrom = lowestPrice.startFrom;
            var lowestPrice24 = this.findMin(price24List);
            propertyList.price24StartFrom = lowestPrice24.startFrom;
            propertyList.startDiscount = lowestPrice.discountRate;
            var lowestTransit = this.findMin(transitList);
            propertyList.transitStartFrom = lowestTransit.startFrom;
            propertyList.discountRate = lowestTransit.discountRate;
        }
        // for(let classData of data.classes){
        //   let priceData = classData.price
        //   priceList.push(priceData)
        // }
    };
    // getTransitPrice(data) {
    //   for (let propertyList of data) {
    //     let priceList = []
    //     for (let classList of propertyList.classes) {
    //       let priceData = {
    //         price: classList.priceList[this.duration - 1].price,
    //         discountRate: classList.discountRate
    //       }
    //       priceList.push(priceData)
    //     }
    //     let calculatePrice = this.findMin(priceList)
    //     propertyList.transitStartFrom = calculatePrice.startFrom
    //     propertyList.discountRate = calculatePrice.discountRate
    //   }
    // }
    SearchResultsPage.prototype.getAddressCountry = function (data) {
        var self = this;
        var delay = function (amount) {
            return new Promise(function (resolve) {
                setTimeout(resolve, amount);
            });
        };
        function loop() {
            return __awaiter(this, void 0, void 0, function () {
                var _loop_1, _i, data_2, propertyList;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _loop_1 = function (propertyList) {
                                var address, region, city;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            address = '';
                                            self.geocodePosition(propertyList.location, function (results) {
                                                for (var _i = 0, _a = results.address_components; _i < _a.length; _i++) {
                                                    var component = _a[_i];
                                                    // console.log('component',component)
                                                    for (var _b = 0, _c = component.types; _b < _c.length; _b++) {
                                                        var type = _c[_b];
                                                        if (type == "administrative_area_level_1") {
                                                            // address.push(component.long_name)
                                                            region = component.short_name;
                                                        }
                                                        if (type == "administrative_area_level_2") {
                                                            // address.push(component.long_name)
                                                            city = component.short_name;
                                                        }
                                                    }
                                                }
                                                address = city + ', ' + region;
                                                propertyList.addressRegion = address;
                                            });
                                            return [4 /*yield*/, delay(1200)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            _i = 0, data_2 = data;
                            _a.label = 1;
                        case 1:
                            if (!(_i < data_2.length)) return [3 /*break*/, 4];
                            propertyList = data_2[_i];
                            return [5 /*yield**/, _loop_1(propertyList)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        loop();
    };
    SearchResultsPage.prototype.findMin = function (arr) {
        var min = arr[0].price;
        var discount = arr[0].discountRate;
        for (var i = 1, len = arr.length; i < len; i++) {
            var v = arr[i].price;
            min = (v < min) ? v : min;
        }
        return {
            startFrom: min,
            discountRate: discount
        };
    };
    SearchResultsPage.prototype.filterModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('FilterModalPage');
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data != null)
                _this.getProperties(data);
        });
    };
    SearchResultsPage.prototype.showMap = function () {
        var locationArr = [];
        for (var _i = 0, _a = this.roomList; _i < _a.length; _i++) {
            var property = _a[_i];
            locationArr.push({
                position: {
                    lat: property.location._latitude,
                    lng: property.location._longitude
                },
                detail: property,
                price: property.startFrom,
            });
        }
        this.navCtrl.push("MapsPage", {
            address: locationArr,
            mode: this.navParams.get('mode'),
            room: this.navParams.get('room'),
            checkIn: this.navParams.get("checkIn"),
            destination: this.destination,
            duration: this.duration,
        });
    };
    SearchResultsPage.prototype.geocodePosition = function (params, callback) {
        var geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(params._latitude, params._longitude);
        var geocoderRequest;
        geocoderRequest = {
            'location': latLng
        };
        var location = '';
        geocoder.geocode(geocoderRequest, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    location = results[0];
                    callback(location);
                }
                else {
                    console.log('no results found');
                    location = results[0];
                    callback(location);
                }
            }
            else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                console.log("Kecepetan");
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    };
    SearchResultsPage.prototype.presentPopover = function (myEvent) {
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
    SearchResultsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.pageno += 1;
        this.searchParams.pageno = this.pageno;
        this.isStillLoading = true;
        console.log("infinite");
        return this.parseService.searchProperties(this.searchParams).then(function (results) {
            if (results.length == 0) {
                _this.isEmpty = true;
            }
            else {
                _this.getLowestPrice(results);
                _this.getAddressCountry(results);
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var result = results_1[_i];
                    _this.roomList.push(result);
                }
            }
            _this.isStillLoading = false;
        }, function (err) {
            console.log(err);
            _this.isStillLoading = false;
        }).catch(function (unknown) {
            // this.presentToast(unknown)
            console.log("unknownerror");
            _this.isStillLoading = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], SearchResultsPage.prototype, "content", void 0);
    SearchResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-results',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search-results/search-results.html"*/'<!--\n  Generated template for the SearchResults page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="cls-search-rest" [ngClass]="searchModeClass">\n  <ion-toolbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <span style="font-size:1.5rem">\n        {{ destination || "NEARBY" | translate }}\n        <br>\n        <span *ngIf="searchParams.mode == 0" style="font-weight:400">{{searchDate | date:\'d MMM y\'}} • {{duration}} {{"HOUR(S)" | translate}}</span>\n        <span *ngIf="searchParams.mode == 1" style="font-weight:400">{{searchDate | date:\'d MMM y\'}} • 24 {{"HOURS" | translate}}</span>\n        <span *ngIf="searchParams.mode == 2" style="font-weight:400">{{searchDate | date:\'d MMM y\'}} • {{duration}} {{"NIGHT(S)" | translate}}</span>\n      </span>\n    </ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar class="extra-header">\n    <ion-title no-padding class="custom-header">\n      <span class="text-tax">\n        {{"PRICING_NOTICE" | translate }}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen="true">\n  <!-- <ion-row *ngIf="isEmpty">\n    <ion-col text-center>\n      No search results, please try again\n    </ion-col>\n  </ion-row> -->\n  <ion-card no-margin class="my-card" sty tappable *ngFor="let room of roomList" (click)="showPropertyDetail(room)">\n    <ion-slides pager="true" style="height:180px">\n      <!--<ion-slide style="width:100vw;object-fit:cover">-->\n        <!--<img src={{room.thumbnail}} />-->\n      <!--</ion-slide>-->\n      <!-- <ion-slide *ngIf="room.gallery == undefined">\n          <img src="assets/images/Placeholder.png">\n        </ion-slide> -->\n      <ng-container *ngIf="room.gallery !== undefined">\n        <ion-slide *ngFor="let image of room.gallery">\n          <img src={{image._url}}>\n        </ion-slide>\n      </ng-container>\n    </ion-slides>\n    <ion-card-content padding-horizontal style="line-height:1">\n      <ion-row>\n        <ion-col class="text-title">\n          {{room.name}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="text-content">\n          {{room.addressRegion || "LOADING" | translate}}\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center>\n        <ion-col *ngIf="room.rating > 0">\n          <rating [(ngModel)]="room.rating" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"\n            nullable="false">\n          </rating>\n        </ion-col>\n        <ion-col text-right>\n          <s class="text-content" *ngIf="searchParams.mode == 0 && room.discountRate > 0">{{currencySymbol}} {{room.transitStartFrom | number:\'1.0-0\'}}</s>\n          <s class="text-content" *ngIf="searchParams.mode == 1 && room.startDiscount > 0">{{currencySymbol}} {{room.price24StartFrom | number:\'1.0-0\'}}</s>\n          <s class="text-content" *ngIf="searchParams.mode == 2 && room.startDiscount > 0">{{currencySymbol}} {{room.startFrom | number:\'1.0-0\'}}</s>\n        </ion-col>\n      </ion-row>\n      <!-- <div *ngIf="roomDetail.discountRate > 0">\n        <s>{{roomDetail.priceList[roomDetail.duration - 1].price | number:\'1.0-0\'}}</s>\n        <b> {{roomDetail.discountRate}}% OFF</b>\n      </div> -->\n\n      <ion-row align-items-center>\n        <ion-col>\n          <ion-icon name="ios-pin-outline" item-start style="margin:0;color:rgb(105,105,105)"></ion-icon>\n          <span class="text-content"> {{room.distance}} km </span>\n        </ion-col>\n        <ion-col text-right>\n          <span class="text-price" *ngIf="searchParams.mode == 0">{{currencySymbol}} {{room.transitStartFrom * ((100 - room.discountRate) / 100) | number:\'1.0-0\'}}</span>\n          <span class="text-price" *ngIf="searchParams.mode == 1">{{currencySymbol}} {{room.price24StartFrom * ((100 - room.startDiscount) / 100) | number:\'1.0-0\'}}</span>\n          <span class="text-price" *ngIf="searchParams.mode == 2">{{currencySymbol}} {{room.startFrom * ((100 - room.startDiscount) / 100) | number:\'1.0-0\'}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n    <div class="separator-with-shadow">\n\n    </div>\n  </ion-card>\n\n  <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite())">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col style="padding-left:0px">\n        <div style="border-left: 1px solid #d8d8d8">\n          <button ion-button icon-left block clear (click)="showMap()">\n            <ion-icon name="map"></ion-icon>\n            {{"MAP" | translate }}\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search-results/search-results.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_parse_service__["a" /* ParseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_configuration_service__["a" /* GlobalConfigurationService */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SearchResultsPage);
    return SearchResultsPage;
}(__WEBPACK_IMPORTED_MODULE_6__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=search-results.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_connectivity_service_connectivity_service__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var GoogleMapsProvider = (function () {
    function GoogleMapsProvider(connectivityService, geolocation) {
        this.connectivityService = connectivityService;
        this.geolocation = geolocation;
        this.mapInitialised = false;
        this.apiKey = '=AIzaSyBir9PYPxNTfgOGVhkXY3C1V9HvvnfpVuw';
    }
    GoogleMapsProvider.prototype.init = function (mapElement, pleaseConnect) {
        this.mapElement = mapElement;
        this.pleaseConnect = pleaseConnect;
        return this.loadGoogleMaps();
    };
    GoogleMapsProvider.prototype.loadGoogleMaps = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("loadGoogleMaps() function");
            if (typeof google == "undefined" || typeof google.maps == "undefined") {
                console.log("Google maps JavaScript needs to be loaded.");
                _this.disableMap();
                if (_this.connectivityService.isOnline()) {
                    window['mapInit'] = function () {
                        _this.initMap().then(function (map) {
                            resolve(map);
                        });
                        _this.enableMap();
                    };
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    if (_this.apiKey) {
                        script.src = 'http://maps.googleapis.com/maps/api/js?key=' + _this.apiKey + '&callback=mapInit';
                    }
                    else {
                        script.src = 'http://maps.googleapis.com/maps/api/js?callback=mapInit';
                    }
                    document.body.appendChild(script);
                }
            }
            else {
                if (_this.connectivityService.isOnline()) {
                    _this.enableMap();
                    resolve(_this.initMap());
                }
                else {
                    _this.disableMap();
                }
            }
            _this.addConnectivityListeners();
        });
    };
    GoogleMapsProvider.prototype.initMap = function () {
        var _this = this;
        this.mapInitialised = true;
        return new Promise(function (resolve, reject) {
            _this.geolocation.getCurrentPosition().then(function (position) {
                var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                // let latLng = new google.maps.LatLng(-31.563910, 147.154312);
                var mapOptions = {
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    clickableIcons: false
                };
                _this.map = new google.maps.Map(_this.mapElement, mapOptions);
                resolve(_this.map);
            });
        });
    };
    GoogleMapsProvider.prototype.disableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "block";
        }
    };
    GoogleMapsProvider.prototype.enableMap = function () {
        if (this.pleaseConnect) {
            this.pleaseConnect.style.display = "none";
        }
    };
    GoogleMapsProvider.prototype.addConnectivityListeners = function () {
        var _this = this;
        this.connectivityService.watchOnline().subscribe(function () {
            console.log("online");
            setTimeout(function () {
                if (typeof google == "undefined" || typeof google.maps == "undefined") {
                    _this.loadGoogleMaps();
                }
                else {
                    if (!_this.mapInitialised) {
                        _this.initMap();
                    }
                    _this.enableMap();
                }
            }, 2000);
        });
        this.connectivityService.watchOffline().subscribe(function () {
            console.log("offline");
            _this.disableMap();
        });
    };
    GoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_connectivity_service_connectivity_service__["a" /* ConnectivityServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GoogleMapsProvider);
    return GoogleMapsProvider;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(514);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 275,
	"./af.js": 275,
	"./ar": 276,
	"./ar-dz": 277,
	"./ar-dz.js": 277,
	"./ar-kw": 278,
	"./ar-kw.js": 278,
	"./ar-ly": 279,
	"./ar-ly.js": 279,
	"./ar-ma": 280,
	"./ar-ma.js": 280,
	"./ar-sa": 281,
	"./ar-sa.js": 281,
	"./ar-tn": 282,
	"./ar-tn.js": 282,
	"./ar.js": 276,
	"./az": 283,
	"./az.js": 283,
	"./be": 284,
	"./be.js": 284,
	"./bg": 285,
	"./bg.js": 285,
	"./bm": 286,
	"./bm.js": 286,
	"./bn": 287,
	"./bn.js": 287,
	"./bo": 288,
	"./bo.js": 288,
	"./br": 289,
	"./br.js": 289,
	"./bs": 290,
	"./bs.js": 290,
	"./ca": 291,
	"./ca.js": 291,
	"./cs": 292,
	"./cs.js": 292,
	"./cv": 293,
	"./cv.js": 293,
	"./cy": 294,
	"./cy.js": 294,
	"./da": 295,
	"./da.js": 295,
	"./de": 296,
	"./de-at": 297,
	"./de-at.js": 297,
	"./de-ch": 298,
	"./de-ch.js": 298,
	"./de.js": 296,
	"./dv": 299,
	"./dv.js": 299,
	"./el": 300,
	"./el.js": 300,
	"./en-au": 301,
	"./en-au.js": 301,
	"./en-ca": 302,
	"./en-ca.js": 302,
	"./en-gb": 303,
	"./en-gb.js": 303,
	"./en-ie": 304,
	"./en-ie.js": 304,
	"./en-il": 305,
	"./en-il.js": 305,
	"./en-nz": 306,
	"./en-nz.js": 306,
	"./eo": 307,
	"./eo.js": 307,
	"./es": 308,
	"./es-do": 309,
	"./es-do.js": 309,
	"./es-us": 310,
	"./es-us.js": 310,
	"./es.js": 308,
	"./et": 311,
	"./et.js": 311,
	"./eu": 312,
	"./eu.js": 312,
	"./fa": 313,
	"./fa.js": 313,
	"./fi": 314,
	"./fi.js": 314,
	"./fo": 315,
	"./fo.js": 315,
	"./fr": 316,
	"./fr-ca": 317,
	"./fr-ca.js": 317,
	"./fr-ch": 318,
	"./fr-ch.js": 318,
	"./fr.js": 316,
	"./fy": 319,
	"./fy.js": 319,
	"./gd": 320,
	"./gd.js": 320,
	"./gl": 321,
	"./gl.js": 321,
	"./gom-latn": 322,
	"./gom-latn.js": 322,
	"./gu": 323,
	"./gu.js": 323,
	"./he": 324,
	"./he.js": 324,
	"./hi": 325,
	"./hi.js": 325,
	"./hr": 326,
	"./hr.js": 326,
	"./hu": 327,
	"./hu.js": 327,
	"./hy-am": 328,
	"./hy-am.js": 328,
	"./id": 329,
	"./id.js": 329,
	"./is": 330,
	"./is.js": 330,
	"./it": 331,
	"./it.js": 331,
	"./ja": 332,
	"./ja.js": 332,
	"./jv": 333,
	"./jv.js": 333,
	"./ka": 334,
	"./ka.js": 334,
	"./kk": 335,
	"./kk.js": 335,
	"./km": 336,
	"./km.js": 336,
	"./kn": 337,
	"./kn.js": 337,
	"./ko": 338,
	"./ko.js": 338,
	"./ky": 339,
	"./ky.js": 339,
	"./lb": 340,
	"./lb.js": 340,
	"./lo": 341,
	"./lo.js": 341,
	"./lt": 342,
	"./lt.js": 342,
	"./lv": 343,
	"./lv.js": 343,
	"./me": 344,
	"./me.js": 344,
	"./mi": 345,
	"./mi.js": 345,
	"./mk": 346,
	"./mk.js": 346,
	"./ml": 347,
	"./ml.js": 347,
	"./mn": 348,
	"./mn.js": 348,
	"./mr": 349,
	"./mr.js": 349,
	"./ms": 350,
	"./ms-my": 351,
	"./ms-my.js": 351,
	"./ms.js": 350,
	"./mt": 352,
	"./mt.js": 352,
	"./my": 353,
	"./my.js": 353,
	"./nb": 354,
	"./nb.js": 354,
	"./ne": 355,
	"./ne.js": 355,
	"./nl": 356,
	"./nl-be": 357,
	"./nl-be.js": 357,
	"./nl.js": 356,
	"./nn": 358,
	"./nn.js": 358,
	"./pa-in": 359,
	"./pa-in.js": 359,
	"./pl": 360,
	"./pl.js": 360,
	"./pt": 361,
	"./pt-br": 362,
	"./pt-br.js": 362,
	"./pt.js": 361,
	"./ro": 363,
	"./ro.js": 363,
	"./ru": 364,
	"./ru.js": 364,
	"./sd": 365,
	"./sd.js": 365,
	"./se": 366,
	"./se.js": 366,
	"./si": 367,
	"./si.js": 367,
	"./sk": 368,
	"./sk.js": 368,
	"./sl": 369,
	"./sl.js": 369,
	"./sq": 370,
	"./sq.js": 370,
	"./sr": 371,
	"./sr-cyrl": 372,
	"./sr-cyrl.js": 372,
	"./sr.js": 371,
	"./ss": 373,
	"./ss.js": 373,
	"./sv": 374,
	"./sv.js": 374,
	"./sw": 375,
	"./sw.js": 375,
	"./ta": 376,
	"./ta.js": 376,
	"./te": 377,
	"./te.js": 377,
	"./tet": 378,
	"./tet.js": 378,
	"./tg": 379,
	"./tg.js": 379,
	"./th": 380,
	"./th.js": 380,
	"./tl-ph": 381,
	"./tl-ph.js": 381,
	"./tlh": 382,
	"./tlh.js": 382,
	"./tr": 383,
	"./tr.js": 383,
	"./tzl": 384,
	"./tzl.js": 384,
	"./tzm": 385,
	"./tzm-latn": 386,
	"./tzm-latn.js": 386,
	"./tzm.js": 385,
	"./ug-cn": 387,
	"./ug-cn.js": 387,
	"./uk": 388,
	"./uk.js": 388,
	"./ur": 389,
	"./ur.js": 389,
	"./uz": 390,
	"./uz-latn": 391,
	"./uz-latn.js": 391,
	"./uz.js": 390,
	"./vi": 392,
	"./vi.js": 392,
	"./x-pseudo": 393,
	"./x-pseudo.js": 393,
	"./yo": 394,
	"./yo.js": 394,
	"./zh-cn": 395,
	"./zh-cn.js": 395,
	"./zh-hk": 396,
	"./zh-hk.js": 396,
	"./zh-tw": 397,
	"./zh-tw.js": 397
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 573;

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_my_bookings_my_bookings__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_quicktour_modal_quicktour_modal__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_onboarding_onboarding__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_screen_orientation__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_header_color__ = __webpack_require__(481);
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
    function MyApp(platform, statusBar, headerColor, splashScreen, parseService, loadingCtrl, network, toastCtrl, modalCtrl, alertCtrl, translate, events, screenOrientation, globalConfig) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.headerColor = headerColor;
        this.splashScreen = splashScreen;
        this.parseService = parseService;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.events = events;
        this.screenOrientation = screenOrientation;
        this.globalConfig = globalConfig;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_onboarding_onboarding__["a" /* OnboardingPage */];
        this.user = "";
        this.initializeApp();
        this.translateConfig();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // This is for network checker when no internet is available.
            //console.log(this.network.type)
            // if(this.network.type == 'none'){
            //   let message = "Your connection type is " + this.network.type
            //   let alert = this.alertCtrl.create({
            //     title: 'Internet Connection',
            //     subTitle: 'You have no internet access',
            //     buttons: [{
            //       text: 'Ok',
            //       handler: () => {
            //         this.platform.exitApp();
            //       }
            //     }]
            //   })
            //   alert.present()
            // }
            // this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.backgroundColorByHexString('#ffffff');
            _this.headerColor.tint('#ffffff');
            _this.splashScreen.hide();
            _this.initializePage();
            if (_this.platform.is('cordova')) {
                _this.screenOrientation.lock(_this.screenOrientation.ORIENTATIONS.PORTRAIT);
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initializePage = function () {
        this.pages = [
            { title: 'Search Room', component: "HomePage" },
            { title: 'My Bookings', component: __WEBPACK_IMPORTED_MODULE_4__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */] },
            { title: 'Add Room', component: 'AddRoomPage' }
        ];
        // console.log(this.pages);
    };
    MyApp.prototype.translateConfig = function () {
        console.log('translate config');
        this.translate.setDefaultLang(this.globalConfig.defaultLang);
    };
    MyApp.prototype.resetPage = function () {
        this.user = '';
        this.pages = [
            { title: 'Search Room', component: "HomePage" },
        ];
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Logging Out, Please Wait..'
        });
        loading.present();
        this.parseService.logoutUser().then(function (success) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_onboarding_onboarding__["a" /* OnboardingPage */]);
            loading.dismiss();
            _this.presentToast("Logged out successfully!");
        }, function (err) {
            loading.dismiss();
            _this.presentToast(err.message);
        });
    };
    MyApp.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.editProfile = function () {
        this.nav.push("EditProfilePage");
    };
    MyApp.prototype.howToUse = function () {
        console.log('tutorial');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_quicktour_modal_quicktour_modal__["a" /* QuicktourModalPage */]);
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/app/app.html"*/'<!-- <ion-menu [content]="content">\n  <ion-content>\n      <ion-list> -->\n\n        <!--<ion-list-header style="background-color:black" *ngIf="user">-->\n          <!--<ion-grid>-->\n            <!--<ion-row align-items-center style="font-size:24px">-->\n              <!--<ion-col>-->\n                <!--{{user.firstName}} {{user.lastName}}-->\n              <!--</ion-col>-->\n              <!--<ion-col text-right>-->\n                <!--<button menuClose ion-button clear (click)="editProfile()">-->\n                  <!--<ion-icon style="font-size: 24px" name="settings"></ion-icon>-->\n                <!--</button>-->\n              <!--</ion-col>-->\n            <!--</ion-row>-->\n          <!--</ion-grid>-->\n        <!--</ion-list-header>-->\n        <!--<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">-->\n          <!--{{p.title}}-->\n        <!--</button>-->\n\n        <!-- <button menuClose ion-item (click)="howToUse()">Quick Tour</button> -->\n\n        <!-- <button menuClose ion-item (click)="logout()">Logout</button> -->\n        <!--\n      </ion-list>\n  </ion-content>\n</ion-menu> -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__providers_parse_service__["a" /* ParseService */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_header_color__["a" /* HeaderColor */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_header_color__["a" /* HeaderColor */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_11__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFadeEnterTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
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

var ModalFadeEnterTransition = (function (_super) {
    __extends(ModalFadeEnterTransition, _super);
    function ModalFadeEnterTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFadeEnterTransition.prototype.init = function () {
        var ele = this.enteringView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Animation"](this.plt, ele.querySelector('.modal-wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(0)', 'opacity': 0 });
        wrapper.fromTo('transform', 'scale(0)', 'scale(1.0)');
        wrapper.fromTo('opacity', 0, 1);
        this
            .element(this.enteringView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalFadeEnterTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["PageTransition"]));

//# sourceMappingURL=ModalFadeEnterTransition.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFadeLeaveTransition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
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

var ModalFadeLeaveTransition = (function (_super) {
    __extends(ModalFadeLeaveTransition, _super);
    function ModalFadeLeaveTransition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModalFadeLeaveTransition.prototype.init = function () {
        var ele = this.leavingView.pageRef().nativeElement;
        var wrapper = new __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["Animation"](this.plt, ele.querySelector('.modal-wrapper'));
        // const contentWrapper = new Animation(this.plt, ele.querySelector('.wrapper'));
        wrapper.beforeStyles({ 'transform': 'scale(0)', 'opacity': 1 });
        wrapper.fromTo('transform', 'scale(1)', 'scale(0.0)');
        wrapper.fromTo('opacity', 1, 0);
        // contentWrapper.fromTo('opacity', 1, 0);
        this
            .element(this.leavingView.pageRef())
            .duration(500)
            .easing('cubic-bezier(.1, .7, .1, 1)')
            .add(wrapper);
    };
    return ModalFadeLeaveTransition;
}(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["PageTransition"]));

//# sourceMappingURL=ModalFadeLeaveTransition.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__ = __webpack_require__(31);

var CommonHandler = (function () {
    function CommonHandler(toastCtrl, viewCtrl, globalConfig, geolocation, translate) {
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.globalConfig = globalConfig;
        this.geolocation = geolocation;
        this.translate = translate;
        this.searchModeClass = "";
        this.currencySymbol = "";
        this.gLogoImagePath = __WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__["a" /* GlobalConfigurationService */].GHOURS_LOGO_PATH;
        this.currencySymbol = __WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__["a" /* GlobalConfigurationService */].CURRENCY_SYMBOL;
        switch (__WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_MODE_CURRENT) {
            case __WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_TRANSIT:
                this.searchModeClass = "g-search-mode0";
                break;
            case __WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_24HOURS:
                this.searchModeClass = "g-search-mode1";
                break;
            case __WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_1NIGHT:
                this.searchModeClass = "g-search-mode2";
                break;
        }
    }
    CommonHandler.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    };
    CommonHandler.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    CommonHandler.prototype.myLocation = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0
        };
        if (__WEBPACK_IMPORTED_MODULE_0__providers_global_configuration_service__["a" /* GlobalConfigurationService */].DEVELOPMENT_MODE) {
            return new Promise(function (resolve) {
                resolve({
                    coords: {
                        latitude: -6.1082139,
                        longitude: 106.7803121
                    }
                });
            });
        }
        else {
            return this.geolocation.getCurrentPosition(options);
        }
    };
    CommonHandler.prototype.splitTextToWords = function (text) {
        // WT: ikutin dari cara split di TruncateWordsPipe
        return text.split(/\s+/);
    };
    CommonHandler.prototype.toggleShowLess = function (el, truncating) {
        var txt_more, txt_less;
        this.translate.get('MORE').subscribe(function (value) { txt_more = value; });
        this.translate.get('LESS').subscribe(function (value) { txt_less = value; });
        el.innerHTML = truncating ? txt_less : txt_more;
        return !truncating;
    };
    return CommonHandler;
}());

//# sourceMappingURL=CommonHandler.js.map

/***/ })

},[541]);
//# sourceMappingURL=main.js.map