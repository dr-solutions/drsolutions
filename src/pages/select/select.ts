import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {
  interface: string = 'alert';

  tier: string = 'Katze';
  tierPopover: string = 'Katze';
  tierActionSheet: string = 'Katze';
  tiereSelected: string[] = ['Katze', 'Maus'];
  autosSelected: {value: string}[] = [{value: 'audiA3'}, {value: 'audiRs3'}];

  tiere: string[] = ['Hund', 'Katze', 'Maus', 'Elefant'];
  autos: {
    label: string,
    value: string,
    ps: number
  } [];

  tiereAlertOpts: { title: string, subTitle: string, message: string, cssClass: string };
  tierePopoverOpts: { cssClass: string };
  tiereActionSheetOpts: { title: string, subTitle: string, cssClass: string };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tiereAlertOpts = {
      title: 'Tiere',
      subTitle: 'Tier wählen',
      message: 'Bitte wählen Sie hier ihr Tier aus',
      cssClass: 'meineTierSelect'
    }

    this.tierePopoverOpts = {
      cssClass: 'meineTierSelect'
    }

    this.tiereActionSheetOpts = {
      title: 'Tiere',
      subTitle: 'Tier wählen',
      cssClass: 'meineTierSelect'
    }

    this.autos = [
      { label: 'Audi A3', value: 'audiA3', ps: 140 },
      { label: 'Audi A4', value: 'audiA4', ps: 170 },
      { label: 'Audi RS3', value: 'audiRs3', ps: 400 },
      { label: 'Audi RS4', value: 'audiRs4', ps: 500 },
      { label: 'Vw Polo', value: 'vwPolo', ps: 75 },
      { label: 'Vw Golf', value: 'vwGolf', ps: 90 },
    ]
  }

  tierSelected(element) {
    console.log(element + ' wurde selektiert');
  }

  compareFn(auto1: {label: string, value: string, ps: number}, auto2: {label: string, value: string, ps: number}): boolean {
    return auto1 && auto2 ? auto1.value === auto2.value : auto1 === auto2;
  }

}
