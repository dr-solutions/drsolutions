import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-events-sub',
  templateUrl: 'events-sub.html',
})
export class EventsSubPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public events: Events) {
    this.events.subscribe('mein:input', (input) => {
      console.log('Input Text war:', input);

    });
  }

  // Unsubscribe funktioniert nicht ...
  // Scheiß events
  // Besser this.navCtrl.push(Seite, data);
  ionViewWillLeave() {
    this.events.unsubscribe('mein:input', (input) => {
      console.log('unsubscribed');
    });
  }
}
