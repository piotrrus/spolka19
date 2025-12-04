import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { Warehouse, WarehouseApi } from '../models/warehouse.interface';
import { WAREHOUSES_API_PATHS } from '../enums/warehouses.paths.enum';

@Injectable()
export class WarehouseService extends ApiService {
     public getList(): Observable<Warehouse[]> {
          return this.get<WarehouseApi>(WAREHOUSES_API_PATHS.LIST).pipe(map((warehouse) => warehouse.data));
     }

     public getDetails(id: number): Observable<Warehouse[]> {
          return this.get<WarehouseApi>(`${WAREHOUSES_API_PATHS.DETAILS}${id}`).pipe(
               map((warehouse) => warehouse.data)
          );
     }

     public create(warehouse: Warehouse): Observable<WarehouseApi> {
          return this.post<WarehouseApi>(`${WAREHOUSES_API_PATHS.CREATE}`, warehouse);
     }

     public update(id: number, warehouse: Warehouse): Observable<WarehouseApi> {
          return this.post<WarehouseApi>(`${WAREHOUSES_API_PATHS.UPDATE}${id}`, warehouse);
     }
}
