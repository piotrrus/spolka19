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
import { By } from '@angular/platform-browser';
import { LiningModalComponent } from './lining-modal.component';
import { LiningFormComponent } from '../forms/lining-form.component';
import { liningsData } from '@features/lining-page/stubs/linings-table.stub';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('LiningModalComponent', () => {
     let component: LiningModalComponent;
     let fixture: ComponentFixture<LiningModalComponent>;

     let formComponent: LiningFormComponent;
     let fixtureForm: ComponentFixture<LiningFormComponent>;

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
               declarations: [LiningModalComponent, LiningFormComponent],
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
          fixture = TestBed.createComponent(LiningModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
          fixtureForm = TestBed.createComponent(LiningFormComponent);
          formComponent = fixtureForm.componentInstance;
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Lining Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          it('should render app-lining-form', () => {
               const editForm = fixture.debugElement.query(By.css('app-lining-form'));
               expect(editForm).toBeTruthy();
          });
     });
     describe('#Lining modal buttons handling', () => {
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
     describe('#Lining Modal Form', () => {
          it('should change form data', () => {
               formComponent.formData = liningsData;
               expect(formComponent.form.name?.value).toEqual('podszewka');
          });

          it('should change form data', () => {
               const lining = '';
               component.onFormChange(lining);
               expect(component.formData).toBeUndefined();
          });

          it('should change form data', () => {
               const lining = liningsData;
               component.onFormChange(lining);
               expect(component.formData).toBeTruthy();
          });

          it('should change form validation', () => {
               const lining = liningsData;
               component.onFormChange(lining);
               component.onFormValid(true);
               expect(component.isFormValid).toBeTruthy();
          });

          it('should change form data', () => {
               formComponent.formData = null;
               fixture.detectChanges();
               expect(formComponent.form.name?.value).toEqual('');
          });
     });

     describe('#FormComponent getErrorMessage', () => {
          it('should get email error message', () => {
               expect(formComponent.getErrorMessage('email')).toEqual('Wprowadź poprawny adres e-mail.');
          });

          it('should be call ErrorMsgService getList service ', () => {
               const msg = formComponent.getErrorMessage('abc');
               expect(msg).toBeFalsy();
          });
     });
});
