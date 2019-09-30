import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BindingFilterComponent } from "shared/components/binding-filter/binding-filter.component";
import { HasTokenGuard } from "shared/guards/has-token.guard";
import { HasNotTokenGuard } from "shared/guards/has-not-token.guard";
import { ApiInterceptor } from "shared/interceptors/api-interceptor";
import { SharedServiceModule } from "shared/shared-service.module";
import { TranslateModule } from "@ngx-translate/core";
import { AddressPipe } from "shared/pipes/address-pipe.pipe";
import { DeliveryDatePipe } from "shared/pipes/delivery-date.pipe";
import { LocationComponent } from "shared/components/location/location.component";
import { FormatDatePipe } from "shared/pipes/format-date.pipe";
import { OrderStatusPipe } from "shared/pipes/order-status.pipe";
import { PhonePipe } from "shared/pipes/phone.pipe";

const pipes = [
  AddressPipe,
  FormatDatePipe,
  DeliveryDatePipe,
  OrderStatusPipe,
  PhonePipe
]

const components = [
  LocationComponent,
  BindingFilterComponent
]

@NgModule({
  declarations: [
    ...pipes,
    ...components,
  ],
  entryComponents: [BindingFilterComponent],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule,
    SharedServiceModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    SharedServiceModule,
    TranslateModule,
    ...components,
    OrderStatusPipe,
    AddressPipe,
    DeliveryDatePipe,
    PhonePipe,
    FormatDatePipe
  ],
  providers: [
    HasTokenGuard,
    HasNotTokenGuard,
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ]
})
export class SharedModule {
}

