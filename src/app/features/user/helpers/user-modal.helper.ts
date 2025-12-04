import { Injectable } from '@angular/core';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Titles } from '@features/user/enums/titles.enum';
import { Role, User } from '../../admin-page/models/user.interface';
import { UserModalComponent } from '../../admin-page/components/modals/user-modal/user-modal.component';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';

@Injectable()
export class UserModalHelper extends BaseModalHelper {
     // public confirmDialog(): Observable<boolean> {
     //      return this.confirmDialogsHelper.confirmDialog();
     // }

     public openModal(roles: Role[] | null, user?: User): Observable<User> {
          const dialogRef = this.dialog.open(UserModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: user,
                    title: Titles.MODAL_TITLE,
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
