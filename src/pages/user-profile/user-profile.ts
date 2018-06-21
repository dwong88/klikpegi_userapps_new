import {
  Component
} from '@angular/core';
import {
  IonicPage,
  App,
  ViewController,
  NavController,
  NavParams,
  LoadingController,
  AlertController,
  ToastController,
  ModalController,
  PopoverController
} from 'ionic-angular';
import {
  ParseService
} from '../../providers/parse-service';
import {
  GlobalEventEmitterProvider
} from '../../providers/global-event-emitter';
import {
  TabsPage
} from '../../pages/tabs/tabs';
import {
  TranslateService
} from '@ngx-translate/core';
import {
  Facebook,
  FacebookLoginResponse
} from '@ionic-native/facebook';
import {
  GooglePlus
} from '@ionic-native/google-plus';
import { GlobalConfigurationService } from '../../providers/global-configuration-service';
import { LoginHandler } from '../../components/LoginHandler'
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
  providers: [ParseService, Facebook]
})
export class UserProfilePage extends LoginHandler {
    public model: any = {};
  user: any = '';
  isOwner: boolean = false;
  toggleText: string = 'Switch to owner menu';
  ownerStatus: boolean = false;
  root: any = '';
  userExist: boolean = false;

  constructor(public app: App,
              public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public parseService: ParseService,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public globalEvent: GlobalEventEmitterProvider,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              public translate: TranslateService,
              public facebook: Facebook,
              public googlePlus: GooglePlus,
              protected geolocation: Geolocation,
              public globalConfig: GlobalConfigurationService
  ) {
      super(navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, loadingCtrl, toastCtrl, translate, parseService, facebook, googlePlus, geolocation, globalConfig);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  ionViewDidEnter() {
    if (this.parseService.getCurrentUser() != null) {
      console.log('user exist');
      this.userExist = true;
      this.user = this.parseService.getCurrentUser();
      console.log(this.user)
    } else {
      console.log('ga ada user');
      this.userExist = false
    }

    // this.root = this.app.getRootNav();
  }

  editProfile() {
    this.navCtrl.push("EditProfilePage")
  }

    presentLoginModal() {
        let login = this.modalCtrl.create("LoginPage");
        login.present()

        login.onDidDismiss(data => {
            if (this.parseService.getCurrentUser() != null) {
                console.log('user exist');
                this.userExist = true;
                this.user = this.parseService.getCurrentUser()
            } else {
                console.log('ga ada user');
                this.userExist = false
            }
        })
    }

  logout() {
    var logoutLoading; var logoutSuccess; var logoutFail;
    this.translate.get('LOADING_LOG_OUT').subscribe(value => { logoutLoading = value; });
    this.translate.get('LOG_OUT_SUCCESS').subscribe(value => { logoutSuccess = value; });
    this.translate.get('LOG_OUT_FAIL').subscribe(value => { logoutFail = value; });

    let loading = this.loadingCtrl.create({
      content: logoutLoading
    });
    loading.present();
    console.log("prof1");

    this.parseService.logoutUser().then(success => {
        console.log("prof2");
      console.log(success);
      loading.dismiss();
        this.globalEvent.isLoggedIn.emit(false);
        this.navCtrl.popToRoot().then(
            this.navCtrl.parent.select(0)
        );
        // this.navCtrl.popToRoot();
        // this.navCtrl.setRoot(TabsPage, {tabIndex: 0});
        this.presentToast(logoutSuccess);
        console.log("prof3");
    }, err => {
        console.log("prof4");
      loading.dismiss();
        console.log("prof5");
      this.presentToast(logoutFail)
    });
  }

  presentRegisterModal() {
    let register = this.modalCtrl.create("SignUpPage");
    register.present();
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

    private login(method) {
        switch (method) {
            case "email": {
                this.manualLogin(this.model.username, this.model.password, GlobalConfigurationService.CLOSE_PAGE_TYPE.RELOAD_ROOT, 'UserProfilePage');
                break;
            }
            case "facebook": {
                this.facebookLogin(GlobalConfigurationService.CLOSE_PAGE_TYPE.RELOAD_ROOT, TabsPage);
                break;
            }
            case "google": {
                this.googleLogin(GlobalConfigurationService.CLOSE_PAGE_TYPE.RELOAD_ROOT, TabsPage);
                break;
            }
        }
    }

  helpCenter() {
    this.navCtrl.push("HelpPage");
  }

}
