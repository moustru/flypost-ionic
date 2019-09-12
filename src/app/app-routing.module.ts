import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrderModule } from "./modules/order/order.module";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => OrderModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
