import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface WarehouseApi extends RestResponse {
     data: Warehouse[];
}

export interface Warehouse {
     id: number;
     name: string;
     address: string;
     factory: string;
     phone: string;
}
