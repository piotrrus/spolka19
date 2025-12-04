import { Injectable } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { Felt } from '../models/felt.interface';
import { FeltModalComponent } from '../components/modals/felt-modal.component';
import { Titles } from '../enums/titles.enum';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class FeltModalHelper extends BaseModalHelper {
     // private dialog: MatDialog = inject(MatDialog);
     // private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();

     // public confirmCancel(): Observable<boolean> {
     //      return this.confirmDialogsHelper.confirmDialog();
     // }

     public openModal(modalData?: Felt): Observable<Felt> {
          const dialogRef = this.dialog.open(FeltModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: modalData,
                    title: Titles.MODAL_TITLE,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: Felt) => {
                    return data;
               })
          );
     }
}
