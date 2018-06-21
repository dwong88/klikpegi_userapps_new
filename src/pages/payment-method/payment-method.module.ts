import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentMethodPage } from './payment-method';

@NgModule({
    declarations: [
        PaymentMethodPage,
    ],
    imports: [
        IonicPageModule.forChild(PaymentMethodPage),
        TranslateModule.forChild()
    ],
    exports: [
        PaymentMethodPage
    ]
})
export class PaymentMethodPageModule {}
