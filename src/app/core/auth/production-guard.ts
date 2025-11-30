import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
     providedIn: 'root',
})
export class AuthGuard {
     constructor(
          private authService: AuthService,
          private router: Router
     ) {}

     canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          const isProduction: boolean = this.authService.isProduction();
          return isProduction;
     }
}
