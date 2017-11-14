import { DatabaseProvider } from './../../providers/database/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  testResult = {};

  constructor(public navCtrl: NavController, private databaseProvider: DatabaseProvider, public navParams: NavParams) {
    this.databaseProvider.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.load
      }
    })
    this.testResult['calcium'] = 420;
    this.testResult['alkalinity'] = 85;
    this.testResult['magnesium'] = 1300;
    this.testResult['nitrate'] = 0;
    this.testResult['phosphate'] = 0;
    this.testResult['salinity'] = 1026;
    this.testResult['date'] = new Date().toISOString();
  }

  saveResult() {
    this.databaseProvider.addResults(this.testResult['date'], this.testResult['calcium'], this.testResult['alkalinity'], this.testResult['magnesium'], this.testResult['nitrate'], this.testResult['phosphate'], this.testResult['salinity'], this.testResult['notes']);
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
