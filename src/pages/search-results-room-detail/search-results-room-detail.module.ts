
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultsRoomDetailPage } from './search-results-room-detail';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SearchResultsRoomDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResultsRoomDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    SearchResultsRoomDetailPage
  ]
})
export class SearchResultsRoomDetailPageModule {}
