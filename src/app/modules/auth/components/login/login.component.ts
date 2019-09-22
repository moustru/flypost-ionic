import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from "auth/services/login.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TokenInput, TokenOutput } from "auth/dto/login";
import { tap } from "rxjs/operators";
import { TokenService } from "shared/services/token.service";
import { Router } from "@angular/router";
import { NotifierService } from "shared/services/notifier.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  private readonly SUPPORTED_ROLES = ['ROLE_COURIER']

  private _errors!: {
    EMPTY: string,
    INVALID_CREDENTIALS: string
  }

  private _loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private loginService: LoginService,
    private tokeService: TokenService,
    private notifier: NotifierService,
    private translator: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.translator.get('LOGIN_FORM.ERROR')
      .subscribe(translates => this._errors = translates)
  }

  ngOnDestroy(): void {
    this._loginForm.reset()
  }

  get loginForm(): FormGroup {
    return this._loginForm
  }

  submit(): void {
    const input = this._loginForm.value as TokenInput

    if (!this._loginForm.valid) {
      this.notifier.dispatchError(this._errors.EMPTY)
      return
    }

    this._loginForm.controls.password.setValue('')

    this.loginService.login(input)
      .pipe(
        tap(output => {
          if (this.hasSupportedRole(output)) {
            this.tokeService.store(output.token, output.userId, output.roles)
            this.router.navigate(['courier'])
          } else {
            this.notifier.dispatchError(this._errors.INVALID_CREDENTIALS)
          }
        }),
        this.notifier.catch(this._errors.INVALID_CREDENTIALS)
      )
      .subscribe()
  }

  private hasSupportedRole(output: TokenOutput): boolean {
    return output.roles.some(role => {
      return this.SUPPORTED_ROLES.some(supported => supported === role)
    })
  }
}
