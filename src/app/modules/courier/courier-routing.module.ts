import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourierComponent } from "courier/components/courier.component";
import { OrderModule } from "courier/modules/order/order.module";
import { HasTokenGuard } from "shared/guards/has-token.guard";
import { ProfileModule } from "courier/modules/profile/profile.module";

const routes: Routes = [
  {
    path: '',
    component: CourierComponent,
    canActivate: [HasTokenGuard],
    canActivateChild: [HasTokenGuard],
    children: [
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      {
        path: 'order',
        loadChildren: () => OrderModule
      },
      {
        path: 'profile',
        loadChildren: () => ProfileModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourierRoutingModule {
}
