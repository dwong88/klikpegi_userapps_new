import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterModalPage } from './filter-modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FilterModalPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterModalPage),
    TranslateModule.forChild()
  ],
  exports: [
    FilterModalPage
  ]
})
export class FilterModalPageModule {}
