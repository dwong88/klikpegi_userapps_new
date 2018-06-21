import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmenitiesModalPage } from './amenities-modal';

@NgModule({
  declarations: [
    AmenitiesModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AmenitiesModalPage),
    TranslateModule.forChild()
  ],
  exports: [
    AmenitiesModalPage
  ]
})
export class AmenitiesModalPageModule {}
