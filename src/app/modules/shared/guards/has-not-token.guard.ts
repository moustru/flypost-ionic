import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from "shared/services/token.service";

@Injectable()
export class HasNotTokenGuard implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(): Promise<boolean> | boolean {
    return !this.tokenService.hasToken() || this.router.navigate(['courier'])
  }

}
