import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface StockApi extends RestResponse {
     data: Stock;
}

export interface StockListApi extends RestResponse {
     data: Stock[];
}

export interface Stock {
     id: number;
     contractorId: number;
     stockId: number;
     assortId: number;
     artName: string;
     clientNr: string;
     name: string;
     contractor?: string;
     materialNr: string;
     invoiceNr?: string;
     quantity: number;
     size: string;
     modelName?: string;
     article?: string;
     color?: string;
     pattern?: string;
     addDate?: string;
     movedToStock?: string;
     orderDate?: string;
     buyingPrice: string;
     sellingPrice: string;
     priceEuro: string;
     warehouse: string;
}

// export interface ListApi {
//      data: List[];
// }
// export interface List {
//      id: number;
//      name: string;
// }

export interface StockPost {
     option: number;
     optionType: string;
}
