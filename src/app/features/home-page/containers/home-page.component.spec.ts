import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HomePageComponent } from './home-page.component';
import { HomeDataFacade } from '../helpers/home-data.facade';
import { StockService } from '@features/stock-page/services/stock.service';
import { OrdersService } from '@features/orders-page/services/orders.service';
import { EventsService } from '@features/events-page/services/events.service';
import { LastOrdersComponent } from '../components/last-orders/last-orders.component';
import { InProductionComponent } from '../components/in-production/in-production.component';
import { OrdersToTakeSummaryComponent } from '../components/orders-to-take-summary/orders-to-take-summary.component';
import { LackOfAssortsComponent } from '../components/lack-of-assorts/lack-of-assorts.component';
import { MostPopularComponent } from '../components/most-popular/most-popular.component';
import { UnsentOrdersComponent } from '../components/unsent-orders/unsent-orders.component';
import { Router } from '@angular/router';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import { ORDERS_API_PATHS } from '@features/orders-page/enums/orders.paths.enum';
import { ORDER_STATUS } from '@features/orders-page/enums/order.status.enum';
import { STOCK_API_PATHS } from '@features/stock-page/enums/stock.paths.enum';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { toastrMock } from '@shared/stubs/toastr.stub';
import { orderData } from '@features/orders-page/stubs/orders-table.stub';
import { stockData } from '@features/stock-page/stubs/stock-table.stub';

describe('HomePageComponent', () => {
     let component: HomePageComponent;
     let fixture: ComponentFixture<HomePageComponent>;
     let router: Router;
     let componentInProduction: InProductionComponent;
     let fixtureInProduction: ComponentFixture<InProductionComponent>;
     let componentUnsentOrders: UnsentOrdersComponent;
     let fixtureUnsentOrders: ComponentFixture<UnsentOrdersComponent>;

     let componentOrdersToTakeSummary: OrdersToTakeSummaryComponent;
     let fixtureOrdersToTakeSummary: ComponentFixture<OrdersToTakeSummaryComponent>;

     let componentLastOrders: LastOrdersComponent;
     let fixtureLastOrders: ComponentFixture<LastOrdersComponent>;

     let componentLackOfAssorts: LackOfAssortsComponent;
     let fixtureLackOfAssorts: ComponentFixture<LackOfAssortsComponent>;

     let notificationService: NotificationMessageService;
     const toastrService = toastrMock;

     let ordersService: OrdersService;
     let stockService: StockService;
     let eventsService: EventsService;
     let httpTestingController: HttpTestingController;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [
                    RouterTestingModule,
                    HttpClientTestingModule,
                    ToastrModule.forRoot(),
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    MatRadioModule,
                    NoopAnimationsModule,
                    NgxDatatableModule,
               ],
               declarations: [
                    HomePageComponent,
                    LastOrdersComponent,
                    InProductionComponent,
                    OrdersToTakeSummaryComponent,
                    LackOfAssortsComponent,
                    MostPopularComponent,
                    UnsentOrdersComponent,
               ],

               providers: [
                    HomeDataFacade,
                    StockService,
                    OrdersService,
                    EventsService,
                    { provide: ToastrService, useValue: toastrMock },
               ],
          }).compileComponents();

          fixture = TestBed.createComponent(HomePageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
          router = TestBed.inject(Router);

          notificationService = TestBed.inject(NotificationMessageService);

          fixtureInProduction = TestBed.createComponent(InProductionComponent);
          componentInProduction = fixtureInProduction.componentInstance;

          fixtureUnsentOrders = TestBed.createComponent(UnsentOrdersComponent);
          componentUnsentOrders = fixtureUnsentOrders.componentInstance;

          fixtureOrdersToTakeSummary = TestBed.createComponent(OrdersToTakeSummaryComponent);
          componentOrdersToTakeSummary = fixtureOrdersToTakeSummary.componentInstance;

          fixtureLastOrders = TestBed.createComponent(LastOrdersComponent);
          componentLastOrders = fixtureLastOrders.componentInstance;

          fixtureLackOfAssorts = TestBed.createComponent(LackOfAssortsComponent);
          componentLackOfAssorts = fixtureLackOfAssorts.componentInstance;

          ordersService = TestBed.inject(OrdersService);
          stockService = TestBed.inject(StockService);
          eventsService = TestBed.inject(EventsService);
          httpTestingController = TestBed.inject(HttpTestingController);
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should call redirect to client details order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.showClientDetails(100);
          expect(navigateSpy).toHaveBeenCalledWith([`${CLIENTS_API_PATHS.DETAILS}${100}`]);
     }));

     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.showOrderDetails(100);
          expect(navigateSpy).toHaveBeenCalledWith([`${ORDERS_API_PATHS.DETAILS}${100}`]);
     }));

     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.showOrdersToTake();
          expect(navigateSpy).toHaveBeenCalledWith([
               `${ORDERS_API_PATHS.LIST_STATUS_ID}${ORDER_STATUS.TO_TAKE}`,
          ]);
     }));
     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.showProductionOrders();
          expect(navigateSpy).toHaveBeenCalledWith([
               `${ORDERS_API_PATHS.LIST_STATUS_ID}${ORDER_STATUS.IN_PRODUCTION}`,
          ]);
     }));

     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.showUnsentOrders();
          expect(navigateSpy).toHaveBeenCalledWith([
               `${STOCK_API_PATHS.STATUS}${ORDER_STATUS.ORDERED}`,
          ]);
     }));

     it('should call redirect to add order', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.showLackOfAssorts();
          expect(navigateSpy).toHaveBeenCalledWith([STOCK_API_PATHS.LACK_IN_STOCK]);
     }));

     it('should form emit productionOrdersRedirect', () => {
          const spy = spyOn(componentInProduction.productionOrdersRedirect, 'emit');
          componentInProduction.showOrders();
          expect(spy).toHaveBeenCalledWith(true);
     });

     it('should form emit showUnsentOrders', () => {
          const spy = spyOn(componentUnsentOrders.showUnsentOrders, 'emit');
          componentUnsentOrders.showMore();
          expect(spy).toHaveBeenCalledWith(true);
     });

     it('should form emit ordersToTakeRedirect', () => {
          const spy = spyOn(componentOrdersToTakeSummary.ordersToTakeRedirect, 'emit');
          componentOrdersToTakeSummary.showOrders();
          expect(spy).toHaveBeenCalledWith(true);
     });

     it('should form change emit value', () => {
          const spy = spyOn(componentLastOrders.clientRedirect, 'emit');
          componentLastOrders.showClient(1);
          expect(spy).toHaveBeenCalledTimes(1);
     });

     it('should form change emit value', () => {
          const spy = spyOn(componentLastOrders.orderRedirect, 'emit');
          componentLastOrders.showOrder(1);
          expect(spy).toHaveBeenCalledTimes(1);
     });

     it('should form emit showLackOfAssorts', () => {
          const spy = spyOn(componentLackOfAssorts.showLackOfAssorts, 'emit');
          componentLackOfAssorts.showMore();
          expect(spy).toHaveBeenCalledWith(true);
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
     describe('#ordersServices', () => {
          // let ordersService: OrdersService;
          // let stockService: StockService;
          // let eventsService: EventsService;

          it('should be call Orders getLastOrders service ', () => {
               const spy = spyOn(ordersService, 'getLastOrders');
               ordersService.getLastOrders();
               expect(spy).toHaveBeenCalled();
          });
          it('should be call Orders service with get method', () => {
               ordersService.getOrdersList().subscribe();
               const req = httpTestingController.expectOne(ORDERS_API_PATHS.LIST, 'get list api');
               expect(req.request.method).toBe('GET');
               expect(req.request.responseType).toBe('json');
               expect(req.cancelled).toBeFalsy();
          });
          it('should be call Orders getOrderData with get method', () => {
               ordersService.getOrderData(22).subscribe();
               const req = httpTestingController.expectOne(
                    `${ORDERS_API_PATHS.ORDER_DETAILS}${22}`,
                    'get Order Data api'
               );
               expect(req.request.method).toBe('GET');
          });
          // it('should call getLastOrders with proper path', () => {
          //      // const id = 2;
          //      const lastOrders = {
          //           client_nr: 'abc-122',
          //           invoice_nr: '123 test',
          //           order_date: '2024-12-12',
          //           status: 'nowe',
          //      };

          //      // const url = `${environment.api}${ORDERS_API_PATHS.LAST}`;
          //      const url = `${ORDERS_API_PATHS.LAST}`;
          //      ordersService.getClientLastOrders().subscribe();
          //      const req = httpTestingController.expectOne(url, 'getLastOrders api');
          //      console.log(req);
          //      expect(req.request.method).toBe('GET');
          //      req.flush([lastOrders]);
          // });
          // getClientLastOrders //2 request
          // it('should be call Orders getClientLastOrders with get method', () => {
          //      ordersService.getClientLastOrders().subscribe();
          //      const req = httpTestingController.expectOne(
          //           `${ORDERS_API_PATHS.LAST}`,
          //           'get ClientLastOrders api'
          //      );
          //      expect(req.request.method).toBe('GET');
          // });
          it('should call Orders getOrdersStatusList()  method', () => {
               const statusList = [
                    {
                         id: 1,
                         name: 'test',
                    },
               ];
               const url = `${ORDERS_API_PATHS.STATUS_LIST}`;
               // const url = `${environment.api}${ORDERS_API_PATHS.STATUS_LIST}`;
               ordersService.getOrdersStatusList().subscribe();
               const req = httpTestingController.expectOne(url, 'getOrdersStatusList api');
               expect(req.request.method).toBe('GET');
               req.flush(statusList);
          });
          it('should call Orders List with proper method', () => {
               // const url = `${environment.api}${ORDERS_API_PATHS.LIST_STATUS_ID}${22}`;
               const url = `${ORDERS_API_PATHS.LIST_STATUS_ID}${22}`;
               ordersService.getOrdersList(22).subscribe();
               const req = httpTestingController.expectOne(url, 'get list by status api');
               expect(req.request.method).toBe('GET');
               req.flush([orderData]);
          });
          it('should call Orders List with proper path', () => {
               // const url = `${environment.api}${ORDERS_API_PATHS.LIST}`;
               const url = `${ORDERS_API_PATHS.LIST}`;
               ordersService.getOrdersList().subscribe();
               const req = httpTestingController.expectOne(url, 'get list api');
               expect(req.request.method).toBe('GET');
               req.flush([orderData]);
          });
          it('should call Orders changeStatus()  method', () => {
               const id = 2;
               const status = { id_status: 1 };
               const url = `${ORDERS_API_PATHS.STATUS_CHANGE}${id}`;
               ordersService.changeStatus(id, status).subscribe();
               const req = httpTestingController.expectOne(url, 'changeStatus api');
               expect(req.request.method).toBe('POST');
               req.flush(id);
          });
          it('should call Orders changePayInAdvance() method', () => {
               const id = 2;
               const zaliczka = { zaliczka: true };
               const url = `${ORDERS_API_PATHS.PAY_IN_ADVANCE}${id}`;
               ordersService.changePayInAdvance(id, zaliczka).subscribe();
               const req = httpTestingController.expectOne(url, 'changePayInAdvance api');
               expect(req.request.method).toBe('POST');
               req.flush(id);
          });
          it('should call Orders changePayment()  method', () => {
               const id = 2;
               const paid = { paid: true };
               const url = `${ORDERS_API_PATHS.PAYMENT}${id}`;
               ordersService.changePayment(id, paid).subscribe();
               const req = httpTestingController.expectOne(url, 'changePayment api');
               expect(req.request.method).toBe('POST');
               req.flush(id);
          });
          it('should call Orders updatePrices()  method', () => {
               const id = 2;
               const price = { orderId: 123, price: '123', down_payment: '100', rabat: '10' };
               const url = `${ORDERS_API_PATHS.UPDATE}${id}`;
               ordersService.updatePrices(id, price).subscribe();
               const req = httpTestingController.expectOne(url, 'updatePrices api');
               expect(req.request.method).toBe('POST');
               req.flush(price);
          });
     });
     describe('#EventsService', () => {
          it('should be call EventsService getEventsList ', () => {
               const spy = spyOn(eventsService, 'getEventsList');
               eventsService.getEventsList();
               expect(spy).toHaveBeenCalled();
          });
          it('should be call EventsService getLastEvents ', () => {
               const spy = spyOn(eventsService, 'getLastEvents');
               eventsService.getLastEvents();
               expect(spy).toHaveBeenCalled();
          });

          it('should be call EventsService eventDetails ', () => {
               const spy = spyOn(eventsService, 'eventDetails');
               eventsService.eventDetails(1);
               expect(spy).toHaveBeenCalled();
          });
     });
     describe('#StockService', () => {
          it('should call Orders changeStatus()  method', () => {
               const url = `${STOCK_API_PATHS.LIST}`;
               stockService.getListData().subscribe();
               const req = httpTestingController.expectOne(url, 'get list api');
               expect(req.request.method).toBe('GET');
               req.flush(stockData);
          });
          it('should call Orders getListData()  method', () => {
               const url = `${STOCK_API_PATHS.LIST}`;
               stockService.getListData().subscribe();
               const req = httpTestingController.expectOne(url, 'get list api');
               expect(req.request.method).toBe('GET');
               req.flush(stockData);
          });
          // it('should call Orders getListData()  method with option', () => {
          //      const option = 'test';
          //      const id = 1;
          //      const url = `${STOCK_API_PATHS.LIST}/${option}/${id}`;
          //      stockService.getListData(option).subscribe();
          //      const req = httpTestingController.expectOne(url, 'get list api');
          //      expect(req.request.method).toBe('GET');
          //      req.flush(stockData);
          // });

          it('should call Orders getAssortData()  method', () => {
               const url = `${STOCK_API_PATHS.LIST}`;
               stockService.getAssortData().subscribe();
               const req = httpTestingController.expectOne(url, 'get AssortData api');
               expect(req.request.method).toBe('GET');
               req.flush(stockData);
          });
          it('should call Orders getPatterns()  method', () => {
               const pattern = {
                    id: 1,
                    name: 'test',
               };
               const url = `${STOCK_API_PATHS.PATTERNS}`;
               stockService.getPatterns().subscribe();
               const req = httpTestingController.expectOne(url, 'get Patterns api');
               expect(req.request.method).toBe('GET');
               req.flush([pattern]);
          });
          it('should call Orders getStockOptionList()  method', () => {
               const list = {
                    id: 1,
                    name: 'test',
               };
               const url = `${STOCK_API_PATHS.OPTIONS_LIST}`;
               stockService.getStockOptionList().subscribe();
               const req = httpTestingController.expectOne(url, 'get getStockOptionList api');
               expect(req.request.method).toBe('GET');
               req.flush([list]);
          });
          it('should call Orders getMostPopularClothes()  method', () => {
               const clothes = {
                    article: 'krawat',
                    ilosc: 1,
                    name: 'test',
               };
               const url = `${STOCK_API_PATHS.POPULAR_CLOTHES}`;
               stockService.getMostPopularClothes().subscribe();
               const req = httpTestingController.expectOne(url, 'get MostPopularClothes api');
               expect(req.request.method).toBe('GET');
               req.flush([clothes]);
          });
          //2 request
          // it('should call Orders getMostPopularFabrics()  method', () => {
          //      const fabrics = {
          //           contractor: 'test',
          //           ilosc: 1,
          //           materialNr: 'test',
          //      };
          //      const url = `${STOCK_API_PATHS.POPULAR_FABRICS}`;
          //      stockService.getMostPopularFabrics().subscribe();
          //      const req = httpTestingController.expectOne(url, 'get MostPopularFabrics api');
          //      expect(req.request.method).toBe('GET');
          //      req.flush([fabrics]);
          // });
          // it('should call Orders MostPopularAssorts()  method', () => {
          //      const assorts = {
          //           article: 'krawat',
          //           ilosc: 1,
          //           name: 'test',
          //      };
          //      const url = `${STOCK_API_PATHS.POPULAR_ASSORTS}`;
          //      stockService.getMostPopularAssorts().subscribe();
          //      const req = httpTestingController.expectOne(url, 'get MostPopularAssorts api');
          //      expect(req.request.method).toBe('GET');
          //      req.flush([assorts]);
          // });
     });
});
