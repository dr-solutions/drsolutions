import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Termin } from '../../interfaces/termin/termin';
import { TerminProvider } from '../../providers/termin/termin';

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public formBuilder: FormBuilder,
              public terminProvider: TerminProvider) {
    this.operation = this.navParams.get("operation");  
    this.termin = this.navParams.get('termin'); 

    this.terminErstellungsForm = formBuilder.group({
      bezeichnung: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      beiteiligtePersonen: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      zeitpunkt: ['', Validators.required]
    });
    
    this.terminBearbeitungsForm = formBuilder.group({
      bezeichnung: ['', Validators.required],
      beiteiligtePersonen:['', Validators.required],
      zeitpunkt: ['', Validators.required]
    });

    if (this.operation === 'bearbeiten' && this.termin) {
      console.log('hallo', this.termin);
      this.terminBearbeitungsForm.patchValue({'bezeichnung': this.termin.bezeichnung});
      this.terminBearbeitungsForm.patchValue({'beiteiligtePersonen': this.termin.beteiligtePersonen});
      this.terminBearbeitungsForm.patchValue({'zeitpunkt': this.termin.zeitpunt});
    }
  }

  submitTerminErstellungs() {
    if (this.terminErstellungsForm.valid) {

      const bezeichnung = this.terminErstellungsForm.get('bezeichnung').value;
      const beteiligte = this.terminErstellungsForm.get('beiteiligtePersonen').value;
      const zeitpunkt = this.terminErstellungsForm.get('zeitpunkt').value;

      const termin: Termin = {
        'bezeichnung': bezeichnung,
        'beteiligtePersonen': beteiligte,
        'zeitpunt': zeitpunkt
      }

      this.terminProvider.terminErstellen(termin).subscribe((termine: Termin[]) => {
        console.log(termine);
        this.navCtrl.pop();
        let createToast = this.toastCtrl.create({
          message: termin.bezeichnung + ' wurde erfolgreich erstellt',
          position: 'bottom',
          cssClass: 'myToast',
          duration: 2000
        });
        createToast.present();
      },
      err => {
          console.error(err);
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
        'zeitpunt': zeitpunkt
      }

      this.terminProvider.terminAendern(termin).subscribe((termine: Termin[]) => {
        console.log(termine);
        this.navCtrl.pop();
        let createToast = this.toastCtrl.create({
          message: termin.bezeichnung + ' wurde erfolgreich geändert',
          position: 'bottom',
          cssClass: 'myToast',
          duration: 2000
        });
        createToast.present();
      },
      err => {
          console.error(err);
      });
    }
  }

}
