import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ProductionDataModalData } from '../../../models/production-data-modal-data.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { ProductionEditFormComponent } from '../../forms/production-edit-form/production-edit-form.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-production-data-modal',
     templateUrl: './production-data-modal.component.html',
     styleUrls: ['./production-data-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          MatIconModule,
          MatButtonModule,
          ProductionEditFormComponent,
     ],
})
export class ProductionDataModalComponent extends BaseModalComponent {
     constructor(
          public override dialogRef: MatDialogRef<ProductionDataModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ProductionDataModalData
     ) {
          super();
     }
}
