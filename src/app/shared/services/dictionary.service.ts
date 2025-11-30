import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '@core/api/api.service';
import { List, ListApi } from '@shared/interfaces/list.interface';
import { DICTIONARY_API_PATHS } from './dictionary.paths.enum';

@Injectable()
export class DictionaryService extends ApiService {
     public getList(listId: number): Observable<List[]> {
          return this.get<ListApi>(`${DICTIONARY_API_PATHS.LIST}${listId}`).pipe(map((list) => list.data));
     }
}
