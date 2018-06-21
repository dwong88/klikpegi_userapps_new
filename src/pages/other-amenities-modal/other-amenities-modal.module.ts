import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherAmenitiesModalPage } from './other-amenities-modal';

@NgModule({
  declarations: [
    OtherAmenitiesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(OtherAmenitiesModalPage),
    TranslateModule.forChild()
  ],
})
export class OtherAmenitiesModalPageModule {}
