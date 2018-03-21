import { Component } from '@angular/core';
import { NavController, NavParams, FabContainer } from 'ionic-angular';

@Component({
  selector: 'page-fab',
  templateUrl: 'fab.html',
})
export class FabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  share(socialNet: string, fab: FabContainer) {
    // wenn man fab.close() aufruft benötigt man #fab 
    fab.close();
    // Toogling the list (not useful here)
    // fab.toggleList();
    console.log("Clicked:", socialNet);
  }

}
