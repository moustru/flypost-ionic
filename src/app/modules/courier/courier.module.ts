import { Injectable, NgModule } from '@angular/core';
import { OrderModule } from "./order/order.module";
import { SharedModule } from "shared/shared.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "shared/interceptors/token-interceptor";
import { CourierComponent } from "courier/component/courier.component";
import { IonicModule } from "@ionic/angular";
import { TestComponent } from "courier/component/test/test.component";

@NgModule({
  declarations: [CourierComponent, TestComponent],
  imports: [
    OrderModule,
    SharedModule,
    IonicModule
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
