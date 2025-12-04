import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ProductionEditFormComponent } from './production-edit-form.component';

describe('ProductionEditFormComponent', () => {
     let component: ProductionEditFormComponent;
     let fixture: ComponentFixture<ProductionEditFormComponent>;

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
                    MatRadioModule,
               ],
               declarations: [ProductionEditFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ProductionEditFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Production Edit Form ', () => {
          it('should form has no errors', () => {
               const form = component.form;
               form.id_assort?.setValue(9);
               form.art_name?.setValue('aaaa');
               expect(component.form.form.errors).toBeNull();
          });
          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               const form = component.form;
               form.id_assort?.setValue(null);
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.id_assort?.setValue(9999);
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.id_assort?.setValue('aaaa');
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should form filled with data', () => {
               component.formData = {
                    id: 111,
                    hasSize: false,
                    id_assort: 1,
                    id_order: 123,
                    art_name: 'abc',
                    marynarka_rozmiar: 45,
                    spodnie_rozmiar: '89',
                    kamizelka_rozmiar: '45',
                    rozmiar: '45',
                    spodnie_zaszewki_w_tyle: '2',
                    zaszewki_w_przodzie: '2',
                    obwod_pasa: '89',
                    nici: 'test',
                    wnetrze: 'test',
                    prod_order: 'test',
                    probe: false,
               };
               fixture.detectChanges();
               expect(component.form.art_name?.value).toBe('abc');
               expect(component.form.marynarka_rozmiar?.value).toBe(45);
               expect(component.form.spodnie_rozmiar?.value).toBe('89');
               expect(component.form.kamizelka_rozmiar?.value).toBe('45');
               expect(component.form.rozmiar?.value).toBe('45');
               expect(component.form.spodnie_zaszewki_w_tyle?.value).toBe('2');
               expect(component.form.zaszewki_w_przodzie?.value).toBe('2');

               expect(component.form.obwod_pasa?.value).toBe('89');
               expect(component.form.nici?.value).toBe('test');
               expect(component.form.prod_order?.value).toBe('test');
               expect(component.form.wnetrze?.value).toBe('test');
               expect(component.form.wnetrze?.value).toBe('test');
               expect(component.form.probe?.value).toBe(false);
          });

          it('should form filled with data', () => {
               component.formData = {
                    id: 111,
                    hasSize: false,
                    id_assort: 6,
                    id_order: 123,
                    art_name: 'abc',
               };
               fixture.detectChanges();
               expect(component.hasTrousers).toBeFalsy();
          });

          it('should form filled with no data', () => {
               component.formData = null;
               fixture.detectChanges();
               expect(component.form.art_name?.value).toBe('');
          });

          describe('#Form Errors Msg', () => {
               it('should get required error message', () => {
                    expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
               });

               it('should not get an error message', () => {
                    expect(component.getErrorMessage('test')).toEqual('');
               });
          });
     });
});
