import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { WarehousesTableColumns } from './warehouses-table-columns';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-warehouses-table',
     templateUrl: './warehouses-table.component.html',
     styleUrls: ['./warehouses-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule],
})
export class WarehousesTableComponent extends BaseTableComponent {
     // @Input() public tableTitle = '';
     @Input() public override tableData: Warehouse[] | null = [];
     @Output() public openDetailsModal = new EventEmitter<Warehouse>();

     public dataTableColumns = WarehousesTableColumns;

     public showDetails($event: Warehouse): void {
          this.openDetailsModal.emit($event);
     }
}
