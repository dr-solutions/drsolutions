import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-example1',
  templateUrl: 'modal-example1.html',
})
export class ModalExample1Page {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
