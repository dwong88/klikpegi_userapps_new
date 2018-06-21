import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, ModalController, AlertController, LoadingController, NavParams, ToastController, Platform } from 'ionic-angular'
import { ParseService } from '../../providers/parse-service';
import { TabsPage } from '../../pages/tabs/tabs';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TranslateService } from '@ngx-translate/core';
import { GlobalConfigurationService } from '../../providers/global-configuration-service';

/**
 * Generated class for the LoginModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()

@Component({
  selector: 'page-login-modal',
  templateUrl: 'login-modal.html',
  providers: [ParseService, Facebook]
})
export class LoginModalPage {

  model: any = {};
  loading = false;
  roomID: number;
  checkIn: any;
  mainNav: any = '';
  skipStatus: boolean = false;
  bookingData: any = '';

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              public parseService: ParseService,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              public plt: Platform,
              public facebook: Facebook,
              private googlePlus: GooglePlus,
              private translate: TranslateService,
              private globalConfig: GlobalConfigurationService) {
    parseService.facebookInit();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginModalPage');
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

  public pwdDecryptor(pwd) {
    // decrypt password
    var decrypted = pwd;
    return decrypted;
  }

  private promptPassword(email, existingCheckData, method, platform) {
    var msgManual; var msgSosmed; var msgChangePassword; var loginLoading; var linkAccount; var forgotPassword; var pwd; var send; var loginSuccess; var loginFail;
    this.translate.get('MESSAGE_LOGIN_MANUAL').subscribe(value => { msgManual = value; });
    this.translate.get('MESSAGE_LOGIN_SOSMED').subscribe(value => { msgSosmed = value; });
    this.translate.get('MESSAGE_LOGIN_CHANGE_PASSWORD').subscribe(value => { msgChangePassword = value; });
    this.translate.get('LOADING_LOGIN').subscribe(value => { loginLoading = value; });
    this.translate.get('LINK_ACCOUNT').subscribe(value => { linkAccount = value; });
    this.translate.get('FORGOT_PASSWORD').subscribe(value => { forgotPassword = value; });
    this.translate.get('PASSWORD').subscribe(value => { pwd = value; });
    this.translate.get('SEND').subscribe(value => { send = value; });
    this.translate.get('LOG_IN_SUCCESS').subscribe(value => { loginSuccess = value; });
    this.translate.get('LOG_IN_FAIL').subscribe(value => { loginFail = value; });
    var password;

    let loading = this.loadingCtrl.create({
      content: loginLoading
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
                      this.viewCtrl.dismiss();
                      this.presentToast(loginSuccess);
                    }
                    else if (resLink == 'Linking error') {
                      loading.dismiss();
                      this.presentToast(loginFail);
                    }
                  });
                }
                else if (resLogin == 'error') {
                  console.log('Password has been changed, please input your new password');
                  loading.dismiss();
                  this.presentToast(loginFail);
                }
              });
            }
          }
        ]
      });
      alert.present();
    }
    else if (method == 'manualtososmedchangepwd') {
      let alert = this.alertCtrl.create({
        title: linkAccount,
        message: msgChangePassword,
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
                      this.presentToast(loginSuccess);
                    }
                    else if (resLink == 'Linking error') {
                      loading.dismiss();
                      this.presentToast(loginFail);
                    }
                  });
                }
                else if (resLogin == 'error') {
                  console.log('Password has been changed, please input your new password');
                  loading.dismiss();
                  this.presentToast(loginFail);
                }
              });
            }
          }
        ]
      });
      alert.present();
    }
  }

  login(method) {
    switch (method) {
      case "email":
        {
          this.manualLogin();
          break;
        }
      case "facebook":
        {
          this.facebookLogin();
          break;
        }
      case "google":
        {
          this.googleLogin();
          break;
        }
    }
  }

  private manualLogin() {
    var loginLoading; var invalid; var loginSuccess; var loginFail;
    this.translate.get('LOADING_LOG_IN').subscribe(value => { loginLoading = value; });
    this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(value => { invalid = value; });
    this.translate.get('LOG_IN_SUCCESS').subscribe(value => { loginSuccess = value; });
    this.translate.get('LOG_IN_FAIL').subscribe(value => { loginFail = value; });

    let loading = this.loadingCtrl.create({
      content: loginLoading
    });

    if (this.model.username == '' || this.model.username == null || this.model.password == '' || this.model.password == null) {
      this.presentToast(invalid);
    }
    else {
      loading.present();

      let username = this.model.username.toLowerCase();
      let password = this.pwdEncryptor(username, this.model.password);

      // Step for manual login:
      // 1. Login first
      // 2. If success, then user logged in
      // 3. if error, check to database if there's an existing account with different password
      this.parseService.login(username, password).then(res => {
        if (res == 'success') {
          this.parseService.existingCheck(username).then(data => {
            if (data == null) {
              console.log('User not exist');
              loading.dismiss();
              this.viewCtrl.dismiss();
              this.presentToast(loginSuccess);
            }
            else {
              console.log('User exist');
              this.parseService.existingLinking(username, password, data, 'manual').then(resLink => {
                console.log(resLink);
                if (resLink == 'Linking success') {
                  console.log('User login with Google');
                  loading.dismiss();
                  this.viewCtrl.dismiss();
                  this.presentToast(loginSuccess);
                }
                else if (resLink == 'Linking error') {
                  loading.dismiss();
                  this.presentToast(loginFail);
                }
              });
            }
          });
        }
        else if (res == 'error') {
          loading.dismiss();
          console.log('Wrong username or password');
          this.presentToast(loginFail);
        }
      }, err => {
        console.log(err);
        loading.dismiss();
        this.presentToast(err.message);
      });
    }
  }

  private googleLogin() {
    var loginLoading; var invalid; var loginSuccess; var loginFail;
    this.translate.get('LOADING_LOG_IN').subscribe(value => { loginLoading = value; });
    this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(value => { invalid = value; });
    this.translate.get('LOG_IN_SUCCESS').subscribe(value => { loginSuccess = value; });
    this.translate.get('LOG_IN_FAIL').subscribe(value => { loginFail = value; });

    let loading = this.loadingCtrl.create({
      content: loginLoading
    });

    this.googlePlus.login({'webClientId': this.globalConfig.googleWebClientId, 'offline': true}).then(resGooglePlugin => {
      loading.present();

      // Step for google login:
      // 1. Check existing first
      // 2. If null, then user signed up
      // 3. If exist, check to database if there's an existing account with different password
      this.parseService.existingCheck(resGooglePlugin.email).then(data => {
        if (data == null) {
          console.log('User not exist');
          var password = this.pwdEncryptor(resGooglePlugin.email, null);
          this.parseService.signup(resGooglePlugin, password, 'google').then(success => {
            console.log(success);
            loading.dismiss();
            this.presentToast(loginSuccess);
            this.viewCtrl.dismiss();
          }, err => {
            console.log(err);
            loading.dismiss();
            this.presentToast(loginFail);
          });
        }
        else {
          console.log('User exist');
          if (data.googleAuth == undefined && data.fbAuth == undefined) {
            console.log('User exist with Manual account');
            loading.dismiss();
            this.promptPassword(resGooglePlugin.email, data, 'manualtososmed', 'google');
          }
          else if (data.googleAuth != undefined) {
            console.log('User exist with Google account');
            this.parseService.login(resGooglePlugin.email, data.googleAuth).then(res => {
              loading.dismiss();
              if (res == 'success') {
                console.log('User login with Google');
                this.viewCtrl.dismiss();
                this.presentToast(loginSuccess);
              }
              else if (res == 'error') {
                console.log('Password has been changed, please input your new password');
                this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google');
              }
            }, err => {
              console.log(err);
              loading.dismiss();
              this.presentToast(loginFail);
            });
          }
          else if (data.fbAuth != undefined) {
            console.log('User exist with Facebook account');
            this.parseService.login(resGooglePlugin.email, data.fbAuth).then(resLogin => {
              loading.dismiss();
              if (resLogin == 'success') {
                this.parseService.existingLinking(resGooglePlugin.email, data.fbAuth, data, 'google').then(resLink => {
                  console.log(resLink);
                  if (resLink == 'Linking success') {
                    console.log('User login with Google');
                    loading.dismiss();
                    this.viewCtrl.dismiss();
                    this.presentToast(loginSuccess);
                  }
                  else if (resLink == 'Linking error') {
                    loading.dismiss();
                    this.presentToast(loginFail);
                  }
                });
              }
              else if (resLogin == 'error') {
                console.log('Password has been changed, please input your new password');
                this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google');
              }
            });
          }
        }
      });
    }).catch(err => {
      console.log(err);
      loading.dismiss();
      this.presentToast(loginFail);
    });
  }

  private facebookLogin() {
    var loginLoading; var invalid; var loginSuccess; var loginFail;
    this.translate.get('LOADING_LOG_IN').subscribe(value => { loginLoading = value; });
    this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(value => { invalid = value; });
    this.translate.get('LOG_IN_SUCCESS').subscribe(value => { loginSuccess = value; });
    this.translate.get('LOG_IN_FAIL').subscribe(value => { loginFail = value; });

    let loading = this.loadingCtrl.create({
      content: loginLoading
    });

    this.facebook.login(['public_profile', 'email']).then(resFbPlugin => {
      this.facebook.api('/me?fields=id,email,name,first_name,last_name,gender,birthday', ['public_profile', 'email', 'user_birthday']).then(profile => {
        loading.present();

        // Step for facebook login:
        // 1. Check existing first
        // 2. If null, then user signed up
        // 3. If exist, check to database if there's an existing account with different password
        this.parseService.existingCheck(profile.email).then(data => {
          if (data == null) {
            console.log('User not exist');
            var password = this.pwdEncryptor(profile.email, null);
            this.parseService.signup(profile, password, 'facebook').then(success => {
              console.log(success);
              loading.dismiss();
              this.presentToast(loginSuccess);
              this.viewCtrl.dismiss();
            }, err => {
              console.log(err);
              loading.dismiss();
              this.presentToast(loginFail);
            });
          }
          else {
            console.log('User exist');
            if (data.fbAuth == undefined && data.googleAuth == undefined) {
              console.log('User exist with Manual account');
              loading.dismiss();
              this.promptPassword(profile.email, data, 'manualtososmed', 'facebook');
            }
            else if (data.fbAuth != undefined) {
              console.log('User exist with Faceboook account');
              this.parseService.login(profile.email, data.fbAuth).then(res => {
                loading.dismiss();
                if (res == 'success') {
                  console.log('User login with Facebook');
                  this.viewCtrl.dismiss();
                  this.presentToast(loginSuccess);
                }
                else if (res == 'error') {
                  console.log('Password has been changed, please input your new password');
                  this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook');
                }
              }, err => {
                console.log(err);
                loading.dismiss();
                this.presentToast(loginFail);
              });
            }
            else if (data.googleAuth != undefined) {
              console.log('User exist with Google account');
              this.parseService.login(profile.email, data.googleAuth).then(resLogin => {
                if (resLogin == 'success') {
                  this.parseService.existingLinking(profile.email, data.googleAuth, data, 'facebook').then(resLink => {
                    console.log(resLink);
                    if (resLink == 'Linking success') {
                      console.log('User login with Facebook');
                      loading.dismiss();
                      this.presentToast(loginSuccess);
                      this.viewCtrl.dismiss();
                    }
                    else if (resLink == 'Linking error') {
                      loading.dismiss();
                      this.presentToast(loginFail);
                    }
                  });
                }
                else if (resLogin == 'error') {
                  console.log('Password has been changed, please input your new password');
                  this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook');
                }
              });
            }
          }
        });
      });
    }, err => {
      console.log(err);
      loading.dismiss();
      this.presentToast(loginFail);
    });
  }

  forgotPassword() {
    let modal = this.modalCtrl.create('ForgotPasswordPage');
    modal.present();
  }

  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000,
      position: 'bottom'
    });

    toast.present();
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  // facebookLogin() {

  //   let loading = this.loadingCtrl.create({
  //     content: 'Logging In, Please Wait..'
  //   });
  //   loading.present();

  //   this.facebook.login(['public_profile', 'user_friends', 'email']).then(success => {
  //     console.log(success);
  //     let expDate = new Date(new Date().getTime() + success.authResponse.expiresIn * 1000).toISOString;

  //     let facebookAuthData = {
  //       id: success.authResponse.userID,
  //       access_token: success.authResponse.accessToken,
  //       expiration_date: expDate
  //     };

  //     console.log(facebookAuthData);
  //     let loading = this.loadingCtrl.create({
  //       content: 'Logging In, Please Wait..'
  //     });
  //     loading.present();
  //     this.parseService.facebookLogin(facebookAuthData)
  //       .then(success => {
  //         console.log(success);
  //         loading.dismiss();
  //         this.presentToast("Logged in successfully!");
  //         this.viewCtrl.dismiss()
  //       }, err => {
  //         console.log(err);
  //         loading.dismiss();
  //         this.presentToast("Login with facebook failed, please try again")
  //       })
  //   }, err => {
  //     console.log(err);
  //     this.presentToast("Login failed")
  //   })
  // }
}
