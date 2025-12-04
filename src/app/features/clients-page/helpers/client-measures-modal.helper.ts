import { Injectable } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
// import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TITLES } from '../enums/titles.enum';
import { ClientMeasures } from '@features/clients-page/models/client-measures.interface';
import { ClientMeasuresModalComponent } from '@features/clients-page/components/modals/client-measures-modal/client-measures-modal.component';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class ClientMeasuresHelper extends BaseModalHelper {
     // private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();
     // public dialog: MatDialog = inject(MatDialog);
     // constructor(private dialog: MatDialog) {}

     // public confirmCancel(): Observable<boolean> {
     //      return this.confirmDialogsHelper.confirmDialog();
     // }

     public openClientMeasuresModal(clientMeasure?: ClientMeasures): Observable<ClientMeasures> {
          const dialogRef = this.dialog.open(ClientMeasuresModalComponent, {
               width: DialogSize.MEDIUM,
               data: {
                    data: clientMeasure,
                    title: TITLES.CLIENT_MEASURES,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: ClientMeasures) => {
                    return data;
               })
          );
     }
}
