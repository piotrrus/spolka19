import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { Contractor, ContractorApi, ContractorsApi } from '../models/contractor.interface';
import { CONTRACTORS_API_PATHS } from '../enums/contractors-paths.enum';

@Injectable()
export class ContractorsService extends ApiService {
     public getList(): Observable<Contractor[]> {
          return this.get<ContractorsApi>(CONTRACTORS_API_PATHS.LIST).pipe(
               map((contractor) => contractor.data)
          );
     }

     public getDetails(id: number): Observable<Contractor> {
          return this.get<ContractorApi>(`${CONTRACTORS_API_PATHS.DETAILS}${id}`).pipe(
               map((contractor) => contractor.data)
          );
     }

     public create(contractor: Contractor): Observable<ContractorApi> {
          return this.post<ContractorApi>(`${CONTRACTORS_API_PATHS.CREATE}`, contractor);
     }

     public update(id: number, contractor: Contractor): Observable<ContractorApi> {
          return this.post<ContractorApi>(`${CONTRACTORS_API_PATHS.UPDATE}${id}`, contractor);
     }

     public remove(id: number): Observable<ContractorApi> {
          return this.delete(`${CONTRACTORS_API_PATHS.DELETE}${id}`);
     }
}
