import { ModalManager } from "shared/services/modal.manager";
import { Injectable } from "@angular/core";

@Injectable()
export class AbstractModalComponent {

  constructor(protected modalManager: ModalManager) { }

  closeModal(): void {
    this.modalManager.hide()
  }
}
