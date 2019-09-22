import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OrderCountOutput } from "shared/dto/order";
import { OrderStatus } from "shared/types/simple.type";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.scss'],
})
export class OrderHeaderComponent implements OnInit {

  statusControl = new FormControl()
  private _ordersCount = Array<OrderCountOutput>()
  @Output() private statusChanged = new EventEmitter<OrderStatus>()

  ngOnInit() {
    this.statusControl.valueChanges
      .subscribe(status => this.statusChanged.emit(status))
  }

  get ordersCount(): OrderCountOutput[] {
    return this._ordersCount
  }

  @Input() set ordersCount(ordersCount: OrderCountOutput[]) {
    this._ordersCount = ordersCount;
    this.statusControl.setValue(ordersCount[0].status || null)
  }
}
