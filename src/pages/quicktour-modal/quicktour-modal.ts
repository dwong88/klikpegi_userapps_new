import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the QuicktourModal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quicktour-modal',
  templateUrl: 'quicktour-modal.html'
})
export class QuicktourModalPage {

  images: any[];
  public introBgImg: string[] = ["introbg1","introbg2","introbg3"];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController ) {
    this.images = [{
      url: 'assets/images/bgfullklik_intro.jpg'
    },{
      url: 'assets/images/qt2.png'
    },{
      url: 'assets/images/qt3.png'
    }]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuicktourModalPage');
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }
}
