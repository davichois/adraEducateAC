import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from './interfaces/auth.interfaces';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: Token | undefined = JSON.parse(
      localStorage.getItem('token') || '{}'
    );

    let req = request;
    if (token) {
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${token.access_token}`,
        },
      });
    }

    return next.handle(req);
  }
}
