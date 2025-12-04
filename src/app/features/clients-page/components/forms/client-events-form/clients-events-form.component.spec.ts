import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ClientEventFormComponent } from './client-events-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DATE_FORMATS } from '@shared/enums/date-formats.enum';

describe('ClientsEventsFormComponent', () => {
     let component: ClientEventFormComponent;
     let fixture: ComponentFixture<ClientEventFormComponent>;

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
                    MatDatepickerModule,
                    MatCardModule,
               ],
               declarations: [ClientEventFormComponent],
               providers: [
                    {
                         provide: DateAdapter,
                         useClass: MomentDateAdapter,
                         deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                    },
                    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
               ],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ClientEventFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#ClientPage Events Form ', () => {
          it('should form has no errors', () => {
               const eventDate = component.form.deliveryDate;
               eventDate?.setValue('2024-10-09');
               expect(component.form.form.errors).toBeNull();
          });

          it('should form has no errors', () => {
               const eventDate = component.form.probeDate;
               eventDate?.setValue('2024-10-09');
               expect(component.form.form.errors).toBeNull();
          });

          it('should form has no errors', () => {
               const eventDate = component.form.measureDate;
               eventDate?.setValue('2024-10-09');
               expect(component.form.form.errors).toBeNull();
          });
          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.measureDate?.setValue('2020-10-09');
               expect(spy).toHaveBeenCalledWith(false);
          });
          it('should form has matDatepickerMin errors', () => {
               const eventDate = component.form.measureDate;
               eventDate?.setValue('2020-10-09');
               expect(eventDate?.hasError('matDatepickerMin')).toBeTruthy();
          });

          // it('should form change emit value', () => {
          //      const spy = spyOn(component.formChange, 'emit');
          //      component.form.probeDate?.setValue('2024-12-09');
          //      expect(spy).toHaveBeenCalledTimes(1);
          // });
          it('should form filled with data', () => {
               component.clientEvents = {
                    measureDate: '2020-12-10',
                    probeDate: '2024-12-09',
                    deliveryDate: '2024-12-19',
               };
               fixture.detectChanges();
               expect(component.form.measureDate?.value).toBe('2020-12-10');
          });

          it('should form filled with no data', () => {
               component.clientEvents = null;
               fixture.detectChanges();
               expect(component.form.measureDate?.value).toBe('');
          });
     });

     //      it('should form has no errors', () => {
     //      const orderDate = component.form.deliveryDate;
     //      orderDate?.setValue('2024-10-09');
     //      expect(component.form.form.errors).toBeNull();
     // });

     // it('should form has no errors', () => {
     //      const orderDate = component.form.measureDate;
     //      orderDate?.setValue('2024-10-09');
     //      expect(component.form.form.errors).toBeNull();
     // });

     // it('should form field measureDate has no error', () => {
     //      const name = component.form.measureDate;
     //      name?.setValue(null);
     //      expect(name?.errors).toBeFalsy();
     // });

     // it('should form field deliveryDate has no error', () => {
     //      const name = component.form.deliveryDate;
     //      name?.setValue(null);
     //      expect(name?.errors).toBeFalsy();
     // });

     // it('should form field name has max length error', () => {
     //      const name = component.form.name;
     //      name?.setValue('aaaaaaaaaaaaa');
     //      expect(name?.errors).toBeTruthy();
     // });
     // it('should form emit not errors', () => {
     //      const spy = spyOn(component.isFormValid, 'emit');
     //      component.form.name?.setValue('abc 122');
     //      expect(spy).toHaveBeenCalledWith(true);
     // });
     // it('should form emit errors', () => {
     //      const spy = spyOn(component.isFormValid, 'emit');
     //      component.form.name?.setValue(null);
     //      expect(spy).toHaveBeenCalledWith(false);
     // });
     // it('should form change emit value', () => {
     //      const spy = spyOn(component.formChange, 'emit');
     //      component.form.name?.setValue('aaaa');
     //      expect(spy).toHaveBeenCalledTimes(1);
     // });
     // it('should component has form set by input value', () => {
     //      const formValue = 'filc';
     //      const data: Felt = {
     //           id: 1,
     //           name: formValue,
     //      };
     //      component.formData = data;
     //      const name = component.form.name;
     //      expect(name?.value).toEqual(formValue);
     // });
     // it('should component has form set with no errors by input value', () => {
     //      const formValue = 'filc';
     //      const data: Felt = {
     //           id: 1,
     //           name: formValue,
     //      };
     //      component.formData = data;
     //      const name = component.form.name;
     //      expect(name?.errors).toBeNull();
     // });
     // it('should isFormValid flag is false when form initialize', () => {
     //      expect(component.form).toBeInstanceOf(FeltForm);
     // });
     // it('should component has oninit call checkFormAndEmit', () => {
     //      const spy = spyOn(component, 'checkFormAndEmit');
     //      component.ngOnInit();
     //      expect(spy).toHaveBeenCalledTimes(1);
     // });
     // it('should fill felt form input', fakeAsync(() => {
     //      const input = fixture.nativeElement.querySelector('input');
     //      input.value = 'test name';
     //      input.dispatchEvent(new Event('input'));
     //      fixture.detectChanges();
     //      const name = component.form.name;
     //      expect(name?.value).toEqual('test name');
     // }));
     // it('should get required error message', () => {
     //      const spy = spyOn(component, 'getErrorMessage');
     //      const input = fixture.nativeElement.querySelector('input');
     //      input.value = '';
     //      input.dispatchEvent(new Event('input'));
     //      fixture.detectChanges();
     //      expect(spy).toHaveBeenCalledWith('required');
     // });

     it('should get required error message', () => {
          expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
     });

     it('should not get an error message', () => {
          expect(component.getErrorMessage('test')).toEqual('');
     });
});
