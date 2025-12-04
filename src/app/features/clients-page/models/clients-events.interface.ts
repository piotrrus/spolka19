import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface ClientEventsApi extends RestResponse {
     data: ClientEvents;
}

export interface ClientLastEventsApi extends RestResponse {
     data: ClientLastEvents;
}
export interface ClientLastEvents extends ClientEvents {
     id: number;
}

export interface ClientEvents {
     measureDate: string;
     probeDate: string;
     deliveryDate: string;
}

export interface ClientEventsModalData {
     title: string;
     data: ClientEvents;
}

export interface ClientEventsSave {
     measure_date: string | null;
     probe_date: string | null;
     delivery_date: string | null;
}
export interface ClientEventsData {
     id: number;
     invoice_nr: string;
     id_client: number;
     id_order: number;
     mydate: string | null;
     client_nr: string;
     orderStatus: string;
     measureDate: string | null;
     probeDate: string | null;
     deliveryDate: string | null;
}
