import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDetailsPageComponent } from '../containers/client-details-page/client-details-page.component';

const routes: Routes = [
     { path: '', component: ClientDetailsPageComponent },
     { path: 'details/:id', component: ClientDetailsPageComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class ClientDetailsPageRoutingModule {}
