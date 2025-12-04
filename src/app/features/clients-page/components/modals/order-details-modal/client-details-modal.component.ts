import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { ClientModalData } from '@features/clients-page/models/client-modal-data.interface';
import { Client } from '@features/clients-page/models/client.interface';
import { MatIconModule } from '@angular/material/icon';
import { ClientFormComponent } from '../../forms/client-form/client-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
     selector: 'app-client-details-modal',
     templateUrl: './client-details-modal.component.html',
     styleUrls: ['./client-details-modal.component.scss'],
     imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule, ClientFormComponent],
})
export class ClientDetailsModalComponent extends BaseModalComponent {
     public override formData: Client = this.data.data;
     public override isFormValid = false;

     constructor(
          public override dialogRef: MatDialogRef<ClientDetailsModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ClientModalData
     ) {
          super();
     }
}
