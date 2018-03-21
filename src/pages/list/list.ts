import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, List, ToastController } from 'ionic-angular';
import { BenutzerProvider } from '../../providers/benutzer/benutzer';
import { Benutzer } from '../../interfaces/benutzer/benutzer';
import { DatePipe } from '@angular/common';
import { ItemSlidingPage } from '../item-sliding/item-sliding';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  benutzerList: Benutzer[];
  @ViewChild(List) list: List;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public benutzerProvider: BenutzerProvider,
              private storage: Storage,
              private toastCtrl: ToastController,
              private datePipe: DatePipe) {
  }

  ionViewDidLoad() {
    console.log('Sliding aktiviert: ', this.list.sliding);
    this.benutzerProvider.getBenutzer().subscribe((benutzer: Benutzer[]) => {
      this.benutzerList = benutzer;

      console.log(this.benutzerList[0].login.username + ' wird in den Store geschrieben');
      this.storage.set('benutzer_' + this.benutzerList[0].login.username, this.benutzerList[0].login.username);
    });
  }

  itemSelected(benutzer: Benutzer) {
    let messageText = benutzer.gender === 'female' 
      ? 'Sie ist registriert seit: ' + this.datePipe.transform(new Date(benutzer.registered), 'dd.MM.yyyy HH:mm:ss')
      : 'Er ist registriert seit: ' + this.datePipe.transform(new Date(benutzer.registered), 'dd.MM.yyyy HH:mm:ss');
    const benutzerToast = this.toastCtrl.create({
      message: messageText,
      duration: 3000,
      cssClass: 'infoToast'
    });
    benutzerToast.present();
  }

  goToSlidingPage() {
    this.navCtrl.pop();
    this.navCtrl.push(ItemSlidingPage);
  }

}
