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
import { StockModalsHelper } from './stock-modals.helper';
import { ShoesModalComponent } from '../components/modals/shoes/shoes-modal.component';
import { OrderAssortModalComponent } from '../components/modals/assort/order-assort-modal.component';
import { FabricModalComponent } from '../components/modals/fabric/stock-fabric-modal.component';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('StockModalsHelper', () => {
     let helper: StockModalsHelper;
     let dialogComponent: ConfirmDialogComponent;
     let fixtureDialog: ComponentFixture<ConfirmDialogComponent>;
     let confirmDialogsHelper: ConfirmDialogsHelper;

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
                    MatDialogModule,
               ],
               declarations: [
                    ShoesModalComponent,
                    OrderAssortModalComponent,
                    FabricModalComponent,
                    ConfirmDialogComponent,
               ],
               providers: [
                    ConfirmDialogsHelper,
                    StockModalsHelper,
                    { provide: MatDialogRef, useValue: dialogMock },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          });
          helper = TestBed.inject(StockModalsHelper);
          confirmDialogsHelper = TestBed.inject(ConfirmDialogsHelper);

          fixtureDialog = TestBed.createComponent(ConfirmDialogComponent);
          dialogComponent = fixtureDialog.componentInstance;

          fixtureDialog = TestBed.createComponent(ConfirmDialogComponent);
          dialogComponent = fixtureDialog.componentInstance;
     });

     describe('#FabricModalHelper', () => {
          it('should create an instance', () => {
               expect(helper).toBeTruthy();
          });

          describe('#FabricModalComponent ', () => {
               pending();
               // it('should have proper modal title', () => {
               //      helper.openModal().subscribe();
               //      fixtureForm.detectChanges();
               //      const title = document.querySelector('.modal-title');
               //      expect(title?.textContent).toBe(Titles.MODAL_TITLE);
               // });
               // it('should render app-felt-form', () => {
               //      helper.openModal().subscribe();
               //      const editForm = fixture.debugElement.query(By.css('app-felt-form'));
               //      expect(editForm).toBeTruthy();
               // });
               // it('should render modal-header', () => {
               //      helper.openModal().subscribe();
               //      const modalHeader = document.querySelector('.modal-header');
               //      expect(modalHeader).toBeTruthy();
               // });
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
               pending();
               // it('should get email error message', () => {
               //      expect(formComponent.getErrorMessage('email')).toEqual('Wprowadź poprawny adres e-mail.');
               // });

               // it('should be call ErrorMsgService getList service ', () => {
               //      const msg = formComponent.getErrorMessage('abc');
               //      expect(msg).toBeFalsy();
               // });
          });
          describe('#dialogRef', () => {
               it('dialog should be closed after close click()', () => {
                    pending();
                    // let spy = spyOn(component.dialogRef, 'close').and.callThrough();
                    // component.onClose();
                    // expect(spy).toHaveBeenCalledWith(false);
               });

               it('dialog should be closed after close click()', () => {
                    pending();
                    // let spy = spyOn(component.dialogRef, 'close').and.callThrough();
                    // component.onClose();
                    // expect(spy).toHaveBeenCalledWith(false);
               });

               it('dialog should be closed after save click()', () => {
                    pending();
                    // let spy = spyOn(component.dialogRef, 'close').and.callThrough();
                    // component.onSave();
                    // expect(spy).toHaveBeenCalled();
               });
          });
          // describe('#Fabric form data', () => {
          //      it('should change form data', () => {
          //           pending();
          //           // component.onFormChange(feltData);
          //           // expect(component.formData).toBeTruthy();
          //      });

          //      it('should change form data', () => {
          //           pending();
          //           // formComponent.formData = null;
          //           // fixture.detectChanges();
          //           // expect(formComponent.form.name?.value).toEqual('');
          //      });

          //      it('should change form data', () => {
          //           // formComponent.formData = feltData;
          //           // fixture.detectChanges();
          //           // expect(formComponent.form.name?.value).toEqual(feltData.name);
          //      });
          // });
     });
});
