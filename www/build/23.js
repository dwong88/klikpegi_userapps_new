webpackJsonp([23],{

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete_page_autocomplete_page__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_results_search_results__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CommonHandler__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__ = __webpack_require__(31);
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











var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, modalCtrl, loadingCtrl, viewCtrl, toastCtrl, geolocation, popoverCtrl, parseService, navParams, sanitizer, translate, globalConfig) {
        var _this = _super.call(this, toastCtrl, viewCtrl, globalConfig, geolocation, translate) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.geolocation = geolocation;
        _this.popoverCtrl = popoverCtrl;
        _this.parseService = parseService;
        _this.navParams = navParams;
        _this.sanitizer = sanitizer;
        _this.translate = translate;
        _this.globalConfig = globalConfig;
        // @ViewChild('rangeDate') rangeDate: MbscRange;
        _this.checkInDate = __WEBPACK_IMPORTED_MODULE_7_moment__().format();
        // checkInOptions: MbscRangeOptions = {
        // 	returnFormat: 'moment'
        // }
        _this.minDate = new Date().toISOString();
        _this.maxDate = new Date().toISOString();
        _this.duration = 1;
        _this.guestQty = 1;
        _this.roomQty = 1;
        _this.kilometers = 200;
        _this.location = {
            lat: '',
            lng: ''
        };
        _this.images = [
            'assets/images/background-image/bg-transit.jpg',
            'assets/images/background-image/BG7.png',
            'assets/images/background-image/BG3.png',
            'assets/images/background-image/BG4.png',
            'assets/images/background-image/BG5.png'
        ];
        _this.isSearchModeTransit = false;
        _this.isSearchModeOneNight = false;
        _this.isSearchMode24Hours = false;
        _this.address = '';
        _this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        _this.priceRange = {
            lower: 2800000,
            upper: 6150000
        };
        // this.searchMode = navParams.get('mode');
        // Hard code hanya 1 Night aja
        _this.searchMode = "2";
        //console.log(moment().utcOffset(this.minDate).minute());
        // if(parseInt(this.searchMode) != GlobalConfigurationService.SEARCH_TYPE.SRC_1NIGHT) {
        var startMin = Math.ceil(__WEBPACK_IMPORTED_MODULE_7_moment__().utcOffset(_this.minDate).minute() / 5) * 5;
        if (startMin == 60) {
            startMin = 0;
            _this.checkInDate = __WEBPACK_IMPORTED_MODULE_7_moment__().utcOffset(_this.minDate).local().startOf('hour').add(1, 'hours').minutes(startMin).format();
        }
        else {
            _this.checkInDate = __WEBPACK_IMPORTED_MODULE_7_moment__().utcOffset(_this.minDate).local().startOf('hour').minutes(startMin).format();
        }
        _this.labelCheckInDate = __WEBPACK_IMPORTED_MODULE_7_moment__().utcOffset(_this.checkInDate).local().format('DD/MM/YYYY');
        _this.maxDate = __WEBPACK_IMPORTED_MODULE_7_moment__().utcOffset(_this.maxDate).add(1, 'day').local().format();
        _this.minDate = __WEBPACK_IMPORTED_MODULE_7_moment__().utcOffset(_this.minDate).local().format();
        console.log("searchMode: " + _this.searchMode);
        console.log("src: " + __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_TRANSIT);
        switch (parseInt(_this.searchMode)) {
            case __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_TRANSIT:
                __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_MODE_CURRENT = __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_TRANSIT;
                _this.isSearchModeTransit = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_24HOURS:
                __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_MODE_CURRENT = __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_24HOURS;
                _this.isSearchMode24Hours = true;
                break;
            case __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_1NIGHT:
                __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_MODE_CURRENT = __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */].SEARCH_TYPE.SRC_1NIGHT;
                _this.isSearchModeOneNight = true;
                break;
        }
        // Hardcode untuk klikpegi jadinya untuk halaman search pakai button warna biru aja.
        _this.isSearchModeTransit = true;
        _this.isSearchMode24Hours = false;
        _this.isSearchModeOneNight = false;
        return _this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('this is search page');
        this.navBar.backButtonClick = function () {
            _this.navCtrl.pop({
                animate: false,
                animation: 'ios-transition',
                duration: 500
            });
        };
    };
    HomePage.prototype.showAddressModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__autocomplete_page_autocomplete_page__["a" /* AutocompletePage */]);
        modal.onDidDismiss(function (data) {
            if (data === 'nearby') {
                console.log('nearby mode');
                _this.address = 'Nearby';
            }
            else if (data !== undefined) {
                _this.address = data;
                console.log(data);
            }
            else {
                console.log("nothing happened, hehe");
            }
        });
        modal.present();
    };
    HomePage.prototype.opencal = function () {
        // const options: CalendarModalOptions = {
        //     title: 'BASIC',
        // };
        // let myCalendar =  this.modalCtrl.create(CalendarModal, {
        //     options: options
        // });
        var _this = this;
        var myCalendar;
        this.translate.get('SELECT_DATE').subscribe(function (value) {
            console.log(value);
            myCalendar = _this.modalCtrl.create("CalendarModalPage", {
                date: __WEBPACK_IMPORTED_MODULE_7_moment__(_this.checkInDate).format('YYYY-MM-DD'),
                label: value
            });
            myCalendar.present();
            myCalendar.onDidDismiss(function (date) {
                if (typeof date !== 'undefined') {
                    _this.checkInDate = date.format();
                    _this.labelCheckInDate = date.format('DD/MM/YYYY');
                }
            });
        });
    };
    // openCalMobiScroll() {
    // 	this.rangeDate.instance.show();
    // }
    // setRangeDate(event: any) {
    // 	let timeRange = event.inst.getVal();
    // 	let momCheckIn = moment(timeRange[0]);
    // 	this.checkInDate = momCheckIn.format();
    // 	this.labelCheckInDate = momCheckIn.format('DD/MM/YYYY');
    // }
    HomePage.prototype.searchRooms = function (radius, time, placeID, duration, guest, room) {
        var _this = this;
        var searchLoading;
        var geocoder = new google.maps.Geocoder();
        var location = '';
        var range = radius || 1;
        var self = this;
        var sekarang = new Date().toISOString();
        var rightNow = __WEBPACK_IMPORTED_MODULE_7_moment__().format(sekarang);
        var checkInDate = __WEBPACK_IMPORTED_MODULE_7_moment__().format(this.checkInDate);
        // if(parseInt(this.searchMode) == GlobalConfigurationService.SEARCH_TYPE.SRC_1NIGHT) {
        //     time = moment().utcOffset(time).local().format();
        // }
        console.log(time);
        if (placeID !== undefined) {
            this.translate.get('LOADING').subscribe(function (value) {
                searchLoading = value;
            });
            var loading_1 = this.loadingCtrl.create({
                spinner: 'hide',
                content: searchLoading,
            });
            loading_1.present();
            console.log('masuk1x');
            this.geocodePosition(geocoder, placeID, 'place', function (results) {
                console.log(results);
                loading_1.dismiss();
                self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_results_search_results__["a" /* SearchResultsPage */], {
                    location: results,
                    mode: self.searchMode,
                    radius: range,
                    checkIn: time,
                    duration: duration,
                    guest: guest,
                    room: room,
                });
            });
            console.log('masuk2x');
        }
        else {
            this.translate.get('LOADING_NEARBY_PROPERTIES').subscribe(function (value) {
                searchLoading = value;
            });
            var loading_2 = this.loadingCtrl.create({
                spinner: 'hide',
                content: searchLoading,
            });
            loading_2.present();
            console.log('masuk3x');
            this.myLocation().then(function (result) {
                loading_2.dismiss();
                var latLng = new google.maps.LatLng(result.coords.latitude, result.coords.longitude);
                console.log('masuk4x');
                _this.geocodePosition(geocoder, latLng, 'location', function (results) {
                    self.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_results_search_results__["a" /* SearchResultsPage */], {
                        location: results,
                        mode: self.searchMode,
                        radius: range,
                        nearby: true,
                        checkIn: time,
                        duration: duration,
                        guest: guest,
                        room: room
                    });
                });
                console.log('masuk5x');
            }, function (err) {
                loading_2.dismiss();
                _this.presentToast(err.message);
            });
        }
    };
    HomePage.prototype.geocodePosition = function (geocoder, params, type, callback) {
        var geocoderRequest;
        switch (type) {
            case 'place': {
                geocoderRequest = {
                    'placeId': params
                };
                break;
            }
            case 'location': {
                geocoderRequest = {
                    'location': params
                };
                break;
            }
            default: {
                window.alert('no geocode type found');
                break;
            }
        }
        var location = '';
        geocoder.geocode(geocoderRequest, function (results, status) {
            console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    // let length = results[0].address_components.length
                    // location.lat = results[0].geometry.location.lat();
                    // location.lng = results[0].geometry.location.lng();
                    // if(length > 2){
                    //   location.name = results[0].address_components[length-2].long_name + ', ' + results[0].address_components[length-1].long_name
                    // }
                    // else {
                    //   location.name = results[0].formatted_address
                    // }
                    location = results[0];
                    callback(location);
                }
                else {
                    console.log('no results found');
                    location = results[0];
                    callback(location);
                }
            }
            else {
                // window.alert('Geocoder failed due to: ' + status);
                console.log("Query over limit");
                this.presentToast("Get location failed, please try again");
            }
        });
    };
    HomePage.prototype.showValue = function (price) {
        // This function is called on change by (ionChange) from the range directive
        console.log(price);
    };
    HomePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    HomePage.prototype.mockLoc = function () {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        this.geolocation.getCurrentPosition(options).then(function (resp) {
            console.log(resp);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.sanitizeImage = function (image) {
        // console.log(this.sanitizer.bypassSecurityTrustStyle('url(' + image + ')'))
        return (this.sanitizer.bypassSecurityTrustStyle('url(' + image + ')'));
    };
    HomePage.prototype.renderLogo = function () {
        return this.gLogoImagePath;
    };
    HomePage.prototype.getClassSrcMode = function (domContent) {
        return 'cls-search-mode' + this.searchMode;
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create("PopoverPage", {
            data: [2]
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], HomePage.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], HomePage.prototype, "navBar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar class="custom-nav-bar">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="searchMode == \'0\'">\n        <span>{{"SEARCHING" | translate}}</span>\n    </ion-title>\n    <ion-title *ngIf="searchMode == \'1\'">\n        <span>{{"24-HOURS" | translate}}</span>\n    </ion-title>\n    <ion-title *ngIf="searchMode == \'2\'">\n        <span>{{"SEARCHING" | translate}}</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce [ngClass]="{\'cls-search-mode0\': isSearchModeTransit, \'cls-search-mode1\': isSearchMode24Hours, \'cls-search-mode2\': isSearchModeOneNight}">\n  <ion-grid class="border-grid">\n    <ion-row>\n      <ion-col>\n        <!-- <ion-item>\n            <ion-input (click)="showAddressModal()" [(ngModel)]="address.place" type="text" placeholder="Pick an address"></ion-input>\n          </ion-item> -->\n        <ion-item (click)="showAddressModal()" class="menu-border">\n          <ion-icon name="ios-pin-outline" item-left></ion-icon>\n\n          <span *ngIf="address !== \'Nearby\'">{{address.description || "NEARBY" | translate}}</span>\n          <span *ngIf="address == \'Nearby\'">{{address}}</span>\n        </ion-item>\n\n        <!-- <ion-item>\n            <ion-label text-left>{{priceRange.lower | number:\'1.0-0\'}}</ion-label>\n            <ion-label text-right>{{priceRange.upper | number:\'1.0-0\'}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-range dualKnobs="true" [(ngModel)]="priceRange" min="0" max="10000000" step="50000" (ionChange)="showValue(priceRange)">\n            </ion-range>\n          </ion-item> -->\n\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="searchMode == \'0\'">\n      <ion-col>\n        <ion-item class="menu-border">\n          <ion-label>Check In</ion-label>\n          <ion-icon name="ios-calendar-outline" item-left></ion-icon>\n          <ion-datetime style="padding-left:0px" [min]="minDate" [max]="maxDate" displayFormat="DD MMM, YYYY HH:mm" [(ngModel)]="checkInDate" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="searchMode == \'1\'">\n      <ion-col>\n        <ion-item class="menu-border">\n          <ion-label>Check In</ion-label>\n          <ion-icon name="ios-calendar-outline" item-left></ion-icon>\n          <ion-datetime style="padding-left:0px" [min]="minDate" displayFormat="DD MMM, YYYY HH:mm" [(ngModel)]="checkInDate"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="searchMode == \'2\'">\n      <ion-col>\n        <ion-item class="menu-border">\n          <ion-label>Check In</ion-label>\n          <ion-icon name="ios-calendar-outline" item-left></ion-icon>\n          <!--<mbsc-range #rangeDate="mobiscroll" [options]="checkInOptions" (onSet)="setRangeDate($event)"></mbsc-range>-->\n          <ion-label class="lbl-date" (click)="opencal()">{{labelCheckInDate}}</ion-label>\n          <!--<ion-datetime style="padding-left:0px" [min]="minDate" displayFormat="DD MMM, YYYY" [(ngModel)]="checkInDate"></ion-datetime>-->\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf="searchMode == \'0\'">\n        <ion-item class="menu-border">\n          <ion-label>{{"DURATION" | translate}}</ion-label>\n          <ion-icon name="ios-time-outline" item-left></ion-icon>\n          <ion-select [(ngModel)]="duration">\n            <ion-option *ngFor="let option of [1,2,3,4,5,6,7,8,9,10,11,12]" [value]="option">\n              {{option}} {{"HOURS" | translate}}\n            </ion-option>\n            <!-- <ion-option selected value="1">1 hours</ion-option>\n            <ion-option value="2">2 hours</ion-option>\n            <ion-option value="3">3 hours</ion-option>\n            <ion-option value="4">4 hours</ion-option>\n            <ion-option value="5">5 hours</ion-option>\n            <ion-option value="6">6 hours</ion-option>\n            <ion-option value="7">7 hours</ion-option>\n            <ion-option value="8">8 hours</ion-option>\n            <ion-option value="9">9 hours</ion-option>\n            <ion-option value="10">10 hours</ion-option>\n            <ion-option value="11">11 hours</ion-option>\n            <ion-option value="12">12 hours</ion-option> -->\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col *ngIf="searchMode == \'2\'">\n        <ion-item class="menu-border">\n          <ion-label>{{"NIGHTS" | translate}}</ion-label>\n          <ion-icon name="ios-moon-outline" item-left></ion-icon>\n          <ion-select [(ngModel)]="duration">\n            <ion-option selected value="1">1 {{"NIGHTS" | translate}}</ion-option>\n            <ion-option value="2">2 {{"NIGHTS" | translate}}</ion-option>\n            <ion-option value="3">3 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="4">4 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="5">5 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="6">6 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="7">7 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="8">8 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="9">9 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="10">10 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="11">11 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="12">12 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="13">13 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="14">14 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="15">15 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="16">16 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="17">17 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="18">18 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="19">19 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="20">20 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="21">21 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="22">22 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="23">23 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="24">24 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="25">25 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="26">26 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="27">27 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="28">28 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="29">29 {{"NIGHTS" | translate}}</ion-option>\n              <ion-option value="30">30 {{"NIGHTS" | translate}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-6>\n        <ion-item class="menu-border">\n          <ion-label>{{"GUEST" | translate}}</ion-label>\n          <ion-icon name="ios-people-outline" item-left></ion-icon>\n          <ion-select [(ngModel)]="guestQty">\n            <ion-option *ngFor="let number of options" value="{{number}}">{{number}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 col-lg-6>\n        <ion-item class="menu-border">\n          <ion-label>{{"ROOM" | translate}}</ion-label>\n          <ion-icon name="ios-cube-outline" item-left></ion-icon>\n          <ion-select [(ngModel)]="roomQty">\n            <ion-option *ngFor="let number of options" value="{{number}}">{{number}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="cls-button-search">\n      <ion-col text-center>\n        <button ion-button block style="border-radius:10px" (click)="searchRooms(kilometers, checkInDate, address.place_id, duration, guestQty, roomQty)">{{"SEARCH" | translate}}</button>\n        <!-- <ion-item style="background:transparent">\n          <ion-range min="1" max="100" [(ngModel)]="kilometers" color="primary">\n          </ion-range>\n        </ion-item>\n        <span style="text-shadow: 0 0 0.3em #FFF, 0 0 0.3em #FFF"><b>Search within {{kilometers || 1}} kilometers</b></span> -->\n      </ion-col>\n    </ion-row>\n    <!-- <button ion-button secondary menuToggle>Toggle Menu</button> -->\n  </ion-grid>\n\n  <div padding-top text-center style="padding-top: 80px;">\n    <img height="51" width="140" [src]="renderLogo()" />\n  </div>\n\n</ion-content>\n\n<!-- <ion-slides pager>\n\n  <ion-slide *ngFor="let image of images" [style.background-image]="sanitizeImage(image)" style="background-repeat:no-repeat;background-size:cover">\n  </ion-slide>\n\n</ion-slides> -->\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"],
            __WEBPACK_IMPORTED_MODULE_5__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_10__providers_global_configuration_service__["a" /* GlobalConfigurationService */]])
    ], HomePage);
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_9__components_CommonHandler__["a" /* CommonHandler */]));

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(1106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by wiyantotan on 12/21/17.
 */




// import { MbscModule } from '@mobiscroll/angular';
// import { FormsModule } from '@angular/forms';
var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
                // ,MbscModule
                // ,FormsModule
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ })

});
//# sourceMappingURL=23.js.map