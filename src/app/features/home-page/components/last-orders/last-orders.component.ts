import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { LastOrder } from '@features/orders-page/models/orders.interface';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { LastOrdersDataTableColumns } from './last-orders-data-table-columns';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatChipsModule } from '@angular/material/chips';
@Component({
     selector: 'app-last-orders',
     templateUrl: './last-orders.component.html',
     styleUrls: ['./last-orders.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule, MatChipsModule],
})
export class LastOrdersComponent {
     @Input() public lastOrders: LastOrder[] | null = null;
     @Output() public clientRedirect = new EventEmitter<number>();
     @Output() public orderRedirect = new EventEmitter<number>();

     public noDataMessage = { emptyMessage: COMMON_MESSAGES.NO_DATA_MESSAGE };
     public dataTableColumns = LastOrdersDataTableColumns;

     public showClient($id: number): void {
          this.clientRedirect.emit($id);
     }
     public showOrder($id: number): void {
          this.orderRedirect.emit($id);
     }
}
