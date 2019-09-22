import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { OrderLayoutComponent } from "courier/modules/order/components/order-layout/order-layout.component";
import { OrderCountResolver } from "courier/modules/order/services/order.resolver";

const routes: Routes = [
  {
    path: '',
    component: OrderLayoutComponent,
    resolve: {
      orderCount: OrderCountResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
