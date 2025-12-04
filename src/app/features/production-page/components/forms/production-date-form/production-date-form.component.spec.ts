import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductionDateFormComponent } from './production-date-form.component';

describe('ProductionDateFormComponent', () => {
     let component: ProductionDateFormComponent;
     let fixture: ComponentFixture<ProductionDateFormComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
               ],
               declarations: [ProductionDateFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ProductionDateFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Production Date Form ', () => {
          it('should order Date has no errors', () => {
               const orderDate = component.form.data_przek_do_prod;
               orderDate?.setValue('aaa');
               expect(component.form.form.errors).toBeNull();
          });

          it('should form field order Date has error', () => {
               const orderDate = component.form.data_przek_do_prod;
               orderDate?.setValue(null);
               expect(orderDate?.errors).toBeTruthy();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               const form = component.form;
               form.data_przek_do_prod?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.data_przek_do_prod?.setValue('asdasda');
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.data_przek_do_prod?.setValue('sdfsfsdf');
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should form filled with data', () => {
               component.formData = '2024-12-12';
               fixture.detectChanges();
               expect(component.form.data_przek_do_prod?.value).toBe('2024-12-12');
          });

          it('should form filled with no data', () => {
               component.formData = null;
               fixture.detectChanges();
               expect(component.form.data_przek_do_prod?.value).toBe('');
          });

          describe('#Form Errors Msg', () => {
               it('should get required error message', () => {
                    expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
               });

               it('should not get an error message', () => {
                    expect(component.getErrorMessage('test')).toEqual('');
               });
          });
     });
});
