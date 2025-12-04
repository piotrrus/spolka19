import { Injectable } from '@angular/core';
import { ApiService } from '@core/api/api.service';
import { USERS_API_PATHS } from '@features/user/enums/user-path-api.enum';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { ChangePassword, LoginApi, User, UserApi, UserRegister } from '@features/user/models/user.interface';
import { Observable } from 'rxjs';

@Injectable({
     providedIn: 'root',
})
export class UserService extends ApiService {
     public login(data: User): Observable<LoginApi> {
          //TODO:
          //localStorage.setItem('currentUser', JSON.stringify(user));
          return this.post(USERS_API_PATHS.LOGIN, data);
     }

     public logout(): Observable<RestResponse> {
          //TODO:
          //localStorage.removeItem('currentUser');
          return this.post(USERS_API_PATHS.LOGOUT, null);
     }

     public changePassword(data: ChangePassword): Observable<UserApi> {
          return this.post(USERS_API_PATHS.CHANGE_PASSWORD, data);
     }

     public register(data: UserRegister): Observable<LoginApi> {
          return this.post(USERS_API_PATHS.REGISTER, data);
     }
}
