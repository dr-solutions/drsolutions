import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-radio-group',
  templateUrl: 'radio-group.html',
})
export class RadioGroupPage {
  selected: string;
  sprache: FormControl;
  spracheForm: FormGroup;

  constructor() {
    this.spracheForm = new FormGroup({
      "sprache": new FormControl({value: 'java', disabled: false})
    });
  }

  selectionChanged(item) {
    console.log('Selektierter Wert: ' , item);
  }
  
  getSelected(sprache) {
    return this.spracheForm.get('sprache').value === sprache;
  }

}
