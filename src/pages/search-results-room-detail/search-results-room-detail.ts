import {
  Component,
  ViewChild
} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    Navbar,
    LoadingController,
    AlertController,
    ViewController,
    ModalController,
    PopoverController, ToastController
} from 'ionic-angular';
import {
  ParseService
} from '../../providers/parse-service';
import {
  MyBookingsPage
} from '../../pages/my-bookings/my-bookings';
import {
  LoginPage
} from '../../pages/login/login';
import { TranslateService } from '@ngx-translate/core';
import {CommonHandler} from "../../components/CommonHandler";
import {GlobalConfigurationService} from "../../providers/global-configuration-service";
import {Geolocation} from "@ionic-native/geolocation";
import { TruncateModule } from 'ng2-truncate';

/**
 * Generated class for the SearchResultsRoomDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-results-room-detail',
  templateUrl: 'search-results-room-detail.html',
  providers: [ParseService]
})
export class SearchResultsRoomDetailPage extends CommonHandler {
  @ViewChild(Navbar) navBar: Navbar;
  id: String;
  roomDetail: any = '';
  bookTime: Number = 3;
  loadData: boolean = false;
  images: any[];
  amenities: any[];
  shownGroup: any = null;
  items: any = []
  smoking: boolean = false

  basicFacilities = [{
      id: 0,
      value: 0,
      imageA: "assets/images/basic-facilities/Refundable.png",
      imageB: "assets/images/basic-facilities/Non Refundable.png",
      title1: "NON_REFUNDABLE",
      title2: "REFUNDABLE"
    },
    {
      id: 1,
      value: 0,
      imageA: "assets/images/basic-facilities/WiFi.png",
      imageB: "assets/images/basic-facilities/No WiFi.png",
      title1: "NO_WIFI",
      title2: "FREE_WI-FI"
    },
    {
      id: 2,
      value: 0,
      imageA: "assets/images/basic-facilities/Breakfast.png",
      imageB: "assets/images/basic-facilities/No Breakfast.png",
      title1: "NO_BREAKFAST",
      title2: "FREE_BREAKFAST"
    },
    {
      id: 3,
      value: 0,
      imageA: "assets/images/basic-facilities/Smoking Room.png",
      imageB: "assets/images/basic-facilities/No Smoking.png",
      title1: "NO_SMOKING_ROOM",
      title2: "SMOKING_ROOM"
    },
  ]

  roomOverview = [{
      id: 0,
      value: '',
      image: 'assets/images/room-overview/Room Size.png',
      title: 'ROOM_SIZE'
    },
    {
      id: 1,
      value: '',
      image: 'assets/images/room-overview/Bed.png',
      title: 'BED_TYPE'
    },
  ]

  otherFacilities = [{
      id: 0,
      value: 0,
      title: 'WASHING_MACHINE'
    },
    {
      id: 1,
      value: 0,
      title: 'CLOTHES_DRYER'
    },
    {
      id: 2,
      value: 0,
      title: 'DISHWASHER'
    },
    {
      id: 3,
      value: 0,
      title: 'FAN'
    },
    {
      id: 4,
      value: 0,
      title: 'DVD/CD_PLAYER'
    },
    {
      id: 5,
      value: 0,
      title: 'DAILY_NEWSPAPER'
    },
    {
      id: 6,
      value: 0,
      title: 'INHOUSE_MOVIES'
    },
    {
      id: 7,
      value: 0,
      title: 'IN_ROOM_VIDEO_GAMES'
    },
    {
      id: 8,
      value: 0,
      title: 'INTERNET_ACCESS_WIFI_CHARGES_APPLY'
    },
    {
      id: 9,
      value: 0,
      title: 'INTERNET_ACCESS_LAN_COMPLIMENTARY'
    },
    {
      id: 10,
      value: 0,
      title: 'INTERNET_ACCESS_LAN_CHARGES_APPLY'
    },
    {
      id: 11,
      value: 0,
      title: 'KITCHENETTE'
    },
    {
      id: 12,
      value: 0,
      title: 'MINI_BAR'
    },
    {
      id: 13,
      value: 0,
      title: 'PRIVATE_POOL'
    },
    {
      id: 14,
      value: 0,
      title: 'SEPARATE_DINING_AREA'
    },
    {
      id: 15,
      value: 0,
      title: 'BALCONY_TERRACE'
    },
    {
      id: 16,
      value: 0,
      title: 'INTERCONNECTING_ROOMS_AVAILABLE'
    },
    {
      id: 17,
      value: 0,
      title: 'LUNCH'
    },
    {
      id: 18,
      value: 0,
      title: 'DINNER'
    },
    {
      id: 19,
      value: 0,
      title: 'COMPLIMENTARY_BOTTLED_WATER'
    },
    {
      id: 20,
      value: 0,
      title: 'EXECUTIVE_LOUNGE_ACCESS'
    },
    {
      id: 21,
      value: 0,
      title: 'BLACKOUT_CURTAINS'
    },
    {
      id: 22,
      value: 0,
      title: 'MOSQUITO_NET'
    },
    {
      id: 23,
      value: 0,
      title: 'SEATING_AREA'
    }
  ]

  roomFacilities = [{
      id: 0,
      value: 0,
      image: "assets/images/room-facilities/Hair Dryer.png",
      title: "HAIRDRYER"
    },
    {
      id: 1,
      value: 0,
      image: "assets/images/room-facilities/AC.png",
      title: "AIR_CONDITIONER"
    },
    {
      id: 2,
      value: 0,
      image: "assets/images/room-facilities/Safety Box.png",
      title: "SAFETY_BOX"
    },
    {
      id: 3,
      value: 0,
      image: "assets/images/room-facilities/TV.png",
      title: "TV"
    },
    {
      id: 4,
      value: 0,
      image: "assets/images/room-facilities/Microwave.png",
      title: "MICROWAVE"
    },
    {
      id: 5,
      value: 0,
      image: "assets/images/room-facilities/Coffee Tea Maker.png",
      title: "COFFEE/TEA_MAKER"
    },
    {
      id: 6,
      value: 0,
      image: "assets/images/room-facilities/Desk.png",
      title: "DESK"
    },
    {
      id: 7,
      value: 0,
      image: "assets/images/room-facilities/Ironing.png",
      title: "IRONING_FACILITY"
    },
    {
      id: 8,
      value: 0,
      image: "assets/images/room-facilities/Mini Fridge.png",
      title: "MINI_FRIDGE"
    }
  ]

  bathroomAmenities = [{
      id: 0,
      value: 0,
      image: "assets/images/bathroom-amenities/Private Bathroom.png",
      title: "PRIVATE_BATHROOM"
    },
    {
      id: 1,
      value: 0,
      image: "assets/images/bathroom-amenities/Hot Water.png",
      title: "HOT_WATER"
    },
    {
      id: 2,
      value: 0,
      image: "assets/images/bathroom-amenities/Shower.png",
      title: "Shower"
    },
    {
      id: 3,
      value: 0,
      image: "assets/images/bathroom-amenities/Toiletries.png",
      title: "TOILETRIES"
    },
    {
      id: 4,
      value: 0,
      image: "assets/images/bathroom-amenities/Bathtub.png",
      title: "BATHTUB"
    },
    {
      id: 5,
      value: 0,
      image: "assets/images/bathroom-amenities/Bathrobes.png",
      title: "BATHROBES"
    },
    {
      id: 6,
      value: 0,
      image: "assets/images/bathroom-amenities/Slippers.png",
      title: "SLIPPERS"
    }
  ]


    constructor(
        public navCtrl: NavController,
        public viewCtrl: ViewController,
        protected toastCtrl: ToastController,
        public navParams: NavParams,
        public parseService: ParseService,
        private loadingCtrl: LoadingController,
        public modalCtrl: ModalController,
        private alertCtrl: AlertController,
        private popoverCtrl: PopoverController,
        public translate: TranslateService,
        protected geolocation: Geolocation,
        protected globalConfig: GlobalConfigurationService)
    {
        super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);
        //this.id = navParams.data
        console.log(navParams.data)
        this.items = navParams.get("rules")
        console.log(JSON.stringify(this.items));
        this.roomDetail = navParams.get('classDetail');
        this.images = [{
            url: 'assets/images/p1.jpg'
        }, {
            url: 'assets/images/p2.jpg'
        }, {
            url: 'assets/images/p3.jpg'
        }]

        let basicFacilities = this.roomDetail.basicFacilities
        let roomFacilities = this.roomDetail.roomFacilities
        let roomOverview = this.roomDetail.roomOverview
        let bathroomAmenities = this.roomDetail.bathroomAmenities

        for (let item of basicFacilities) {
            this.basicFacilities[item.id].value = 1
        }

        for (let item of roomFacilities) {
            this.roomFacilities[item].value = 1
        }


        this.roomOverview[0].value = roomOverview[0]
        this.roomOverview[1].value = roomOverview[1]
        this.smoking = roomOverview[2]


        for (let item of bathroomAmenities) {
            this.bathroomAmenities[item].value = 1
        }

		GlobalConfigurationService.KODE_UNIQUE = 0;
    }

  ionViewDidLoad() {
    // this.navBar.backButtonClick = (e: UIEvent) => {
    //   this.navCtrl.pop({
    //     animate: true,
    //     animation: 'ios-transition',
    //     direction: 'back'
    //   })
    // }
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null
    } else {
      this.shownGroup = group
    }
  }

  isGroupShown(group) {
    return this.shownGroup === group
  }

  presentConfirm(room, interval, checkIn) {
    var loginTitle; var loginMessage; var cancel; var signin;
    this.translate.get('LOG_IN_REQUIRED').subscribe(value => { loginTitle = value; });
    this.translate.get('LOG_IN_REQUIRED_MESSAGE').subscribe(value => { loginMessage = value; });
    this.translate.get('CANCEL').subscribe(value => { cancel = value; });
    this.translate.get('SIGN_IN').subscribe(value => { signin = value; });

    let alert = this.alertCtrl.create({
      title: loginTitle,
      message: loginMessage,
      buttons: [{
        text: cancel,
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked')
        }
      }, {
        text: signin,
        handler: () => {
          console.log("sign in clicked");
          this.navCtrl.push(LoginPage, {
            skipped: true,
            bookingDetail: {
              room: room,
              interval: interval,
              checkIn: checkIn
            }
          })
        }
      }]
    });

    alert.present()
  }

  bookRoom(time: Number) {
    //Convert string to date of navParams
    let user = this.parseService.getCurrentUser();
    let bookTime = new Date(this.navParams.get('checkIn'));
    console.log(user);
    console.log(bookTime);
    if (isNaN(bookTime.getTime())) {
      bookTime = new Date();
      console.log("default time set")
    }
  }

  showBookingDetail() {
      if (this.parseService.getCurrentUser() != null) {
          this.navCtrl.push("BookingDetailsPage", {
              classDetail: this.roomDetail
          }, {
              animate: true,
              animation: 'ios-transition',
              direction: 'forward'
          });
      } else {
          this.presentLoginRegis();
      }
  }

  presentLoginRegis() {
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
                      let login = this.modalCtrl.create("LoginPage", {
                          backToParent: true
                      });
                      login.present();
                      login.onDidDismiss(() => {
                          this.showBookingDetail();
                      });
                  }
              },
              {
                  text: registerBtn,
                  handler: () => {
                      let register = this.modalCtrl.create("SignUpPage", {
                          backToParent: true
                      });
                      register.present();
                      register.onDidDismiss(() => {
                          this.showBookingDetail();
                      });
                  }
              },
              cancelBtn
          ]
      });
      alert.present();
  }

  dismissModal() {
    this.viewCtrl.dismiss()
  }

  filterArray(array, type) {
    return array.filter(x => x.value == type);
  }

  seeOtherAmenities() {
    let login = this.modalCtrl.create("OtherAmenitiesModalPage", {
      data: this.roomDetail.otherFacilities
    })
    login.present()
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

    })
  }

}
