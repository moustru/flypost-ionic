import { NgModule } from '@angular/core';
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "shared/shared.module";
import { LoginService } from "auth/services/login.service";
import { AuthServiceModule } from "auth/auth-service.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    AuthServiceModule,
    SharedModule,
    TranslateModule
  ],
  providers: [LoginService]
})
export class AuthModule {
}
