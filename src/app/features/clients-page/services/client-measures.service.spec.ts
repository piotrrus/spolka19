import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { CLIENTS_API_PATHS } from '../enums/clients-paths.enum';
import { ClientMeasuresService } from './client-measures-service';
// import { NotificationMessageService } from '@core/notifications/notification.service';
import { environment } from 'src/environments/environment';
import { clientMeasuresData } from '../stubs/client-measures.stub';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';

describe('ClientMeasuresService', () => {
     let service: ClientMeasuresService;
     let httpTestingController: HttpTestingController;
     // let notificationService: NotificationMessageService;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [
                    ClientMeasuresService,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
               ],
          });

          service = TestBed.inject(ClientMeasuresService);
          httpTestingController = TestBed.inject(HttpTestingController);
          // notificationService = TestBed.inject(NotificationMessageService);
     });

     afterEach(() => {
          httpTestingController.verify();
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call ClientMeasuresService clientMeasures with get method', () => {
          const id = 2;
          const url = `${environment.api}${CLIENTS_API_PATHS.MEASURES}${id}`;
          service.getMeasures(id).subscribe();
          const req = httpTestingController.expectOne(url, 'get details api');
          expect(req.request.method).toBe('GET');
          req.flush(clientMeasuresData);
     });

     it('should call ClientMeasuresService update() with post method', () => {
          const id = 2;
          const measures = clientMeasuresData;
          const url = `${environment.api}${CLIENTS_API_PATHS.MEASURES_UPDATE}${id}`;
          service.updateClientMeasures(id, measures).subscribe();
          const req = httpTestingController.expectOne(url, 'update api');
          expect(req.request.method).toBe('POST');
          req.flush(clientMeasuresData);
     });

     it('should call ClientMeasuresService create() with post method', () => {
          const measures = clientMeasuresData;
          const url = `${environment.api}${CLIENTS_API_PATHS.MEASURES_CREATE}`;
          service.createClientMeasures(measures).subscribe();
          const req = httpTestingController.expectOne(url, 'create api');
          expect(req.request.method).toBe('POST');
          req.flush(clientMeasuresData);
     });

     it('should be call ClientMeasuresService getMeasures with get method', () => {
          const description = { value: '', label: 'wzrost', description: 'wzrost' };
          service.getMeasuresDescriptions().subscribe();
          const req = httpTestingController.expectOne(
               'assets/data/client-measures-description.json',
               'get measures description'
          );
          expect(req.request.method).toBe('GET');
          req.flush(description);
     });
});
