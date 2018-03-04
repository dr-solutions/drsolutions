import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { RandomIntProvider } from '../../providers/random-int/random-int';

@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html'
})
export class ActionsheetPage {

  randomInt: number = 0;
  errorMessage: string;

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public navParams: NavParams,
              public randomIntProvider: RandomIntProvider) {
  }

  ionViewDidLoad() {
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Testtitel',
      subTitle: 'Untertitel',
      buttons: [
        {
          text: 'Test backend',
          role: 'destructive',
          icon: 'ice-cream',
          handler: () => {
            console.log('Test backend clicked');
            let navTransition = actionSheet.dismiss();

            this.randomIntProvider.getRandomInteger()
              .subscribe((randomInt) => {
                console.log(randomInt);

                this.randomInt = randomInt;

                navTransition.then(() => {
                  // this.navCtrl.pop();
                });
              },
              err => {
                  console.error(err);
                  this.errorMessage = err;
              });
            return false;
          }
        },
        {
          text: 'Nichts passiert',
          handler: () => {
            console.log('nichts');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
 
    actionSheet.present();
  }

}
