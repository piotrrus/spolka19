import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersToTakeSummaryComponent } from './orders-to-take-summary.component';

describe('OrdersToTakeSummaryComponent', () => {
     let component: OrdersToTakeSummaryComponent;
     let fixture: ComponentFixture<OrdersToTakeSummaryComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [OrdersToTakeSummaryComponent],
               imports: [NoopAnimationsModule],
          }).compileComponents();

          fixture = TestBed.createComponent(OrdersToTakeSummaryComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render title in a p tag', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('p').textContent).toContain(
               'Brak zamówień do odbioru.'
               // ' Do odbioru przygotowane są następujące'
          );
     });

     it('should form emit ordersToTakeRedirect', () => {
          const spy = spyOn(component.ordersToTakeRedirect, 'emit');
          component.showOrders();
          expect(spy).toHaveBeenCalledWith(true);
     });
});
