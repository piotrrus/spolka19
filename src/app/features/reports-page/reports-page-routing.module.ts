import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsPageComponent } from './containers/reports-page/reports-page.component';
import { ProductionYearReportComponent } from './containers/production-year-report/production-year-report.component';
import { InventoryYearReportComponent } from './containers/inventory-year-report/inventory-year-report.component';

const routes: Routes = [
     { path: '', component: ReportsPageComponent },
     { path: 'report/:reportId', component: ReportsPageComponent },
     { path: 'year', component: ProductionYearReportComponent },
     { path: 'inventory', component: InventoryYearReportComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class ReportsPageRoutingModule {}
