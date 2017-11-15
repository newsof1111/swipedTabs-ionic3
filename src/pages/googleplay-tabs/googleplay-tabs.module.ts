import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleplayTabsPage } from './googleplay-tabs';

@NgModule({
  declarations: [
    GoogleplayTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoogleplayTabsPage),
  ],
})
export class GoogleplayTabsPageModule {}
