import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { StockFabric } from '@features/stock-page/models/stock-fabric.interface';
import { OrderFabricModalData } from '../../../models/order-fabric-modal-data.interface';
import { OrderFabricFormConfig } from './fabric-form-config';
import { List } from '@shared/interfaces/list.interface';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { FabricFormComponent } from '../../forms/fabric/fabric-form.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-order-fabric-modal',
     templateUrl: './order-fabric-modal.component.html',
     styleUrls: ['./order-fabric-modal.component.scss'],
     imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule, FabricFormComponent],
})
export class OrderFabricModalComponent extends BaseModalComponent {
     // public formData: StockFabric = this.data.fabric;
     // public isFormValid = false;
     public contractors: Contractor[];
     public patterns: List[];
     public plnToEuroActualValue: string;

     public orderFabricFormConfig: OrderFabricFormConfig = {
          isNewOrder: true,
     };

     constructor(
          public override dialogRef: MatDialogRef<OrderFabricModalComponent>,
          @Inject(MAT_DIALOG_DATA) public data: OrderFabricModalData
     ) {
          super();
          this.formData = this.data.fabric;
          this.contractors = this.data.contractors;
          this.patterns = this.data.patterns;
          this.plnToEuroActualValue = this.data.plnToEuroActualValue;
     }

     // public onConfirm(): void {
     //      this.dialogRef.close(true);
     // }

     // public onFormChange($event: Fabric) {
     //      $event ? (this.formData = $event) : null;
     // }

     // public onFormValid($event: boolean) {
     //      this.isFormValid = $event;
     // }

     // public onSave(): void {
     //      this.dialogRef.close(this.formData);
     // }

     // public onClose(): void {
     //      this.dialogRef.close(false);
     // }
}
