import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddressComponent, FoobarAddressComponent, RussianAddressComponent
} from "./components/address/address.component";

const components = [
  AddressComponent,
  RussianAddressComponent,
  FoobarAddressComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    CommonModule,
    ...components
  ],
  entryComponents: [RussianAddressComponent, FoobarAddressComponent],
  imports: [
    CommonModule
  ],
})
export class SharedModule {
}

export function SharedInjectable() {
  return Injectable({ providedIn: SharedModule })
}
