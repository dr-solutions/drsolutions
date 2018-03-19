import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding, ToastController } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-item-sliding',
  templateUrl: 'item-sliding.html',
})
export class ItemSlidingPage {
  items: Laender[];
  geleseneLaender: string[] = [];

  constructor(public navCtrl: NavController,
            public navParams: NavParams,
            public toastCtrl: ToastController,
            public laenderProvider: LaenderProvider) {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.items = laender.filter(land => land.name.startsWith('D'));
    });
  }

  onDrag(item: ItemSliding) {
    let percent = item.getSlidingPercent();
    if (percent > 0) {
      // positive
      console.log('right side');
    } else {
      // negative
      console.log('left side');
    }
    // Müllt die Console voll 
    // if (Math.abs(percent) > 1) {
    //   console.log('overscroll');
    // }
  }

  teilen(item: ItemSliding) {
    let teilenToast = this.toastCtrl.create({
      message: 'Geteilt',
      position: 'bottom',
      cssClass: 'erfolgreichToast',
      duration: 1000
    });
    teilenToast.present();
  }

  gelesen(item: ItemSliding, laendername: string) {
    this.geleseneLaender.push(laendername);
    item.close();
  }

  delete(item: ItemSliding, land: Laender) {
    console.log(item);
    const index = this.items.indexOf(land);
    this.items.splice(index, 1);
  }

}
