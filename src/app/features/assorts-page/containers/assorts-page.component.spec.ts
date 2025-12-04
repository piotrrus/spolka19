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
import { of } from 'rxjs';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '@shared/modules/data-table/simple-filter-form/simple-filter-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AssortList } from '../models/assorts.interface';
import { AssortsService } from '../services/assorts.service';
import { AssortsPageComponent } from './assorts-page.component';
import { AssortsTableComponent } from '../components/tables/assorts-table.component';

describe('AssortsPageComponent', () => {
     let component: AssortsPageComponent;
     let fixture: ComponentFixture<AssortsPageComponent>;

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
                    NgxDatatableModule,
               ],
               declarations: [
                    AssortsPageComponent,
                    TableHeaderComponent,
                    AssortsTableComponent,
                    SimpleFilterFormComponent,
               ],
               providers: [AssortsService],
          }).compileComponents();

          fixture = TestBed.createComponent(AssortsPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
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

     // it('should render title in a h5 tag', () => {
     //      fixture.detectChanges();
     //      const compiled = fixture.debugElement.nativeElement;
     //      expect(compiled.querySelector('h5').textContent).toContain('Lista asortymentu');
     // });

     it('should render assorts table header', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: AssortList[] = [
               {
                    id: 1,
                    name: 'garnitur',
               },
          ];
          component.newTableData$ = of(data);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-table-header')?.textContent).toContain('Lista dodatków');
     }));

     it('should render assorts table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: AssortList[] = [
               {
                    id: 1,
                    name: 'garnitur',
               },
          ];
          component.newTableData$ = of(data);
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('app-assorts-table')).toBeTruthy();
     }));
});
