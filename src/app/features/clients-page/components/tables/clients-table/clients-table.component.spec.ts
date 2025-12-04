import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ClientsTableComponent } from './clients-table.component';

describe('ClientsTableComponent', () => {
     let component: ClientsTableComponent;

     let fixture: ComponentFixture<ClientsTableComponent>;
     const clientId = 123;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [ClientsTableComponent],
               imports: [NgxDatatableModule],
          }).compileComponents();

          fixture = TestBed.createComponent(ClientsTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
     describe('#Clients Table ', () => {
          it('should emit showDetails', () => {
               const spy = spyOn(component.showDetailsAction, 'emit');
               component.showDetails(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
          it('should emit addOrder', () => {
               const spy = spyOn(component.addOrderAction, 'emit');
               component.addOrder(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
          it('should emit new addOrder', () => {
               const spy = spyOn(component.addNewClientOrderAction, 'emit');
               component.newClientOrder(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
          it('should emit deleteClient', () => {
               const spy = spyOn(component.deleteClientAction, 'emit');
               component.deleteClient(clientId);
               expect(spy).toHaveBeenCalledWith(clientId);
          });
     });
});
