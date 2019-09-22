import { Component, OnInit } from '@angular/core';
import { OrderStatus } from "shared/types/simple.type";
import { ActivatedRoute } from "@angular/router";
import { OrderCountOutput } from "shared/dto/order";
import { CourierOrderOutput, OrderService } from "courier/modules/order/services/order.service";
import { compare, string } from "shared/utils/criteria";
import { ModalController } from "@ionic/angular";
import { BindingFilterComponent } from "shared/components/binding-filter/binding-filter.component";
import { Paginated } from "shared/dto/common";

@Component({
  selector: 'app-order-layout',
  templateUrl: './order-layout.component.html'
})
export class OrderLayoutComponent implements OnInit {

  private _ordersCount = Array<OrderCountOutput>()
  private _paginatedOrders?: Paginated<CourierOrderOutput>

  constructor(
    private route: ActivatedRoute,
    private modals: ModalController,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this._ordersCount = data.orderCount

      if (this.ordersCount.length) {
        this.fetchOrdersWithStatus(this._ordersCount[0].status)
      }
    })
  }

  get orders(): CourierOrderOutput[] {
    return this._paginatedOrders ? this._paginatedOrders.data : []
  }

  get ordersCount(): OrderCountOutput[] {
    return this._ordersCount
  }

  fetchOrdersWithStatus(status: OrderStatus): void {
    this.orderService.getOrders(compare('status', string(status), 'eq'))
      .subscribe(output => this._paginatedOrders = output)
  }

  async showBindingModal() {
    await this.modals
      .create({ component: BindingFilterComponent })
      .then(async modal => await modal.present())
  }
}
