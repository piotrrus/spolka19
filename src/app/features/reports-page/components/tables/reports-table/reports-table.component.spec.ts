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
import { ReportsTableComponent } from './reports-table.component';
import { TableColumns } from '@shared/interfaces/table-columns.interface';

describe('ReportsTableComponent', () => {
     let component: ReportsTableComponent;
     let fixture: ComponentFixture<ReportsTableComponent>;

     beforeEach(async(() => {
          TestBed.configureTestingModule({
               declarations: [ReportsTableComponent],
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
                    NgxDatatableModule,
               ],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(ReportsTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     it('should table has a columns', () => {
          const tableColumns: TableColumns[] = [
               { name: 'Miesiąc', prop: 'month', width: '100' },
               { name: 'Asortyment', prop: 'art_name', width: '100' },
               { name: 'Ilość', prop: 'amount', width: '100' },
               { name: 'Wartość', prop: 'price', width: '100' },
          ];
          expect(component.dataTableColumns).toEqual(tableColumns);
     });

     // it('should render title', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('h5').textContent).toContain('Asortyment w magazynie');
     // });

     // it('should render title', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('app-table-header').textContent).toContain('Lista zamówień');
     // });
});
