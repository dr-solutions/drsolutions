import { Component } from '@angular/core';

@Component({
  selector: 'page-spinner',
  templateUrl: 'spinner.html',
})
export class SpinnerPage {

  paused: boolean = false;

  startAndStopSpinner() {
    return this.paused ? this.paused = false : this.paused = true;
  }

}
