import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { ApiService } from '@core/api/api.service';
import { ApiService } from '@core/api/api.service';
import { STOCK_API_PATHS } from '../enums/stock.paths.enum';
import {
     MostPopularClothe,
     MostPopularClothesApi,
     MostPopularFabric,
     MostPopularFabricApi,
} from '@features/stock-page/models/most-popular-fabric.interface';
import {
     LackOfArticles,
     LackOfArticlesApi,
} from '@features/stock-page/models/lack-articles.interface';
import {
     AssortsApi,
     MostPopularAssort,
     MostPopularAssortsApi,
} from '@features/assorts-page/models/assorts.interface';
import { Stock, StockApi, StockListApi } from '../models/stock.interface';
import { ShoesApi, ShoesModel } from '../models/shoes.interface';
import { StockFabricSaveModel, StockFabricApi } from '../models/stock-fabric.interface';
import { AssortModel } from '../models/assort.interface';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { List, ListApi } from '@shared/interfaces/list.interface';

@Injectable()
export class StockService extends ApiService {
     public getListData(option?: string, id?: number): Observable<Stock[]> {
          let url: string = STOCK_API_PATHS.LIST;
          if (option) {
               url = `${STOCK_API_PATHS.LIST}/${option}/${id}`;
          }
          return this.get<StockListApi>(url).pipe(map((assort) => assort.data));
     }

     public getAssortData(): Observable<Stock> {
          const url: string = STOCK_API_PATHS.LIST;
          return this.get<StockApi>(url).pipe(map((assort) => assort.data));
     }

     public getStockOptionList(): Observable<List[]> {
          return this.get<ListApi>(STOCK_API_PATHS.OPTIONS_LIST).pipe(map((data) => data.data));
     }

     public getMostPopularAssorts(): Observable<MostPopularAssort[]> {
          return this.get<MostPopularAssortsApi>(STOCK_API_PATHS.POPULAR_ASSORTS).pipe(
               map((assort) => assort.data)
          );
     }

     public getMostPopularFabrics(): Observable<MostPopularFabric[]> {
          return this.get<MostPopularFabricApi>(STOCK_API_PATHS.POPULAR_FABRICS).pipe(
               map((assort) => assort.data)
          );
     }

     public getMostPopularClothes(): Observable<MostPopularClothe[]> {
          return this.get<MostPopularClothesApi>(STOCK_API_PATHS.POPULAR_CLOTHES).pipe(
               map((clothes) => clothes.data)
          );
     }

     public getLackOfArticles(): Observable<LackOfArticles[]> {
          return this.get<LackOfArticlesApi>(STOCK_API_PATHS.LACK_IN_STOCK).pipe(
               map((art) => art.data)
          );
     }

     public getPatterns(): Observable<List[]> {
          return this.get<ListApi>(STOCK_API_PATHS.PATTERNS).pipe(map((pattern) => pattern.data));
     }

     public updateShoes(id: number, shoes: ShoesModel): Observable<RestResponse> {
          return this.post(`${STOCK_API_PATHS.SHOES_UPDATE}${id}`, shoes);
     }

     public updateFabric(id: number, fabric: StockFabricSaveModel): Observable<RestResponse> {
          return this.post(`${STOCK_API_PATHS.FABRIC_UPDATE}${id}`, fabric);
     }

     public updateAssort(id: number, assort: AssortModel): Observable<RestResponse> {
          return this.post(`${STOCK_API_PATHS.ASSORT_UPDATE}${id}`, assort);
     }

     public addFabric(fabric: StockFabricSaveModel): Observable<StockFabricApi> {
          return this.post<StockFabricApi>(STOCK_API_PATHS.FABRIC_ADD, fabric);
     }

     public orderShoes(shoes: ShoesModel): Observable<RestResponse> {
          return this.post<ShoesApi>(STOCK_API_PATHS.SHOES_ORDER, shoes);
     }

     public orderAssort(assort: AssortModel): Observable<RestResponse> {
          return this.post<AssortsApi>(STOCK_API_PATHS.ASSORT_ORDER, assort);
     }

     public orderFabric(fabric: StockFabricSaveModel): Observable<StockFabricApi> {
          return this.post<StockFabricApi>(STOCK_API_PATHS.FABRIC_ORDER, fabric);
     }

     public moveToStock(id: number, moveToStockDate: string): Observable<RestResponse> {
          return this.post(`${STOCK_API_PATHS.MOVE_TO_STOCK}${id}`, moveToStockDate);
     }
}
