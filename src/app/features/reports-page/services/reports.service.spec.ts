import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { ReportsService } from './reports.service';

describe('ReportsService', () => {
     let service: ReportsService;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [ReportsService, MatSnackBar],
          });

          service = TestBed.inject(ReportsService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });
});
