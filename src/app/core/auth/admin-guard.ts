import { Injectable } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service';

@Injectable({
     providedIn: 'root',
})
export class AdminGuard {
     constructor(private authService: AuthService) {}

     canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
          return this.authService.isAdmin();
     }
}
