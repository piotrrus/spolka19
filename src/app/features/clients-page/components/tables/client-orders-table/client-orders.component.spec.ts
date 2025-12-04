import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientOrdersComponent } from './client-orders.component';

describe('ClientOrdersComponent', () => {
     let component: ClientOrdersComponent;

     let fixture: ComponentFixture<ClientOrdersComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [ClientOrdersComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(ClientOrdersComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Clients Orders Table ', () => {
          it('should emit addClientOrder', () => {
               //  const orderId: string = '123';
               const spy = spyOn(component.addClientOrder, 'emit');
               component.addOrder();
               expect(spy).toHaveBeenCalledTimes(1);
          });

          it('should emit navigateToOrderDetails', () => {
               //  const orderId: string = '123';
               const spy = spyOn(component.navigateToOrderDetails, 'emit');
               component.showDetails(1);
               expect(spy).toHaveBeenCalledTimes(1);
          });

          //      it('should emit addOrder', () => {
          //           const spy = spyOn(component.addOrderAction, 'emit');
          //           component.addOrder(clientId);
          //           expect(spy).toHaveBeenCalledWith(clientId);
          //      });
          //      it('should emit new addOrder', () => {
          //           const spy = spyOn(component.addNewOrderAction, 'emit');
          //           component.addNewOrder(clientId);
          //           expect(spy).toHaveBeenCalledWith(clientId);
          //      });
          //      //
          //      it('should emit deleteClient', () => {
          //           const spy = spyOn(component.deleteClientAction, 'emit');
          //           component.deleteClient(clientId);
          //           expect(spy).toHaveBeenCalledWith(clientId);
          //      });
     });
});
