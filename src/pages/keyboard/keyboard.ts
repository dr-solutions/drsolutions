import { Component } from '@angular/core';
import { NavController, NavParams, Keyboard } from 'ionic-angular';

@Component({
  selector: 'page-keyboard',
  templateUrl: 'keyboard.html',
})
export class KeyboardPage {
  nachricht: string = "";
  nachricht1: string = "";
  nachricht2: string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public keyboard: Keyboard) {
    this.keyboard.onClose(this.closeCallback())
    this.keyboard.hideFormAccessoryBar(false);
  }

  closeCallback(): any {
    this.nachricht = 'Funktionalität die vor dem Schließen des Keyboards ausgeführt werden soll';
  }

  closeKeyboard() {
    if (this.keyboard.isOpen()) {
      this.nachricht1 = 'Keyboard ist offen und wird geschlossen';
      this.keyboard.close();
    } else {
      this.nachricht2 = 'Keyboard ist nicht offen und kann deshalb nicht geschlossen werden';
    }
  }

}
