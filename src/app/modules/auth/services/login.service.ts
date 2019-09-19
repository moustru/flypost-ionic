import { HttpClient } from "@angular/common/http";
import { TokenInput, TokenOutput } from "auth/dto/login";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(input: TokenInput): Observable<TokenOutput> {
    return this.http
      .post<TokenOutput>('token', input)
  }
}
