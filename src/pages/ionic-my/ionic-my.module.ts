import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicMyPage } from './ionic-my';

@NgModule({
  declarations: [
    IonicMyPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicMyPage),
  ],
})
export class IonicMyPageModule {}
