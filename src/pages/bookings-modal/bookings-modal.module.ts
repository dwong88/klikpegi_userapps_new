import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookingsModalPage } from './bookings-modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    BookingsModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BookingsModalPage),
    TranslateModule.forChild()
  ],
  exports: [
    BookingsModalPage
  ]
})
export class BookingsModalPageModule {}
