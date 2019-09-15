import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "env/environment";
import { TokenService } from "shared/services/token.service";
import { catchError } from "rxjs/operators";
import { ToastController } from "@ionic/angular";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private toastController: ToastController) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: `${environment.API_URL}/${req.url}`,
      setHeaders: {
        Authorization: `Bearer ${this.tokenService.findToken()}`
      }
    })

    return next
      .handle(req)
      .pipe(
        catchError((response: HttpErrorResponse) => {
          if (this.isError(response.error, response)) {
            this.createToast(response.error)
          }
          return throwError(response);
        })
      );
  }

  private async createToast(errResponse: ErrorResponse): Promise<void> {
    await this.toastController.create({
      header: errResponse.type,
      message: errResponse.message,
      duration: 3000,
      color: "danger"
    })
  }

  private isError(obj: any, response: HttpErrorResponse): obj is ErrorResponse {
    return response.headers.has('X-Response-Type')
  }
}

interface ErrorResponse {
  type: string
  message: string
}
