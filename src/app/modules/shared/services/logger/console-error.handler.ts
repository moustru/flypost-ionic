import { ErrorHandler } from "@angular/core";
import { SharedInjectable } from "../../shared.module";

@SharedInjectable()
export class ConsoleErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log(error);
  }
}
