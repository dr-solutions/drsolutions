import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TerminProvider } from '../../providers/termin/termin';
import { Termin } from '../../interfaces/termin/termin';
import { TerminSubPage } from '../termin-sub/termin-sub';

@Component({
  selector: 'page-termin',
  templateUrl: 'termin.html',
})
export class TerminPage {
  termine: Termin[];
  errorMessage: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public terminProvider: TerminProvider) {
    this.terminProvider.getTermine().subscribe((termine: Termin[]) => {
      console.log('Das sind alle Termine: ', termine);
      this.termine = termine;
    },
    err => {
        console.error(err);
        this.errorMessage = err;
    });
  }

  ionViewDidEnter() {
    this.terminProvider.getTermine().subscribe((termine: Termin[]) => {
      console.log('Das sind alle Termine: ', termine);
      this.termine = termine;
    },
    err => {
        console.error(err);
        this.errorMessage = err;
    });
  }

  goToTerminErstellung() {
    this.navCtrl.push(TerminSubPage, {operation : 'erstellen'});
  }

  goToTerminBearbeitung(termin) {
    this.navCtrl.push(TerminSubPage, {termin: termin, operation : 'bearbeiten'});
  }

}
