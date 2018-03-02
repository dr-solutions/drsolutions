import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionsheetPage } from '../actionsheet/actionsheet';
import { AlertPage } from '../alert/alert';

/**
 * Generated class for the KomponentenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-komponenten',
  templateUrl: 'komponenten.html',
})
export class KomponentenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KomponentenPage');
  }

  goToActionsheet() {
    this.navCtrl.push(ActionsheetPage);
  }

  goToAlert() {
    this.navCtrl.push(AlertPage);
  }

}
