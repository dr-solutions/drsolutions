import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
})
export class AppPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public app: App) {
    this.app.getActiveNavContainers().forEach(navigationContainer => {
      console.log(navigationContainer.id);
      console.log(navigationContainer.name);
      console.log(navigationContainer.parent);
      console.log(navigationContainer.getType());
      console.log(navigationContainer.getSecondaryIdentifier());
      console.log(this.app.getNavByIdOrName(navigationContainer.id));
      console.log(this.app.getRootNavById(navigationContainer.id));

      navigationContainer.getAllChildNavs().forEach((navigationContainer) => {
        console.log(navigationContainer.id);
        console.log(navigationContainer.name);
        console.log(navigationContainer.parent);
      });
      navigationContainer.getAllChildNavs().forEach((navigationContainer) => {
        console.log(navigationContainer.id);
        console.log(navigationContainer.name);
        console.log(navigationContainer.parent);
      });

      console.log(this.app.getRootNavs());
      console.log(this.app.isScrolling());
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

}
