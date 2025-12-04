import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LiningFormComponent } from './lining-form.component';
import { liningsData } from '@features/lining-page/stubs/linings-table.stub';

describe('LiningFormComponent', () => {
     let component: LiningFormComponent;
     let fixture: ComponentFixture<LiningFormComponent>;

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
               declarations: [LiningFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(LiningFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Lining Form ', () => {
          it('should form has no errors', () => {
               const form = component.form;
               form.name?.setValue('aaa');
               expect(form.form.errors).toBeNull();
          });

          it('should form field name has length error', () => {
               const name = component.form.name;
               name?.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
               expect(name?.hasError('maxlength')).toBeTruthy();
          });

          it('should form field name has no errors', () => {
               const name = component.form.name;
               name?.setValue('aaaaaaa');
               expect(name?.errors).toBeNull();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.name?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit not errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               const form = component.form;
               form.name?.setValue('aaa');
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.name?.setValue('aaaa');
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should component has form set by input value', () => {
               component.formData = liningsData;
               const name = component.form.name;
               expect(name?.value).toEqual('podszewka');
          });

          it('should component has form set with no errors by input value', () => {
               component.formData = liningsData;
               const name = component.form.name;
               expect(name?.errors).toBeNull();
          });
     });
     it('should component has oninit call checkFormAndEmit', () => {
          const spy = spyOn(component, 'checkFormAndEmit');
          component.ngOnInit();
          expect(spy).toHaveBeenCalledTimes(1);
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
          expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
     });

     it('should not get an error message', () => {
          expect(component.getErrorMessage('test')).toEqual('');
     });

     it('should form filled with data', () => {
          component.formData = liningsData;
          fixture.detectChanges();
          expect(component.form.name?.value).toBe('podszewka');
     });

     it('should form filled with no data', () => {
          component.formData = null;
          fixture.detectChanges();
          expect(component.form.name?.value).toBe('');
     });
});
