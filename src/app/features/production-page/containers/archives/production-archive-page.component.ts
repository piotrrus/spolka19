import { Component, DestroyRef } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ProductionService } from '@features/production-page/services/production.service';
import { PRODUCTION_API_PATHS } from '@features/production-page/enums/production.paths.enum';
import { Production } from '@features/production-page/models/production.interface';
import { ProductionDescriptionModel } from '@features/production-page/models/production-description.model';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { ProductionStore } from '@features/production-page/production-store/production-store';
import { DescriptionPrintHelper } from '@features/production-page/helpers/description-print.helper';
import { ClientsMeasuresCrudFacade } from '@features/clients-page/client-store/client-measures-crud-facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ArchivesTableComponent } from '@features/production-page/components/tables/archives-table/archives-table.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NoDataMsgComponent } from 'src/app/modules/data-table/no-data-msg/no-data-msg.component';
import { ClientMeasuresService } from '@features/clients-page/services/client-measures-service';

@Component({
     selector: 'app-production-archive-page',
     templateUrl: './production-archive-page.component.html',
     styleUrls: ['./production-archive-page.component.scss'],

     imports: [CommonModule, MatButtonModule, ArchivesTableComponent, NoDataMsgComponent],
     providers: [
          DescriptionPrintHelper,

          ProductionService,
          ProductionStore,
          ClientsMeasuresCrudFacade,
          NotificationMessageService,
          ClientMeasuresService,
     ],
})
export class ProductionArchivePageComponent {
     public tableData$: Observable<Production[] | null> =
          this.productionService.getProductionArchives();

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly router: Router,
          private readonly notificationService: NotificationMessageService,
          private readonly productionService: ProductionService,
          private readonly descriptionPrintHelper: DescriptionPrintHelper,
          private readonly productionStore: ProductionStore,
          private readonly clientsMeasuresCrudFacade: ClientsMeasuresCrudFacade
     ) {}

     public editProductionDate($id: number): void {
          this.productionStore
               .openProductionDate($id)
               .pipe(
                    tap((data) => {
                         data
                              ? (this.tableData$ = this.productionService.getProductionArchives())
                              : null;
                    })
               )
               .subscribe();
     }

     public editProductionNr($id: number): void {
          // this.productionStore.openProductionNr($id);

          this.productionStore
               .openProductionNr($id)
               .pipe(
                    tap((data) => {
                         data
                              ? (this.tableData$ = this.productionService.getProductionArchives())
                              : null;
                    })
               )
               .subscribe();
     }

     public editProductionData($id: number): void {
          this.productionStore.openProductionForm($id);
     }

     // public openProductionForm(id: number): void {
     //      void this.router.navigate([`${PRODUCTION_API_PATHS.PRODUCTION_FORM}${id}`]);
     // }

     public navigateToProduction(): void {
          void this.router.navigate([PRODUCTION_API_PATHS.PRODUCTION]);
     }

     public navigateToProductionForm(id: number): void {
          void this.router.navigate([`${PRODUCTION_API_PATHS.PRODUCTION_FORM}${id}`]);
     }

     public printProductionDetails($id: number): void {
          this.productionService
               .getProductionPrintDetails($id)
               .pipe(
                    tap((data: ProductionDescriptionModel) => {
                         console.log(data);

                         data
                              ? this.descriptionPrintHelper.generatePdf(data)
                              : this.notificationService.error(
                                     'Wystąpił błąd podczas tworzenia raportu'
                                );
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public showClientMeasures($id: number): void {
          this.clientsMeasuresCrudFacade.openClientMeasures($id);
     }
}
