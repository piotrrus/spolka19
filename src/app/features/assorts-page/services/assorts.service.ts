import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { ASSORTS_API_PATHS } from '../enums/assort.paths.enum';
import { AssortList, AssortsApi } from '../models/assorts.interface';
import { Clothe, ClothesApi } from '../models/clothes.interface';

@Injectable()
export class AssortsService extends ApiService {
     public getClothesList(): Observable<Clothe[]> {
          return this.get<ClothesApi>(ASSORTS_API_PATHS.CLOTHES).pipe(map((assort) => assort.data));
     }

     public getAllAssortsList(): Observable<AssortList[]> {
          return this.get<AssortsApi>(ASSORTS_API_PATHS.ALL).pipe(map((assort) => assort.data));
     }

     public getAssortsList(): Observable<AssortList[]> {
          return this.get<AssortsApi>(ASSORTS_API_PATHS.ASSORTS).pipe(map((assort) => assort.data));
     }
}
