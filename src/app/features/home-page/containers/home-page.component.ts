import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HomeDataFacade } from '../helpers/home-data.facade';
import { LackOfArticles } from '@features/stock-page/models/lack-articles.interface';
import { MostPopularFabric } from '@features/stock-page/models/most-popular-fabric.interface';
import { LastOrder, Order, OrdersUnsent } from '@features/orders-page/models/orders.interface';
import { MostPopularAssort } from '@features/assorts-page/models/assorts.interface';
import { ORDERS_API_PATHS } from '@features/orders-page/enums/orders.paths.enum';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import { Event } from '@features/events-page/models/events.interface';
import { ORDER_STATUS } from '@features/orders-page/enums/order.status.enum';
import { STOCK_API_PATHS } from '@features/stock-page/enums/stock.paths.enum';
import { CommonModule } from '@angular/common';
import { LastOrdersComponent } from '../components/last-orders/last-orders.component';
import { MostPopularComponent } from '../components/most-popular/most-popular.component';
import { UnsentOrdersComponent } from '../components/unsent-orders/unsent-orders.component';
import { LackOfAssortsComponent } from '../components/lack-of-assorts/lack-of-assorts.component';
// import { LastEventsComponent } from '../components/last-events/last-events.component';
import { InProductionComponent } from '../components/in-production/in-production.component';
import { OrdersToTakeSummaryComponent } from '../components/orders-to-take-summary/orders-to-take-summary.component';
import { StockService } from '@features/stock-page/services/stock.service';
import { OrdersService } from '@features/orders-page/services/orders.service';
import { EventsService } from '@features/events-page/services/events.service';

@Component({
     selector: 'app-home-page',
     templateUrl: './home-page.component.html',
     styleUrls: ['./home-page.component.scss'],
     imports: [
          CommonModule,
          LastOrdersComponent,
          MostPopularComponent,
          UnsentOrdersComponent,
          LackOfAssortsComponent,
          OrdersToTakeSummaryComponent,
          InProductionComponent,
          // LastEventsComponent,
     ],
     providers: [HomeDataFacade, StockService, OrdersService, EventsService],
})
export class HomePageComponent {
     public nrOfRows: number = 0;
     public addRow: number = 0;

     public readonly lastEvents$: Observable<Event[]> | null = this.homeDataFacade.lastEvents$;
     public readonly lastOrders$: Observable<LastOrder[]> | null = this.homeDataFacade.lastOrders$;
     public readonly unsentOrders$: Observable<OrdersUnsent[]> | null =
          this.homeDataFacade.unsentOrders$;
     public readonly ordersToTake$: Observable<Order[]> | null = this.homeDataFacade.ordersToTake$;
     public readonly lackOfAssorts$: Observable<LackOfArticles[]> | null =
          this.homeDataFacade.lackOfArticles$;
     public readonly sentToProduction$: Observable<number> | null =
          this.homeDataFacade.sentToProduction$;
     public readonly mostPopularAssorts$: Observable<MostPopularAssort[]> | null =
          this.homeDataFacade.mostPopularAssorts$;
     public readonly mostPopularFabrics$: Observable<MostPopularFabric[]> | null =
          this.homeDataFacade.mostPopularFabrics$;

     constructor(private readonly router: Router, private readonly homeDataFacade: HomeDataFacade) {
          this.lastEvents$?.subscribe((data) => {
               console.log(data);
          });
          this.lastOrders$?.subscribe((data) => {
               console.log(data);
          });
     }

     public showOrderDetails($id: number): void {
          void this.router.navigate([`${ORDERS_API_PATHS.DETAILS}${$id}`]);
     }

     public showClientDetails($id: number): void {
          void this.router.navigate([`${CLIENTS_API_PATHS.DETAILS}${$id}`]);
     }

     public showOrdersToTake(): void {
          void this.router.navigate([`${ORDERS_API_PATHS.LIST_STATUS_ID}${ORDER_STATUS.TO_TAKE}`]);
     }

     public showProductionOrders(): void {
          void this.router.navigate([
               `${ORDERS_API_PATHS.LIST_STATUS_ID}${ORDER_STATUS.IN_PRODUCTION}`,
          ]);
     }

     public showUnsentOrders(): void {
          void this.router.navigate([`${STOCK_API_PATHS.STATUS}${ORDER_STATUS.ORDERED}`]);
     }

     public showLackOfAssorts(): void {
          void this.router.navigate([STOCK_API_PATHS.LACK_IN_STOCK]);
     }
}
