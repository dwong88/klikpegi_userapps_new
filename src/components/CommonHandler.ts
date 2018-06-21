/**
 * Created by wiyantotan on 12/22/17.
 */
import { ToastController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { GlobalConfigurationService } from '../providers/global-configuration-service';
import {Geolocation} from "@ionic-native/geolocation";
import {TranslateService} from "@ngx-translate/core";

export class CommonHandler {
    protected gLogoImagePath: string;
    protected searchModeClass: string = "";
	protected currencySymbol: string = "";

    constructor(protected toastCtrl: ToastController,
                protected viewCtrl: ViewController,
                protected globalConfig: GlobalConfigurationService,
                protected geolocation: Geolocation,
                protected translate: TranslateService) {

        this.gLogoImagePath = GlobalConfigurationService.GHOURS_LOGO_PATH;
		this.currencySymbol = GlobalConfigurationService.CURRENCY_SYMBOL;

        switch (GlobalConfigurationService.SEARCH_MODE_CURRENT) {
            case GlobalConfigurationService.SEARCH_TYPE.SRC_TRANSIT:
                this.searchModeClass = "g-search-mode0";
                break;
            case GlobalConfigurationService.SEARCH_TYPE.SRC_24HOURS:
                this.searchModeClass = "g-search-mode1";
                break;
            case GlobalConfigurationService.SEARCH_TYPE.SRC_1NIGHT:
                this.searchModeClass = "g-search-mode2";
                break;
        }
    }

    protected presentToast(text: string) {
        let toast = this.toastCtrl.create({
            message: text,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    }

    protected dismissModal() {
        this.viewCtrl.dismiss();
    }

    protected myLocation(): Promise<any> {
        let options = {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0
        };

        if(GlobalConfigurationService.DEVELOPMENT_MODE) {
            return new Promise( (resolve) => {
                resolve({
                    coords: {
                        latitude: -6.1082139,
                        longitude: 106.7803121
                    }
                });
            });
        } else {
            return this.geolocation.getCurrentPosition(options);
        }
    }

    protected splitTextToWords(text: string)
    {
        // WT: ikutin dari cara split di TruncateWordsPipe
        return text.split(/\s+/);
    }

    protected toggleShowLess(el: any, truncating: boolean) : boolean {
        let txt_more,
            txt_less;
        this.translate.get('MORE').subscribe(value => { txt_more = value; });
        this.translate.get('LESS').subscribe(value => { txt_less = value; });
        el.innerHTML = truncating? txt_less : txt_more;
        return !truncating;
    }
}