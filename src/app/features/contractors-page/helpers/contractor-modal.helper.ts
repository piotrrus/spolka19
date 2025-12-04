import { Injectable } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { ContractorModalComponent } from '../components/modals/contractor-modal.component';
import { Contractor } from '../models/contractor.interface';
import { TITLES } from '../enums/contractor-titles.enum';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class ContractorModalHelper extends BaseModalHelper {
     // private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();

     // constructor(private dialog: MatDialog) {}

     // public confirmCancel(): Observable<boolean> {
     //      return this.confirmDialogsHelper.confirmDialog();
     // }

     public openModal(modalData?: Contractor): Observable<Contractor> {
          const dialogRef = this.dialog.open(ContractorModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: modalData,
                    title: TITLES.MODAL_TITLE,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: Contractor) => {
                    return data;
               })
          );
     }
}
