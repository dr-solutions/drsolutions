import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlterValidator } from '../../validators/alterValidator';

@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})
export class InputPage {
  auto: Auto;  
  form1: FormGroup;
  form2: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder) {
    this.auto = {
      marke: '',
      modell: ''
    };

    
    this.form1 = new FormGroup({
      vorname: new FormControl("", Validators.required),
      nachname: new FormControl("", Validators.required),
      alter: new FormControl('', AlterValidator.isValid)
    });

    this.form2 = formBuilder.group({
      vorname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      nachname: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      alter: ['', AlterValidator.isValid]
  });
  }

  onSubmitTemplateDrivenForm(form) {
    console.log(form);
  }

  processForm1(formGroup: FormGroup) {
    if (this.form1.invalid) {
      console.log('fail');
      this._validateAllFields(this.form1);
    }
    console.log('Form: ', this.form1);
  }

  processForm2() {
    if (this.form2.invalid) {
      console.log('fail');
    }
    console.log('Form: ', this.form2);
  }

  private _validateAllFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field);            
        if (control instanceof FormControl) {             
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        
            this._validateAllFields(control);  
        }
    });
}

}

export interface Auto {
  marke?: string;
  modell?: string;
}
