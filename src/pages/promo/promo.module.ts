/**
 * Created by wiyantotan on 12/21/17.
 */
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromoPage } from './promo';

@NgModule({
    declarations: [
        PromoPage,
    ],
    imports: [
        IonicPageModule.forChild(PromoPage),
        TranslateModule.forChild()
    ],
    exports: [
        PromoPage
    ]
})
export class PromoPageModule {}