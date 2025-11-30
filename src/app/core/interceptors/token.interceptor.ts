import { HttpInterceptorFn } from '@angular/common/http';
import { StorageService } from '@core/storage/storage.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
     const storageService = new StorageService();
     //   const environment = inject(Environment);
     //   const baseUrl = environment.getAPIUrl();

     // req = req.clone({
     //      url: `${environment.api}${req.url}`,
     //      //   url: `${baseUrl}/${req.url}`,
     // });
     // console.log(req);

     const newToken: string | null = sessionStorage.getItem('authorizationToken')
          ? sessionStorage.getItem('authorizationToken')
          : '';
     req = req.clone({
          setHeaders: {
               Authorization: `Bearer ${newToken}`,
               'Content-Type': `application/json`,
               'X-Requested-With': `XMLHttpRequest`,
          },
     });

     return next(req);
};

// export const apiUrlInterceptor: HttpInterceptorFn = (req, next) => {
//                    const httpsRequest: HttpRequest<unknown> = request.clone({
//                     url: `${environment.api}${request.url}`,
//                });
//                const modified = this.addHeaders(httpsRequest);
//                console.log(httpsRequest);
//                return next.handle(modified);
// //   const environment = inject(Environment);
// //   const baseUrl = environment.getAPIUrl();

// //   req = req.clone({
// //       url: `${baseUrl}/${req.url}`,
// //   });
// //   return next(req);
// };
