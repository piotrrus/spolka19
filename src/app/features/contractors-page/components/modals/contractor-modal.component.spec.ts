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
import { ContractorModalComponent } from './contractor-modal.component';
import { ContractorFormComponent } from '../forms/contractor-form.component';
import { By } from '@angular/platform-browser';
import { contractorData } from '@features/contractors-page/stubs/contractors-table.stub';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ContractorModalComponent', () => {
     let component: ContractorModalComponent;
     let fixture: ComponentFixture<ContractorModalComponent>;

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
               declarations: [ContractorModalComponent, ContractorFormComponent],
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
          fixture = TestBed.createComponent(ContractorModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     describe('#Contractor Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          it('should render app-contractor-form', () => {
               const editForm = fixture.debugElement.query(By.css('app-contractor-form'));
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
     describe('#Contractor Modal Form', () => {
          it('should change form data', () => {
               const contractor = contractorData;
               component.onFormChange(contractor);
               expect(component.formData).toBeTruthy();
          });

          it('should change form validation', () => {
               const contractor = contractorData;
               component.onFormChange(contractor);
               component.onFormValid(true);
               expect(component.isFormValid).toBeTruthy();
          });

          it('should change form validation', () => {
               component.onFormValid(false);
               expect(component.isFormValid).toBeFalsy();
          });
     });
     describe('#Contractor Modal Dialog', () => {
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
