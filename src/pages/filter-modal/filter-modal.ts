import {
  Component,
  NgZone
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from 'ionic-angular';
import { LocalDatabaseServiceProvider } from './../../providers/local-database-service/local-database-service';

/**
 * Generated class for the FilterModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {
  priceRange: any;
  searchType = [];
  priceMin: any = 0;
  priceMax: any = 2000000;
  sortType: any = [
    {
      title: "NEAREST_RANGE",
      value: 'range',
      checked: false
    },
    {
      title: "LOW_HIGH_PRICE",
      value: 'lohai',
      checked: false     
    },
    {
      title: "HIGH_LOW_PRICE",
      value: 'hailo',
      checked: false      
    }
  ];
  categories = [
    {
      id: 0,
      name: "B&B",
      checked: 0
    },
    {
      id: 1,
      name: "HOSTEL",
      checked: 0
    },
    {
      id: 2,
      name: "APARTMENT",
      checked: 0
    },
    {
      id: 3,
      name: "RESORT",
      checked: 0
    }, 
    {
      id: 4,
      name: "HOMESTAY",
      checked: 0
    },
    {
      id: 5,
      name: "HOTEL",
      checked: 0
    },
    {
      id: 6,
      name: "VILLA",
      checked: 0
    }
  ];
  sortOpt;
  config = [];
  sortTypeValue: any;
  filterValue: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public zone: NgZone, private localDatabaseProvider: LocalDatabaseServiceProvider) {
    this.localDatabaseProvider.getDatabaseState().subscribe(ready => {
      if (ready) {
        this.loadSortFilterConfig();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  loadSortFilterConfig() {
    this.localDatabaseProvider.getSortFilterConfig().then(data => {
      this.sortTypeValue = data[0]['sort_type']; 
      this.sortOpt = this.sortTypeValue;
      this.priceMin = data[0]['sort_price_value_low'];
      this.priceMax = data[0]['sort_price_value_high'];
      this.filterValue = data[0]['filter_value'];
      console.log(data);

      for (let item of this.sortType) {
        if (this.sortTypeValue == item.value) {
          item.checked = true;
          console.log(item.checked);
        }
      }

      if (this.priceMax == 99999999) this.priceMax = 2000000;
      this.priceRange = {
        lower: this.priceMin,
        upper: this.priceMax
      };

      console.log(this.filterValue);
      if (this.filterValue != '' && this.filterValue != undefined) {  
        var filter = this.filterValue.split(',');
        console.log('split filter');
        console.log(filter);
        for (let item of filter) {
          this.searchType.push(parseInt(item));
          this.categories[item].checked = 1;
        }
      }
    });
  }

  applyFilter() {
    let params = {
      sortOpt: this.sortOpt,
      filterOpt: this.searchType,
      priceRange: this.priceRange
    }
    this.localDatabaseProvider.updateSortFilterConfig(this.sortOpt, this.priceRange.lower, this.priceRange.upper, this.searchType.toString()).then(res => {
      console.log(res);
    });
    this.viewCtrl.dismiss(params);
  }

  setSortType(data) {
    this.sortOpt = data;
  }

  onChangeCategories(array, isChecked) {
    this.zone.run(() => {
      this.categories[array].checked = +isChecked;
      console.log("clicked index", array);
      if (isChecked) {
        this.searchType.push(array);
        console.log(this.searchType);
      }
      else {
        let index = this.searchType.indexOf(array);
        console.log(array);
        this.searchType.splice(index, 1);
        console.log(this.searchType);
      }
    });
  }

  onPriceChange(data) {
    this.zone.run(() => {
      console.log(data);
      this.priceMin = data.lower;
      this.priceMax = data.upper;
    });
  }

}
