import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  private calcium: number;
  private alkalinity: number;
  private magnesium: number;
  private nitrate: number;
  private phosphate: number;
  private salinity: number;
  private date: string;
  private notes: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.calcium = 420;
    this.alkalinity = 85;
    this.magnesium = 1300;
    this.nitrate = 0;
    this.phosphate = 0;
    this.salinity = 1026;
    this.date = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  saveResults() {
    this.sqlite.create({
      name: 'results.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table if not exists testResults(id integer primary key, date varchar(64), calcium integer, alkalinity real, magnesium integer, nitrate real, phosphate real, salinity real, notes varchar(256))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));

        db.executeSql('insert into testResults (date, calcium, alkalinity, magnesium, nitrate, phosphate, salinity, notes) values (?, ?, ?, ?, ?, ?, ?, ?)', [this.date, this.calcium, this.alkalinity, this.magnesium, this. nitrate, this.phosphate, this.salinity, this.notes])
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
    
    
      })
      .catch(e => console.log(e));

      this.navCtrl.popToRoot();
  }

}
