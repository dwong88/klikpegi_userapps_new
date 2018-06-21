import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsOwnerPage } from './tabs-owner';

@NgModule({
  declarations: [
    TabsOwnerPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsOwnerPage),
  ],
  exports: [
    TabsOwnerPage
  ]
})
export class TabsOwnerPageModule {}
