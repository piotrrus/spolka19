import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
// import { ApiService } from '@core/api/api.service';
import { EVENTS_API_PATHS } from '../enums/events-paths.enum';
import {
     ClientEventDetails,
     ClientEventDetailsApi,
     Event,
     EventsApi,
} from '../models/events.interface';
import { CLIENTS_API_PATHS } from '@features/clients-page/enums/clients-paths.enum';
import {
     ClientEventsApi,
     ClientEventsSave,
} from '@features/clients-page/models/clients-events.interface';

@Injectable()
export class EventsService extends ApiService {
     public eventDetails(id: number): Observable<ClientEventDetails> {
          return this.get<ClientEventDetailsApi>(`${EVENTS_API_PATHS.DETAILS}${id}`).pipe(
               map((event) => event.data)
          );
     }

     public getEventsList(): Observable<Event[]> {
          return this.get<EventsApi>(EVENTS_API_PATHS.LIST).pipe(map((event) => event.data));
     }

     public getEventsListByType($typeId: number): Observable<Event[]> {
          return this.get<EventsApi>(`${EVENTS_API_PATHS.LIST}/${$typeId}`).pipe(
               map((event) => event.data)
          );
     }

     public getLastEvents(): Observable<Event[]> {
          return this.get<EventsApi>(EVENTS_API_PATHS.LAST).pipe(map((event) => event.data));
     }

     // public createPersonalEvent($orderId: number, productionNr: string): Observable<RestResponse> {
     //      return this.post(`${PRODUCTION_API_PATHS.CHANGE_NR}${$orderId}`, productionNr);
     // }

     // public updatePersonalEvent($orderId: number, productionNr: string): Observable<RestResponse> {
     //      return this.post(`${PRODUCTION_API_PATHS.CHANGE_NR}${$orderId}`, productionNr);
     // }

     public createClientEvent(id: number, client: ClientEventsSave): Observable<ClientEventsApi> {
          return this.post<ClientEventsApi>(`${CLIENTS_API_PATHS.CREATE}${id}`, client);
     }

     public updateClientEvents(id: number, client: ClientEventsSave): Observable<ClientEventsApi> {
          return this.post<ClientEventsApi>(`${CLIENTS_API_PATHS.EVENTS_UPDATE}${id}`, client);
     }
}
