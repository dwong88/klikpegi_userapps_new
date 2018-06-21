import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController,  NavParams } from 'ionic-angular';

/**
 * Generated class for the OtherAmenitiesModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other-amenities-modal',
  templateUrl: 'other-amenities-modal.html',
})
export class OtherAmenitiesModalPage {
  otherAmenities = [
    {
      id: 0,
      value: 0,
      title: 'WASHING_MACHINE'
    },
    {
      id: 1,
      value: 0,
      title: 'CLOTHES_DRYER'
    },
    {
      id: 2,
      value: 0,
      title: 'DISHWASHER'
    },
    {
      id: 3,
      value: 0,
      title: 'FAN'
    },
    {
      id: 4,
      value: 0,
      title: 'DVD/CD_PLAYER'
    },
    {
      id: 5,
      value: 0,
      title: 'DAILY_NEWSPAPERS'
    },
    {
      id: 6,
      value: 0,
      title: 'INHOUSE_MOVIES'
    },
    {
      id: 7,
      value: 0,
      title: 'IN_ROOM_VIDEO_GAMES'
    },
    {
      id: 8,
      value: 0,
      title: 'INTERNET_ACCESS_WIFI_CHARGES_APPLY'
    },
    {
      id: 9,
      value: 0,
      title: 'INTERNET_ACCESS_LAN_COMPLIMENTARY'
    },
    {
      id: 10,
      value: 0,
      title: 'INTERNET_ACCESS_LAN_CHARGES_APPLY'
    },
    {
      id: 11,
      value: 0,
      title: 'KITCHENETTE'
    },
    {
      id: 12,
      value: 0,
      title: 'MINI_BAR'
    },
    {
      id: 13,
      value: 0,
      title: 'PRIVATE_POOL'
    },
    {
      id: 14,
      value: 0,
      title: 'SEPARATE_DINING_AREA'
    },
    {
      id: 15,
      value: 0,
      title: 'BALCONY_TERRACE'
    },
    {
      id: 16,
      value: 0,
      title: 'INTERCONNECTING_ROOMS'
    },
    {
      id: 17,
      value: 0,
      title: 'LUNCH'
    },
    {
      id: 18,
      value: 0,
      title: 'DINNER'
    },
    {
      id: 19,
      value: 0,
      title: 'COMPLIMENTARY_BOTTLED_WATER'
    },
    {
      id: 20,
      value: 0,
      title: 'EXECUTIVE_LOUNGE_ACCESS'
    },
    {
      id: 21,
      value: 0,
      title: 'BLACKOUT_CURTAINS'
    },
    {
      id: 22,
      value: 0,
      title: 'MOSQUITO_NET'
    },
    {
      id: 23,
      value: 0,
      title: 'SEATING_AREA'
    }
  ]
  constructor(public navCtrl: NavController, public viewCtrl:ViewController, public navParams: NavParams) {
    let amenities = this.navParams.get('data')
    console.log(amenities);
    for(let amenity of amenities){
      this.otherAmenities[amenity].value = 1;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherAmenitiesModalPage');
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  filterArray(array, type) {
    return array.filter(x => x.value == type);
  }

}
