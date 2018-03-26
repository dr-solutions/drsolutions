import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-example2',
  templateUrl: 'modal-example2.html',
})
export class ModalExample2Page {
  daten;
  vorname: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController) {
    this.daten = navParams.get('data');
  }

  vornameAendern() {
   const vorherigerVorname = this.daten.vorname;
    this.daten.vorname = this.vorname;
    this.viewCtrl.dismiss({daten: this.daten, letzter: vorherigerVorname});
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
