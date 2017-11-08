import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
