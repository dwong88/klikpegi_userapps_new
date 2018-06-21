import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BookingsModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookings-modal',
  templateUrl: 'bookings-modal.html',
})
export class BookingsModalPage {
  bookingDetail: any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
    this.bookingDetail = navParams.data;
    console.log(this.bookingDetail)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsModalPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
