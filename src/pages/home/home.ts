import {
	Component,
	ViewChild
} from '@angular/core';
import {
	NavController,
	NavParams,
	ModalController,
	Nav,
	Navbar,
	LoadingController,
	ToastController,
	PopoverController,
	ViewController,
	IonicPage
} from 'ionic-angular';
import {
	AutocompletePage
} from '../autocomplete-page/autocomplete-page';
import {
	SearchResultsPage
} from '../search-results/search-results';
import {
	Geolocation
} from '@ionic-native/geolocation'
import {
	ParseService
} from '../../providers/parse-service'
import {
	DomSanitizer
} from '@angular/platform-browser'
import * as moment from 'moment';
import {
	TranslateService
} from '@ngx-translate/core';
import {CommonHandler} from '../../components/CommonHandler';
import {GlobalConfigurationService} from '../../providers/global-configuration-service';
import {CalendarModalPage} from "../calendar-modal/calendar-modal";
// import {MbscRange, MbscRangeOptions} from "@mobiscroll/angular";

declare var google: any;

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})

export class HomePage extends CommonHandler {
	@ViewChild(Nav) nav: Nav;
	@ViewChild(Navbar) navBar: Navbar;
	// @ViewChild('rangeDate') rangeDate: MbscRange;
	checkInDate: any = moment().format();
	// checkInOptions: MbscRangeOptions = {
	// 	returnFormat: 'moment'
	// }
	minDate: any = new Date().toISOString();
	maxDate: any = new Date().toISOString();
	labelCheckInDate: string;
	searchMode: string;
	nights: number;
	duration: number = 1;
	guestQty: number = 1;
	roomQty: number = 1;
	options: any;
	kilometers: any = 200;
	priceRange: any;
	location: any = {
		lat: '',
		lng: ''
	};
	address;
	images = [
		'assets/images/background-image/bg-transit.jpg',
		'assets/images/background-image/BG7.png',
		'assets/images/background-image/BG3.png',
		'assets/images/background-image/BG4.png',
		'assets/images/background-image/BG5.png'
	];
	isSearchModeTransit = false;
	isSearchModeOneNight = false;
	isSearchMode24Hours = false;

	constructor(protected navCtrl: NavController,
				protected modalCtrl: ModalController,
				protected loadingCtrl: LoadingController,
				protected viewCtrl: ViewController,
				protected toastCtrl: ToastController,
				protected geolocation: Geolocation,
				protected popoverCtrl: PopoverController,
				public parseService: ParseService,
				public navParams: NavParams,
				public sanitizer: DomSanitizer,
				protected translate: TranslateService,
				protected globalConfig: GlobalConfigurationService) {

		super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);

		this.address = '';
		this.options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		this.priceRange = {
			lower: 2800000,
			upper: 6150000
		};

		// this.searchMode = navParams.get('mode');
		// Hard code hanya 1 Night aja
		this.searchMode = "2";
		//console.log(moment().utcOffset(this.minDate).minute());

		// if(parseInt(this.searchMode) != GlobalConfigurationService.SEARCH_TYPE.SRC_1NIGHT) {
		let startMin = Math.ceil(moment().utcOffset(this.minDate).minute() / 5) * 5;
		if (startMin == 60) {
			startMin = 0;
			this.checkInDate = moment().utcOffset(this.minDate).local().startOf('hour').add(1, 'hours').minutes(startMin).format();
		} else {
			this.checkInDate = moment().utcOffset(this.minDate).local().startOf('hour').minutes(startMin).format();
		}

		this.labelCheckInDate = moment().utcOffset(this.checkInDate).local().format('DD/MM/YYYY');

		this.maxDate = moment().utcOffset(this.maxDate).add(1, 'day').local().format();
		this.minDate = moment().utcOffset(this.minDate).local().format();

		console.log("searchMode: " + this.searchMode);
		console.log("src: " + GlobalConfigurationService.SEARCH_TYPE.SRC_TRANSIT);

		switch (parseInt(this.searchMode)) {
			case GlobalConfigurationService.SEARCH_TYPE.SRC_TRANSIT:
				GlobalConfigurationService.SEARCH_MODE_CURRENT = GlobalConfigurationService.SEARCH_TYPE.SRC_TRANSIT;
				this.isSearchModeTransit = true;
				break;
			case GlobalConfigurationService.SEARCH_TYPE.SRC_24HOURS:
				GlobalConfigurationService.SEARCH_MODE_CURRENT = GlobalConfigurationService.SEARCH_TYPE.SRC_24HOURS;
				this.isSearchMode24Hours = true;
				break;
			case GlobalConfigurationService.SEARCH_TYPE.SRC_1NIGHT:
				GlobalConfigurationService.SEARCH_MODE_CURRENT = GlobalConfigurationService.SEARCH_TYPE.SRC_1NIGHT;
				this.isSearchModeOneNight = true;
				break;
		}

		// Hardcode untuk klikpegi jadinya untuk halaman search pakai button warna biru aja.
		this.isSearchModeTransit = true;
		this.isSearchMode24Hours = false;
		this.isSearchModeOneNight = false;
	}

	ionViewDidLoad() {
		console.log('this is search page');
		this.navBar.backButtonClick = () => {
			this.navCtrl.pop({
				animate: false,
				animation: 'ios-transition',
				duration: 500
			})
		}
	}

	showAddressModal() {
		let modal = this.modalCtrl.create(AutocompletePage);
		modal.onDidDismiss(data => {
			if (data === 'nearby') {
				console.log('nearby mode');
				this.address = 'Nearby'
			} else if (data !== undefined) {
				this.address = data;
				console.log(data)
			} else {
				console.log("nothing happened, hehe")
			}
		});
		modal.present();
	}

	opencal() {
		// const options: CalendarModalOptions = {
		//     title: 'BASIC',
		// };
		// let myCalendar =  this.modalCtrl.create(CalendarModal, {
		//     options: options
		// });

		let myCalendar;
		this.translate.get('SELECT_DATE').subscribe(value => {
			console.log(value);
			myCalendar = this.modalCtrl.create("CalendarModalPage", {
				date: moment(this.checkInDate).format('YYYY-MM-DD'),
				label: value
			});

			myCalendar.present();

			myCalendar.onDidDismiss((date: any) => {
				if (typeof date !== 'undefined') {
					this.checkInDate = date.format();
					this.labelCheckInDate = date.format('DD/MM/YYYY');
				}
			});
		});
	}
	// openCalMobiScroll() {
	// 	this.rangeDate.instance.show();
	// }
	// setRangeDate(event: any) {
	// 	let timeRange = event.inst.getVal();
	// 	let momCheckIn = moment(timeRange[0]);
	// 	this.checkInDate = momCheckIn.format();
	// 	this.labelCheckInDate = momCheckIn.format('DD/MM/YYYY');
	// }

	searchRooms(radius, time, placeID, duration, guest, room) {

		var searchLoading;

		let geocoder = new google.maps.Geocoder();
		let location = '';
		let range = radius || 1;
		let self = this;
		let sekarang = new Date().toISOString()

		let rightNow = moment().format(sekarang)
		let checkInDate = moment().format(this.checkInDate);
		// if(parseInt(this.searchMode) == GlobalConfigurationService.SEARCH_TYPE.SRC_1NIGHT) {
		//     time = moment().utcOffset(time).local().format();
		// }
		console.log(time);
		if (placeID !== undefined) {
			this.translate.get('LOADING').subscribe(value => {
				searchLoading = value;
			});
			let loading = this.loadingCtrl.create({
				spinner: 'hide',
				content: searchLoading,
			});

			loading.present();
			console.log('masuk1x');
			this.geocodePosition(geocoder, placeID, 'place', function (results) {
				console.log(results);
				loading.dismiss()
				self.navCtrl.push(SearchResultsPage, {
					location: results,
					mode: self.searchMode,
					radius: range,
					checkIn: time,
					duration: duration,
					guest: guest,
					room: room,
				})
			})
			console.log('masuk2x');
		} else {
			this.translate.get('LOADING_NEARBY_PROPERTIES').subscribe(value => {
				searchLoading = value;
			});
			let loading = this.loadingCtrl.create({
				spinner: 'hide',
				content: searchLoading,
			});

			loading.present()
			console.log('masuk3x');
			this.myLocation().then(result => {
				loading.dismiss();
				let latLng = new google.maps.LatLng(result.coords.latitude, result.coords.longitude);
				console.log('masuk4x');
				this.geocodePosition(geocoder, latLng, 'location', function (results) {
					self.navCtrl.push(SearchResultsPage, {
						location: results,
						mode: self.searchMode,
						radius: range,
						nearby: true,
						checkIn: time,
						duration: duration,
						guest: guest,
						room: room
					})
				})
				console.log('masuk5x');
			}, err => {
				loading.dismiss();
				this.presentToast(err.message);
			});
		}
	}

	geocodePosition(geocoder, params, type, callback) {
		let geocoderRequest;
		switch (type) {
			case 'place': {
				geocoderRequest = {
					'placeId': params
				};
				break
			}
			case 'location': {
				geocoderRequest = {
					'location': params
				};
				break
			}
			default: {
				window.alert('no geocode type found');
				break
			}
		}
		let location: any = '';
		geocoder.geocode(geocoderRequest, function (results, status) {
			console.log(status);
			if (status === 'OK') {
				if (results[0]) {
					// let length = results[0].address_components.length
					// location.lat = results[0].geometry.location.lat();
					// location.lng = results[0].geometry.location.lng();
					// if(length > 2){
					//   location.name = results[0].address_components[length-2].long_name + ', ' + results[0].address_components[length-1].long_name
					// }
					// else {
					//   location.name = results[0].formatted_address
					// }
					location = results[0];
					callback(location)
				} else {
					console.log('no results found');
					location = results[0];
					callback(location)
				}
			} else {
				// window.alert('Geocoder failed due to: ' + status);
				console.log("Query over limit")
				this.presentToast("Get location failed, please try again")
			}
		})
	}

	showValue(price) {
		// This function is called on change by (ionChange) from the range directive
		console.log(price)
	}

	presentToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 2000,
			position: 'bottom'
		});

		toast.present()
	}

	mockLoc() {
		let options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		}
		this.geolocation.getCurrentPosition(options).then((resp) => {
			console.log(resp)
		}).catch((error) => {
			console.log('Error getting location', error);
		});
	}

	sanitizeImage(image) {
		// console.log(this.sanitizer.bypassSecurityTrustStyle('url(' + image + ')'))
		return (this.sanitizer.bypassSecurityTrustStyle('url(' + image + ')'))
	}

	renderLogo() {
		return this.gLogoImagePath;
	}

	getClassSrcMode(domContent: any) {
		return 'cls-search-mode' + this.searchMode;
	}

	presentPopover(myEvent) {
		let popover = this.popoverCtrl.create("PopoverPage", {
			data: [2]
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
