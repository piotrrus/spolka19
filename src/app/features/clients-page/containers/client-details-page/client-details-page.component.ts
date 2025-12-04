import { Component, DestroyRef, OnInit } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientMeasures } from '@features/clients-page/models/client-measures.interface';
import {
     ClientEvents,
     ClientLastEvents,
} from '@features/clients-page/models/clients-events.interface';
import { ClientEventsService } from '@features/clients-page/services/client-events-service';
import { ClientOrdersService } from '@features/clients-page/services/client-orders-service';
import { Client } from '@features/clients-page/models/client.interface';
import { ClientOrders } from '@features/clients-page/models/client-orders.interface';
import { MYORDER_API_PATHS } from '@features/myorder-page/enums/myorder.paths.enum';
import { ClientsCrudFacade } from '@features/clients-page/client-store/client-crud-facade';
import { ClientsEventsCrudFacade } from '@features/clients-page/client-store/client-events-crud-facade';
import { ClientsMeasuresCrudFacade } from '@features/clients-page/client-store/client-measures-crud-facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { ClientOrdersComponent } from '@features/clients-page/components/tables/client-orders-table/client-orders.component';
import { ClientFormComponent } from '@features/clients-page/components/forms/client-form/client-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ClientMeasuresFormComponent } from '@features/clients-page/components/forms/client-measures-form/client-measures-form.component';
import { ClientEventsFormComponent } from '@features/clients-page/components/forms/client-events-form/client-events-form.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClientMainDataComponent } from '@features/clients-page/components/client-main-data/client-main-data.component';
import { ClientsService } from '@features/clients-page/services/clients-service';
import { ClientMeasuresService } from '@features/clients-page/services/client-measures-service';
import { MatExpansionModule } from '@angular/material/expansion';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';

@Component({
     selector: 'app-client-page',
     templateUrl: './client-details-page.component.html',
     styleUrls: ['./client-details-page.component.scss'],
     providers: [
          ClientsService,
          ClientsCrudFacade,
          ClientOrdersService,
          ClientEventsService,
          ClientsEventsCrudFacade,
          ClientsMeasuresCrudFacade,
          ClientMeasuresService,
     ],
     imports: [
          CommonModule,
          MatIconModule,
          MatButtonModule,
          CdkAccordionModule,
          // MatExpansionModule,
          // MatAccordion,
          ClientOrdersComponent,
          ClientFormComponent,
          ClientMeasuresFormComponent,
          ClientEventsFormComponent,
          ClientMainDataComponent,
          MatExpansionModule,
     ],
})
export class ClientDetailsPageComponent implements OnInit {
     private clientId: number;
     public clientFormMeasures: ClientMeasures;
     public clientMeasures: ClientMeasures;
     public clientOrders: ClientOrders[] = [];
     public clientData: Client | null = null;
     public clientEvents: ClientEvents;
     public clientMeasures$?: Observable<ClientMeasures> | null = null;
     public clientOrders$?: Observable<ClientOrders[]>;

     public clientLastEvent: ClientLastEvents;

     public isClientFormValid = false;
     public isMeasuresFormValid = false;
     public isEventsFormValid = false;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly route: ActivatedRoute,
          private readonly router: Router,
          private readonly clientOrdersService: ClientOrdersService,
          private readonly clientEventsService: ClientEventsService,
          private readonly clientsCrudFacade: ClientsCrudFacade,
          private readonly clientsEventsCrudFacade: ClientsEventsCrudFacade,
          private readonly clientsMeasuresCrudFacade: ClientsMeasuresCrudFacade
     ) {}

     public ngOnInit(): void {
          this.getClientData();
     }

     private getClientData(): void {
          this.clientId = Number(this.route.snapshot.paramMap.get('id'));
          this.clientOrders$ = this.clientOrdersService.getClientOrders(this.clientId);

          this.clientsMeasuresCrudFacade
               .getClientMeasures(this.clientId)
               .pipe(
                    tap((data: ClientMeasures) => {
                         filter(Boolean), (this.clientMeasures = data);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();

          this.clientEventsService
               .getClientLastEvents(this.clientId)
               .pipe(
                    tap((data: ClientLastEvents) => {
                         filter(Boolean), (this.clientLastEvent = data);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();

          this.clientsCrudFacade
               .getClientData(this.clientId)
               .pipe(
                    tap((data: Client) => {
                         filter(Boolean), (this.clientData = data);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onClientFormChange($client: Client): void {
          this.clientData = $client;
     }

     public onMeasureFormChange($event: ClientMeasures): void {
          this.clientFormMeasures = $event;
     }

     public onEventFormChange($event: ClientEvents): void {
          this.clientEvents = $event;
     }

     public onClientFormValid($isValid: boolean): void {
          this.isClientFormValid = $isValid;
     }

     public onMeasureFormValid($isValid: boolean): void {
          this.isMeasuresFormValid = $isValid;
     }

     public onEventFormValid($isValid: boolean): void {
          this.isEventsFormValid = $isValid;
     }

     public onSaveClient(): void {
          if (this.clientData) {
               this.clientsCrudFacade.updateClient(this.clientId, this.clientData);
          }
     }

     public saveEvents(): void {
          this.clientsEventsCrudFacade.saveEvents(this.clientLastEvent.id, this.clientEvents);
     }

     public onSaveMeasures(): void {
          if (this.clientMeasures) {
               this.clientsMeasuresCrudFacade.updateMeasures(
                    this.clientId,
                    this.clientFormMeasures
               );
          } else {
               this.clientFormMeasures.id_client = this.clientId;
               this.clientsMeasuresCrudFacade.createMeasures(this.clientFormMeasures);
          }
     }

     public addClientOrder(): void {
          this.router.navigate([`${MYORDER_API_PATHS.CLIENT_NEW}${this.clientId}`]);
     }

     public deleteClient(): void {
          console.log('delete client');
          this.clientsCrudFacade
               .deleteClient(this.clientId)
               .pipe(
                    tap((data: any) => {
                         data ? this.router.navigate([`${CLIENTS_API_PATHS.LIST}`]) : null;
                    })
               )
               .subscribe();
     }
     public navigateToOrderDetails(orderId: number): void {
          this.router.navigate([`${MYORDER_API_PATHS.DETAILS}${orderId}`]);
     }
}
