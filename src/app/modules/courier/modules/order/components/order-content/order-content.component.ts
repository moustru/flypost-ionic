import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourierOrderOutput } from "courier/modules/order/services/order.service";
import { IonRefresher } from "@ionic/angular";
import { OrderPageComponent } from "courier/modules/order/components/order-page/order-page.component";
import { ModalManager } from "shared/services/modal.manager";
import { Uuid } from "shared/types/simple.type";

@Component({
  selector: 'app-order-content',
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.scss'],
})
export class OrderContentComponent {

  private _selectedOrders = new Set<Uuid>()
  private _orders = Array<CourierOrderOutput>()
  private _refreshEmitter = new EventEmitter<void>()

  constructor(private modalManager: ModalManager) { }

  get orders(): CourierOrderOutput[] {
    return this._orders
  }

  get selectedOrders(): Uuid[] {
    return Array.from(this._selectedOrders);
  }

  toggleSelected(orderId: Uuid): void {
    this.isSelected(orderId)
      ? this._selectedOrders.delete(orderId)
      : this._selectedOrders.add(orderId)
  }

  isSelected(orderId: Uuid): boolean {
    return this._selectedOrders.has(orderId);
  }

  openOrderPage(order: CourierOrderOutput): void {
    this.modalManager.show({
      component: OrderPageComponent,
      componentProps: {
        order,
        selected: this.isSelected(order.id)
      }
    })
  }

  emitRefresh(refresher: IonRefresher): void {
    refresher.complete()
    this._refreshEmitter.emit()
  }

  @Input() set orders(values: CourierOrderOutput[]) {
    this._orders = values
  }

  @Output() get onRefresh(): EventEmitter<void> {
    return this._refreshEmitter
  }
}
