import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ProductionNrModalModalData } from '../../../models/production-nr-modal-data.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ProductionNrFormComponent } from '../../forms/production-nr-form/production-nr-form.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-production-nr-modal',
     templateUrl: './production-nr-modal.component.html',
     styleUrls: ['./production-nr-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          ProductionNrFormComponent,
          MatButtonModule,
          MatIconModule,
     ],
})
export class ProductionNrModalComponent extends BaseModalComponent {
     constructor(
          public override dialogRef: MatDialogRef<ProductionNrModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: ProductionNrModalModalData
     ) {
          super();
     }
}
