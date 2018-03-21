import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html',
})
export class InfiniteScrollPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
