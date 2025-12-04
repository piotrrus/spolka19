import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ReportsService } from '../../services/reports.service';
import { ReportData, ReportName } from '../../models/reports.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, switchMap, tap } from 'rxjs';
import { ReportdPrintTableHelper } from '@features/reports-page/helpers/reports-print-table.helper';
import { ReportDataTableColumns } from './report-table-columns';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { InventoryReportdPrintTableHelper } from '@features/reports-page/helpers/inventory-report-print-table.helper';
import { ProductionReportdPrintTableHelper } from '@features/reports-page/helpers/production-report-print-table.helper';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@Component({
     selector: 'app-reports-page',
     templateUrl: './reports-page.component.html',
     styleUrls: ['./reports-page.component.scss'],
     imports: [CommonModule, NgxDatatableModule, MatCardModule],
     providers: [
          ReportsService,
          InventoryReportdPrintTableHelper,
          ProductionReportdPrintTableHelper,
          ReportdPrintTableHelper,
     ],
})
export class ReportsPageComponent implements OnInit {
     public dataLength = 0;
     public reportData: ReportData[] = [];
     public reportName = '';
     public reportId = 1;
     private reportdPrintTableHelper = inject(ReportdPrintTableHelper);
     public dataTableColumns = ReportDataTableColumns;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly route: ActivatedRoute,
          private readonly reportsService: ReportsService
     ) {}

     public ngOnInit(): void {
          this.getReportData();
     }

     private getReportData(): void {
          this.route.params
               .pipe(
                    tap((param) => {
                         this.reportId = Number(param['reportId']);
                    }),
                    switchMap(() => {
                         return combineLatest([this.getReportName(), this.getReport()]).pipe(
                              tap(([reportName, reportData]) => {
                                   this.reportName = reportName[0].name;
                                   this.reportData = reportData;
                                   this.dataLength = reportData.length;
                              }),
                              takeUntilDestroyed(this.destroyRef)
                         );
                    })
               )
               .subscribe();
     }

     private getReport(): Observable<ReportData[]> {
          return this.reportsService.getReport(this.reportId);
     }

     private getReportName(): Observable<ReportName[]> {
          return this.reportsService.getReportName(this.reportId);
     }

     public printReport(): void {
          this.reportdPrintTableHelper.createReport(this.reportData, this.reportName);
     }
}
