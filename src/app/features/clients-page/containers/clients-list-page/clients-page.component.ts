import { Component, DestroyRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { TITLES } from '@features/clients-page/enums/titles.enum';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import { MYORDER_API_PATHS } from '@features/myorder-page/enums/myorder.paths.enum';
import { Client } from '@features/clients-page/models/client.interface';
import { ClientsCrudFacade } from '@features/clients-page/client-store/client-crud-facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { ClientsService } from '@features/clients-page/services/clients-service';
import { ClientsPageRoutingModule } from '@features/clients-page/modules/clients-page-routing.module';
import { ClientsTableComponent } from '@features/clients-page/components/tables/clients-table/clients-table.component';

@Component({
     selector: 'app-clients-page',
     templateUrl: './clients-page.component.html',
     styleUrls: ['./clients-page.component.scss'],
     imports: [TableHeaderComponent, ClientsTableComponent, ClientsPageRoutingModule],
     providers: [ClientsCrudFacade, ClientsService],
})
export class ClientsPageComponent implements OnInit {
     public tableData: Client[] = [];
     public tempTable: Client[] = [];
     public tableTitle = TITLES.TABLE_TITLE;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly router: Router,
          private readonly clientsCrudFacade: ClientsCrudFacade
     ) {}

     public ngOnInit(): void {
          this.getClientList();
     }

     public getClientList(): void {
          this.clientsCrudFacade
               .getList()
               .pipe(
                    tap((data: Client[]) => {
                         console.log(data);
                         this.tableData = data;
                         this.tempTable = data;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public deleteClient(id: number): void {
          this.clientsCrudFacade
               .deleteClient(id)
               .pipe(
                    tap((response) => {
                         response.success ? this.getClientList() : null;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public addNew(): void {
          this.clientsCrudFacade
               .addClient()
               .pipe(
                    tap((response) => {
                         response.success ? this.getClientList() : null;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public updateFilter($event: string): void {
          const event: string = $event.toLocaleLowerCase();
          this.tempTable = this.tableData.filter((obj: Client) => {
               return (
                    obj.client_nr.toLowerCase().includes(event) ||
                    obj.firstname.toLowerCase().includes(event) ||
                    obj.lastname.toLowerCase().includes(event) ||
                    obj.email?.toLocaleLowerCase().includes(event) ||
                    obj.phone?.includes(event)
               );
          });
     }

     public navigateToClientDetails(id: number): void {
          this.router.navigate([`${CLIENTS_API_PATHS.DETAILS}${id}`]);
     }

     public navigateToAddOrder($id: number): void {
          this.router.navigate([`${MYORDER_API_PATHS.ADD_CLOTHES}${$id}`]);
     }

     public navigateToAddNewOrder($clientId: number): void {
          this.router.navigate([`${MYORDER_API_PATHS.CLIENT_NEW}${$clientId}`]);
     }
}
