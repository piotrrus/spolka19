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
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '../simple-filter-form/simple-filter-form.component';

describe('TableHeaderComponent', () => {
     let component: TableHeaderComponent;
     let fixture: ComponentFixture<TableHeaderComponent>;

     beforeEach(async(() => {
          TestBed.configureTestingModule({
               declarations: [TableHeaderComponent, TableHeaderComponent, SimpleFilterFormComponent],
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
               providers: [],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(TableHeaderComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should form emit value', () => {
          const formData = 'abc';
          const spy = spyOn(component.filterData, 'emit');
          component.onFormChange(formData);
          expect(spy).toHaveBeenCalledWith(formData);
     });

     it('should add New Item emit value', () => {
          const spy = spyOn(component.addNewItem, 'emit');
          component.addNew();
          expect(spy).toHaveBeenCalledWith(true);
     });

     it('should render title', () => {
          const title = 'Title';
          component.title = title;
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('h2').textContent).toContain(title);
     });

     it('should render button if option', () => {
          component.noadd = false;
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('.btn-table-header')).toBeTruthy();
     });

     it('should not render button if not noadd', () => {
          component.noadd = true;
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('.btn-table-header')).toBeFalsy();
     });

     // it('should render button if option', () => {
     //      component.noadd = false;
     //      const compiled = fixture.debugElement.nativeElement;
     //      fixture.detectChanges();
     //      let button = compiled.querySelector('.btn-table-header');
     //      //fixture.debugElement.nativeElement.querySelector('.btn');
     //      button.click();
     //      fixture.detectChanges();
     //      fixture.whenStable().then(() => {
     //           expect(component.addNew).toHaveBeenCalled();
     //      });
     //      //  const compiled = fixture.debugElement.nativeElement;
     //      // expect(component.addNew()).toHaveBeenCalledTimes(1);
     //      // expect(compiled.querySelector('.btn-table-header')).toBeTruthy();
     // });
});
