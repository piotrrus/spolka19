import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { LiningModalComponent } from '../components/modals/lining-modal.component';
import { Lining } from '../models/lining.interface';
import { TITLES } from '../enums/titles.enum';

@Injectable()
export class LiningModalHelper {
     private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();

     constructor(private dialog: MatDialog) {}

     public confirmCancel(): Observable<boolean> {
          return this.confirmDialogsHelper.confirmDialog();
     }

     public openModal(modalData?: Lining): Observable<Lining> {
          const dialogRef = this.dialog.open(LiningModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: modalData,
                    title: TITLES.MODAL_TITLE,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: Lining) => {
                    return data;
               })
          );
     }
}
