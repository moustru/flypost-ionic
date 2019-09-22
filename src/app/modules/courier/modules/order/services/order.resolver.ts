import { Resolve } from "@angular/router";
import { OrderCountOutput } from "shared/dto/order";
import { OrderService } from "courier/modules/order/services/order.service";
import { OrderInjectable } from "courier/modules/order/order-service.module";

@OrderInjectable()
export class OrderCountResolver implements Resolve<OrderCountOutput[]> {

  constructor(private orderService: OrderService) {}

  resolve() {
    return this.orderService.getOrdersCount();
  }
}
