import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiningPageComponent } from './containers/lining-page.component';

const routes: Routes = [
  { path: '', component: LiningPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiningPageRoutingModule { }
