import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { PopoverExampleComponent } from '../../components/popover-example/popover-example';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {
  myColor: string = 'primary';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public popoverCtrl: PopoverController,
              public toastCtrl: ToastController) {
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverExampleComponent, {data: this.myColor});

    popover.onDidDismiss(data => {
      if (data && data.color) {
        this.myColor = data.color;
      }
      if (data && data.sameColor) {
        let warningToast = this.toastCtrl.create({
          message: data.sameColor,
          position: 'bottom',
          cssClass: 'warnungToast',
          duration: 2000
        });
        warningToast.present();
      }
    });

    popover.present({
      ev: myEvent
    });
  }
}
