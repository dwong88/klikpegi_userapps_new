import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AmenitiesModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-amenities-modal',
  templateUrl: 'amenities-modal.html',
})
export class AmenitiesModalPage {
  amenities: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(navParams.get("list"))
    this.amenities = navParams.get("list")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmenitiesModalPage');
  }

  dismissModal() {
    this.viewCtrl.dismiss()
  }

  filterArray(type) {
    return this.amenities.filter(x => x.value == type);
  }

}
