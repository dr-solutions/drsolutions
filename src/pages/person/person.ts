import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Person } from '../../interfaces/person/person';
import { PersonProvider } from '../../providers/person/person';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {
  personen: Person[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public personProvider: PersonProvider) {
  }

  ionViewWillEnter() {
    this.personProvider.getPersonen().subscribe((personen: Person[]) => {
      this.personen = personen;
    });
  }

  goToPersonErstellung() {
    //this.navCtrl.push(TerminErstellungPage);
  }

  goToPersonBearbeitung(person: Person) {
    //this.personProvider.getPersonen().subscribe((personen: Person[]) => {
    //  this.navCtrl.push(TerminBearbeitungPage, { person: person});
    //});
  }

  showConfirmation(id) {
    this.showDeleteConfirmation(id);
  }

  showDeleteConfirmation(id) {
    let confirm = this.alertCtrl.create({
      title: 'Person wird gelöscht',
      message: 'Wollen Sie die Person wirklich löschen',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            this.personLoeschen(id);
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

  personLoeschen(id) {
    const person = this.personen.find(p => p.id === id);
    this.personProvider.personLoeschen(id).subscribe(personen => {
      this.personen = personen;

      let deleteToast = this.toastCtrl.create({
        message: person.vorname + ' ' + person.nachname + ' wurde erfolgreich gelöscht',
        position: 'top',
        cssClass: 'erfolgreichToast',
        duration: 2000
      });
      deleteToast.present();
    });
  }
}
