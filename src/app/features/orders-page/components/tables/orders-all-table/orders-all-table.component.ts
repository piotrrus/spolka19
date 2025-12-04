import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '@features/orders-page/models/orders.interface';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-orders-all-table',
     templateUrl: './orders-all-table.component.html',
     styleUrls: ['./orders-all-table.component.scss'],
     imports: [CommonModule, NgxDatatableModule],
})
export class OrdersAllTableComponent {
     @Input() public tableTitle = '';
     @Input() public tableData: Order[] | null = [];

     @Output() public deleteClientAction = new EventEmitter<number>();
     @Output() public showClientDetailsAction = new EventEmitter<number>();
     @Output() public showOrderDetailsAction = new EventEmitter<Order>();

     @Output() public addOrderAction = new EventEmitter<number>();

     public deleteClient(id: number): void {
          this.deleteClientAction.emit(id);
     }

     public addOrder(id: number): void {
          this.addOrderAction.emit(id);
     }

     public showOrderDetails(order: Order): void {
          this.showOrderDetailsAction.emit(order);
     }

     public showClientDetails(id: number): void {
          this.showClientDetailsAction.emit(id);
     }
}
