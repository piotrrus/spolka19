import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { RegisterPageComponent } from './register-page.component';
import { UserService } from '../../services/user.service';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { RegisterFormComponent } from '../../components/forms/register/register-form.component';

describe('RegisterPageComponent', () => {
     let component: RegisterPageComponent;
     let fixture: ComponentFixture<RegisterPageComponent>;

     beforeEach(async(() => {
          TestBed.configureTestingModule({
               declarations: [RegisterPageComponent, RegisterFormComponent],
               imports: [
                    RouterTestingModule,
                    HttpClientTestingModule,
                    ToastrModule.forRoot(),
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatIconTestingModule,
               ],
               providers: [NotificationMessageService, UserService],
          }).compileComponents();
     }));

     beforeEach(() => {
          fixture = TestBed.createComponent(RegisterPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
