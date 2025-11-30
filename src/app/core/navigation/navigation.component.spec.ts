import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from './navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

describe('NavigationComponent', () => {
     let component: NavigationComponent;
     let fixture: ComponentFixture<NavigationComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [MatToolbarModule, MatIconModule],
               declarations: [NavigationComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(NavigationComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
