import { Injectable, NgModule } from '@angular/core';
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "shared/shared.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiInterceptor } from "shared/interceptors/api-interceptor";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ]
})
export class AuthModule {
}

export function AuthInjectable() {
  return Injectable({ providedIn: AuthModule })
}
