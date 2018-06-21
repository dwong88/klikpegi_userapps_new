import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Events
} from 'ionic-angular';
import {
  TranslateService
} from '@ngx-translate/core';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  language: any = 'id';

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate: TranslateService, public events: Events) {
    this.language = this.translate.getDefaultLang();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    console.log(this.language);
  }

  changeTranslate() {
    console.log("masuk change translate")
    this.translate.setDefaultLang(this.language);
    this.navCtrl.pop({animate : true});
  }

}
