import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpsInterceptor } from './old-https.interceptor';
import { environment } from 'src/environments/environment';
import { HOME_API_PATHS } from '@features/home-page/enums/home.paths.enum';
import { StorageService } from '@core/storage/storage.service';

describe('HttpsInterceptor', () => {
     let httpTestingController: HttpTestingController;
     let httpClient: HttpClient;
     let storageService: StorageService;
     const storageKey = 'key';
     const storageValue = 'value';

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule],
               providers: [
                    HttpsInterceptor,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
               ],
          });
          httpTestingController = TestBed.inject(HttpTestingController);
          httpClient = TestBed.inject(HttpClient);
          storageService = TestBed.inject(StorageService);
     });

     afterEach(() => {
          httpTestingController.verify();
     });

     it('should have proper path ', () => {
          const url = `${HOME_API_PATHS.HOME}`;
          httpClient.get(url).subscribe();
          const req = httpTestingController.expectOne(`${environment.api}${url}`);
          expect(req.request.url).toEqual(`${environment.api}${url}`);
     });

     it('should have proper path for json', () => {
          const url = 'client-measures-description.json';
          httpClient.get(url).subscribe();
          const req = httpTestingController.expectOne(`assets/data/${url}`);
          expect(req.request.url).toEqual(`assets/data/${url}`);
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
