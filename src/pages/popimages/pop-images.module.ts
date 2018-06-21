import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopImages } from './pop-images';

@NgModule({
    declarations: [
        PopImages,
    ],
    imports: [
        IonicPageModule.forChild(PopImages),
        TranslateModule.forChild()
    ],
    exports: [
        PopImages
    ]
})
export class PopImagesModule {}
