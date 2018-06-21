import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginModalPage } from './login-modal';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginModalPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginModalPage),
    TranslateModule.forChild()
  ]
})
export class LoginModalPageModule {}
