import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ClientOrders } from '@features/clients-page/models/client-orders.interface';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { ClientOrdersTableColumns } from './clients-orders-table-columns';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonModule } from '@angular/material/button';

@Component({
     selector: 'app-client-orders',
     templateUrl: './client-orders.component.html',
     styleUrls: ['./client-orders.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule, MatButtonModule],
})
export class ClientOrdersComponent extends BaseTableComponent {
     @Input() clientOrders: ClientOrders[] | null;
     @Output() public addClientOrder = new EventEmitter<boolean>();
     @Output() public navigateToOrderDetails = new EventEmitter<number>();

     public tableName = 'Lista zamówień klienta';
     public dataTableColumns = ClientOrdersTableColumns;

     // public columns = [
     //      { name: 'Nr.zam.', prop: 'invoiceNr', width: 250 },
     //      { name: 'Data zam.', prop: 'orderDate' },
     //      { name: 'Data wyk.', prop: 'deliveryDate' },
     //      { name: 'Status', prop: 'Status', sortable: false },
     // ];

     public showDetails(orderId: number): void {
          this.navigateToOrderDetails.emit(orderId);
     }

     public addOrder(): void {
          this.addClientOrder.emit(true);
     }
}
