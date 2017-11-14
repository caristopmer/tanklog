import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  private entriesArray: any;

  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, public navParams: NavParams) {
    this.databaseProvider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.load
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
