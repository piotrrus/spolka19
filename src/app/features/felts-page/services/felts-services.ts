import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { Felt, FeltApi } from '../models/felt.interface';
import { FELTS_API_PATHS } from '../enums/felts.paths.enum';

@Injectable()
export class FeltsService extends ApiService {
     public getList(): Observable<Felt[]> {
          return this.get<FeltApi>(FELTS_API_PATHS.LIST).pipe(map((felt) => felt.data));
     }

     public create(felt: Felt): Observable<FeltApi> {
          return this.post<FeltApi>(`${FELTS_API_PATHS.CREATE}`, felt);
     }

     public update(id: number, felt: Felt): Observable<FeltApi> {
          return this.post<FeltApi>(`${FELTS_API_PATHS.UPDATE}${id}}`, felt);
     }

     public remove(id: number): Observable<FeltApi> {
          return this.delete<FeltApi>(`${FELTS_API_PATHS.DELETE}${id}`);
     }
}
