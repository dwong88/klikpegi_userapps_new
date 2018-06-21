import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AutocompletePage } from '../pages/autocomplete-page/autocomplete-page';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { SearchResultsDetailPage } from '../pages/search-results-detail/search-results-detail';
import { QuicktourModalPage } from '../pages/quicktour-modal/quicktour-modal';
import { FacebookModule } from 'ngx-facebook';
import { CountdownModule } from 'ngx-countdown';
import { MyBookingsPage } from '../pages/my-bookings/my-bookings';
import { MyBookingsDetailPage } from '../pages/my-bookings-detail/my-bookings-detail';
import { ParseService } from '../providers/parse-service';
import { Ionic2RatingModule } from 'ionic2-rating'
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';
import { GooglePlus } from '@ionic-native/google-plus';
import { SQLite } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { GlobalEventEmitterProvider } from '../providers/global-event-emitter';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocalDatabaseServiceProvider } from './../providers/local-database-service/local-database-service';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { GlobalConfigurationService } from '../providers/global-configuration-service';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { TruncateModule } from 'ng2-truncate';
import { Config } from 'ionic-angular';
import { ModalFadeEnterTransition } from '../components/fade-transition/ModalFadeEnterTransition';
import { ModalFadeLeaveTransition } from '../components/fade-transition/ModalFadeLeaveTransition';
import { CalendarModule } from "ion2-calendar";
import { HeaderColor } from '@ionic-native/header-color';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    OnboardingPage,
    MyBookingsPage,
    MyBookingsDetailPage,
    AutocompletePage,
    SearchResultsPage,
    SearchResultsDetailPage,
    QuicktourModalPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    HttpModule,
    CountdownModule,
    FacebookModule.forRoot(),
      CalendarModule,
    IonicStorageModule.forRoot(),
      TruncateModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false,
      tabsHideOnSubPages: true,
      backButtonIcon: 'ios-arrow-back',
      backButtonText: ''
    }),
    Ionic2RatingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OnboardingPage,
    MyBookingsPage,
    MyBookingsDetailPage,
    AutocompletePage,
    SearchResultsPage,
    SearchResultsDetailPage,
    QuicktourModalPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
	  HeaderColor,
    SplashScreen,
    Geolocation,
    Network,
    Transfer,
    File,
    FilePath,
    Camera,
    Base64,
    GooglePlus,
    SQLite,
    SQLitePorter,
    ParseService,
    // { provide: Camera, useClass: CameraMock },
    { provide: ErrorHandler, useClass: IonicErrorHandler }, GlobalEventEmitterProvider,
    ConnectivityServiceProvider,
    GoogleMapsProvider,
    LocalDatabaseServiceProvider,
    ScreenOrientation,
    GlobalConfigurationService,
      LaunchNavigator,
      InAppBrowser
  ]
})
export class AppModule {
    constructor(public config: Config) {
        this.setCustomTransitions();
    }

    private setCustomTransitions() {
        this.config.setTransition('modal-fade-leave', ModalFadeLeaveTransition);
        this.config.setTransition('modal-fade-enter', ModalFadeEnterTransition);
    }
}

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
