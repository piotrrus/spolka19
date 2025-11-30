import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ColumnTable } from './ngx-table.interface';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule, Row } from '@swimlane/ngx-datatable';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';

@Component({
     // standalone: false,
     selector: 'app-ngx-data-table',
     templateUrl: './ngx-data-table.component.html',
     styleUrls: ['./ngx-data-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule, TableHeaderComponent],
})
export class NgxTableComponent {
     @Input() public tableTitle: string = '';
     // @Input() public tableData: unknown[] | null = [];
     @Input() public tableData: (Row | undefined)[] | null | undefined;

     @Input() public tableColumns: ColumnTable[] | null = [];

     @Output() public showDetailsAction = new EventEmitter<unknown>();
     @Output() public updateFilterAction = new EventEmitter<unknown>();
     @Output() public addElementAction = new EventEmitter<unknown>();

     public showDetails($event: unknown): void {
          this.showDetailsAction.emit($event);
     }
     public updateFilter($event: unknown): void {
          this.updateFilterAction.emit($event);
     }
     public addElement($event: unknown): void {
          this.addElementAction.emit($event);
     }
}
