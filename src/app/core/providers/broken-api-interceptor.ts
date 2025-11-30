import {
     HttpClient,
     HttpEvent,
     HttpHandler,
     HttpInterceptor,
     HttpRequest,
     HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { isPlatformServer } from '@angular/common';
// import { Request, Response } from 'express';

export const ERROR_PAGE_URL = '/error-page';
// const API_HEALTH_CHECK_URL = '/rest/api/health';
const INTERNAL_SERVER_ERROR_CODE = 500;
const TIME_FOR_CIRCUIT_BREAKING_IN_MS = 5000;
// const MAINTENANCE_HEADER = 'x-maintenance';
// const HEALTH_CHECK_PART = 'health';
// const EVENT_MODULE_PART = 'event-log';

// const omittedUrls = [HEALTH_CHECK_PART, EVENT_MODULE_PART];
// const omittedUrlsRegex = new RegExp(omittedUrls.join('|'));

const lastHealthCheck = { status: 0, timestamp: 0 };

@Injectable()
export class BrokenApiInterceptor implements HttpInterceptor {
     constructor(
          private readonly router: Router // private readonly http: HttpClient,
     ) // @Optional() @Inject(RESPONSE) private readonly response: Response,
     // @Optional() @Inject(REQUEST) private readonly request: Request,
     // @Inject(PLATFORM_ID) private readonly platformId
     {}

     intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
          // if (this.shouldOmitInterception(req)) {
          //   return next.handle(req);
          // }
          return next.handle(req).pipe(
               switchMap((event) => this.handleResponse(event)),
               catchError((err) => {
                    if (err.status >= INTERNAL_SERVER_ERROR_CODE) {
                         console.log('INTERNAL_SERVER_ERROR');
                         // if (this.shouldReuseApiHealthState()) {
                         //   return this.redirectToErrorPage();
                         // }
                         // return this.checkApiHealth(req, next).pipe(
                         //   switchMap((event) => this.handleResponse(event)),
                         //   catchError(() => {
                         //     return this.redirectToErrorPage();
                         //   })
                         // );
                    }
                    return throwError(err);
               })
          );
     }

     private handleResponse(event: HttpEvent<unknown>): Observable<HttpEvent<unknown>> {
          // if (event instanceof HttpResponse && this.isMaintenanceResponse(event)) {
          if (event instanceof HttpResponse) {
               return this.redirectToErrorPage();
          }
          return of(event);
     }

     // private isMaintenanceResponse(event: HttpResponse<unknown>): boolean {
     //   const headers = event.headers;
     //   return (
     //     headers.has(MAINTENANCE_HEADER) &&
     //     headers.get(MAINTENANCE_HEADER) === 'true'
     //   );
     // }

     // private shouldOmitInterception(req: HttpRequest<unknown>): boolean {
     //   return omittedUrlsRegex.test(req.url) || this.router.url === ERROR_PAGE_URL;
     // }

     private redirectToErrorPage(): Observable<never> {
          // if (isPlatformServer(this.platformId)) {
          //   this.redirectOnSSRToErrorPage();
          // } else {
          this.router.navigate([ERROR_PAGE_URL]);
          // }
          return throwError(() => 'Redirected to error page');
     }

     // private shouldReuseApiHealthState(): boolean {
     //   const now = new Date().getTime();
     //   return (
     //     lastHealthCheck.timestamp + TIME_FOR_CIRCUIT_BREAKING_IN_MS > now &&
     //     lastHealthCheck.status >= INTERNAL_SERVER_ERROR_CODE
     //   );
     // }

     // private checkApiHealth(
     //   req: HttpRequest<unknown>,
     //   next: HttpHandler
     // ): Observable<HttpEvent<unknown>> {
     //   const saveHealthcheckTimestamp = (status: number): void => {
     //     lastHealthCheck.status = status;
     //     lastHealthCheck.timestamp = new Date().getTime();
     //   };
     //   return this.http.get(API_HEALTH_CHECK_URL).pipe(
     //     switchMap((response: HttpResponse<unknown>) => {
     //       saveHealthcheckTimestamp(response.status);
     //       return next.handle(req);
     //     }),
     //     catchError((err) => {
     //       saveHealthcheckTimestamp(err.status);
     //       return throwError(err);
     //     })
     //   );
     // }
}
