/**
 * Created by wiyantotan on 12/21/17.
 */
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { MbscModule } from '@mobiscroll/angular';
// import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
        TranslateModule.forChild()
		// ,MbscModule
		// ,FormsModule
    ],
    exports: [
        HomePage
    ]
})
export class HomePageModule {}