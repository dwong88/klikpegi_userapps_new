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
    selector: 'page-method-transfer',
    templateUrl: 'method-transfer.html'
})
export class MethodTransferPage extends CommonHandler {
    @ViewChild(Navbar) navBar: Navbar;
    @ViewChild(Nav) nav: Nav;

    bookingData: any = ''
    transitPrice: number = 0
    hour24Price: number = 0
    nightPrice: number = 0

    bank;
    public footerIsHidden: boolean;

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

    bookRoom() {
        var bookingLoading; var bookingSuccess;
        this.translate.get('BOOKING_ROOM').subscribe(value => { bookingLoading = value; });
        this.translate.get('BOOKING_SUCCESS').subscribe(value => { bookingSuccess = value; });

        let self = this;
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: bookingLoading,
        });

        if (this.parseService.getCurrentUser() != null) {
            console.log(this.bookingData);
            loading.present();
            this.parseService.bookRoom(this.bookingData).then(success => {
                //this.parseService.sendEmail(this.bookingData, "bookingPlacement");
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: bookingSuccess,
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
                this.navCtrl.popToRoot().then(
                    this.navCtrl.parent.select(2)
                );
            }, err => {
                loading.dismiss();
                let toast = this.toastCtrl.create({
                    message: err,
                    duration: 1000,
                    position: 'bottom'
                });
                toast.present();
            })
        } else {
            this.presentAlert();
        }
    }

    presentAlert() {
        var loginTitle; var loginSubTitle; var loginBtn; var registerBtn; var cancelBtn;
        this.translate.get('LOG_IN_REQUIRED').subscribe(value => { loginTitle = value; });
        this.translate.get('LOG_IN_TO_BOOK_ROOM').subscribe(value => { loginSubTitle = value; });
        this.translate.get('LOG_IN').subscribe(value => { loginBtn = value; });
        this.translate.get('REGISTER').subscribe(value => { registerBtn = value; });
        this.translate.get('CANCEL').subscribe(value => { cancelBtn = value; });

        let alert = this.alertCtrl.create({
            title: loginTitle,
            subTitle: loginSubTitle,
            buttons: [
                {
                    text: loginBtn,
                    handler: () => {
                        let login = this.modalCtrl.create("LoginPage");
                        login.present();
                    }
                },
                {
                    text: registerBtn,
                    handler: () => {
                        let register = this.modalCtrl.create("SignUpPage");
                        register.present();
                    }
                },
                cancelBtn
            ]
        });
        alert.present();
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
