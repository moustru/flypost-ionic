import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "shared/shared.module";
import { LogoutComponent } from "courier/modules/profile/components/logout/logout.component";
import { ProfileRoutingModule } from "courier/modules/profile/profile-routing.module";
import { ProfileComponent } from "courier/modules/profile/components/profile/profile.component";
import { ProfileContentComponent } from "courier/modules/profile/components/profile-content/profile-content.component";
import { ProfileServiceModule } from "courier/modules/profile/profile-service.module";

@NgModule({
  declarations: [LogoutComponent, ProfileComponent, ProfileContentComponent],
  imports: [
    ProfileRoutingModule,
    ProfileServiceModule,
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule {
}
