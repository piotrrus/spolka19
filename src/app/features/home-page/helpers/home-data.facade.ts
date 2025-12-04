import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockService } from '@features/stock-page/services/stock.service';
import { OrdersService } from '@features/orders-page/services/orders.service';
import { EventsService } from '@features/events-page/services/events.service';
import { LackOfArticles } from '@features/stock-page/models/lack-articles.interface';
import { MostPopularFabric } from '@features/stock-page/models/most-popular-fabric.interface';
import { MostPopularAssort } from '@features/assorts-page/models/assorts.interface';
import { LastOrder, Order, OrdersUnsent } from '@features/orders-page/models/orders.interface';
import { Event } from '@features/events-page/models/events.interface';

@Injectable()
export class HomeDataFacade {
     public lastEvents$: Observable<Event[]> = this.eventsService.getLastEvents();
     public lastOrders$: Observable<LastOrder[]> = this.ordersService.getLastOrders();
     public unsentOrders$: Observable<OrdersUnsent[]> = this.ordersService.getOrdersUnsent();
     public ordersToTake$: Observable<Order[]> = this.ordersService.getOrdersToTake();
     public lackOfArticles$: Observable<LackOfArticles[]> = this.stockService.getLackOfArticles();
     public sentToProduction$: Observable<number> = this.ordersService.getSentToProduction();
     public mostPopularAssorts$: Observable<MostPopularAssort[]> =
          this.stockService.getMostPopularAssorts();
     public mostPopularFabrics$: Observable<MostPopularFabric[]> =
          this.stockService.getMostPopularFabrics();

     constructor(
          private stockService: StockService,
          private ordersService: OrdersService,
          private eventsService: EventsService
     ) {}
}
