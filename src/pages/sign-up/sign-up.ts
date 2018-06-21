import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController, ModalController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParseService } from '../../providers/parse-service';
import { LoginPage } from '../../pages/login/login';
import { TabsPage } from '../../pages/tabs/tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConfigurationService } from '../../providers/global-configuration-service';
import { LoginHandler } from '../../components/LoginHandler';
import {Geolocation} from "@ionic-native/geolocation";

/**
 * Generated class for the SignUpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
  providers: [ParseService, Facebook]
})
export class SignUpPage extends LoginHandler {
  signUpForm: FormGroup;
  submitAttempt: boolean = false;
    backToParent: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public parseService: ParseService,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public facebook: Facebook,
              public googlePlus: GooglePlus,
              public translate: TranslateService,
              protected geolocation: Geolocation,
              public globalConfig: GlobalConfigurationService) {
      super(navCtrl, navParams, modalCtrl, alertCtrl, viewCtrl, loadingCtrl, toastCtrl, translate, parseService, facebook, googlePlus, geolocation, globalConfig);
      this.signUpForm = formBuilder.group({
          fullName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
          phoneNo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
          email: ['', Validators.compose([Validators.required, this.emailValidator])],
          password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      });

      if(typeof this.navParams.get('backToParent') !== 'undefined') {
          this.backToParent = this.navParams.get('backToParent');
      }
  }

  emailValidator(control) {
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
          return null;
      } else {
          return {'invalidEmailAddress': true};
      }
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad SignUpPage');
  }

  signUp(method) {
      var invalid;
      this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(value => {
          invalid = value;
      });

      let closeType: number = GlobalConfigurationService.CLOSE_PAGE_TYPE.RELOAD_ROOT;

      if(this.backToParent)
          closeType = GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL;

      let formValue = this.signUpForm.value;

      var authData;
      var pwd;
      var boolManual = true;

      if (method == 'manual') {
          if (formValue.email == '' || formValue.email == null || formValue.password == '' || formValue.password == null || formValue.fullName == '' || formValue.fullName == null || formValue.phoneNo == '' || formValue.phoneNo == null) {
              this.presentToast(invalid);
              boolManual = false;
          }
          else {
              authData = {
                  email: formValue.email.toLowerCase(),
                  fullName: formValue.fullName.toUpperCase(),
                  phoneNo: formValue.phoneNo
              }
              pwd = formValue.password;
              this.signUpProcess(authData, pwd, method, closeType, TabsPage);
          }
      }
      else if (method == 'google') {
          this.googleLogin(closeType, TabsPage);
      }
      else if (method == 'facebook') {
          this.facebookLogin(closeType, TabsPage);
      }
  }
}
