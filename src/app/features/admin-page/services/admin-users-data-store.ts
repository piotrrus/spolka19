import { DestroyRef, inject, Injectable } from '@angular/core';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { BaseComponent } from '@shared/abstract/base.component';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { AdminUsersService } from './admin-users.service';
import { Role, User, UserApi } from '../models/user.interface';
import { UserModalHelper } from '../../user/helpers/user-modal.helper';
import { USER_MESSAGES } from '../../user/enums/user-messages.enum';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable()
export class AdminUsersDataStore {
     private readonly usersService = inject(AdminUsersService);
     private readonly notificationService = inject(NotificationMessageService);

     private readonly userModalHelper = inject(UserModalHelper);
     private readonly destroyRef = inject(DestroyRef);
     private readonly confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();

     public getList(): Observable<User[] | null> {
          return this.usersService.getList();
     }

     public getRolesList(): Observable<Role[] | null> {
          return this.usersService.getUserRolesList();
     }

     public openDetails(user: User, roles: Role[] | null): Observable<UserApi> {
          const id = Number(user.id);
          return this.userModalHelper.openModal(roles, user).pipe(
               switchMap((data: User) => {
                    return data ? this.update(id, data) : EMPTY;
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public createNew(roles: Role[] | null): Observable<UserApi> {
          return this.userModalHelper.openModal(roles).pipe(
               switchMap((data: User) => {
                    return data ? this.create(data) : EMPTY;
               }),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     public deleteUser(id: number): Observable<UserApi> {
          return this.confirmDialogsHelper.confirmDialog().pipe(
               switchMap((data: boolean) => (data ? this.delete(id) : EMPTY)),
               takeUntilDestroyed(this.destroyRef)
          );
     }

     private create(user: User): Observable<UserApi> {
          user.is_active = user.is_active ? 1 : 0;
          return this.usersService.create(user).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, USER_MESSAGES.CREATED);
               })
          );
     }

     private update(id: number, user: User): Observable<UserApi> {
          user.is_active = user.is_active ? 1 : 0;
          return this.usersService.update(id, user).pipe(
               tap((result) => {
                    this.afterSaveNotification(result, USER_MESSAGES.UPDATED);
               })
          );
     }

     private delete(id: number): Observable<UserApi> {
          return this.usersService.deleteUser(id).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, USER_MESSAGES.DELETED);
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
