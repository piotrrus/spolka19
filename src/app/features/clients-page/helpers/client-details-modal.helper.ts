import { Injectable } from '@angular/core';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Client } from '../models/client.interface';
import { TITLES } from '../enums/titles.enum';
import { ClientDetailsModalComponent } from '../components/modals/order-details-modal/client-details-modal.component';
import { ClientEventModalComponent } from '../components/modals/client-event-modal/client-event-modal.component';
import { ClientEvents } from '../models/clients-events.interface';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class ClientDetailsModalHelper extends BaseModalHelper {
     public openClientDetailsModal(modalData?: Client): Observable<Client> {
          const dialogRef = this.dialog.open(ClientDetailsModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: modalData,
                    title: TITLES.CLIENT_DATA,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: Client) => {
                    return data;
               })
          );
     }

     public openEventModal(modalData?: Client): Observable<ClientEvents> {
          const dialogRef = this.dialog.open(ClientEventModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: modalData,
                    title: TITLES.CLIENT_EVENTS,
               },
          });
          return dialogRef.afterClosed().pipe(tap((data: ClientEvents) => data));
     }
}
