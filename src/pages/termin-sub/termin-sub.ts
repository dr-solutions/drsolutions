import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Termin } from '../../interfaces/termin/termin';
import { TerminProvider } from '../../providers/termin/termin';
import { PersonProvider } from '../../providers/person/person';
import { PersonSelect } from '../../interfaces/person/personSelect';

@Component({
  selector: 'page-termin-sub',
  templateUrl: 'termin-sub.html',
})
export class TerminSubPage {
  operation: string;
  termin: any;
  terminErstellungsForm: FormGroup;
  terminBearbeitungsForm: FormGroup;
  minDate: Date;
  personen: PersonSelect[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public terminProvider: TerminProvider,
              public personProvider: PersonProvider) {
    this.operation = this.navParams.get("operation");  
    this.termin = this.navParams.get('termin'); 

    this.terminErstellungsForm = formBuilder.group({
      bezeichnung: ['', Validators.required],
      beiteiligtePersonen: ['', Validators.required],
      zeitpunkt: ['', Validators.required]
    });
    
    this.terminBearbeitungsForm = formBuilder.group({
      bezeichnung: ['', Validators.required],
      beiteiligtePersonen:['', Validators.required],
      zeitpunkt: ['', Validators.required]
    });

    if (this.operation === 'bearbeiten' && this.termin) {
      this.terminBearbeitungsForm.patchValue({'bezeichnung': this.termin.bezeichnung});
      this.terminBearbeitungsForm.patchValue({'beiteiligtePersonen': this.termin.beteiligtePersonen});
      this.terminBearbeitungsForm.patchValue({'zeitpunkt': this.termin.zeitpunkt});
    }

    this.personProvider.getPersonen().subscribe((personen: PersonSelect[]) => {
      this.personen = personen;
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
