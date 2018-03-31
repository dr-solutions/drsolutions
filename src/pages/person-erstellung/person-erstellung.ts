import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from '../../interfaces/person/person';
import { PersonProvider } from '../../providers/person/person';

@Component({
  selector: 'page-person-erstellung',
  templateUrl: 'person-erstellung.html',
})
export class PersonErstellungPage {
  personErstellungsForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public personProvider: PersonProvider) {

    this.personErstellungsForm = formBuilder.group({
      vorname: ['', Validators.required],
      nachname: ['', Validators.required],
      mail: ['', Validators.required],
      telefon: ['', Validators.required]
    });
  
  }

  submitPersonErstellung() {
    if (this.personErstellungsForm.valid) {

      const vorname = this.personErstellungsForm.get('vorname').value;
      const nachname = this.personErstellungsForm.get('nachname').value;
      const mail = this.personErstellungsForm.get('mail').value;
      const telefon = this.personErstellungsForm.get('telefon').value;

      const person: Person = {
        'vorname': vorname,
        'nachname': nachname,
        'mail': mail,
        'telefon' : telefon
      }

      this.personProvider.personErstellen(person).subscribe((personen: Person[]) => {
        this.navCtrl.pop();
        let createToast = this.toastCtrl.create({
          message: person.vorname + ' ' + person.nachname + ' wurde erfolgreich erstellt',
          position: 'bottom',
          cssClass: 'erfolgreichToast',
          duration: 2000
        });
        createToast.present();
      });
    }
  }
}
