import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/auth/auth-service';
import { NavigationComponent } from '@core/navigation/navigation.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss',
     imports: [
          CommonModule,
          RouterOutlet,
          // NgbDropdownModule,
          MatIconModule,
          NavigationComponent,
          // NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
     ],
     // providers: [ChangePasswordModalHelper],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
     // providers: [
     //      AuthService,
     //      NotificationMessageService,
     // ],
})
export class AppComponent {
     public title = 'spolka19';
     public isLogged$: Observable<boolean> = this.authService.isLogged$;
     public isLogged: boolean = this.authService.getLogged();
     public isAdmin = false;
     //this.authService.isAdmin();

     constructor(
          private authService: AuthService, // private spinner: NgxSpinnerService,
          private iconRegistry: MatIconRegistry,
          private domSanitizer: DomSanitizer
     ) {
          this.authService.initilize();
          this.iconRegistry.addSvgIcon(
               'trash',
               this.domSanitizer.bypassSecurityTrustResourceUrl('trash.svg')
          );
          this.iconRegistry.addSvgIcon(
               'edit',
               this.domSanitizer.bypassSecurityTrustResourceUrl('edit.svg')
          );
     }
}
