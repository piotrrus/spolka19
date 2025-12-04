import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UnsentOrdersComponent } from './unsent-orders.component';
import { OrdersUnsent } from '@features/orders-page/models/orders.interface';

describe('UnsentOrdersComponent', () => {
     let component: UnsentOrdersComponent;
     let fixture: ComponentFixture<UnsentOrdersComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [UnsentOrdersComponent],
               imports: [NoopAnimationsModule],
          }).compileComponents();

          fixture = TestBed.createComponent(UnsentOrdersComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should render title in a div home-panel-title class', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('.home-panel-title').textContent).toContain('Materiał niezamówiony');
     });

     it('should render Unsent Orders table', fakeAsync(() => {
          const data: OrdersUnsent[] = [
               {
                    contractor: 'zzzzz',
                    material_nr: 'aaaaa',
                    client_nr: 'abcd',
                    invoice_nr: '001-17',
                    order_date: '20024-12-12',
                    status: 'none',
               },
          ];
          component.unsentOrders = data;
          fixture.detectChanges();
          tick(1000);

          // fixture.whenStable().then(() => {

          // fixture.whenStable().then(() => {

          //});
          // fixture.debugElement.queryAll(By.css('.home-table tr'));
          // expect(compiled.querySelector('.home-table')).toBeTruthy();
          // fixture.whenStable().then(() => {
          //      const rows = fixture.debugElement.queryAll(By.css('.home-table tr'));
          //      expect(rows.length).toBe(1);
          //      //      // done();
          // });
     }));

     it('should form emit showUnsentOrders', () => {
          const spy = spyOn(component.showUnsentOrders, 'emit');
          component.showMore();
          expect(spy).toHaveBeenCalledWith(true);
     });
});
