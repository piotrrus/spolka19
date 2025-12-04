import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EventsService } from './events.service';
import { EVENTS_API_PATHS } from '../enums/events-paths.enum';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import { NotificationMessageService } from '@core/notifications/notification.service';

describe('EventsService', () => {
     let service: EventsService;
     let httpTestingController: HttpTestingController;
     let notificationService: NotificationMessageService;
     const toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
          'error',
          'success',
          'warning',
          'info',
     ]);
     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [EventsService, MatSnackBar, { provide: ToastrService, useValue: toastrService }],
          });

          service = TestBed.inject(EventsService);
          httpTestingController = TestBed.inject(HttpTestingController);
          notificationService = TestBed.inject(NotificationMessageService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should call EventsService getEventsList()  method', () => {
          const events = {
               id: 122,
               clientId: 233,
               measure_date: '2024-12-12',
          };

          const url = `${EVENTS_API_PATHS.LIST}`;
          service.getEventsList().subscribe();
          const req = httpTestingController.expectOne(url, 'get EventsList api');
          expect(req.request.method).toBe('GET');
          req.flush([events]);
     });

     it('should call EventsService eventDetails()  method', () => {
          const id = 1;
          const events = {
               id: 122,
               clientId: 233,
               measure_date: '2024-12-12',
          };

          const url = `${EVENTS_API_PATHS.DETAILS}${id}`;
          service.eventDetails(1).subscribe();
          const req = httpTestingController.expectOne(url, 'get eventDetails api');
          expect(req.request.method).toBe('GET');
          req.flush([events]);
     });

     it('should call EventsService getLastEvents()  method', () => {
          const events = {
               id: 122,
               clientId: 233,
               measure_date: '2024-12-12',
          };

          const url = `${EVENTS_API_PATHS.LAST}`;
          service.getLastEvents().subscribe();
          const req = httpTestingController.expectOne(url, 'get getLastEvents api');
          expect(req.request.method).toBe('GET');
          req.flush([events]);
     });
     it('should call EventsService getLastEvents()  method', () => {
          const events = {
               id: 122,
               clientId: 233,
               measure_date: '2024-12-12',
          };

          const url = `${EVENTS_API_PATHS.LAST}`;
          service.getLastEvents().subscribe();
          const req = httpTestingController.expectOne(url, 'get getLastEvents api');
          expect(req.request.method).toBe('GET');
          req.flush([events]);
     });
     it('should call EventsService getEventsListByType()  method', () => {
          const id = 1;
          const events = {
               id: 122,
               clientId: 233,
               measure_date: '2024-12-12',
          };

          const url = `${EVENTS_API_PATHS.LIST}/${id}`;
          service.getEventsListByType(id).subscribe();
          const req = httpTestingController.expectOne(url, 'get getEventsListByType api');
          expect(req.request.method).toBe('GET');
          req.flush([events]);
     });

     it('should call EventsService update with post method', () => {
          const id = 1;
          const event = {
               probe_date: '2024-12-12',
               delivery_date: '2024-12-12',
               measure_date: '2024-12-12',
          };
          const url = `${CLIENTS_API_PATHS.EVENTS_UPDATE}${id}`;
          service.updateClientEvents(id, event).subscribe();
          const req = httpTestingController.expectOne(url, 'update api');
          expect(req.request.method).toBe('POST');
          req.flush(event);
     });
     it('should call EventsService create with post method', () => {
          const id = 1;
          const event = {
               probe_date: '2024-12-12',
               delivery_date: '2024-12-12',
               measure_date: '2024-12-12',
          };
          const url = `${CLIENTS_API_PATHS.CREATE}${id}`;
          service.createClientEvent(id, event).subscribe();
          const req = httpTestingController.expectOne(url, 'create api');
          expect(req.request.method).toBe('POST');
          req.flush(event);
     });
     describe('#notificationService', () => {
          it('should be call success msg ', () => {
               notificationService.success('success test');
               expect(toastrService.success).toHaveBeenCalledWith('success test');
          });

          it('should be call success msg with description ', () => {
               notificationService.success('success test', 'description');
               expect(toastrService.success).toHaveBeenCalledWith('success test description');
          });

          it('should be call error msg ', () => {
               notificationService.error('');
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas pobierania danych');
          });

          it('should be call error msg ', () => {
               notificationService.error('');
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas pobierania danych');
          });
          it('should be call error save msg ', () => {
               notificationService.errorSave('');
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas zapisu danych');
          });
          it('should be call info msg ', () => {
               notificationService.info('test info');
               expect(toastrService.info).toHaveBeenCalledWith('test info');
          });
          it('should be call warning msg', () => {
               notificationService.warning('test warning');
               expect(toastrService.warning).toHaveBeenCalledWith('test warning');
          });
          it('should be call system msg', () => {
               notificationService.system('test system');
               expect(toastrService.warning).toHaveBeenCalledWith('test system');
          });
     });
});
