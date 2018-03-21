import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { EventsSubPage } from '../events-sub/events-sub';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  myInput: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public events: Events) {
  }

  buttonClicked() {
    this.events.publish('mein:input', this.myInput);
    this.navCtrl.push(EventsSubPage);
  }

}
