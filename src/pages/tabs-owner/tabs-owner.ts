import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the TabsOwnerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs-owner',
  templateUrl: 'tabs-owner.html',
})
export class TabsOwnerPage {

  ownerBookingsPage = "OwnerBookingsPage";
  profilePage = "UserProfilePage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsOwnerPage');
  }

}
