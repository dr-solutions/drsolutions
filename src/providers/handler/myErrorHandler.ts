import { ErrorHandler, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  constructor(public toastCtrl: ToastController) { }

  handleError(error) {
    let createToast = this.toastCtrl.create({
      message: 'Fehler: ' + error.error,
      position: 'top',
      cssClass: 'fehlerToast',
      duration: 5000
    });

    if (error.status === 500) {
      createToast.present();
      return;
    }

    throw error;
  }

}