import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Contractor } from '../../models/contractor.interface';
import { ContractorModalData } from '../../models/contractor-modal-data.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ContractorFormComponent } from '../forms/contractor-form.component';
import { CommonModule } from '@angular/common';

@Component({
     selector: 'app-contractor-modal',
     templateUrl: './contractor-modal.component.html',
     styleUrls: ['./contractor-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          ContractorFormComponent,
          MatIconModule,
          MatButtonModule,
     ],
})
export class ContractorModalComponent extends BaseModalComponent {
     public override formData: Contractor = this.data.data;
     public override isFormValid = false;

     constructor(
          public override dialogRef: MatDialogRef<ContractorModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ContractorModalData
     ) {
          super();
     }
}
