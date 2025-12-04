import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ChangePasswordModalData } from '@features/admin-page/models/change-password-modal-data.interface';
import { ChangePasswordFormComponent } from '@features/user/components/forms/change-password-form/change-password-form.component';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';

@Component({
     selector: 'app-change-password-modal',
     templateUrl: './change-password-modal.component.html',
     styleUrls: ['./change-password-modal.component.scss'],
     imports: [MatDialogModule, MatIconModule, ChangePasswordFormComponent],
})
export class ChangePasswordModalComponent extends BaseModalComponent {
     constructor(
          public override dialogRef: MatDialogRef<ChangePasswordModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ChangePasswordModalData
     ) {
          super();
     }
}
