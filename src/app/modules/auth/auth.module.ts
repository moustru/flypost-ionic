import { Injectable, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { TokenInterceptor } from "shared/interceptors/token-interceptor";
import { SharedModule } from "shared/shared.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class AuthModule {
}

export function AuthInjectable() {
  return Injectable({ providedIn: AuthModule })
}
