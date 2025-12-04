import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './user.service';

describe('UserService', () => {
     let service: UserService;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [UserService, MatSnackBar],
          });

          service = TestBed.inject(UserService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call UserService logout ', () => {
          const spy = spyOn(service, 'logout');
          service.logout();
          expect(spy).toHaveBeenCalled();
     });

     // it('should be call UserService register ', () => {
     //      const user = {
     //           name: 'abc',
     //           email: 'aaa@wp.pl',
     //           password: 'aaa',
     //           c_password: 'aaa',
     //      };
     //      const spy = spyOn(service, 'register');
     //      service.register(user);
     //      expect(spy).toHaveBeenCalled();
     // });

     // it('should be call UserService logout with get method', () => {
     //      service.logout();
     //      const req = httpTestingController.expectOne(USER_PATHS_API.LOGOUT, 'logout api');
     //      expect(req.request.method).toBe('GET');
     // });

     // it('should be call UserService register with get method', () => {
     //      const user = {
     //           name: 'abc',
     //           email: 'aaa@wp.pl',
     //           password: 'aaa',
     //           c_password: 'aaa',
     //      };
     //      service.register(user);
     //      const req = httpTestingController.expectOne(USER_PATHS_API.REGISTER, 'register api');
     //      expect(req.request.method).toBe('POST');
     // });
});
