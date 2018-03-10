import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TerminProvider } from '../../providers/termin/termin';
import { Termin } from '../../interfaces/termin/termin';

@Component({
  selector: 'page-termin',
  templateUrl: 'termin.html',
})
export class TerminPage {
  termine: Termin[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public terminProvider: TerminProvider) {
    this.terminProvider.getTermine().subscribe((termine: Termin[]) => {
      console.log('Das sind alle Termine: ', termine);
      this.termine = termine;
    })
  }


}
