import { Injectable, NgModule } from '@angular/core';

@NgModule()
export class AuthServiceModule { }

export function AuthInjectable() {
  return Injectable({ providedIn: AuthServiceModule })
}
