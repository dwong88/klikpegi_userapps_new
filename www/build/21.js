webpackJsonp([21],{

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputBiodataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputBiodataPage = (function () {
    // Initialise module classes
    function InputBiodataPage(navCtrl, http, NP, fb, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.isEdited = false;
        this.hideForm = false;
        //public recordID               : any      = null;
        this.idBiodata = null;
        //private baseURI               : string  = "http://localhost/ionic_php_bio/";
        this.baseURI = "http://localhost/klikmgnew/public_html/index.php?r=mg/tghproperty/";
        // Create form builder validation rules
        this.form = fb.group({
            "namaDepan": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "namaBelakang": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "jenisKelamin": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "alamat": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "noTelp": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    /**
     * Triggered when template view is about to be entered
     * Determine whether we adding or editing a record
     * based on any supplied navigation parameters
     *
     * @public
     * @method ionViewWillEnter
     * @return {None}
     */
    InputBiodataPage.prototype.ionViewWillEnter = function () {
        this.resetFields();
        if (this.NP.get("record")) {
            this.isEdited = true;
            this.selectEntry(this.NP.get("record"));
            this.pageTitle = 'Kembali';
        }
        else {
            this.isEdited = false;
            this.pageTitle = 'Create entry';
        }
    };
    /**
     * Assign the navigation retrieved data to properties
     * used as models on the page's HTML form
     *
     * @public
     * @method selectEntry
     * @param item 		{any} 			Navigation data
     * @return {None}
     */
    InputBiodataPage.prototype.selectEntry = function (item) {
        this.biodataNamaDepan = item.namaDepan;
        this.biodataNamaBelakang = item.namaBelakang;
        this.biodataJenisKelamin = item.jenisKelamin;
        this.biodataAlamat = item.alamat;
        this.biodataEmail = item.email;
        this.biodataNoTelp = item.noTelp;
        this.idBiodata = item.idBiodata;
    };
    /**
     * Save a new record that has been added to the page's HTML form
     * Use angular's http post method to submit the record data
     *
     * @public
     * @method createEntry
     * @param name 			{String} 			Name value from form field
     * @param description 	{String} 			Description value from form field
     * @return {None}
     */
    InputBiodataPage.prototype.createEntry = function (namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email) {
        var _this = this;
        var body = "key=insert&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang + "&jenisKelamin=" + jenisKelamin + "&alamat=" + alamat + "&noTelp=" + noTelp + "&email=" + email, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage-data.php";
        this.http
            .post(url, body, options)
            .subscribe(function (data) {
            // If the request was successful notify the user
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations : " + namaDepan + " was successfully Insert");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        }, function (error) {
            _this.sendNotification('Something went wrong!');
        });
    };
    InputBiodataPage.prototype.InsertData = function (namaDepan, namaBelakang) {
        var _this = this;
        var body = "&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "create";
        this.http
            .post(url, body, options)
            .subscribe(function (data) {
            // If the request was successful notify the user
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations : " + namaDepan + " was successfully Insert");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        }, function (error) {
            _this.sendNotification('Something went wrong!');
        });
    };
    /**
     * Update an existing record that has been edited in the page's HTML form
     * Use angular's http post method to submit the record data
     * to our remote PHP script
     *
     * @public
     * @method updateEntry
     * @param name 			{String} 			Name value from form field
     * @param description 	{String} 			Description value from form field
     * @return {None}
     */
    InputBiodataPage.prototype.updateEntry = function (namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email) {
        var _this = this;
        var body = "key=update&namaDepan=" + namaDepan + "&namaBelakang=" + namaBelakang + "&jenisKelamin=" + jenisKelamin + "&alamat=" + alamat + "&noTelp=" + noTelp + "&email=" + email + "&idBiodata=" + this.idBiodata, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage-data.php";
        this.http
            .post(url, body, options)
            .subscribe(function (data) {
            // If the request was successful notify the user
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations : " + namaDepan + " was successfully updated");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        }, function (error) {
            _this.sendNotification('Something went wrong!');
        });
    };
    /**
     * Remove an existing record that has been selected in the page's HTML form
     * Use angular's http post method to submit the record data
     * to our remote PHP script
     *
     * @public
     * @method deleteEntry
     * @return {None}
     */
    InputBiodataPage.prototype.deleteEntry = function () {
        var _this = this;
        var body = "key=delete&idBiodata=" + this.idBiodata, name = this.form.controls["namaDepan"].value, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage-data.php";
        this.http
            .post(url, body, options)
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations the technology: " + name + " was successfully deleted");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        }, function (error) {
            _this.sendNotification('Something went wrong!');
        });
    };
    InputBiodataPage.prototype.hapusdata = function () {
        var _this = this;
        var body = "key=delete&idBiodata=" + this.idBiodata, name = this.form.controls["namaDepan"].value, type = "application/x-www-form-urlencoded; charset=UTF-8", headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': type }), options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers }), url = this.baseURI + "manage-data.php";
        this.http
            .post(url, body, options)
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.hideForm = true;
                _this.sendNotification("Congratulations the technology: " + name + " was successfully deleted");
            }
            else {
                _this.sendNotification('Something went wrong!');
            }
        }, function (error) {
            _this.sendNotification('Something went wrong!');
        });
    };
    /**
     * Handle data submitted from the page's HTML form
     * Determine whether we are adding a new record or amending an
     * existing record
     *
     * @public
     * @method saveEntry
     * @return {None}
     */
    InputBiodataPage.prototype.saveEntry = function () {
        var namaDepan = this.form.controls["namaDepan"].value, namaBelakang = this.form.controls["namaBelakang"].value, jenisKelamin = this.form.controls["jenisKelamin"].value, alamat = this.form.controls["alamat"].value, noTelp = this.form.controls["noTelp"].value, email = this.form.controls["email"].value;
        if (this.isEdited) {
            this.updateEntry(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
        }
        else {
            //this.createEntry(namaDepan, namaBelakang, jenisKelamin, alamat, noTelp, email);
            this.InsertData(namaDepan, namaBelakang);
        }
    };
    /**
     * Clear values in the page's HTML form fields
     *
     * @public
     * @method resetFields
     * @return {None}
     */
    InputBiodataPage.prototype.resetFields = function () {
        this.biodataNamaDepan = "";
        this.biodataNamaBelakang = "";
    };
    /**
     * Manage notifying the user of the outcome of remote operations
     *
     * @public
     * @method sendNotification
     * @param message 	{String} 			Message to be displayed in the notification
     * @return {None}
     */
    InputBiodataPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    InputBiodataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-input-biodata',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/input-biodata/input-biodata.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ pageTitle }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div>\n    <ion-item *ngIf="isEdited && !hideForm">\n      <button\n              ion-button\n              item-right\n              color="danger"\n              text-center\n              block\n              (click)="hapusdata()">Remove this Entry?</button>\n    </ion-item>\n\n\n    <div *ngIf="hideForm">\n      <ion-item class="post-entry-message" text-wrap>\n        <h2>Success!</h2>\n        <p>Maybe you\'d like to edit an existing entry or add a new record?</p>\n        <p>Simply go back to the home page and select the option you want to pursue.</p>\n      </ion-item>\n    </div>\n\n\n    <div *ngIf="!hideForm">\n      <form [formGroup]="form" (ngSubmit)="saveEntry()">\n\n        <ion-list>\n          <ion-item-group>\n            <ion-item-divider color="light">Nama Depan *</ion-item-divider>\n            <ion-item>\n              <ion-input\n                      type="text"\n                      placeholder="Enter a name..."\n                      formControlName="namaDepan"\n                      [(ngModel)]="biodataNamaDepan"></ion-input>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider color="light">Nama Belakang *</ion-item-divider>\n            <ion-item>\n              <ion-input\n                      type="text"\n                      placeholder="Enter a name..."\n                      formControlName="namaBelakang"\n                      [(ngModel)]="biodataNamaBelakang"></ion-input>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group radio-group formControlName="jenisKelamin" [(ngModel)]="biodataJenisKelamin">\n            <ion-item-divider color="light">Jenis Kelamin *</ion-item-divider>\n            <ion-item>\n              <ion-label>Laki-laki</ion-label>\n              <ion-radio value="laki-laki"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Perempuan</ion-label>\n              <ion-radio value="perempuan"></ion-radio>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider color="light">Alamat </ion-item-divider>\n            <ion-item>\n              <ion-textarea\n                      placeholder="Alamat..."\n                      formControlName="alamat"\n                      rows="6"\n                      [(ngModel)]="biodataAlamat"></ion-textarea>\n            </ion-item>\n          </ion-item-group>\n\n\n          <ion-item-group>\n            <ion-item-divider color="light">No Telepon *</ion-item-divider>\n            <ion-item>\n              <ion-input\n                      type="text"\n                      placeholder="No Telepon ..."\n                      formControlName="noTelp"\n                      [(ngModel)]="biodataNoTelp"></ion-input>\n            </ion-item>\n          </ion-item-group>\n\n          <ion-item-group>\n            <ion-item-divider color="light">Email</ion-item-divider>\n            <ion-item>\n              <ion-input\n                      type="email"\n                      placeholder="Email..."\n                      formControlName="email"\n                      [(ngModel)]="biodataEmail"></ion-input>\n            </ion-item>\n          </ion-item-group>\n\n\n          <ion-item>\n            <button\n                    ion-button\n                    color="primary"\n                    text-center\n                    block\n                    [disabled]="!form.valid">Save Entry</button>\n          </ion-item>\n\n        </ion-list>\n\n      </form>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/input-biodata/input-biodata.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], InputBiodataPage);
    return InputBiodataPage;
}());

//# sourceMappingURL=input-biodata.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBiodataPageModule", function() { return InputBiodataPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input_biodata__ = __webpack_require__(1107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InputBiodataPageModule = (function () {
    function InputBiodataPageModule() {
    }
    InputBiodataPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__input_biodata__["a" /* InputBiodataPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__input_biodata__["a" /* InputBiodataPage */]),
            ],
        })
    ], InputBiodataPageModule);
    return InputBiodataPageModule;
}());

//# sourceMappingURL=input-biodata.module.js.map

/***/ })

});
//# sourceMappingURL=21.js.map