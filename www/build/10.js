webpackJsonp([10],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsRoomDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(42);
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
 * Generated class for the SearchResultsRoomDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchResultsRoomDetailPage = (function (_super) {
    __extends(SearchResultsRoomDetailPage, _super);
    function SearchResultsRoomDetailPage(navCtrl, viewCtrl, toastCtrl, navParams, parseService, loadingCtrl, modalCtrl, alertCtrl, popoverCtrl, translate, geolocation, globalConfig) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.navCtrl = navCtrl;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.navParams = navParams;
        _this.parseService = parseService;
        _this.loadingCtrl = loadingCtrl;
        _this.modalCtrl = modalCtrl;
        _this.alertCtrl = alertCtrl;
        _this.popoverCtrl = popoverCtrl;
        _this.translate = translate;
        _this.geolocation = geolocation;
        _this.globalConfig = globalConfig;
        _this.roomDetail = '';
        _this.bookTime = 3;
        _this.loadData = false;
        _this.shownGroup = null;
        _this.items = [];
        _this.smoking = false;
        _this.basicFacilities = [{
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
                title1: "NO_WIFI",
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
        _this.otherFacilities = [{
                id: 0,
                value: 0,
                title: 'WASHING_MACHINE'
            },
            {
                id: 1,
                value: 0,
                title: 'CLOTHES_DRYER'
            },
            {
                id: 2,
                value: 0,
                title: 'DISHWASHER'
            },
            {
                id: 3,
                value: 0,
                title: 'FAN'
            },
            {
                id: 4,
                value: 0,
                title: 'DVD/CD_PLAYER'
            },
            {
                id: 5,
                value: 0,
                title: 'DAILY_NEWSPAPER'
            },
            {
                id: 6,
                value: 0,
                title: 'INHOUSE_MOVIES'
            },
            {
                id: 7,
                value: 0,
                title: 'IN_ROOM_VIDEO_GAMES'
            },
            {
                id: 8,
                value: 0,
                title: 'INTERNET_ACCESS_WIFI_CHARGES_APPLY'
            },
            {
                id: 9,
                value: 0,
                title: 'INTERNET_ACCESS_LAN_COMPLIMENTARY'
            },
            {
                id: 10,
                value: 0,
                title: 'INTERNET_ACCESS_LAN_CHARGES_APPLY'
            },
            {
                id: 11,
                value: 0,
                title: 'KITCHENETTE'
            },
            {
                id: 12,
                value: 0,
                title: 'MINI_BAR'
            },
            {
                id: 13,
                value: 0,
                title: 'PRIVATE_POOL'
            },
            {
                id: 14,
                value: 0,
                title: 'SEPARATE_DINING_AREA'
            },
            {
                id: 15,
                value: 0,
                title: 'BALCONY_TERRACE'
            },
            {
                id: 16,
                value: 0,
                title: 'INTERCONNECTING_ROOMS_AVAILABLE'
            },
            {
                id: 17,
                value: 0,
                title: 'LUNCH'
            },
            {
                id: 18,
                value: 0,
                title: 'DINNER'
            },
            {
                id: 19,
                value: 0,
                title: 'COMPLIMENTARY_BOTTLED_WATER'
            },
            {
                id: 20,
                value: 0,
                title: 'EXECUTIVE_LOUNGE_ACCESS'
            },
            {
                id: 21,
                value: 0,
                title: 'BLACKOUT_CURTAINS'
            },
            {
                id: 22,
                value: 0,
                title: 'MOSQUITO_NET'
            },
            {
                id: 23,
                value: 0,
                title: 'SEATING_AREA'
            }
        ];
        _this.roomFacilities = [{
                id: 0,
                value: 0,
                image: "assets/images/room-facilities/Hair Dryer.png",
                title: "HAIRDRYER"
            },
            {
                id: 1,
                value: 0,
                image: "assets/images/room-facilities/AC.png",
                title: "AIR_CONDITIONER"
            },
            {
                id: 2,
                value: 0,
                image: "assets/images/room-facilities/Safety Box.png",
                title: "SAFETY_BOX"
            },
            {
                id: 3,
                value: 0,
                image: "assets/images/room-facilities/TV.png",
                title: "TV"
            },
            {
                id: 4,
                value: 0,
                image: "assets/images/room-facilities/Microwave.png",
                title: "MICROWAVE"
            },
            {
                id: 5,
                value: 0,
                image: "assets/images/room-facilities/Coffee Tea Maker.png",
                title: "COFFEE/TEA_MAKER"
            },
            {
                id: 6,
                value: 0,
                image: "assets/images/room-facilities/Desk.png",
                title: "DESK"
            },
            {
                id: 7,
                value: 0,
                image: "assets/images/room-facilities/Ironing.png",
                title: "IRONING_FACILITY"
            },
            {
                id: 8,
                value: 0,
                image: "assets/images/room-facilities/Mini Fridge.png",
                title: "MINI_FRIDGE"
            }
        ];
        _this.bathroomAmenities = [{
                id: 0,
                value: 0,
                image: "assets/images/bathroom-amenities/Private Bathroom.png",
                title: "PRIVATE_BATHROOM"
            },
            {
                id: 1,
                value: 0,
                image: "assets/images/bathroom-amenities/Hot Water.png",
                title: "HOT_WATER"
            },
            {
                id: 2,
                value: 0,
                image: "assets/images/bathroom-amenities/Shower.png",
                title: "Shower"
            },
            {
                id: 3,
                value: 0,
                image: "assets/images/bathroom-amenities/Toiletries.png",
                title: "TOILETRIES"
            },
            {
                id: 4,
                value: 0,
                image: "assets/images/bathroom-amenities/Bathtub.png",
                title: "BATHTUB"
            },
            {
                id: 5,
                value: 0,
                image: "assets/images/bathroom-amenities/Bathrobes.png",
                title: "BATHROBES"
            },
            {
                id: 6,
                value: 0,
                image: "assets/images/bathroom-amenities/Slippers.png",
                title: "SLIPPERS"
            }
        ];
        //this.id = navParams.data
        console.log(navParams.data);
        _this.items = navParams.get("rules");
        console.log(JSON.stringify(_this.items));
        _this.roomDetail = navParams.get('classDetail');
        _this.images = [{
                url: 'assets/images/p1.jpg'
            }, {
                url: 'assets/images/p2.jpg'
            }, {
                url: 'assets/images/p3.jpg'
            }];
        var basicFacilities = _this.roomDetail.basicFacilities;
        var roomFacilities = _this.roomDetail.roomFacilities;
        var roomOverview = _this.roomDetail.roomOverview;
        var bathroomAmenities = _this.roomDetail.bathroomAmenities;
        for (var _i = 0, basicFacilities_1 = basicFacilities; _i < basicFacilities_1.length; _i++) {
            var item = basicFacilities_1[_i];
            _this.basicFacilities[item.id].value = 1;
        }
        for (var _a = 0, roomFacilities_1 = roomFacilities; _a < roomFacilities_1.length; _a++) {
            var item = roomFacilities_1[_a];
            _this.roomFacilities[item].value = 1;
        }
        _this.roomOverview[0].value = roomOverview[0];
        _this.roomOverview[1].value = roomOverview[1];
        _this.smoking = roomOverview[2];
        for (var _b = 0, bathroomAmenities_1 = bathroomAmenities; _b < bathroomAmenities_1.length; _b++) {
            var item = bathroomAmenities_1[_b];
            _this.bathroomAmenities[item].value = 1;
        }
        __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__["a" /* GlobalConfigurationService */].KODE_UNIQUE = 0;
        return _this;
    }
    SearchResultsRoomDetailPage.prototype.ionViewDidLoad = function () {
        // this.navBar.backButtonClick = (e: UIEvent) => {
        //   this.navCtrl.pop({
        //     animate: true,
        //     animation: 'ios-transition',
        //     direction: 'back'
        //   })
        // }
    };
    SearchResultsRoomDetailPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    SearchResultsRoomDetailPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    SearchResultsRoomDetailPage.prototype.presentConfirm = function (room, interval, checkIn) {
        var _this = this;
        var loginTitle;
        var loginMessage;
        var cancel;
        var signin;
        this.translate.get('LOG_IN_REQUIRED').subscribe(function (value) { loginTitle = value; });
        this.translate.get('LOG_IN_REQUIRED_MESSAGE').subscribe(function (value) { loginMessage = value; });
        this.translate.get('CANCEL').subscribe(function (value) { cancel = value; });
        this.translate.get('SIGN_IN').subscribe(function (value) { signin = value; });
        var alert = this.alertCtrl.create({
            title: loginTitle,
            message: loginMessage,
            buttons: [{
                    text: cancel,
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: signin,
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
    SearchResultsRoomDetailPage.prototype.bookRoom = function (time) {
        //Convert string to date of navParams
        var user = this.parseService.getCurrentUser();
        var bookTime = new Date(this.navParams.get('checkIn'));
        console.log(user);
        console.log(bookTime);
        if (isNaN(bookTime.getTime())) {
            bookTime = new Date();
            console.log("default time set");
        }
    };
    SearchResultsRoomDetailPage.prototype.showBookingDetail = function () {
        if (this.parseService.getCurrentUser() != null) {
            this.navCtrl.push("BookingDetailsPage", {
                classDetail: this.roomDetail
            }, {
                animate: true,
                animation: 'ios-transition',
                direction: 'forward'
            });
        }
        else {
            this.presentLoginRegis();
        }
    };
    SearchResultsRoomDetailPage.prototype.presentLoginRegis = function () {
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
                            _this.showBookingDetail();
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
                            _this.showBookingDetail();
                        });
                    }
                },
                cancelBtn
            ]
        });
        alert.present();
    };
    SearchResultsRoomDetailPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    SearchResultsRoomDetailPage.prototype.filterArray = function (array, type) {
        return array.filter(function (x) { return x.value == type; });
    };
    SearchResultsRoomDetailPage.prototype.seeOtherAmenities = function () {
        var login = this.modalCtrl.create("OtherAmenitiesModalPage", {
            data: this.roomDetail.otherFacilities
        });
        login.present();
    };
    SearchResultsRoomDetailPage.prototype.presentPopover = function (myEvent) {
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
    ], SearchResultsRoomDetailPage.prototype, "navBar", void 0);
    SearchResultsRoomDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search-results-room-detail',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search-results-room-detail/search-results-room-detail.html"*/'<ion-header class="cls-search-rest" [ngClass]="searchModeClass">\n  <ion-navbar>\n    <ion-title>{{"ROOM_DETAILS" | translate}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar class="extra-header">\n    <ion-title no-padding class="custom-header">\n      <span class="text-tax">\n        {{"PRICING_NOTICE" | translate }}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen="true">\n  <ion-grid no-padding class="clscontentgrid">\n    <ion-slides pager="true" style="height:180px;object-fit:cover">\n      <!--<ion-slide>-->\n        <!--<img src={{roomDetail.thumbnail}} style="width:100vw" />-->\n      <!--</ion-slide>-->\n      <ion-slide *ngFor="let image of roomDetail.gallery">\n        <img src={{image._url}} style="width:100vw" />\n      </ion-slide>\n    </ion-slides>\n    <ion-row padding>\n      <ion-col class="text-title">\n        {{roomDetail.name}}\n      </ion-col>\n    </ion-row>\n    <ion-row padding>\n      <ion-col *ngIf="roomDetail.mode == 0">\n        <span class="text-price">\n          {{currencySymbol}} {{(roomDetail.priceList[roomDetail.duration - 1].price * (100 - roomDetail.discountRate)) / 100 | number:\'1.0-0\'}}\n        </span>\n        <span class="text-subheader">/{{"ROOM" | translate}} {{"FOR" | translate}} /{{roomDetail.duration}} {{"HOUR(S)" | translate}}</span>\n        <br/>\n        <div *ngIf="roomDetail.discountRate > 0">\n          <s class="text-content">{{currencySymbol}} {{roomDetail.priceList[roomDetail.duration - 1].price | number:\'1.0-0\'}}</s>\n          <span class="text-subheader"> {{roomDetail.discountRate}}% OFF</span>\n        </div>\n      </ion-col>\n      <ion-col *ngIf="roomDetail.mode == 1">\n        <span class="text-price">\n          {{currencySymbol}} {{(roomDetail.pricing24 * (100 - roomDetail.discountRate)) / 100 | number:\'1.0-0\'}}\n        </span>\n        <span class="text-subheader">/{{"ROOM" | translate}} {{"FOR" | translate}} 24 {{"HOUR(S)" | translate}}</span>\n        <br/>\n        <div *ngIf="roomDetail.discountRate > 0">\n          <s class="text-content">{{currencySymbol}} {{roomDetail.price | number:\'1.0-0\'}}</s>\n          <span class="text-subheader"> {{roomDetail.discountRate}}% OFF</span>\n        </div>\n      </ion-col>\n      <ion-col *ngIf="roomDetail.mode == 2">\n        <span class="text-price">\n          {{currencySymbol}} {{(roomDetail.price * (100 - roomDetail.discountRate)) / 100 | number:\'1.0-0\'}}\n        </span>/{{"ROOM" | translate}} / {{"NIGHT(S)" | translate}}\n        <br/>\n        <div *ngIf="roomDetail.discountRate > 0">\n          <s class="text-content">{{currencySymbol}} {{roomDetail.price | number:\'1.0-0\'}}</s>\n          <span class="text-subheader"> {{roomDetail.discountRate}}% OFF</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class="separator">\n\n    </div>\n    <ion-row padding>\n      <ion-col class="text-header">\n        {{"BASIC_FACILITIES" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal>\n      <ion-list class="div-separator">\n        <ion-item no-lines *ngFor="let item of basicFacilities">\n          <ion-row no-padding>\n            <ion-col col-1>\n              <img style="width:16px;height:16px;margin-bottom:-2px" [src]="item.value == 0 ? item.imageB : item.imageA" />\n\n            </ion-col>\n            <ion-col class="text-item-title">\n              <span *ngIf="item.value == 0">{{item.title1 | translate}}</span>\n              <span *ngIf="item.value == 1">{{item.title2 | translate}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n\n    <ion-row padding>\n      <ion-col class="text-header">\n        {{"ROOM_OVERVIEW" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal>\n      <ion-list class="div-separator">\n        <ion-item no-lines *ngFor="let item of roomOverview">\n          <ion-row no-padding>\n            <ion-col col-1>\n              <img style="height:16px;width:16px;object-fit:contain" [src]="item.image" />\n            </ion-col>\n            <ion-col>\n              <span class="text-item-title">{{item.title | translate}}</span>\n              <br />\n              <span class="text-item-subtitle">{{item.value}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-row no-padding>\n            <ion-col col-1>\n              <img style="height:16px;width:16px;object-fit:contain" [src]="\'assets/images/room-overview/Capacity.png\'" />\n            </ion-col>\n            <ion-col class="text-item-title">\n              <span class="text-item-title">{{"UNIT_CAPACITY" | translate}}</span>\n              <br />\n              <span class="text-item-subtitle">{{roomDetail.unitCapacity}} {{"GUEST(S)" | translate}}/{{"ROOM" | translate}}</span>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n\n    <ion-row padding>\n      <ion-col class="text-header">\n        {{"ROOM_FACILITIES" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal>\n      <ion-list class="div-separator">\n        <ion-item no-lines *ngFor="let item of filterArray(roomFacilities,1)">\n          <ion-row no-padding>\n            <ion-col col-1>\n              <img style="height:16px;width:16px;object-fit:contain" [src]="item.image" />\n            </ion-col>\n            <ion-col class="text-item-title">\n              {{item.title | translate}}\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n    <ion-row padding>\n      <ion-col class="text-header">\n        {{"BATHROOM_AMENITIES" | translate}}\n      </ion-col>\n    </ion-row>\n    <ion-row padding-horizontal>\n      <ion-list class="div-separator">\n        <ion-item no-lines *ngFor="let item of filterArray(bathroomAmenities,1)">\n          <ion-row no-padding>\n            <ion-col col-1>\n              <img style="height:16px;width:16px;object-fit:contain" [src]="item.image" />\n            </ion-col>\n            <ion-col class="text-item-title">\n              {{item.title | translate}}\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </ion-row>\n    <ion-row padding-horizontal align-items-center>\n      <ion-col class="text-header" style="padding:5px">\n        {{"OTHER_AMENITIES" | translate}}\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small (click)="seeOtherAmenities()">{{"SEE_ALL" | translate}}</button>\n      </ion-col>\n    </ion-row>\n    <div class="separator">\n\n    </div>\n\n    <!-- <ion-list padding>\n      <ion-list-header>\n        Basic Facilities\n      </ion-list-header>\n      <ion-item no-lines *ngFor="let item of filterArray(basicFacilities,1)">\n        <ion-avatar item-start>\n          <img style="border-radius:0;height:16px" [src]="item.image" />\n        </ion-avatar>\n        <span class="text-item-title">{{item.title}}</span>\n      </ion-item>\n    </ion-list> -->\n  </ion-grid>\n\n  <div class="section-separator">\n\n  </div>\n\n  <ion-list>\n    <ion-item text-wrap (click)="toggleGroup(99)" [ngClass]="{active: isGroupShown(99)}">\n      <span class="text-title">{{"ROOM_DESCRIPTION" | translate}}</span>\n      <ion-icon item-end color="success" item-right [name]="isGroupShown(99) ? \'md-arrow-dropdown\' : \'md-arrow-dropright\'"></ion-icon>\n      <div *ngIf="isGroupShown(99)">\n        <span *ngIf="roomDetail.currentLanguage == \'en\'" class="text-item-description" [innerHTML]="roomDetail.description"></span>\n        <span *ngIf="roomDetail.currentLanguage == \'id\'" class="text-item-description" [innerHTML]="roomDetail.descriptionINA"></span>\n      </div>\n    </ion-item>\n\n    <ion-item *ngFor="let item of items; let i = index;" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n      <span class="text-title">{{item.title | translate}}</span>\n      <ion-icon item-end color="success" item-right [name]="isGroupShown(i) ? \'md-arrow-dropdown\' : \'md-arrow-dropright\'"></ion-icon>\n      <div *ngIf="isGroupShown(i)">\n        <span *ngIf="roomDetail.currentLanguage == \'en\'" class="text-item-description" [innerHTML]="item.text"></span>\n        <span *ngIf="roomDetail.currentLanguage == \'id\'" class="text-item-description" [innerHTML]="item.textINA"></span>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer padding-horizontal style="background-color:rgb(234,234,234);" [ngClass]="searchModeClass">\n  <ion-toolbar style="background-color:rgb(234,234,234);border-width:0">\n    <ion-row align-items-center>\n      <!-- <ion-col text-left style="font-size: 2rem;">\n        {{roomDetail.priceList[roomDetail.duration - 1].price | number:\'1.0-0\'}}\n        <br/>\n        <s style="font-size: 1.3rem">{{roomDetail.priceList[roomDetail.duration - 1].price | number:\'1.0-0\'}}</s><b style="font-size:1.3rem"> 20%\n        OFF</b>\n      </ion-col> -->\n      <ion-col class="cls-button-submit">\n        <button ion-button block (click)="showBookingDetail()">{{"BOOK_THIS_ROOM" | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search-results-room-detail/search-results-room-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], SearchResultsRoomDetailPage);
    return SearchResultsRoomDetailPage;
}(__WEBPACK_IMPORTED_MODULE_5__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=search-results-room-detail.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsRoomDetailPageModule", function() { return SearchResultsRoomDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_results_room_detail__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchResultsRoomDetailPageModule = (function () {
    function SearchResultsRoomDetailPageModule() {
    }
    SearchResultsRoomDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_results_room_detail__["a" /* SearchResultsRoomDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__search_results_room_detail__["a" /* SearchResultsRoomDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__search_results_room_detail__["a" /* SearchResultsRoomDetailPage */]
            ]
        })
    ], SearchResultsRoomDetailPageModule);
    return SearchResultsRoomDetailPageModule;
}());

//# sourceMappingURL=search-results-room-detail.module.js.map

/***/ })

});
//# sourceMappingURL=10.js.map