import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  PopoverController
} from 'ionic-angular';
import {
  ParseService
} from '../../providers/parse-service'


/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public parseService: ParseService, private alertCtrl: AlertController, private popoverCtrl: PopoverController) {

  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad SearchPage');
  }

  showSearchPage(searchMode) {
      console.log(searchMode);
      this.navCtrl.push("HomePage", {
          mode: searchMode
      }, {
          animate: false,
          animation: 'ios-transition',
          duration: 500
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
