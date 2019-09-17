import { HttpClient } from "@angular/common/http";
import { Uuid } from "shared/types/simple.type";
import { Observable } from "rxjs";
import { OrderCountOutput, OrderDeliveryInfoOutput, OrderLineItemOutput, OrderOutput } from "shared/dto/order";
import { Injectable } from "@angular/core";

export type CourierOrderOutput = OrderOutput & OrderLineItemOutput & OrderDeliveryInfoOutput

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrder(id: Uuid): Observable<CourierOrderOutput> {
    return this.http.get<CourierOrderOutput>(`courier/orders/${id}`)
  }

  getOrders(): Observable<CourierOrderOutput[]> {
    return this.http.get<CourierOrderOutput[]>('courier/orders')
  }

  getOrdersCount(): Observable<OrderCountOutput[]> {
    return this.http.get<OrderCountOutput[]>('courier/orders-count')
  }
}
