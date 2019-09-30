import { Component, Input } from '@angular/core';
import { CourierOrderOutput } from "courier/modules/order/services/order.service";
import { AbstractModalComponent } from "shared/components/abstract-modal-component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent extends AbstractModalComponent {

  private _order?: CourierOrderOutput

  constructor(modals: ModalController) {
    super(modals)
  }

  @Input() set order(value: CourierOrderOutput | undefined) {
    this._order = value
  }

  get order(): CourierOrderOutput | undefined {
    return this._order;
  }
}
