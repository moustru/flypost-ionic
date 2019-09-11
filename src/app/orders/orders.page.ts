import { Component } from '@angular/core';
import { statusCouriers } from '../utils/statuses';
import { address } from '../utils/address';
import { dateFormat, timeFormat } from '../utils/date';
import axios from 'axios';

@Component({
  selector: 'orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})

export class OrdersPage {
  orders = [];
  statuses = [];
  relatedStatus = 'DELIVERED';

  constructor() {}

  ngOnInit() {
    this.getOrders(this.relatedStatus)

    axios.get('courier/orders-count').then(res => {
      this.statuses = res.data
    })
  }

  getOrders(status) {
    axios.get('courier/orders', {
      params: {
        criteria: status !== null ? `status:compare{eq, ${JSON.stringify(status)}}` : ''
      }
    }).then(res => {
      this.orders = res.data.data
      this.relatedStatus = status
    })
  }

  toDate(val) {
    return `${dateFormat(val)}, ${timeFormat(val)}`
  }

  setAddress(a, b, c, d, e) {
    return address(a, b, c, d, e)
  }

  statusForCourier(val) {
    return statusCouriers(val)
  }

  setStatus(status) {
    this.getOrders(status)
  }
}
