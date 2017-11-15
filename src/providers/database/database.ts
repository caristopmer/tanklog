import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter} from '@ionic-native/sqlite-porter';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;

  constructor(public http: Http, private sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'testResults.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.storage.get('table_created').then(val => {
          if (val) {
            this.databaseReady.next(true);
          } else {
            this.createTable();
          }
        })
      });
    });
  }

  createTable() {
    this.http.get('assets/createTable.sql')
    .map(res => res.text())
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
      .then(data => {
        this.databaseReady.next(true);
        this.storage.set('table_created', true);
      })
      .catch(e => console.log(e));
    });
  }

  addResults(date, calcium, alkalinity, magnesium, nitrate, phosphate, salinity, notes) {
    let data = [date, calcium, alkalinity, magnesium, nitrate, phosphate, salinity, notes];
    return this.database.executeSql("INSERT INTO testResults (date, calcium, alkalinity, magnesium, nitrate, phosphate, salinity, notes) values (?, ?, ?, ?, ?, ?, ?, ?)", data).then(res => {
      return res;
    });
  }

  getAllResults() {
    return this.database.executeSql("SELECT * FROM testResults ORDER BY date DESC", []).then(data => {
      let results = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          results.push({
            date: data.rows.item(i).date,
            calcium: data.rows.item(i).calcium,
            alkalinity: data.rows.item(i).alkalinity,
            magnesium: data.rows.item(i).magnesium,
            nitrate: data.rows.item(i).nitrate,
            phosphate: data.rows.item(i).phosphate,
            salinity: data.rows.item(i).salinity,
            notes: data.rows.item(i).notes
          })
        }
      }
      return results;
    }, err => {
      console.log('Error: ', err);
      return [];
    })
  }

  getDatabaseState() {
    return this.databaseReady.asObservable();
  }

}
