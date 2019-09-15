import { HttpClient } from "@angular/common/http";
import { Uuid } from "shared/types/simple.type";
import { Observable } from "rxjs";
import { OrderDeliveryInfoOutput, OrderLineItemOutput, OrderOutput } from "shared/dto/order";
import { CourierInjectable } from "courier/courier.module";

export type CourierOrderOutput = OrderOutput & OrderLineItemOutput & OrderDeliveryInfoOutput

@CourierInjectable()
export class OrderService {

  constructor(private http: HttpClient) {}

  getOrder(id: Uuid): Observable<CourierOrderOutput> {
    return this.http.get<CourierOrderOutput>(`courier/orders/${id}`)
  }

  getOrders(): Observable<CourierOrderOutput> {
    return this.http.get<CourierOrderOutput>('courier/orders')
  }
}
