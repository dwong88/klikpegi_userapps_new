webpackJsonp([16],{

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentConfirmationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_parse_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(30);
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
 * Generated class for the PaymentConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PaymentConfirmationPage = (function () {
    function PaymentConfirmationPage(navCtrl, navParams, viewCtrl, parseService, actionSheetCtrl, platform, toastCtrl, loadingCtrl, transfer, file, filePath, camera, base64, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.parseService = parseService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.camera = camera;
        this.base64 = base64;
        this.translate = translate;
        this.bookingDetails = '';
        this.lastImage = null;
        this.lastImagePath = null;
        this.correctImage = '';
        this.image64 = '';
        this.bookingDetails = navParams.get("bookingData");
    }
    PaymentConfirmationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentConfirmationPage');
    };
    PaymentConfirmationPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    PaymentConfirmationPage.prototype.presentActionSheet = function () {
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
            buttons: [
                {
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
    PaymentConfirmationPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var errorSelect;
        this.translate.get('ERROR_SELECT_IMAGE').subscribe(function (value) { errorSelect = value; });
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
            _this.presentToast(errorSelect);
        });
    };
    // getPicture() {
    //   const options: CameraOptions = {
    //     quality: 100,
    //     destinationType: this.camera.DestinationType.DATA_URL,
    //     encodingType: this.camera.EncodingType.JPEG,
    //     mediaType: this.camera.MediaType.PICTURE
    //   }
    //
    //   this.camera.getPicture(options).then((imageData) => {
    //     // imageData is either a base64 encoded string or a file URI
    //     // If it's base64:
    //     let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     this.parseService.uploadImage(this.bookingDetails.id, imageData)
    //   }, (err) => {
    //     // Handle error
    //     console.log(err)
    //   });
    // }
    PaymentConfirmationPage.prototype.uploadImage = function () {
        var _this = this;
        var uploadReceipt;
        var receiptSent;
        var tryAgain;
        this.translate.get('LOADING_RECEIPT').subscribe(function (value) { uploadReceipt = value; });
        this.translate.get('RECEIPT_SENT').subscribe(function (value) { receiptSent = value; });
        this.translate.get('FAILED_TRY_AGAIN').subscribe(function (value) { tryAgain = value; });
        //let targetPath = this.pathForImage(this.lastImage)
        var filename = this.lastImage;
        var loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: uploadReceipt,
        });
        if (this.platform.is('ios'))
            this.lastImagePath = this.lastImagePath.replace(/^file:\/\//, '');
        this.base64.encodeFile(this.lastImagePath).then(function (base64File) {
            var base64 = base64File.substr(base64File.indexOf(',') + 1);
            loading.present();
            _this.parseService.uploadImage(_this.bookingDetails.id, base64, filename).then(function (success) {
                _this.presentToast(receiptSent);
                loading.dismiss();
                _this.navCtrl.popToRoot();
            });
        }, function (err) {
            loading.dismiss();
            _this.presentToast(tryAgain);
            console.log(err);
        });
    };
    // Create a new name for the image
    PaymentConfirmationPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    PaymentConfirmationPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, imagePath) {
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
    PaymentConfirmationPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    PaymentConfirmationPage.prototype.pathForImage = function (img) {
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
    PaymentConfirmationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-payment-confirmation',template:/*ion-inline-start:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/payment-confirmation/payment-confirmation.html"*/'<!--\n  Generated template for the PaymentConfirmationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ "PAYMENT_CONFIRMATION" | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-left>\n        <img src="{{bookingDetails.thumbnail}}">\n      </ion-thumbnail>\n      <h2>{{bookingDetails.propertyName}}</h2>\n      <p>{{bookingDetails.propertyType}}</p>\n      <p>{{bookingDetails.className}} • {{bookingDetails.unitQty}} units</p>\n      <p>{{bookingDetails.interval}} hours</p>\n    </ion-item>\n    <ion-item>\n      <ion-row no-padding>\n        <ion-col col-2>\n          <p>Check-in</p>\n          <p>Check-out</p>\n        </ion-col>\n        <ion-col col-1>\n        </ion-col>\n        <ion-col>\n          <p>{{bookingDetails.checkIn| date:\'d MMMM y • H:mm\'}}</p>\n          <p>{{bookingDetails.checkOut| date: \'d MMMM y • H:mm\'}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item>\n      <ion-row>\n        <ion-col text-center>\n          {{ "PAYMENT_INFO" | translate }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n          <img src="{{pathForImage(lastImage)}}" [hidden]="lastImage === null">\n          <h3 [hidden]="lastImage !== null">{{ "PLEASE_SELECT_IMAGE" | translate }}</h3>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button block clear (click)="presentActionSheet()">{{ "SELECT_IMAGE" | translate }}</button>\n        </ion-col>\n        <ion-col>\n          <button ion-button block clear (click)="uploadImage()" [disabled]="lastImage === null">{{ "UPLOAD_IMAGE" | translate }}</button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/davidwong/Development/htdocs/klikpegi_userapp/src/pages/payment-confirmation/payment-confirmation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_6__providers_parse_service__["a" /* ParseService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], PaymentConfirmationPage);
    return PaymentConfirmationPage;
}());

//# sourceMappingURL=payment-confirmation.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentConfirmationPageModule", function() { return PaymentConfirmationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_confirmation__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentConfirmationPageModule = (function () {
    function PaymentConfirmationPageModule() {
    }
    PaymentConfirmationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment_confirmation__["a" /* PaymentConfirmationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_confirmation__["a" /* PaymentConfirmationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__payment_confirmation__["a" /* PaymentConfirmationPage */]
            ]
        })
    ], PaymentConfirmationPageModule);
    return PaymentConfirmationPageModule;
}());

//# sourceMappingURL=payment-confirmation.module.js.map

/***/ })

});
//# sourceMappingURL=16.js.map