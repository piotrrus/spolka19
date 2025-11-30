import { HttpErrorResponse, HttpInterceptorFn, HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
     const router = inject(Router);

     return next(req).pipe(
          catchError((error: HttpErrorResponse) => {
               console.log(error);
               if (error.status === HttpStatusCode.NotFound) {
                    console.log('404 error');
                    router.navigate(['/not-found']);
               }
               if (error.status === HttpStatusCode.Unauthorized) {
                    //   router.navigate(['/not-/login']);
                    console.log('Unauthorized access - redirecting to login');
               }

               if (error.status === HttpStatusCode.InternalServerError) {
                    console.error('Server error occurred');
               }
               return throwError(error);
          })
     );
};
