import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductionPageComponent } from './containers/production/production-page.component';
import { ProductionReportComponent } from './components/tables/production-report-table/production-report.component';
import { ProductionArchivePageComponent } from './containers/archives/production-archive-page.component';
import { ProductionFormPageComponent } from './containers/production-form-page/production-form-page.component';

const routes: Routes = [
     { path: '', component: ProductionPageComponent },
     { path: 'archives', component: ProductionArchivePageComponent },
     { path: 'archives/:id', component: ProductionArchivePageComponent },
     { path: 'report/print/:id', component: ProductionReportComponent },
     { path: 'form/:id', component: ProductionFormPageComponent },
];
@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class ProductionPageRoutingModule {}
