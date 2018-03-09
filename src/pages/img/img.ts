import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';

@Component({
  selector: 'page-img',
  templateUrl: 'img.html',
})
export class ImgPage {
  flaggen: string[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public laenderProvider: LaenderProvider) {
    this.laenderProvider.getLaenderImages().subscribe((flaggen: string[]) => {
      this.flaggen = flaggen;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImgPage');
  }

}
