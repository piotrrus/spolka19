import { DestroyRef, inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { CLIENTS_MESSAGES } from '../enums/clients-messages.enum';
import { ClientEventsService } from '../services/client-events-service';
import {
     ClientEvents,
     ClientEventsApi,
     ClientEventsSave,
} from '../models/clients-events.interface';
import { clientEventsModelCreate } from '../helpers/client-events-create';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class ClientsEventsCrudFacade {
     public clientEvents$?: Observable<ClientEvents> | null = null;

     private readonly clientEventsService = inject(ClientEventsService);
     private readonly notificationService = inject(NotificationMessageService);
     private readonly destroyRef = inject(DestroyRef);

     public saveEvents(clientId: number, events: ClientEvents): void {
          const clientEvents: ClientEventsSave = clientEventsModelCreate(events);
          this.clientEventsService
               .updateClientEvents(clientId, clientEvents)
               .pipe(
                    tap((data: ClientEventsApi) => {
                         this.afterSaveNotification(data, CLIENTS_MESSAGES.UPDATED);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     private afterSaveNotification(result: RestResponse, successMsg: string): void {
          if (result) {
               result.success
                    ? this.notificationService.success(successMsg)
                    : this.notificationService.error(COMMON_MESSAGES.SAVING_ERROR);
          }
     }
}
