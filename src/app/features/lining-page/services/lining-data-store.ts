import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, Observable, switchMap, takeUntil, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { Lining, LiningsApi } from '../models/lining.interface';
import { LiningModalHelper } from '../helpers/lining-modal.helper';
import { LiningService } from './lining.service';
import { LINING_MESSAGES } from '../enums/linings-messages.enum';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class LiningDataStore {
     private readonly destroyRef = inject(DestroyRef);
     private liningService = inject(LiningService);

     private notificationService = inject(NotificationMessageService);

     private liningModalHelper = inject(LiningModalHelper);

     public getList(): Observable<Lining[] | null> {
          return this.liningService.getList();
     }

     public openDetails(modalData: Lining): Observable<Lining[]> {
          const id = modalData.id;
          return this.liningModalHelper.openModal(modalData).pipe(
               switchMap((data: Lining) => {
                    return data ? this.update(id, data) : EMPTY;
               }),
               switchMap(() => {
                    return this.liningService.getList();
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public onAddNew(): Observable<Lining[]> {
          let lining: Lining;
          const openModal$: Observable<Lining> = this.liningModalHelper.openModal();

          return openModal$.pipe(
               // return this.liningModalHelper.openModal().pipe(
               tap((data: Lining) => {
                    lining = data;
               }),
               switchMap((data: Lining | boolean) => {
                    return data ? this.create(lining) : EMPTY;
               }),
               switchMap(() => {
                    return this.liningService.getList();
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     private create(lining: Lining): Observable<LiningsApi> {
          return this.liningService.create(lining).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, LINING_MESSAGES.CREATED);
               })
          );
     }

     private update(id: number, lining: Lining): Observable<LiningsApi> {
          return this.liningService.update(id, lining).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, LINING_MESSAGES.UPDATED);
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
