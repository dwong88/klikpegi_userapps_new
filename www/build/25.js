webpackJsonp([25],{

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_local_database_service_local_database_service__ = __webpack_require__(535);
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
 * Generated class for the FilterModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var FilterModalPage = (function () {
    function FilterModalPage(navCtrl, navParams, viewCtrl, zone, localDatabaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.localDatabaseProvider = localDatabaseProvider;
        this.searchType = [];
        this.priceMin = 0;
        this.priceMax = 2000000;
        this.sortType = [
            {
                title: "NEAREST_RANGE",
                value: 'range',
                checked: false
            },
            {
                title: "LOW_HIGH_PRICE",
                value: 'lohai',
                checked: false
            },
            {
                title: "HIGH_LOW_PRICE",
                value: 'hailo',
                checked: false
            }
        ];
        this.categories = [
            {
                id: 0,
                name: "B&B",
                checked: 0
            },
            {
                id: 1,
                name: "HOSTEL",
                checked: 0
            },
            {
                id: 2,
                name: "APARTMENT",
                checked: 0
            },
            {
                id: 3,
                name: "RESORT",
                checked: 0
            },
            {
                id: 4,
                name: "HOMESTAY",
                checked: 0
            },
            {
                id: 5,
                name: "HOTEL",
                checked: 0
            },
            {
                id: 6,
                name: "VILLA",
                checked: 0
            }
        ];
        this.config = [];
        this.localDatabaseProvider.getDatabaseState().subscribe(function (ready) {
            if (ready) {
                _this.loadSortFilterConfig();
            }
        });
    }
    FilterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterModalPage');
    };
    FilterModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    FilterModalPage.prototype.loadSortFilterConfig = function () {
        var _this = this;
        this.localDatabaseProvider.getSortFilterConfig().then(function (data) {
            _this.sortTypeValue = data[0]['sort_type'];
            _this.sortOpt = _this.sortTypeValue;
            _this.priceMin = data[0]['sort_price_value_low'];
            _this.priceMax = data[0]['sort_price_value_high'];
            _this.filterValue = data[0]['filter_value'];
            console.log(data);
            for (var _i = 0, _a = _this.sortType; _i < _a.length; _i++) {
                var item = _a[_i];
                if (_this.sortTypeValue == item.value) {
                    item.checked = true;
                    console.log(item.checked);
                }
            }
            if (_this.priceMax == 99999999)
                _this.priceMax = 2000000;
            _this.priceRange = {
                lower: _this.priceMin,
                upper: _this.priceMax
            };
            console.log(_this.filterValue);
            if (_this.filterValue != '' && _this.filterValue != undefined) {
                var filter = _this.filterValue.split(',');
                console.log('split filter');
                console.log(filter);
                for (var _b = 0, filter_1 = filter; _b < filter_1.length; _b++) {
                    var item = filter_1[_b];
                    _this.searchType.push(parseInt(item));
                    _this.categories[item].checked = 1;
                }
            }
        });
    };
    FilterModalPage.prototype.applyFilter = function () {
        var params = {
            sortOpt: this.sortOpt,
            filterOpt: this.searchType,
            priceRange: this.priceRange
        };
        this.localDatabaseProvider.updateSortFilterConfig(this.sortOpt, this.priceRange.lower, this.priceRange.upper, this.searchType.toString()).then(function (res) {
            console.log(res);
        });
        this.viewCtrl.dismiss(params);
    };
    FilterModalPage.prototype.setSortType = function (data) {
        this.sortOpt = data;
    };
    FilterModalPage.prototype.onChangeCategories = function (array, isChecked) {
        var _this = this;
        this.zone.run(function () {
            _this.categories[array].checked = +isChecked;
            console.log("clicked index", array);
            if (isChecked) {
                _this.searchType.push(array);
                console.log(_this.searchType);
            }
            else {
                var index = _this.searchType.indexOf(array);
                console.log(array);
                _this.searchType.splice(index, 1);
                console.log(_this.searchType);
            }
        });
    };
    FilterModalPage.prototype.onPriceChange = function (data) {
        var _this = this;
        this.zone.run(function () {
            console.log(data);
            _this.priceMin = data.lower;
            _this.priceMax = data.upper;
        });
    };
    FilterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-filter-modal',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/filter-modal/filter-modal.html"*/'<!--\n  Generated template for the FilterModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>{{ "FILTER_SORT" | translate }}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="dismissModal()" color="dark">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group>\n\n    <ion-list-header>\n      <span class="text-header">{{ "SORT_BY" | translate }}</span>\n    </ion-list-header>\n\n    <ion-item no-lines *ngFor="let item of sortType">\n      <ion-label>\n        <span class="text-subcontent">\n          {{ item.title | translate }}\n        </span>\n      </ion-label>\n      <ion-radio [value]="item.value" [checked]="item.checked" (ionSelect)="setSortType(item.value)"></ion-radio>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <ion-row no-padding>\n        <ion-col text-left no-padding>\n          <span class="text-header">{{ "PRICE_RANGE" | translate }}</span>            \n        </ion-col>\n        <ion-col text-right no-padding>\n          {{currencySymbol}} {{priceMin | number:\'1.0-0\'}} - {{currencySymbol}} {{priceMax | number:\'1.0-0\'}}\n        </ion-col>\n      </ion-row>\n    </ion-list-header>\n    <ion-item no-lines>\n      <ion-range dualKnobs="true" [(ngModel)]="priceRange" (ionChange)="onPriceChange(priceRange)" min="0" max="2000000" step="1000">\n      </ion-range>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      <span class="text-header">{{ "PROPERTY_CATEGORY" | translate }}</span>\n    </ion-list-header>\n    <ion-item no-lines *ngFor="let category of categories">\n      <ion-label>\n        <span class="text-subcontent">\n          {{ category.name | translate }}\n        </span>\n      </ion-label>\n      <ion-checkbox [(ngModel)]="category.checked" (ionChange)="onChangeCategories(category.id, category.checked)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block clear (click)="applyFilter()">\n    {{ "REFINE_SEARCH" | translate }}\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/filter-modal/filter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_2__providers_local_database_service_local_database_service__["a" /* LocalDatabaseServiceProvider */]])
    ], FilterModalPage);
    return FilterModalPage;
}());

//# sourceMappingURL=filter-modal.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModalPageModule", function() { return FilterModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_modal__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FilterModalPageModule = (function () {
    function FilterModalPageModule() {
    }
    FilterModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filter_modal__["a" /* FilterModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__filter_modal__["a" /* FilterModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__filter_modal__["a" /* FilterModalPage */]
            ]
        })
    ], FilterModalPageModule);
    return FilterModalPageModule;
}());

//# sourceMappingURL=filter-modal.module.js.map

/***/ })

});
//# sourceMappingURL=25.js.map