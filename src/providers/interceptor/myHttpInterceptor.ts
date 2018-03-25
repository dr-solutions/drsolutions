import { Injectable, Inject, InjectionToken } from "@angular/core";
import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/timeout';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');
export const defaultTimeout = 5000;

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    constructor(@Inject(DEFAULT_TIMEOUT) protected defaultTimeout) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const timeout = Number(req.headers.get('timeout')) || this.defaultTimeout;
      return next.handle(req).timeout(timeout);
    }
}