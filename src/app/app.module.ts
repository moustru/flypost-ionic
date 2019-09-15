import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourierModule } from "courier/courier.module";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "env/environment.prod";
import { SentryErrorHandler } from "shared/services/logger/sentry-error.handler";
import { ConsoleErrorHandler } from "shared/services/logger/console-error.handler";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CourierModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: ErrorHandler, useClass: environment.production ? SentryErrorHandler : ConsoleErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
