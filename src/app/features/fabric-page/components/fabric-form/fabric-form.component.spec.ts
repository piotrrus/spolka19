import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { FabricFormComponent } from './fabric-form.component';

describe('FabricFormComponent', () => {
     let component: FabricFormComponent;
     let fixture: ComponentFixture<FabricFormComponent>;

     beforeEach(async(() => {
          TestBed.configureTestingModule({
               declarations: [FabricFormComponent],
               imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatIconTestingModule,
               ],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(FabricFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     describe('#Fabric Edit Form ', () => {
          it('should form has no errors', () => {
               const form = component.form;
               form.materialNr?.setValue('abc 123');
               form.contractorId?.setValue(1);
               form.quantity?.setValue(1);
               form.priceEuro?.setValue(10);
               form.buyingPrice?.setValue(10);
               expect(component.form.form.errors).toBeNull();
          });

          it('should not form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               const form = component.form;
               form.materialNr?.setValue('abc 123');
               form.contractorId?.setValue(1);
               form.quantity?.setValue(1);
               form.priceEuro?.setValue(10);
               form.buyingPrice?.setValue(10);
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form field material_nr has length error', () => {
               const material_nr = component.form.materialNr;
               material_nr?.setValue('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
               expect(material_nr?.hasError('maxlength')).toBeTruthy();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.materialNr?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          // it('should form change emit value', () => {
          //      const spy = spyOn(component.formChange, 'emit');
          //      component.form.materialNr?.setValue('aaaa');
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

          it('should get required error message', () => {
               expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
          });
     });
});
