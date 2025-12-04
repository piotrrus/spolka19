import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FeltFormComponent } from './felt-form.component';
import { Felt } from '@features/felts-page/models/felt.interface';

describe('FeltFormComponent', () => {
     let component: FeltFormComponent;
     let fixture: ComponentFixture<FeltFormComponent>;

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
               declarations: [FeltFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(FeltFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Felt Form ', () => {
          it('should form has no errors', () => {
               const orderDate = component.form.name;
               orderDate?.setValue('aaa');
               expect(component.form.form.errors).toBeNull();
          });

          it('should form field name has error', () => {
               const name = component.form.name;
               name?.setValue(null);
               expect(name?.errors).toBeTruthy();
          });

          it('should form field name has max length error', () => {
               const name = component.form.name;
               name?.setValue('aaaaaaaaaaaaa');
               expect(name?.errors).toBeTruthy();
          });

          it('should form emit not errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.name?.setValue('abc 122');
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.name?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.name?.setValue('aaaa');
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should component has form set by input value', () => {
               const formValue = 'filc';
               const data: Felt = {
                    id: 1,
                    name: formValue,
               };

               component.formData = data;
               const name = component.form.name;
               expect(name?.value).toEqual(formValue);
          });

          it('should component has form set with no errors by input value', () => {
               const formValue = 'filc';
               const data: Felt = {
                    id: 1,
                    name: formValue,
               };
               component.formData = data;
               const name = component.form.name;
               expect(name?.errors).toBeNull();
          });

          it('should fill felt form input', fakeAsync(() => {
               const input = fixture.nativeElement.querySelector('input');
               input.value = 'test name';
               input.dispatchEvent(new Event('input'));

               fixture.detectChanges();
               const name = component.form.name;
               expect(name?.value).toEqual('test name');
          }));

          it('should get required error message', () => {
               const spy = spyOn(component, 'getErrorMessage');
               const input = fixture.nativeElement.querySelector('input');
               input.value = '';
               input.dispatchEvent(new Event('input'));
               fixture.detectChanges();
               expect(spy).toHaveBeenCalledWith('required');
          });

          it('should get required error message', () => {
               expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
          });

          it('should not get an error message', () => {
               expect(component.getErrorMessage('test')).toEqual('');
          });

          it('should form filled with no data', () => {
               component.formData = null;
               fixture.detectChanges();
               expect(component.form.name?.value).toBe('');
          });
     });
});
