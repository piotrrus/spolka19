import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from '@core/storage/storage.service';

@Injectable()
export class HttpsInterceptor implements HttpInterceptor {
     private storageService = new StorageService();

     public intercept(
          request: HttpRequest<unknown>,
          next: HttpHandler
     ): Observable<HttpEvent<unknown>> {
          if (request.url.includes('json')) {
               const httpsRequest: HttpRequest<unknown> = request.clone({
                    url: `${environment.jsonData}${request.url}`,
               });

               return next.handle(httpsRequest);
          } else {
               const httpsRequest: HttpRequest<unknown> = request.clone({
                    url: `${environment.api}${request.url}`,
               });
               const modified = this.addHeaders(httpsRequest);
               console.log(httpsRequest);
               return next.handle(modified);
          }
     }

     private addHeaders(req: HttpRequest<unknown>): HttpRequest<unknown> {
          const newToken: string | null = sessionStorage.getItem('authorizationToken')
               ? sessionStorage.getItem('authorizationToken')
               : '';
          return req.clone({
               setHeaders: {
                    Authorization: `Bearer ${newToken}`,
                    'Content-Type': `application/json`,
                    'X-Requested-With': `XMLHttpRequest`,
               },
          });
     }
}
