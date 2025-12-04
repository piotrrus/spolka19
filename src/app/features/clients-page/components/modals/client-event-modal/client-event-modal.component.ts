import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ClientEventsModalData } from '@features/clients-page/models/clients-events.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { ClientEventsFormComponent } from '../../forms/client-events-form/client-events-form.component';

@Component({
     selector: 'app-client-event-modal',
     templateUrl: './client-event-modal.component.html',
     styleUrls: ['./client-event-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          MatIconModule,
          MatButtonModule,
          ClientEventsFormComponent,
     ],
})
export class ClientEventModalComponent extends BaseModalComponent {
     constructor(
          public override dialogRef: MatDialogRef<ClientEventModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ClientEventsModalData
     ) {
          super();
     }
}
