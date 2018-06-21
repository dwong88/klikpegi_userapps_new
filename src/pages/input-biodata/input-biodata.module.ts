import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputBiodataPage } from './input-biodata';

@NgModule({
    declarations: [
        InputBiodataPage,
    ],
    imports: [
        IonicPageModule.forChild(InputBiodataPage),
    ],
})
export class InputBiodataPageModule {}
