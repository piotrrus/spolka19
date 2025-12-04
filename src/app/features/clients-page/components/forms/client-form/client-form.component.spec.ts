import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ClientFormComponent } from './client-form.component';

describe('ClientFormComponent', () => {
     let component: ClientFormComponent;
     let fixture: ComponentFixture<ClientFormComponent>;

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
               declarations: [ClientFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ClientFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Client Form ', () => {
          it('should main form has no errors', () => {
               const form = component.form;
               form.lastname?.setValue('aaa');
               form.client_nr?.setValue('aaa');
               form.firstname?.setValue('zzz');
               form.email?.setValue('zzz@wp.pl');
               expect(form.form.errors).toBeNull();
          });

          it('should form field lastname has length error', () => {
               const lastname = component.form.lastname;
               lastname?.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
               expect(lastname?.hasError('maxlength')).toBeTruthy();
          });
          // it('should form field lastname has pattern', () => {
          //      const lastname = component.form.lastname;
          //      lastname?.setValue('12345678999');
          //      expect(lastname?.hasError('textValidator')).toBeTruthy();
          // });
          it('should form field lastname has no errors', () => {
               const lastname = component.form.lastname;
               lastname?.setValue('aaaaaaa');
               expect(lastname?.errors).toBeNull();
          });
          it('should form field firstname has no errors', () => {
               const firstname = component.form.firstname;
               firstname?.setValue('aaaaaaa');
               expect(firstname?.errors).toBeNull();
          });

          it('should form field email has email error', () => {
               const email = component.form.email;
               email?.setValue('aaa@wp.pl');
               expect(email?.errors).toBeNull();
          });

          it('should form field email has no errors', () => {
               const email = component.form.email;
               email?.setValue('aaa');
               expect(email?.errors).toBeTruthy();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.lastname?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit not errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               const form = component.form;
               form.lastname?.setValue('aaa');
               form.client_nr?.setValue('aaa');
               form.firstname?.setValue('zzz');
               form.email?.setValue('zzz@wp.pl');

               expect(spy).toHaveBeenCalledWith(true);
          });

          // it('should form change emit value', () => {
          //      const spy = spyOn(component.formChange, 'emit');
          //      component.form.lastname?.setValue('aaaa');
          //      expect(spy).toHaveBeenCalledTimes(1);
          // });

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

          it('should get maxlength error message', () => {
               expect(component.getErrorMessage('maxlength')).toEqual(
                    'Przekroczono dopuszczalną ilość znaków.'
               );
          });

          it('should form filled with data', () => {
               component.clientDetails = {
                    id: 123,
                    client_nr: 'zx-789',
                    firstname: 'aaa',
                    lastname: 'aaa',
                    email: 'zzz@wp.pl',
                    phone: '234456678',
               };
               fixture.detectChanges();
               expect(component.form.client_nr?.value).toBe('zx-789');
          });

          it('should form filled with no data', () => {
               component.clientDetails = null;
               fixture.detectChanges();
               expect(component.form.client_nr?.value).toEqual('');
          });
     });
});
