import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "auth/auth.module";
import { CourierModule } from "courier/courier.module";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "env/environment.prod";
import { SentryErrorHandler } from "shared/services/logger/sentry-error.handler";
import { ConsoleErrorHandler } from "shared/services/logger/console-error.handler";
import { CommonModule } from "@angular/common";
import { SharedModule } from "shared/shared.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslatePlainLoader } from "shared/services/translate-plain-loader.service";

const modules = [
  AuthModule,
  CourierModule,
  SharedModule
]

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslatePlainLoader
      }
    }),
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ...modules
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: ErrorHandler, useClass: environment.production ? SentryErrorHandler : ConsoleErrorHandler}
  ]
})
export class AppModule {
}
