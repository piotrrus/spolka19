import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ShoesFormComponent } from './shoes-form.component';

describe('ShoesFormComponent', () => {
     let component: ShoesFormComponent;
     let fixture: ComponentFixture<ShoesFormComponent>;

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
               declarations: [ShoesFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ShoesFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Shoes Form ', () => {
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

          // it('should form emit errors', () => {
          //      const spy = spyOn(component.isFormValid, 'emit');
          //      component.form.model?.setValue(null);
          //      expect(spy).toHaveBeenCalledWith(false);
          // });

          it('should form emit no error', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.quantity?.setValue(8);
               component.form.contractorId?.setValue(1);
               component.form.size?.setValue(40);
               component.form.name?.setValue('aaa');
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.quantity?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.name?.setValue('aaaa');
               component.form.size?.setValue(42);
               component.form.contractorId?.setValue(1);
               expect(spy).toHaveBeenCalledTimes(1);
          });

          // it('should form emit errors', () => {
          //      const spy = spyOn(component.isFormValid, 'emit');
          //      const form = component.form;
          //      form.orderDate?.setValue(null);
          //      expect(spy).toHaveBeenCalledWith(false);
          // });

          // it('should form emit errors', () => {
          //      const spy = spyOn(component.isFormValid, 'emit');
          //      component.form.orderDate?.setValue('asdasda');
          //      expect(spy).toHaveBeenCalledWith(true);
          // });

          // it('should form change emit value', () => {
          //      const spy = spyOn(component.formChange, 'emit');
          //      component.form.orderDate?.setValue('sdfsfsdf');
          //      expect(spy).toHaveBeenCalledTimes(1);
          // });

          it('should component has oninit call checkFormAndEmit', () => {
               const spy = spyOn(component, 'checkFormAndEmit');
               component.ngOnInit();
               expect(spy).toHaveBeenCalledTimes(1);
          });

          // it('should get required error message', () => {
          //      const spy = spyOn(component, 'getErrorMessage');
          //      const input = fixture.nativeElement.querySelector('input');
          //      input.value = '';
          //      input.dispatchEvent(new Event('input'));
          //      fixture.detectChanges();
          //      expect(spy).toHaveBeenCalledWith('required');
          // });

          // it('should get required error message', () => {
          //      expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
          // });

          // it('should filled contractors list input', () => {
          //      component.contractors = [{
          //           id: 123,
          //           name: 'zx-789',
          //           email: 'aaa@wp.pl'

          //      }]
          //      expect(component.form.
          // id: number;
          // name: string;
          // email: string;

          // it('should form filled with data', () => {
          //      component.formData = {
          //           name: 'aaa',
          //           contractorId: 1,
          //           buyingPrice: '',
          //           sellingPrice: '',
          //           quantity: 3,
          //           size: '42',
          //      };
          //      fixture.detectChanges();
          //      expect(component.form.contractorId?.value).toBe(1);
          // });

          // it('should form filled with no data', () => {
          //      component.formData = null;
          //      fixture.detectChanges();
          //      expect(component.form.contractorId?.value).toEqual(null);
          // });
     });
});
