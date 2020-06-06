import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }
  intercept(req, next) {
    let authService = this.injector.get(LoginService)
    let tockenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+authService.getToken()

      }
    })
    return next.handle(tockenizedReq);
  }


}
