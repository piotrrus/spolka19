import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
     ClientMeasures,
     ClientMeasuresModalData,
} from '@features/clients-page/models/client-measures.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ClientMeasuresFormComponent } from '../../forms/client-measures-form/client-measures-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
     selector: 'app-client-measures-modal',
     templateUrl: './client-measures-modal.component.html',
     styleUrls: ['./client-measures-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          MatIconModule,
          MatButtonModule,
          ClientMeasuresFormComponent,
     ],
})
export class ClientMeasuresModalComponent extends BaseModalComponent {
     public override formData: ClientMeasures = this.data.data;

     constructor(
          public override dialogRef: MatDialogRef<ClientMeasuresModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ClientMeasuresModalData
     ) {
          super();
     }
}
