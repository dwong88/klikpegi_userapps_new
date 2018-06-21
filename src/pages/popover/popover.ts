import {
  TranslateService
} from '@ngx-translate/core';
import {
  Component
} from '@angular/core';
import {
  App,
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import {
  HelpPage
} from '../help/help';
import {PromoPage} from "../promo/promo";

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  popover = [{
    id: 1,
    name: "BACK_TO_HOME",
    show: false
  }, {
    id: 2,
    name: "HELP",
    show: false
  }, {
    id: 3,
    name: "SETTINGS",
    show: false
  }, {
    id: 4,
      name: "PROMO",
      show: false
  }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public app: App, public translate: TranslateService) {
    let options = navParams.get("data")
    for (let option of options) {
      this.popover[option - 1].show = true
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  ionViewWillEnter() {
    for (let menu of this.popover) {
      this.translate.get(menu.name).subscribe(value=>{
        menu.name = value
      })
    }
  }

  close(mode) {
      this.viewCtrl.dismiss(mode, null, {
          animation: 'md-transition'
      })
      switch (mode) {
          case 1: {
              //this.app.getActiveNav().popToRoot();
              this.app.getRootNav().push("HomePage");
              break;
          }
          case 2: {
              this.app.getRootNav().push("HelpPage");
              break;
          }
          case 3: {
              this.app.getRootNav().push("SettingsPage");
              break;
          }
          case 4: {
              this.app.getRootNav().push("PromoPage");
              break;
          }
      }
  }

}
