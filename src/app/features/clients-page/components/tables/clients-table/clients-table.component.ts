import { Component, Output, EventEmitter, Input } from '@angular/core';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { ClientDataTableColumns } from './clients-data-table-columns';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { Client } from '@features/clients-page/models/client.interface';

@Component({
     selector: 'app-clients-table',
     templateUrl: './clients-table.component.html',
     styleUrls: ['./clients-table.component.scss'],
     imports: [CommonModule, NgxDatatableModule],
})
export class ClientsTableComponent extends BaseTableComponent {
     @Input() clients: Client[] | null;

     @Output() public deleteClientAction = new EventEmitter<number>();
     @Output() public showDetailsAction = new EventEmitter<number>();
     @Output() public addOrderAction = new EventEmitter<number>();
     @Output() public addNewClientOrderAction = new EventEmitter<number>();

     public dataTableColumns = ClientDataTableColumns;

     public deleteClient(clientId: number): void {
          this.deleteClientAction.emit(clientId);
     }

     public addOrder(orderId: number): void {
          this.addOrderAction.emit(orderId);
     }

     public newClientOrder(clientId: number): void {
          this.addNewClientOrderAction.emit(clientId);
     }

     public showDetails(clientId: number): void {
          this.showDetailsAction.emit(clientId);
     }
}
