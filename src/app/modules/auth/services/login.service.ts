import { HttpClient } from "@angular/common/http";
import { TokenInput, TokenOutput } from "auth/dto/login";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { TokenService } from "shared/services/token.service";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private tokeService: TokenService) { }

  isLogged(): boolean {
    return this.tokeService.hasToken();
  }

  login(input: TokenInput): Observable<TokenOutput> {
    return this.http
      .post<TokenOutput>('token', input)
      .pipe(tap(output => this.tokeService.store(output.token, output.roles)))
  }
}
