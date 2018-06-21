import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentConfirmationPage } from './payment-confirmation';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PaymentConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentConfirmationPage),
    TranslateModule.forChild()
  ],
  exports: [
    PaymentConfirmationPage
  ]
})
export class PaymentConfirmationPageModule {}
