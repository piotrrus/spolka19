import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersService } from './orders.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ORDERS_API_PATHS } from '../enums/orders.paths.enum';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';
import { StorageService } from '@core/storage/storage.service';
import { orderData } from '../stubs/orders-table.stub';
import { lastOrders } from '../stubs/last-orders.stub';
import { unsentOrders } from '../stubs/usent-orders.stub';

describe('OrdersService', () => {
     let service: OrdersService;
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
                    OrdersService,
                    MatSnackBar,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    { provide: ToastrService, useValue: toastrService },
               ],
          });

          service = TestBed.inject(OrdersService);
          httpTestingController = TestBed.inject(HttpTestingController);
          notificationService = TestBed.inject(NotificationMessageService);
          storageService = TestBed.inject(StorageService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });
     describe('#Orders Service', () => {
          it('should call getClientLastOrders with proper path', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.LAST}`;
               service.getClientLastOrders().subscribe();
               const req = httpTestingController.expectOne(url, 'getClientLastOrders api');
               expect(req.request.method).toBe('GET');
               req.flush([lastOrders]);
          });

          it('should call getLastOrders with proper path', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.LAST}`;
               service.getLastOrders().subscribe();
               const req = httpTestingController.expectOne(url, 'getLastOrders api');
               expect(req.request.method).toBe('GET');
               req.flush([lastOrders]);
          });

          it('should call Orders List with proper method', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.LIST_STATUS_ID}${22}`;
               service.getOrdersList(22).subscribe();
               const req = httpTestingController.expectOne(url, 'get list by status api');
               expect(req.request.method).toBe('GET');
               req.flush([orderData]);
          });
          it('should call Orders List with proper path', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.LIST}`;
               service.getOrdersList().subscribe();
               const req = httpTestingController.expectOne(url, 'get list api');
               expect(req.request.method).toBe('GET');
               req.flush([orderData]);
          });

          it('should be call Orders getOrderData with get method', () => {
               const orderId = 1;
               const url = `${environment.api}${ORDERS_API_PATHS.ORDER_DETAILS}${orderId}`;
               service.getOrderData(orderId).subscribe();
               const req = httpTestingController.expectOne(url, 'get getOrderData details api');
               expect(req.request.method).toBe('GET');
               req.flush([orderData]);
          });

          it('should be call Orders getClientLastOrders with get method', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.LAST}`;
               service.getClientLastOrders().subscribe();
               const req = httpTestingController.expectOne(url, 'get ClientLastOrders api');
               expect(req.request.method).toBe('GET');
               req.flush([lastOrders]);
          });

          it('should be call Orders getClientLastOrders service ', () => {
               const spy = spyOn(service, 'getClientLastOrders');
               service.getClientLastOrders();
               expect(spy).toHaveBeenCalled();
          });

          it('should be call Orders getSentToProduction with get method', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.IN_PRODUCTION}`;
               service.getSentToProduction().subscribe();
               const req = httpTestingController.expectOne(url, 'get getSentToProduction api');
               expect(req.request.method).toBe('GET');
               req.flush(2);
          });

          it('should be call Orders getOrdersToTake with get method', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.TO_TAKE}`;
               service.getOrdersToTake().subscribe();
               const req = httpTestingController.expectOne(url, 'get getOrdersToTake api');
               expect(req.request.method).toBe('GET');
               req.flush([orderData]);
          });

          it('should call Orders getOrdersUnsent()  method', () => {
               const url = `${environment.api}${ORDERS_API_PATHS.UNSENT}`;
               service.getOrdersUnsent().subscribe();
               const req = httpTestingController.expectOne(url, 'getOrdersUnsent api');
               expect(req.request.method).toBe('GET');
               req.flush(unsentOrders);
          });
          it('should call Orders getOrdersStatusList()  method', () => {
               const statusList = [
                    {
                         id: 1,
                         name: 'test',
                    },
               ];
               const url = `${environment.api}${ORDERS_API_PATHS.STATUS_LIST}`;
               service.getOrdersStatusList().subscribe();
               const req = httpTestingController.expectOne(url, 'getOrdersStatusList api');
               expect(req.request.method).toBe('GET');
               req.flush(statusList);
          });

          it('should call Orders changeStatus()  method', () => {
               const id = 2;
               const status = { id_status: 1 };
               const url = `${environment.api}${ORDERS_API_PATHS.STATUS_CHANGE}${id}`;
               service.changeStatus(id, status).subscribe();
               const req = httpTestingController.expectOne(url, 'changeStatus api');
               expect(req.request.method).toBe('POST');
               req.flush(id);
          });
          it('should call Orders changePayInAdvance() method', () => {
               const id = 2;
               const zaliczka = { zaliczka: true };
               const url = `${environment.api}${ORDERS_API_PATHS.PAY_IN_ADVANCE}${id}`;
               service.changePayInAdvance(id, zaliczka).subscribe();
               const req = httpTestingController.expectOne(url, 'changePayInAdvance api');
               expect(req.request.method).toBe('POST');
               req.flush(id);
          });
          it('should call Orders changePayment()  method', () => {
               const id = 2;
               const paid = { paid: true };
               const url = `${environment.api}${ORDERS_API_PATHS.PAYMENT}${id}`;
               service.changePayment(id, paid).subscribe();
               const req = httpTestingController.expectOne(url, 'changePayment api');
               expect(req.request.method).toBe('POST');
               req.flush(id);
          });
          it('should call Orders updatePrices()  method', () => {
               const id = 2;
               const price = { orderId: 123, price: '123', down_payment: '100', rabat: '10' };
               const url = `${environment.api}${ORDERS_API_PATHS.UPDATE}${id}`;
               service.updatePrices(id, price).subscribe();
               const req = httpTestingController.expectOne(url, 'updatePrices api');
               expect(req.request.method).toBe('POST');
               req.flush(price);
          });
     });

     describe('#notificationService', () => {
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
