import { Component, Input } from '@angular/core';
import { CourierOrderOutput, OrderService } from "courier/modules/order/services/order.service";
import { AbstractModalComponent } from "shared/components/abstract-modal-component";
import { IonRefresher } from "@ionic/angular";
import { ModalManager } from "shared/services/modal.manager";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent extends AbstractModalComponent {

  private _order?: CourierOrderOutput

  constructor(protected orderService: OrderService, modalManager: ModalManager) {
    super(modalManager)
  }

  get order(): CourierOrderOutput | undefined {
    return this._order;
  }

  @Input() set order(value: CourierOrderOutput | undefined) {
    this._order = value
  }

  onRefresh(refresher: IonRefresher): void {
    refresher.complete()

    if (!this._order) {
      this.closeModal()
    } else {
      this.orderService
        .getOrder(this._order.id)
        .subscribe(output => this._order = output)
    }
  }
}
