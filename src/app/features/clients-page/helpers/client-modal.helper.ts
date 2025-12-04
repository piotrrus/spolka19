import { Injectable } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { Client } from '../models/client.interface';
import { ClientDetailsModalComponent } from '../components/modals/order-details-modal/client-details-modal.component';
import { ClientDetailsSaveModel } from '../models/client-details.interface';
import { TITLES } from '../enums/titles.enum';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class ClientModalHelper extends BaseModalHelper {
     //      private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();
     //  public dialog: MatDialog = inject(MatDialog);

     //      public confirmCancel(): Observable<boolean> {
     //           return this.confirmDialogsHelper.confirmDialog();
     //      }

     public openModal(client?: Client): Observable<ClientDetailsSaveModel> {
          const dialogRef = this.dialog.open(ClientDetailsModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: client,
                    title: client ? TITLES.MODAL_TITLE : TITLES.MODAL_TITLE_NEW,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: ClientDetailsSaveModel) => {
                    return data;
               })
          );
     }
}
