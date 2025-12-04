import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface ClientOrdersApi extends RestResponse {
     data: ClientOrders[];
}

export interface ClientOrders {
     id: number;
     assortId: number;
     clientId: number;
     clientNr: string;
     deliveryDate: string;
     invoiceNr: string;
     list: string[];
     orderDate: string;
     orderId: number;
     status: string;
     statusId: number;
}
