import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
     let component: RegisterFormComponent;
     let fixture: ComponentFixture<RegisterFormComponent>;

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
               ],
               declarations: [RegisterFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(RegisterFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Register Form ', () => {
          it('should form has no errors', () => {
               const field1 = component.form.email;
               const field2 = component.form.name;
               const field3 = component.form.password;
               const field4 = component.form.c_password;
               field1?.setValue('aaa@wp.pl');
               field2?.setValue('aaaaaaaa');
               field3?.setValue('Tatry123!');
               field4?.setValue('Tatry123!');
               expect(component.form.form.errors).toBeNull();
          });
          // it('should form has errors', () => {
          //      const field = component.form.email;
          //      field?.setValue(null);
          //      expect(component.form.form.errors).toBeTruthy();
          // });

          // it('should form has errors', () => {
          //      const field = component.form.email;
          //      field?.setValue('aaa.wp.pl');
          //      expect(component.form.form.errors).toBeTruthy();
          // });
          it('should component has oninit call checkFormAndEmit', () => {
               const spy = spyOn(component, 'checkFormAndEmit');
               component.ngOnInit();
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should form field email has error', () => {
               const field = component.form.email;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field name has no errors', () => {
               const name = component.form.name;
               name?.setValue('aaaaaaaa');
               expect(name?.errors).toBeNull();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.name?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.email?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should get required error message', () => {
               const spy = spyOn(component, 'getErrorMessage');
               const input = fixture.nativeElement.querySelector('input');
               input.value = '';
               input.dispatchEvent(new Event('input'));
               fixture.detectChanges();
               expect(spy).toHaveBeenCalledWith('required');
          });

          it('should get required error message', () => {
               const spy = spyOn(component, 'getErrorMessage');
               const input = fixture.nativeElement.querySelector('input');
               input.value = 'a';
               input.dispatchEvent(new Event('input'));
               fixture.detectChanges();
               expect(spy).toHaveBeenCalledWith('minLength');
          });

          it('should get required error message', () => {
               expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
          });
     });
});
