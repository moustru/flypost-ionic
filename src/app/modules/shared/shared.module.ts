import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddressComponent, FoobarAddressComponent, RussianAddressComponent
} from "./components/address/address.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const components = [
  AddressComponent,
  RussianAddressComponent,
  FoobarAddressComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    ...components,
  ],
  entryComponents: [
    RussianAddressComponent,
    FoobarAddressComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule {
}

export function SharedInjectable() {
  return Injectable({ providedIn: SharedModule })
}
