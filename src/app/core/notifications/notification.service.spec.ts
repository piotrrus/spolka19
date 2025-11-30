import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { NotificationMessageService } from './notification.service';

describe('NotificationService', () => {
     let service: NotificationMessageService;
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
                    NotificationMessageService,
                    MatSnackBar,
                    { provide: ToastrService, useValue: toastrService },
               ],
          });

          service = TestBed.inject(NotificationMessageService);
     });

     describe('#toastrService', () => {
          it('should be created service', () => {
               expect(service).toBeTruthy();
          });

          it('should be call success msg ', () => {
               service.success('success test');
               expect(toastrService.success).toHaveBeenCalledWith('success test');
          });

          it('should be call error msg ', () => {
               service.error('');
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas pobierania danych');
          });

          it('should be call error save msg ', () => {
               service.errorSave('');
               expect(toastrService.error).toHaveBeenCalledWith('Wystąpił błąd podczas zapisu danych');
          });

          it('should be call info msg ', () => {
               service.info('test info');
               expect(toastrService.info).toHaveBeenCalledWith('test info');
          });

          it('should be call warning msg', () => {
               service.warning('test warning');
               expect(toastrService.warning).toHaveBeenCalledWith('test warning');
          });

          it('should be call system msg ', () => {
               service.system('test system');
               expect(toastrService.warning).toHaveBeenCalledWith('test system');
          });

          it('should be call success msg with description', () => {
               service.success('test success', 'description');
               expect(toastrService.success).toHaveBeenCalledWith('test success description');
          });
     });
});
