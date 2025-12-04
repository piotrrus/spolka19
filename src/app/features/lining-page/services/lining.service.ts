import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Lining, LiningsApi } from '../models/lining.interface';
import { LINING_API_PATHS } from '../enums/lining.paths.enum';
import { ApiService } from '@core/api/api.service';

@Injectable()
export class LiningService extends ApiService {
     public getList(): Observable<Lining[]> {
          return this.get<LiningsApi>(LINING_API_PATHS.LIST).pipe(map((lining) => lining.data));
     }

     public create(lining: Lining): Observable<LiningsApi> {
          return this.post<LiningsApi>(`${LINING_API_PATHS.CREATE}`, lining);
     }

     public update(id: number, lining?: Lining): Observable<LiningsApi> {
          return this.post<LiningsApi>(`${LINING_API_PATHS.UPDATE}${id}`, lining);
     }

     public remove(id: number): Observable<LiningsApi> {
          return this.delete<LiningsApi>(`${LINING_API_PATHS.DELETE}${id}`);
     }
}
