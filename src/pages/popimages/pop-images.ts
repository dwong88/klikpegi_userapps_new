import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the AmenitiesModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-pop-images-modal',
    templateUrl: 'pop-images.html',
})
export class PopImages {
    @ViewChild(Slides) slides: Slides;
    public listImages: any[];
    public theThumb: any;
    public tabIndex: number;
    public imgUrl: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.listImages = navParams.get("listImages");
        this.theThumb = navParams.get("theThumb");
        this.tabIndex = navParams.get("tabIndex");
        this.imgUrl = navParams.get("imgUrl");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PopImages index'+this.tabIndex);
    }

    dismissModal() {
        this.viewCtrl.dismiss()
    }
}
