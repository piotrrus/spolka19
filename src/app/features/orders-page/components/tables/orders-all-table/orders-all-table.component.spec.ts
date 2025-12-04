import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OrdersAllTableComponent } from './orders-all-table.component';
import { orderData } from '@features/orders-page/stubs/orders-table.stub';

describe('OrdersAllTableComponent', () => {
     let component: OrdersAllTableComponent;
     let fixture: ComponentFixture<OrdersAllTableComponent>;

     beforeEach(() => {
          TestBed.configureTestingModule({
               declarations: [OrdersAllTableComponent],
               imports: [
                    HttpClientTestingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSelectModule,
                    NoopAnimationsModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatIconTestingModule,
                    NgxDatatableModule,
               ],
          });
          fixture = TestBed.createComponent(OrdersAllTableComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });

     it('should deleteClientAction method emit event', () => {
          const openModal = spyOn(component.deleteClientAction, 'emit');
          component.deleteClient(60);
          expect(openModal).toHaveBeenCalledTimes(1);
     });

     it('should showOrderDetailsAction method emit event', () => {
          const openModal = spyOn(component.showOrderDetailsAction, 'emit');
          component.showOrderDetails(orderData);
          expect(openModal).toHaveBeenCalledTimes(1);
     });

     it('should addOrder method emit event', () => {
          const openModal = spyOn(component.addOrderAction, 'emit');
          component.addOrder(1);
          expect(openModal).toHaveBeenCalledTimes(1);
     });

     it('should openProductionFormModal method emit event', () => {
          const openModal = spyOn(component.showClientDetailsAction, 'emit');
          component.showClientDetails(60);
          expect(openModal).toHaveBeenCalledTimes(1);
     });
});
