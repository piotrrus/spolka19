import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, Observable, of, switchMap, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { StockService } from './stock.service';
import { StockModalsHelper } from '../helpers/stock-modals.helper';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Assort, AssortModel } from '../models/assort.interface';
import { AssortList, AssortsApi } from '@features/assorts-page/models/assorts.interface';
import { Shoes, ShoesApi, ShoesModel } from '../models/shoes.interface';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { List } from '@shared/interfaces/list.interface';
import {
     StockFabric,
     StockFabricApi,
     StockFabricSaveModel,
} from '../models/stock-fabric.interface';
import { mapAssorts } from '../mappers/assorts-mapper';
import { STOCK_MESSAGES } from '../enums/stock-messages.enum';
import { mapShoes } from '../mappers/shoes-mapper';
import { mapFabric } from '../mappers/fabric-mapper';
import { Stock } from '../models/stock.interface';
import { DateHandler } from '@shared/utils/date/date.handler';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class StockCrudFacade {
     public tableData$: Observable<Stock[] | null> = of(null);

     private readonly confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();
     private readonly stockService = inject(StockService);
     private readonly notificationService = inject(NotificationMessageService);
     private readonly stockModalsHelper = inject(StockModalsHelper);
     private readonly destroyRef = inject(DestroyRef);

     public getStockData(option: string, id: number): Observable<Stock[] | null> {
          return this.stockService.getListData(option, Number(id));
     }

     public openShoesModal(contractorsList: Contractor[], stock?: Stock): Observable<ShoesApi> {
          return this.stockModalsHelper.openShoesModal(contractorsList, stock).pipe(
               switchMap((response: Shoes) => {
                    return response ? this.orderShoes(response) : EMPTY;
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public openAssortsModal(
          contractorsList: Contractor[],
          assortsList: AssortList[]
     ): Observable<AssortsApi> {
          return this.stockModalsHelper.openAssortModal(contractorsList, assortsList).pipe(
               switchMap((response: Assort) => {
                    return response ? this.orderAssort(response) : EMPTY;
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public openAddFabricModal(
          contractorsList: Contractor[],
          warehousesList: Warehouse[],
          patternsList: List[],
          stock?: Stock
     ): Observable<StockFabricApi> {
          return this.stockModalsHelper
               .openFabricModal(contractorsList, warehousesList, patternsList, stock)
               .pipe(
                    switchMap((response: StockFabric) => {
                         return response ? this.addFabric(response) : EMPTY;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               );
     }

     public openOrderFabricModal(
          plnToEuroActualValue: string,
          contractorsList: Contractor[],
          patternsList: List[]
     ): Observable<StockFabricApi> {
          return this.stockModalsHelper
               .openOrderFabricModal(plnToEuroActualValue, contractorsList, patternsList)
               .pipe(
                    switchMap((response: StockFabric) => {
                         return response ? this.orderFabric(response) : EMPTY;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               );
     }

     public confirmMoveToStock($id: number): Observable<StockFabricApi> {
          const moveToStockTitle = 'Potwierdź przekazanie';
          const moveToStockMsg = 'Czy na pewno chcesz przenieść artykuł do magazynu?';

          return this.confirmDialogsHelper
               .confirmDialog(moveToStockTitle, moveToStockMsg)
               .pipe(switchMap((data: boolean) => (data ? this.moveToStock($id) : EMPTY)));
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

     private moveToStock(id: number): Observable<StockFabricApi> {
          const moveToStockDate = DateHandler.currentDate();
          return this.stockService.moveToStock(id, moveToStockDate).pipe(
               tap((data) => {
                    this.afterSaveNotification(data, STOCK_MESSAGES.MOVED_TO_STOCK);
               })
          );
     }

     private afterSaveNotification(result: RestResponse, successMsg: string): void {
          if (result) {
               result.success
                    ? (this.notificationService.success(successMsg), this.refreshData(result.data))
                    : this.notificationService.error(COMMON_MESSAGES.SAVING_ERROR);
          }
     }

     private refreshData(data: Stock[]): void {
          this.tableData$ = of(data);
     }
}
