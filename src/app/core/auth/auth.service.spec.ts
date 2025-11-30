import { TestBed } from '@angular/core/testing';
import { StorageService } from '@core/storage/storage.service';
import { AuthService } from './auth-service';
import { loginDataMock } from './stubs/auth-data.stub';
import { Roles } from './roles.enum';

describe('AuthService', () => {
     let service: AuthService;
     let storageService: StorageService;

     const storageKey = 'key';
     const storageValue = 'value';
     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [],
          });
          service = TestBed.inject(AuthService);
          storageService = TestBed.inject(StorageService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call isAdmin method and return  admin ', () => {
          sessionStorage.setItem('roleId', Roles.ADMIN.toString());
          expect(service.isAdmin()).toBeTruthy();
     });

     it('should be call isAdmin method and return not admin ', () => {
          sessionStorage.setItem('roleId', '4');
          expect(service.isAdmin()).toBeFalsy();
     });

     it('should be call isProduction method', () => {
          sessionStorage.setItem('roleId', Roles.PRODUCTION.toString());
          expect(service.isProduction()).toBeTruthy();
     });

     it('should be call isProduction method', () => {
          sessionStorage.setItem('roleId', '1');
          expect(service.isProduction()).toBeFalsy();
     });

     it('should be call isStore  method and return true if isStore is set', () => {
          sessionStorage.setItem('roleId', Roles.STORE.toString());
          expect(service.isStore()).toBeTruthy();
     });

     it('should be call isStore  method and return false if isStore is not set', () => {
          sessionStorage.setItem('roleId', '1');
          expect(service.isStore()).toBeFalsy();
     });

     it('should be call clearLogged  method', () => {
          service.clearLogged();
          expect(sessionStorage.getItem('roleId')).toBeNull();
     });

     it('should be call setStorage method', () => {
          service.setLogged(loginDataMock);
          expect(sessionStorage.getItem('authorizationToken')).toEqual('test123');
          expect(sessionStorage.getItem('roleId')).toEqual('1');
          expect(sessionStorage.getItem('user')).toEqual('test');
     });

     it('should be call initilize  method', () => {
          const spy = spyOn(service, 'initilize');
          service.initilize();
          expect(spy).toHaveBeenCalled();
     });

     it('should be call getLogged method and return true if authorization token is set', () => {
          service.setLogged(loginDataMock);
          service.getLogged();
          expect(service.getLogged()).toBeTruthy();
     });

     it('should be call getLogged method and return true if authorization token is not set', () => {
          service.clearLogged();
          service.getLogged();
          expect(service.getLogged()).toBeFalsy();
     });

     describe('#localStorage', () => {
          it('should clear localStorage', () => {
               spyOn(localStorage, 'clear');
               storageService.clear();
               expect(localStorage.clear).toHaveBeenCalled();
          });

          it('should remove item from localStorage', () => {
               spyOn(localStorage, 'removeItem');
               storageService.removeItem(storageKey);
               expect(localStorage.removeItem).toHaveBeenCalledWith(storageKey);
          });
          it('should return value from localStorage', () => {
               spyOn(localStorage, 'getItem').and.returnValue(storageValue);
               const result = storageService.getItem(storageKey);
               expect(result).toEqual(storageValue);
               expect(localStorage.getItem).toHaveBeenCalledWith(storageKey);
          });
          it('should set item in localStorage', () => {
               spyOn(localStorage, 'setItem');
               storageService.setItem(storageKey, storageValue);
               expect(localStorage.setItem).toHaveBeenCalledWith(storageKey, storageValue);
          });
     });
});
