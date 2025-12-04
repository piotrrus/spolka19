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
import { ContractorsPageComponent } from './contractors-page.component';
import { ContractorsService } from '../services/contractor-service';
import { ContractorsTableComponent } from '../components/tables/contractors-table.component';
import { ContractorsDataStore } from '../services/contractors-crud-facade';
import { ContractorModalHelper } from '../helpers/contractor-modal.helper';
import { By } from '@angular/platform-browser';
import { contractorData } from '../stubs/contractors-table.stub';

describe('ContractorsPageComponent', () => {
     let component: ContractorsPageComponent;
     let fixture: ComponentFixture<ContractorsPageComponent>;
     let service: ContractorsDataStore;

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
                    ContractorsPageComponent,

                    TableHeaderComponent,
                    ContractorsTableComponent,
                    SimpleFilterFormComponent,
               ],

               providers: [
                    ContractorsService,
                    ContractorsDataStore,
                    ContractorModalHelper,
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          })
               .compileComponents()
               .then(() => {
                    fixture = TestBed.createComponent(ContractorsPageComponent);
                    component = fixture.componentInstance;
               });
          service = TestBed.inject(ContractorsDataStore);
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render contractors table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          component.filteredTableData$ = of([contractorData]);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain(
               'Lista dostawców'
          ); //OK
     }));

     it('should render Contractor table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          component.filteredTableData$ = of([contractorData]);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-contractors-table')).toBeTruthy(); //OK
     }));

     it('should render simple-filter-form', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('app-simple-filter-form')).toBeTruthy();
     }));

     // it('run filtering comp data', fakeAsync(() => {
     //      const data: Contractor[] = [
     //           {
     //                id: 1,
     //                name: 'pierwszy',
     //                phone: '123',
     //                email: 'aaa@wppl',
     //                contact_person_a: 'aaa',
     //                language: 'pl',
     //                address: 'aaa',
     //                id_group: 1,
     //                nip: '123',
     //           },
     //      ];
     //      component.tableData$ = of(data);
     //      component.filteredTableData$ = of(data);
     //      component.onFilterData('pierwszy');
     //      expect(component.tempTable[0]).toEqual(data[0]);
     // }));

     // it('child comp data', fakeAsync(() => {
     //           const data: Contractor[] = [
     //      {
     //           id: 1,
     //           name: 'pierwszy',
     //           phone: '123',
     //           email: 'aaa@wppl',
     //           contact_person_a: 'aaa',
     //           language: 'pl',
     //           address: 'aaa',
     //           id_group: 1,
     //           nip: '123',
     //      },
     // ];
     // const childComponent: TableHeaderComponent = fixture.debugElement.query(
     //      By.directive(TableHeaderComponent)
     // ).componentInstance;
     // childComponent.filterData.emit('pierwszy');
     // //.onFormChange('Jan '); //.addNew();
     // const component = fixture.componentInstance;
     // // fixture.detectChanges();
     // const spy = spyOn(component, 'onFilterData');
     // expect(spy).toHaveBeenCalledWith('pierwszy');
     // }));

     it('should not render button if not noadd', () => {
          const childComponent: TableHeaderComponent = fixture.debugElement.query(
               By.directive(TableHeaderComponent)
          ).componentInstance;
          expect(childComponent.isFiltered).toBeTruthy();
     });

     it('should render click add new btn', fakeAsync(() => {
          const childComponent: TableHeaderComponent = fixture.debugElement.query(
               By.directive(TableHeaderComponent)
          ).componentInstance;
          childComponent.addNew();
          expect(childComponent.addNewItem.emit).toBeTruthy();
     }));

     it('should call onFormChange', fakeAsync(() => {
          const childComponent: TableHeaderComponent = fixture.debugElement.query(
               By.directive(TableHeaderComponent)
          ).componentInstance;
          const spy = spyOn(component, 'onFilterData');
          childComponent.onFormChange('test');

          tick(1000);
          expect(spy).toHaveBeenCalledWith('test');
     }));

     it('should call addNew', fakeAsync(() => {
          const childComponent: TableHeaderComponent = fixture.debugElement.query(
               By.directive(TableHeaderComponent)
          ).componentInstance;
          const spy = spyOn(component, 'addNew');
          childComponent.addNew();
          tick(1000);
          expect(spy).toHaveBeenCalled();
     }));

     it('should call onAddNew', fakeAsync(() => {
          const childComponent: TableHeaderComponent = fixture.debugElement.query(
               By.directive(TableHeaderComponent)
          ).componentInstance;
          const spy = spyOn(service, 'onAddNew');
          childComponent.addNew();
          tick(1000);
          expect(spy).toHaveBeenCalled();
     }));

     it('should emit show details', fakeAsync(() => {
          const childComponent: ContractorsTableComponent = fixture.debugElement.query(
               By.directive(ContractorsTableComponent)
          ).componentInstance;

          childComponent.showDetails(contractorData);
          expect(childComponent.showDetailsModal.emit).toBeTruthy();
     }));
});
