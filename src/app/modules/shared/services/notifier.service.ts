import { ToastController } from "@ionic/angular";
import { catchError } from "rxjs/operators";
import { SharedInjectable } from "shared/shared-service.module";
import { TranslateService } from "@ngx-translate/core";

@SharedInjectable()
export class NotifierService {

  private _errorMessage!: string

  constructor(private toasts: ToastController, private translator: TranslateService) {
    this.translator.get('OTHER.NOTIFIER.UNKNOWN_ERROR')
      .subscribe(translate => this._errorMessage = translate.toString())
  }

  catch(message?: string) {
    return catchError(() => this.dispatchError(message || this._errorMessage))
  }

  async dispatchError(message: string) {
    await this.dispatch(message, 'danger')
  }

  async dispatchMessage(message: string) {
    await this.dispatch(message, 'success')
  }

  async dispatch(message: string, color: string) {
    await this.toasts
      .create({
        duration: 5000,
        message: message,
        color: color,
        showCloseButton: true,
        closeButtonText: 'Ок'
      })
      .then(async toast => await toast.present())
  }
}
