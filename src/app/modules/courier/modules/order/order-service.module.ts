import { Injectable, NgModule } from '@angular/core';

@NgModule()
export class OrderServiceModule {
}

export function OrderInjectable() {
  return Injectable({ providedIn: OrderServiceModule })
}
