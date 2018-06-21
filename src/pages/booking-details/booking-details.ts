import {
  Component, ViewChild
} from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    AlertController,
    PopoverController, ToastController, ViewController, IonicFormInput
} from 'ionic-angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import * as moment from 'moment';
import {CommonHandler} from "../../components/CommonHandler";
import {GlobalConfigurationService} from "../../providers/global-configuration-service";
import {Geolocation} from "@ionic-native/geolocation";
import {CompleteGuestBookingDetails} from "./complete-guest-booking-details";
import {AutoCompleteComponent} from 'ionic2-auto-complete';

/**
 * Generated class for the BookingDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking-details',
  templateUrl: 'booking-details.html',
    providers: [CompleteGuestBookingDetails]
})
export class BookingDetailsPage extends CommonHandler {
    @ViewChild('searchbar') searchbar: AutoCompleteComponent;
    @ViewChild('fieldEmail') fieldEmail;
    @ViewChild('fieldPhone') fieldPhone;
    @ViewChild('fieldGuest') fieldGuest;
    @ViewChild('fieldRequest') fieldRequest;

  bookingDetail: any = '';
  order: any = {}
  recipient: any = ''
  endDate
  transitPrice
  orderForm: FormGroup
  guestForm;
  placeholderName: any;
  elPhoneNo: HTMLInputElement;
  elEmail: HTMLInputElement;
  intervalFieldGuest: any;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              protected toastCtrl: ToastController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    private popoverCtrl: PopoverController,
              protected translate: TranslateService,
              protected geolocation: Geolocation,
              protected globalConfig: GlobalConfigurationService,
              public completeGuest: CompleteGuestBookingDetails
  ) {
      super(toastCtrl, viewCtrl, globalConfig, geolocation, translate);
      let nameTranslate: string;
      this.translate.get('FULL_NAME').subscribe(value => { this.placeholderName = {placeholder: value}; });

    this.orderForm = formBuilder.group({
      fullName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.required, this.emailValidator])],
      phoneNo: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
    });



    this.guestForm = new FormControl('', Validators.required)

    this.bookingDetail = this.navParams.get('classDetail');
    console.log("booking detail ts");
    console.log(this.bookingDetail);
    this.bookingDetail.stayType = this.getStayingType(this.bookingDetail.mode)
    this.transitPrice = this.bookingDetail.priceList[this.bookingDetail.duration - 1].price * (100 - this.bookingDetail.discountRate) / 100
    this.order.recipient = 'self'
    let date = moment(this.bookingDetail.checkIn)
    let endDate
    switch (this.bookingDetail.mode) {
      case 0:
        {
          endDate = date.clone().add(+this.bookingDetail.duration, 'h')
          break;
        }
      case 1:
        {
          endDate = date.clone().add(24, 'h')
          break;
        }
      case 2:
        {
          endDate = date.clone().add(+this.bookingDetail.duration, 'd')
          break;
        }
    }
    this.endDate = endDate
    this.bookingDetail.checkOut = endDate
  }

    ionViewWillEnter() {
        // this.searchbar.searchbarElem.ionFocus.subscribe(() => {
        //     console.log("focused");
        // });
        let orderVal = this.orderForm.value;
        if(typeof orderVal.email === "undefined") {
            this.orderForm.setValue({
                fullName : '',
                email : '',
                phoneNo : ''
            });
        }

        this.searchbar.searchbarElem.ionBlur.subscribe(() => {
            let orderVal = this.orderForm.value;
            orderVal.fullName = this.searchbar.keyword;
            this.orderForm.setValue(orderVal);
        });
    }

  autoFill(evt)
  {
    let orderVal = this.orderForm.value;
      orderVal.email = evt.email;
      orderVal.phoneNo = evt.phone;
      this.orderForm.setValue(orderVal);
      let activeElement = <HTMLElement>document.activeElement;
      activeElement && activeElement.blur && activeElement.blur();

      // this.orderForm.value.email = ;
      // this.orderForm.value.phoneNo = ;
    // this.contEmailAddr.nativeElement.setValue(evt.email)x
    // this.contPhoneNo.nativeElement.setValue(evt.phoneNo);

      // console.log(evt);
      // console.log(JSON.stringify(evt));
      // console.log(evt.name);
      // console.log(evt.phone);
      // console.log(evt.email);
    console.log("masuk event fill seelcted");
  }

  handleKeyUp(keycode) {
      let thisEl = keycode.srcElement,
          thisTab = keycode.srcElement.tabIndex;

      console.log(keycode);
      console.log(keycode.which);

      if(keycode.which == 13) {
          switch(parseInt(thisTab)) {
              case 1: this.fieldEmail.setFocus(); break;
              case 2: this.fieldPhone.setFocus(); break;
              case 3: this.fieldPhone.setBlur(); break;
              case 4: this.fieldGuest.setBlur(); break;
              case 5: this.fieldRequest.setBlur(); break;
          }
      }
  }

  orderForRadio(typeRadio) {
      if(typeRadio == '1') {
          let activeElement = <HTMLElement>document.activeElement;
          activeElement && activeElement.blur && activeElement.blur();
      } else {
          this.intervalFieldGuest = setInterval(function(){
              this.fieldGuest.setFocus();
              clearInterval(this.intervalFieldGuest);
          }, 200);
      }
  }

  emailValidator(control) {
    try {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return {
                'invalidEmailAddress': true
            };
        }
    } catch(e) {
        return {
            'invalidEmailAddress': true
        };
    }
  }

    ionViewDidLoad() {
    console.log('ionViewDidLoad BookingDetailsPage');
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

  printForm(orderForm, orderRecipient, guestForm?) {
      let orderData = this.orderForm.value;
      orderData.fullName = this.searchbar.keyword;
      this.orderForm.setValue(orderData);
      console.log(orderData);

    /* Form checking alert */
      if (!this.orderForm.valid || (orderRecipient == 'other' && !guestForm)) {
        let alert = this.alertCtrl.create({
          subTitle: 'Data tamu masih belum benar',
          buttons: ['OK']
        });
        alert.present();
      }
    /* Form checking alert */
      else {
        if (this.guestForm.value != "")
          orderData.guest = this.guestForm.value;
        if (this.order.request !== undefined)
          orderData.additional = this.order.request;
        this.bookingDetail.orderData = orderData;
        this.navCtrl.push("PaymentDetailPage", {
          classDetail: this.bookingDetail
        });
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

    })
  }

}
