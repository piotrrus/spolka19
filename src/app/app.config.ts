import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
// import { HttpsInterceptor } from '@core/interceptors/https.interceptor';
import { AuthService } from '@core/auth/auth-service';
// import { interceptorProviders } from '@core/providers/interceptor-providers';
// import { HttpsInterceptor } from '@core/interceptors/old-https.interceptor';
import { httpInterceptor } from '@core/interceptors/http.interceptor';
import { errorInterceptor } from '@core/interceptors/error.interceptor';
import { tokenInterceptor } from '@core/interceptors/token.interceptor';
import { provideNativeDateAdapter } from '@angular/material/core';
// import { AuthGuard } from './auth/auth-guard';
// import { AuthService } from './auth/auth-service';
// import { UserService } from '@features/user/services/user.service';

export const appConfig: ApplicationConfig = {
     providers: [
          AuthService,
          NotificationMessageService,

          provideToastr(),
          provideAnimations(),
          provideNoopAnimations(),
          NotificationMessageService,
          provideZoneChangeDetection({ eventCoalescing: true }),
          provideRouter(routes),

          provideHttpClient(
               withInterceptors([httpInterceptor, tokenInterceptor, errorInterceptor])
          ),

          provideNativeDateAdapter(),
          // provideDateFnsAdapter
          // provideLuxonDateAdapter,
          // provideMomentDateAdapter
     ],
};
