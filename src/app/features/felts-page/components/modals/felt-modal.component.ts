import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { Felt } from '../../models/felt.interface';
import { FeltModalData } from '../../models/felt-modal-data.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FeltFormComponent } from '../forms/felt-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-felt-modal',
     templateUrl: './felt-modal.component.html',
     styleUrls: ['./felt-modal.component.scss'],
     imports: [CommonModule, MatDialogModule, FeltFormComponent, MatIconModule, MatButtonModule],
})
export class FeltModalComponent extends BaseModalComponent {
     public override formData: Felt = this.data.data;
     // public isFormValid = false;

     constructor(
          public override dialogRef: MatDialogRef<FeltModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: FeltModalData
     ) {
          super();
     }
}
