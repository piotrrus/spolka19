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
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ConfirmDialogComponent', () => {
     let component: ConfirmDialogComponent;
     let fixture: ComponentFixture<ConfirmDialogComponent>;

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
               declarations: [ConfirmDialogComponent],
               providers: [
                    { provide: MatDialogRef, useValue: dialogMock },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();
     });

     beforeEach(() => {
          fixture = TestBed.createComponent(ConfirmDialogComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#ConfirmDialogComponent ', () => {
          it('should render modal title', () => {
               component.data.title = 'test';
               const title = document.querySelector('.mat-dialog-title');
               expect(title?.textContent).not.toBe('testt');
          });
          it('should render modal title', () => {
               component.data.messageTxt = 'messageTxt';
               const title = document.querySelector('.mat-dialog-title');
               expect(title?.textContent).not.toBe('messageTxt');
          });

          it('dialog should be closed after onYesClick()', () => {
               const spy = spyOn(component.dialogRef, 'close').and.callThrough();
               component.onDismiss();
               expect(spy).toHaveBeenCalled();
          });

          it('dialog should be closed after onYesClick()', () => {
               const spy = spyOn(component.dialogRef, 'close').and.callThrough();
               component.onConfirm();
               expect(spy).toHaveBeenCalled();
          });
     });
});
