import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoginFormComponent } from '@features/user/components/forms/login/login-form.component';
import { UserService } from '@features/user/services/user.service';
import { StorageService } from '@core/storage/storage.service';
import { AuthService } from '@core/auth/auth-service';
import { loginData } from '@features/user/stubs/login-user.stub';
import { USERS_API_PATHS } from '@features/user/enums/user-path-api.enum';

describe('LoginPageComponent', () => {
     let component: LoginPageComponent;
     let fixture: ComponentFixture<LoginPageComponent>;
     let service: UserService;
     let httpTestingController: HttpTestingController;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [LoginPageComponent, LoginFormComponent],
               imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    ToastrModule.forRoot(),
               ],
               providers: [ToastrService, UserService, StorageService, AuthService],
          });
          fixture = TestBed.createComponent(LoginPageComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
          service = TestBed.inject(UserService);
          //  authService = TestBed.inject(AuthService);

          httpTestingController = TestBed.inject(HttpTestingController);
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should be call user service ', () => {
          const spy = spyOn(service, 'login');
          service.login(loginData);
          expect(spy).toHaveBeenCalled();
     });

     it('should be call user service with post method', () => {
          service.login(loginData).subscribe();
          const req = httpTestingController.expectOne(USERS_API_PATHS.LOGIN, 'login to api');
          expect(req.request.method).toBe('POST');
     });

     it('should be set isValid property valid', () => {
          component.onFormValid(true);
          expect(component.isFormValid).toBeTruthy();
     });
     it('should be set isValid property invalid', () => {
          component.onFormValid(false);
          expect(component.isFormValid).toBeFalsy();
     });

     // it('should be set isValid property as valid when data', () => {
     //      const user: UserLoginModel = {
     //           login: 'aaaaa',
     //           password: 'aaaaa',
     //      };

     //      component.onFormChange(user);
     //      expect(component.isFormValid).toBeTruthy();
     //      //      expect(component.).toBeTruthy();
     // });
});
