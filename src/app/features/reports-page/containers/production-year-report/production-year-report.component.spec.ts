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
import { ProductionYearReportComponent } from './production-year-report.component';
import { ReportsService } from '@features/reports-page/services/reports.service';
import { ToastrModule } from 'ngx-toastr';
import { ProductionReportdPrintTableHelper } from '@features/reports-page/helpers/production-report-print-table.helper';
import { MatCardModule } from '@angular/material/card';

describe('ProductionYearReportComponent', () => {
     let component: ProductionYearReportComponent;
     let fixture: ComponentFixture<ProductionYearReportComponent>;

     beforeEach(async(() => {
          TestBed.configureTestingModule({
               declarations: [ProductionYearReportComponent],
               imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatIconTestingModule,
                    MatCardModule,
                    NgxDatatableModule,
                    ToastrModule.forRoot(),
               ],
               providers: [ReportsService, ProductionReportdPrintTableHelper],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(ProductionYearReportComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
