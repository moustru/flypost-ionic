import { Component, OnInit } from '@angular/core';
import { OrderService } from "courier/modules/order/services/order.service";
import { OrderCountOutput } from "shared/dto/order";

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.scss'],
})
export class OrderStatusComponent implements OnInit {

  selected: OrderCountOutput | null = null
  private _ordersCount = Array<OrderCountOutput>()

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrdersCount()
      .subscribe(output => {
        this.selected = output ? output[0] : null
        this._ordersCount = output
      })
  }

  get ordersCount(): OrderCountOutput[] {
    return this._ordersCount
  }

  statusChanged(): void {

  }
}
