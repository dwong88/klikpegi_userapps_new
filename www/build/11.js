webpackJsonp([11],{

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(93);
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
/**
 * Created by wiyantotan on 12/21/17.
 */




var PromoPage = (function () {
    function PromoPage(navCtrl, popoverCtrl, http) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.items = [];
    }
    PromoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromoPage');
        this.load();
    };
    PromoPage.prototype.load = function () {
        var _this = this;
        this.http
            .get('http://localhost/klikmgnew/public_html/index.php?r=mg/tghproperty')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.items = data;
        });
    };
    PromoPage.prototype.presentPopover = function (myEvent) {
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
    /**
     * Allow navigation to the AddTechnologyPage for creating a new entry
     *
     * @public
     * @method addEntry
     * @return {None}
     */
    PromoPage.prototype.addEntry = function () {
        this.navCtrl.push('InputBiodataPage');
    };
    /**
     * Allow navigation to the AddTechnologyPage for amending an existing entry
     * (We supply the actual record to be amended, as this method's parameter,
     * to the AddTechnologyPage
     *
     * @public
     * @method viewEntry
     * @param param 		{any} 			Navigation data to send to the next page
     * @return {None}
     */
    PromoPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('InputBiodataPage', param);
    };
    PromoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-promo',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/promo/promo.html"*/'<!--<ion-header class="klikpegihead">\n\n    <ion-navbar>\n        <ion-title>{{"PROMO" | translate }}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n-->\n\n<ion-header class="klikpegihead">\n    <ion-navbar>\n        <ion-title>\n            <ion-title>{{"PROMO" | translate }}</ion-title>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <button class="add" ion-button item-right margin-bottom color="primary" outline (click)="addEntry()">\n            Tambah Data<ion-icon name="add"></ion-icon>\n        </button>\n    </ion-item>\n    <ion-item *ngFor="let item of items">\n        <h2>{{item.property_cd}} {{item.property_name}}</h2>\n        <button ion-button color="primary" item-right outline (click)="viewEntry({record: item})">Lihat</button>\n    </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/promo/promo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], PromoPage);
    return PromoPage;
}());

//# sourceMappingURL=promo.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoPageModule", function() { return PromoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promo__ = __webpack_require__(1120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by wiyantotan on 12/21/17.
 */




var PromoPageModule = (function () {
    function PromoPageModule() {
    }
    PromoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__promo__["a" /* PromoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__promo__["a" /* PromoPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__promo__["a" /* PromoPage */]
            ]
        })
    ], PromoPageModule);
    return PromoPageModule;
}());

//# sourceMappingURL=promo.module.js.map

/***/ })

});
//# sourceMappingURL=11.js.map