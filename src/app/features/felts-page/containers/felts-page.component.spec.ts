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
import { of } from 'rxjs';

import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FeltsPageComponent } from './felts-page.component';
import { FeltsService } from '../services/felts-services';
import { FeltsTableComponent } from '../components/tables/felts-table.component';
import { Felt } from '../models/felt.interface';
import { FeltsDataStore } from '../services/felts-crud-facade';
import { FeltModalHelper } from '../helpers/felt-modal.helper';

describe('FeltsPageComponent', () => {
     let component: FeltsPageComponent;
     let fixture: ComponentFixture<FeltsPageComponent>;
     // let componentTableHeader: TableHeaderComponent;
     // let fixtureTableHeader: ComponentFixture<TableHeaderComponent>;

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
                    FeltsPageComponent,

                    TableHeaderComponent,
                    FeltsTableComponent,
                    SimpleFilterFormComponent,
               ],

               providers: [
                    FeltsService,
                    FeltsDataStore,
                    FeltModalHelper,
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

          fixture = TestBed.createComponent(FeltsPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          // fixtureTableHeader = TestBed.createComponent(TableHeaderComponent);
          // componentTableHeader = fixtureTableHeader.componentInstance;
          // fixtureTableHeader.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     // it('should render no data template', () => {
     //      component.tableData$ = of([]);
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('.alert').textContent).toContain('Nie znaleziono danych');
     // });

     it('should render felts table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Felt[] = [
               {
                    id: 1,
                    name: 'pierwszy',
               },
          ];
          component.tableData$ = of(data);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain('Lista filców'); //OK
     }));

     it('should render felts table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: Felt[] = [
               {
                    id: 1,
                    name: 'abc',
               },
          ];
          component.tableData$ = of(data);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-felts-table')).toBeTruthy();
     }));

     // describe('#Table ', () => {
     //      it('should form emit value', () => {
     //           const formData = 'abc';
     //           const spy = spyOn(componentTableHeader.filterData, 'emit');
     //           componentTableHeader.onFormChange(formData);
     //           expect(spy).toHaveBeenCalledWith(formData);
     //      });

     //      it('should add New Item emit value', () => {
     //           const spy = spyOn(componentTableHeader.addNewItem, 'emit');
     //           componentTableHeader.addNew();
     //           expect(spy).toHaveBeenCalledWith(true);
     //      });
     // });
});
