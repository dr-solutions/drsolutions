import { Component } from '@angular/core';

@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {  
  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };

  fontSize: number = 14;

  meinText: string = 'Mein Text';

  rangeChanged(item) {
    if (item.value === 22) {
      item.color = 'danger';
    } else {
      item.color = 'primary';
    }
  }

  log(item) {
    console.log(item);
    console.log(item.value);
  }

}
