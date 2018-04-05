import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-searchbar',
  templateUrl: 'searchbar.html',
})
export class SearchbarPage {
  items: Laender[] = [];
  errorText: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private laenderProvider: LaenderProvider) {
    this._initializeItems();
  }

  getItems(event) {
    console.log(event);
    var wert = event.target.value;

    if (wert && wert.trim() != '') {
      this.laenderProvider.searchLaenderByName(wert).subscribe((result: Laender[]) => {
        console.log('Searchresult:', result);
        this.items = result;
        this.errorText = '';
      },
        (err => {
          console.log(err);
          if (err.error.status = 404 && err.error.message === 'Not Found') {
            this.items = [];
            this.errorText = 'Keine Ergebnisse gefunden';
          }
        }));
    } else {
      this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
        this.items = laender;
      });
    }
  }

  onCancel(event) {
    console.log('Cancel:' , event);
  }

  onClear(event) {
    console.log('Clear: ', event);
  }

  private _initializeItems() {
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.items = laender;
    })
  }

}
