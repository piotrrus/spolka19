import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { ErrorMsgService } from './error-msg.service';

describe('ErrorMsgService', () => {
     let service: ErrorMsgService;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [ErrorMsgService],
          });

          service = TestBed.inject(ErrorMsgService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call ErrorMsgService getList service ', () => {
          const spy = spyOn(service, 'getValidatorErrorMessage');
          service.getValidatorErrorMessage('required');
          expect(spy).toHaveBeenCalled();
     });

     it('should be call ErrorMsgService getList service ', () => {
          const msg = service.getValidatorErrorMessage('required');
          expect(msg).toEqual('To pole jest wymagane.');
     });

     it('should be call ErrorMsgService getList service ', () => {
          const msg = service.getValidatorErrorMessage('abc');
          expect(msg).toBeFalsy();
     });
});
