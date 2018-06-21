webpackJsonp([17],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherAmenitiesModalPage; });
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


/**
 * Generated class for the OtherAmenitiesModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var OtherAmenitiesModalPage = (function () {
    function OtherAmenitiesModalPage(navCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.otherAmenities = [
            {
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
                title: 'DAILY_NEWSPAPERS'
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
                title: 'INTERCONNECTING_ROOMS'
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
        var amenities = this.navParams.get('data');
        console.log(amenities);
        for (var _i = 0, amenities_1 = amenities; _i < amenities_1.length; _i++) {
            var amenity = amenities_1[_i];
            this.otherAmenities[amenity].value = 1;
        }
    }
    OtherAmenitiesModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherAmenitiesModalPage');
    };
    OtherAmenitiesModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    OtherAmenitiesModalPage.prototype.filterArray = function (array, type) {
        return array.filter(function (x) { return x.value == type; });
    };
    OtherAmenitiesModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-other-amenities-modal',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/other-amenities-modal/other-amenities-modal.html"*/'<!--\n  Generated template for the OtherAmenitiesModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ "OTHER_AMENITIES" | translate }}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal()" color="dark">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item no-lines *ngFor="let amenity of filterArray(otherAmenities,1)">\n      • {{amenity.title | translate}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/other-amenities-modal/other-amenities-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], OtherAmenitiesModalPage);
    return OtherAmenitiesModalPage;
}());

//# sourceMappingURL=other-amenities-modal.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherAmenitiesModalPageModule", function() { return OtherAmenitiesModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__other_amenities_modal__ = __webpack_require__(1114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OtherAmenitiesModalPageModule = (function () {
    function OtherAmenitiesModalPageModule() {
    }
    OtherAmenitiesModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__other_amenities_modal__["a" /* OtherAmenitiesModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__other_amenities_modal__["a" /* OtherAmenitiesModalPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], OtherAmenitiesModalPageModule);
    return OtherAmenitiesModalPageModule;
}());

//# sourceMappingURL=other-amenities-modal.module.js.map

/***/ })

});
//# sourceMappingURL=17.js.map