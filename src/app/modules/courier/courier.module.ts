import { NgModule } from '@angular/core';
import { OrderModule } from "./modules/order/order.module";
import { CourierComponent } from "./components/courier.component";
import { SharedModule } from "./../shared/shared.module";
import { CourierRoutingModule } from "./courier-routing.module";
import { ProfileModule } from "./modules/profile/profile.module";

@NgModule({
  declarations: [CourierComponent],
  imports: [
    CourierRoutingModule,
    OrderModule,
    ProfileModule,
    SharedModule,
  ]
})
export class CourierModule {
}
