import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { KomponentenPage } from '../komponenten/komponenten';

@IonicPage({
  name: 'home'
})
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

  goToKomponenten() {
    this.navCtrl.push(KomponentenPage);
  }

}
