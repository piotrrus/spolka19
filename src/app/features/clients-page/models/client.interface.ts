import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface ClientsApi extends RestResponse {
     data: Client[];
}

export interface ClientDetailsApi extends RestResponse {
     data: Client;
}

export interface Client {
     id: number;
     client_nr: string;
     firstname: string;
     lastname: string;
     email: string;
     phone?: string;
     contact?: string;
     consumption_standard?: string;
     notices?: string;
}

export interface ClientContact {
     phone: string;
     email: string;
}
