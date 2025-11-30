import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@Component({
     selector: 'app-navigation',
     templateUrl: './navigation.component.html',
     styleUrls: ['./navigation.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [
          CommonModule,
          MatToolbarModule,
          MatIconModule,
          ButtonsModule,
          MatButtonModule,
          BsDropdownModule,
          RouterModule,
     ],
})
export class NavigationComponent {
     @Input() public isAdmin: boolean;
}
