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

  onSubmit() {
    axios.post('token', { login: this.login, password: this.password }).then(res => {
      localStorage.setItem('user-token', res.data.token)
      localStorage.setItem('user-id', res.data.userId)
      this.router.navigate(['tabs/orders'])
    })
  }

  ngOnInit() {
    console.log(this.login, this.password)
  }
}
