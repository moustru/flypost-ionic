import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HasTokenGuard } from "shared/guards/has-token.guard";
import { CourierComponent } from "courier/component/courier.component";
import { TestComponent } from "courier/component/test/test.component";

const routes: Routes = [
  {
    path: '',
    component: CourierComponent,
    canActivate: [HasTokenGuard],
    canActivateChild: [HasTokenGuard],
    children: [
      { path: '', redirectTo: 'test', pathMatch: 'full' }, // todo: refactoring
      {
        path: 'test', component: TestComponent
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
