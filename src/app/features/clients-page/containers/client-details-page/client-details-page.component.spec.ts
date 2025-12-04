import { ComponentFixture, TestBed } from '@angular/core/testing';
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
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientsTableComponent } from '@features/clients-page/components/tables/clients-table/clients-table.component';
import { ClientsService } from '@features/clients-page/services/clients-service';
import { ClientDetailsPageComponent } from './client-details-page.component';
import { ClientOrdersService } from '@features/clients-page/services/client-orders-service';
import { ClientsDataStore } from '@features/clients-page/client-store/client-crud-facade';
import { ClientsEventsStore } from '@features/clients-page/client-store/client-events-crud-facade';
import { ClientsMeasuresStore } from '@features/clients-page/client-store/client-measures-crud-facade';
import { ClientMeasuresService } from '@features/clients-page/services/client-measures-service';
import { ClientEventsService } from '@features/clients-page/services/client-events-service';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { CdkAccordionModule } from '@angular/cdk/accordion';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ClientFormComponent } from '@features/clients-page/components/forms/client-form/client-form.component';
import { ClientMeasuresFormComponent } from '@features/clients-page/components/forms/client-measures-form/client-measures-form.component';
import { ClientEventFormComponent } from '@features/clients-page/components/forms/client-events-form/client-events-form.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {
     MAT_MOMENT_DATE_ADAPTER_OPTIONS,
     MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { DATE_FORMATS } from '@shared/enums/date-formats.enum';
import { MatDatepickerModule } from '@angular/material/datepicker';
describe('ClientDetailsPageComponent', () => {
     let component: ClientDetailsPageComponent;
     let fixture: ComponentFixture<ClientDetailsPageComponent>;

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
                    MatDatepickerModule,
                    AccordionModule,
               ],
               declarations: [
                    ClientDetailsPageComponent,
                    TableHeaderComponent,
                    ClientsTableComponent,
                    SimpleFilterFormComponent,
                    ClientFormComponent,
                    ClientMeasuresFormComponent,
                    ClientEventFormComponent,
               ],
               providers: [
                    ClientsService,
                    ClientOrdersService,
                    ClientsDataStore,
                    ClientsEventsStore,
                    ClientsMeasuresStore,
                    ClientMeasuresService,
                    ClientEventsService,
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
                    {
                         provide: DateAdapter,
                         useClass: MomentDateAdapter,
                         deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                    },
                    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
               ],
          }).compileComponents();

          fixture = TestBed.createComponent(ClientDetailsPageComponent);
          component = fixture.componentInstance;
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

     // it('should render title in a h5 tag', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('h5').textContent).toContain('Lista magazynów');
     // });

     // it('should render warehouse table header', fakeAsync(() => {
     //      const compiled = fixture.debugElement.nativeElement;
     //      const data: Client[] = [
     //           {
     //                id: 1,
     //                firstname: 'pierwszy',
     //                client_nr: 'gdanska 123',
     //                lastname: 'zzz',
     //                phone: '222222',
     //                email: 'aaaa@wp.pl',
     //                contact: '',
     //                consumption_standard: '',
     //                notices: '',
     //           },
     //      ];
     //      component.tempTable = data;
     //      fixture.detectChanges();
     //      tick(1000);
     //      expect(compiled.querySelector('app-table-header')?.textContent).toContain('Lista klientów'); //OK
     // }));

     // it('should render warehouse table', fakeAsync(() => {
     //      const compiled = fixture.debugElement.nativeElement;
     //      const data: Warehouse[] = [
     //           {
     //                id: 1,
     //                firstname: 'pierwszy',
     //                client_nr: 'gdanska 123',
     //                lastname: 'zzz',
     //                phone: '222222',
     //                email: 'aaaa@wp.pl',
     //                contact: '',
     //                consumption_standard: '',
     //                notices: '',
     //           },
     //      ];
     //      component.tempTable = data;
     //      fixture.detectChanges();
     //      tick(1000);
     //      expect(compiled.querySelector('app-warehouses-table')).toBeTruthy(); //OK
     // }));
});
