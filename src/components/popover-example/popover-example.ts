import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'popover-example',
  templateUrl: 'popover-example.html'
})
export class PopoverExampleComponent {
  color: string;
  
  constructor(public viewCtrl: ViewController, 
              public navParams: NavParams) { 
    this.color = this.navParams.get('data');
  }

  save(color: string) {
    if (this.color === color) {
      this.viewCtrl.dismiss({sameColor: 'Die Farbe ' + color + ' ist schon gesetzt!'});
    } else {
      this.color = color;
      this.viewCtrl.dismiss({color: this.color});
    }
  }

  // Eigentlich sollte ein Popover gar keinen Close Button haben
  close() {
    this.viewCtrl.dismiss();
  }

}
