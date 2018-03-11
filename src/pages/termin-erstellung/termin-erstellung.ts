import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Termin } from '../../interfaces/termin/termin';
import { TerminProvider } from '../../providers/termin/termin';
import { TerminPage } from '../termin/termin';

@Component({
  selector: 'page-termin-erstellung',
  templateUrl: 'termin-erstellung.html',
})
export class TerminErstellungPage {
  terminErstellungsForm: FormGroup;
  minDate: Date;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public terminProvider: TerminProvider) {
    this.terminErstellungsForm = formBuilder.group({
      bezeichnung: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      beiteiligtePersonen: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      zeitpunkt: ['', Validators.required]
    });
    
    this.minDate = new Date();
  }

  submitTerminErstellungs() {
    if (this.terminErstellungsForm.valid) {

      const bezeichnung = this.terminErstellungsForm.get('bezeichnung').value;
      const beteiligte = this.terminErstellungsForm.get('beiteiligtePersonen').value;
      const zeitpunkt = this.terminErstellungsForm.get('zeitpunkt').value;

      const termin: Termin = {
        bezeichnung: bezeichnung,
        beteiligtePersonen: beteiligte,
        zeitpunt: zeitpunkt
      }

      this.terminProvider.terminErstellen(termin).subscribe((termine: Termin[]) => {
        console.log(termine);
        // this.navCtrl.push(TerminPage);
      },
      err => {
          console.error(err);
      });
    }
  }

}
