import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TokenService } from "shared/services/token.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [TokenService]
})

export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) { }

  ngOnInit() {
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready()
      .then(() => {
        this.statusBar.styleDefault()
        this.splashScreen.hide()
      })
  }
}
