import { Component, DestroyRef } from '@angular/core';
import { UserService } from '@features/user/services/user.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { HOME_API_PATHS } from '@features/home-page/enums/home.paths.enum';
import { AuthService } from '@core/auth/auth-service';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { UserLogin } from '@features/user/models/user.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LoginFormComponent } from '@features/user/components/forms/login/login-form.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
     selector: 'app-login-page',
     templateUrl: './login-page.component.html',
     styleUrls: ['./login-page.component.scss'],
     imports: [CommonModule, MatButtonModule, LoginFormComponent],
})
export class LoginPageComponent {
     private loginData: UserLogin;
     public isFormValid = false;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly router: Router,
          private readonly notificationService: NotificationMessageService,
          private readonly userService: UserService,
          private readonly authService: AuthService
     ) {
          this.router.url.includes('logout') ? this.logout() : null;
     }

     public login(): void {
          this.userService
               .login(this.loginData)
               .pipe(
                    tap((data) => {
                         // console.log(data);
                         this.authService.setLogged(data);
                         data.success ? void this.router.navigate([HOME_API_PATHS.HOME]) : null;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onFormChange($loginData: UserLogin): void {
          this.isFormValid ? (this.loginData = $loginData) : null;
     }

     public onFormValid(isFormValid: boolean): void {
          this.isFormValid = isFormValid;
     }

     public logout(): void {
          this.userService
               .logout()
               .pipe(
                    tap(() => {
                         this.authService.clearLogged();
                         this.notificationService.success('Użytkownik został wylogowany');
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }
}
