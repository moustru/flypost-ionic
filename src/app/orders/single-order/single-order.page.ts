import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import axios from 'axios';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.page.html',
  styleUrls: ['./single-order.page.scss'],
})
export class SingleOrderPage implements OnInit {
  id = this.router.snapshot.params['id'];
  orderInfo = null;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    axios.get(`/courier/orders/${this.id}`).then(res => {
      this.orderInfo = res.data
      console.log(this.orderInfo)
    })
  }

  toDate(val) {
    return `${moment.unix(val).format("DD.MM.YYYY")}, ${moment.unix(val).format("H:mm")}`
  }
}
