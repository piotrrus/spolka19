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
import { AssortsModalComponent } from './assorts-modal.component';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('AssortsModalComponent', () => {
     let component: AssortsModalComponent;
     let fixture: ComponentFixture<AssortsModalComponent>;

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
               declarations: [AssortsModalComponent],
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
          fixture = TestBed.createComponent(AssortsModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Lining Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          // it('should render app-lining-form', () => {
          //      const editForm = fixture.debugElement.query(By.css('app-lining-form'));
          //      expect(editForm).toBeTruthy();
          // });
     });
     describe('#Assorts modal buttons handling', () => {
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
     // describe('#Assorts Modal Form', () => {
     //      it('should change form data', () => {
     //           const contractor = liningsData;
     //           component.onFormChange(contractor);
     //           expect(component.formData).toBeTruthy();
     //      });

     //      it('should change form validation', () => {
     //           const lining = liningsData;
     //           component.onFormChange(lining);
     //           component.onFormValid(true);
     //           expect(component.isFormValid).toBeTruthy();
     //      });

     //      it('should change form data', () => {
     //           formComponent.formData = null;
     //           fixture.detectChanges();
     //           expect(formComponent.form.name?.value).toEqual('');
     //      });
     // });
});
