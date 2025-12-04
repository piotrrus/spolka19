import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { WarehouseFormComponent } from './warehouse-form.component';

describe('WarehouseFormComponent', () => {
     let component: WarehouseFormComponent;
     let fixture: ComponentFixture<WarehouseFormComponent>;

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
               declarations: [WarehouseFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(WarehouseFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Warehouse Form ', () => {
          it('should order Date has no errors', () => {
               const orderDate = component.form.name;
               orderDate?.setValue('aaa');
               expect(component.form.form.errors).toBeNull();
          });

          it('should form field order Date has error', () => {
               const orderDate = component.form.name;
               orderDate?.setValue(null);
               expect(orderDate?.errors).toBeTruthy();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.name?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.name?.setValue('abc');
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.name?.setValue('aaaa');
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should form filled with data', () => {
               component.formData = {
                    id: 123,
                    address: 'Katowice',
                    name: 'abc',
                    phone: '222333555',
                    factory: 'abc',
               };
               fixture.detectChanges();
               expect(component.form.name?.value).toBe('abc');
          });

          it('should form filled with no data', () => {
               component.formData = null;
               fixture.detectChanges();
               expect(component.form.name?.value).toBe('');
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
     });
});
