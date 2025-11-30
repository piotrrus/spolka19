import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
     const storageValue = 'value';
     const storageKey = 'key';

     let service: StorageService;

     beforeEach(() => {
          TestBed.configureTestingModule({
               providers: [StorageService],
          });

          service = TestBed.inject(StorageService);
     });

     describe('#getItem', () => {
          it('should return value from localStorage', () => {
               spyOn(localStorage, 'getItem').and.returnValue(storageValue);
               const result = service.getItem(storageKey);
               expect(result).toEqual(storageValue);
               expect(localStorage.getItem).toHaveBeenCalledWith(storageKey);
          });
     });

     describe('#setItem', () => {
          it('should set item in localStorage', () => {
               spyOn(localStorage, 'setItem');
               service.setItem(storageKey, storageValue);
               expect(localStorage.setItem).toHaveBeenCalledWith(storageKey, storageValue);
          });
     });

     describe('#removeItem', () => {
          it('should remove item from localStorage', () => {
               spyOn(localStorage, 'removeItem');
               service.removeItem(storageKey);
               expect(localStorage.removeItem).toHaveBeenCalledWith(storageKey);
          });
     });

     describe('#clear', () => {
          it('should clear localStorage', () => {
               spyOn(localStorage, 'clear');
               service.clear();
               expect(localStorage.clear).toHaveBeenCalled();
          });
     });
});
