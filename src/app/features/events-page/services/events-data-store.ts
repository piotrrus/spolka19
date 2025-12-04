import { inject, Injectable } from '@angular/core';
import { EMPTY, Observable, switchMap, takeUntil, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { BaseComponent } from '@shared/abstract/base.component';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { EventsService } from './events.service';
import { EventsModalHelper } from '../helpers/events-modal.helper';
import { ClientEventDetails } from '../models/events.interface';
import {
     ClientEventsApi,
     ClientEventsSave,
} from '@features/clients-page/models/clients-events.interface';
import { ClientEventsModalComponent } from '../components/modals/client-event-modal/client-events-modal.component';
import { TITLES } from '../enums/titles.enum';
import { EVENTS_MESSAGES } from '../enums/events-messages.enum';

@Injectable()
export class EventsDataStore {
     private eventsService = inject(EventsService);

     private notificationService = inject(NotificationMessageService);

     private eventsModalHelper = inject(EventsModalHelper);

     // public getList(): Observable<Contractor[] | null> {
     //      return this.contractorsService.getList();
     // }

     // public openClientEventsModal(
     //      eventTypeId: number,
     //      event?: ClientEventDetails
     // ): Observable<ClientEventsSave> {
     //      const dialogRef = this.dialog.open(ClientEventsModalComponent, {
     //           width: DialogSize.MEDIUM_SMALL,
     //           data: {
     //                event: event,
     //                title: TITLES.MODAL_TITLE_MEETING,
     //                eventTypeId: eventTypeId,
     //           },
     //      });
     //      return dialogRef.afterClosed().pipe(
     //           tap((data: ClientEventsSave) => {
     //                return data;
     //           })
     //      );
     // }

     // public openDetails(modalData: Contractor): Observable<ContractorApi> {
     //      const id = modalData.id;
     //      return this.contractorModalHelper.openModal(modalData).pipe(
     //           switchMap((data: Contractor) => {
     //                return data ? this.update(id, data) : EMPTY;
     //           }),
     //           takeUntil(this.destruct$)
     //      );
     // }

     // public openDetailsModal(id: number): void {
     //      this.contractorsService
     //           .getDetails(id)
     //           .pipe(
     //                switchMap((data: Contractor) =>
     //                     this.eventsModalHelper
     //                          .openModal(data)
     //                          .pipe(
     //                               switchMap((data: Contractor) =>
     //                                    data ? this.update(id, data) : EMPTY
     //                               )
     //                          )
     //                ),
     //                takeUntil(this.destruct$)
     //           )
     //           .subscribe();
     // }

     // public onAddNew(): Observable<ClientEventsApi> {
     //      let event: Contractor;
     //      return this.contractorModalHelper.openModal().pipe(
     //           tap((data: ClientEventsSave) => {
     //                event = data;
     //           }),
     //           switchMap((data: Contractor | boolean) => {
     //                return data ? this.create(event) : EMPTY;
     //           }),
     //           takeUntil(this.destruct$)
     //      );
     // }

     private createClientEvent(
          idClient: number,
          client: ClientEventsSave
     ): Observable<ClientEventsApi> {
          return this.eventsService.createClientEvent(idClient, client).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, EVENTS_MESSAGES.CREATED);
               })
          );
     }

     private updateClientEvents(
          idClient: number,
          client: ClientEventsSave
     ): Observable<ClientEventsApi> {
          return this.eventsService.updateClientEvents(idClient, client).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, EVENTS_MESSAGES.UPDATED);
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
