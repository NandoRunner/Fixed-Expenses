import { LanguageService } from './main/services/language.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages: { url: string; direction: string; icon: string; text: string }[];
  user: firebase.User;

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private languageService: LanguageService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.pages = [
      { url: '/home', direction: 'back', icon: 'home', text: 'home.menu' },
      { url: '/gas', direction: 'back', icon: 'checkmark', text: 'gas.menu' },
      { url: '/power', direction: 'back', icon: 'checkmark', text: 'power.menu' },
      { url: '/water', direction: 'back', icon: 'checkmark', text: 'water.menu' },
    ];

    this.authService.authState$.subscribe(user => (this.user = user));

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.languageService.setInitialAppLanguage();
  }
}
