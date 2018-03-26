import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { DocumentDirection } from 'ionic-angular/platform/platform';

@Component({
  selector: 'page-platform',
  templateUrl: 'platform.html',
})
export class PlatformPage {
  dir: DocumentDirection;
  height: number;
  width: number;
  android: boolean;
  ios: boolean;
  ipad: boolean;
  iphone: boolean;
  mobile: boolean;
  mobileweb: boolean;
  phablet: boolean;
  tablet: boolean;
  windows: boolean;
  core: boolean;
  cordova: boolean;
  landscape: boolean;
  portrait: boolean;
  lang: string;
  platforms: string[];
  url: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public platform: Platform) {
    this.dir = this.platform.dir();
    this.height = this.platform.height();
    this.width = this.platform.width();
    this.android = this.platform.is('android');
    this.ios = this.platform.is('ios');
    this.ipad = this.platform.is('ipad');
    this.iphone = this.platform.is('iphone');
    this.mobile = this.platform.is('mobile');
    this.mobileweb = this.platform.is('mobileweb');  // browser of a mobile device
    this.phablet = this.platform.is('phablet');
    this.tablet = this.platform.is('tablet');
    this.windows = this.platform.is('windows');
    this.core = this.platform.is('core'); // desktop
    this.cordova = this.platform.is('cordova');
    this.landscape = this.platform.isLandscape();
    this.portrait = this.platform.isPortrait();
    this.lang = this.platform.lang();
    this.platforms = this.platform.platforms();
    this.url = this.platform.url();
    console.log(this.platform.versions());

    // Wenn app in den Hintergrund kommt (z.B.: eine andere App öffnet sich)
    this.platform.pause.subscribe(e => {
      console.log(e);
    });

    // App kommt wieder hoch
    this.platform.resume.subscribe(e => {

    });
  }

}
