import { Component, DestroyRef } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Production, ProductionByWeeks } from '../../models/production.interface';
import { ProductionService } from '../../services/production.service';
import { TITLES } from '@features/production-page/enums/titles.enum';
import { PRODUCTION_API_PATHS } from '@features/production-page/enums/production.paths.enum';
import { weekFormat, weekFullFormat } from '@shared/helpers/date-formatting.helper';
import { ProductionDescriptionModel } from '@features/production-page/models/production-description.model';
import { DescriptionPrintHelper } from '@features/production-page/helpers/description-print.helper';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { ProductionStore } from '@features/production-page/production-store/production-store';
import { ProductionPrintHelper } from '@features/production-page/helpers/production-print.helper';
import { ClientsMeasuresCrudFacade } from '@features/clients-page/client-store/client-measures-crud-facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProductionTableComponent } from '@features/production-page/components/tables/production-table/production-table.component';
import { ProductionPageRoutingModule } from '@features/production-page/production-page-routing.module';
import { NoDataMsgComponent } from 'src/app/modules/data-table/no-data-msg/no-data-msg.component';
@Component({
     selector: 'app-production-page',
     templateUrl: './production-page.component.html',
     styleUrls: ['./production-page.component.scss'],
     imports: [
          CommonModule,
          ProductionPageRoutingModule,
          MatButtonModule,
          ProductionTableComponent,
          NoDataMsgComponent,
     ],
     providers: [
          DescriptionPrintHelper,
          ProductionPrintHelper,
          ProductionService,
          ProductionStore,
          ClientsMeasuresCrudFacade,
          NotificationMessageService,
     ],
})
export class ProductionPageComponent {
     public tableName: string = TITLES.TABLE_TITLE;
     public weekTitles: string[] = [];
     public lastWeeks: string[] = [];

     public actualWeek: Production[];
     public weekBefore: Production[];
     public twoWeeksBefore: Production[];
     public threeWeeksBefore: Production[];
     public fourWeeksBefore: Production[];

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly router: Router,
          private readonly notificationService: NotificationMessageService,
          private readonly productionPrintHelper: ProductionPrintHelper,
          private readonly descriptionPrintHelper: DescriptionPrintHelper,
          private readonly productionService: ProductionService,
          private readonly productionStore: ProductionStore,
          private readonly clientsMeasuresCrudFacade: ClientsMeasuresCrudFacade
     ) {
          this.getProductionData();
          this.setWeekTitles();
     }

     private getProductionData(): void {
          this.productionStore
               .getProductionData()
               .pipe(
                    tap((data: ProductionByWeeks) => {
                         this.actualWeek = data.actualWeek;
                         this.weekBefore = data.weekBefore;
                         this.twoWeeksBefore = data.twoWeeksBefore;
                         this.threeWeeksBefore = data.threeWeeksBefore;
                         this.fourWeeksBefore = data.fourWeeksBefore;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     private setWeekTitles(): void {
          for (let i = 0; i < 5; i++) {
               this.weekTitles[i] = this.weekFullFormat(i);
               this.lastWeeks[i] = this.weekFormat(i);
          }
     }

     private weekFormat(week: number): string {
          week = week * 7;
          return weekFormat(week);
     }

     private weekFullFormat(week: number): string {
          week = week * 7;
          return weekFullFormat(week);
     }

     public navigateToProductionForm(id: number): void {
          void this.router.navigate([`${PRODUCTION_API_PATHS.PRODUCTION_FORM}${id}`]);
     }

     public navigateToArchives(): void {
          void this.router.navigate([PRODUCTION_API_PATHS.ARCHIVES]);
     }

     public openProductionDate($id: number): void {
          this.productionStore.openProductionDate($id);
     }

     public openProductionNr($id: number): void {
          this.productionStore
               .openProductionNr($id)
               .pipe(
                    tap(() => {
                         this.getProductionData();
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public openProductionFormModal($id: number): void {
          this.productionStore.openProductionForm($id);
     }

     public printWeekReport($weekNr: number): void {
          const week = this.lastWeeks[$weekNr];

          this.productionService
               .getProductionPrintData(week)
               .pipe(
                    tap((data) => {
                         data
                              ? this.productionPrintHelper.weekPdf(data, week)
                              : this.notificationService.error(
                                     'Wystąpił błąd podczas tworzenia raportu'
                                );
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public printProductionDescription($id: number): void {
          this.productionService
               .getProductionPrintDetails($id)
               .pipe(
                    tap((data: ProductionDescriptionModel) => {
                         this.descriptionPrintHelper.generatePdf(data);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public openClientMeasures($id: number): void {
          this.clientsMeasuresCrudFacade.openClientMeasures($id);
     }
}
