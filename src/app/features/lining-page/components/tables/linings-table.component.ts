import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { Lining } from '../../models/lining.interface';
import { LiningsDataTableColumns } from './lining-data-table-columns';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-lining-table',
     templateUrl: './lining-table.component.html',
     styleUrls: ['./lining-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule],
})
export class LiningTableComponent extends BaseTableComponent {
     @Input() override tableData: Lining[] | null;

     @Output() public openDetailsModal = new EventEmitter<Lining>();

     public dataTableColumns = LiningsDataTableColumns;

     public showDetails($event: Lining): void {
          this.openDetailsModal.emit($event);
     }
}
