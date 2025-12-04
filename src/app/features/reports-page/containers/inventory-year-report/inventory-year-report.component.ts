import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { InventoryReportData, ReportName } from '../../models/reports.interface';
import { Observable, combineLatest, tap } from 'rxjs';
import { REPORTS } from '@features/reports-page/enums/reports.enum';
import { InventoryYearReportColumns } from './inventory-year-report-columns';
import { InventoryReportdPrintTableHelper } from '@features/reports-page/helpers/inventory-report-print-table.helper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
@Component({
     selector: 'app-inventory-year-report',
     templateUrl: './inventory-year-report.component.html',
     styleUrls: ['./inventory-year-report.component.scss'],
     imports: [CommonModule, MatCardModule, NgxDatatableModule, MatCardModule],
     providers: [
          ReportsService,
          InventoryReportdPrintTableHelper,
          InventoryReportdPrintTableHelper,
     ],
})
export class InventoryYearReportComponent implements OnInit {
     private reportId = REPORTS.STOCK_YEAR_INVENTORY_REPORT;
     public dataLength = 0;
     public reportName = '';
     public tableData: InventoryReportData[] = [];

     public dataTableColumns = InventoryYearReportColumns;
     private inventoryReportdPrintTableHelper = inject(InventoryReportdPrintTableHelper);

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly reportsService: ReportsService
     ) {}

     public ngOnInit(): void {
          this.getReportData();
     }

     private getReportData(): void {
          combineLatest([this.getReportName(), this.getReport()])
               .pipe(
                    tap(([reportName, reportData]) => {
                         this.reportName = reportName[0].name;
                         this.tableData = reportData;
                         this.dataLength = reportData.length;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public printReport(): void {
          this.inventoryReportdPrintTableHelper.createReport(this.tableData);
     }

     private getReport(): Observable<InventoryReportData[]> {
          return this.reportsService.getInventoryReport(this.reportId);
     }

     private getReportName(): Observable<ReportName[]> {
          return this.reportsService.getReportName(this.reportId);
     }
}
