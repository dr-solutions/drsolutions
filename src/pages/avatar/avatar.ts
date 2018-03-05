import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Laender } from '../../interfaces/laender/laender';
import { LaenderProvider } from '../../providers/laender/laender';

@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html',
})
export class AvatarPage {
  laender: Laender[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private laenderProvider: LaenderProvider) {
  }

  ionViewDidLoad() {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.laender = laender;
    });
  }

}