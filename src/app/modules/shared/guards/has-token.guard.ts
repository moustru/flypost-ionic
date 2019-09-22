import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { TokenService } from "../services/token.service";
import { Injectable } from "@angular/core";

@Injectable()
export class HasTokenGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(): Promise<boolean> | boolean {
    return this.tokenService.hasToken() || this.router.navigate(['auth'])
  }

  canActivateChild(): Promise<boolean> | boolean {
    return this.canActivate();
  }
}
