import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { Felt } from '../../models/felt.interface';
import { FeltsDataTableColumns } from './felts-data-table-columns';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-felts-table',
     templateUrl: './felts-table.component.html',
     styleUrls: ['./felts-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule],
})
export class FeltsTableComponent extends BaseTableComponent {
     @Input() public override tableData: any;
     @Output() public showDetailsModal = new EventEmitter<Felt>();

     public dataTableColumns = FeltsDataTableColumns;

     public showDetails($event: Felt): void {
          this.showDetailsModal.emit($event);
     }
}
