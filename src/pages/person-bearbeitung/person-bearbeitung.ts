import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../interfaces/person/person';
import { PersonProvider } from '../../providers/person/person';

@Component({
  selector: 'page-person-bearbeitung',
  templateUrl: 'person-bearbeitung.html',
})
export class PersonBearbeitungPage {
  personBearbeitungsForm: FormGroup;
  person: Person;

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public navParams: NavParams,
              public personProvider: PersonProvider) {
    this.person = this.navParams.get('person');

    this.personBearbeitungsForm = formBuilder.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      mail: ['', Validators.required],
      telefon: ['', Validators.required]
    });

    if (this.person) {
      this.personBearbeitungsForm.patchValue({ 'vorname': this.person.vorname });
      this.personBearbeitungsForm.patchValue({ 'nachname': this.person.nachname });
      this.personBearbeitungsForm.patchValue({ 'mail': this.person.mail });
      this.personBearbeitungsForm.patchValue({ 'telefon': this.person.telefon });
    }
  }

  submitPersonBearbeitung() {
    if (this.personBearbeitungsForm.valid) {

      const vorname = this.personBearbeitungsForm.get('vorname').value;
      const nachname = this.personBearbeitungsForm.get('nachname').value;
      const mail = this.personBearbeitungsForm.get('mail').value;
      const telefon = this.personBearbeitungsForm.get('telefon').value;

      const person: Person = {
        'id': this.person.id,
        'vorname': vorname,
        'nachname': nachname,
        'mail': mail,
        'telefon' : telefon
      }

      this.personProvider.personAendern(person).subscribe((personen: Person[]) => {
        this.navCtrl.pop();
        let createToast = this.toastCtrl.create({
          message: person.vorname + ' ' + person.nachname + ' wurde erfolgreich geändert',
          position: 'bottom',
          cssClass: 'erfolgreichToast',
          duration: 2000
        });
        createToast.present();
      });
    }
  }
}
