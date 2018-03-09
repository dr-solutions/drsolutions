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
import { CheckboxPage } from '../checkbox/checkbox';
import { ChipPage } from '../chip/chip';
import { ColAndConfigPage } from '../col-and-config/col-and-config';
import { ContentPage } from '../content/content';
import { DatetimePage } from '../datetime/datetime';
import { EventsPage } from '../events/events';
import { FabPage } from '../fab/fab';
import { GesturesPage } from '../gestures/gestures';
import { GridPage } from '../grid/grid';

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
    this.navCtrl.push(CheckboxPage);
  }

  goToChip() {
    this.navCtrl.push(ChipPage);
  }

  goToColAndConfig() {
    this.navCtrl.push(ColAndConfigPage);
  }

  goToContent() {
    this.navCtrl.push(ContentPage);
  }

  goToDateTime() {
    this.navCtrl.push(DatetimePage);
  }

  goToEvents() {
    this.navCtrl.push(EventsPage);
  }

  goToFabButton() {
    this.navCtrl.push(FabPage);
  }

  goToGestures() {
    this.navCtrl.push(GesturesPage);
  }

  goToGrid() {
    this.navCtrl.push(GridPage);
  }

  goToHaptic() {

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
