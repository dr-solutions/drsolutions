import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GridPage } from '../grid/grid';

@Component({
  selector: 'page-row',
  templateUrl: 'row.html',
})
export class RowPage {

  constructor(public navCtrl: NavController) {
  }

  goToGrid() {
    this.navCtrl.pop();
    this.navCtrl.push(GridPage);
  }

}
