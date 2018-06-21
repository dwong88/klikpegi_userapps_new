import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController} from 'ionic-angular';
import { ParseService } from '../../providers/parse-service';
import { GlobalEventEmitterProvider } from '../../providers/global-event-emitter';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the EditProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  user : any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public parseService:ParseService,
              public globalEvent:GlobalEventEmitterProvider,
              public alertCtrl:AlertController,
              public loadingCtrl:LoadingController,
              public modalCtrl:ModalController,
              private translate: TranslateService
  ) {
    this.user = this.parseService.getCurrentUser()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  saveChanges() {
    console.log(this.user);

    var updateLoading; var updateSuccess;
    this.translate.get('LOADING_UPDATE').subscribe(value => { updateLoading = value; });
    this.translate.get('UPDATE_PROFILE_SUCCESS').subscribe(value => { updateSuccess = value; });

    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: updateLoading,
    });

    loading.present();
    this.parseService.editProfile(this.user).then(success => {
      loading.dismiss()
      this.presentAlert(updateSuccess);
    }, err => {
      this.presentAlert(err)
    })
  }

  presentAlert(text) {
    var updateStatus;
    this.translate.get('UPDATE_STATUS').subscribe(value => { updateStatus = value; });

    let alert = this.alertCtrl.create ({
      title : updateStatus,
      subTitle : text,
      buttons: ['OK']
    });

    alert.present()
  }

  editPassword() {
    let editPasswordModal = this.modalCtrl.create("EditPasswordModalPage");
    editPasswordModal.present();

    editPasswordModal.onDidDismiss( data => {
      console.log(data)
    })
  }

}
