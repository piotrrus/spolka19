import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CLIENTS_API_PATHS } from '../enums/clients-paths.enum';
import { ClientEventsService } from './client-events-service';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';
import {
     clientEventData,
     clientEventSaveData,
     clientLastEventData,
} from '../stubs/clients-events.stub';
import { toastrMock } from '@shared/stubs/toastr.stub';

describe('ClientEventsService', () => {
     let service: ClientEventsService;
     let httpTestingController: HttpTestingController;
     // const toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
     //      'error',
     //      'success',
     //      'warning',
     //      'info',
     // ]);

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [
                    ClientEventsService,
                    MatSnackBar,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    { provide: ToastrService, useValue: toastrMock },
               ],
          });

          service = TestBed.inject(ClientEventsService);
          httpTestingController = TestBed.inject(HttpTestingController);
          // notificationService = TestBed.inject(NotificationMessageService);
     });

     afterEach(() => {
          httpTestingController.verify();
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call ClientEventsService getClientEvents with get method', () => {
          const id = 60;
          const url = `${environment.api}${CLIENTS_API_PATHS.EVENTS}${id}`;
          service.getClientEvents(id).subscribe();
          const req = httpTestingController.expectOne(url, 'get details api');
          expect(req.request.method).toBe('GET');
          req.flush(clientEventData);
     });

     it('should be call ClientEventsService getClientLastEvents with get method', () => {
          const id = 60;
          const url = `${environment.api}${CLIENTS_API_PATHS.EVENTS_LAST}${id}`;
          service.getClientLastEvents(60).subscribe();
          const req = httpTestingController.expectOne(url, 'get last client events api');
          expect(req.request.method).toBe('GET');
          req.flush(clientLastEventData);
     });

     it('should call ClientEventsService update() with post method', () => {
          const id = 60;
          const url = `${environment.api}${CLIENTS_API_PATHS.EVENTS_UPDATE}${id}`;
          service.updateClientEvents(id, clientEventSaveData).subscribe();
          const req = httpTestingController.expectOne(url, 'create api');
          expect(req.request.method).toBe('POST');
          req.flush(clientEventSaveData);
     });
});
