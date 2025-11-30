import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, Observable, shareReplay, take, throwError } from 'rxjs';
// import { NotificationMessageService } from '../notifications/notification.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { NotificationMessageService } from '../notifications/notification.service';

@Injectable()
export abstract class ApiService {
     protected http = inject(HttpClient);
     protected notificationService = inject(NotificationMessageService);

     protected get<T>(url: string): Observable<T> {
          return this.http.get<T>(url).pipe(
               shareReplay(1),
               take(1),
               catchError((error: HttpErrorResponse) => {
                    this.notificationService.error(
                         `${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`
                    );
                    return throwError(() => error);
               })
          );
     }

     protected post<T>(url: string, requestData: unknown): Observable<T> {
          return this.http.post<T>(url, requestData).pipe(
               shareReplay(1),
               catchError((error: HttpErrorResponse) => {
                    this.notificationService.errorSave(
                         `${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`
                    );
                    return throwError(() => error);
               })
          );
     }

     protected delete<T>(url: string): Observable<T> {
          return this.http.delete<T>(url).pipe(
               catchError((error: HttpErrorResponse) => {
                    this.notificationService.errorSave(
                         `${COMMON_MESSAGES.ERROR_OCCURED} ${error.message}`
                    );
                    return throwError(() => error);
               })
          );
     }
}
