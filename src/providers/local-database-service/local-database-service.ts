import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocalDatabaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalDatabaseServiceProvider {

  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public http: Http, private sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'klikpegi.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.storage.get('database_filled').then(value => {
          if (value) {
            this.databaseReady.next(true);
          }
          else {
            this.fillDatabase();
          }
        });
      });
    });
  }

  fillDatabase() {
    this.http.get('assets/dbInit.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql).then(data => {
          this.databaseReady.next(true);
          this.storage.set('database_filled', true);
        }).catch(e => console.log(e));
      });
  }

  updateSortFilterConfig(sort_type, sort_price_value_low, sort_price_value_high, filter) {
    let param = [sort_type, sort_price_value_low, sort_price_value_high, filter];
    return this.database.executeSql("UPDATE sortfilter SET sort_type=?, sort_price_value_low=?, sort_price_value_high=?, filter_value=? WHERE id=1", param).then(res => {
      return res;
    }, err => {
      console.log('Error: ', err);
    });
  }

  getSortFilterConfig() {
    return this.database.executeSql('SELECT * FROM sortfilter', []).then(data => {
      let config = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          config.push({
            id: data.rows.item(i).id,
            sort_type: data.rows.item(i).sort_type,
            sort_price_value_low: data.rows.item(i).sort_price_value_low,
            sort_price_value_high: data.rows.item(i).sort_price_value_high,
            filter_value: data.rows.item(i).filter_value
          });
        }
      }
      return config;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

}
