import { TestBed } from '@angular/core/testing';

// import { AdminUsersService } from './admin-users.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { AdminUsersService } from './admin-users.service';

describe('UsersService', () => {
     let service: AdminUsersService;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [AdminUsersService],
          });
          service = TestBed.inject(AdminUsersService);
     });

     it('should be created', () => {
          expect(service).toBeTruthy();
     });
});
