import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourierModule } from "courier/courier.module";
import { AuthModule } from "auth/auth.module";
import { AppComponent } from "./app.component";
import { environment } from "env/environment";
import { HasNotTokenGuard } from "shared/guards/has-not-token.guard";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule,
        canActivate: [HasNotTokenGuard]
      },
      {
        path: 'courier',
        loadChildren: () => CourierModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: environment.ENABLE_ROUTING_TRACING })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
