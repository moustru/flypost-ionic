import { ModalController } from "@ionic/angular";
import { ModalOptions } from "@ionic/core";
import { SharedInjectable } from "shared/shared-service.module";

@SharedInjectable()
export class ModalManager {

  constructor(private modalController: ModalController) { }

  async show(option: ModalOptions): Promise<void> {
    await this.modalController
      .create(option)
      .then(async modal => await modal.present())
  }

  hide(): void {
    this.modalController.dismiss()
  }
}
