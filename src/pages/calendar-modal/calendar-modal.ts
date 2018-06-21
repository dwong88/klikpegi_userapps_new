import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import * as moment from 'moment';

@IonicPage()
@Component({
    selector: 'calendar-modal',
    templateUrl: 'calendar-modal.html',
    providers: [Keyboard]
})
export class CalendarModalPage {
    date: any = moment().format();
    type: string = 'string';
    labelPick: string = 'tes';

    constructor(public navCtrl: NavController,
                public navParams: NavParams, public viewCtrl: ViewController, public plt: Platform,
                public keyboard: Keyboard,
                public toastCtrl: ToastController,
                public alertCtrl: AlertController) {
        this.date = this.navParams.get('date');
        this.labelPick = this.navParams.get('label');
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
    }

    dismissModal() {
        this.viewCtrl.dismiss();
    }

    pickDate() {
        if(typeof this.date == 'string') {
            this.viewCtrl.dismiss(moment(this.date, 'YYYY-MM-DD'));
        } else {
            this.viewCtrl.dismiss(this.date);
        }
    }

    onChange($event) {
        // console.log($event);
    }
}
