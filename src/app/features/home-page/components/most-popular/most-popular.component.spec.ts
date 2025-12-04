import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MostPopularComponent } from './most-popular.component';

describe('MostPopularComponent', () => {
     let component: MostPopularComponent;
     let fixture: ComponentFixture<MostPopularComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [MostPopularComponent],
               imports: [NoopAnimationsModule],
          }).compileComponents();

          fixture = TestBed.createComponent(MostPopularComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render title in a p tag', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('p').textContent).toContain('Najbardziej popularne');
     });
});
