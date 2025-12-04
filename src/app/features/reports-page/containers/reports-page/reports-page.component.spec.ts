import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { ReportsPageComponent } from './reports-page.component';
import { ReportsTableComponent } from '../../components/tables/reports-table/reports-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReportsService } from '../../services/reports.service';
import { ToastrModule } from 'ngx-toastr';
import { ReportdPrintTableHelper } from '@features/reports-page/helpers/reports-print-table.helper';
import { MatCardModule } from '@angular/material/card';

describe('ReportsPageComponent', () => {
     let component: ReportsPageComponent;
     let fixture: ComponentFixture<ReportsPageComponent>;

     beforeEach(async(() => {
          TestBed.configureTestingModule({
               declarations: [ReportsPageComponent, ReportsTableComponent],
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
                    NgxDatatableModule,
                    MatCardModule,
               ],
               providers: [ReportsService, ReportdPrintTableHelper],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(ReportsPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

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
     //      expect(compiled.querySelector('h5').textContent).toContain('Asortyment w magazynie');
     // });

     // it('should render title', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('h2').textContent).toContain('Lista zamówień');
     // });
});
