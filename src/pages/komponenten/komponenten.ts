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
import { HapticPage } from '../haptic/haptic';
import { HideWhenPage } from '../hide-when/hide-when';
import { IconPage } from '../icon/icon';
import { ImgPage } from '../img/img';
import { InfiniteScrollPage } from '../infinite-scroll/infinite-scroll';
import { InputPage } from '../input/input';
import { ItemPage } from '../item/item';
import { ItemSlidingPage } from '../item-sliding/item-sliding';
import { ItemRecorderPage } from '../item-recorder/item-recorder';
import { KeyboardPage } from '../keyboard/keyboard';
import { LabelPage } from '../label/label';
import { LoadingPage } from '../loading/loading';
import { ModalPage } from '../modal/modal';
import { NavPage } from '../nav/nav';
import { SelectPage } from '../select/select';
import { NotePage } from '../note/note';
import { PlatformPage } from '../platform/platform';
import { PlatformConfigTokenPage } from '../platform-config-token/platform-config-token';
import { PopoverPage } from '../popover/popover';
import { RadioPage } from '../radio/radio';
import { RadioGroupPage } from '../radio-group/radio-group';
import { RangePage } from '../range/range';
import { RefresherPage } from '../refresher/refresher';
import { RegisterModeConfigsPage } from '../register-mode-configs/register-mode-configs';
import { RowPage } from '../row/row';
import { ScrollPage } from '../scroll/scroll';
import { SearchbarPage } from '../searchbar/searchbar';
import { SegmentPage } from '../segment/segment';
import { ShowWhenPage } from '../show-when/show-when';
import { SlidePage } from '../slide/slide';
import { SpinnerPage } from '../spinner/spinner';
import { ThumbnailPage } from '../thumbnail/thumbnail';
import { ToastPage } from '../toast/toast';
import { TogglePage } from '../toggle/toggle';
import { ToolbarPage } from '../toolbar/toolbar';
import { TypographyPage } from '../typography/typography';

@Component({
  selector: 'page-komponenten',
  templateUrl: 'komponenten.html',
})
export class KomponentenPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
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
    this.navCtrl.push(HapticPage);
  }

  goToHideWhen() {
    this.navCtrl.push(HideWhenPage);
  }

  goToIcon() {
    this.navCtrl.push(IconPage);
  }

  goToImg() {
    this.navCtrl.push(ImgPage);
  }

  goToInfiniteScroll() {
    this.navCtrl.push(InfiniteScrollPage);
  }

  goToInput() {
    this.navCtrl.push(InputPage);
  }

  goToIonicPage() {
    this.navCtrl.push('meinePage');
  }

  goToItem() {
    this.navCtrl.push(ItemPage);
  }

  goToItemRecorder() {
    this.navCtrl.push(ItemRecorderPage);
  }

  goToItemSliding() {
    this.navCtrl.push(ItemSlidingPage);
  }

  goToKeyboard() {
    this.navCtrl.push(KeyboardPage);
  }

  goToLabel() {
    this.navCtrl.push(LabelPage);
  }

  goToList() {
    this.navCtrl.push(ListPage);
  }

  goToLoadingController() {
    this.navCtrl.push(LoadingPage);
  }

  goToModalController() {
    this.navCtrl.push(ModalPage);
  }

  goToNav() {
    this.navCtrl.push(NavPage);
  }

  goToNote() {
    this.navCtrl.push(NotePage);
  }

  goToPlatform() {
    this.navCtrl.push(PlatformPage);
  }

  goToPlatformConfigToken() {
    this.navCtrl.push(PlatformConfigTokenPage);
  }

  goToPopoverController() {
    this.navCtrl.push(PopoverPage);
  }

  goToRadioButton() {
    this.navCtrl.push(RadioPage);
  }

  goToRadioGroup() {
    this.navCtrl.push(RadioGroupPage);
  }

  goToRange() {
    this.navCtrl.push(RangePage);
  }

  goToRefresher() {
    this.navCtrl.push(RefresherPage);
  }

  goToregisterModeConfigs() {
    this.navCtrl.push(RegisterModeConfigsPage);
  }

  goToRow() {
    this.navCtrl.push(RowPage);
  }

  goToScroll() {
    this.navCtrl.push(ScrollPage);
  }

  goToSearchbar() {
    this.navCtrl.push(SearchbarPage);
  }

  goToSegment() {
    this.navCtrl.push(SegmentPage);
  }

  goToSelect() {
    this.navCtrl.push(SelectPage);
  }

  goToShowWhen() {
    this.navCtrl.push(ShowWhenPage);
  }

  goToSlide() {
    this.navCtrl.push(SlidePage);
  }

  goToSpinner() {
    this.navCtrl.push(SpinnerPage);
  }

  goToThumbnail() {
    this.navCtrl.push(ThumbnailPage);
  }

  goToToastController() {
    this.navCtrl.push(ToastPage);
  }

  goToToogle() {
    this.navCtrl.push(TogglePage);
  }

  goToToolbar() {
    this.navCtrl.push(ToolbarPage);
  }

  goToTypography() {
    this.navCtrl.push(TypographyPage);
  }

}
