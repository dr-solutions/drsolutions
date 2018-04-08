import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  // Exrem viele Events siehe: https://ionicframework.com/docs/api/components/slides/Slides/#output-events

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    console.log('slide changed');
    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex);
  }

  goToPrevious() {
    this.slides.slidePrev(1000);
  }

  goToNext() {
    this.slides.slideNext(3000);
  }

  startAutoplay() {
    this.slides.startAutoplay();
  }

  stopAutoplay() {
    this.slides.stopAutoplay();
  }

}
