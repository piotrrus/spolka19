import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { OrderAssortModalData } from '../../../models/order-assort-modal-data.interface';
import { Assort } from '@features/stock-page/models/assort.interface';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OrderAssortFormComponent } from '../../forms/order-assort/order-assort-form.component';

@Component({
     selector: 'app-order-assort-modal',
     templateUrl: './order-assort-modal.component.html',
     styleUrls: ['./order-assort-modal.component.scss'],
     imports: [
          CommonModule,
          MatDialogModule,
          MatIconModule,
          MatButtonModule,
          OrderAssortFormComponent,
     ],
})
export class OrderAssortModalComponent extends BaseModalComponent {
     public override formData: Assort = this.data.data;
     public contractors: Contractor[];
     public assorts: AssortList[];
     // public isFormValid = false;

     constructor(
          public override dialogRef: MatDialogRef<OrderAssortModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: OrderAssortModalData
     ) {
          super();
          this.formData = this.data.data;
          this.contractors = this.data.contractors;
          this.assorts = this.data.assorts;
     }

     // public onFormChange($event: Assort): void {
     //      $event ? (this.formData = $event) : null;
     // }

     // public onFormValid($event: boolean): void {
     //      this.isFormValid = $event;
     // }

     // public onSave(): void {
     //      this.dialogRef.close(this.formData);
     // }

     // public onClose(): void {
     //      this.dialogRef.close(false);
     // }
}
