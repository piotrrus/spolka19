import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';

@Injectable()
export class BaseModalHelper {
     private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();
     public dialog: MatDialog = inject(MatDialog);

     public confirmCancel(): Observable<boolean> {
          return this.confirmDialogsHelper.confirmDialog();
     }
}
