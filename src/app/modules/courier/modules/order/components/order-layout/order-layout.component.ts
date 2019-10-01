import { Component, OnInit } from '@angular/core';
import { OrderStatus } from "shared/types/simple.type";
import { ActivatedRoute } from "@angular/router";
import { OrderCountOutput } from "shared/dto/order";
import { CourierOrderOutput, OrderService } from "courier/modules/order/services/order.service";
import { compare, string } from "shared/utils/criteria";
import { BindingFilterComponent } from "shared/components/binding-filter/binding-filter.component";
import { Paginated } from "shared/dto/common";
import { ModalManager } from "shared/services/modal.manager";

@Component({
  selector: 'app-order-layout',
  templateUrl: './order-layout.component.html'
})
export class OrderLayoutComponent implements OnInit {

  private _ordersCount = Array<OrderCountOutput>()
  private _paginatedOrders?: Paginated<CourierOrderOutput>
  private _selectedStatus?: OrderStatus

  constructor(
    private route: ActivatedRoute,
    private modalManager: ModalManager,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this._ordersCount = data.orderCount

      if (this.ordersCount.length) {
        this._selectedStatus = this._ordersCount[0].status
        this.fetchOrdersWithStatus(this._selectedStatus)
      }
    })
  }

  get orders(): CourierOrderOutput[] {
    return this._paginatedOrders ? this._paginatedOrders.data : []
  }

  get ordersCount(): OrderCountOutput[] {
    return this._ordersCount
  }

  get selectedStatus(): OrderStatus | undefined {
    return this._selectedStatus
  }

  fetchOrdersWithStatus(status: OrderStatus): void {
    this.orderService
      .getOrders(compare('status', string(status), 'eq'))
      .subscribe(output => this._paginatedOrders = output)
  }

  showBindingModal(): void {
    this.modalManager
      .show({ component: BindingFilterComponent })
  }

  refreshHeader(): void {
    this.orderService.getOrdersCount()
      .subscribe(output => {
        this._ordersCount = output
      })
  }

  refreshBody(): void {
    if (!this._selectedStatus) {
      this._paginatedOrders = undefined
    } else {
      this.fetchOrdersWithStatus(this._selectedStatus)
    }
  }
}
