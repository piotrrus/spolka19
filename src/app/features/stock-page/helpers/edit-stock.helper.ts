import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { StockModalsHelper } from './stock-modals.helper';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { List } from '@shared/interfaces/list.interface';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { Stock } from '../models/stock.interface';
import { mapShoes } from '../mappers/shoes-mapper';
import { Shoes, ShoesApi, ShoesModel } from '../models/shoes.interface';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { StockService } from '../services/stock.service';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { STOCK_MESSAGES } from '../enums/stock-messages.enum';
import { mapAssorts } from '../mappers/assorts-mapper';
import { Assort, AssortModel } from '../models/assort.interface';
import { AssortsApi } from '@features/assorts-page/models/assorts.interface';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import {
     StockFabric,
     StockFabricApi,
     StockFabricSaveModel,
} from '../models/stock-fabric.interface';
import { mapFabric } from '../mappers/fabric-mapper';

@Injectable()
export class StockEditHelper {
     private stockModalsHelper = inject(StockModalsHelper);

     constructor(
          private stockService: StockService,
          private notificationService: NotificationMessageService
     ) {}

     public openAssortModal(
          stock: Stock,
          contractorsList: Contractor[],
          assortsList: List[]
     ): Observable<AssortsApi> {
          return this.stockModalsHelper.openAssortModal(contractorsList, assortsList, stock).pipe(
               switchMap((data: Assort) => {
                    return data ? this.updateAssort(stock.id, data) : EMPTY;
               })
          );
     }

     public openFabricModal(
          stock: Stock,
          contractorsList: Contractor[],
          warehousesList: Warehouse[],
          patternsList: List[]
     ): Observable<StockFabricApi> {
          return this.stockModalsHelper
               .openFabricModal(contractorsList, warehousesList, patternsList, stock)
               .pipe(
                    switchMap((data: StockFabric) => {
                         return data ? this.updateFabric(stock.id, data) : EMPTY;
                    })
               );
     }

     public openShoesModal(stock: Stock, contractorsList: Contractor[]): Observable<ShoesApi> {
          return this.stockModalsHelper.openShoesModal(contractorsList, stock).pipe(
               switchMap((data: Shoes) => {
                    return data ? this.updateShoes(stock.id, data) : EMPTY;
               })
          );
     }

     private updateAssort(id: number, assort: Assort): Observable<AssortsApi> {
          const assortModel: AssortModel = mapAssorts(assort);

          return this.stockService.updateAssort(id, assortModel).pipe(
               tap((data) => {
                    this.saveResult(data, STOCK_MESSAGES.ASSORT_HAS_BEEN_UPDATED);
               })
          );
     }

     private updateShoes(id: number, shoes: Shoes): Observable<ShoesApi> {
          const shoesModel: ShoesModel = mapShoes(shoes);

          return this.stockService.updateShoes(id, shoesModel).pipe(
               tap((data) => {
                    this.saveResult(data, STOCK_MESSAGES.SHOES_HAS_BEEN_ORDERED);
               })
          );
     }

     private updateFabric(id: number, fabric: StockFabric): Observable<StockFabricApi> {
          const fabricModel: StockFabricSaveModel = mapFabric(fabric);

          return this.stockService.updateFabric(id, fabricModel).pipe(
               tap((data) => {
                    this.saveResult(data, STOCK_MESSAGES.FABRIC_HAS_BEEN_ADDED);
               })
          );
     }

     private saveResult(result: RestResponse, successMsg: string): void {
          if (result) {
               result.success
                    ? this.notificationService.success(successMsg)
                    : this.notificationService.error(COMMON_MESSAGES.SAVING_ERROR);
          }
     }
}
