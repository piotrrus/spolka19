import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
     providedIn: 'root',
})
export class NotificationMessageService {
     constructor(private toastr: ToastrService) {}

     public system(message: string): void {
          this.toastr.warning(message);
     }

     public warning(message: string): void {
          this.toastr.warning(message);
     }

     public error(message: string): void {
          this.toastr.error(message);
     }

     public errorSave(ć: string): void {
          this.toastr.error('Wystąpił błąd podczas zapisu danych');
     }

     public info(message: string): void {
          this.toastr.info(message);
     }

     public success(message: string, description?: string): void {
          const msg: string = description ? message + ' ' + description : message;
          this.toastr.success(msg);
     }
}
