import {
    Component, ViewChild
} from '@angular/core'
import {
    LoadingController,
    NavController,
    NavParams,
    AlertController,
    ToastController,
    ActionSheetController,
    PopoverController,
    Platform, ViewController
} from 'ionic-angular'
import {
  ParseService
} from '../../providers/parse-service'
import {
  Camera,
  CameraOptions
} from '@ionic-native/camera'
import {
  FilePath
} from '@ionic-native/file-path'
import {
  File
} from '@ionic-native/file'
import {
  Base64
} from '@ionic-native/base64';
import { TranslateService } from '@ngx-translate/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import {Geolocation} from "@ionic-native/geolocation";
import {CommonHandler} from "../../components/CommonHandler";
import {GlobalConfigurationService} from "../../providers/global-configuration-service";
import { CountdownComponent } from 'ngx-countdown';
import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var cordova: any;

@Component({
  selector: 'page-my-bookings-detail',
  templateUrl: 'my-bookings-detail.html',
})
export class MyBookingsDetailPage extends CommonHandler {
    @ViewChild(CountdownComponent) timer: CountdownComponent;
  bookingDetails: any = '';
  priceString: {
    string1: string,
    string2: string
  } = {
    string1: '',
    string2: ''
  }
  transitPrice: any = 0;
  lastImage: string = null;
  lastImagePath: any = null;

  public bank;
    public refWindow: any;
    public intervalWindow: any;

  correctImage: any = '';
  image64: any = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public parseService: ParseService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    private file: File,
    private filePath: FilePath,
    private camera: Camera,
    private base64: Base64,
    private platform: Platform,
    private popoverCtrl: PopoverController,
    protected translate: TranslateService,
    protected geolocation: Geolocation,
    private launchNavigator: LaunchNavigator,
    public viewCtrl: ViewController,
    protected globalConfig: GlobalConfigurationService,
    public inAppbrowser: InAppBrowser
  ) {
      super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);
      this.parseService.getGlobalSettings().then(data => {
          this.bank = data.bank[0];
          return this.bank;
      })
console.log("masuk mybookingdetail");
    this.bookingDetails = navParams.get("bookingData");
    this.bookingDetails.stayType = this.getStayingType(this.bookingDetails.type);

      console.log(this.bookingDetails);
    let string: string = this.bookingDetails.totalPrice.toString();
    if (string.length > 3) {
      this.priceString.string1 = string.substring(0, string.length - 3);
      this.priceString.string2 = string.substring(string.length - 3, string.length);
    } else {
      this.priceString.string1 = '0';
      this.priceString.string2 = '0';
    }
    console.log(this.priceString)
    this.transitPrice = this.bookingDetails.transitPrice[+this.bookingDetails.interval - 1].price;
    console.log("transit price", this.transitPrice);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBookingsDetailPage');
  }

  showPaymentConfirmation() {
    this.navCtrl.push("PaymentConfirmationPage", {
      bookingData: this.bookingDetails
    });
  }

  getStayingType(code) {
      var transit;
      var hours;
      var night;
      var other;
      this.translate.get('TRANSIT').subscribe(value => {
          transit = value;
      });
      this.translate.get('HOURS').subscribe(value => {
          hours = value;
      });
      this.translate.get('NIGHT').subscribe(value => {
          night = value;
      });
      this.translate.get('OTHER').subscribe(value => {
          other = value;
      });

      switch (code.toString()) {
          case '0':
              return transit
          case '1':
              return '24 ' + hours
          case '2':
              return '1 ' + night
          default:
              return other
      }
  }

  onFinished(booking) {
      setTimeout(() =>
          booking.expired = true, 0);
  }

  cancelConfirm(id) {
    console.log(this.bookingDetails);
    var cancelTitle; var cancelMsg; var denyBtn; var applyBtn; var cancelSuccess; var cancelFailed;
    this.translate.get('CANCEL_BOOKING_ALERT_TITLE').subscribe(value => { cancelTitle = value; });
    this.translate.get('CANCEL_BOOKING_ALERT_MESSAGE').subscribe(value => { cancelMsg = value; });
    this.translate.get('CANCEL_BOOKING_ALERT_DENY').subscribe(value => { denyBtn = value; });
    this.translate.get('CANCEL_BOOKING_ALERT_APPLY').subscribe(value => { applyBtn = value; });
    this.translate.get('CANCEL_BOOKING_ALERT_SUCCESS').subscribe(value => { cancelSuccess = value; });
    this.translate.get('CANCEL_BOOKING_ALERT_FAILED').subscribe(value => { cancelFailed = value; })

    let confirm = this.alertCtrl.create({
      title: cancelTitle,
      message: cancelMsg,
      buttons: [{
          text: denyBtn,
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: applyBtn,
          handler: () => {
            this.parseService.sendEmail(this.bookingDetails, "bookingCancel").then(success => {
              this.parseService.cancelBooking(id).then(success => {
                this.navCtrl.popToRoot();
                this.presentToast(cancelSuccess);
              })
            }, err => {
              this.navCtrl.popToRoot();
              this.presentToast(cancelFailed);
            })
          }
        }
      ]
    });
    confirm.present();
  }

  presentActionSheet() {
    var selectImage; var loadLibrary; var useCamera; var cancel;
    this.translate.get('SELECT_IMAGE_SOURCE').subscribe(value => { selectImage = value; });
    this.translate.get('LOAD_FROM_LIBRARY').subscribe(value => { loadLibrary = value; });
    this.translate.get('USE_CAMERA').subscribe(value => { useCamera = value; });
    this.translate.get('CANCEL').subscribe(value => { cancel = value; });

    let actionSheet = this.actionSheetCtrl.create({
      title: selectImage,
      buttons: [{
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
    var error;
    this.translate.get('ERROR_SELECT_IMAGE').subscribe(value => { error = value; });

    // Create options for the Camera Dialog
    var options = {
      quality: 50,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      console.log(imagePath);
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
      this.presentToast(error);
    });
  }

  continuePayment() {
      if (this.parseService.getCurrentUser() != null) {
          if(GlobalConfigurationService.DEVELOPMENT_MODE) {
              this.refWindow = window.open(GlobalConfigurationService.GHOURS_PAYMENT_URL+"/"+this.bookingDetails.id, '_blank', GlobalConfigurationService.IN_APP_BROWSER_OPTIONS);
          } else {
              this.refWindow = this.inAppbrowser.create(GlobalConfigurationService.GHOURS_PAYMENT_URL+"/"+this.bookingDetails.id, '_blank', GlobalConfigurationService.IN_APP_BROWSER_OPTIONS);
          }

          this.refWindow.on("loadstop").subscribe( event => {
              this.refWindow.executeScript({ code: "localStorage.setItem( 'payment_status', '"+GlobalConfigurationService.PAYMENT_STATUS.NEW+"' );" });

              // Start an interval
              this.intervalWindow = setInterval((function() {
                  var statusPayment: string = GlobalConfigurationService.PAYMENT_STATUS.NEW,
                      isGetReturn = false;

                  var inReturn = setInterval(() => {
                      if(isGetReturn) {
                          clearInterval( inReturn );

                          // If a name was set, clear the interval and close the InAppBrowser.
                          if ( statusPayment != GlobalConfigurationService.PAYMENT_STATUS.NEW ) {
                              if(this.intervalWindow !== false)
                                  clearInterval( this.intervalWindow );
                              this.refWindow.close();
                          }
                      }
                  }, 300);

                  // Execute JavaScript to check for the existence of a name in the
                  // child browser's localStorage.
                  this.refWindow.executeScript(
                      {
                          code: "localStorage.getItem( 'payment_status' )"
                      },
                      function( values ) {
                          isGetReturn = true;
                          statusPayment = values[ 0 ];
                      }
                  );
              }).bind(this), 1000);
          });

          this.refWindow.on("exit").subscribe( event => {
              if(this.intervalWindow !== false) clearInterval( this.intervalWindow );
              this.navCtrl.popToRoot().then(
                  this.navCtrl.parent.select(2)
              );
          });
      }
  }

  completedPayment() {
    var requestLoading; var confirmPaymentTitle; var confirmPaymentSubTitle;
    this.translate.get('LOADING_REQUEST').subscribe(value => { requestLoading = value; });
    this.translate.get('THANK_YOU').subscribe(value => { confirmPaymentTitle = value; });
    this.translate.get('PAYMENT_VERIFYING').subscribe(value => { confirmPaymentSubTitle = value; });

    if (this.lastImage !== null) {
      this.uploadImage();
    }
    else {
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: requestLoading,
      });

      loading.present();
      this.parseService.confirmPayment(this.bookingDetails.id).then(success => {
        this.parseService.sendEmail(this.bookingDetails, "paymentCompleted").then(res => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: confirmPaymentTitle,
            subTitle: confirmPaymentSubTitle,
            buttons: [{
              text: 'OK',
              handler: () => {
                let callback = this.navParams.get("callback");
                callback(2).then(() => {
                  this.navCtrl.popToRoot();
                });
              }
            }]
          });
          alert.present();
        },err => {
          console.log('send email failed');
          loading.dismiss();
        })
      }, err => {
        loading.dismiss()
        console.log("completed payment error");
      });
    }
  }

  uploadImage() {
    var requestLoading; var confirmPaymentTitle; var confirmPaymentSubTitle; var tryAgain;
    this.translate.get('LOADING_REQUEST').subscribe(value => { requestLoading = value; });
    this.translate.get('NEW_FRIEND').subscribe(value => { confirmPaymentTitle = value; });
    this.translate.get('PAYMENT_VERIFYING').subscribe(value => { confirmPaymentSubTitle = value; });
    this.translate.get('FAILED_TRY_AGAIN').subscribe(value => { tryAgain = value; });
    
    //let targetPath = this.pathForImage(this.lastImage)
    var filename = this.lastImage
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: requestLoading,
    });

    if (this.platform.is('ios'))
      this.lastImagePath = this.lastImagePath.replace(/^file:\/\//, '');

    this.base64.encodeFile(this.lastImagePath).then((base64File: string) => {
      let base64 = base64File.substr(base64File.indexOf(',') + 1);

      loading.present();
      this.parseService.uploadImage(this.bookingDetails.id, base64, filename).then(success => {
        let alert = this.alertCtrl.create({
          title: confirmPaymentTitle,
          subTitle: confirmPaymentSubTitle,
          buttons: [{
            text: 'OK',
            handler: () => {
              this.navCtrl.popToRoot();
            }
          }]
        });
        loading.dismiss();
        alert.present();
      }, err => {
        loading.dismiss();
        this.presentToast(tryAgain);
        console.log(err)
      })
    }, (err) => {
      loading.dismiss();
      this.presentToast(tryAgain);
      console.log(err)
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

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    // this.presentToast('image ada')
    if (img === null) {
      return '';
    }
    else {
      console.log('file path', cordova.file.dataDirectory + img);
      if (this.platform.is('ios')) {
        let itemSrc = cordova.file.dataDirectory + img;
        itemSrc = itemSrc.replace(/^file:\/\//, '');
        return itemSrc;
      }
      else
        return cordova.file.dataDirectory + img;
    }
  }

  navigateTo() {
    let destination = this.bookingDetails.location._latitude + ',' + this.bookingDetails.location._longitude;

    this.myLocation().then(geoPos => {

        let options: LaunchNavigatorOptions = {
            start: geoPos.coords.latitude + ',' +geoPos.coords.longitude
        };

        this.launchNavigator.navigate(destination, options)
            .then(
                success => alert('Launched navigator'),
                error => alert('Error launching navigator: ' + error)
            );

    }, err => {
        this.presentToast(err.message);
    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("PopoverPage", {
      data: [2, 3]
    }, {
      cssClass: 'backdropOpacity'
    });
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {

    });
  }

}
