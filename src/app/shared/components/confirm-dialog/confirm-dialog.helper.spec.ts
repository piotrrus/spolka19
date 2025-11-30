import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
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
import { ConfirmDialogsHelper } from './confirm-dialog.helper';
import { dialogMock } from '@shared/stubs/dialog.stub';

describe('ConfirmDialogHelper', () => {
     let component: ConfirmDialogComponent;
     let fixture: ComponentFixture<ConfirmDialogComponent>;
     let helper: ConfirmDialogsHelper;

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
                    ConfirmDialogsHelper,
                    { provide: MatDialogRef, useValue: dialogMock },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();
     });

     beforeEach(() => {
          helper = TestBed.inject(ConfirmDialogsHelper);
          fixture = TestBed.createComponent(ConfirmDialogComponent);
          component = fixture.componentInstance;
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#ConfirmDialogHelper ', () => {
          it('should open and render modal title', fakeAsync(() => {
               component.data.title = 'test';
               component.data.messageTxt = 'message test';
               helper.confirmDialog().subscribe();
               fixture.detectChanges();
               const title = document.querySelector('h2');
               const subtitle = document.querySelector('p');
               expect(subtitle?.textContent).toBe('message test');
               expect(title?.textContent).toBe('test');
          }));
     });
});
