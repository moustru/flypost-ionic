import { HttpClient } from "@angular/common/http";
import { TokenInput, TokenOutput } from "auth/dto/login";
import { Observable } from "rxjs";
import { AuthInjectable } from "auth/auth-service.module";

@AuthInjectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  login(input: TokenInput): Observable<TokenOutput> {
    return this.http
      .post<TokenOutput>('token', input)
  }
}
