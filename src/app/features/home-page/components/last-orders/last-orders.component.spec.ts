import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TableHeaderComponent } from '@shared/modules/data-table/table-header/table-header.component';
import { LastOrdersComponent } from './last-orders.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LastOrder } from '@features/orders-page/models/orders.interface';

describe('LastOrdersComponent', () => {
     let component: LastOrdersComponent;
     let fixture: ComponentFixture<LastOrdersComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               imports: [RouterTestingModule, NoopAnimationsModule, NgxDatatableModule],
               declarations: [LastOrdersComponent, TableHeaderComponent],
          }).compileComponents();

          fixture = TestBed.createComponent(LastOrdersComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should form change emit value', () => {
          const spy = spyOn(component.clientRedirect, 'emit');
          component.showClient(1);
          expect(spy).toHaveBeenCalledTimes(1);
     });

     it('should form change emit value', () => {
          const spy = spyOn(component.orderRedirect, 'emit');
          component.showOrder(1);
          expect(spy).toHaveBeenCalledTimes(1);
     });

     it('should render title in a page-title class', () => {
          fixture.detectChanges();
          const compiled = fixture.debugElement.nativeElement;
          expect(compiled.querySelector('.page-title').textContent).toContain('Ostatnie zamówienia');
     });

     it('should render last order table', fakeAsync(() => {
          const compiled = fixture.debugElement.nativeElement;
          const data: LastOrder[] = [
               {
                    status: 'w produkcji',
                    invoice_nr: '001-17',
                    client_nr: '00-309xxx',
                    order_date: '2017-05-23 15:03:00',
               },
          ];

          component.lastOrders = data;
          fixture.detectChanges();
          tick(1000);
          expect(compiled.querySelector('ngx-datatable')).toBeTruthy(); //OK
     }));
});
