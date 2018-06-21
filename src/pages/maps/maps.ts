import {
  Component,
  ElementRef,
  ViewChild,
  NgZone
} from '@angular/core';
import {
  CurrencyPipe
} from '@angular/common'
import {
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
  Platform,
  PopoverController
} from 'ionic-angular';
import {
  ConnectivityServiceProvider
} from '../../providers/connectivity-service/connectivity-service';
import {
  Geolocation
} from 'ionic-native';
import {
  GoogleMapsProvider
} from '../../providers/google-maps/google-maps';
import {
  Http
} from '@angular/http';
import {
  SearchResultsDetailPage
} from '../search-results-detail/search-results-detail'
import * as MarkerClusterer from 'node-js-marker-clusterer';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';

declare var MarkerWithLabel
/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
  providers: [ConnectivityServiceProvider, CurrencyPipe]
})
export class MapsPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
  showInfo: boolean = false;
  locations: any;
  markerCluster: any;
  propertyDetail: any = '';

  constructor(public platform: Platform,
    public navParams: NavParams,
    public navCtrl: NavController,
    public maps: GoogleMapsProvider,
    public loadingCtrl: LoadingController,
    private currencyPipe: CurrencyPipe,
    private zone: NgZone,
    private popoverCtrl: PopoverController,
    private translate: TranslateService) {
    console.log(navParams.get("address"))
    this.locations = navParams.get('address')
  }

  ionViewWillEnter() {
    var mapLoading;
    this.translate.get('LOADING_MAP').subscribe(value => { mapLoading = value; });

    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: mapLoading,
    });

    loading.present();

    this.platform.ready().then(() => {
      console.log('Platform ready')
      let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
        this.addCluster(map);
        loading.dismiss()
      });

    });
  }

  ionViewDidLoad(): void {

  }

  addCluster(map) {
    let iconDefault = '../assets/images/pin.svg'
    let iconSelected = '../assets/images/pin-selected.svg'
    let activeMarker

    let self = this
    if (google.maps) {
      console.log("nambahin marker")
      //Convert locations into array of markers
      let markers = this.locations.map((location) => {
        let label = String(this.currencyPipe.transform(location.price, 'IDR', true))
        console.log("lokesen", location)

        let marker = new MarkerWithLabel({
          position: location.position,
          icon: iconDefault,
          labelContent: label,
          labelAnchor: new google.maps.Point(38, 36),
          labelClass: "custom-label",
          labelInBackground: true
        })

        // let marker = new google.maps.Marker({
        //   position: location.position,
        //   label: String(this.currencyPipe.transform(location.price, 'IDR', true)),
        //   icon: iconDefault
        // });

        marker.addListener('click', function () {
          console.log('marker clicked')
          self.zone.run(() => {
            activeMarker && activeMarker.setIcon(iconDefault);
            activeMarker && activeMarker.set('labelClass', 'custom-label')
            marker.setIcon(iconSelected)
            marker.set('labelClass', 'custom-label-selected')
            activeMarker = marker
            self.showInfo = true;
            self.propertyDetail = location.detail

            map.panTo(marker.getPosition())
          });
        })
        return marker
      });

      this.markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'assets/images/m'
      });

    } else {
      console.warn('Google maps needs to be loaded before adding a cluster');
    }

  }

  showDetail() {
    let data = this.propertyDetail
    console.log(this.navParams.data)
    this.navCtrl.push(SearchResultsDetailPage, {
      address: data.address,
      displayAddress: data.displayAddress,
      amenities: data.amenities,
      room: data,
      gallery: data.gallery,
      mode: this.navParams.get('mode'),
      roomQty: this.navParams.get('room'),
      checkIn: this.navParams.get('checkIn'),
      destination: this.navParams.get('destination'),
      duration: this.navParams.get('duration'),
      position: {
        lng: data.location._latitude,
        lat: data.location._longitude
      },
    }, {
      animate: true,
      animation: 'ios-transition',
      direction: 'forward'
    })
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create("PopoverPage", {
      data: [1, 2]
    });
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {

    })
  }

  // switchValue() {
  //   this.showInfo = !this.showInfo
  //   console.log('switch')
  // }

}
