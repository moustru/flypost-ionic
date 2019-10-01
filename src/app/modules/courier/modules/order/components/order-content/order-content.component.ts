import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourierOrderOutput } from "courier/modules/order/services/order.service";
import { IonRefresher, ModalController } from "@ionic/angular";
import { OrderPageComponent } from "courier/modules/order/components/order-page/order-page.component";

@Component({
  selector: 'app-order-content',
  templateUrl: './order-content.component.html',
  styleUrls: ['./order-content.component.scss'],
})
export class OrderContentComponent {

  private _orders = Array<CourierOrderOutput>()
  private _refreshEmitter = new EventEmitter<void>()

  constructor(private modals: ModalController) { }

  get orders(): CourierOrderOutput[] {
    return this._orders
  }

  async openOrderPage(order: CourierOrderOutput) {
    await this.modals
      .create({
        component: OrderPageComponent,
        componentProps: { order }
      })
      .then(async m => await m.present())
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
