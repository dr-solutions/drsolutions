import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { TerminProvider } from '../../providers/termin/termin';
import { Termin } from '../../interfaces/termin/termin';
import { TerminErstellungPage } from '../termin-erstellung/termin-erstellung';
import { TerminBearbeitungPage } from '../termin-bearbeitung/termin-bearbeitung';
import { PersonProvider } from '../../providers/person/person';
import { PersonSelect } from '../../interfaces/person/personSelect';

@Component({
  selector: 'page-termin',
  templateUrl: 'termin.html',
})
export class TerminPage {
  termine: Termin[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public terminProvider: TerminProvider,
    public personProvider: PersonProvider) {
  }

  ionViewWillEnter() {
    this.terminProvider.getTermine().subscribe((termine: Termin[]) => {
      console.log('Das sind alle Termine: ', termine);
      this.termine = termine;
    });
  }

  goToTerminErstellung() {
    this.navCtrl.push(TerminErstellungPage);
  }

  goToTerminBearbeitung(termin: Termin) {
    this.personProvider.getPersonen().subscribe((personen: PersonSelect[]) => {
      this.navCtrl.push(TerminBearbeitungPage, { termin: termin, personen: personen});
    });
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
