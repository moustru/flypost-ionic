import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourierComponent } from "courier/components/courier.component";

const routes: Routes = [
  {
    path: '',
    component: CourierComponent,
    canActivate: [],
    canActivateChild: [],
    children: [ ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourierRoutingModule {
}
