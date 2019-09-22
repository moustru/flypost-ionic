import { Component, OnInit } from '@angular/core';
import { TokenService } from "shared/services/token.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  private _translations!: {
    'PROFILE.HEADER.LOGOUT_WARNING_MESSAGE': string
    'COMMON.YES': string
    'COMMON.CANCEL': string
  }

  constructor(
    private tokeService: TokenService,
    private router: Router,
    private alerts: AlertController,
    private translator: TranslateService
  ) { }

  ngOnInit(): void {
    this.translator.get(['PROFILE.HEADER.LOGOUT_WARNING_MESSAGE', 'COMMON.YES', 'COMMON.CANCEL'])
      .subscribe(translations => this._translations = translations)
  }

  async initLogout(): Promise<void> {
    await this.alerts
      .create({
        header: this._translations['PROFILE.HEADER.LOGOUT_WARNING_MESSAGE'],
        buttons: [
          this._translations['COMMON.CANCEL'],
          {
            text: this._translations['COMMON.YES'],
            handler: () => { this.logout() }
          }
        ]
      })
      .then(async alert => await alert.present())

  }

  private logout(): void {
    this.tokeService.clear()
    this.router.navigate(['auth'])
  }
}
