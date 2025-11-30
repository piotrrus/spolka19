import { Injectable } from '@angular/core';
import { LoginApi } from '@features/user/models/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Roles } from './roles.enum';

@Injectable({ providedIn: 'root' })
export class AuthService {
     public isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);
     public userRoleId$: BehaviorSubject<string> = new BehaviorSubject('');

     public initilize(): void {
          sessionStorage.getItem('authorizationToken')
               ? this.isLogged$.next(true)
               : this.isLogged$.next(false);
     }
     public getLogged(): boolean {
          return true;
          // return sessionStorage.getItem('authorizationToken') ? true : false;
     }

     public setLogged(loginData: LoginApi): void {
          if (loginData.success) {
               this.setStorage(loginData);
          } else {
               this.isLogged$.next(false);
          }
     }

     private setStorage(loginData: LoginApi): void {
          const isLogged: boolean = true;
          const token: string = loginData.data.token;
          const userName: string = loginData.data.user.name;
          const roleId: string = loginData.data.user.role_id
               ? loginData.data.user.role_id.toString()
               : '';

          sessionStorage.setItem('user', userName);
          sessionStorage.setItem('roleId', roleId);
          sessionStorage.setItem('authorizationToken', token);

          this.isLogged$.next(isLogged);
          this.userRoleId$.next(roleId);

          // console.log(loginData.success);
     }

     public clearLogged(): void {
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('roleId');
          sessionStorage.removeItem('authorizationToken');

          this.isLogged$.next(false);
          this.userRoleId$.next('');
     }

     public isAdmin(): boolean {
          const isActive =
               sessionStorage.getItem('roleId') &&
               Number(sessionStorage.getItem('roleId')) === Roles.ADMIN;
          return true;
          // return isActive ? true : false;
     }

     public isProduction(): boolean {
          const isActive =
               sessionStorage.getItem('roleId') &&
               Number(sessionStorage.getItem('roleId')) === Roles.PRODUCTION;
          return isActive ? true : false;
     }

     public isStore(): boolean {
          const isActive =
               sessionStorage.getItem('roleId') &&
               Number(sessionStorage.getItem('roleId')) === Roles.STORE;
          return isActive ? true : false;
     }
}
