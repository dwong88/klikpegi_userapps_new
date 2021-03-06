import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsPage } from './maps';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsPage),
    TranslateModule.forChild(),
    Ionic2RatingModule
  ],
})
export class MapsPageModule {}
