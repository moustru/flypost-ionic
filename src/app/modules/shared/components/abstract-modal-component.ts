import { ModalController } from "@ionic/angular";

export class AbstractModalComponent {

  constructor(protected modals: ModalController ) { }

  closeModal(): void {
    this.modals.dismiss()
  }
}