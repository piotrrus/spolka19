import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LiningService } from './lining.service';

// import { liningsData } from '../stubs/linings-table.stub';
// import { NotificationMessageService } from '@core/notifications/notification.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';
import { LiningModalHelper } from '../helpers/lining-modal.helper';
import { LiningDataStore } from './lining-data-store';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('LiningDataStore', () => {
     let service: LiningService;
     let httpTestingController: HttpTestingController;
     // let notificationService: NotificationMessageService;
     // let helper: LiningModalHelper;

     const toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
          'error',
          'success',
          'warning',
          'info',
     ]);

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot(), MatDialogModule],
               providers: [
                    LiningService,
                    LiningModalHelper,
                    LiningDataStore,
                    MatSnackBar,
                    { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
                    { provide: ToastrService, useValue: toastrService },
                    {
                         provide: MatDialogRef,
                         useValue: {},
                    },
                    {
                         provide: MAT_DIALOG_DATA,
                         useValue: {},
                    },
               ],
          });

          service = TestBed.inject(LiningService);
          httpTestingController = TestBed.inject(HttpTestingController);
          // notificationService = TestBed.inject(NotificationMessageService);

          // helper = TestBed.inject(LiningModalHelper);
     });

     afterEach(() => {
          httpTestingController.verify();
     });

     it('should be created data store service', () => {
          expect(service).toBeTruthy();
     });

     // it('should be call LiningsService getList with get method', () => {
     //      store.getList();
     //      // helper.
     //      // const url = `${environment.api}${LINING_API_PATHS.LIST}`;
     //      expect(service.getList().subscribe());
     //      // const req = httpTestingController.expectOne(url, 'get list api');
     //      // expect(req.request.method).toBe('GET');
     //      // req.flush([liningsData]);
     // });

     // it('should call LiningService remove() with delete method', () => {
     //      const id = 2;
     //      const url = `${environment.api}${LINING_API_PATHS.DELETE}${id}`;
     //      service.remove(id).subscribe();
     //      const req = httpTestingController.expectOne(url, 'delete api');
     //      expect(req.request.method).toBe('DELETE');
     //      req.flush(id);
     // });
     //OK
     // it('should call LiningService create() with post method', () => {
     //      const lining = liningsData;
     //      const url = `${environment.api}${LINING_API_PATHS.CREATE}`;
     //      service.create(lining).subscribe();
     //      const req = httpTestingController.expectOne(url, 'create api');
     //      expect(req.request.method).toBe('POST');
     //      req.flush(liningsData);
     // });
     // it('should call LiningService create() with post method', () => {
     //      const lining = liningsData;
     //      const url = `${environment.api}${LINING_API_PATHS.UPDATE}`;
     //      service.update(2, lining).subscribe();
     //      const req = httpTestingController.expectOne(url, 'update api');
     //      expect(req.request.method).toBe('POST');
     //      req.flush(liningsData);
     // });

     // describe('#notificationService', () => {
     //      it('should be call success msg ', () => {
     //           notificationService.success('success test');
     //           expect(toastrService.success).toHaveBeenCalledWith('success test');
     //      });

     //      it('should be call success msg with description ', () => {
     //           notificationService.success('success test', 'description');
     //           expect(toastrService.success).toHaveBeenCalledWith('success test description');
     //      });

     //      it('should be call error msg ', () => {
     //           notificationService.error('');
     //           expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas pobierania danych');
     //      });

     //      it('should be call error msg ', () => {
     //           notificationService.error('');
     //           expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas pobierania danych');
     //      });
     //      it('should be call error save msg ', () => {
     //           notificationService.errorSave('');
     //           expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas zapisu danych');
     //      });
     //      it('should be call info msg ', () => {
     //           notificationService.info('test info');
     //           expect(toastrService.info).toHaveBeenCalledWith('test info');
     //      });
     //      it('should be call warning msg', () => {
     //           notificationService.warning('test warning');
     //           expect(toastrService.warning).toHaveBeenCalledWith('test warning');
     //      });
     //      it('should be call system msg', () => {
     //           notificationService.system('test system');
     //           expect(toastrService.warning).toHaveBeenCalledWith('test system');
     //      });
     // });
});
