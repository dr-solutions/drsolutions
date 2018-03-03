import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  letzteBenutzer: string[] = [];

  constructor(public navCtrl: NavController,
              public storage: Storage) {

    this.storage.forEach((value, key, index) => {
      if(key.startsWith('benutzer_')) {
        this.storage.get(key).then((value) => {
          console.log('Benutzerstorage: ', value);
        });
      }
    })

  }

}
