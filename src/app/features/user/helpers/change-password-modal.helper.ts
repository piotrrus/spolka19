import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';

import { Titles } from '../enums/titles.enum';
import { Role, User } from '../../admin-page/models/user.interface';
import { ChangePasswordModalComponent } from '../../admin-page/components/modals/change-password-modal/change-password-modal.component';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class ChangePasswordModalHelper extends BaseModalHelper {
     // private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper(this.dialog);

     // // constructor(private dialog: MatDialog) {}

     // public confirmDialog(): Observable<boolean> {
     //      return this.confirmDialogsHelper.confirmDialog();
     // }

     public openModal(roles: Role[] | null, user?: User): Observable<User> {
          const dialogRef = this.dialog.open(ChangePasswordModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: user,
                    title: Titles.CHANGE_PSW_MODAL_TITLE,
                    roles: roles,
               },
          });
          return dialogRef.afterClosed().pipe(
               tap((data: User) => {
                    return data;
               })
          );
     }
}
