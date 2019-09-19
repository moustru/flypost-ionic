import { Component, OnDestroy } from '@angular/core';
import { LoginService } from "auth/services/login.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TokenInput, TokenOutput } from "auth/dto/login";
import { catchError, tap } from "rxjs/operators";
import { TokenService } from "shared/services/token.service";
import { Router } from "@angular/router";
import { NotifierService } from "shared/services/notifier.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnDestroy {

  private readonly SUPPORTED_ROLES = ['ROLE_COURIER'];

  private _loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private loginService: LoginService,
    private tokeService: TokenService,
    private notifier: NotifierService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this._loginForm.reset()
  }

  get loginForm(): FormGroup {
    return this._loginForm
  }

  submit(): void {
    const input = this._loginForm.value as TokenInput

    if (!this._loginForm.valid) {
      this.notifier.dispatchError('Пожалуйста, заполните оба поля')
      return
    }

    this.loginService.login(input)
      .pipe(
        tap(output => {
          if (this.hasSupportedRole(output)) {
            this.tokeService.store(output.token, output.userId, output.roles)
            this.router.navigate(['courier'])
          } else {
            this.notifier.dispatchError('Неверный логин или пароль')
          }
        }),
        catchError(() => this.notifier.dispatchError('Неверный логин или пароль'))
      )
      .subscribe()
  }

  private hasSupportedRole(output: TokenOutput): boolean {
    return output.roles.some(role => {
      return this.SUPPORTED_ROLES.some(supported => supported === role)
    })
  }
}
