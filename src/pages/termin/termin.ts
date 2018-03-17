import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
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
              public toastCtrl: ToastController,
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

  terminLoeschen(id) {
    const termin = this.termine.find(termin => termin.id === id);
    const terminIndex = this.termine.indexOf(termin);
    this.termine.splice(terminIndex, 1);
    let deleteToast = this.toastCtrl.create({
      message: termin.bezeichnung + ' wurde erfolgreich gelöscht',
      position: 'top',
      cssClass: 'myToast',
      duration: 2000
    });
    deleteToast.present();

    // this.terminProvider.terminLoeschen(id).subscribe(termine => {
    //   this.termine = termine;
    // });
  }

}
