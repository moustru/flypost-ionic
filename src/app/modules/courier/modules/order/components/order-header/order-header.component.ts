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

  private _statusControl = new FormControl()
  private _ordersCount = Array<OrderCountOutput>()
  private _statusChanged = new EventEmitter<OrderStatus>()

  ngOnInit() {
    this._statusControl.valueChanges
      .subscribe(status => this._statusChanged.emit(status))
  }

  get ordersCount(): OrderCountOutput[] {
    return this._ordersCount
  }

  get statusControl(): FormControl {
    return this._statusControl
  }

  get selectedStatus(): OrderStatus | undefined {
    return this._statusControl.value
  }

  @Input() set ordersCount(ordersCount: OrderCountOutput[]) {
    this._ordersCount = ordersCount;
  }

  @Input() set selectedStatus(status: OrderStatus | undefined) {
    this._statusControl.setValue(status)
  }

  @Output() get onStatusChanged(): EventEmitter<OrderStatus> {
    return this._statusChanged
  }
}
