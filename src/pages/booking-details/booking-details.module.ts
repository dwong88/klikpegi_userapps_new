import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingDetailsPage } from './booking-details';
import { TranslateModule } from '@ngx-translate/core';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    BookingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingDetailsPage),
    TranslateModule.forChild(),
      AutoCompleteModule
  ],
})
export class BookingDetailsPageModule {}
