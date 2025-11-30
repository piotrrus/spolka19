import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { BasePrintHelper } from './base-print.helper';

describe('BasePrintHelper', () => {
     let service: BasePrintHelper;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [BasePrintHelper, MatSnackBar],
          });

          service = TestBed.inject(BasePrintHelper);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call createPdf ', () => {
          pending();
     });
});
