import { Component } from '@angular/core';
import { BenutzerProvider } from '../../providers/benutzer/benutzer';
import { Benutzer } from '../../interfaces/benutzer/benutzer';
import { Refresher, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-refresher',
  templateUrl: 'refresher.html',
})
export class RefresherPage {
  benutzerList: Benutzer[];
  max: number = 0;

  constructor(private benutzerProvider: BenutzerProvider,
              private toastCtrl: ToastController) {
  }

  ionViewWillEnter() {
    this.benutzerProvider.getBenutzer().subscribe((benutzer: Benutzer[]) => {
      this.benutzerList = benutzer.slice(0, 2);
    });
  }

  doRefresh(refresher: Refresher) {
    console.log(refresher);


    if (this.max >= 5) {
      this._presentToast();
      refresher.cancel();
    } else {
      this.benutzerProvider.getBenutzer().subscribe((benutzer: Benutzer[]) => {
        this.benutzerList = this.benutzerList.concat(benutzer.slice(0, 1));
        this.max++;
        refresher.complete();
      });
    }
    /*
    Refreher States:
      inactive    -   The refresher is not being pulled down or refreshing and is currently hidden.
      pulling     -   The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it’ll refresh.
      cancelling  -   The user pulled down the refresher and let go, but did not pull down far enough to kick off the refreshing state. 
                      After letting go, the refresher is in the cancelling state while it is closing, 
                      and will go back to the inactive state once closed.
      ready       -   The user has pulled down the refresher far enough that if they let go, it’ll begin the refreshing state.
      refreshing  -   The refresher is actively waiting on the async operation to end. Once the refresh handler calls complete() 
                      it will begin the completing state.
      completing  -   The refreshing state has finished and the refresher is in the process of closing itself. Once closed, 
                      the refresher will go back to the inactive state.
    */
  }

  private _presentToast() {
    let haltStopToast = this.toastCtrl.create({
      message: 'Halt Stop! Genug akutalisiert',
      position: 'bottom',
      cssClass: 'warnungToast',
      duration: 2000
    });
    haltStopToast.present();
  }
}
