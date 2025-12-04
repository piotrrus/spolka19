import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractorsPageComponent } from './containers/contractors-page.component';

const routes: Routes = [
  { path: '', component: ContractorsPageComponent },
  { path: 'contractor/:id', component: ContractorsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorPageRoutingModule { }
