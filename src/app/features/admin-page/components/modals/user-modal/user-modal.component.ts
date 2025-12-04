import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserModalData } from '@features/admin-page/models/user-modal-data.interface';
import { User } from '@features/admin-page/models/user.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';

@Component({
     selector: 'app-user-modal',
     templateUrl: './user-modal.component.html',
     styleUrls: ['./user-modal.component.scss'],
})
export class UserModalComponent extends BaseModalComponent {
     public user: User = this.data.data;

     constructor(
          public override dialogRef: MatDialogRef<UserModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: UserModalData
     ) {
          super();
     }
}
