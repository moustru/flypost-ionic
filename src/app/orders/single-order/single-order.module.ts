import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SingleOrderPage } from './single-order.page';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

const routes: Routes = [
  {
    path: '',
    component: SingleOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [ModalConfirmComponent],
  declarations: [SingleOrderPage, ModalConfirmComponent]
})
export class SingleOrderModule {}
