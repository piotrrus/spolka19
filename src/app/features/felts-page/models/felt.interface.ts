import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface FeltApi extends RestResponse {
     data: Felt[];
}

export interface Felt {
     id: number;
     name: string;
}
