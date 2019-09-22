import { HttpClient } from "@angular/common/http";
import { Uuid } from "shared/types/simple.type";
import { Observable } from "rxjs";
import { OrderCountOutput, OrderDeliveryInfoOutput, OrderLineItemOutput, OrderOutput } from "shared/dto/order";
import { Criteria } from "shared/utils/criteria";
import { OrderInjectable } from "courier/modules/order/order-service.module";
import { Paginated } from "shared/dto/common";

export type CourierOrderOutput = OrderOutput & OrderLineItemOutput & OrderDeliveryInfoOutput

@OrderInjectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrder(id: Uuid): Observable<CourierOrderOutput> {
    return this.http.get<CourierOrderOutput>(`courier/orders/${id}`)
  }

  getOrders(criteria?: Criteria | string): Observable<Paginated<CourierOrderOutput>> {
    return this.http.get<Paginated<CourierOrderOutput>>(`courier/orders?criteria=${criteria || ''}`)
  }

  getOrdersCount(): Observable<OrderCountOutput[]> {
    return this.http.get<OrderCountOutput[]>('courier/orders-count')
  }
}
