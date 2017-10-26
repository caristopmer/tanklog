import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  private calcium: any;
  private alkalinity: any;
  private magnesium: any;
  private nitrate: any;
  private phosphate: any;
  private salinity: any;
  private date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.calcium = 420;
    this.alkalinity = 8.5;
    this.magnesium = 1300;
    this.nitrate = 0;
    this.phosphate = 0;
    this.salinity = 1.026;
    this.date = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
