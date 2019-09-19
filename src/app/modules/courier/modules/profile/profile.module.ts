import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "shared/shared.module";
import { LogoutComponent } from "courier/modules/profile/components/logout/logout.component";
import { ProfileRoutingModule } from "courier/modules/profile/profile-routing.module";
import { ProfileComponent } from "courier/modules/profile/components/profile.component";

@NgModule({
  declarations: [LogoutComponent, ProfileComponent],
  imports: [
    ProfileRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule { }

export function ProfileInjectable() {
  return Injectable({ providedIn: ProfileModule })
}
