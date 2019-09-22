import { ErrorHandler } from "@angular/core";

export class ConsoleErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log(error);
  }
}
