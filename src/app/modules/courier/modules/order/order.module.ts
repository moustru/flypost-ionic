import { Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderRoutingModule } from "./order-routing.module";
import { OrderComponent } from "courier/modules/order/components/order/order.component";
import { OrderStatusComponent } from "courier/modules/order/components/order-status/order-status.component";
import { SharedModule } from "shared/shared.module";

@NgModule({
  imports: [
    OrderRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [OrderComponent, OrderStatusComponent]
})
export class OrderModule {
}

export function OrderInjectable() {
  return Injectable({ providedIn: OrderModule })
}
