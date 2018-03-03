import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BenutzerProvider } from '../../providers/benutzer/benutzer';
import { Benutzer } from '../../interfaces/benutzer/benutzer';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  benutzerList: Benutzer[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public benutzerProvider: BenutzerProvider) {
  }

  ionViewDidLoad() {
    this.benutzerProvider.getBenutzer().subscribe(data => {
      this.benutzerList = data;      
      console.log('Benutzer:', this.benutzerList);
    });
  }

}
