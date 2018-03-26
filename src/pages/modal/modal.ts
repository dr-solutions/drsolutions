import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalExample1Page } from '../modal-example1/modal-example1';
import { ModalExample2Page } from '../modal-example2/modal-example2';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  data = {
    id: '123',
    vorname: 'Max',
    nachname: 'Mustermann'
  };

  historie: string[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  openModal() {
    let profileModal = this.modalCtrl.create(ModalExample1Page);
    profileModal.present();
  }

  openModalWithParams() {
    let example2Modal = this.modalCtrl.create(ModalExample2Page, {data: this.data});

    example2Modal.onWillDismiss(data => {
      console.log('Gleich schließ ich mich ...');
    });

    example2Modal.onDidDismiss(data => {
      console.log(data);
      if (data) {
        this.data = data.daten;
        this.historie.push(data.letzter ? 'Der Vorname war: ' + data.letzter : 'Der Vorname war leer');
        this.historie.push(this.data.vorname ? 'Der Vorname ist jetzt: ' + this.data.vorname : 'Der Vorname wurde gelöscht');
      }
    });

    example2Modal.present();
  }

}
