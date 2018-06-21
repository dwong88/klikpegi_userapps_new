import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPasswordModalPage } from './edit-password-modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    EditPasswordModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPasswordModalPage),
    TranslateModule.forChild()
  ],
  exports: [
    EditPasswordModalPage
  ]
})
export class EditPasswordModalPageModule {}
