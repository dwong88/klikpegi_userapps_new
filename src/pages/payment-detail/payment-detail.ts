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
import {
	Transfer,
	FileUploadOptions,
	TransferObject
} from '@ionic-native/transfer';
import {
	File
} from '@ionic-native/file';
import {
	TabsPage
} from '../../pages/tabs/tabs'
import {TranslateService} from '@ngx-translate/core';
import {CommonHandler} from '../../components/CommonHandler';
import {GlobalConfigurationService} from "../../providers/global-configuration-service";
import {Geolocation} from "@ionic-native/geolocation";
import {LoginPage} from '../../pages/login/login';
import {SignUpPage} from "../sign-up/sign-up";
import {InAppBrowser} from '@ionic-native/in-app-browser';

/**
 * Generated class for the PaymentConfirmationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-payment-detail',
	templateUrl: 'payment-detail.html',
	providers: [ParseService]
})
export class PaymentDetailPage extends CommonHandler {
	@ViewChild(Navbar) navBar: Navbar;
	@ViewChild(Nav) nav: Nav;

	bookingData: any = ''
	transitPrice: number = 0
	hour24Price: number = 0
	nightPrice: number = 0

	uniqueDigit
	bank;
	public footerIsHidden: boolean;
	public refWindow: any;
	public intervalWindow: any;

	constructor(public navCtrl: NavController,
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
				protected globalConfig: GlobalConfigurationService,
				public inAppbrowser: InAppBrowser) {
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

		this.footerIsHidden = false;

		console.log(this.hour24Price, this.nightPrice)

		this.generateUniqueCode();
		this.intervalWindow = false;
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
		var transit;
		var hours;
		var night;
		var other;
		this.translate.get('TRANSIT').subscribe(value => {
			transit = value;
		});
		this.translate.get('HOURS').subscribe(value => {
			hours = value;
		});
		this.translate.get('NIGHT').subscribe(value => {
			night = value;
		});
		this.translate.get('OTHER').subscribe(value => {
			other = value;
		});

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

	}

	public selectPaymentMethod() {
		var bookingLoading;
		var bookingSuccess;
		this.translate.get('BOOKING_ROOM').subscribe(value => {
			bookingLoading = value;
		});
		this.translate.get('BOOKING_SUCCESS').subscribe(value => {
			bookingSuccess = value;
		});

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

				// console.log("stringify success");
				// console.log(this.parseService.bookedRoomOrderId);
				// console.log(JSON.stringify(success));

				if (GlobalConfigurationService.DEVELOPMENT_MODE) {
					this.refWindow = window.open(GlobalConfigurationService.GHOURS_PAYMENT_URL + "/" + this.parseService.bookedRoomOrderId + "/" + GlobalConfigurationService.SRC_PAYMENT, '_blank', GlobalConfigurationService.IN_APP_BROWSER_OPTIONS);
				} else {
					this.refWindow = this.inAppbrowser.create(GlobalConfigurationService.GHOURS_PAYMENT_URL + "/" + this.parseService.bookedRoomOrderId + "/" + GlobalConfigurationService.SRC_PAYMENT, '_blank', GlobalConfigurationService.IN_APP_BROWSER_OPTIONS);
				}

				this.refWindow.on("loadstop").subscribe(event => {
					console.log("masuk subscribe loadstop");
					this.refWindow.executeScript({code: "localStorage.setItem( 'payment_status', '" + GlobalConfigurationService.PAYMENT_STATUS.NEW + "' );"});


					// Start an interval
					this.intervalWindow = setInterval((function () {
						var statusPayment: string = GlobalConfigurationService.PAYMENT_STATUS.NEW,
							isGetReturn = false;

						var inReturn = setInterval(() => {
							if (isGetReturn) {
								clearInterval(inReturn);

								// If a name was set, clear the interval and close the InAppBrowser.
								if (statusPayment != GlobalConfigurationService.PAYMENT_STATUS.NEW) {
									if (this.intervalWindow !== false)
										clearInterval(this.intervalWindow);
									this.refWindow.close();
								}
							}
						}, 300);

						// Execute JavaScript to check for the existence of a name in the
						// child browser's localStorage.
						this.refWindow.executeScript(
							{
								code: "localStorage.getItem( 'payment_status' )"
							},
							function (values) {
								isGetReturn = true;
								statusPayment = values[0];
							}
						);
					}).bind(this), 1000);
				});

				this.refWindow.on("exit").subscribe(event => {
					console.log("masuk subscribe exit");
					if (this.intervalWindow !== false) clearInterval(this.intervalWindow);
					this.navCtrl.popToRoot().then(() => {
						this.navCtrl.parent.select(2);
						// var selTab = this.navCtrl.parent.getSelected();
						// selTab.rootParams = {'statusCode': 2};
					});
				});
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

		//
		// this.navCtrl.push("PaymentMethodPage", {
		//     classDetail: this.bookingData
		// });
	}

	presentAlert() {
		var loginTitle;
		var loginSubTitle;
		var loginBtn;
		var registerBtn;
		var cancelBtn;
		this.translate.get('LOG_IN_REQUIRED').subscribe(value => {
			loginTitle = value;
		});
		this.translate.get('LOG_IN_TO_BOOK_ROOM').subscribe(value => {
			loginSubTitle = value;
		});
		this.translate.get('LOG_IN').subscribe(value => {
			loginBtn = value;
		});
		this.translate.get('REGISTER').subscribe(value => {
			registerBtn = value;
		});
		this.translate.get('CANCEL').subscribe(value => {
			cancelBtn = value;
		});

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

	// presentLoginModal() {
	//   var bookingLoading; var bookingSuccess;
	//   this.translate.get('BOOKING_ROOM').subscribe(value => { bookingLoading = value; });
	//   this.translate.get('BOOKING_SUCCESS').subscribe(value => { bookingSuccess = value; });
	//
	//   let self = this;
	//   let loading = this.loadingCtrl.create({
	//     spinner: 'hide',
	//     content: bookingLoading,
	//   });
	//   // this.navCtrl.push(LoginModalPage)
	//   let login = this.modalCtrl.create("LoginModalPage");
	//   login.present();
	//
	//   login.onDidDismiss(data => {
	//     if (this.parseService.getCurrentUser() != null) {
	//       loading.present()
	//       this.parseService.bookRoom(this.bookingData).then(success => {
	//         loading.dismiss()
	//         let toast = this.toastCtrl.create({
	//           message: bookingSuccess,
	//           duration: 1000,
	//           position: 'bottom'
	//         })
	//         toast.present();
	//         // this.navCtrl.setRoot(TabsPage)
	//         this.navCtrl.popToRoot().then(
	//           this.navCtrl.parent.select(1)
	//         );
	//       });
	//     }
	//
	//   });
	// }

	generateUniqueCode() {
		if (GlobalConfigurationService.KODE_UNIQUE == 0) {
			let random = Math.random() * 999;
			GlobalConfigurationService.KODE_UNIQUE = Math.floor(random);
		}
		this.uniqueDigit = GlobalConfigurationService.KODE_UNIQUE;
		this.bookingData.uniqueCode = GlobalConfigurationService.KODE_UNIQUE;
	}

	presentPopover(myEvent) {
		let popover = this.popoverCtrl.create("PopoverPage", {
			data: [4, 1, 2]
		}, {
			cssClass: 'backdropOpacity'
		});
		popover.present({
			ev: myEvent
		});

		popover.onDidDismiss(data => {

		});
	}

}
