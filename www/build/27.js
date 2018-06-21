webpackJsonp([27],{

/***/ 1101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPasswordModalPage; });
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
 * Generated class for the EditPasswordModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EditPasswordModalPage = (function () {
    function EditPasswordModalPage(navCtrl, navParams, viewCtrl, parseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.parseService = parseService;
        this.newPassword = '';
    }
    EditPasswordModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPasswordModalPage');
    };
    EditPasswordModalPage.prototype.savePassword = function (password) {
        var _this = this;
        console.log("save password test");
        this.parseService.editPassword(password).then(function (success) {
            console.log(success);
            _this.viewCtrl.dismiss();
        }, function (err) {
            console.log(err);
        });
    };
    EditPasswordModalPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    EditPasswordModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-password-modal',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/edit-password-modal/edit-password-modal.html"*/'<!--\n  Generated template for the EditPasswordModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ "EDIT_PASSWORD" | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismissModal()">\n        <ion-icon name="close">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-item no-padding>\n          <ion-label floating>{{ "NEW_PASSWORD" | translate }}</ion-label>\n          <ion-input type="password" [(ngModel)]="newPassword" name="password"></ion-input>\n        </ion-item>\n      </ion-col>\n      <button ion-button round block (click)="savePassword(newPassword)">{{ "CHANGE_PASSWORD" | translate }}</button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/edit-password-modal/edit-password-modal.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_parse_service__["a" /* ParseService */]])
    ], EditPasswordModalPage);
    return EditPasswordModalPage;
}());

//# sourceMappingURL=edit-password-modal.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordModalPageModule", function() { return EditPasswordModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_password_modal__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditPasswordModalPageModule = (function () {
    function EditPasswordModalPageModule() {
    }
    EditPasswordModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_password_modal__["a" /* EditPasswordModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_password_modal__["a" /* EditPasswordModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_password_modal__["a" /* EditPasswordModalPage */]
            ]
        })
    ], EditPasswordModalPageModule);
    return EditPasswordModalPageModule;
}());

//# sourceMappingURL=edit-password-modal.module.js.map

/***/ })

});
//# sourceMappingURL=27.js.map