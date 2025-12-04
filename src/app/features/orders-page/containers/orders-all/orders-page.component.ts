import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import { ORDERS_API_PATHS } from '@features/orders-page/enums/orders.paths.enum';
import { ORDER_TITLES } from '@features/orders-page/enums/orders.titles.enum';
import { Order } from '@features/orders-page/models/orders.interface';
import { OrdersService } from '@features/orders-page/services/orders.service';
import { List } from '@shared/interfaces/list.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { CommonModule } from '@angular/common';
import { OrdersAllTableComponent } from '@features/orders-page/components/tables/orders-all-table/orders-all-table.component';

@Component({
     selector: 'app-orders-page',
     templateUrl: './orders-page.component.html',
     styleUrls: ['./orders-page.component.scss'],
     imports: [CommonModule, TableHeaderComponent, OrdersAllTableComponent],
     providers: [OrdersService],
})
export class OrdersPageComponent implements OnInit {
     public tableData: Order[] = [];
     public tempTable: Order[] = [];
     public statusList: List[] = [];
     public dataLength = 0;

     public tableTitle = '';
     public ordersStatusId: number | null = null;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly route: ActivatedRoute,
          private readonly router: Router,
          private readonly ordersService: OrdersService
     ) {}

     public ngOnInit(): void {
          this.getOrdersStatusList();
          this.getOrdersList();
     }

     private getOrderData(): void {
          this.ordersStatusId = null;
          this.route.params
               .pipe(
                    tap((param) => {
                         // this.getOrdersList();
                         if (param['statusId']) {
                              this.ordersStatusId = Number(param['statusId']);
                              this.getOrdersList();
                         }
                         this.tableTitle = this.getTableTitle(param['statusId']);
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     private getTableTitle(statusId: number): string {
          if (statusId) {
               const tableName: string[] = this.statusList
                    .filter((d) => d.id === this.ordersStatusId)
                    .map((items) => items.name);

               return `Zamówienia ${tableName[0]}`;
          } else {
               return ORDER_TITLES.TABLE;
          }
     }

     private getOrdersList(): void {
          this.tableData = [];
          this.ordersService
               .getOrdersList(this.ordersStatusId)
               .pipe(
                    tap((data) => {
                         console.log(data);
                         this.dataLength = data.length;
                         this.tableData = data;
                         this.tempTable = data;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     private getOrdersStatusList(): void {
          this.ordersService
               .getOrdersStatusList()
               .pipe(
                    tap((data) => {
                         this.statusList = data;
                         this.getOrderData();
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public updateFilter($event: string): void {
          this.tempTable = this.tableData.filter((obj: Order) => {
               return (
                    obj.clientNr.toLowerCase().includes($event.toLocaleLowerCase()) ||
                    obj.invoiceNr.toLowerCase().includes($event.toLocaleLowerCase()) ||
                    obj.status.toLowerCase().includes($event.toLocaleLowerCase()) ||
                    obj.orderDate.includes($event)
               );
          });
     }

     public navigateToOrderDetails($order: Order): void {
          void this.router.navigate([`${ORDERS_API_PATHS.DETAILS}${$order.orderId}`]);
     }

     public navigateToClientDetails($id: number): void {
          void this.router.navigate([`${CLIENTS_API_PATHS.DETAILS}${$id}`]);
     }
}
