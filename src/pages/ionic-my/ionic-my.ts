import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'meinePage',
  segment: 'myPage',
  defaultHistory: ['home'],
  priority: 'high'
})
@Component({
  selector: 'page-ionic-my',
  templateUrl: 'ionic-my.html',
})
export class IonicMyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
