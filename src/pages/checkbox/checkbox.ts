import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-checkbox',
  templateUrl: 'checkbox.html',
})
export class CheckboxPage {
  laender: Laender[];
  borders: string[];
  checked: boolean = false;
  checkboxMap = new Map();
  checkboxArray: string[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public laenderProvider: LaenderProvider) {
  }

  ionViewDidLoad() {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.laender = laender;
      this.borders = laender.find(land => land.alpha3Code === 'AUT').borders;
    });
  }

  checkboxClicked(border) {
    console.log('Checkbox clicked: ' , border);
  }

  checkboxChanged(checkbox, border) {
    this.checkboxMap.set(border, checkbox.checked);
    if (this.checkboxMap.get(border)) {
      if (!this.checkboxArray || this.checkboxArray.length === 0) {
        this.checkboxArray = [];
        this.checkboxArray.push(border);
      } else {
        if (!(this.checkboxArray.indexOf(border) >= 0)) {
            this.checkboxArray.push(border);
        };
      };
    } else {
      const index = this.checkboxArray.indexOf(border);
      this.checkboxArray.splice(index, 1);
    }
  }

  getLandByAlpha3Code(alpha3Code): Laender {
    return this.laender.find(land => land.alpha3Code === alpha3Code);
  }

  getLandNameByAlpha3Code(alpha3Code): string {
    return this.laender.find(land => land.alpha3Code === alpha3Code).name;
  }

}
