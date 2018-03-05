import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionsheetPage } from '../actionsheet/actionsheet';
import { AlertPage } from '../alert/alert';
import { ListPage } from '../list/list';
import { BadgePage } from '../badge/badge';
import { AppPage } from '../app/app';
import { AvatarPage } from '../avatar/avatar';
import { ButtonPage } from '../button/button';
import { CardPage } from '../card/card';

@Component({
  selector: 'page-komponenten',
  templateUrl: 'komponenten.html',
})
export class KomponentenPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KomponentenPage');
  }

  goToActionsheet() {
    this.navCtrl.push(ActionsheetPage);
  }

  goToAlert() {
    this.navCtrl.push(AlertPage);
  }

  goToApp() {
    this.navCtrl.push(AppPage);
  }

  goToAvatar() {
    this.navCtrl.push(AvatarPage);
  }

  goToBadge() {
    this.navCtrl.push(BadgePage);
  }

  goToButton() {
    this.navCtrl.push(ButtonPage);
  }

  goToCard() {
    this.navCtrl.push(CardPage);
  }

  goToCheckbox() {

  }

  goToChip() {

  }

  goToCol() {

  }

  goToConfig() {

  }

  goToContent() {

  }

  goToDateTime() {
  
  }

  goToEvents() {

  }

  goToFabButton() {

  }

  goToFabContainer() {

  }

  goToFooter() {

  }

  goToGrid() {

  }

  goToHaptic() {

  }

  goToHeader() {

  }

  goToHideWhen() {

  }

  goToIcon() {

  }

  goToImg() {

  }

  goToInfiniteScroll() {

  }

  goToInput() {

  }

  goToIonicErrorHandler() {

  }

  goToIonicModule() {

  }

  goToIonicPage() {

  }

  goToIonicPageModule() {

  }

  goToItem() {

  }

  goToItemOptions() {

  }

  goToItemRecorder() {

  }

  goToItemSliding() {

  }

  goToKeyboard() {

  }

  goToLabel() {

  }

  goToList() {
    this.navCtrl.push(ListPage);
  }

  goToLoadingController() {

  }

  goToMenu() {

  }

  goToMenuClose() {

  }

  goToMenuController() {

  }

  goToMenuToggle() {

  }

  goToModalController() {

  }

  goToNav() {

  }

  goToNavbar() {

  }

  goToNavController() {

  }

  goToNavParams() {

  }

  goToNavPop() {

  }

  goToNavPush() {

  }

  goToNote() {

  }

  goToOption() {

  }

  goToPlatform() {

  }

  goToPlatformConfigToken() {

  }

  goToPopoverController() {

  }

  goToRadioButton() {

  }

  goToRadioGroup() {

  }

  goToRange() {

  }

  goToRefresher() {

  }

  goToregisterModeConfigs() {

  }

  goToRow() {

  }

  goToScroll() {

  }

  goToSearchbar() {

  }

  goToSegment() {

  }

  goToSegmentButton() {
    
  }

  goToSelect() {

  }

  goToShowWhen() {

  }

  goToSlide() {

  }

  goToSpinner() {

  }

  goToSplitPane() {

  }

  goToTab() {

  }

  goToTabs() {

  }

  goToThumbnail() {

  }

  goToTitle() {

  }

  goToToastController() {

  }

  goToToogle() {

  }

  goToToolbar() {

  }

  goToTypography() {

  }

  goToViewController() {

  }

  goToVirualScroll() {
    
  }

}
