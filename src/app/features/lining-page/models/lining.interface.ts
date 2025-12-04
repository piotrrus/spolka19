import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface Lining {
     id: number;
     name: string;
     polpodszewka: string;
}

export interface LiningsList {
     id: number;
     name: string;
     polpodszewka: string;
}

export interface LiningsApi extends RestResponse {
     data: Lining[];
}
