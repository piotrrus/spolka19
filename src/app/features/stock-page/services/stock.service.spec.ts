import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { StockService } from './stock.service';
import { STOCK_API_PATHS } from '../enums/stock.paths.enum';
import { stockData } from '../stubs/stock-table.stub';
import { NotificationMessageService } from '@core/notifications/notification.service';

describe('StockService', () => {
     let service: StockService;
     let httpTestingController: HttpTestingController;
     let notificationService: NotificationMessageService;
     const toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
          'error',
          'success',
          'warning',
          'info',
     ]);
     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [StockService, MatSnackBar, { provide: ToastrService, useValue: toastrService }],
          });

          service = TestBed.inject(StockService);
          httpTestingController = TestBed.inject(HttpTestingController);
          notificationService = TestBed.inject(NotificationMessageService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     // it('should be call StockService getList service ', () => {
     //      const spy = spyOn(service, 'getListData');
     //      service.getListData();
     //      expect(spy).toHaveBeenCalled();
     // });

     // it('should be call StockService service with get method', () => {
     //      service.getListData().subscribe();
     //      const req = httpTestingController.expectOne(STOCK_API_PATHS.LIST, 'get list api');
     //      expect(req.request.method).toBe('GET');
     // });

     it('should call Orders getListData()  method', () => {
          const url = `${STOCK_API_PATHS.LIST}`;
          service.getListData().subscribe();
          const req = httpTestingController.expectOne(url, 'get list api');
          expect(req.request.method).toBe('GET');
          req.flush(stockData);
     });
     it('should call Orders getListData() method with option', () => {
          const option = 'option';
          const id = 1;
          const url = `${STOCK_API_PATHS.LIST}/${option}/${id}`;
          service.getListData(option, id).subscribe();
          const req = httpTestingController.expectOne(url, 'get list with option api');
          expect(req.request.method).toBe('GET');
          req.flush(stockData);
     });

     it('should call Orders getAssortData()  method', () => {
          const url = `${STOCK_API_PATHS.LIST}`;
          service.getAssortData().subscribe();
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
          service.getPatterns().subscribe();
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
          service.getStockOptionList().subscribe();
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
          service.getMostPopularClothes().subscribe();
          const req = httpTestingController.expectOne(url, 'get MostPopularClothes api');
          expect(req.request.method).toBe('GET');
          req.flush([clothes]);
     });
     it('should call Orders getMostPopularFabrics()  method', () => {
          const fabrics = {
               contractor: 'test',
               ilosc: 1,
               materialNr: 'test',
          };
          const url = `${STOCK_API_PATHS.POPULAR_FABRICS}`;
          service.getMostPopularFabrics().subscribe();
          const req = httpTestingController.expectOne(url, 'get MostPopularFabrics api');
          expect(req.request.method).toBe('GET');
          req.flush([fabrics]);
     });
     it('should call Orders MostPopularAssorts()  method', () => {
          const assorts = {
               article: 'krawat',
               ilosc: 1,
               name: 'test',
          };
          const url = `${STOCK_API_PATHS.POPULAR_ASSORTS}`;
          service.getMostPopularAssorts().subscribe();
          const req = httpTestingController.expectOne(url, 'get MostPopularAssorts api');
          expect(req.request.method).toBe('GET');
          req.flush([assorts]);
     });

     it('should call EventsService updateShoes with post method', () => {
          const id = 1;
          const shoes = {
               id_contractor: 8,
               id_assort: 5,
               name: 'test',
               rozmiar: '56',
               quantity: 1,
               buying_price: '234',
               selling_price: '234',
               send_email: false,
          };
          const url = `${STOCK_API_PATHS.SHOES_UPDATE}${id}`;
          service.updateShoes(id, shoes).subscribe();
          const req = httpTestingController.expectOne(url, 'updateShoes api');
          expect(req.request.method).toBe('POST');
          req.flush(shoes);
     });
     it('should call EventsService updateAssort with post method', () => {
          const id = 1;
          const assort = {
               id_contractor: 8,
               id_assort: 5,
               name: 'test',
               model: 'test',
               quantity: 1,
               buying_price: '234',
               selling_price: '234',
               send_email: false,
          };
          const url = `${STOCK_API_PATHS.ASSORT_UPDATE}${id}`;
          service.updateAssort(id, assort).subscribe();
          const req = httpTestingController.expectOne(url, 'updateAssort api');
          expect(req.request.method).toBe('POST');
          req.flush(assort);
     });
     it('should call EventsService orderShoes with post method', () => {
          const shoes = {
               id_contractor: 8,
               id_assort: 5,
               name: 'test',
               rozmiar: '56',
               quantity: 1,
               buying_price: '234',
               selling_price: '234',
               send_email: false,
          };
          const url = `${STOCK_API_PATHS.SHOES_ORDER}`;
          service.orderShoes(shoes).subscribe();
          const req = httpTestingController.expectOne(url, 'orderShoes api');
          expect(req.request.method).toBe('POST');
          req.flush(shoes);
     });
     it('should call EventsService orderFabric with post method', () => {
          const fabric = {
               id_warehouse: 8,
               id_contractor: 8,
               id_assort: 70,
               material_nr: 'test',
               pattern: 1,
               quantity: 1,
               buying_price: 234,
               price_euro: 234,
               moved_to_stock: '2024-12-12',
          };
          const url = `${STOCK_API_PATHS.FABRIC_ORDER}`;
          service.orderFabric(fabric).subscribe();
          const req = httpTestingController.expectOne(url, 'orderFabric api');
          expect(req.request.method).toBe('POST');
          req.flush(fabric);
     });
     it('should call EventsService addFabric with post method', () => {
          const fabric = {
               id_warehouse: 8,
               id_contractor: 8,
               id_assort: 70,
               material_nr: 'test',
               pattern: 1,
               quantity: 1,
               buying_price: 234,
               price_euro: 234,
               moved_to_stock: '2024-12-12',
          };
          const url = `${STOCK_API_PATHS.FABRIC_ADD}`;
          service.addFabric(fabric).subscribe();
          const req = httpTestingController.expectOne(url, 'addFabric api');
          expect(req.request.method).toBe('POST');
          req.flush(fabric);
     });
     it('should call EventsService updateFabric with post method', () => {
          const id = 1;
          const fabric = {
               id_warehouse: 8,
               id_contractor: 8,
               id_assort: 70,
               material_nr: 'test',
               pattern: 1,
               quantity: 1,
               buying_price: 234,
               price_euro: 234,
               moved_to_stock: '2024-12-12',
          };
          const url = `${STOCK_API_PATHS.FABRIC_UPDATE}${id}`;
          service.updateFabric(id, fabric).subscribe();
          const req = httpTestingController.expectOne(url, 'updateFabric api');
          expect(req.request.method).toBe('POST');
          req.flush(fabric);
     });

     it('should call EventsService orderAssort with post method', () => {
          const assort = {
               id_contractor: 8,
               id_assort: 5,
               name: 'test',
               model: 'test',
               quantity: 1,
               buying_price: '234',
               selling_price: '234',
               send_email: false,
          };
          const url = `${STOCK_API_PATHS.ASSORT_ORDER}`;
          service.orderAssort(assort).subscribe();
          const req = httpTestingController.expectOne(url, 'orderAssort api');
          expect(req.request.method).toBe('POST');
          req.flush(assort);
     });

     it('should call EventsService moveToStock with post method', () => {
          const id = 1;
          const movedToStock = '2024-12-12';
          const url = `${STOCK_API_PATHS.MOVE_TO_STOCK}${id}`;
          service.moveToStock(id, movedToStock).subscribe();
          const req = httpTestingController.expectOne(url, 'moveToStock api');
          expect(req.request.method).toBe('POST');
          req.flush(movedToStock);
     });

     it('should call EventsService getLackOfArticles with post method', () => {
          const articles = {
               material_nr: 'test',
               moved_to_stock: '2024-12-12',
               order_date: '2024-12-12',
               quantity: '1',
               contractor: 'test',
          };

          const url = `${STOCK_API_PATHS.LACK_IN_STOCK}`;
          service.getLackOfArticles().subscribe();
          const req = httpTestingController.expectOne(url, 'getLackOfArticles api');
          expect(req.request.method).toBe('GET');
          req.flush(articles);
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
});
