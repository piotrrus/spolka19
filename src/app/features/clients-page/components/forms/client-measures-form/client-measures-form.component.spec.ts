import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ClientMeasuresFormComponent } from './client-measures-form.component';
import { ClientMeasures } from '@features/clients-page/models/client-measures.interface';
import { MeasuresForm } from '@shared/forms/measures.form';
import { clientMeasuresData } from '@features/clients-page/stubs/client-measures.stub';

describe('ClientMeasuresFormComponent', () => {
     let component: ClientMeasuresFormComponent;
     let fixture: ComponentFixture<ClientMeasuresFormComponent>;

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
               declarations: [ClientMeasuresFormComponent],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ClientMeasuresFormComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Client Measures Form ', () => {
          it('should form has no errors', () => {
               const field = component.form.wzrost;
               field?.setValue('178');
               expect(component.form.form.errors).toBeNull();
          });

          it('should form has no errors', () => {
               const field = component.form.wzrost;
               field?.setValue(null);
               expect(component.form.form.errors).toBeNull();
          });

          it('should form field has errors', () => {
               const field = component.form.wzrost;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field obwod_klatki_piersiowej has error', () => {
               const field = component.form.obwod_klatki_piersiowej;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field obwod_pasa_marynarki has errors', () => {
               const field = component.form.obwod_pasa_marynarki;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field szerokosc_przodu has errors', () => {
               const field = component.form.szerokosc_przodu;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field szerokosc_tylu has errors', () => {
               const field = component.form.szerokosc_tylu;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field obwod_uda has errors', () => {
               const field = component.form.obwod_uda;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field obwod_uda has errors', () => {
               const field = component.form.obwod_uda;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field szerokosc_barkow has errors', () => {
               const field = component.form.szerokosc_barkow;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field długosc_plecow has errors', () => {
               const field = component.form.długosc_plecow;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field obwod_bicepsu has errors', () => {
               const field = component.form.obwod_bicepsu;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field obwod_bioder has errors', () => {
               const field = component.form.obwod_bioder;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form field dl_zewn_nogawki_bez_paska has errors', () => {
               const field = component.form.dl_zewn_nogawki_bez_paska;
               field?.setValue('aaaa');
               expect(field?.errors).toBeTruthy();
          });

          it('should form emit errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.wzrost?.setValue('abc');
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('should form emit no errors', () => {
               const spy = spyOn(component.isFormValid, 'emit');
               component.form.wzrost?.setValue(178);
               expect(spy).toHaveBeenCalledWith(true);
          });

          it('should form change emit value', () => {
               const spy = spyOn(component.formChange, 'emit');
               component.form.wzrost?.setValue(178);
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should component has form set by input value', () => {
               const wzrost = '178';
               const data: ClientMeasures = clientMeasuresData;

               component.clientMeasures = data;
               const field = component.form.wzrost;
               expect(field?.value).toEqual(wzrost);
          });

          it('should component has form set with no errors by input value', () => {
               const data: ClientMeasures = clientMeasuresData;
               component.clientMeasures = data;
               const name = component.form.wzrost;
               expect(name?.errors).toBeNull();
          });

          it('should isFormValid flag is false when form initialize', () => {
               expect(component.form).toBeInstanceOf(MeasuresForm);
          });

          it('should component has oninit call checkFormAndEmit', () => {
               const spy = spyOn(component, 'checkFormAndEmit');
               component.ngOnInit();
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should get required error message', () => {
               expect(component.getErrorMessage('required')).toEqual('To pole jest wymagane.');
          });

          it('should not get an error message', () => {
               expect(component.getErrorMessage('test')).toEqual('');
          });
     });
});
