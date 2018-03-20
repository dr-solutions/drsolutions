import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private laenderProvider: LaenderProvider) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Sachen machen............. Bitte warten...",
      duration: 3000,
      // showBackdrop: false
    });
    loader.present();
  }

  backendCall() {
    let loader = this.loadingCtrl.create({
      content: "Sachen laden",
    });
    loader.present();
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      loader.dismiss();
    });
  }

  spinner1() {
    let loader = this.loadingCtrl.create({
      duration: 2000,
      spinner: 'ios'
    });
    loader.present();
  }

  spinner2() {
    let loader = this.loadingCtrl.create({
      duration: 2000,
      spinner: 'ios-small'
    });
    loader.present();
  }

  spinner3() {
    let loader = this.loadingCtrl.create({
      duration: 3000,
      spinner: 'bubbles'
    });
    loader.present();
  }

  spinner4() {
    let loader = this.loadingCtrl.create({
      duration: 2000,
      spinner: 'circles'
    });
    loader.present();
  }

  spinner5() {
    let loader = this.loadingCtrl.create({
      duration: 2000,
      spinner: 'crescent'
    });
    loader.present();
  }

  spinner6() {
    let loader = this.loadingCtrl.create({
      duration: 2000,
      spinner: 'dots'
    });
    loader.present();
  }

}
