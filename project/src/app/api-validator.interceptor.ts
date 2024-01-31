import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiValidatorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const trade: any = JSON.parse(localStorage.getItem("CurrentUser")!);
    // const trade: any = JSON.parse(sessionStorage.getItem("CurrentUser")!);

    if (trade && trade.token) {
      request = request.clone({
        headers: new HttpHeaders({
          'Accept': 'application/json',
          'Authorization': 'API Key ' + trade.token,
        })
      });
    }
    return next.handle(request);
    // return next.handle(request);
  }
}
