import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductionNrFormComponent } from './production-nr-form.component';

describe('ProductionNrFormComponent', () => {
     let component: ProductionNrFormComponent;
     let fixture: ComponentFixture<ProductionNrFormComponent>;

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
               declarations: [ProductionNrFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ProductionNrFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Production Nr Form ', () => {
          it('should form has no errors', () => {
               const form = component.form;
               component.form.prod_order?.setValue('aaa');
               expect(form.form.errors).toBeNull();
          });
          it('should form has errors', () => {
               const form = component.form;
               form.prod_order?.setValue(null);
               expect(form.form.errors).toBeNull();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               const form = component.form;
               form.prod_order?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               const form = component.form;
               form.prod_order?.setValue('aaaa');
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               const form = component.form;
               form.prod_order?.setValue('aaaa');
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should form filled with data', () => {
               component.formData = 'abc';
               fixture.detectChanges();
               expect(component.form.prod_order?.value).toBe('abc');
          });

          it('should form filled with no data', () => {
               component.formData = null;
               fixture.detectChanges();
               expect(component.form.prod_order?.value).toBe('');
          });

          it('should component has oninit call checkFormAndEmit', () => {
               const spy = spyOn(component, 'checkFormAndEmit');
               component.ngOnInit();
               expect(spy).toHaveBeenCalledTimes(1);
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
