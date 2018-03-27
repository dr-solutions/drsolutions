import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  items = [
    {
      label: 'bla',
      value: 'bla1',
      checked: true
    },
    {
      label: 'foo',
      value: 'foo1',
      checked: false
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
