import {
    Component,
    ViewChild
} from '@angular/core';
import {
    IonicPage,
    App,
    NavController,
    NavParams,
    Navbar,
    ToastController,
    LoadingController,
    ViewController,
    AlertController,
    ModalController,
    Nav,
    PopoverController
} from 'ionic-angular';
import {
    ParseService
} from '../../providers/parse-service';
import { TranslateService } from '@ngx-translate/core';
import { CommonHandler } from '../../components/CommonHandler';
import {GlobalConfigurationService} from "../../providers/global-configuration-service";
import {Geolocation} from "@ionic-native/geolocation";

@IonicPage()
@Component({
    selector: 'page-payment-method',
    templateUrl: 'payment-method.html'
})
export class PaymentMethodPage extends CommonHandler {
    @ViewChild(Navbar) navBar: Navbar;
    @ViewChild(Nav) nav: Nav;

    bookingData: any = ''
    transitPrice: number = 0
    hour24Price: number = 0
    nightPrice: number = 0

    uniqueDigit
    bank;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public app: App,
        public parseService: ParseService,
        public toastCtrl: ToastController,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController,
        public modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        public popoverCtrl: PopoverController,
        public translate: TranslateService,
        protected geolocation: Geolocation,
        protected globalConfig: GlobalConfigurationService
    ) {
        super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);
        this.parseService.getGlobalSettings().then(data => {
            this.bank = data.bank[0];
            return this.bank;
        })
        this.bookingData = navParams.get('classDetail')
        console.log(this.bookingData.propDetail);
        this.bookingData.stayType = this.getStayingType(this.bookingData.mode);
        this.transitPrice = this.bookingData.priceList[this.bookingData.duration - 1].price * (100 - this.bookingData.discountRate) / 100;
        this.hour24Price = this.bookingData.pricing24 * (100 - this.bookingData.discountRate) / 100;
        this.nightPrice = this.bookingData.price * this.bookingData.duration * (100 - this.bookingData.discountRate) / 100;
        this.uniqueDigit = this.bookingData.uniqueCode;

        console.log("pricedetail");
        console.log(this.transitPrice);
        console.log(this.bookingData.roomQty);
        console.log(this.uniqueDigit);
    }

    ionViewDidLoad() {

        this.navBar.backButtonClick = (e: UIEvent) => {
            this.navCtrl.pop({
                animate: true,
                animation: 'ios-transition',
                direction: 'back'
            });
        }
    }

    getStayingType(code) {
        var transit; var hours; var night; var other;
        this.translate.get('TRANSIT').subscribe(value => { transit = value; });
        this.translate.get('HOURS').subscribe(value => { hours = value; });
        this.translate.get('NIGHT').subscribe(value => { night = value; });
        this.translate.get('OTHER').subscribe(value => { other = value; });

        switch (code.toString()) {
            case '0':
                return transit
            case '1':
                return '24 ' + hours
            case '2':
                return '1 ' + night
            default:
                return other
        }
    }

    showTotalPrice(price) {
        console.log(price);
    }

    paymethod(methodtype) {
        switch (methodtype) {
            case 1:
                console.log("Masuk 1a");
                this.navCtrl.push("MethodTransferPage", {
                    classDetail: this.bookingData
                });
                break;
            case 2:
                console.log("Masuk 2a");
                this.navCtrl.push("MethodCreditPage", {
                    classDetail: this.bookingData
                });
                break;
        }
    }

    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create("PopoverPage", {
            data: [4, 1, 2]
        },{
            cssClass: 'backdropOpacity'
        });
        popover.present({
            ev: myEvent
        });

        popover.onDidDismiss(data => {

        });
    }

}
