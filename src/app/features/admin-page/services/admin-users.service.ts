import { Injectable } from '@angular/core';
import { ApiService } from '@core/api/api.service';
import { map, Observable } from 'rxjs';
import { Role, User, UserApi, UserRolesApi } from '../models/user.interface';
import { USERS_API_PATHS } from '@features/user/enums/user-path-api.enum';

@Injectable()
export class AdminUsersService extends ApiService {
     public getList(): Observable<User[]> {
          return this.get<UserApi>(USERS_API_PATHS.LIST).pipe(map((users) => users.data));
     }

     public getUserRolesList(): Observable<Role[]> {
          return this.get<UserRolesApi>(USERS_API_PATHS.ROLES_LIST).pipe(map((users) => users.data));
     }

     public create(user: User): Observable<UserApi> {
          return this.post<UserApi>(`${USERS_API_PATHS.CREATE}`, user);
     }

     public update(id: number, user: User): Observable<UserApi> {
          return this.post<UserApi>(`${USERS_API_PATHS.UPDATE}${id}`, user);
     }

     public deleteUser(id: number): Observable<UserApi> {
          return this.delete<UserApi>(`${USERS_API_PATHS.DELETE}${id}`);
     }
}
