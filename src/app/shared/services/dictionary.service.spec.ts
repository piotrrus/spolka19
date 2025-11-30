import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { DictionaryService } from './dictionary.service';
import { DICTIONARY_API_PATHS } from './dictionary.paths.enum';
import { NotificationMessageService } from '@core/notifications/notification.service';

describe('DictionaryService', () => {
     let service: DictionaryService;
     let notificationService: NotificationMessageService;
     let httpTestingController: HttpTestingController;
     const toastrService = jasmine.createSpyObj<ToastrService>('ToasterService', [
          'error',
          'success',
          'warning',
          'info',
     ]);

     beforeEach(() => {
          TestBed.configureTestingModule({
               imports: [HttpClientTestingModule, ToastrModule.forRoot()],
               providers: [
                    DictionaryService,
                    MatSnackBar,
                    NotificationMessageService,
                    { provide: ToastrService, useValue: toastrService },
               ],
          });

          service = TestBed.inject(DictionaryService);
          httpTestingController = TestBed.inject(HttpTestingController);
          notificationService = TestBed.inject(NotificationMessageService);
     });

     it('should be created service', () => {
          expect(service).toBeTruthy();
     });
     describe('#DictionaryService', () => {
          it('should be call StockService service with get method', () => {
               const listId = 1;
               const url = `${DICTIONARY_API_PATHS.LIST}${listId}`;
               service.getList(1).subscribe();

               const req = httpTestingController.expectOne(url, 'get dictionary list api');
               expect(req.request.method).toBe('GET');
          });
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
     // describe('#Catch Error', () => {
     //      it('should be call error handler', () => {
     //           // pending();
     //           const errorResponse = {
     //                status: 404,
     //                statusText: 'Not found',
     //           };

     //           const url = 'dictionary/1';
     //           service.getList(1).subscribe({
     //                error: (err) => {
     //                     expect(err.message).toEqual('404 Not found');
     //                },
     //           });
     //           const req = httpTestingController.expectOne(url, 'get dictionary api error');
     //           req.flush(1, errorResponse);
     //      });
     // });
});
