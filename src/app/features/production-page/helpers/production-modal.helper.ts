import { Injectable } from '@angular/core';
import { DialogSize } from '@shared/components/confirm-dialog/dialog-size.enum';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TITLES } from '../enums/titles.enum';
import { AfterProduction } from '../models/production.interface';
import { ProductionNrModalComponent } from '../components/modals/production-nr/production-nr-modal.component';
import { ProductionDataModalComponent } from '../components/modals/production-data/production-data-modal.component';
import { ProductionDateModalComponent } from '../components/modals/production-date/production-date-modal.component';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';
@Injectable()
export class ProductionModalHelper extends BaseModalHelper {
     public openProductionNrModal(prodOrder?: string): Observable<string> {
          const dialogRef = this.dialog.open(ProductionNrModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: prodOrder,
                    title: TITLES.PRODUCTION_NR_MODAL_TITLE,
               },
          });
          return dialogRef.afterClosed().pipe(tap((data: string) => data));
     }

     public openProductionDataModal(productionData?: AfterProduction): Observable<AfterProduction> {
          const dialogRef = this.dialog.open(ProductionDataModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: productionData,
                    title: TITLES.PRODUCTION_DATA_AFTER,
               },
          });
          return dialogRef.afterClosed().pipe(tap((data: AfterProduction) => data));
     }
     public openProductionDateModal(data_przek_do_prod?: string): Observable<string> {
          const dialogRef = this.dialog.open(ProductionDateModalComponent, {
               width: DialogSize.MEDIUM_SMALL,
               data: {
                    data: data_przek_do_prod,
                    title: TITLES.PRODUCTION_DATE,
               },
          });
          return dialogRef.afterClosed().pipe(tap((data: string) => data));
     }
}
