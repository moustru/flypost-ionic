import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { dateFormat, timeFormat } from '../utils/date';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  courier = {
    username: null,
    createdAt: 0,
    branch: null,
    car: {
      loadCapacity: null,
      luggageCapacity: null
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {
    axios.get(`/courier/profile`).then(res => {
      this.courier = res.data

      if(!res.data.car) {
        this.courier.car = {
          loadCapacity: null,
          luggageCapacity: null          
        }
      }
    })
  }

  saveInfo() {
    axios.put(`/courier/profile`, this.courier).then(() => {
      this.router.navigateByUrl('tabs/settings')
    })
  }

  cancelEdit() {
    this.router.navigateByUrl('tabs/settings')
  }

  toDate(val) {
    return `${dateFormat(val)}, ${timeFormat(val)}`
  }
}
