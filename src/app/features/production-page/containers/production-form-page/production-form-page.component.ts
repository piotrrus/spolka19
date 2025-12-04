import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { PRODUCTION_MESSAGES } from '@features/production-page/enums/messages.enum';
import { AfterProduction } from '@features/production-page/models/production.interface';
import { ProductionService } from '@features/production-page/services/production.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductionEditFormComponent } from '@features/production-page/components/forms/production-edit-form/production-edit-form.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
     selector: 'app-production-form-page',
     templateUrl: './production-form-page.component.html',
     styleUrls: ['./production-form-page.component.scss'],

     imports: [CommonModule, MatButtonModule, ProductionEditFormComponent],
     providers: [ProductionService, NotificationMessageService],
})
export class ProductionFormPageComponent implements OnInit {
     private orderId: number;
     public afterProductionData: AfterProduction;
     public isFormValid = false;
     public title = 'Produkcja';

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly route: ActivatedRoute,
          private readonly notificationService: NotificationMessageService,
          private readonly productionService: ProductionService
     ) {}

     public ngOnInit(): void {
          this.getData();
     }

     private getData(): void {
          this.orderId = Number(this.route.snapshot.paramMap.get('id'));
          this.productionService
               .getProductionAfter(this.orderId)
               .pipe(
                    tap((data) => {
                         if (data) {
                              this.afterProductionData = data;
                              this.title = `Produkcja - nr. prod ${data.prod_order}  ${data.art_name}`;
                         }
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onFormChange($data: AfterProduction): void {
          this.afterProductionData.id_order = this.orderId;
          this.afterProductionData.nici = $data.nici;
          this.afterProductionData.obwod_pasa = $data.obwod_pasa;
          this.afterProductionData.rozmiar = $data.rozmiar;
          this.afterProductionData.prod_order = $data.prod_order;
     }

     public onFormValid($isValid: boolean): void {
          this.isFormValid = $isValid;
     }
     public onSave(): void {
          const id = this.afterProductionData.id_order;
          this.productionService
               .completeProductionData(id, this.afterProductionData)
               .pipe(
                    tap((data) => {
                         if (data) {
                              data.success
                                   ? this.notificationService.success(
                                          PRODUCTION_MESSAGES.PRODUCTION_DATA
                                     )
                                   : this.notificationService.error(COMMON_MESSAGES.SAVING_ERROR);
                         }
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }
}
