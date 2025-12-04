import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
// import { NotificationMessageService } from '@core/notifications/notification.service';
import { ClientsDataStore } from './client-crud-facade';
import { ClientMeasuresService } from '../services/client-measures-service';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ClientsService } from '../services/clients-service';

describe('ClientsDataStore', () => {
     let service: ClientsService;
     let store: ClientsDataStore;
     let httpTestingController: HttpTestingController;

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [
                    HttpClientTestingModule,
                    MatIconModule,
                    MatIconTestingModule,
                    MatDialogModule,
                    ToastrModule.forRoot(),
               ],
               providers: [
                    ClientsService,
                    ClientMeasuresService,
                    ClientsDataStore,
                    MatSnackBar,
                    { provide: MatDialogRef, useValue: {} },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          });

          service = TestBed.inject(ClientsService);
          httpTestingController = TestBed.inject(HttpTestingController);
          store = TestBed.inject(ClientsDataStore);
     });

     afterEach(() => {
          httpTestingController.verify();
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });

     it('should be call ClientsDataStore getList ', () => {
          const spy = spyOn(service, 'getList');
          store.getList();
          expect(spy).toHaveBeenCalled();
     });

     // it('should be call ClientsDataStore updateClient ', () => {
     //      const client = clientData;
     //      const spy = spyOn(store, 'updateClient');
     //      store.updateClient(2, client);
     //      expect(spy).toHaveBeenCalled();
     // });

     // it('should be call ClientsDataStore openDetailsModal ', () => {
     //      const spy = spyOn(store, 'openDetailsModal');
     //      store.openDetailsModal(2);
     //      expect(spy).toHaveBeenCalled();
     // });
     //
     // it('should be call ClientMeasuresService getMeasures with get method', () => {
     //      const id = 1;
     //      service.getMeasures(1).subscribe();
     //      const req = httpTestingController.expectOne(
     //           `${CLIENTS_API_PATHS.MEASURES}${id}`,
     //           'get measures api'
     //      );
     //      expect(req.request.method).toBe('GET');
     // });

     // it('should call ClientMeasuresService create() with post method', () => {
     //      const measures = clientMeasuresDatsSave;
     //      const url = `${environment.api}${CLIENTS_API_PATHS.MEASURES_CREATE}`;
     //      service.createClientMeasures(measures).subscribe();
     //      const req = httpTestingController.expectOne(url, 'create api');
     //      expect(req.request.method).toBe('POST');
     //      req.flush(clientMeasuresData);
     // });
});
