import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ModalController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParseService } from '../../providers/parse-service';
import { LoginPage } from '../../pages/login/login';
import { TabsPage } from '../../pages/tabs/tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConfigurationService } from '../../providers/global-configuration-service';


/**
 * Generated class for the SignUpModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-modal',
  templateUrl: 'sign-up-modal.html',
  providers: [ParseService, Facebook]
})
export class SignUpModalPage {
  signUpForm: FormGroup
  submitAttempt: boolean = false

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public parseService: ParseService,
              public viewCtrl: ViewController,
              public loadingCtrl: LoadingController,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              private facebook: Facebook,
              private googlePlus: GooglePlus,
              private translate: TranslateService,
              private globalConfig: GlobalConfigurationService) {
    this.signUpForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, this.emailValidator])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    });
  }

  emailValidator(control) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpModalPage');
  }

  public pwdEncryptor(email, pwd) {
    var encrypted;
    if (pwd == null) {
      // rand password
      var password = 'go2ghours';
      // encrypt password & email
      encrypted = password;
    } else if (pwd != null) {
      // encrypt password & email
      encrypted = String(pwd);
    }
    return encrypted;
  }

  private promptPassword(email, existingCheckData, method, platform) {
    var msgManual; var msgSosmed; var msgChangePassword; var linkAccount; var signupLoading; var pwd; var forgotPassword; var send; var signupSuccess; var signupFail;
    this.translate.get('MESSAGE_SIGNUP_MANUAL').subscribe(value => { msgManual = value; });
    this.translate.get('MESSAGE_SIGNUP_SOSMED').subscribe(value => { msgSosmed = value; });
    this.translate.get('LOADING_SIGN_UP').subscribe(value => { signupLoading = value; });
    this.translate.get('LINK_ACCOUNT').subscribe(value => { linkAccount = value; });
    this.translate.get('PASSWORD').subscribe(value => { pwd = value; });
    this.translate.get('FORGOT_PASSWORD').subscribe(value => { forgotPassword = value; });
    this.translate.get('SEND').subscribe(value => { send = value; });
    this.translate.get('SIGN_UP_SUCCESS').subscribe(value => { signupSuccess = value; });
    this.translate.get('SIGN_UP_FAIL').subscribe(value => { signupFail = value; });
    var password;

    let loading = this.loadingCtrl.create({
      content: signupLoading
    });

    // sosmed dulu baru manual yang forgot
    if (method == 'sosmedtomanual') {
      let alert = this.alertCtrl.create({
        title: linkAccount,
        message: msgManual,
        buttons: [
          {
            text: forgotPassword,
            handler: data => {
              this.forgotPassword();
            }
          }
        ]
      });
      alert.present();
    }
    else if (method == 'manualtososmed') {
      let alert = this.alertCtrl.create({
        title: linkAccount,
        message: msgSosmed,
        inputs: [{
          name: 'password',
          placeholder: pwd,
          type: 'password'
        }],
        buttons: [
          {
            text: send,
            handler: data => {
              loading.present();
              password = this.pwdEncryptor(email, data.password);
              this.parseService.login(email, password).then(resLogin => {
                if (resLogin == 'success') {
                  this.parseService.existingLinking(email, password, existingCheckData, platform).then(resLink => {
                    console.log(resLink);
                    if (resLink == 'Linking success') {
                      console.log('User login with ' + platform);
                      loading.dismiss();
                      this.navCtrl.popToRoot();
                      this.navCtrl.setRoot(TabsPage);
                      this.presentToast(signupSuccess);
                    }
                    else if (resLink == 'Linking error') {
                      loading.dismiss();
                      this.presentToast(signupFail);
                    }
                  });
                }
                else if (resLogin == 'error') {
                  console.log('Password has been changed, please input your new password');
                  loading.dismiss();
                  this.presentToast(signupFail);
                }
              });
            }
          }
        ]
      });
      alert.present();
    }
  }

  signUp(method) {
    console.log(this.signUpForm.value);

    var invalid;
    this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(value => { invalid = value; });

    let formValue = this.signUpForm.value;

    var authData;
    var pwd;

    if (method == 'manual') {
      if (formValue.email == '' || formValue.email == null || formValue.password == '' || formValue.password == null) {
        this.presentToast(invalid);
      }
      else {
        authData = {
          email: formValue.email
        }
        pwd = formValue.password;
        this.signUpProcess(authData, pwd, method);
      }
    }
    else if (method == 'google') {
      this.googlePlus.login({'webClientId': this.globalConfig.googleWebClientId, 'offline': true}).then(resGooglePlugin => {
        authData = {
          email: resGooglePlugin.email,
          displayName: resGooglePlugin.displayName,
          givenName: resGooglePlugin.givenName,
          familyName: resGooglePlugin.familyName
        }
        pwd = this.pwdEncryptor(resGooglePlugin.email, null);
        this.signUpProcess(authData, pwd, method);
      });
    }
    else if (method == 'facebook') {
      this.facebook.login(['public_profile', 'email']).then(resFbPlugin => {
        this.facebook.api('/me?fields=id,email,name,first_name,last_name,gender,birthday', ['public_profile', 'email', 'user_birthday']).then(profile => {
          authData = {
            email: profile.email,
            fullName: profile.fullName,
            first_name: profile.first_name,
            last_name: profile.last_name,
            gender: profile.gender,
            birthDate: profile.birthDate
          }
          pwd = this.pwdEncryptor(profile.email, null);
          this.signUpProcess(authData, pwd, method);
        });
      });
    }
  }

  signUpProcess(authData, pwd, method) {
    console.log(authData);
    var signupLoading; var signupSuccess; var signupFail;
    this.translate.get('LOADING_SIGN_UP').subscribe(value => { signupLoading = value; });
    this.translate.get('SIGN_UP_SUCCESS').subscribe(value => { signupSuccess = value; });
    this.translate.get('SIGN_UP_FAIL').subscribe(value => { signupFail = value; });

    let loading = this.loadingCtrl.create({
      content: signupLoading
    });

    this.parseService.existingCheck(authData.email).then(data => {
      if (data == null) {
        console.log('User not exist');
        this.parseService.signup(authData, pwd, method).then(success => {
          console.log(success);
          loading.dismiss();
          this.presentToast(signupSuccess);
          this.dismissModal();
        }, err => {
          console.log(err);
          loading.dismiss();
          this.presentToast(signupFail);
        });
      }
      else {
        console.log('User exist');
        if (data.googleAuth == undefined && data.fbAuth == undefined) {
          console.log('User exist with Manual account');
          loading.dismiss();
          this.promptPassword(authData.email, data, 'manualtososmed', method)
        }
        else if (data.googleAuth != undefined || data.fbAuth != undefined) {
          console.log('User exist with Google or Facebook account');
          loading.dismiss();
          this.promptPassword(authData.email, data, 'sosmedtomanual', method);
        }
      }
    });
  }

  private forgotPassword() {
    let modal = this.modalCtrl.create('ForgotPasswordPage');
    modal.present();
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 2000,
      position: 'bottom'
    });

    toast.present();
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

}
