import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {ParseService} from '../../providers/parse-service'

/**
 * Generated class for the EditPasswordModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-password-modal',
  templateUrl: 'edit-password-modal.html',
  providers: [ParseService]
})
export class EditPasswordModalPage {
  newPassword: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public parseService: ParseService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPasswordModalPage');
  }

  savePassword(password) {
    console.log("save password test");
    this.parseService.editPassword(password).then((success) => {
      console.log(success);
      this.viewCtrl.dismiss()
    }, err => {
      console.log(err)
    })
  }

  dismissModal() {
    this.viewCtrl.dismiss()
  }

}
