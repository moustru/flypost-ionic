import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { OrderStatusComponent } from "courier/modules/order/components/order-status/order-status.component";

const routes: Routes = [
  {
    path: '',
    component: OrderStatusComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
