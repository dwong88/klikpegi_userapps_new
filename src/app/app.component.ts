import {Component, ViewChild} from '@angular/core';
import {Nav, Platform, LoadingController, AlertController, ToastController, ModalController, Events} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {MyBookingsPage} from '../pages/my-bookings/my-bookings';
import {QuicktourModalPage} from "../pages/quicktour-modal/quicktour-modal";
import {OnboardingPage} from '../pages/onboarding/onboarding';

import {Network} from '@ionic-native/network'
import {ParseService} from '../providers/parse-service';
import {TranslateService} from '@ngx-translate/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { GlobalConfigurationService } from '../providers/global-configuration-service';
import { HeaderColor } from '@ionic-native/header-color';

declare var navigator: any;
declare var connections: any;

@Component({
  templateUrl: 'app.html',
  providers: [ParseService
            , ScreenOrientation
      , HeaderColor
            ]
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = OnboardingPage;
  pages: Array<{ title: string, component: any }>;
  user: any = "";

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              private headerColor: HeaderColor,
              public splashScreen: SplashScreen,
              public parseService: ParseService,
              public loadingCtrl: LoadingController,
              public network: Network,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private translate: TranslateService,
              private events: Events,
              private screenOrientation: ScreenOrientation,
              private globalConfig: GlobalConfigurationService
  ) {
    this.initializeApp();
    this.translateConfig();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.

        // This is for network checker when no internet is available.
        //console.log(this.network.type)
        // if(this.network.type == 'none'){
        //   let message = "Your connection type is " + this.network.type
        //   let alert = this.alertCtrl.create({
        //     title: 'Internet Connection',
        //     subTitle: 'You have no internet access',
        //     buttons: [{
        //       text: 'Ok',
        //       handler: () => {
        //         this.platform.exitApp();
        //       }
        //     }]
        //   })
        //   alert.present()
        // }

        // this.statusBar.styleDefault();
		this.statusBar.overlaysWebView(true);
		this.statusBar.backgroundColorByHexString('#ffffff');
		this.headerColor.tint('#ffffff');
        this.splashScreen.hide();
        this.initializePage();
        if (this.platform.is('cordova')) {
          this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
      }
    );
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  initializePage() {
    this.pages = [
      {title: 'Search Room', component: "HomePage"},
      {title: 'My Bookings', component: MyBookingsPage},
      {title: 'Add Room', component: 'AddRoomPage'}
    ];
    // console.log(this.pages);
  }

  translateConfig() {
    console.log('translate config');
    this.translate.setDefaultLang(this.globalConfig.defaultLang);
  }

  resetPage(){
    this.user = '';
    this.pages = [
      {title: 'Search Room', component: "HomePage"},
    ]
  }

  logout() {
    let loading = this.loadingCtrl.create({
      content: 'Logging Out, Please Wait..'
    });

    loading.present();

    this.parseService.logoutUser().then(success => {
      this.nav.setRoot(OnboardingPage);
      loading.dismiss();
      this.presentToast("Logged out successfully!");
    }, err => {
      loading.dismiss();
      this.presentToast(err.message);
    })

  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  editProfile() {
    this.nav.push("EditProfilePage");
  }

  howToUse(){
    console.log('tutorial');
    let modal = this.modalCtrl.create(QuicktourModalPage);
    modal.present();
  }
}
