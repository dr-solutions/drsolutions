import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  laender: Laender[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public laenderProvider: LaenderProvider) {
  }

  ionViewDidLoad() {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.laender = laender.filter(land => land.population > 200000000);
    });
  }

}
