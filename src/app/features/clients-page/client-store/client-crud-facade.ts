import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, Observable, switchMap, takeUntil, tap } from 'rxjs';
import { Client, ClientDetailsApi } from '../models/client.interface';
import { ClientsService } from '../services/clients-service';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { clientModelCreate } from '../helpers/client-create';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { CLIENTS_MESSAGES } from '../enums/clients-messages.enum';
import { ClientDetailsSaveModel } from '../models/client-details.interface';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { ClientModalHelper } from '../helpers/client-modal.helper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class ClientsCrudFacade {
     private clientDetails$: Observable<Client> | null = null;

     private readonly clientsService = inject(ClientsService);
     private readonly notificationService = inject(NotificationMessageService);
     private readonly destroyRef = inject(DestroyRef);

     private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();
     private clientDialogsHelper = new ClientModalHelper();

     public getClientData(clientId: number): Observable<Client> {
          this.clientDetails$ = this.clientsService.getDetails(clientId);
          return this.clientDetails$;
     }

     public getList(): Observable<Client[]> {
          return this.clientsService.getList();
     }

     public openDetailsModal(id: number): void {
          this.clientsService
               .getDetails(id)
               .pipe(
                    switchMap((data: Client) => this.clientDialogsHelper.openModal(data)),
                    switchMap((data: Client) => {
                         const newClient = clientModelCreate(data);
                         return data ? this.update(id, newClient) : EMPTY;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public updateClient(clientId: number, clientData: Client): void {
          if (clientData) {
               const newClient = clientModelCreate(clientData);
               this.update(clientId, newClient)
                    .pipe(takeUntilDestroyed(this.destroyRef))
                    .subscribe();
          }
     }

     public addClient(): Observable<ClientDetailsApi> {
          return this.clientDialogsHelper.openModal().pipe(
               switchMap((data: ClientDetailsSaveModel) => (data ? this.create(data) : EMPTY)),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public deleteClient(id: number): Observable<ClientDetailsApi> {
          return this.confirmDialogsHelper
               .confirmDialog()
               .pipe(switchMap((data: boolean) => (data ? this.delete(id) : EMPTY)));
     }

     private update(id: number, client: ClientDetailsSaveModel): Observable<ClientDetailsApi> {
          return this.clientsService.update(id, client).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, CLIENTS_MESSAGES.UPDATED);
               })
          );
     }

     private create(client: ClientDetailsSaveModel): Observable<ClientDetailsApi> {
          return this.clientsService.create(client).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, CLIENTS_MESSAGES.CREATED);
               })
          );
     }

     private delete(id: number): Observable<ClientDetailsApi> {
          return this.clientsService.remove(id).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, CLIENTS_MESSAGES.DELETED);
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
