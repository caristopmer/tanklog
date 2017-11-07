import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  private entriesArray: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.entriesArray = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  entryHistory() {
    console.log("inside entry history");

    this.sqlite.create({
      name: 'results.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('select * from testResults', {})
          .then(function(result) {
            console.log('Executed SQL');
            this.entriesArray.push(result.first());
          })
          .catch(e => console.log(e));    
      })
      .catch(e => console.log(e));
  }
}
