import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { ORDERS_API_PATHS } from '@features/orders-page/enums/orders.paths.enum';

import { ClientOrders, ClientOrdersApi } from '../models/client-orders.interface';

@Injectable()
export class ClientOrdersService extends ApiService {
     public getClientOrders(id: number): Observable<ClientOrders[]> {
          return this.get<ClientOrdersApi>(`${ORDERS_API_PATHS.CLIENT_ORDERS}${id}`).pipe(
               map((orders) => orders.data)
          );
     }
}
