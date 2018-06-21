import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';
import { ParseService } from '../../providers/parse-service'
import { Keyboard } from '@ionic-native/keyboard';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
  providers: [ParseService, Keyboard]
})
export class ForgotPasswordPage {
  recoveryEmail: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public parseService: ParseService, public viewCtrl: ViewController, public plt: Platform,
    public keyboard: Keyboard,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private translate: TranslateService) {
  }

  ionViewDidEnter() {
    this.plt.ready().then(() => {
      this.keyboard.disableScroll(true);
    });
  }

  ionViewWillLeave() {
    this.plt.ready().then(() => {
      this.keyboard.disableScroll(false);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000,
      position: 'bottom'
    });

    toast.present();
  }

  presentAlert() {
    var emailTitle; var emailSubtitle;
    this.translate.get('EMAIL_SENT').subscribe(value => { emailTitle = value; });
    this.translate.get('NEW_PASSWORD_SUCCESS').subscribe(value => { emailSubtitle = value; });

    let alert = this.alertCtrl.create({
      title: emailTitle,
      subTitle: emailSubtitle,
      buttons: ['Okay']
    });
    alert.present();

    alert.onDidDismiss(() =>{
      this.navCtrl.pop();
    })
  }

  sendRecoveryPassword(email) {
    console.log(email);

    var notFound;
    this.translate.get('EMAIL_NOT_FOUND').subscribe(value => { notFound = value; });

    this.parseService.forgotPassword(email).then(success => {
      this.presentAlert();
    }, err => {
      this.presentToast(notFound);
      console.log(err);
    })
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
