import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-gestures',
  templateUrl: 'gestures.html',
})
export class GesturesPage {
  
  press: number = 0;
  pan: number = 0;
  swipe: number = 0;
  tap: number = 0;
  rotate: number = 0;
  pinch: number = 0;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  pressEvent(event) {
    console.log(event);
    this.press++;
  }

  panEvent(event) {
    this.pan++;
  }

  swipeEvent(event) {
    this.swipe++;
  }

  tapEvent(event) {
    this.tap++;
  }

  rotateEvent(event) {
    this.rotate++;
  }

  /*
  Keine Ahnung was pinched ist :D
  */
  pinchEvent(event) {
    this.pinch++;
  }

}
