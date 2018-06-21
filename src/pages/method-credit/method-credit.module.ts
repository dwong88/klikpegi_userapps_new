import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MethodCreditPage } from './method-credit';

@NgModule({
    declarations: [
        MethodCreditPage,
    ],
    imports: [
        IonicPageModule.forChild(MethodCreditPage),
        TranslateModule.forChild()
    ],
    exports: [
        MethodCreditPage
    ]
})
export class MethodCreditPageModule {}
