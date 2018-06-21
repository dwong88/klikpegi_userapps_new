import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MethodTransferPage } from './method-transfer';

@NgModule({
    declarations: [
        MethodTransferPage,
    ],
    imports: [
        IonicPageModule.forChild(MethodTransferPage),
        TranslateModule.forChild()
    ],
    exports: [
        MethodTransferPage
    ]
})
export class MethodTransferPageModule {}
