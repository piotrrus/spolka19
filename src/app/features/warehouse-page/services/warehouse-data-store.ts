import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { Warehouse, WarehouseApi } from '../models/warehouse.interface';
import { WarehouseService } from './warehouse-service';
import { WarehouseModalHelper } from '../helpers/warehouse-modal.helper';
import { WAREHOUSES_MESSAGES } from '../enums/warehouses-messages.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class WarehouseDataStore {
     private warehouseService = inject(WarehouseService);

     private notificationService = inject(NotificationMessageService);

     private warehouseModalHelper = inject(WarehouseModalHelper);

     private readonly destroyRef = inject(DestroyRef);

     public getList(): Observable<Warehouse[] | null> {
          return this.warehouseService.getList();
     }

     public openDetails(modalData: Warehouse): Observable<Warehouse[]> {
          const id = modalData.id;
          return this.warehouseModalHelper.openModal(modalData).pipe(
               switchMap((data: Warehouse) => {
                    return data ? this.update(id, data) : EMPTY;
               }),
               switchMap(() => {
                    return this.warehouseService.getList();
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public onAddNew(): Observable<Warehouse[]> {
          let warehouse: Warehouse;
          return this.warehouseModalHelper.openModal().pipe(
               tap((data: Warehouse) => {
                    warehouse = data;
               }),
               switchMap((data: Warehouse | boolean) => {
                    return data ? this.create(warehouse) : EMPTY;
               }),
               switchMap(() => {
                    return this.warehouseService.getList();
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     private create(warehouse: Warehouse): Observable<WarehouseApi> {
          return this.warehouseService.create(warehouse).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, WAREHOUSES_MESSAGES.CREATED);
               })
          );
     }

     private update(id: number, warehouse: Warehouse): Observable<WarehouseApi> {
          return this.warehouseService.update(id, warehouse).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, WAREHOUSES_MESSAGES.UPDATED);
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
