import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {
  testCheckboxOpen: boolean;
  testCheckboxResult;

  testRadioOpen: boolean;
  testRadioResult;

  testConfirmResult: string;

  titel: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,) {
  }

  showBasicAlert() {
    let alert = this.alertCtrl.create({
      title: 'Normaler Alert Titel',
      message: 'Das ist die Nachricht des Alerts',
      buttons: ['Okeey']
    });
    alert.present()
  }

  showCheckboxAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Klick doch');

    alert.addInput({
      type: 'checkbox',
      label: 'Test 1',
      value: 'test1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Test2',
      value: 'test2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Test3',
      value: 'test3'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

  showRadioAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Klick doch, aber nur eins!');

    alert.addInput({
      type: 'radio',
      label: 'Radio 1',
      value: 'radio1'
    });

    alert.addInput({
      type: 'radio',
      label: 'Radio2',
      value: 'radio2'
    });

    alert.addInput({
      type: 'radio',
      label: 'Radio3',
      value: 'radio3',
      checked: true
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okeey',
      handler: data => {
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  showConfirmAlert() {
    let confirm = this.alertCtrl.create({
      title: 'Confirm Titel',
      message: 'Wollen Sie wirklich?',
      buttons: [
        {
          text: 'Nein',
          handler: () => {
            this.testConfirmResult = 'Nein';
          }
        },
        {
          text: 'Ja',
          handler: () => {
            this.testConfirmResult = 'Ja';
          }
        }
      ]
    });
    confirm.present()
  }

  showPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Eingabe ist erforderlich',
      message: "Geben Sie etwas ein",
      inputs: [
        {
          name: 'titel',
          placeholder: 'Titel'
        },
      ],
      buttons: [
        {
          text: 'Abbrechen',
          handler: data => {
            console.log('Abbrechen clicked');
          }
        },
        {
          text: 'Speichern',
          handler: data => {
            if (!data.titel) {
              // Bewirkt das Alert nicht geschlossen wird
              let deleteToast = this.toastCtrl.create({
                message: 'Titel erforderlich',
                position: 'top',
                cssClass: 'warnungToast',
                duration: 2000
              });
              deleteToast.present();
              return false;
            } else {
              this.titel = data.titel;
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
