import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Termin } from '../../interfaces/termin/termin';
import { TerminProvider } from '../../providers/termin/termin';
import { PersonSelect } from '../../interfaces/person/personSelect';

@Component({
  selector: 'page-termin-bearbeitung',
  templateUrl: 'termin-bearbeitung.html',
})
export class TerminBearbeitungPage {
  terminBearbeitungsForm: FormGroup;
  termin: Termin;
  personen: PersonSelect[];

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public navParams: NavParams,
              public terminProvider: TerminProvider) {
    this.termin = this.navParams.get('termin');
    this.personen = this.navParams.get('personen');

    this.terminBearbeitungsForm = formBuilder.group({
      bezeichnung: ['', Validators.required],
      beiteiligtePersonen: ['', Validators.required],
      zeitpunkt: ['', Validators.required]
    });

    if (this.termin && this.termin.beteiligtePersonen) {
      this.termin.beteiligtePersonen.forEach((person: PersonSelect) => {
        let personIsAlreadySelected: PersonSelect = this.personen
          .find((beteiligtePerson: PersonSelect) => beteiligtePerson.value === person.value);
        let index = this.personen.indexOf(personIsAlreadySelected);
        this.personen[index].selected = true;
      });

      if (this.personen) {
        this.terminBearbeitungsForm.patchValue({ 'bezeichnung': this.termin.bezeichnung });
        this.terminBearbeitungsForm.patchValue({ 'beiteiligtePersonen': this.personen });
        this.terminBearbeitungsForm.patchValue({ 'zeitpunkt': this.termin.zeitpunkt });
      }
    }
  }

  submitTerminBearbeitung() {
    if (this.terminBearbeitungsForm.valid) {

      const bezeichnung = this.terminBearbeitungsForm.get('bezeichnung').value;
      const beteiligte = this.terminBearbeitungsForm.get('beiteiligtePersonen').value;
      const zeitpunkt = this.terminBearbeitungsForm.get('zeitpunkt').value;

      const termin: Termin = {
        'id': this.termin.id,
        'bezeichnung': bezeichnung,
        'beteiligtePersonen': beteiligte,
        'zeitpunkt': zeitpunkt
      }

      this.terminProvider.terminAendern(termin).subscribe((termine: Termin[]) => {
        console.log(termine);
        this.navCtrl.pop();
        let createToast = this.toastCtrl.create({
          message: termin.bezeichnung + ' wurde erfolgreich geändert',
          position: 'bottom',
          cssClass: 'erfolgreichToast',
          duration: 2000
        });
        createToast.present();
      });
    }
  }

}
