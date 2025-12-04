import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { ReportsPageRoutingModule } from './reports-page-routing.module';
import { ReportsService } from './services/reports.service';
import { ReportsPageComponent } from './containers/reports-page/reports-page.component';
import { ReportsMenuComponent } from './components/reports-menu/reports-menu.component';
import { ReportsTableComponent } from './components/tables/reports-table/reports-table.component';
import { InventoryYearReportComponent } from './containers/inventory-year-report/inventory-year-report.component';
import { ProductionYearReportComponent } from './containers/production-year-report/production-year-report.component';
import { InventoryReportdPrintTableHelper } from './helpers/inventory-report-print-table.helper';
import { ProductionReportdPrintTableHelper } from './helpers/production-report-print-table.helper';
import { ReportdPrintTableHelper } from './helpers/reports-print-table.helper';

@NgModule({
     declarations: [
          ReportsPageComponent,
          ReportsMenuComponent,
          ReportsTableComponent,
          InventoryYearReportComponent,
          ProductionYearReportComponent,
     ],
     imports: [SharedModule, ReportsPageRoutingModule],
     providers: [
          ReportsService,
          InventoryReportdPrintTableHelper,
          ProductionReportdPrintTableHelper,
          ReportdPrintTableHelper,
     ],
})
export class ReportsPageModule {}
