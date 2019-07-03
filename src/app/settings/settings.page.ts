import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  user = {
    username: null,
    login: null
  }

  constructor() {}

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    axios.get(`/courier/profile`).then(res => {
      this.user.username = res.data.username
      this.user.login = res.data.login
    })    
  }

  logOut() {
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-roles')
    localStorage.removeItem('user-id')
    window.location.reload()
  }
}
