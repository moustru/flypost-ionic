import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "auth/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.isLogged()) {
      this.router.navigate(['courier'])
    }
  }

}
