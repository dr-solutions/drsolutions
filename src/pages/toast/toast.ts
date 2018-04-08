import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {
  constructor(public toastCtrl: ToastController) { }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'Toast with position: ' + position,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 2000,
    });
    toast.present();
  }

  showInfoToast() {
    let toast = this.toastCtrl.create({
      message: 'Infomeldung',
      cssClass: 'infoToast',
      duration: 2000
    });

    toast.present(toast);
  }

  showWarnungToast() {
    let toast = this.toastCtrl.create({
      message: 'Warnmeldung',
      cssClass: 'warnungToast',
      duration: 2000
    });

    toast.present(toast);
  }

  showFehlerToast() {
    let toast = this.toastCtrl.create({
      message: 'Fehlernmeldung',
      cssClass: 'fehlerToast',
      duration: 2000
    });

    toast.present(toast);
  }

  showErfolgreichToast() {
    let toast = this.toastCtrl.create({
      message: 'Erfolgreichmeldung',
      cssClass: 'erfolgreichToast',
      duration: 2000
    });

    toast.present(toast);
  }
}
