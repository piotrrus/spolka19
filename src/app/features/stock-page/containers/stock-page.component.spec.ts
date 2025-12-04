import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { StockPageComponent } from './stock-page.component';
import { StockPageNavigationComponent } from '../components/stock-page-navigation/stock-page-navigation.component';
import { StockTableComponent } from '../components/tables/stock-table/stock-table.component';
import { StockDataFacade } from '../helpers/stock-data.facade';
import { STOCK_API_OPTIONS } from '../enums/stock.paths.enum';
import { StockService } from '../services/stock.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ContractorsService } from '@features/contractors-page/services/contractor-service';
import { WarehouseService } from '@features/warehouse-page/services/warehouse-service';
import { AssortsService } from '@features/assorts-page/services/assorts.service';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { of } from 'rxjs';
import { StockOptionTitles } from '../enums/stock-options.enum';
import { FabricService } from '@features/fabric-page/services/fabric-service';
import { StockEditAssortStore } from '@features/stock-page/services//stock-edit-assort-store';
import { StockModalsHelper } from '../helpers/stock-modals.helper';
import { StockDataStore } from '@features/stock-page/services/stock-crud-facade';

import { ContractorsDataStore } from '@features/contractors-page/services/contractors-data-store';
import { ContractorModalHelper } from '@features/contractors-page/helpers/contractor-modal.helper';

describe('StockPageComponent', () => {
     let component: StockPageComponent;
     let fixture: ComponentFixture<StockPageComponent>;
     let stockService: StockService;
     // let stockEditHelper: StockEditHelper;
     beforeEach(async(() => {
          TestBed.configureTestingModule({
               declarations: [
                    StockPageComponent,
                    StockPageNavigationComponent,
                    StockTableComponent,
                    TableHeaderComponent,
                    SimpleFilterFormComponent,
               ],
               imports: [
                    RouterTestingModule,
                    HttpClientTestingModule,
                    ToastrModule.forRoot(),
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatIconTestingModule,
                    MatDialogModule,
                    NgxDatatableModule,
               ],
               providers: [
                    StockDataFacade,
                    StockService,
                    ContractorsService,
                    WarehouseService,
                    AssortsService,
                    FabricService,
                    StockEditAssortStore,
                    StockModalsHelper,
                    StockDataStore,
                    ContractorsDataStore,
                    ContractorModalHelper,
                    // StockEditHelper,
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(StockPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
          stockService = TestBed.inject(StockService);
          // stockEditHelper = TestBed.inject(StockEditHelper);
          // router = TestBed.inject(Router);
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     // it('should openShoesModal', fakeAsync(() => {
     //      const contractorsList: Contractor[] = [{ id: 1, name: 'aaa', phone: '123', email: 'aaa@wp.pl' }];
     //      const option = STOCK_ORDER_OPTIONS.SHOES;
     //      component = fixture.componentInstance;
     //      component.stockNewOrder(option);
     // spyOn(stockEditHelper, 'openShoesModal');
     // fixture.whenStable().then(() => {
     //      expect(stockEditHelper.openShoesModal).toHaveBeenCalledWith(contractorsList);
     // });
     // }));
     // it('should openAssortsModal', fakeAsync(() => {
     //      const contractorsList: Contractor[] = [{ id: 1, name: 'aaa', phone: '123', email: 'aaa@wp.pl' }];
     //      const assortsList: List[] = [{ id: 1, name: 'aaa' }];

     //      const option = STOCK_ORDER_OPTIONS.ASSORTS;
     //      component = fixture.componentInstance;
     //      component.stockNewOrder(option);
     // spyOn(stockEditHelper, 'openAssortsModal');
     // fixture.whenStable().then(() => {
     //      expect(stockEditHelper.openAssortsModal).toHaveBeenCalledWith(contractorsList, assortsList);
     // });
     // }));

     // it('should openAssortsModal', fakeAsync(() => {
     //      const contractorsList: Contractor[] = [{ id: 1, name: 'aaa', phone: '123', email: 'aaa@wp.pl' }];
     //      const patternsList: List[] = [
     //           { id: 1, name: 'abc' },
     //           { id: 2, name: 'zzz' },
     //      ];
     //      const option = STOCK_ORDER_OPTIONS.ORDER_FABRIC;
     //      component = fixture.componentInstance;
     //      component.stockNewOrder(option);
     //      spyOn(stockEditHelper, 'openAssortsModal');
     //      fixture.whenStable().then(() => {
     //           expect(stockEditHelper.openAssortsModal).toHaveBeenCalledWith(contractorsList, patternsList);
     //      });
     // }));
     // it('should openFabricModal', fakeAsync(() => {
     //      const contractorsList: Contractor[] = [{ id: 1, name: 'aaa', phone: '123', email: 'aaa@wp.pl' }];
     //      const patternsList: List[] = [
     //           { id: 1, name: 'abc' },
     //           { id: 2, name: 'zzz' },
     //      ];
     //      const option = STOCK_ORDER_OPTIONS.FABRICS;
     //      component = fixture.componentInstance;
     //      component.stockNewOrder(option);
     //      spyOn(stockEditHelper, 'openFabricModal');
     //      fixture.whenStable().then(() => {
     //           expect(stockEditHelper.openFabricModal).toHaveBeenCalledWith(
     //                '3.45',
     //                contractorsList,
     //                patternsList
     //           );
     //      });
     // }));

     // it('should run getAdditionalData', fakeAsync(() => {

     //      component = fixture.componentInstance;
     //      component.ngOnInit();
     //      spyOn(stockEditHelper, 'openShoesModal');
     //      fixture.whenStable().then(() => {
     //           expect(stockEditHelper.openShoesModal).toHaveBeenCalledWith(contractorsList);
     //      });
     // }));

     // it('should render no data template', () => {
     //      component.tableData$ = of([]);
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('.alert').textContent).toContain('Nie znaleziono danych');
     // });

     // it('should call redirect to archives', fakeAsync(() => {
     //      const { debugElement } = fixture;
     //      const counter = debugElement.query(By.css('app-table-header'));
     //      // const compiled = fixture.debugElement.nativeElement;
     //      expect(counter).toBeTruthy();
     // }));

     // it('should render table', () => {
     //      const { debugElement } = fixture;
     //      const counter = debugElement.query(By.css('app-table-header'));
     //      // const compiled = fixture.debugElement.nativeElement;
     //      expect(counter).toBeTruthy();
     // });

     // it('should render subtitle', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('h5').textContent).toContain(STOCK_TABLES.LIST);
     // });

     // it('should render title', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('h2').textContent).toContain('Lista zamówień');
     // });

     it('should render stock table header has Stan magazynu', fakeAsync(() => {
          const optionsList = [
               {
                    id: 100,
                    name: 'Stan magazynu',
               },
               {
                    id: 101,
                    name: 'Zamówione materiały',
               },
          ];
          component.tableTitle$ = of(
               optionsList
                    .filter((s) => Number(s.id) === Number(100))
                    .map((c) => c.name)
                    .toString()
          );

          const compiled = fixture.debugElement.nativeElement;
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain(
               StockOptionTitles.ALL
          );
     }));

     it('should render stock table header has Zamówione materiały', fakeAsync(() => {
          const optionsList = [
               {
                    id: 100,
                    name: 'Stan magazynu',
               },
               {
                    id: 101,
                    name: 'Zamówione materiały',
               },
          ];
          component.tableTitle$ = of(
               optionsList
                    .filter((s) => Number(s.id) === Number(101))
                    .map((c) => c.name)
                    .toString()
          );

          const compiled = fixture.debugElement.nativeElement;
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain(
               StockOptionTitles.ORDERED_MAT
          );
     }));

     // it('should have a optionsList after oninit ', fakeAsync(() => {
     //      component.ngOnInit();
     //      // let titles: any[] = [];
     //      tick(2000);
     //      // spyOn(stockService, 'getListData');
     //      fixture.whenStable().then(() => {
     //
     //           // expect(stockService.getListData).toHaveBeenCalledWith(option, 1);
     //      });

     //     expect(component.optionsList.length).toBeGreaterThan(1);
     // component.tableTitle$.subscribe((data)=> {
     //      titles = data;
     // })
     // tick(1000);
     // component.tableTitle$;
     //  }));
     //contractorDetails
     // void this.router.navigate([`${CONTRACTORS_API_PATHS.DETAILS}${$id}`]);

     it('should call getListData', fakeAsync(() => {
          const option = STOCK_API_OPTIONS.ASSORT;
          const component = fixture.componentInstance;
          const stockServiceSpy = spyOn(stockService, 'getListData');
          component.onAssortFormChange(100);
          expect(stockServiceSpy).toHaveBeenCalledWith(option, 100);
     }));

     // it('should call redirect to orders details', fakeAsync(() => {
     //      const component = fixture.componentInstance;
     //      const navigateSpy = spyOn(router, 'navigate');
     //      component.contractorDetails(100);
     //      tick();
     //      expect(navigateSpy).toHaveBeenCalledWith([`${CONTRACTORS_API_PATHS.DETAILS}${100}`]);
     // }));

     // it('should call onWarehouseFormChange', fakeAsync(() => {
     //      const option = STOCK_API_OPTIONS.WAREHOUSE;
     //      component = fixture.componentInstance;
     //      component.onWarehouseFormChange(1);
     //      spyOn(stockService, 'getListData');
     //      fixture.whenStable().then(() => {
     //           expect(stockService.getListData).toHaveBeenCalledWith(option, 1);
     //      });
     // }));

     it('should call getListData after run onWarehouseFormChange', () => {
          const option = STOCK_API_OPTIONS.WAREHOUSE;
          const component = fixture.componentInstance;
          const stockServiceSpy = spyOn(stockService, 'getListData');
          component.onWarehouseFormChange(1);
          expect(stockServiceSpy).toHaveBeenCalledWith(option, 1);

          // component = fixture.componentInstance;
          // component.onWarehouseFormChange(1);

          //      fixture.detectChanges();
          //      const compiled = fixture.debugElement.nativeElement;
          //      expect(compiled.querySelector('h5').textContent).toContain(STOCK_TABLES.LIST);
     });

     // it('should call onAssortFormChange', fakeAsync(() => {
     //      const option = STOCK_API_OPTIONS.ASSORT;
     //      component = fixture.componentInstance;
     //      component.onWarehouseFormChange(1);
     //      spyOn(stockService, 'getListData');
     //      fixture.whenStable().then(() => {
     //           expect(stockService.getListData).toHaveBeenCalledWith(option, 1);
     //      });
     // }));
     // it('should call onOptionFormChange', fakeAsync(() => {
     //      const option = STOCK_API_OPTIONS.FABRIC;
     //      component = fixture.componentInstance;
     //      component.onWarehouseFormChange(1);
     //      spyOn(stockService, 'getListData');
     //      fixture.whenStable().then(() => {
     //           expect(stockService.getListData).toHaveBeenCalledWith(option, 1);
     //      });
     // }));
     it('should call getListData after run onOptionFormChange', () => {
          const option = STOCK_API_OPTIONS.ASSORT;
          const component = fixture.componentInstance;
          const stockServiceSpy = spyOn(stockService, 'getListData');
          component.onAssortFormChange(1);
          expect(stockServiceSpy).toHaveBeenCalledWith(option, 1);
     });
});
