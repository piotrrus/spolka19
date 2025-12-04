import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsPageComponent } from '../containers/clients-list-page/clients-page.component';

const routes: Routes = [
     { path: '', component: ClientsPageComponent },
     { path: 'new', component: ClientsPageComponent },
     // { path: 'clients/clients', component: ClientsPageComponent },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class ClientsPageRoutingModule {}
