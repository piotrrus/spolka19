import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RestResponse } from '@shared/interfaces/rest-response.interface';
import { NotificationMessageService } from '@core/notifications/notification.service';
import { COMMON_MESSAGES } from '@shared/enums/messages.enum';
import { OrdersService } from './orders.service';
import {
     AdvancePay,
     OrderPriceElements,
     OrdersApi,
     Payment,
     Status,
} from '../models/orders.interface';

@Injectable()
export class OrdersDataStore {
     private ordersService = inject(OrdersService);
     private notificationService = inject(NotificationMessageService);

     public changePayment(orderId: number, paid: Payment): Observable<OrdersApi> {
          return this.ordersService.changePayment(orderId, paid).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, 'Zmieniono status płatności');
               })
          );
     }

     public changeStatus(orderId: number, status: Status): Observable<OrdersApi> {
          return this.ordersService.changeStatus(orderId, status).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, 'Zmieniono status zamówienia');
               })
          );
     }

     public changePayInAdvance(orderId: number, isAdvancePay: AdvancePay): Observable<OrdersApi> {
          return this.ordersService.changePayInAdvance(orderId, isAdvancePay).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, 'Zmieniono status zamówienia');
               })
          );
     }

     public updatePrices(
          orderId: number,
          orderPriceElements: OrderPriceElements
     ): Observable<OrdersApi> {
          return this.ordersService.updatePrices(orderId, orderPriceElements).pipe(
               tap((response) => {
                    this.afterSaveNotification(response, 'Zaktualizowano ceny');
               })
          );
     }

     private afterSaveNotification(result: RestResponse, successMsg: string): void {
          if (result) {
               result.success
                    ? this.notificationService.success(successMsg)
                    : this.notificationService.error(COMMON_MESSAGES.SAVING_ERROR);
          }
     }
}
