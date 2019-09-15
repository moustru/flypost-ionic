import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderRoutingModule } from "./order-routing.module";
import { OrderComponent } from "courier/order/components/order/order.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        OrderRoutingModule
    ],
    declarations: [OrderComponent]
})
export class OrderModule {
}
