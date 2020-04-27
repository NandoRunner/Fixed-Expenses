import { LanguageService } from './main/services/language.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './core/services/auth.service';
//import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pages: { url: string; direction: string; icon: string; text: string }[];
  user: firebase.User;
  public myAppVersion: string;

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private languageService: LanguageService
    //,private appVersion: AppVersion
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.pages = [
//      { url: '/glucoses', direction: 'back', icon: 'checkmark', text: 'glucose.menu' },
//      { url: '/bloodpressures', direction: 'back', icon: 'checkmark', text: 'blood-pressure.menu' },
      { url: '/power', direction: 'back', icon: 'checkmark', text: 'power.menu' }
    ];

    this.authService.authState$.subscribe(user => (this.user = user));

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      // this.appVersion.getVersionNumber().then(s => {
      //   console.log(s);
      //   this.myAppVersion = s;
      // }).catch(reason =>{
      //   console.log(reason);
      // });
    });

    this.languageService.setInitialAppLanguage();
  }
}
