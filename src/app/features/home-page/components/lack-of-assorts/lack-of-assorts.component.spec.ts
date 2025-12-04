import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LackOfAssortsComponent } from './lack-of-assorts.component';

describe('LackOfAssortsComponent', () => {
     let component: LackOfAssortsComponent;
     let fixture: ComponentFixture<LackOfAssortsComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [LackOfAssortsComponent],
               imports: [NoopAnimationsModule],
          }).compileComponents();

          fixture = TestBed.createComponent(LackOfAssortsComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should form emit showLackOfAssorts', () => {
          const spy = spyOn(component.showLackOfAssorts, 'emit');
          component.showMore();
          expect(spy).toHaveBeenCalledWith(true);
     });
});
