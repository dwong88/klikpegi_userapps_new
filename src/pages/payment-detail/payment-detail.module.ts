import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentDetailPage } from './payment-detail';

@NgModule({
  declarations: [
    PaymentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    PaymentDetailPage
  ]
})
export class PaymentConfirmationPageModule {}
