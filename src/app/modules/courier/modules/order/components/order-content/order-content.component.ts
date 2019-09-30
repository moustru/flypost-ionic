import { Component, Input } from '@angular/core';
import { CourierOrderOutput } from "courier/modules/order/services/order.service";
import { ModalController } from "@ionic/angular";
import { OrderPageComponent } from "courier/modules/order/components/order-page/order-page.component";

@Component({
  selector: 'app-order-content',
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.scss'],
})
export class OrderContentComponent {

  private _orders = Array<CourierOrderOutput>()

  constructor(private modals: ModalController) { }

  get orders(): CourierOrderOutput[] {
    return this._orders
  }

  @Input() set orders(values: CourierOrderOutput[]) {
    this._orders = values
  }

  async openOrderPage(order: CourierOrderOutput) {
    await this.modals
      .create({
        component: OrderPageComponent,
        componentProps: { order }
      })
      .then(async m => await m.present())
  }
}
