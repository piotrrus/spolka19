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
import { FeltModalComponent } from './felt-modal.component';
import { FeltFormComponent } from '../forms/felt-form.component';
// import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('FeltModalComponent', () => {
     let component: FeltModalComponent;
     let fixture: ComponentFixture<FeltModalComponent>;

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
               declarations: [FeltModalComponent, FeltFormComponent],
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
          fixture = TestBed.createComponent(FeltModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Felt Modal ', () => {
          it('should  render modal title', () => {
               const title = document.querySelector('.modal-title');
               expect(title?.textContent).not.toBe('Title');
          });

          it('should render app-felt-form', () => {
               const editForm = fixture.debugElement.query(By.css('app-felt-form'));
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
     describe('#Felt Modal Dialog', () => {
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
