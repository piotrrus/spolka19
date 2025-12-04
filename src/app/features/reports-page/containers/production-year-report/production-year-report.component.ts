import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { ProductionReportData, ReportName } from '../../models/reports.interface';
import { Observable, combineLatest, tap } from 'rxjs';
import { REPORTS } from '@features/reports-page/enums/reports.enum';
import { ProductionYearReportDataTableColumns } from './production-year-table-columns';
import { ProductionReportdPrintTableHelper } from '@features/reports-page/helpers/production-report-print-table.helper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@Component({
     selector: 'app-production-year-report',
     templateUrl: './production-year-report.component.html',
     styleUrls: ['./production-year-report.component.scss'],
     imports: [CommonModule, MatCardModule, NgxDatatableModule, MatCardModule],
     providers: [ReportsService, ProductionReportdPrintTableHelper],
})
export class ProductionYearReportComponent implements OnInit {
     private readonly reportId = REPORTS.PRODUCTION_YEAR_REPORT;
     public dataLength = 0;
     public reportName = '';
     public tableData: ProductionReportData[] = [];

     public dataTableColumns = ProductionYearReportDataTableColumns;
     private productionReportdPrintTableHelper = inject(ProductionReportdPrintTableHelper);

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
          this.productionReportdPrintTableHelper.createReport(this.tableData);
     }

     private getReport(): Observable<ProductionReportData[]> {
          return this.reportsService.getProductionReport(this.reportId);
     }

     private getReportName(): Observable<ReportName[]> {
          return this.reportsService.getReportName(this.reportId);
     }
}
