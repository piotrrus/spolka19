import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductionNrModalComponent } from './production-nr-modal.component';
import { ProductionNrFormComponent } from '../../forms/production-nr-form/production-nr-form.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { By } from '@angular/platform-browser';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ProductionNrModalComponent', () => {
     let component: ProductionNrModalComponent;
     let fixture: ComponentFixture<ProductionNrModalComponent>;

     let formComponent: ProductionNrFormComponent;
     let fixtureForm: ComponentFixture<ProductionNrFormComponent>;

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
               declarations: [ProductionNrModalComponent, ProductionNrFormComponent],
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
          fixture = TestBed.createComponent(ProductionNrModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          fixtureForm = TestBed.createComponent(ProductionNrFormComponent);
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

          it('should render app-production-nr-form', () => {
               const editForm = fixture.debugElement.query(By.css('app-production-nr-form'));
               expect(editForm).toBeTruthy();
          });

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
               const prod_nr = 'abc-100';
               component.onFormChange(prod_nr);
               expect(component.formData).toBeTruthy();
          });

          it('should change form validation', () => {
               const prod_nr = 'abc-100';
               component.onFormChange(prod_nr);
               component.onFormValid(true);
               expect(component.isFormValid).toBeTruthy();
          });

          it('should change form data', () => {
               formComponent.formData = null;
               fixture.detectChanges();
               expect(formComponent.form.prod_order?.value).toEqual('');
          });
     });

     describe('#Form Errors Msg', () => {
          it('should get required error message', () => {
               expect(formComponent.getErrorMessage('required')).toEqual('To pole jest wymagane.');
          });

          it('should not get an error message', () => {
               expect(formComponent.getErrorMessage('test')).toEqual('');
          });
     });

     it('should form filled with data', () => {
          formComponent.formData = 'abc';
          fixtureForm.detectChanges();
          expect(formComponent.form.prod_order?.value).toBe('abc');
     });

     it('should form filled with no data', () => {
          formComponent.formData = null;
          fixtureForm.detectChanges();
          expect(formComponent.form.prod_order?.value).toBe('');
     });
});
