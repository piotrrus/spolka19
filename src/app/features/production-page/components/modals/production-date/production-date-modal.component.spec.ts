import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { ProductionDateModalComponent } from './production-date-modal.component';
import { ProductionDateFormComponent } from '../../forms/production-date-form/production-date-form.component';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ProductionDateModalComponent', () => {
     let component: ProductionDateModalComponent;
     let fixture: ComponentFixture<ProductionDateModalComponent>;

     let formComponent: ProductionDateFormComponent;
     let fixtureForm: ComponentFixture<ProductionDateFormComponent>;

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
                    MatIconModule,
                    MatIconTestingModule,
                    MatDialogModule,
               ],
               declarations: [ProductionDateModalComponent, ProductionDateFormComponent],
               providers: [
                    {
                         provide: MatDialogRef,
                         useValue: dialogMock,
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();
          fixture = TestBed.createComponent(ProductionDateModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          fixtureForm = TestBed.createComponent(ProductionDateFormComponent);
          formComponent = fixtureForm.componentInstance;
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Production Nr Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          // it('should render app-production-date-form', () => {
          //      const editForm = fixture.debugElement.query(By.css('app-production-nr-form'));
          //      expect(editForm).toBeTruthy();
          // });

          // it('should render modal-header', () => {
          //      const editForm = document.querySelector('.modal-header');
          //      expect(editForm).toBeTruthy();
          // });

          // it('should render modal-button-section', () => {
          //      const editForm = document.querySelector('.modal-button-section');
          //      expect(editForm).toBeTruthy();
          // });
     });

     describe('#Production modal buttons handling', () => {
          it('dialog should be closed after close click()', () => {
               const spy = spyOn(component.dialogRef, 'close').and.callThrough();
               component.onClose();
               expect(spy).toHaveBeenCalledWith(false);
          });

          it('dialog should be closed after save click()', () => {
               const spy = spyOn(component.dialogRef, 'close').and.callThrough();
               component.onSave();
               expect(spy).toHaveBeenCalled();
          });
     });
     describe('#Modal Form', () => {
          it('should change form data', () => {
               const prodDate = '2020-12-12';
               component.onFormChange(prodDate);
               expect(component.formData).toBeTruthy();
          });

          it('should change form validation', () => {
               const prodDate = '2020-12-12';
               component.onFormChange(prodDate);
               component.onFormValid(true);
               expect(component.isFormValid).toBeTruthy();
          });

          it('should change form data', () => {
               formComponent.formData = null;
               fixture.detectChanges();
               expect(formComponent.form.data_przek_do_prod?.value).toEqual('');
          });

          it('should change form validation', () => {
               // const spy = spyOn(formComponent, 'checkFormAndEmit');
               const prodDate = '2020-12-12';
               formComponent.formData = prodDate;
               expect(formComponent.checkFormAndEmit).toHaveBeenCalled();

               // expect(formComponent.formChange).toHaveBeenCalled();
               // component.onFormValid(true);
               // expect(component.isFormValid).toBeTruthy();
          });

          // it('should form emit errors', () => {
          //      const spy = spyOn(formComponent.isFormValid, 'emit');
          //      formComponent.form.data_przek_do_prod?.setValue('asdasda');
          //      expect(spy).toHaveBeenCalledWith(true);
          // });
     });

     describe('#Form Errors Msg', () => {
          it('should get required error message', () => {
               expect(formComponent.getErrorMessage('required')).toEqual('To pole jest wymagane.');
          });

          it('should not get an error message', () => {
               expect(formComponent.getErrorMessage('test')).toEqual('');
          });
     });
});
