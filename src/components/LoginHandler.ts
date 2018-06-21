/**
 * Created by wiyantotan on 12/22/17.
 */
import { CommonHandler } from './CommonHandler';
import { Component } from '@angular/core';
import {
    NavController,
    NavParams,
    ModalController,
    LoadingController,
    ToastController,
    AlertController,
    ViewController
} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { ParseService } from '../providers/parse-service';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { GlobalConfigurationService } from '../providers/global-configuration-service';
import {Geolocation} from "@ionic-native/geolocation";

@Component({
    providers: [Facebook]
})
export class LoginHandler extends CommonHandler {


    constructor(protected navCtrl: NavController,
                protected navParams: NavParams,
                protected modalCtrl: ModalController,
                protected alertCtrl: AlertController,
                protected viewCtrl: ViewController,
                protected loadingCtrl: LoadingController,
                protected toastCtrl: ToastController,
                protected translate: TranslateService,
                protected parseService: ParseService,
                protected facebook: Facebook,
                protected googlePlus: GooglePlus,
                protected geolocation: Geolocation,
                protected globalConfig: GlobalConfigurationService) {
        super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);
    }

    protected manualLogin(pUsername: string, pPassword: string, closePageType: number, rootPageLoaded: any) {
        var loginLoading; var invalid; var loginSuccess; var loginFail;
        this.translate.get('LOADING_LOG_IN').subscribe(value => { loginLoading = value; });
        this.translate.get('INVALID_USERNAME_PASSWORD').subscribe(value => { invalid = value; });
        this.translate.get('LOG_IN_SUCCESS').subscribe(value => { loginSuccess = value; });
        this.translate.get('LOG_IN_FAIL').subscribe(value => { loginFail = value; });

        if (pUsername == '' || pUsername == null || pPassword == '' || pPassword == null) {
            this.presentToast(invalid);
        }
        else {
            let loading = this.loadingCtrl.create({
                content: loginLoading
            });
            loading.present();

            let username = pUsername.toLowerCase();
            let password = this.pwdEncryptor(username, pPassword);

            // Step for manual login:
            // 1. Login first
            // 2. If success, then user logged in
            // 3. if error, check to database if there's an existing account with different password
            this.parseService.login(username, password).then(res => {
                console.log("res", res);
                if (res == 'success') {
                    this.parseService.existingCheck(username).then(data => {
                        if (data == null) {
                            console.log('User not exist');
                            loading.dismiss();
                            if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                this.viewCtrl.dismiss();
                            } else {
                                this.navCtrl.popToRoot();
                                this.navCtrl.setRoot(rootPageLoaded);
                            }
                            this.presentToast(loginSuccess);
                        }
                        else {
                            console.log('User exist');
                            this.parseService.existingLinking(username, password, data, 'manual').then(resLink => {
                                console.log(resLink);
                                if (resLink == 'Linking success') {
                                    console.log('User login with Google');
                                    loading.dismiss();
                                    if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                        this.viewCtrl.dismiss();
                                    } else {
                                        this.navCtrl.popToRoot();
                                        this.navCtrl.setRoot(rootPageLoaded);
                                    }
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

    protected googleLogin(closePageType: number, rootPageLoaded: any) {
        var signupLoading; var signupSuccess; var signupFail;
        this.translate.get('LOADING_SIGN_UP').subscribe(value => { signupLoading = value; });
        this.translate.get('SIGN_UP_SUCCESS').subscribe(value => { signupSuccess = value; });
        this.translate.get('SIGN_UP_FAIL').subscribe(value => { signupFail = value; });

        let loading = this.loadingCtrl.create({
            content: signupLoading
        });
        loading.present();

        this.googlePlus.login({
            'webClientId': this.globalConfig.googleWebClientId,
            'offline': true
        }).then(resGooglePlugin => {

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
                        if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                            this.viewCtrl.dismiss();
                        } else {
                            this.navCtrl.popToRoot();
                            this.navCtrl.setRoot(rootPageLoaded);
                        }
                        this.presentToast(signupSuccess);
                    }, err => {
                        console.log(err);
                        loading.dismiss();
                        this.presentToast(signupFail);
                    });
                } else {
                    console.log('User exist');
                    if (data.googleAuth == undefined && data.fbAuth == undefined) {
                        console.log('User exist with Manual account');
                        loading.dismiss();
                        this.promptPassword(resGooglePlugin.email, data, 'manualtososmed', 'google', closePageType, rootPageLoaded);
                    } else if (data.googleAuth != undefined) {
                        console.log('User exist with Google account');
                        this.parseService.login(resGooglePlugin.email, data.googleAuth).then(res => {
                            loading.dismiss();
                            if (res == 'success') {
                                console.log('User login with Google');
                                if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                    this.viewCtrl.dismiss();
                                } else {
                                    this.navCtrl.popToRoot();
                                    this.navCtrl.setRoot(rootPageLoaded);
                                }
                                this.presentToast(signupSuccess);
                            } else if (res == 'error') {
                                console.log('Password has been changed, please input your new password');
                                this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google', closePageType, rootPageLoaded);
                            }
                        }, err => {
                            console.log(err);
                            loading.dismiss();
                            this.presentToast(signupFail);
                        });
                    } else if (data.fbAuth != undefined) {
                        console.log('User exist with Facebook account');
                        this.parseService.login(resGooglePlugin.email, data.fbAuth).then(resLogin => {
                            loading.dismiss();
                            if (resLogin == 'success') {
                                this.parseService.existingLinking(resGooglePlugin.email, data.fbAuth, data, 'google').then(resLink => {
                                    console.log(resLink);
                                    if (resLink == 'Linking success') {
                                        console.log('User login with Google');
                                        loading.dismiss();
                                        if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                            this.viewCtrl.dismiss();
                                        } else {
                                            this.navCtrl.popToRoot();
                                            this.navCtrl.setRoot(rootPageLoaded);
                                        }
                                        this.presentToast(signupSuccess);
                                    } else if (resLink == 'Linking error') {
                                        loading.dismiss();
                                        this.presentToast(signupFail);
                                    }
                                });
                            } else if (resLogin == 'error') {
                                console.log('Password has been changed, please input your new password');
                                this.promptPassword(resGooglePlugin.email, data, 'manualtososmedchangepwd', 'google', closePageType, rootPageLoaded);
                            }
                        });
                    }
                }
            });
        }).catch(err => {
            console.log(err);
            loading.dismiss();
            this.presentToast(signupFail);
        });
    }

    protected facebookLogin(closePageType: number, rootPageLoaded: any) {
        var signupLoading; var signupSuccess; var signupFail;
        this.translate.get('LOADING_SIGN_UP').subscribe(value => { signupLoading = value; });
        this.translate.get('SIGN_UP_SUCCESS').subscribe(value => { signupSuccess = value; });
        this.translate.get('SIGN_UP_FAIL').subscribe(value => { signupFail = value; });

        let loading = this.loadingCtrl.create({
            content: signupLoading
        });
        loading.present();

        console.log("start facebook login!");
        this.facebook.login(['public_profile', 'email']).then(resFbPlugin => {
            this.facebook.api('/me?fields=id,email,name,first_name,last_name,gender,birthday', ['public_profile', 'email', 'user_birthday']).then(profile => {
                console.log(JSON.stringify(profile));

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
                            if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                this.viewCtrl.dismiss();
                            } else {
                                this.navCtrl.popToRoot();
                                this.navCtrl.setRoot(rootPageLoaded);
                            }
                            this.presentToast(signupSuccess);
                        }, err => {
                            console.log(err);
                            loading.dismiss();
                            this.presentToast(signupFail);
                        });
                    } else {
                        console.log('User exist');
                        if (data.fbAuth == undefined && data.googleAuth == undefined) {
                            console.log('User exist with Manual account');
                            loading.dismiss();
                            this.promptPassword(profile.email, data, 'manualtososmed', 'facebook', closePageType, rootPageLoaded);
                        } else if (data.fbAuth != undefined) {
                            console.log('User exist with Faceboook account');
                            this.parseService.login(profile.email, data.fbAuth).then(res => {
                                loading.dismiss();
                                if (res == 'success') {
                                    console.log('User login with Facebook');
                                    if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                        this.viewCtrl.dismiss();
                                    } else {
                                        this.navCtrl.popToRoot();
                                        this.navCtrl.setRoot(rootPageLoaded);
                                    }
                                    this.presentToast(signupSuccess);
                                } else if (res == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook', closePageType, rootPageLoaded);
                                }
                            }, err => {
                                console.log(err);
                                loading.dismiss();
                                this.presentToast(signupFail);
                            });
                        } else if (data.googleAuth != undefined) {
                            console.log('User exist with Google account');
                            this.parseService.login(profile.email, data.googleAuth).then(resLogin => {
                                if (resLogin == 'success') {
                                    this.parseService.existingLinking(profile.email, data.googleAuth, data, 'facebook').then(resLink => {
                                        console.log(resLink);
                                        if (resLink == 'Linking success') {
                                            console.log('User login with Facebook');
                                            loading.dismiss();
                                            if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                                this.viewCtrl.dismiss();
                                            } else {
                                                this.navCtrl.popToRoot();
                                                this.navCtrl.setRoot(rootPageLoaded);
                                            }
                                            this.presentToast(signupSuccess);
                                        } else if (resLink == 'Linking error') {
                                            loading.dismiss();
                                            this.presentToast(signupFail);
                                        }
                                    });
                                } else if (resLogin == 'error') {
                                    console.log('Password has been changed, please input your new password');
                                    this.promptPassword(profile.email, data, 'manualtososmedchangepwd', 'facebook', closePageType, rootPageLoaded);
                                }
                            });
                        }
                    }
                });
            });
        }, err => {
            console.log(err);
            loading.dismiss();
            this.presentToast(signupFail);
        });
    }

    private promptPassword(email, existingCheckData, method, platform, closePageType: number, rootPageLoaded: any) {
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
                                            if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                                this.viewCtrl.dismiss();
                                            } else {
                                                this.navCtrl.popToRoot();
                                                this.navCtrl.setRoot(rootPageLoaded);
                                            }
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
        } else if (method == 'manualtososmedchangepwd') {
            let alert = this.alertCtrl.create({
                title: linkAccount,
                message: msgChangePassword,
                inputs: [{
                    name: 'password',
                    placeholder: pwd,
                    type: 'password'
                }],
                buttons: [{
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
                                        if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                                            this.viewCtrl.dismiss();
                                        } else {
                                            this.navCtrl.popToRoot();
                                            this.navCtrl.setRoot(rootPageLoaded);
                                        }
                                        this.presentToast(signupSuccess);
                                    } else if (resLink == 'Linking error') {
                                        loading.dismiss();
                                        this.presentToast(signupFail);
                                    }
                                });
                            } else if (resLogin == 'error') {
                                console.log('Password has been changed, please input your new password');
                                loading.dismiss();
                                this.presentToast(signupFail);
                            }
                        });
                    }
                }]
            });
            alert.present();
        }
    }

    protected signUpProcess(authData, pwd, method, closePageType: number, rootPageLoaded: any) {
        console.log(authData);
        var signupLoading; var signupSuccess; var signupFail;
        this.translate.get('LOADING_SIGN_UP').subscribe(value => { signupLoading = value; });
        this.translate.get('SIGN_UP_SUCCESS').subscribe(value => { signupSuccess = value; });
        this.translate.get('SIGN_UP_FAIL').subscribe(value => { signupFail = value; });

        let loading = this.loadingCtrl.create({
            content: signupLoading
        });
        loading.present();

        this.parseService.existingCheck(authData.email).then(data => {
            if (data == null) {
                console.log('User not exist');
                this.parseService.signup(authData, pwd, method).then(success => {
                    console.log(success);
                    loading.dismiss();
                    if(closePageType == GlobalConfigurationService.CLOSE_PAGE_TYPE.DISMISS_MODAL) {
                        this.viewCtrl.dismiss();
                    } else {
                        this.navCtrl.popToRoot();
                        this.navCtrl.setRoot(rootPageLoaded);
                    }
                    this.presentToast(signupSuccess);
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
                    this.promptPassword(authData.email, data, 'manualtososmed', method, closePageType, rootPageLoaded);
                }
                else if (data.googleAuth != undefined || data.fbAuth != undefined) {
                    console.log('User exist with Google or Facebook account');
                    loading.dismiss();
                    this.promptPassword(authData.email, data, 'sosmedtomanual', method, closePageType, rootPageLoaded);
                }
            }
        });
    }


    private pwdEncryptor(email, pwd) {
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

    private pwdDecryptor(pwd) {
        // decrypt password
        var decrypted = pwd;
        return decrypted;
    }

    private forgotPassword() {
        let modal = this.modalCtrl.create('ForgotPasswordPage');
        modal.present();
    }
}