import { Injectable } from '@angular/core';
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(private toasts: ToastController) { }

  async dispatchError(message: string) {
    await this.dispatch(message, 'danger')
  }

  async dispatchMessage(message: string) {
    await this.dispatch(message, 'success')
  }

  async dispatch(message: string, color: string) {
    await this.toasts
      .create({
        duration: 4000,
        message: message,
        color: color
      })
      .then(async toast => await toast.present())
  }
}
