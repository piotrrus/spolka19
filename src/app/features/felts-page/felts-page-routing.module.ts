import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeltsPageComponent } from './containers/felts-page.component';

const routes: Routes = [{ path: '', component: FeltsPageComponent }];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class FeltsPageRoutingModule {}
