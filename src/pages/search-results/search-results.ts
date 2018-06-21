import {
  Component, ViewChild
} from '@angular/core';
import {
    NavController,
    NavParams,
    Content,
    LoadingController,
    ViewController,
    ModalController,
    PopoverController, ToastController
} from 'ionic-angular';
import {
  SearchResultsDetailPage
} from '../search-results-detail/search-results-detail'
import {
  ParseService
} from '../../providers/parse-service'
import {
  Geolocation
} from '@ionic-native/geolocation'
import {
  TranslateService
} from '@ngx-translate/core';
import * as moment from 'moment';
import { CommonHandler } from '../../components/CommonHandler';
import {GlobalConfigurationService} from "../../providers/global-configuration-service";

declare var google: any;
declare var require: any;
/*
 Generated class for the SearchResults page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
  providers: [ParseService]
})
export class SearchResultsPage extends CommonHandler {
  roomList: any = '';
  isEmpty: boolean = false;
  searchDate: Date;
  duration: any;
  latitude: any;
  longitude: any;
  destination: any = '';
  searchParams: any;
  rate = 0;

    pageno = 0;
    private isStillLoading: boolean;

  @ViewChild(Content) content: Content;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public parseService: ParseService,
              public loadingCtrl: LoadingController,
              public viewCtrl: ViewController,
              protected toastCtrl: ToastController,
              public modalCtrl: ModalController,
              public popoverCtrl: PopoverController,
              protected translate: TranslateService,
              protected globalConfig: GlobalConfigurationService,
              protected geolocation: Geolocation)
  {
      super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);

      let params = navParams.data
      this.searchParams = {
          radius: params.radius,
          location: params.location,
          isNearby: params.nearby,
          checkIn: params.checkIn,
          duration: params.duration,
          guest: params.guest,
          room: params.room,
          mode: params.mode,
          pageno: this.pageno
      }
      this.searchDate = navParams.get('checkIn');
      this.duration = navParams.get('duration');
      this.isStillLoading = false;
      console.log('masuk search result');
      this.getLocation(this.searchParams.location.geometry);
      this.getProperties();
	  GlobalConfigurationService.KODE_UNIQUE = 0;
  }

  ionViewDidLoad() {

    console.log( "Current search mode: "+ GlobalConfigurationService.SEARCH_MODE_CURRENT);
  }

  scrollToTop() {
    this.content.scrollToTop();
  }

  ionViewDidEnter() {
    this.getAddress(this.searchParams.location.address_components, this.searchParams.location.formatted_address, this.searchParams.isNearby);
  }

  getProperties(mode ? ) {
      var searchLoading;
      this.translate.get('LOADING_ROOM').subscribe(value => {
          searchLoading = value;
      });

      let loading = this.loadingCtrl.create({
          spinner: 'hide',
          content: searchLoading,
      });
      if (mode !== undefined) {
          console.log("search resule mode undefined");
          //Check if no filter then apply sort directly
          if (mode.filterOpt.length < 1 && mode.priceRange.lower == 0 && mode.priceRange.upper == 2000000) {
              console.log("Masuk sort filter")
              this.roomList = this.sortArray(this.roomList, mode.sortOpt);
              this.scrollToTop()
          } else {
              //If filter available, search to parse using default sort (search All categories)
              loading.present();
              this.isStillLoading = true;
              this.parseService.searchProperties(this.searchParams, mode).then(results => {

                  console.log('hasil search', results)
                  if (results.length == 0) {
                      this.isEmpty = true;
                  }
                  this.getLowestPrice(results);
                  this.getAddressCountry(results);
                  // Apply local sorting by mode ( distance , ascending price, desecending price)
                  this.roomList = this.sortArray(results, mode.sortOpt)
                  console.log('setelah sort', this.roomList)
                  // Apply local filtering by price range
                  this.roomList = this.filterPrice(this.roomList, mode.priceRange)
                  console.log('setelah filter', this.roomList)
                  this.scrollToTop()
                  loading.dismiss();
                  this.isStillLoading = false;
              }, err => {
                  console.log(err);
                  loading.dismiss();
                  this.isStillLoading = false;
              }).catch(unknown => {
                  // this.presentToast(unknown)
                  loading.dismiss();
                  this.isStillLoading = false;
              });
          }
      } else {
          //Normal search with auto sort by range
          loading.present();
          console.log("search resule mode defined");
          this.isStillLoading = true;
          this.parseService.searchProperties(this.searchParams).then(results => {
              if (results.length == 0) {
                  this.isEmpty = true;
              }
              this.getLowestPrice(results);
              this.getAddressCountry(results);
              this.roomList = this.sortArray(results, 'range')
              this.scrollToTop()
              loading.dismiss();
              this.isStillLoading = false;
          }, err => {
              console.log(err);
              loading.dismiss();
              this.isStillLoading = false;
          }).catch(unknown => {
              // this.presentToast(unknown)
              loading.dismiss();
              this.isStillLoading = false;
          });
      }

  }

  ngOnInit() {

  }

  sortArray(data, type) {
    let self = this
    switch (type) {
      case 'lohai':
        {
          data.sort(function (a, b) {
            switch(self.searchParams.mode) {
              case 0 : return (a.transitStartFrom * ((100 - a.discountRate) / 100)) - (b.transitStartFrom * ((100 - b.discountRate) / 100))
              case 1 : return (a.price24StartFrom * ((100 - a.discountRate) / 100)) - (b.price24StartFrom * ((100 - b.discountRate) / 100))
              case 2 : return (a.startFrom * ((100 - a.discountRate) / 100)) - (b.startFrom * ((100 - b.discountRate) / 100))
            }
          })
          return data
        }
      case 'hailo':
        {
          data.sort(function (a, b) {
            switch(self.searchParams.mode) {
              case 0 : return (b.transitStartFrom * ((100 - b.discountRate) / 100)) - (a.transitStartFrom * ((100 - a.discountRate) / 100))
              case 1 : return (b.price24StartFrom * ((100 - b.discountRate) / 100)) - (a.price24StartFrom * ((100 - a.discountRate) / 100))
              case 2 : return (b.startFrom * ((100 - b.discountRate) / 100)) - (a.startFrom * ((100 - a.discountRate) / 100))
            }
          })
          return data
        }
      case 'range':
        {
          data.sort(function (a, b) {
            return a.distance - b.distance
          })
          return data
        }
      default:
        {
          {
            data.sort(function (a, b) {
              return a.distance - b.distance
            })
            return data
          }
        }
    }
    // Price low - high
  }

  filterPrice(data, range) {
    function isWithinRange(data) {
      return data > range.lower && data < range.upper
    }

    var filtered 
    switch(this.searchParams.mode) {
      case 0 : filtered = data.filter(price=> isWithinRange(price.transitStartFrom * ((100 - price.discountRate) / 100))); break;
      case 1 : filtered = data.filter(price=> isWithinRange(price.price24StartFrom * ((100 - price.discountRate) / 100))); break;
      case 2 : filtered = data.filter(price=> isWithinRange(price.startFrom * ((100 - price.discountRate) / 100))); break;
    }
    return filtered
  }

  getLocation(position) {
    this.latitude = position.location.lat();
    this.longitude = position.location.lng();
  }

  getAddress(address, formattedAddress, isNearby) {
    let length = address.length;
    if (isNearby) {
      this.destination = "NEARBY";
    } else if (length > 2) {
      this.destination = address[length - 2].long_name + ', ' + address[length - 1].long_name;
    } else {
      this.destination = formattedAddress;
    }
  }

  showPropertyDetail(data) {
    let time = this.navParams.get('checkIn');
    this.navCtrl.push(SearchResultsDetailPage, {
      address: data.address,
      displayAddress: data.displayAddress,
      amenities: data.amenities,
      position: {
        lng: this.longitude,
        lat: this.latitude
      },
      room: data,
      gallery: data.gallery,
      checkIn: time,
      mode: this.navParams.get('mode'),
      roomQty: this.navParams.get('room'),
      destination: this.destination,
      duration: this.duration,
    }, {
      animate: true,
      animation: 'ios-transition',
      direction: 'forward'
    });
  }

  dismissModal() {
      this.searchModeClass = '';
    this.viewCtrl.dismiss();
  }

  getLowestPrice(data) {
    for (let propertyList of data) {
      let priceList = [];
      let transitList = [];
      let price24List = [];

      for (let classList of propertyList.classes) {
        let priceData = {
          price: classList.price,
          discountRate: classList.discountRate
        }
        priceList.push(priceData);

        let transitData = {
          price: classList.priceList[this.duration - 1].price,
          discountRate: classList.discountRate
        }
        transitList.push(transitData);

        let price24Data = {
          price: classList.pricing24,
          discountRate: classList.discountRate
        }
        price24List.push(price24Data);
      }

      let lowestPrice = this.findMin(priceList);
      propertyList.startFrom = lowestPrice.startFrom;

      let lowestPrice24 = this.findMin(price24List);
      propertyList.price24StartFrom = lowestPrice24.startFrom;

      propertyList.startDiscount = lowestPrice.discountRate;

      let lowestTransit = this.findMin(transitList);
      propertyList.transitStartFrom = lowestTransit.startFrom;
      propertyList.discountRate = lowestTransit.discountRate;
    }
    // for(let classData of data.classes){
    //   let priceData = classData.price
    //   priceList.push(priceData)
    // }
  }

  // getTransitPrice(data) {
  //   for (let propertyList of data) {
  //     let priceList = []
  //     for (let classList of propertyList.classes) {
  //       let priceData = {
  //         price: classList.priceList[this.duration - 1].price,
  //         discountRate: classList.discountRate
  //       }
  //       priceList.push(priceData)
  //     }
  //     let calculatePrice = this.findMin(priceList)
  //     propertyList.transitStartFrom = calculatePrice.startFrom
  //     propertyList.discountRate = calculatePrice.discountRate
  //   }
  // }

  getAddressCountry(data) {
    let self = this
    const delay = (amount: number) => {
      return new Promise((resolve) => {
        setTimeout(resolve, amount);
      });
    }

    async function loop() {
      for (let propertyList of data) {
        let address = '';
        let region, city;
        self.geocodePosition(propertyList.location, function (results) {
          for (let component of results.address_components) {
            // console.log('component',component)
            for (let type of component.types) {
              if (type == "administrative_area_level_1") {
                // address.push(component.long_name)
                region = component.short_name;
              }
              if (type == "administrative_area_level_2") {
                // address.push(component.long_name)
                city = component.short_name;
              }
            }
          }
          address = city + ', ' + region;
          propertyList.addressRegion = address;
        })
        await delay(1200)
      }
    }
    loop()
  }

  findMin(arr) {
    let min = arr[0].price;
    let discount = arr[0].discountRate;

    for (let i = 1, len = arr.length; i < len; i++) {
      let v = arr[i].price;
      min = (v < min) ? v : min;
    }
    return {
      startFrom: min,
      discountRate: discount
    };
  }

  filterModal() {
    let modal = this.modalCtrl.create('FilterModalPage');
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null)
        this.getProperties(data);
    });
  }

  showMap() {
    let locationArr = [];
    for (let property of this.roomList) {
      locationArr.push({
        position: {
          lat: property.location._latitude,
          lng: property.location._longitude
        },
        detail: property,
        price: property.startFrom,
      })
    }
    this.navCtrl.push("MapsPage", {
      address: locationArr,
      mode: this.navParams.get('mode'),
      room: this.navParams.get('room'),
      checkIn: this.navParams.get("checkIn"),
      destination: this.destination,
      duration: this.duration,
    });
  }

  geocodePosition(params, callback) {
    let geocoder = new google.maps.Geocoder();
    let latLng = new google.maps.LatLng(params._latitude, params._longitude);

    let geocoderRequest;
    geocoderRequest = {
      'location': latLng
    };

    let location: any = '';
    geocoder.geocode(geocoderRequest, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          location = results[0];
          callback(location)
        } else {
          console.log('no results found');
          location = results[0];
          callback(location)
        }
      } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
        console.log("Kecepetan")
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    })

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

  doInfinite(infiniteScroll): Promise<any> {
      this.pageno += 1
      this.searchParams.pageno = this.pageno;
      this.isStillLoading = true;

      console.log("infinite");

      return this.parseService.searchProperties(this.searchParams).then(results => {

          if (results.length == 0) {
              this.isEmpty = true
          } else {
              this.getLowestPrice(results)
              this.getAddressCountry(results)
              for (let result of results) {
                  this.roomList.push(result)
              }
          }
          this.isStillLoading = false;
      }, err => {
          console.log(err);
          this.isStillLoading = false;
      }).catch(unknown => {
          // this.presentToast(unknown)
          console.log("unknownerror");
          this.isStillLoading = false;
      });
  }

}
