import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { CLIENTS_API_PATHS } from '../enums/clients-paths.enum';
import {
     ClientEventsApi,
     ClientEventsData,
     ClientEventsSave,
     ClientLastEvents,
     ClientLastEventsApi,
} from '../models/clients-events.interface';

@Injectable()
export class ClientEventsService extends ApiService {
     public getClientEvents(id: number): Observable<ClientEventsData> {
          return this.get(`${CLIENTS_API_PATHS.EVENTS}${id}`);
     }

     public getClientLastEvents(id: number): Observable<ClientLastEvents> {
          return this.get<ClientLastEventsApi>(`${CLIENTS_API_PATHS.EVENTS_LAST}${id}`).pipe(
               map((client) => client.data)
          );
     }

     public updateClientEvents(id: number, client: ClientEventsSave): Observable<ClientEventsApi> {
          return this.post<ClientEventsApi>(`${CLIENTS_API_PATHS.EVENTS_UPDATE}${id}`, client);
     }
}
