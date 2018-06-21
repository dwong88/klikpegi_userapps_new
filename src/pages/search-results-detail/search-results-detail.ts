import {
  Component,
  ViewChild
} from '@angular/core';
import {
    NavController,
    NavParams,
    LoadingController,
    ViewController,
    AlertController,
    Navbar,
    Platform,
    ModalController,
    PopoverController, ToastController
} from 'ionic-angular';
import {
  ParseService
} from '../../providers/parse-service';
import {
  MyBookingsPage
} from '../../pages/my-bookings/my-bookings'
import {
  LoginPage
} from '../../pages/login/login'
import { TranslateService } from '@ngx-translate/core';
import { CommonHandler } from '../../components/CommonHandler';
import {GlobalConfigurationService} from "../../providers/global-configuration-service";
import {Geolocation} from "@ionic-native/geolocation";
import { TruncateModule } from 'ng2-truncate';
import {TruncateWordsPipe} from "ng2-truncate/dist/truncate-words.pipe";
import { Slides } from 'ionic-angular';
import {PopImages} from "../popimages/pop-images";

@Component({
  selector: 'page-search-results-detail',
  templateUrl: 'search-results-detail.html',
  providers: [ParseService],
})
export class SearchResultsDetailPage extends CommonHandler{
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Slides) slides: Slides;

  loadData: boolean = false;
  address: string;
  category: string;
  bookTime: number = 3;
  roomId: number;
  roomDetail: any = '';
  duration: any;
  destination: any;
  images: any;
  displayAddress: string = '';
  public displayDescription = '';
  public displayDescriptionFull = '';
  public displayDescriptionCntWords = 0;
  public limitWords = GlobalConfigurationService.TRUNCATE_WORDS_COUNT;
  public truncating = true;
  amenities = [{
    id: 0,
    title: "FREE_PARKING",
    image: 'assets/images/amenities/Parking.png',
    value: 0
  }, {
    id: 1,
    title: 'NOT_FREE_PARKING',
    image: 'assets/images/amenities/Parking.png',
    value: 0
  }, {
    id: 2,
    title: 'FREE_WI-FI',
    image: 'assets/images/amenities/WiFi.png',
    value: 0
  }, {
    id: 3,
    title: 'ELEVATOR',
    image: 'assets/images/amenities/Elevator.png',
    value: 0
  }, {
    id: 4,
    title: 'RESTAURANT',
    image: 'assets/images/amenities/Restaurant.png',
    value: 0
  }, {
    id: 5,
    title: 'SWIMMING_POOL',
    image: 'assets/images/amenities/Pool.png',
    value: 0
  }, {
    id: 6,
    title: 'GYM',
    image: 'assets/images/amenities/Gym.png',
    value: 0
  }, {
    id: 7,
    title: 'LAUNDRY_SERVICE',
    image: 'assets/images/amenities/Laundry Service.png',
    value: 0
  }, {
    id: 8,
    title: 'BUSINESS_CENTER',
    image: 'assets/images/amenities/Business Center.png',
    value: 0
  }, {
    id: 9,
    title: '24-HOUR_FRONT_DESK',
    image: 'assets/images/amenities/24hr Front Desk.png',
    value: 0
  }, {
    id: 10,
    title: 'ATM',
    image: 'assets/images/amenities/ATM.png',
    value: 0
  }]

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

  categories = [{
    id: 0,
    name: "B&B",
  }, {
    id: 1,
    name: "Hostel",
  }, {
    id: 2,
    name: "Apartment",
  }, {
    id: 3,
    name: "Resort",
  }, {
    id: 4,
    name: "Homestay",
  }, {
    id: 5,
    name: "Hotel",
  }, {
    id: 6,
    name: "Villa",
  }]

  items: any[];
  latitude: any;
  longitude: any;
  searchDate: Date;
  shownGroup: any = null;
  rate = 5;
  searchMode = '';
  currentLanguage = '';
  roomQty = 1
  thumbnail
  mode
  gallery
  smoking

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public parseService: ParseService,
        public translate:TranslateService,
        private loadingCtrl: LoadingController,
        public viewCtrl: ViewController,
        protected toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private modalCtrl: ModalController,
        private popoverCtrl: PopoverController,
        private plt: Platform,
        protected geolocation: Geolocation,
        protected globalConfig: GlobalConfigurationService)
    {
        super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);
        this.initializeData();
        console.log(navParams.data)
        this.displayAddress = navParams.get('displayAddress') || navParams.get('address')
        this.thumbnail = navParams.get('room').thumbnail
        this.images = navParams.get('gallery')

        //Initial Amenities Data
        for (let amenity of navParams.get('amenities')) {
            this.amenities[amenity].value = 1
        }

        let location = navParams.get('location');
        if (location != undefined)
          this.destination = location.name;
        switch (this.roomDetail.category) {
          case '0': {
              this.category = 'Hotel'
          }
          default: {
              this.category = 'Other'
          }
        }

		GlobalConfigurationService.KODE_UNIQUE = 0;
        // parseService.getRoomDetails(this.roomId).then(details => {
        //   this.roomDetail = details;
        //   loading.dismiss();
        //   this.loadData = true;
        // })
    }

  ionViewDidLoad() {
    //Change back animation into ios back transition
    this.navBar.backButtonClick = (e: UIEvent) => {
      this.navCtrl.pop({
        animate: true,
        animation: 'ios-transition',
        direction: 'back'
      })
    }
  }

  popImagesWindow() {
      let currentIndex = this.slides.getActiveIndex();
      let imgUrl = '';

      // if(currentIndex == 0) {
      //   imgUrl = this.roomDetail.thumbnail;
      // } else {
      //     imgUrl = this.images[(currentIndex-1)]._url;
      // }
      imgUrl = this.images[(currentIndex)]._url;

      let modal = this.modalCtrl.create("PopImages", {
          listImages: this.images,
          theThumb: this.roomDetail.thumbnail,
          tabIndex: currentIndex,
          imgUrl: imgUrl
      }, {
          showBackdrop: false,
          enableBackdropDismiss: false,
          enterAnimation: 'modal-fade-enter',
          leaveAnimation: 'modal-fade-leave'
      });
      modal.present();
  }

  filterArray(array, type) {
    return array.filter(x => x.value == type);
  }

  presentConfirm(room, interval, checkIn) {
    let alert = this.alertCtrl.create({
      title: 'Log in required',
      message: 'You are not yet logged in, please log in first',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked')
        }
      }, {
        text: 'Sign in',
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

  initializeData() {
    let self = this;
    let truncateWords = new TruncateWordsPipe();
    this.currentLanguage = this.translate.getDefaultLang();

    this.items = [{
      title: 'RULES',
      text: this.navParams.get("room").rules ? this.navParams.get("room").rules : 'No description yet',
      textINA: this.navParams.get("room").rulesINA ? this.navParams.get("room").rulesINA : 'Belum ada deskripsi',
    }, {
      title: 'CANCELLATION_POLICY',
      text: this.navParams.get("room").cancellationPolicy ? this.navParams.get("room").cancellationPolicy : 'No description yet',
      textINA: this.navParams.get("room").cancellationPolicyINA ? this.navParams.get("room").cancellationPolicyINA : 'Belum ada deskripsi',      
    }, {
      title: 'PAYMENT_POLICY',
      text: this.navParams.get("room").paymentPolicy ? this.navParams.get("room").paymentPolicy : 'No description yet',
      textINA: this.navParams.get("room").paymentPolicyINA ? this.navParams.get("room").paymentPolicyINA : 'Belum ada deskripsi',      
    }];

    this.roomDetail = this.navParams.get('room');
    if(this.currentLanguage == 'en') {
        this.displayDescriptionFull = this.roomDetail.description;
    }
    else if(this.currentLanguage == 'id') {
        this.displayDescriptionFull = this.roomDetail.descriptionINA;
    }

      this.displayDescriptionCntWords = this.splitTextToWords(this.displayDescriptionFull).length;
      this.displayDescription= truncateWords.transform(this.displayDescriptionFull);
    // this.roomDetail.description = truncateWords.transform(this.roomDetail.description);
    // this.roomDetail.descriptionINA = truncateWords.transform(this.roomDetail.descriptionINA);
    this.roomDetail.roomType = this.getPropertyName(this.roomDetail.type)

    for (let data of this.roomDetail.classes) {
      let basicFacilities = [{
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
          title1: "NO_WI-FI",
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
      basicFacilities[0].value = data.basicFacilities[0].value
      basicFacilities[1].value = data.basicFacilities[1].value
      basicFacilities[2].value = data.basicFacilities[2].value
      basicFacilities[3].value = data.basicFacilities[3].value


      let overviewData = [{
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
        }
      ]
      overviewData[0].value = data.roomOverview[0]
      overviewData[1].value = data.roomOverview[1]
      data.smoking = data.roomOverview[2]

      data["overviewArr"] = overviewData
      data["facilityArr"] = basicFacilities
    }

    this.latitude = this.roomDetail.location._latitude;
    this.longitude = this.roomDetail.location._longitude;
    this.address = this.navParams.get('address');
    this.duration = this.navParams.get('duration');
    this.searchDate = this.navParams.get('checkIn');
    this.searchMode = this.navParams.get('mode')
    this.roomQty = this.navParams.get('roomQty')
    this.loadData = true
  }

  getPropertyName(code) {
    switch (code) {
      case 0:
        {
          return 'Hotel'
        }
      default:
        return 'Other'
    }
  }

  showRoomDetail(id) {
    this.navCtrl.push("SearchResultsRoomDetailPage", {
      roomID: id
    });
    console.log(id)
  }

  navigateTo() {
    let destination = this.latitude + ',' + this.longitude;
    if (this.plt.is('ios')) {
      window.open('maps://?q=' + destination, '_system');
    } else {
      let label = encodeURI('My Label');
      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    }
  }

  bookRoom(time: Number) {
    //Convert string to date of navParams
    let user = this.parseService.getCurrentUser();
    let bookTime = new Date(this.searchDate);
    console.log(user);
    console.log(bookTime);
    if (isNaN(bookTime.getTime())) {
      bookTime = new Date();
      console.log("default time set")
    }

    if (user) {
      this.navCtrl.push("BookingConfirmationPage", {
        bookingDetail: {
          room: this.roomId,
          interval: +time,
          checkIn: bookTime
        }
      })
    } else {
      console.log("prompt log in");
      this.presentConfirm(this.roomId, +time, bookTime)
    }
  }

  showMore() {
    let modal = this.modalCtrl.create("AmenitiesModalPage", {
      list: this.amenities
    });
    modal.present()
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

  showDetail(item) {
    this.addItemData(item);
    // item.mode = this.searchMode;
    // let modal = this.modalCtrl.create("SearchResultsRoomDetailPage", { classDetail: item });
    // modal.present()
    this.navCtrl.push("SearchResultsRoomDetailPage", {
      classDetail: item,
      rules: this.items
    }, {
      animate: true,
      animation: 'ios-transition',
      direction: 'forward'
    });
  }

  showBookingDetail(item) {
      // item.mode = this.searchMode;
      if (this.parseService.getCurrentUser() != null) {
          this.addItemData(item)
          this.navCtrl.push("BookingDetailsPage", {
              classDetail: item,
              rules: this.items
          }, {
              animate: true,
              animation: 'ios-transition',
              direction: 'forward'
          });
      } else {
          this.presentLoginRegis(item);
      }
  }

  presentLoginRegis(item) {
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
                          this.showBookingDetail(item);
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
                          this.showBookingDetail(item);
                      });
                  }
              },
              cancelBtn
          ]
      });
      alert.present();
  }

  addItemData(item) {
    item.propName = this.roomDetail.name
    item.mode = this.searchMode
    item.checkIn = this.searchDate
    item.duration = this.duration
    item.roomQty = this.roomQty
    item.propDetail = this.navParams.get('room')
    item.currentLanguage = this.currentLanguage
    return item
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
