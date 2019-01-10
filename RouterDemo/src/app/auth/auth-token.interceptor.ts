import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor{

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Auth Interceprot Called");  
        let token = sessionStorage.getItem("token");           
        request = request.clone({            
                setHeaders: {
                    Authorization: `Bearer ${token}`
                } 
            }
        )
        return next.handle(request).pipe(
            tap(
              event => {
                status = '';
                if (event instanceof HttpResponse) {
                  console.log(event.body+" ==============");
                }
              },
              error => status = 'failed'
            ))
    }

}