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
import { ProductionModalHelper } from './production-modal.helper';
import { ProductionNrModalComponent } from '../components/modals/production-nr/production-nr-modal.component';
import { ProductionDataModalComponent } from '../components/modals/production-data/production-data-modal.component';
import { ProductionEditFormComponent } from '../components/forms/production-edit-form/production-edit-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { ProductionNrFormComponent } from '../components/forms/production-nr-form/production-nr-form.component';
import { ProductionDateFormComponent } from '../components/forms/production-date-form/production-date-form.component';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ProductionModalHelper', () => {
     let component: ProductionDataModalComponent;
     let fixture: ComponentFixture<ProductionDataModalComponent>;
     let helper: ProductionModalHelper;

     let dialogComponent: ConfirmDialogComponent;
     let fixtureDialog: ComponentFixture<ConfirmDialogComponent>;
     // let confirmDialogsHelper: ConfirmDialogsHelper;

     // let formComponent: LiningFormComponent;
     // let fixtureForm: ComponentFixture<LiningFormComponent>;

     // let componentDate: ProductionDateModalComponent;
     // let fixtureDate: ComponentFixture<ProductionDateModalComponent>;

     // let componentProdNr: ProductionNrModalComponent;
     // let fixtureProdNr: ComponentFixture<ProductionNrModalComponent>;

     // let componentProdDateForm: ProductionDateFormComponent;
     // let fixtureProdDateForm: ComponentFixture<ProductionDateFormComponent>;

     // let componentEditForm: ProductionEditFormComponent;
     // let fixtureEditForm: ComponentFixture<ProductionEditFormComponent>;

     // let componentProdNrForm: ProductionNrFormComponent;
     // let fixtureProdNrForm: ComponentFixture<ProductionNrFormComponent>;

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
                    MatRadioModule,
                    MatDialogModule,
               ],
               declarations: [
                    ProductionNrModalComponent,
                    ProductionDataModalComponent,
                    ProductionEditFormComponent,
                    ProductionNrFormComponent,
                    ProductionDateFormComponent,
                    ConfirmDialogComponent,
               ],
               providers: [
                    ConfirmDialogsHelper,
                    ProductionModalHelper,
                    { provide: MatDialogRef, useValue: dialogMock },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          });
          helper = TestBed.inject(ProductionModalHelper);
          // confirmDialogsHelper = TestBed.inject(ConfirmDialogsHelper);

          fixture = TestBed.createComponent(ProductionDataModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();

          fixtureDialog = TestBed.createComponent(ConfirmDialogComponent);
          dialogComponent = fixtureDialog.componentInstance;

          fixtureDialog = TestBed.createComponent(ConfirmDialogComponent);
          dialogComponent = fixtureDialog.componentInstance;

          // fixtureForm = TestBed.createComponent(LiningFormComponent);
          // formComponent = fixtureForm.componentInstance;
     });

     describe('#FeltModalHelper', () => {
          it('should create an instance', () => {
               expect(helper).toBeTruthy();
          });

          describe('#FeltModalComponent ', () => {
               // it('should have proper modal title', () => {
               //      helper.openModal().subscribe();
               //      fixtureForm.detectChanges();
               //      const title = document.querySelector('.modal-title');
               //      expect(title?.textContent).toBe(TITLES.MODAL_TITLE);
               // });

               // it('should render app-felt-form', () => {
               //      helper.openModal().subscribe();
               //      const editForm = fixture.debugElement.query(By.css('app-felt-form'));
               //      expect(editForm).toBeTruthy();
               // });

               it('should render ProductionData modal-header', () => {
                    helper.openProductionDataModal().subscribe();
                    const modalHeader = document.querySelector('.modal-header');
                    expect(modalHeader).toBeTruthy();
               });
               it('should render ProductionDate modal-header', () => {
                    helper.openProductionDateModal().subscribe();
                    const modalHeader = document.querySelector('.modal-header');
                    expect(modalHeader).toBeTruthy();
               });
               it('should render ProductionNr modal-header', () => {
                    helper.openProductionNrModal().subscribe();
                    const modalHeader = document.querySelector('.modal-header');
                    expect(modalHeader).toBeTruthy();
               });
          });
          // describe('#ConfirmDialogsHelper ', () => {
          //      it('should open confirm Cancel helper', fakeAsync(() => {
          //           helper. .confirmCancel().subscribe();
          //           const spy = spyOn(confirmDialogsHelper, 'confirmDialog');
          //           expect(spy).toBeTruthy();
          //      }));
          // });
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

          // describe('#FormComponent getErrorMessage', () => {
          //      it('should get email error message', () => {
          //           expect(formComponent.getErrorMessage('email')).toEqual('Wprowadź poprawny adres e-mail.');
          //      });

          //      it('should be call ErrorMsgService getList service ', () => {
          //           const msg = formComponent.getErrorMessage('abc');
          //           expect(msg).toBeFalsy();
          //      });
          // });
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
          // describe('#Form data', () => {
          //      it('should change form data', () => {
          //           component.onFormChange(liningsData);
          //           expect(component.formData).toBeTruthy();
          //      });

          //      it('should change form data', () => {
          //           formComponent.formData = null;
          //           fixture.detectChanges();
          //           expect(formComponent.form.name?.value).toEqual('');
          //      });

          //      it('should change form data', () => {
          //           formComponent.formData = liningsData;
          //           fixture.detectChanges();
          //           expect(formComponent.form.name?.value).toEqual(liningsData.name);
          //      });
          // });
     });
});
