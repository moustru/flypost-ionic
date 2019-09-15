import { ErrorHandler} from '@angular/core';
import * as Sentry from '@sentry/core';
import { SharedInjectable } from "shared/shared.module";

@SharedInjectable()
export class SentryErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    Sentry.captureException(error)
  }
}
