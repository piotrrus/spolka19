import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { ApiService } from '@core/api/api.service';
import { ORDERS_API_PATHS } from '../enums/orders.paths.enum';
import {
     AdvancePay,
     InProductionApi,
     LastOrder,
     LastOrdersApi,
     Order,
     OrderApi,
     OrderPriceElements,
     OrdersApi,
     OrdersUnsent,
     OrdersUnsentApi,
     Payment,
     Status,
     StatusList,
     StatusListApi,
} from '../models/orders.interface';
import { ApiService } from '@core/api/api.service';

@Injectable()
export class OrdersService extends ApiService {
     public getOrdersList(statusId: number | null = 0): Observable<Order[]> {
          const url: string = statusId
               ? `${ORDERS_API_PATHS.LIST_STATUS_ID}${statusId}`
               : ORDERS_API_PATHS.LIST;

          return this.get<OrdersApi>(url).pipe(map((order) => order.data));
     }

     public getOrderData(orderId: number): Observable<Order> {
          return this.get<OrderApi>(`${ORDERS_API_PATHS.ORDER_DETAILS}${orderId}`).pipe(
               map((data) => data.data)
          );
     }

     public getClientLastOrders(): Observable<LastOrder[]> {
          return this.get<LastOrdersApi>(ORDERS_API_PATHS.LAST).pipe(map((orders) => orders.data));
     }

     public getLastOrders(): Observable<LastOrder[]> {
          return this.get<LastOrdersApi>(ORDERS_API_PATHS.LAST).pipe(map((orders) => orders.data));
     }

     public getSentToProduction(): Observable<number> {
          return this.get<InProductionApi>(ORDERS_API_PATHS.IN_PRODUCTION).pipe(
               map((data) => data.data)
          );
     }

     public getOrdersToTake(): Observable<Order[]> {
          return this.get<OrdersApi>(ORDERS_API_PATHS.TO_TAKE).pipe(map((data) => data.data));
     }

     public getOrdersUnsent(): Observable<OrdersUnsent[]> {
          return this.get<OrdersUnsentApi>(ORDERS_API_PATHS.UNSENT).pipe(
               map((order) => order.data)
          );
     }

     public getOrdersStatusList(): Observable<StatusList[]> {
          return this.get<StatusListApi>(ORDERS_API_PATHS.STATUS_LIST).pipe(map((api) => api.data));
     }

     public changePayment(orderId: number, paid: Payment): Observable<OrdersApi> {
          return this.post<OrdersApi>(`${ORDERS_API_PATHS.PAYMENT}${orderId}`, paid);
     }

     public changeStatus(orderId: number, status: Status): Observable<OrdersApi> {
          return this.post<OrdersApi>(`${ORDERS_API_PATHS.STATUS_CHANGE}${orderId}`, status);
     }

     public changePayInAdvance(orderId: number, isAdvancePay: AdvancePay): Observable<OrdersApi> {
          return this.post<OrdersApi>(`${ORDERS_API_PATHS.PAY_IN_ADVANCE}${orderId}`, isAdvancePay);
     }

     public updatePrices(
          orderId: number,
          orderPriceElements: OrderPriceElements
     ): Observable<OrdersApi> {
          return this.post<OrdersApi>(`${ORDERS_API_PATHS.UPDATE}${orderId}`, orderPriceElements);
     }
}
