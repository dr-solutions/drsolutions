import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
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
              public alertCtrl: AlertController,
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

  showConfirmation(id) {
    this.showDeleteConfirmation(id); 
  }

  showDeleteConfirmation(id) {
    let confirm = this.alertCtrl.create({
      title: 'Termin wird gelöscht',
      message: 'Wollen Sie den Termin wirklich löschen',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            this.terminLoeschen(id);
          }
        },
        {
          text: 'Nein',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  terminLoeschen(id) {
    const termin = this.termine.find(termin => termin.id === id);
    this.terminProvider.terminLoeschen(id).subscribe(termine => {
      this.termine = termine;

      let deleteToast = this.toastCtrl.create({
        message: termin.bezeichnung + ' wurde erfolgreich gelöscht',
        position: 'top',
        cssClass: 'erfolgreichToast',
        duration: 2000
      });
      deleteToast.present();
    });
  }

}
