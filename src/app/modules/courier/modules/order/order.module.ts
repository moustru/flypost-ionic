import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderRoutingModule } from "./order-routing.module";
import { OrderLayoutComponent } from "courier/modules/order/components/order-layout/order-layout.component";
import { SharedModule } from "shared/shared.module";
import { OrderHeaderComponent } from "courier/modules/order/components/order-header/order-header.component";
import { OrderContentComponent } from "courier/modules/order/components/order-content/order-content.component";
import { OrderServiceModule } from "courier/modules/order/order-service.module";
import { OrderPageComponent } from "courier/modules/order/components/order-page/order-page.component";

@NgModule({
  entryComponents: [OrderPageComponent],
  declarations: [
    OrderLayoutComponent,
    OrderHeaderComponent,
    OrderContentComponent,
    OrderPageComponent
  ],
  imports: [
    OrderServiceModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule
  ],
})
export class OrderModule {
}
