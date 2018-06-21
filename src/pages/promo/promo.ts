/**
 * Created by wiyantotan on 12/21/17.
 */
import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
    selector: 'page-promo',
    templateUrl: 'promo.html',
})
export class PromoPage {
    public items : Array<any> = [];
    constructor(private navCtrl: NavController, private popoverCtrl: PopoverController,public http: Http) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PromoPage');
        this.load();
    }

    load() : void
    {
        this.http
            //.get('http://localhost/ionic_php_bio/retrieve_data.php')
            .get('http://localhost/klikmgnew/public_html/index.php?r=mg/tghproperty')
            .map(res =>res.json())
            .subscribe((data : any) =>
                {
                    this.items = data;
                });
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

    /**
     * Allow navigation to the AddTechnologyPage for creating a new entry
     *
     * @public
     * @method addEntry
     * @return {None}
     */
    addEntry() : void
    {
        this.navCtrl.push('InputBiodataPage');
    }




    /**
     * Allow navigation to the AddTechnologyPage for amending an existing entry
     * (We supply the actual record to be amended, as this method's parameter,
     * to the AddTechnologyPage
     *
     * @public
     * @method viewEntry
     * @param param 		{any} 			Navigation data to send to the next page
     * @return {None}
     */
    viewEntry(param : any) : void
    {
        this.navCtrl.push('InputBiodataPage', param);
    }

}