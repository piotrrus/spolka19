import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { CLIENTS_API_PATHS } from '../enums/clients-paths.enum';
import {
     ClientMeasuresSaveModel,
     ClientMeasures,
     ClientMeasuresApi,
     ClientMeasureDescription,
} from '../models/client-measures.interface';

@Injectable()
export class ClientMeasuresService extends ApiService {
     public getMeasures(id: number): Observable<ClientMeasures> {
          return this.get<ClientMeasuresApi>(`${CLIENTS_API_PATHS.MEASURES}${id}`).pipe(
               map((client) => client.data)
          );
     }

     public getMeasuresDescriptions(): Observable<ClientMeasureDescription[]> {
          return this.get('client-measures-description.json');
     }

     public updateClientMeasures(
          id: number,
          measures: ClientMeasuresSaveModel
     ): Observable<ClientMeasuresApi> {
          return this.post<ClientMeasuresApi>(`${CLIENTS_API_PATHS.MEASURES_UPDATE}${id}`, measures);
     }

     public createClientMeasures(measures: ClientMeasuresSaveModel): Observable<ClientMeasuresApi> {
          return this.post<ClientMeasuresApi>(`${CLIENTS_API_PATHS.MEASURES_CREATE}`, measures);
     }
}
