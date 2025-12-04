import { Observable, of, switchMap, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { DestroyRef, Injectable } from '@angular/core';
import { StockService } from '../services/stock.service';
import { StockModalsHelper } from './stock-modals.helper';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Shoes, ShoesApi, ShoesModel } from '../models/shoes.interface';
import { mapShoes } from '../mappers/shoes-mapper';
import { AssortList, AssortsApi } from '@features/assorts-page/models/assorts.interface';
import { Assort, AssortModel } from '../models/assort.interface';
import {
     StockFabricSaveModel,
     StockFabric,
     StockFabricApi,
} from '../models/stock-fabric.interface';
import { mapFabric } from '../mappers/fabric-mapper';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { STOCK_MESSAGES } from '../enums/stock-messages.enum';
import { List } from '@shared/interfaces/list.interface';
import { mapAssorts } from '../mappers/assorts-mapper';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { BaseModalHelper } from '@shared/abstract/base-modal.helper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class OrdersStockModalHelper extends BaseModalHelper {
     private dialogsHelper: StockModalsHelper = new StockModalsHelper();

     constructor(
          private readonly destroyRef: DestroyRef,
          private stockService: StockService,
          private notificationService: NotificationMessageService
     ) {
          super();
     }

     public openShoesModal(contractorsList: Contractor[]): void {
          this.dialogsHelper
               .openShoesModal(contractorsList)
               .pipe(
                    switchMap((response: Shoes) => {
                         return response ? this.orderShoes(response) : of(response);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public openAssortsModal(contractorsList: Contractor[], assortsList: AssortList[]): void {
          this.dialogsHelper
               .openAssortModal(contractorsList, assortsList)
               .pipe(
                    switchMap((response: Assort) => {
                         return response ? this.orderAssort(response) : of(response);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public openAddFabricModal(
          contractorsList: Contractor[],
          warehousesList: Warehouse[],
          patternsList: List[]
     ): void {
          this.dialogsHelper
               .openFabricModal(contractorsList, warehousesList, patternsList)
               .pipe(
                    switchMap((response: StockFabric) => {
                         return response ? this.addFabric(response) : of(response);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public openOrderFabricModal(
          plnToEuroActualValue: string,
          contractorsList: Contractor[],
          patternsList: List[]
     ): void {
          this.dialogsHelper
               .openOrderFabricModal(plnToEuroActualValue, contractorsList, patternsList)
               .pipe(
                    switchMap((response: StockFabric) => {
                         return response ? this.orderFabric(response) : of(response);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     private orderAssort(assort: Assort): Observable<AssortsApi> {
          const assortModel: AssortModel = mapAssorts(assort);

          return this.stockService.orderAssort(assortModel).pipe(
               tap((data) => {
                    this.afterSaveNotification(data, STOCK_MESSAGES.ASSORT_HAS_BEEN_ORDERED);
               })
          );
     }

     private orderShoes(shoes: Shoes): Observable<ShoesApi> {
          const shoesModel: ShoesModel = mapShoes(shoes);

          return this.stockService.orderShoes(shoesModel).pipe(
               tap((data) => {
                    this.afterSaveNotification(data, STOCK_MESSAGES.SHOES_HAS_BEEN_ORDERED);
               })
          );
     }

     private addFabric(fabric: StockFabric): Observable<StockFabricApi> {
          const fabricModel: StockFabricSaveModel = mapFabric(fabric);

          return this.stockService.addFabric(fabricModel).pipe(
               tap((data) => {
                    this.afterSaveNotification(data, STOCK_MESSAGES.FABRIC_HAS_BEEN_ADDED);
               })
          );
     }

     private orderFabric(fabric: StockFabric): Observable<StockFabricApi> {
          const fabricModel: StockFabricSaveModel = mapFabric(fabric);

          return this.stockService.orderFabric(fabricModel).pipe(
               tap((data) => {
                    this.afterSaveNotification(data, STOCK_MESSAGES.FABRIC_HAS_BEEN_ORDERED);
               })
          );
     }

     private afterSaveNotification(result: RestResponse, successMsg: string): void {
          if (result) {
               result.success
                    ? this.notificationService.success(successMsg)
                    : this.notificationService.error(COMMON_MESSAGES.SAVING_ERROR);
          }
     }
}
