import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InputPage } from '../input/input';

@Component({
  selector: 'page-label',
  templateUrl: 'label.html',
})
export class LabelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToInputPage() {
    this.navCtrl.pop();
    this.navCtrl.push(InputPage);
  }

}
