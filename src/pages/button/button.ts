import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-button',
  templateUrl: 'button.html',
})
export class ButtonPage {
  buttonClicked: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
