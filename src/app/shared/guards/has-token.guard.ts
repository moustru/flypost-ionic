import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { SharedInjectable } from "shared/shared.module";
import { TokenService } from "shared/services/token.service";

@SharedInjectable()
export class HasTokenGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private tokenService: TokenService) { }

  canActivate(): Promise<boolean> | boolean {
    return this.tokenService.hasToken() || this.router.navigate(['auth'])
  }

  canActivateChild(): Promise<boolean> | boolean {
    return this.canActivate();
  }
}
