import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { WarehouseService } from './warehouse-service';
import { WAREHOUSES_API_PATHS } from '../enums/warehouses.paths.enum';
import { warehouseData } from '../stubs/warehouse-table.stub';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { StorageService } from '@core/storage/storage.service';

describe('WarehouseService', () => {
     let service: WarehouseService;
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
                    WarehouseService,
                    MatSnackBar,
                    //      { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    { provide: ToastrService, useValue: toastrService },
               ],
          });

          service = TestBed.inject(WarehouseService);
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

     it('should be call WarehouseService getList with get method', () => {
          const url = `${WAREHOUSES_API_PATHS.LIST}`;
          service.getList().subscribe();
          const req = httpTestingController.expectOne(url, 'get list api');
          expect(req.request.method).toBe('GET');
          req.flush([warehouseData]);
     });

     it('should be call WarehouseService getDetails with get method', () => {
          const id = 2;
          const url = `${WAREHOUSES_API_PATHS.DETAILS}${id}`;
          service.getDetails(id).subscribe();
          const req = httpTestingController.expectOne(url, 'get details api');
          expect(req.request.method).toBe('GET');
          req.flush(warehouseData);
     });
     //OK
     // it('should call ContractorsService remove() with delete method', () => {
     //      const id = 2;
     //      const url = `${WAREHOUSES_API_PATHS.DELETE}${id}`;
     //      service.remove(id).subscribe();
     //      const req = httpTestingController.expectOne(url, 'delete api');
     //      expect(req.request.method).toBe('DELETE');
     //      req.flush(contractorData);
     // });
     //OK
     it('should call WarehouseService create() with post method', () => {
          // const id = 2;
          const warehouse = warehouseData;
          const url = `${WAREHOUSES_API_PATHS.CREATE}`;
          service.create(warehouse).subscribe();
          const req = httpTestingController.expectOne(url, 'create api');
          expect(req.request.method).toBe('POST');
          req.flush(warehouseData);
     });

     it('should call WarehouseService update() with post method', () => {
          const id = 2;
          const warehouse = warehouseData;
          const url = `${WAREHOUSES_API_PATHS.UPDATE}${id}`;
          service.update(id, warehouse).subscribe();
          const req = httpTestingController.expectOne(url, 'create api');
          expect(req.request.method).toBe('POST');
          req.flush(warehouseData);
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
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas pobierania danych');
          });

          it('should be call error msg ', () => {
               notificationService.error('');
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas pobierania danych');
          });
          it('should be call error save msg ', () => {
               notificationService.errorSave('');
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas zapisu danych');
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
