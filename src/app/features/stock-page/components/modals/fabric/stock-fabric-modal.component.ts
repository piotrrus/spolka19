import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { StockFabricModalData } from '@features/stock-page/models/stock-fabric-modal-data.interface';
// import { StockFabric } from '@features/stock-page/models/stock-fabric.interface';
import { OrderFabricFormConfig } from '../order-fabric/fabric-form-config';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { BaseModalComponent } from '@shared/abstract/base-modal.component';
import { List } from '@shared/interfaces/list.interface';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { Stock } from '@features/stock-page/models/stock.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FabricFormComponent } from '../../forms/fabric/fabric-form.component';

@Component({
     selector: 'app-stock-fabric-modal',
     templateUrl: './stock-fabric-modal.component.html',
     styleUrls: ['./stock-fabric-modal.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, MatDialogModule, MatIconModule, MatButtonModule, FabricFormComponent],
})
export class StockFabricModalComponent extends BaseModalComponent {
     public override formData: Stock = this.data.stock;
     public contractors: Contractor[];
     public warehouses: Warehouse[];
     public fabrics: List[];
     public patterns: List[];

     public orderFabricFormConfig: OrderFabricFormConfig = {
          isNewOrder: false,
     };

     constructor(@Inject(MAT_DIALOG_DATA) public data: StockFabricModalData) {
          super();
          this.getData();
     }

     public onDelete(): void {
          this.dialogRef.close('delete');
     }

     private getData(): void {
          this.formData = this.data.stock;
          this.contractors = this.data.contractorsList;
          this.warehouses = this.data.warehousesList;
          this.patterns = this.data.patternsList;
          this.fabrics = this.data.fabricList;
     }
}
