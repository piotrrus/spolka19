import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { Contractor, ContractorApi } from '@features/contractors-page/models/contractor.interface';
import { ContractorsService } from './contractor-service';
import { ContractorModalHelper } from '../helpers/contractor-modal.helper';
import { CONTRACTORS_MESSAGES } from '../enums/contractors-messages.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class ContractorsCrudFacade {
     private readonly contractorsService = inject(ContractorsService);
     private readonly notificationService = inject(NotificationMessageService);
     private readonly contractorModalHelper = inject(ContractorModalHelper);
     private readonly destroyRef = inject(DestroyRef);

     public getList(): Observable<Contractor[] | null> {
          return this.contractorsService.getList();
     }

     public openDetails(modalData: Contractor): Observable<ContractorApi> {
          const id = modalData.id;
          return this.contractorModalHelper.openModal(modalData).pipe(
               switchMap((data: Contractor) => {
                    return data ? this.update(id, data) : EMPTY;
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public openDetailsModal(id: number): void {
          this.contractorsService
               .getDetails(id)
               .pipe(
                    switchMap((data: Contractor) =>
                         this.contractorModalHelper
                              .openModal(data)
                              .pipe(
                                   switchMap((data: Contractor) =>
                                        data ? this.update(id, data) : EMPTY
                                   )
                              )
                    ),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onAddNew(): Observable<ContractorApi> {
          let contractor: Contractor;
          return this.contractorModalHelper.openModal().pipe(
               tap((data: Contractor) => {
                    contractor = data;
               }),
               switchMap((data: Contractor | boolean) => {
                    return data ? this.create(contractor) : EMPTY;
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     private create(contractor: Contractor): Observable<ContractorApi> {
          return this.contractorsService.create(contractor).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, CONTRACTORS_MESSAGES.CREATED);
               })
          );
     }

     private update(id: number, contractor: Contractor): Observable<ContractorApi> {
          return this.contractorsService.update(id, contractor).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, CONTRACTORS_MESSAGES.UPDATED);
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
