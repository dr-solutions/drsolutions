import { Component } from '@angular/core';
import { LaenderProvider } from '../../providers/laender/laender';
import { Laender } from '../../interfaces/laender/laender';

@Component({
  selector: 'page-thumbnail',
  templateUrl: 'thumbnail.html',
})
export class ThumbnailPage {
  laender: Laender[];

  constructor(private laenderProvider: LaenderProvider){
    this.laenderProvider.getLaender().subscribe((laender: Laender[]) => {
      this.laender = laender.filter(land => land.alpha3Code.startsWith('A'));
    })
  }

}
