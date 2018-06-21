/**
 * Created by wiyantotan on 12/21/17.
 */
/**
 * Created by wiyantotan on 12/21/17.
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-inbox',
    templateUrl: 'inbox.html',
})
export class InboxPage {
    constructor(private navCtrl: NavController, private popoverCtrl: PopoverController) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad InboxPage');
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
}