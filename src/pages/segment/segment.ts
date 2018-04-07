import { Component } from '@angular/core';

@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {
  essen: string = 'pizza';
  trinken: string = 'wine';
  wetter: string = 'sunny';

  cafeClicked() {
    console.log('Kaffee wurde ausgewählt');
  }
}
