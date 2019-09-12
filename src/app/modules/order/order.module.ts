import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderRoutingModule } from "./order-routing.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        OrderRoutingModule
    ],
    declarations: []
})
export class OrderModule {
}
