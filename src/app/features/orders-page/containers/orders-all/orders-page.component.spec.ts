import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { OrdersPageComponent } from './orders-page.component';
import { OrdersService } from '@features/orders-page/services/orders.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Order } from '@features/orders-page/models/orders.interface';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { OrdersAllTableComponent } from '@features/orders-page/components/tables/orders-all-table/orders-all-table.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ORDERS_API_PATHS } from '@features/orders-page/enums/orders.paths.enum';
import { Router } from '@angular/router';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import { ordersData } from '@features/orders-page/stubs/orders-table.stub';

describe('OrdersPageComponent', () => {
     let component: OrdersPageComponent;
     let fixture: ComponentFixture<OrdersPageComponent>;
     let service: OrdersService;
     let httpTestingController: HttpTestingController;
     let router: Router;

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
                    MatDialogModule,
                    NgxDatatableModule,
               ],
               declarations: [
                    OrdersPageComponent,

                    TableHeaderComponent,
                    OrdersAllTableComponent,
                    SimpleFilterFormComponent,
               ],
               providers: [
                    OrdersService,
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

          fixture = TestBed.createComponent(OrdersPageComponent);
          component = fixture.componentInstance;
          service = TestBed.inject(OrdersService);
          httpTestingController = TestBed.inject(HttpTestingController);
          router = TestBed.inject(Router);
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     // it('should render no data template', () => {
     //      component.tempTable = [];
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('.alert').textContent).toContain('Nie znaleziono danych');
     // });

     it('should render warehouse table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Order[] = ordersData;

          component.tableData = data;
          component.tempTable = data;
          component.dataLength = data.length;
          component.tableTitle = 'abc';
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain('abc');
     }));

     it('should render orders table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Order[] = ordersData;

          component.tableData = data;
          component.tempTable = data;
          component.dataLength = data.length;

          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-orders-all-table')).toBeTruthy();
     }));

     it('should be call orders service with get method', () => {
          component.ordersStatusId = null;
          service.getOrdersList(component.ordersStatusId).subscribe();
          const req = httpTestingController.expectOne(ORDERS_API_PATHS.LIST, 'get data from api');
          expect(req.request.method).toBe('GET');
     });

     // it('should fill felt form input', fakeAsync(() => {
     //      const input = fixture.nativeElement.querySelector('input');
     //      input.value = 'test name';
     //      input.dispatchEvent(new Event('input'));

     //      fixture.detectChanges();
     //      const name = component.form.name;
     //      expect(name?.value).toEqual('test name');
     // }));

     it('should filter main data', fakeAsync(() => {
          const data: Order[] = ordersData;

          component.tableData = data;
          component.tempTable = data;
          component.dataLength = data.length;
          component.updateFilter('aaa');
          fixture.detectChanges();
          tick(1000);
          expect(component.tempTable.length).toEqual(2);
     }));

     // it('should call redirect to orders details', fakeAsync(() => {
     //      const component = fixture.componentInstance;
     //      const navigateSpy = spyOn(router, 'navigate');
     //      // component.navigateToOrderDetails() showOrderDetails(100);
     //      expect(navigateSpy).toHaveBeenCalledWith([`${ORDERS_API_PATHS.DETAILS}${100}`]);
     // }));

     it('should call redirect to client details', fakeAsync(() => {
          const component = fixture.componentInstance;
          const navigateSpy = spyOn(router, 'navigate');
          component.navigateToClientDetails(100);
          expect(navigateSpy).toHaveBeenCalledWith([`${CLIENTS_API_PATHS.DETAILS}${100}`]);
     }));
});
