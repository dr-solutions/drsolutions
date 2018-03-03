import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BenutzerProvider } from '../../providers/benutzer/benutzer';

@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public benutzerProvider: BenutzerProvider) {
  }

  ionViewDidLoad() {
    this.benutzerProvider.getBenutzer().subscribe(data => {
      console.log('data:', data);
    });
  }

}
