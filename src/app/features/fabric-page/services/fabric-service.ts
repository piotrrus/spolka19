import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { FABRICS_API_PATHS } from '../enums/fabric-paths.enum';
import { FabricList, FabricListApi } from '../models/fabric.interface';

@Injectable()
export class FabricService extends ApiService {
     public getList(): Observable<FabricList[]> {
          return this.get<FabricListApi>(FABRICS_API_PATHS.LIST).pipe(map((fabric) => fabric.data));
     }
}
