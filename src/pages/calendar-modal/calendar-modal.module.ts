import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarModalPage } from './calendar-modal';
import { CalendarModule } from "ion2-calendar";
import {Http} from "@angular/http";

@NgModule({
    declarations: [
        CalendarModalPage,
    ],
    imports: [
        IonicPageModule.forChild(CalendarModalPage),
        CalendarModule
    ],
    exports: [
        CalendarModalPage
    ]
})
export class CalendarModalModule {}