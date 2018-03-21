import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-badge',
  templateUrl: 'badge.html',
})
export class BadgePage {
  laender: Laender[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private laenderProvider: LaenderProvider) {
  }

  ionViewDidLoad() {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.laender = laender
        .filter(land => land.population > 10000000)
        .sort((a, b) => a.population > b.population ? -1 : 1);
    });
  }

}
