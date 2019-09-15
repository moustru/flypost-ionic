import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/browser';

import { AppModule } from './app/app.module';
import { environment } from 'env/environment';

if (environment.production) {
  enableProdMode();
  Sentry.init({
    dsn: environment.SENTRY_DSN
  })
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
