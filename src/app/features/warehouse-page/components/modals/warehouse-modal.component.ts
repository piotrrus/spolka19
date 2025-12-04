import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { WarehouseModalData } from '../../models/warehouse-modal-data.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { WarehouseFormComponent } from '../forms/warehouse-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-warehouse-modal',
     templateUrl: './warehouse-modal.component.html',
     styleUrls: ['./warehouse-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          WarehouseFormComponent,
          MatIconModule,
          MatButtonModule,
     ],
})
export class WarehouseModalComponent extends BaseModalComponent {
     public override isFormValid = false;

     constructor(
          public override dialogRef: MatDialogRef<WarehouseModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: WarehouseModalData
     ) {
          super();
     }
}
