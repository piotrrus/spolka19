import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LiningService } from './lining.service';
import { LINING_API_PATHS } from '../enums/lining.paths.enum';
import { environment } from 'src/environments/environment';
import { liningsData } from '../stubs/linings-table.stub';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';
import { StorageService } from '@core/storage/storage.service';
import { ApiService } from '@core/api/api.service';

describe('LiningService', () => {
     let service: LiningService;
     // let apiService: ApiService;
     let httpTestingController: HttpTestingController;
     let notificationService: NotificationMessageService;

     let storageService: StorageService;
     const toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
          'error',
          'success',
          'warning',
          'info',
     ]);

     const storageKey = 'key';
     const storageValue = 'value';

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [
                    LiningService,
                    ApiService,
                    MatSnackBar,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    { provide: ToastrService, useValue: toastrService },
               ],
          });

          service = TestBed.inject(LiningService);
          // apiService = TestBed.inject(ApiService);
          httpTestingController = TestBed.inject(HttpTestingController);
          notificationService = TestBed.inject(NotificationMessageService);
          storageService = TestBed.inject(StorageService);
     });

     afterEach(() => {
          httpTestingController.verify();
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     //OK
     it('should be call LiningService getList with get method', () => {
          const url = `${environment.api}${LINING_API_PATHS.LIST}`;
          service.getList().subscribe();
          const req = httpTestingController.expectOne(url, 'get list api');
          expect(req.request.method).toBe('GET');
          req.flush([liningsData]);
     });

     it('should call LiningService remove() with delete method', () => {
          const id = 2;
          const url = `${environment.api}${LINING_API_PATHS.DELETE}${id}`;
          service.remove(id).subscribe();
          const req = httpTestingController.expectOne(url, 'delete api');
          expect(req.request.method).toBe('DELETE');
          req.flush(id);
     });
     //OK
     it('should call LiningService create with post method', () => {
          const lining = liningsData;
          const url = `${environment.api}${LINING_API_PATHS.CREATE}`;
          service.create(lining).subscribe();
          const req = httpTestingController.expectOne(url, 'create api');
          expect(req.request.method).toBe('POST');
          req.flush(liningsData);
     });

     ///liningService

     // it('should call LiningService update with post method', () => {
     //      const lining = liningsData;
     //      liningService.update()
     //      expect(liningService.success).toHaveBeenCalledWith('success test');
     //      // it('should be call success msg ', () => {
     //      //      notificationService.success('success test');
     //      //      expect(toastrService.success).toHaveBeenCalledWith('success test');
     //      // });
     // });

     // it('should throw error with response body when server returns error other than 404', () => {
     //      let body: any | undefined;
     //      const url = `${environment.api}${LINING_API_PATHS.LIST}`;
     //      service.getList().subscribe(
     //           () => {},
     //           (error: any) => {
     //                body = error;
     //           }
     //      );

     //      const expected = 'Error';
     // : ErrorDetails = {
     //   code: "validationFailed",
     //   message: "Invalid input",
     // };
     //      const req = httpTestingController.expectOne(url, 'get list api');
     //      // expect(req.request.method).toBe('GET');

     //      //  const testRequest = httpTestingController.expectOne('https://fake.url/42');
     //      req.flush(expected, { status: 400, statusText: 'Bad Request' });

     //      expect(body).toEqual(expected);
     // });

     // it('should be call ClientEventsService getClientEvents ', () => {
     //      const lining = liningsData;
     //      const spy = spyOn(service, 'update');
     //      // service.getClientEvents(1);
     //      service.update(2, lining);
     //      expect(spy).toHaveBeenCalled();
     // });

     it('should call LiningService update with post method', () => {
          const lining = liningsData;
          const url = `${environment.api}${LINING_API_PATHS.UPDATE}`;
          service.update(45, lining).subscribe();
          const req = httpTestingController.expectOne(`${url}45`, 'update api');
          expect(req.request.method).toBe('POST');
          req.flush(liningsData);
     });

     describe('#notificationService', () => {
          it('should be call success msg ', () => {
               notificationService.success('success test');
               expect(toastrService.success).toHaveBeenCalledWith('success test');
          });

          it('should be call success msg with description ', () => {
               notificationService.success('success test', 'description');
               expect(toastrService.success).toHaveBeenCalledWith('success test description');
          });

          it('should be call error msg ', () => {
               notificationService.error('');
               expect(toastrService.error).toHaveBeenCalledWith(
                    'Wystąpił błąd podczas pobierania danych'
               );
          });

          it('should be call error msg ', () => {
               notificationService.error('');
               expect(toastrService.error).toHaveBeenCalledWith(
                    'Wystąpił błąd podczas pobierania danych'
               );
          });
          it('should be call error save msg ', () => {
               notificationService.errorSave('');
               expect(toastrService.error).toHaveBeenCalledWith(
                    'Wystąpił błąd podczas zapisu danych'
               );
          });
          it('should be call info msg ', () => {
               notificationService.info('test info');
               expect(toastrService.info).toHaveBeenCalledWith('test info');
          });
          it('should be call warning msg', () => {
               notificationService.warning('test warning');
               expect(toastrService.warning).toHaveBeenCalledWith('test warning');
          });
          it('should be call system msg', () => {
               notificationService.system('test system');
               expect(toastrService.warning).toHaveBeenCalledWith('test system');
          });
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
