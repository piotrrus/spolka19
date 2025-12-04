import { Routes } from '@angular/router';
import { ReportsPageComponent } from '../containers/reports-page/reports-page.component';
import { ProductionYearReportComponent } from '../containers/production-year-report/production-year-report.component';
import { InventoryYearReportComponent } from '../containers/inventory-year-report/inventory-year-report.component';

export const REPORTS_ROUTES: Routes = [
     { path: '', component: ReportsPageComponent },
     { path: ':reportId', component: ReportsPageComponent },
     { path: 'year', component: ProductionYearReportComponent },
     { path: 'inventory', component: InventoryYearReportComponent },
];
