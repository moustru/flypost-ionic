import { Injectable, NgModule } from '@angular/core';
import { OrderModule } from "./modules/order/order.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CourierComponent } from "courier/components/courier.component";
import { SharedModule } from "shared/shared.module";
import { TokenInterceptor } from "shared/interceptors/token-interceptor";
import { CourierRoutingModule } from "courier/courier-routing.module";

@NgModule({
  declarations: [CourierComponent],
  imports: [
    CourierRoutingModule,
    OrderModule,
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class CourierModule {
}

export function CourierInjectable() {
  return Injectable({ providedIn: CourierModule })
}
