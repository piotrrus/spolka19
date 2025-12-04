import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { OrderAssortFormComponent } from './order-assort-form.component';

describe('OrderAssortFormComponent', () => {
     let component: OrderAssortFormComponent;
     let fixture: ComponentFixture<OrderAssortFormComponent>;

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
               declarations: [OrderAssortFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(OrderAssortFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Order Assort Form ', () => {
          it('should order Date has no errors', () => {
               const orderDate = component.form.quantity;
               orderDate?.setValue(5);
               expect(component.form.form.errors).toBeNull();
          });

          it('should form field order Date has error', () => {
               const orderDate = component.form.quantity;
               orderDate?.setValue(null);
               expect(orderDate?.errors).toBeTruthy();
          });

          it('should form emit no error', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.quantity?.setValue(8);
               component.form.contractorId?.setValue(1);
               component.form.sellingPrice?.setValue(200);
               component.form.assortId?.setValue(1);
               component.form.buyingPrice?.setValue(100);
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.assortId?.setValue(1);
               component.form.quantity?.setValue(5);
               component.form.sellingPrice?.setValue(500);
               component.form.buyingPrice?.setValue(500);

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

          it('should form filled with data', () => {
               component.formData = {
                    assortId: 1,
                    name: 'aaa',
                    contractorId: 1,
                    buyingPrice: '',
                    sellingPrice: '',
                    quantity: 3,
                    model: 'aaa',
               };
               fixture.detectChanges();
               expect(component.form.assortId?.value).toBe(1);
          });

          // it('should form filled with no data', () => {
          //      component.formData = null;
          //      fixture.detectChanges();
          //      expect(component.form.assortId?.value).toEqual(null);
          // });
     });
});
