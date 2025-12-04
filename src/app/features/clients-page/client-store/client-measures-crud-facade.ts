import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, filter, Observable, switchMap, takeUntil, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { CLIENTS_MESSAGES } from '../enums/clients-messages.enum';
import { ClientMeasures, ClientMeasuresApi } from '../models/client-measures.interface';
import { ClientMeasuresService } from '../services/client-measures-service';
import { ClientMeasuresHelper } from '../helpers/client-measures-modal.helper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class ClientsMeasuresCrudFacade {
     public clientMeasures$?: Observable<ClientMeasures> | null = null;
     private readonly clientMeasuresService = inject(ClientMeasuresService);
     private readonly notificationService = inject(NotificationMessageService);
     private readonly destroyRef = inject(DestroyRef);
     private readonly clientMeasuresHelper = new ClientMeasuresHelper();

     public getClientMeasures(clientId: number): Observable<ClientMeasures> {
          this.clientMeasures$ = this.clientMeasuresService.getMeasures(clientId);
          return this.clientMeasures$;
     }

     public openClientMeasures($id: number): void {
          this.clientMeasuresService
               .getMeasures($id)
               .pipe(
                    filter(Boolean),
                    switchMap((data: ClientMeasures) => {
                         return this.clientMeasuresHelper.openClientMeasuresModal(data);
                    }),
                    switchMap((data: ClientMeasures) => {
                         return data ? this.update($id, data) : EMPTY;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public updateMeasures(clientId: number, clientMeasures: ClientMeasures): void {
          this.update(clientId, clientMeasures)
               .pipe(takeUntilDestroyed(this.destroyRef))
               .subscribe();
     }

     public createMeasures(clientMeasures: ClientMeasures): void {
          this.create(clientMeasures).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
     }

     private create(clientMeasures: ClientMeasures): Observable<ClientMeasuresApi> {
          return this.clientMeasuresService.createClientMeasures(clientMeasures).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, CLIENTS_MESSAGES.UPDATED);
               })
          );
     }

     private update(id: number, clientMeasures: ClientMeasures): Observable<ClientMeasuresApi> {
          return this.clientMeasuresService.updateClientMeasures(id, clientMeasures).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, CLIENTS_MESSAGES.UPDATED);
               })
          );
     }

     private afterSaveNotification(result: RestResponse, successMsg: string): void {
          if (result) {
               result.success
                    ? this.notificationService.success(successMsg)
                    : this.notificationService.error(COMMON_MESSAGES.SAVING_ERROR);
          }
     }
}
