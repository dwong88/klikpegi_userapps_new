import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, Platform, ToastController, LoadingController } from 'ionic-angular';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path'
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ParseService } from '../../providers/parse-service'
import { Base64 } from '@ionic-native/base64';
import { TranslateService } from '@ngx-translate/core';

declare var cordova: any;

/**
 * Generated class for the PaymentConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-payment-confirmation',
  templateUrl: 'payment-confirmation.html',
})

export class PaymentConfirmationPage {
  bookingDetails: any = ''
  lastImage: string = null;
  lastImagePath: any = null;

  correctImage: any = ''
  image64: any = ''

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public parseService: ParseService,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private transfer: Transfer,
    private file: File,
    private filePath: FilePath,
    private camera: Camera,
    private base64: Base64,
    private translate: TranslateService
  ) {
    this.bookingDetails = navParams.get("bookingData")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentConfirmationPage');
  }

  dismissModal() {
    this.viewCtrl.dismiss()
  }

  presentActionSheet() {
    var selectImage; var loadLibrary; var useCamera; var cancel;
    this.translate.get('SELECT_IMAGE_SOURCE').subscribe(value => { selectImage = value; });
    this.translate.get('LOAD_FROM_LIBRARY').subscribe(value => { loadLibrary = value; });
    this.translate.get('USE_CAMERA').subscribe(value => { useCamera = value; });
    this.translate.get('CANCEL').subscribe(value => { cancel = value; });

    let actionSheet = this.actionSheetCtrl.create({
      title: selectImage,
      buttons: [
        {
          text: loadLibrary,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: useCamera,
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: cancel,
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType) {
    var errorSelect;
    this.translate.get('ERROR_SELECT_IMAGE').subscribe(value => { errorSelect = value; });

    // Create options for the Camera Dialog
    var options = {
      quality: 50,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      console.log(imagePath)
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), imagePath);
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), imagePath);
      }
    }, (err) => {
      this.presentToast(errorSelect);
    });
  }

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

  uploadImage() {
    var uploadReceipt; var receiptSent; var tryAgain;
    this.translate.get('LOADING_RECEIPT').subscribe(value => { uploadReceipt = value; });
    this.translate.get('RECEIPT_SENT').subscribe(value => { receiptSent = value; });
    this.translate.get('FAILED_TRY_AGAIN').subscribe(value => { tryAgain = value; });

    //let targetPath = this.pathForImage(this.lastImage)
    var filename = this.lastImage
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: uploadReceipt,
    });

    if (this.platform.is('ios'))
      this.lastImagePath = this.lastImagePath.replace(/^file:\/\//, '');

    this.base64.encodeFile(this.lastImagePath).then((base64File: string) => {
      let base64 = base64File.substr(base64File.indexOf(',') + 1);

      loading.present()
      this.parseService.uploadImage(this.bookingDetails.id, base64, filename).then(success => {
        this.presentToast(receiptSent);
        loading.dismiss();
        this.navCtrl.popToRoot();
      })
    }, (err) => {
      loading.dismiss();
      this.presentToast(tryAgain);
      console.log(err);
    })
  }

  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName, imagePath) {
    var errorStore;
    this.translate.get('ERROR_STORE_FILE').subscribe(value => { errorStore = value; });

    console.log("masuk copy file", imagePath)
    let directory = cordova.file.dataDirectory
    console.log('masuk copy file 2', imagePath)

    this.file.copyFile(namePath, currentName, directory, newFileName).then(success => {
      this.lastImage = newFileName;
      this.lastImagePath = imagePath;
      console.log('setelah copy file 3', this.lastImagePath)
    }, error => {
      this.presentToast(errorStore);
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    // this.presentToast('image ada')
    if (img === null) {
      return '';
    } else {
      console.log('file path', cordova.file.dataDirectory + img)
      if (this.platform.is('ios')) {
        let itemSrc = cordova.file.dataDirectory + img
        itemSrc = itemSrc.replace(/^file:\/\//, '');
        return itemSrc
      } else
        return cordova.file.dataDirectory + img;
    }
  }

}
