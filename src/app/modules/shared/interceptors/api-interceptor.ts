import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "env/environment";
import { TokenService } from "../services/token.service";
import { catchError, finalize } from "rxjs/operators";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router";
import { LoadingService } from "shared/services/loading.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  private readonly UNAUTHORIZED = 401

  constructor(
    private tokenService: TokenService,
    private toasts: ToastController,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.stack()

    req = req.clone({
      url: `${environment.API_URL}/${req.url}`
    })

    if (this.tokenService.hasToken()) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${this.tokenService.token}` }
      })
    }

    return next.handle(req).pipe(
      finalize(() => this.loadingService.unstack()),
      catchError((response: HttpErrorResponse) => {
        if (this.isUnauthorized(response.error, response)) {
          this.tokenService.clear()
          this.router.navigate([''])
        }
        return throwError(response);
      })
    )
  }

  private isUnauthorized(obj: any, response: HttpErrorResponse): obj is ErrorResponse {
    return this.UNAUTHORIZED === response.status
  }
}

interface ErrorResponse {
  type: string
  message: string
}
