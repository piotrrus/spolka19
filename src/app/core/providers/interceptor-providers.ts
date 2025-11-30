import { Provider } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';

export const interceptorProviders: Provider[] = [
     { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
     // { provide: HTTP_INTERCEPTORS, useClass: BrokenApiInterceptor, multi: true },
     // {
     //   provide: HTTP_INTERCEPTORS,
     //   useClass: HeadlessModeInterceptor,
     //   multi: true,
     // },
     // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
