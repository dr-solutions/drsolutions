import { ErrorHandler, Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  constructor(public toastCtrl: ToastController) { }

  handleError(error) {
    const backendExceptionToast = this.toastCtrl.create({
      message: 'Fehler: ' + error.error,
      position: 'top',
      cssClass: 'fehlerToast',
      duration: 5000
    });
    const backendNichtVerfuegbarToast = this.toastCtrl.create({
      message: 'Backend läuft nicht',
      position: 'middle',
      cssClass: 'fehlerToast',
      duration: 5000
    });

    if (error.status === 500) {
      backendExceptionToast.present();
      return;
    }

    if (error.status === 0 && error.url === null) {
      backendNichtVerfuegbarToast.present();
      return;
    }

    throw error;
  }

}