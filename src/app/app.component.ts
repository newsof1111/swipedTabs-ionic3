import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ManyTabsPage } from '../pages/many-tabs/many-tabs';
import { HomePage } from '../pages/home/home';
import { GoogleplayTabsPage } from '../pages/googleplay-tabs/googleplay-tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = GoogleplayTabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      if (platform.is('cordova')) {
        statusBar.styleDefault();
        splashScreen.hide();
      }
    });
  }
}

