import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {
  // Es gibt noch einige andere Methoden siehe this.content.
  @ViewChild(Content) content: Content;
  laender: Laender[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public laenderProvider: LaenderProvider) {
  }

  ionViewDidLoad() {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.laender = laender.filter(land => land.area > 1000000);
    });
  }

  toTop() {
    this.content.scrollToTop();
  }

  toBottom() {
    this.content.scrollToBottom();
  }

}
