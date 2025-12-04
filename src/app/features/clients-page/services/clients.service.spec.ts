import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ClientsService } from './clients-service';
import { CLIENTS_API_PATHS } from '../enums/clients-paths.enum';
import { environment } from 'src/environments/environment';
import { clientData, clientSaveData } from '../stubs/clients-data.stub';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { StorageService } from '@core/storage/storage.service';

describe('ClientsService', () => {
     let service: ClientsService;
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
                    ClientsService,
                    MatSnackBar,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    { provide: ToastrService, useValue: toastrService },
               ],
          });

          service = TestBed.inject(ClientsService);
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

     it('should be call ClientsService getList with get method', () => {
          const url = `${environment.api}${CLIENTS_API_PATHS.LIST}`;
          service.getList().subscribe();
          const req = httpTestingController.expectOne(url, 'get list api');
          expect(req.request.method).toBe('GET');
          req.flush([clientData]);
     });

     it('should be call ClientsService getDetails with get method', () => {
          const id = 2;
          const url = `${environment.api}${CLIENTS_API_PATHS.DETAILS_API}${id}`;
          service.getDetails(id).subscribe();
          const req = httpTestingController.expectOne(url, 'get details api');
          expect(req.request.method).toBe('GET');
          req.flush(clientData);
     });

     it('should call ClientsService remove() with delete method', () => {
          const id = 2;
          const url = `${environment.api}${CLIENTS_API_PATHS.DELETE}${id}`;
          service.remove(id).subscribe();
          const req = httpTestingController.expectOne(url, 'delete api');
          expect(req.request.method).toBe('DELETE');
          req.flush(id);
     });

     it('should call ClientsService update() with post method', () => {
          const id = 2;
          const client = clientSaveData;
          const url = `${environment.api}${CLIENTS_API_PATHS.UPDATE}${id}`;
          service.update(id, client).subscribe();
          const req = httpTestingController.expectOne(url, 'update api');
          expect(req.request.method).toBe('POST');
          req.flush(clientSaveData);
     });

     it('should call ClientsService create() with post method', () => {
          const client = clientSaveData;
          const url = `${environment.api}${CLIENTS_API_PATHS.CREATE}`;
          service.create(client).subscribe();
          const req = httpTestingController.expectOne(url, 'create api');
          expect(req.request.method).toBe('POST');
          req.flush(clientData);
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
