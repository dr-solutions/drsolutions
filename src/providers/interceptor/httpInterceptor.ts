import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpInterceptor extends HttpClient {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Interceptor works');
        console.log(req);
        console.log(next);
        const modified = req.clone({setHeaders: {'Custom-Header-2': '2'}});
        return next.handle(modified);
    }
}