import { Component } from '@angular/core'
import {
  NavController,
    NavParams,
  MenuController,
  ModalController,
  LoadingController,
  ToastController,
    ViewController
} from 'ionic-angular'
import {
  QuicktourModalPage } from '../../pages/quicktour-modal/quicktour-modal'
import { LoginPage } from '../../pages/login/login';
import {
  SignUpPage
} from "../sign-up/sign-up";
import {
  TabsPage
} from "../tabs/tabs";
import {
  TranslateService
} from '@ngx-translate/core';
import { ParseService } from '../../providers/parse-service';
import { CommonHandler } from '../../components/CommonHandler';
import { GlobalConfigurationService } from '../../providers/global-configuration-service';
import {Platform} from 'ionic-angular';
import {Geolocation} from "@ionic-native/geolocation";

/*
 Generated class for the Onboarding page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage extends CommonHandler {
    public bgClsName: string;

  constructor(public navCtrl: NavController,
              protected viewCtrl: ViewController,
              public menu: MenuController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public translate: TranslateService,
              public loadingCtrl: LoadingController,
              public parseService: ParseService,
              public toastCtrl: ToastController,
              protected geolocation: Geolocation,
              public globalConfig: GlobalConfigurationService,
              public platform: Platform) {
      super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);
      this.menu.swipeEnable(false);
      this.bgClsName = "full-screen";
      platform.ready().then((readySource) => {
          // if(platform.height() > 790) {
          //     this.bgClsName = "full-screen-iphonex";
          // }
          console.log('Width: ' + platform.width());
          console.log('Height: ' + platform.height());
      });
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
      if (this.parseService.getCurrentUser() != null) {
          this.navCtrl.setRoot(TabsPage);
      }
  }

  presentModal(page) {
    let modal;
console.log(page);
    switch (page) {
      case 1:
        {
          modal = this.modalCtrl.create(QuicktourModalPage);
          break;
        }
      case 2:
        {
          modal = this.modalCtrl.create("LoginPage");
          break;
        }
      case 3:
        {
          modal = this.modalCtrl.create("SignUpPage");
          break;
        }
      default:
        {
          window.alert("An error occurred");
          break;
        }
    }
    modal.present();
  }

  skip() {
    this.navCtrl.push(TabsPage)
  }














}
