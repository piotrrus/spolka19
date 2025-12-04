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
import { ClientDetailsModalComponent } from './client-details-modal.component';
import { ClientFormComponent } from '../../forms/client-form/client-form.component';
import { clientData } from '@features/clients-page/stubs/clients-data.stub';

describe('ClientDetailsModalComponent', () => {
     let component: ClientDetailsModalComponent;
     let fixture: ComponentFixture<ClientDetailsModalComponent>;
     const dialogMock = {
          close: (): void => {
               null;
          },
     };
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
               declarations: [ClientDetailsModalComponent, ClientFormComponent],
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
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ClientDetailsModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#ClientDetails Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          it('should render app-client-form', () => {
               const editForm = fixture.debugElement.query(By.css('app-client-form'));
               expect(editForm).toBeTruthy();
          });

          it('should render modal-header', () => {
               const editForm = document.querySelector('.modal-header');
               expect(editForm).toBeTruthy();
          });

          it('should render modal-button-section', () => {
               const editForm = document.querySelector('.modal-button-section');
               expect(editForm).toBeTruthy();
          });
     });

     describe('#Client Modal Form', () => {
          it('should not change form data', () => {
               const client: unknown = '';
               component.onFormChange(client);
               expect(component.formData).toBeFalsy();
          });

          it('should change form data', () => {
               const client = clientData;
               component.onFormChange(client);
               expect(component.formData).toBeTruthy();
          });

          it('should change form validation', () => {
               const client = clientData;
               component.onFormChange(client);
               component.onFormValid(true);
               expect(component.isFormValid).toBeTruthy();
          });

          it('should change form validation', () => {
               component.onFormValid(false);
               expect(component.isFormValid).toBeFalsy();
          });

          // it('should be call ErrorMsgService getList service ', () => {
          //      const msg = formComponent.getErrorMessage('abc');
          //      expect(msg).toBeFalsy();
          // });
     });

     describe('#Client Modal Dialog', () => {
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
});
