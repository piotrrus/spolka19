// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DateHandler } from '@shared/utils/date/date.handler';
//import { ToastrModule, ToastrService } from 'ngx-toastr';

//import { NotificationMessageService } from '@core/notifications/notification.service';

describe('ClientEventsValidator', () => {
     const dateHandler = DateHandler;

     beforeEach(() => {
          TestBed.configureTestingModule({
               // imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [
                    //    DateHandler,
                    //  MatSnackBar,
                    //  NotificationMessageService,
                    //  { provide: ToastrService, useValue: toastrService },
               ],
          });

          // service = TestBed.inject(DictionaryService);
          // httpTestingController = TestBed.inject(HttpTestingController);
          // notificationService = TestBed.inject(NotificationMessageService);
     });

     it('should be created handler', () => {
          expect(dateHandler).toBeTruthy();
     });

     it('should be return proper values with compareDates method ', () => {
          //  expect(dateHandler.compareDates('2025-01-04', '2025-01-04')).toBeFalsy();
          // expect(dateHandler.compareDates('2022-01-04', '2024-01-04')).toBeTruthy();
     });
});
