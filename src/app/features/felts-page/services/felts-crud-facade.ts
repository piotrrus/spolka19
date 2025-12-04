import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { BaseComponent } from '@shared/abstract/base.component';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { FELTS_MESSAGES } from '../enums/felts-messages.enum';
import { Felt, FeltApi } from '../models/felt.interface';
import { FeltModalHelper } from '../helpers/felt-modal.helper';
import { FeltsService } from './felts-services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class FeltsCrudFacade {
     private readonly feltsService = inject(FeltsService);
     private readonly notificationService = inject(NotificationMessageService);
     private readonly feltModalHelper = inject(FeltModalHelper);
     private readonly destroyRef = inject(DestroyRef);
     public getList(): Observable<Felt[] | null> {
          return this.feltsService.getList();
     }

     public openDetails(modalData: Felt): Observable<Felt[]> {
          const id = modalData.id;
          return this.feltModalHelper.openModal(modalData).pipe(
               switchMap((data: Felt) => {
                    return data ? this.update(id, data) : EMPTY;
               }),
               switchMap(() => {
                    return this.feltsService.getList();
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public onAddNew(): Observable<Felt[]> {
          let felt: Felt; //to remove?
          //TODO: felt=>data
          return this.feltModalHelper.openModal().pipe(
               tap((data: Felt) => {
                    felt = data;
               }),
               switchMap((data: Felt | boolean) => {
                    return data ? this.create(felt) : EMPTY;
               }),
               switchMap(() => {
                    return this.feltsService.getList();
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     private create(lining: Felt): Observable<FeltApi> {
          return this.feltsService.create(lining).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, FELTS_MESSAGES.CREATED);
               })
          );
     }

     private update(id: number, lining: Felt): Observable<FeltApi> {
          return this.feltsService.update(id, lining).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, FELTS_MESSAGES.UPDATED);
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
