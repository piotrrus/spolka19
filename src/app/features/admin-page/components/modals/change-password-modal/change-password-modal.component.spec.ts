import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChangePasswordModalComponent } from './change-password-modal.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ToastrModule } from 'ngx-toastr';
import { ChangePasswordFormComponent } from '../../../../user/components/forms/change-password-form/change-password-form.component';

describe('ChangePasswordModalComponent', () => {
     let component: ChangePasswordModalComponent;
     let fixture: ComponentFixture<ChangePasswordModalComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [ChangePasswordModalComponent, ChangePasswordFormComponent],
               imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatCardModule,
                    MatIconModule,
                    MatDialogModule,
                    MatCardModule,
                    MatIconModule,
                    MatDialogModule,
                    ToastrModule.forRoot(),
               ],
               providers: [
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          }).compileComponents();

          fixture = TestBed.createComponent(ChangePasswordModalComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
