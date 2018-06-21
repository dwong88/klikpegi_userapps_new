import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, LoadingController, ViewController, App } from 'ionic-angular';
import { ParseService } from '../../providers/parse-service'
import { MyBookingsPage } from '../../pages/my-bookings/my-bookings'
import { TabsPage } from "../tabs/tabs";
import { TranslateService } from '@ngx-translate/core';
/**
 * Generated class for the BookingConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-booking-confirmation',
  templateUrl: 'booking-confirmation.html',
  providers: [ParseService]
})
export class BookingConfirmationPage {
  @ViewChild(Navbar) navBar: Navbar;
  bookingData: any = '';
  loading: any;
  roomDetail: any = '';
  skipStatus: boolean = false;
  loadFinished: boolean = false;
  stayingType
  endDate
  transitPrice: number = 0

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public parseService: ParseService,
    public loadingCtrl: LoadingController,
    public app: App,
    private translate: TranslateService) {

    console.log(navParams.data)
    this.bookingData = navParams.get('classDetail')
    console.log(this.bookingData)
    this.stayingType = this.getStayingType(this.bookingData.mode)
    this.transitPrice = this.bookingData.priceList[this.bookingData.duration - 1].price * (100 - this.bookingData.discountRate) / 100
    // this.createLoading();
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.pop({
        animate: true,
        animation: 'ios-transition',
        direction: 'back'
      })
    }
  }

  createLoading() {
    var bookingDetailsLoading;
    this.translate.get('LOADING_BOOKING_DETAILS').subscribe(value => { bookingDetailsLoading = value; });

    this.loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: bookingDetailsLoading
    });
    this.loading.present()
  }

  getStayingType(code) {
    var transit; var hours; var night; var other;
    this.translate.get('TRANSIT').subscribe(value => { transit = value; });
    this.translate.get('HOURS').subscribe(value => { hours = value; });
    this.translate.get('NIGHT').subscribe(value => { night = value; });
    this.translate.get('OTHER').subscribe(value => { other = value; });

    switch (code.toString()) {
      case '0': return transit
      case '1': return '24 ' + hours
      case '2': return '1 ' + night
      default: return other
    }
  }

  dismissModal() {
    this.viewCtrl.dismiss()
  }

  showPaymentConfirmation() {
    this.navCtrl.push("PaymentDetailPage", { classDetail: this.bookingData }, { animate: true, animation: 'ios-transition', direction: 'forward' })
  }
}
