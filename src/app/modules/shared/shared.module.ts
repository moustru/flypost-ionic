import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AddressComponent, FoobarAddressComponent, RussianAddressComponent
} from "./components/address/address.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TabsComponent } from "shared/components/tabs/tabs.component";
import { StatusTranslatorPipe } from './pipes/status-translator.pipe';

const components = [
  TabsComponent,
  AddressComponent,
  RussianAddressComponent,
  FoobarAddressComponent
];

@NgModule({
  declarations: [
    ...components,
    StatusTranslatorPipe
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
    ...components,
  ],
  entryComponents: [RussianAddressComponent, FoobarAddressComponent],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
})
export class SharedModule {
}

export function SharedInjectable() {
  return Injectable({ providedIn: SharedModule })
}
