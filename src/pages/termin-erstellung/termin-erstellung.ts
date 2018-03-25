import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TerminProvider } from '../../providers/termin/termin';
import { Termin } from '../../interfaces/termin/termin';
import { PersonProvider } from '../../providers/person/person';
import { PersonSelect } from '../../interfaces/person/personSelect';

@Component({
  selector: 'page-termin-erstellung',
  templateUrl: 'termin-erstellung.html',
})
export class TerminErstellungPage {
  terminErstellungsForm: FormGroup;
  personen: PersonSelect[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public terminProvider: TerminProvider,
              public personProvider: PersonProvider) {

    this.personProvider.getPersonen().subscribe((personen: PersonSelect[]) => {
      this.personen = personen;
    });

    this.terminErstellungsForm = formBuilder.group({
      bezeichnung: ['', Validators.required],
      beiteiligtePersonen: ['', Validators.required],
      zeitpunkt: ['', Validators.required]
    });
  
  }

  submitTerminErstellungs() {
    if (this.terminErstellungsForm.valid) {

      const bezeichnung = this.terminErstellungsForm.get('bezeichnung').value;
      const beteiligte = this.terminErstellungsForm.get('beiteiligtePersonen').value;
      const zeitpunkt = this.terminErstellungsForm.get('zeitpunkt').value;

      const termin: Termin = {
        'bezeichnung': bezeichnung,
        'beteiligtePersonen': beteiligte,
        'zeitpunkt': zeitpunkt
      }

      this.terminProvider.terminErstellen(termin).subscribe((termine: Termin[]) => {
        console.log(termine);
        this.navCtrl.pop();
        let createToast = this.toastCtrl.create({
          message: termin.bezeichnung + ' wurde erfolgreich erstellt',
          position: 'bottom',
          cssClass: 'erfolgreichToast',
          duration: 2000
        });
        createToast.present();
      });
    }
  }

}
