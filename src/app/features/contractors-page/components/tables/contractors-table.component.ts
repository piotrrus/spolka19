import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { Contractor } from '../../models/contractor.interface';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { ContractorsTableColumns } from './contractors-table-columns';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-contractors-table',
     templateUrl: './contractors-table.component.html',
     styleUrls: ['./contractors-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule],
})
export class ContractorsTableComponent extends BaseTableComponent {
     @Input() public override tableData: Contractor[] | null = [];
     @Output() public showDetailsModal = new EventEmitter<Contractor>();

     public dataTableColumns = ContractorsTableColumns;

     public showDetails($event: Contractor): void {
          this.showDetailsModal.emit($event);
     }
}
