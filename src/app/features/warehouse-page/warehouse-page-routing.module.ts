import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehousePageComponent } from './containers/warehouse-page.component';

const routes: Routes = [
  { path: '', component: WarehousePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousePageRoutingModule { }
