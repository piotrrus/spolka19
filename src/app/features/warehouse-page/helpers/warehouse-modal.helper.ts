import { Injectable } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
// import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { WarehouseModalComponent } from '../components/modals/warehouse-modal.component';
import { TITLES } from '../enums/titles.enum';
import { Warehouse } from '../models/warehouse.interface';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class WarehouseModalHelper extends BaseModalHelper {
     //      private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();

     //     private dialog: MatDialog = inject(MatDialog);

     //      public confirmCancel(): Observable<boolean> {
     //           return this.confirmDialogsHelper.confirmDialog();
     //      }

     public openModal(modalData?: Warehouse): Observable<Warehouse> {
          const dialogRef = this.dialog.open(WarehouseModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: modalData,
                    title: modalData ? TITLES.MODAL_TITLE : TITLES.MODAL_TITLE_NEW,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: Warehouse) => {
                    return data;
               })
          );
     }
}
