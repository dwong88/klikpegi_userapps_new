import {
  Component,
  ViewChild,
  QueryList
} from '@angular/core';
import {
  NavController,
  NavParams,
  LoadingController,
  ModalController,
  AlertController,
  Segment,
  SegmentButton,
  PopoverController
} from 'ionic-angular';
import {
  ParseService
} from '../../providers/parse-service';
import {
  MyBookingsDetailPage
} from '../../pages/my-bookings-detail/my-bookings-detail';
import {
  LoginPage
} from '../../pages/login/login';
import {
  CountdownComponent
} from 'ngx-countdown';
import { TranslateService } from '@ngx-translate/core';

/*
 Generated class for the MyBookings page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-bookings',
  templateUrl: 'my-bookings.html',
  providers: [ParseService]
})
export class MyBookingsPage {
  @ViewChild(Segment)
  @ViewChild(CountdownComponent) timer: CountdownComponent;
  private segment: Segment;
  bookingList: any = '';
  userExist: boolean = false;
  orderStatus: number = 1;
  buttons: QueryList < SegmentButton >;
  public subscription: any;
  stayingType;
  buttonArr;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public parseService: ParseService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private translate: TranslateService
  ) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBookingsPage');
  }

  ionViewDidEnter() {
      let strLoading;
      this.translate.get('LOADING').subscribe(value => { strLoading = value; });

      if (this.navParams.get("statusCode") !== undefined)
          this.orderStatus = this.navParams.get("statusCode");

      console.log("masuk1x");
      if (this.parseService.getCurrentUser() != null) {
          console.log('user exist');
          this.userExist = true;
          this.subscription = this.parseService.getLiveBooking();

          console.log("masuk2x");
          this.subscription.on('update', object => {
              console.log("data updated");
              console.log("masuk3x");
              this.parseService.getBookingList().then(data => {
                  console.log("masuk4x");
                  for (let booking of data) {
                      switch (booking.propertyType) {
                          case 0: {
                              booking.propertyType = 'Hotel';
                              break;
                          }
                          default:
                              booking.propertyType = 'Other';
                      }
                  }
                  this.bookingList = data;
              });
          });

          this.subscription.on('error', object => {
              console.log(object);
          });

          let loading = this.loadingCtrl.create({
              spinner: 'hide',
              content: strLoading,
          });

          loading.present();
          this.parseService.getBookingList().then(data => {
              console.log("masuk6x");
              let index;
              for (let booking of data) {
                  // console.log(booking.id, booking.statusCode, booking.orderExpiry)
                  // Check if order have booking expiry
                  if (booking.orderExpiry !== undefined) {
                      //Get expiry time if available
                      booking.expiredTime = booking.orderExpiry.getTime();
                      //Check if order alredy expired for more than 1 day.
                      if (booking.expiredTime + (1000 * 60 * 60 * 24) < (new Date().getTime())) {
                          //Do something here.
                          booking.statusCode = 6;
                      }
                  }

                  switch (booking.propertyType) {
                      case 0: {
                          booking.propertyType = 'Hotel';
                          break;
                      }
                      default:
                          booking.propertyType = 'Other';
                  }
              }
              this.bookingList = data;
              loading.dismiss();
          })
      } else {
          console.log('ga ada user');
          this.userExist = false;
      }
  }

  presentModal() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  showBookingDetail(booking) {
    console.log("pindah page");
    this.navCtrl.push(MyBookingsDetailPage, {
      bookingData: booking,
      callback: this.myCallbackFunction
    });
  }

  myCallbackFunction = (_params) => {
    return new Promise((resolve, reject) => {
      this.orderStatus = _params;
      resolve();
    });
  }

  swipeEvent(event) {
      console.log("masuk7x");
    console.log(event);
    let i = 0;
    if (event.direction == 4) {
      if (this.orderStatus < 3)
        this.orderStatus = +this.orderStatus + 1;
      else {
        console.log('mentok kanan');
      }
    } else if (event.direction == 2) {
      if (this.orderStatus > 1)
        this.orderStatus = +this.orderStatus - 1;
    } else {
      console.log('mentok kiri');
    }
  }

  onFinished(booking) {
    setTimeout(() =>
      booking.expired = true, 0);
  }

  getStayingType(code) {
    var transit; var hours; var night; var other;
    this.translate.get('TRANSIT').subscribe(value => { transit = value; });
    this.translate.get('HOURS').subscribe(value => { hours = value; });
    this.translate.get('NIGHT').subscribe(value => { night = value; });
    this.translate.get('OTHER').subscribe(value => { other = value; });

    switch (code.toString()) {
      case '0':
        return transit;
      case '1':
        return '24 ' + hours;
      case '2':
        return '1 ' + night;
      default:
        return other;
    }
  }

  paymentComplete(booking) {
    // for(let button of this.segment._buttons.toArray())
    //   button.isActive = false

    // this.buttonArr[1].isActive = true

    var requestLoading; var confirmPaymentTitle; var confirmPaymentSubTitle;
    this.translate.get('LOADING_REQUEST').subscribe(value => { requestLoading = value; });
    this.translate.get('NEW_FRIEND').subscribe(value => { confirmPaymentTitle = value; });
    this.translate.get('PAYMENT_VERIFYING').subscribe(value => { confirmPaymentSubTitle = value });

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: requestLoading,
    });

    loading.present();
    this.parseService.confirmPayment(booking.id).then(success => {
      loading.dismiss();
      console.log(booking.id);
      let alert = this.alertCtrl.create({
        title: confirmPaymentTitle,
        subTitle: confirmPaymentSubTitle,
        buttons: [{
          text: 'OK',
          handler: () => {
            console.log("order status", this.orderStatus);
            this.orderStatus = 2;
          }
        }]
      });
      alert.present();
    }).then(() => {
      console.log(booking);
      this.parseService.sendEmail(booking, "paymentCompleted");
    })
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

    })
  }

}
