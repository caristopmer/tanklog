import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openTest() {
    this.navCtrl.push("TestPage");
  }

  openHistory() {
    this.navCtrl.push("HistoryPage");
  }

}
