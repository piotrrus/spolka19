`    `;
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { DialogSize } from '@shared/enums/dialog-size.enum';
import { Observable, tap } from 'rxjs';
import { ConfirmDeleteData } from './confirm-delete.interface';

@Injectable()
export class ConfirmDeleteDialogsHelper {
     constructor(public dialog: MatDialog) {}

     public confirmDeleteOpen(data: ConfirmDeleteData): Observable<boolean> {
          const dialogRef = this.dialog.open(ConfirmDialogComponent, {
               width: DialogSize.SMALL,
               disableClose: true,
               data: data,
          });
          return this.confirmDelete(dialogRef);
     }

     private confirmDelete(dialogRef: MatDialogRef<ConfirmDialogComponent>): Observable<boolean> {
          return dialogRef.afterClosed().pipe(
               tap((data: boolean) => {
                    return data;
               })
          );
     }
}
