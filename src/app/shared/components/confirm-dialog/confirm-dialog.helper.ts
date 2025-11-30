import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BaseComponent } from '../../abstract/base.component';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogSize } from './dialog-size.enum';

@Injectable()
export class ConfirmDialogsHelper extends BaseComponent {
     public dialog: MatDialog = inject(MatDialog);

     public confirmDialog(title?: string, continueTxt?: string): Observable<boolean> {
          const dialogRef = this.dialog.open(ConfirmDialogComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    title: title ? title : 'Potwierdź usunięcie',
                    continueTxt: continueTxt ? continueTxt : 'Czy chcesz kontynuować?',
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: boolean) => {
                    return data;
               })
          );
     }
}
