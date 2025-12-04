import { Component, Input } from '@angular/core';
import { ReportsDataTableColumns } from './reports-data-table-columns';
import { ReportData } from '@features/reports-page/models/reports.interface';

@Component({
     selector: 'app-reports-table',
     templateUrl: './reports-table.component.html',
     styleUrls: ['./reports-table.component.scss'],
})
export class ReportsTableComponent {
     @Input() public tableData: ReportData[] = [];

     public dataTableColumns = ReportsDataTableColumns;
}
