import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IProductionDateModalModalData } from '../../../models/production-date-modal-data.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { ProductionDateFormComponent } from '../../forms/production-date-form/production-date-form.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-production-date-modal',
     templateUrl: './production-date-modal.component.html',
     styleUrls: ['./production-date-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          MatIconModule,
          MatButtonModule,
          ProductionDateFormComponent,
     ],
})
export class ProductionDateModalComponent extends BaseModalComponent {
     constructor(
          public override dialogRef: MatDialogRef<ProductionDateModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: IProductionDateModalModalData
     ) {
          super();
     }
}
