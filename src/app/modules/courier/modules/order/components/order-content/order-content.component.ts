import { Component, Input } from '@angular/core';
import { CourierOrderOutput } from "courier/modules/order/services/order.service";

@Component({
  selector: 'app-order-content',
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.scss'],
})
export class OrderContentComponent {
  private _orders = Array<CourierOrderOutput>()

  get orders(): CourierOrderOutput[] {
    return this._orders
  }

  @Input() set orders(values: CourierOrderOutput[]) {
    this._orders = values
  }
}
