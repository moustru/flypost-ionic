import { Component } from '@angular/core';
import moment from 'moment';
import axios from 'axios';

@Component({
  selector: 'orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})

export class OrdersPage {
  orders = [];

  constructor() {}

  ngOnInit() {
    axios.get('courier/orders', {
      params: {
        criteria: `limit 5 offset 0`
      }
    }).then(res => {
      this.orders = res.data.data
      console.log(res.data.data)
    })
  }

  toDate(val) {
    return `${moment.unix(val).format("DD.MM.YYYY")}, ${moment.unix(val).format("H:mm")}`
  }

  changeS(a) {
    console.log(a)
  }
}
