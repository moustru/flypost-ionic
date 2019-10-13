import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoadingService } from "./modules/shared/services/loading.service";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { LocationService } from "./modules/shared/services/location.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loadingService: LoadingService,
    private translator: TranslateService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.initializeApplication()
    this.initializeLanguages()
  }

  private initializeApplication(): void {
    this.platform.ready()
      .then(() => {
        this.statusBar.styleDefault()
        this.splashScreen.hide()
      })
  }

  private initializeLanguages(): void {
    this.locationService.initialize()
    this.translator.addLangs(this.locationService.supportedLanguages)
    this.translator.use(this.locationService.currentLanguage)
  }

  get isLoading(): Observable<boolean> {
    return this.loadingService.isActive
  }
}
