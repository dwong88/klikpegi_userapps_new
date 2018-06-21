import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';

declare var google: any;
/*
  Generated class for the AutocompletePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'autocomplete-page',
  templateUrl: 'autocomplete-page.html'
})

export class AutocompletePage {
  autocompleteItems;
  autocomplete;
  service = new google.maps.places.AutocompleteService();

  constructor(public viewCtrl: ViewController, private zone: NgZone, public navCtrl: NavController, public param: NavParams) {
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.viewCtrl.dismiss(item);
  }

  setNearby() {
    this.viewCtrl.dismiss('nearby')
  }

  updateSearch() {
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: 'IDN' } }, function(predictions, status) {
      me.autocompleteItems = [];
      me.zone.run(function() {
        if (predictions != null) {
          predictions.forEach(function(prediction) {
            me.autocompleteItems.push(prediction);
          });
        }else{

        }
      });
    });
  }
}
