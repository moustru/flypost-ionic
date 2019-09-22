import { Injectable, NgModule } from '@angular/core';

@NgModule()
export class ProfileServiceModule {
}

export function ProfileInjectable() {
  return Injectable({ providedIn: ProfileServiceModule })
}
