import { CommonModule } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';

import { MatIconModule } from '@angular/material/icon';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { By } from '@angular/platform-browser';
import { ClientModalHelper } from './client-modal.helper';
import { ClientDetailsModalComponent } from '../components/modals/order-details-modal/client-details-modal.component';
import { ClientFormComponent } from '../components/forms/client-form/client-form.component';
import { TITLES } from '../enums/titles.enum';
import { clientData } from '../stubs/clients-data.stub';
import { MatIconTestingModule } from '@angular/material/icon/testing';
// import { Titles } from '../enums/titles.enum';

describe('ClientModalHelper', () => {
     let component: ClientDetailsModalComponent;
     let fixture: ComponentFixture<ClientDetailsModalComponent>;
     let helper: ClientModalHelper;

     let dialogComponent: ConfirmDialogComponent;
     let fixtureDialog: ComponentFixture<ConfirmDialogComponent>;
     let confirmDialogsHelper: ConfirmDialogsHelper;

     let formComponent: ClientFormComponent;
     let fixtureForm: ComponentFixture<ClientFormComponent>;

     const dialogMock = {
          close: (): void => {
               null;
          },
     };

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [
                    CommonModule,
                    BrowserTestingModule,
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
               declarations: [ClientDetailsModalComponent, ClientFormComponent, ConfirmDialogComponent],
               providers: [
                    ConfirmDialogsHelper,
                    ClientModalHelper,
                    { provide: MatDialogRef, useValue: dialogMock },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          });
          helper = TestBed.inject(ClientModalHelper);
          confirmDialogsHelper = TestBed.inject(ConfirmDialogsHelper);

          fixture = TestBed.createComponent(ClientDetailsModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          fixtureDialog = TestBed.createComponent(ConfirmDialogComponent);
          dialogComponent = fixtureDialog.componentInstance;

          fixtureForm = TestBed.createComponent(ClientFormComponent);
          formComponent = fixtureForm.componentInstance;
     });

     describe('#ClientModalHelper', () => {
          it('should create an instance', () => {
               expect(helper).toBeTruthy();
          });

          describe('#ClientDetailsModalComponent ', () => {
               it('should have proper modal title', () => {
                    helper.openModal().subscribe();
                    fixtureForm.detectChanges();
                    const title = document.querySelector('.modal-title');
                    expect(title?.textContent).toBe(TITLES.MODAL_TITLE_NEW);
               });

               it('should render app-client-form', () => {
                    helper.openModal().subscribe();
                    const editForm = fixture.debugElement.query(By.css('app-client-form'));
                    expect(editForm).toBeTruthy();
               });

               it('should render modal-header', () => {
                    helper.openModal().subscribe();
                    const modalHeader = document.querySelector('.modal-header');
                    expect(modalHeader).toBeTruthy();
               });

               it('dialog should isFormValid have proper value ', () => {
                    component.onFormValid(true);
                    expect(component.isFormValid).toEqual(true);
               });
          });
          describe('#ConfirmDialogsHelper ', () => {
               it('should open confirm Cancel helper', fakeAsync(() => {
                    helper.confirmCancel().subscribe();
                    const spy = spyOn(confirmDialogsHelper, 'confirmDialog');
                    expect(spy).toBeTruthy();
               }));
          });
          describe('#DialogComponent ', () => {
               it('should close confirm dialog', fakeAsync(() => {
                    const spy = spyOn(dialogComponent.dialogRef, 'close').and.callThrough();
                    dialogComponent.onConfirm();
                    expect(spy).toHaveBeenCalledWith(true);
               }));

               it('should close confirm dialog', fakeAsync(() => {
                    const spy = spyOn(dialogComponent.dialogRef, 'close').and.callThrough();
                    dialogComponent.onDismiss();
                    expect(spy).toHaveBeenCalledWith(false);
               }));
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

          describe('#dialogRef', () => {
               it('dialog should be closed after close click()', () => {
                    const spy = spyOn(component.dialogRef, 'close').and.callThrough();
                    component.onClose();
                    expect(spy).toHaveBeenCalledWith(false);
               });

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
          describe('#Form data', () => {
               it('should not change form data', () => {
                    const client: unknown = '';
                    component.onFormChange(client);
                    expect(component.formData).toBeFalsy();
               });

               it('should change form data', () => {
                    component.onFormChange(clientData);
                    expect(component.formData).toBeTruthy();
               });

               // it('should change form data', () => {
               //      formComponent.clientDetails = null;
               //      fixture.detectChanges();
               //      expect(formComponent.form.name?.value).toEqual('');
               // });

               it('should change form data', () => {
                    formComponent.clientDetails = clientData;
                    fixture.detectChanges();
                    expect(formComponent.form.firstname?.value).toEqual(clientData.firstname);
               });
          });
     });
});
