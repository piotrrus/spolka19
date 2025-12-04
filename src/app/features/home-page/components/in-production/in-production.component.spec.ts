import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InProductionComponent } from './in-production.component';

describe('InProductionComponent', () => {
     let component: InProductionComponent;
     let fixture: ComponentFixture<InProductionComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [InProductionComponent],
               imports: [NoopAnimationsModule],
          }).compileComponents();

          fixture = TestBed.createComponent(InProductionComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render no orders in a p tag', () => {
          component.sentToProduction = 0;
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('p').textContent).toContain('Brak zamówień przesłanych na produkcję');
     });

     it('should form emit productionOrdersRedirect', () => {
          const spy = spyOn(component.productionOrdersRedirect, 'emit');
          component.showOrders();
          expect(spy).toHaveBeenCalledWith(true);
     });
});
