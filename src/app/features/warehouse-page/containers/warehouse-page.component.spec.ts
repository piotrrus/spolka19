import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { WarehousePageComponent } from './warehouse-page.component';
import { WarehouseService } from '../services/warehouse-service';
import { of } from 'rxjs';
import { Warehouse } from '../models/warehouse.interface';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { WarehousesTableComponent } from '../components/tables/warehouses-table.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { WarehouseDataStore } from '../services/warehouse-data-store';
import { WarehouseModalHelper } from '../helpers/warehouse-modal.helper';
import { ContractorsDataStore } from '@features/contractors-page/services/contractors-crud-facade';
import { ContractorsService } from '@features/contractors-page/services/contractor-service';

describe('WarehousePageComponent', () => {
     let component: WarehousePageComponent;
     let fixture: ComponentFixture<WarehousePageComponent>;

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
                    WarehousePageComponent,
                    TableHeaderComponent,
                    WarehousesTableComponent,
                    SimpleFilterFormComponent,
               ],
               providers: [
                    WarehouseService,
                    WarehouseDataStore,
                    WarehouseModalHelper,
                    ContractorsDataStore,
                    ContractorsService,
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

          fixture = TestBed.createComponent(WarehousePageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render warehouse table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Warehouse[] = [
               {
                    id: 1,
                    name: 'pierwszy',
                    address: 'gdanska 123',
                    factory: 'zzz',
                    phone: '222222',
               },
          ];
          component.filteredTableData$ = of(data);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain(
               'Lista magazynów'
          ); //OK
     }));

     it('should render warehouse table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Warehouse[] = [
               {
                    id: 1,
                    name: 'pierwszy',
                    address: 'gdanska 123',
                    factory: 'zzz',
                    phone: '222222',
               },
          ];
          component.filteredTableData$ = of(data);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-warehouses-table')).toBeTruthy(); //OK
     }));
});
