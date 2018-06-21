import {
  TranslateService
} from '@ngx-translate/core';
import {
  Component,
  ViewChild
} from '@angular/core';
import {
  NavController,
  NavParams,
  Tabs
} from 'ionic-angular'
import {
  MyBookingsPage
} from '../../pages/my-bookings/my-bookings'

@Component({
    selector: 'view-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs: Tabs;
  public homePage: any = "HomePage";
  public bookingsPage: any = MyBookingsPage;
  public profilePage: any = "UserProfilePage";
  public promoPage: any = "PromoPage";
  // public inboxPage: any = "InboxPage";
  public mySelectedIndex: number = 0;

  public skipStatus: boolean = false;

  public searchTitle: string;
  public bookingsTitle: string;
  public profileTitle: string;

  constructor(public navParams: NavParams, public translateService: TranslateService) {
    translateService.get('SEARCH').subscribe(
      value => {
        // value is our translated string
        this.searchTitle = value;
      }
    )

    translateService.get('BOOKINGS').subscribe(
      value => {
        // value is our translated string
        this.bookingsTitle = value;
      }
    )

    translateService.get('PROFILE').subscribe(
      value => {
        // value is our translated string
        this.profileTitle = value;
      }
    )

      this.mySelectedIndex = this.navParams.get('tabIndex') || 0;
    // this.skipStatus = this.navParams.get('skipped');
    // if(this.skipStatus) {
    //   setTimeout(() => {
    //     this.tabs.select(1)
    //   }, 300)
    // }
    // console.log(this.skipStatus)
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad tabs');

    }

    // ionViewDidEnter() {
    //     this.tabs.select(this.mySelectedIndex);
    // }
}
