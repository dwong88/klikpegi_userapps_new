import { Component } from '@angular/core';
import {
    NavController, ViewController, ModalController, LoadingController, NavParams, AlertController, ToastController,
    Platform, IonicPage
} from 'ionic-angular';
import { ParseService } from '../../providers/parse-service';
import { TabsPage } from '../../pages/tabs/tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConfigurationService } from '../../providers/global-configuration-service';
import { LoginHandler } from '../../components/LoginHandler';
import { Geolocation } from "@ionic-native/geolocation";
/*
 Generated class for the Login page.
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ParseService, Facebook]
})
export class LoginPage extends LoginHandler{
  model: any = {};
  roomID: number;
  checkIn: any;
  mainNav: any = '';
  skipStatus: boolean = false;
  bookingData: any = '';
  userData: any;
  backToParent: boolean = false;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public parseService: ParseService,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController,
              public facebook: Facebook,
              public googlePlus: GooglePlus,
              public plt: Platform,
              public translate: TranslateService,
              protected geolocation: Geolocation,
              public globalConfig: GlobalConfigurationService) {
      super(navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, loadingCtrl, toastCtrl, translate, parseService, facebook, googlePlus, geolocation, globalConfig);
      this.skipStatus = navParams.get('skipped');
      this.roomID = navParams.get("room");
      this.checkIn = new Date(navParams.get("time")) || new Date();
      if(typeof this.navParams.get('backToParent') !== 'undefined') {
        this.backToParent = this.navParams.get('backToParent');
      }
  }

  ionViewDidLoad() {

  }

  private login(method) {
      let closeType: number = GlobalConfigurationService.CLOSE_PAGE_TYPE.RELOAD_ROOT;

      if(this.backToParent)
          closeType = GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL;

      switch (method) {
          case "email": {
              console.log('login123xx');
              this.manualLogin(this.model.username, this.model.password, closeType, TabsPage);
              break;
          }
          case "facebook": {
              this.facebookLogin(closeType, TabsPage);
              break;
          }
          case "google": {
              this.googleLogin(closeType, TabsPage);
              break;
          }
      }
  }
}
