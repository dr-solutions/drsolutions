import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-item-recorder',
  templateUrl: 'item-recorder.html',
})
export class ItemRecorderPage {
  items: Laender[];
  items1: Laender[];
  items2: Laender[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public laenderProvider: LaenderProvider) {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.items = laender.filter(land => land.name.startsWith('D'));
      this.items1 = laender.filter(land => land.name.startsWith('D'));
      this.items2 = laender.filter(land => land.name.startsWith('D'));
    });
  }

  reorderItems(indexes) {
    let element = this.items[indexes.from];
    this.items.splice(indexes.from, 1);
    this.items.splice(indexes.to, 0, element);
  }

  reorderItems2(indexes) {
    this.items1 = reorderArray(this.items1, indexes);
  }

}
