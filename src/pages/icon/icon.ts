import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-icon',
  templateUrl: 'icon.html',
})
export class IconPage {
  myColor: string = 'primary';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changeColor(): void {
      if(this.myColor === 'primary') { 
        this.myColor = 'btnColor'
      } else {
        this.myColor = 'primary'
      }
  }

}
