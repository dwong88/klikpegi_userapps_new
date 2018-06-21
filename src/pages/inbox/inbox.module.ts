/**
 * Created by wiyantotan on 12/21/17.
 */
/**
 * Created by wiyantotan on 12/21/17.
 */
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';

@NgModule({
    declarations: [
        InboxPage,
    ],
    imports: [
        IonicPageModule.forChild(InboxPage),
        TranslateModule.forChild()
    ],
    exports: [
        InboxPage
    ]
})
export class InboxPageModule {}