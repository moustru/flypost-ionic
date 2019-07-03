import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {
  login: string = '';
  password: string = '';

  constructor(private router: Router) { }

  async onSubmit() {
    let response = await axios.post('token', JSON.stringify({
      login: this.login,
      password: this.password
    }))

    localStorage.setItem('user-token', response.data.token)
    localStorage.setItem('user-id', response.data.userId)
    this.router.navigate(['tabs/orders'])
  }

  ngOnInit() {
    console.log(this.login, this.password)
  }

}
