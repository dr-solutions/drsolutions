import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chip',
  templateUrl: 'chip.html',
})
export class ChipPage {
  show: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  showMessage() {
    return this.show 
            ? this.show = false 
            : this.show=true;
  }

}
