import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entry',
  templateUrl: 'entry.html',
})
export class EntryPage {
  private entry: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.entry = this.navParams.get("entry");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntryPage');
  }

}
