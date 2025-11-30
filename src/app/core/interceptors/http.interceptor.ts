import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
     if (req.url.includes('svg')) {
          console.log(req);
          req = req.clone({
               url: `${environment.icons}${req.url}`,
          });
          // console.log(req);
          return next(req);
     } else {
          req = req.clone({
               url: `${environment.api}${req.url}`,
          });
     }
     console.log(req);
     return next(req);
};
