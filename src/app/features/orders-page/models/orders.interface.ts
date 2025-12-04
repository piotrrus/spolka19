import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface LastOrdersApi extends RestResponse {
     data: LastOrder[];
}

export interface LastOrder {
     client_nr: string;
     invoice_nr: string;
     order_date: string;
     status: string;
}

export interface OrdersUnsentApi {
     data: OrdersUnsent[];
     type: string;
     success: boolean;
}

export interface OrdersUnsent {
     contractor: string;
     material_nr: string;
     client_nr: string;
     invoice_nr: string;
     order_date: string;
     status: string;
}

export interface OrdersApi extends RestResponse {
     data: Order[];
}
export interface OrderApi {
     data: Order;
}

export interface InProductionApi {
     data: number;
}
export interface OrderPriceElements {
     orderId: number;
     price: string;
     down_payment: string;
     rabat: string;
}
export interface Order extends OrderPriceElements {
     clientName: string;
     clientNr: string;
     consumptionStandard: string;
     deliveryDate: string;
     //   downPayment: string;
     email: string;
     assortId: number;
     orderId: number;
     statusId: number;
     clientId: number;
     invoiceNr: string;
     lista: string;
     measureDate: string;
     orderDate: string;
     paid: boolean;
     phone: string;
     //   price: string;
     probeDate: string;
     // rabat: string;
     status: string;
     uwagi: string;
     zaliczka: boolean;
}

export interface StatusListApi {
     data: StatusList[];
}

export interface StatusList {
     id: number;
     name: string;
}

export interface Payment {
     paid: boolean;
}

export interface AdvancePay {
     zaliczka: boolean;
}

export interface Status {
     id_status: number;
}
