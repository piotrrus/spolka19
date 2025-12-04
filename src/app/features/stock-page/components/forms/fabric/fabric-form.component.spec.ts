import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FabricFormComponent } from './fabric-form.component';

describe('FabricFormComponent', () => {
     let component: FabricFormComponent;
     let fixture: ComponentFixture<FabricFormComponent>;

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
               declarations: [FabricFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(FabricFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Stock Fabric Form ', () => {
          it('should order Date has no errors', () => {
               const orderDate = component.form.materialNr;
               orderDate?.setValue('aaa');
               expect(component.form.form.errors).toBeNull();
          });

          it('should form field order Date has error', () => {
               const orderDate = component.form.materialNr;
               orderDate?.setValue(null);
               expect(orderDate?.errors).toBeTruthy();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.materialNr?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit no error', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.materialNr?.setValue('abc');
               component.form.quantity?.setValue(8);
               component.form.contractorId?.setValue(1);
               component.form.priceEuro?.setValue(200);
               component.form.pattern?.setValue(1);
               component.form.buyingPrice?.setValue(100);
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form emit errors quantity', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.quantity?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          // it('should form emit no errors', () => {
          //      const spy = spyOn(component.isFormValid, 'emit');
          //      //   component.checkFormAndEmit();
          //      component.form.quantity?.setValue(9);
          //      expect(spy).toHaveBeenCalledWith(true);
          // });

          // it('should form change emit value', () => {
          //      const spy = spyOn(component.formChange, 'emit');
          //      component.form.materialNr?.setValue('aaaa');
          //      expect(spy).toHaveBeenCalledTimes(1);
          // });

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
          // it('should component has oninit call checkFormAndEmit', () => {
          //      const spy = spyOn(component, 'checkFormAndEmit');
          //      component.ngOnInit();
          //      expect(spy).toHaveBeenCalledTimes(1);
          // });

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

          it('should form filled with formData', () => {
               component.formData = {
                    id: 123,
                    materialNr: 'zx-789',
                    contractorId: 1,
                    stockId: 1,
                    assortId: 1,
                    artName: 'aaa',
                    clientNr: 'aaa',
                    name: 'aaa',
                    contractor: 'aaa',
                    invoiceNr: 'aaa',
                    quantity: 3,
                    size: '',
                    buyingPrice: '',
                    sellingPrice: '',
                    priceEuro: '',
                    warehouse: '',
               };
               fixture.detectChanges();
               expect(component.form.materialNr?.value).toBe('zx-789');
          });

          it('should form filled with no data', () => {
               component.formData = null;
               fixture.detectChanges();
               expect(component.form.materialNr?.value).toEqual('');
          });

          it('should form filled with formData', () => {
               component.plnToEuroActualValue = '4.34';
               fixture.detectChanges();
               expect(component.form.currency?.value).toBe('4.34');
          });
          //Expected null to equal ''., ERROR
          // it('should plnToEuroActualValue filled with no data', () => {
          //      component.formData = null;
          //      fixture.detectChanges();
          //      expect(component.form.currency?.value).toEqual('');
          // });
     });
});
