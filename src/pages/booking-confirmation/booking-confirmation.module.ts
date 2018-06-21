import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingConfirmationPage } from './booking-confirmation';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BookingConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingConfirmationPage),
    TranslateModule.forChild()
  ],
  exports: [
    BookingConfirmationPage
  ]
})
export class BookingConfirmationPageModule {}
