webpackJsonp([9],{

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__ = __webpack_require__(38);
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
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, parseService, alertCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.parseService = parseService;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.showSearchPage = function (searchMode) {
        console.log(searchMode);
        this.navCtrl.push("HomePage", {
            mode: searchMode
        }, {
            animate: false,
            animation: 'ios-transition',
            duration: 500
        });
    };
    SearchPage.prototype.presentPopover = function (myEvent) {
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
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>klikpegi.com</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list ion-fixed no-lines style="width:100%;height:102%">\n    <!--<button ion-item text-center style="height:33%;background: url(\'/../../assets/images/gbi-logo.png\');background-size: cover">-->\n    <button text-left ion-item style="height:33%;background-image:url(\'assets/images/background-image/type1.jpg\');background-size:cover;background-repeat:no-repeat"\n      (click)="showSearchPage(0)">\n      <div text-right>\n      <span ion-text class="text text-title">{{"TRANSIT" | translate}}</span>\n      </div>\n\n      <div class="isnarrow">\n        <span ion-text class="text text-description" [innerHTML]="\'SEARCHPAGE.TRANSIT_SUBTITLE\' | translate"></span>\n      </div>\n    </button>\n    <button text-left ion-item style="height:33%;background-image:url(\'assets/images/background-image/type2.jpg\');background-size:cover;background-repeat:no-repeat"\n      (click)="showSearchPage(2)">\n      <div text-right>\n      <span ion-text class="text text-title">{{"1-NIGHT" | translate}}</span>\n      </div>\n\n      <div class="isnarrow">\n        <div style="width: 92%;">\n          <div style="width: 70%;" ion-text class="text text-description" [innerHTML]="\'SEARCHPAGE.1_NIGHT_SUBTITLE_1\' | translate">\n          </div>\n          <div style="width: 30%;" ion-text class="text text-description" [innerHTML]="\'SEARCHPAGE.1_NIGHT_SUBTITLE_2\' | translate">\n          </div>\n          <div style="width: 70%;" ion-text class="text text-description" [innerHTML]="\'SEARCHPAGE.1_NIGHT_SUBTITLE_3\' | translate">\n          </div>\n          <div style="width: 30%;" ion-text class="text text-description" [innerHTML]="\'SEARCHPAGE.1_NIGHT_SUBTITLE_4\' | translate">\n          </div>\n        </div>\n      </div>\n    </button>\n    <button text-left ion-item style="height:33%;background-image:url(\'assets/images/background-image/type3.jpg\');background-size:cover;background-repeat:no-repeat"\n      (click)="showSearchPage(1)">\n      <div text-right>\n      <span ion-text class="text text-title">{{"24-HOURS" | translate}}</span>\n      </div>\n\n      <div class="isnarrow">\n      <span ion-text class="text text-description" [innerHTML]="\'SEARCHPAGE.24-HOURS_SUBTITLE_1\' | translate"></span>\n        <br />\n        <span ion-text class="text text-description" style="font-size: 1.8rem;" [innerHTML]="\'SEARCHPAGE.24-HOURS_SUBTITLE_2\' | translate"></span>\n      </div>\n    </button>\n  </ion-list>\n  <!--<ion-grid no-padding>-->\n\n  <!--<ion-row style="background-color: #e74c3c;">-->\n  <!--<ion-col>Transit</ion-col>-->\n  <!--</ion-row>-->\n\n  <!--<ion-row style="background-color: #f1c40f;">-->\n  <!--<ion-col>24 Hours</ion-col>-->\n  <!--</ion-row>-->\n\n  <!--<ion-row style="background-color: #9b59b6;">-->\n  <!--<ion-col>1 Night</ion-col>-->\n  <!--</ion-row>-->\n\n  <!--</ion-grid>-->\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(1122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map