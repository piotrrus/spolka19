import { Component, DestroyRef } from '@angular/core';
import { UserService } from '@features/user/services/user.service';
import { UserRegister } from '@features/user/models/user.interface';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { NotificationMessageService } from '@core/notifications/notification.service';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RegisterFormComponent } from '@features/user/components/forms/register/register-form.component';
@Component({
     selector: 'app-register-page',
     templateUrl: './register-page.component.html',
     styleUrls: ['./register-page.component.scss'],
     imports: [CommonModule, MatButtonModule, RegisterFormComponent],
})
export class RegisterPageComponent {
     private userData: UserRegister;
     public isFormValid = false;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly router: Router,
          private readonly notificationService: NotificationMessageService,
          private readonly userService: UserService
     ) {}

     public register(): void {
          this.userService
               .register(this.userData)
               .pipe(
                    tap((data) => {
                         if (data.success) {
                              this.notificationService.success(
                                   'Użytkownik zarejestrowany pomyślnie'
                              );
                              this.router.navigateByUrl('login');
                         }
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onFormChange($userData: UserRegister): void {
          this.userData = $userData;
     }

     public onFormValid(isFormValid: boolean): void {
          this.isFormValid = isFormValid;
     }
}
