import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CourierModule } from "courier/courier.module";
import { AuthModule } from "auth/auth.module";

const routes: Routes = [
  {
    path: 'courier',
    pathMatch: 'full',
    loadChildren: () => CourierModule
  },
  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren: () => AuthModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
