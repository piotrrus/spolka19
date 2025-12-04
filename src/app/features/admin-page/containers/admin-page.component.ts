import { Component, DestroyRef, inject } from '@angular/core';
import { BaseComponent } from '@shared/abstract/base.component';
import { Titles } from '@features/user/enums/titles.enum';
import { EMPTY, Observable, switchMap, tap } from 'rxjs';
import { Role, User, UserApi } from '../models/user.interface';
import { AdminUsersDataStore } from '@features/admin-page/services/admin-users-data-store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
     selector: 'app-admin-page',
     templateUrl: './admin-page.component.html',
     styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent {
     public tableTitle = Titles.TABLE_TITLE;
     public tableData$: Observable<User[] | null> = this.usersDataStore.getList();
     // private readonly destroyRef = inject(DestroyRef);

     constructor(
          private usersDataStore: AdminUsersDataStore,
          private readonly destroyRef: DestroyRef
     ) {}

     public showDetails(user: User): void {
          this.usersDataStore
               .getRolesList()
               .pipe(
                    switchMap((roles: Role[] | null) => {
                         return this.usersDataStore.openDetails(user, roles);
                    }),
                    switchMap((response: UserApi | null) => {
                         return response?.success
                              ? (this.tableData$ = this.usersDataStore.getList())
                              : EMPTY;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public createNew(): void {
          this.usersDataStore
               .getRolesList()
               .pipe(
                    switchMap((roles: Role[] | null) => {
                         return this.usersDataStore.createNew(roles);
                    }),
                    switchMap((response: UserApi | null) => {
                         return response?.success
                              ? (this.tableData$ = this.usersDataStore.getList())
                              : EMPTY;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }
     public deleteUser(user: User): void {
          this.usersDataStore
               .deleteUser(user.id)
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.usersDataStore.getList()) : null;
                    })
               )
               .subscribe();
     }
}
