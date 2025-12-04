import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Client, ClientDetailsApi, ClientsApi } from '../models/client.interface';
import { ApiService } from '@core/api/api.service';
import { CLIENTS_API_PATHS } from '../enums/clients-paths.enum';
import { ClientDetailsSaveModel } from '../models/client-details.interface';

@Injectable()
export class ClientsService extends ApiService {
     public getDetails(id: number): Observable<Client> {
          return this.get<ClientDetailsApi>(`${CLIENTS_API_PATHS.DETAILS_API}${id}`).pipe(
               map((client) => client.data)
          );
     }

     public getList(): Observable<Client[]> {
          return this.get<ClientsApi>(CLIENTS_API_PATHS.LIST).pipe(map((client) => client.data));
     }

     public create(client: ClientDetailsSaveModel): Observable<ClientDetailsApi> {
          return this.post<ClientDetailsApi>(`${CLIENTS_API_PATHS.CREATE}`, client);
     }

     public update(id: number, client: ClientDetailsSaveModel): Observable<ClientDetailsApi> {
          return this.post<ClientDetailsApi>(`${CLIENTS_API_PATHS.UPDATE}${id}`, client);
     }

     public remove(id: number): Observable<ClientDetailsApi> {
          return this.delete<ClientDetailsApi>(`${CLIENTS_API_PATHS.DELETE}${id}`);
     }
}
