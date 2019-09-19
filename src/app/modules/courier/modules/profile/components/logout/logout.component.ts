import { Component } from '@angular/core';
import { TokenService } from "shared/services/token.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {

  constructor(private tokeService: TokenService, private router: Router, private alerts: AlertController) { }

  async initLogout(): Promise<void> {
    await this.alerts
      .create({
        header: 'Вы действительно хотите выйти?',
        buttons: [
          'Отмена',
          {
            text: 'Да', handler: () => {
              this.logout()
            }
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
