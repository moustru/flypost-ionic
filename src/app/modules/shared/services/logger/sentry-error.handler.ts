import { ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/core';

export class SentryErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    Sentry.captureException(error)
  }
}
