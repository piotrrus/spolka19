import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface ShoesApi extends RestResponse {
     data: Shoes;
}
export interface Shoes {
     name: string;
     // model: string;
     contractorId: number;
     size: string;
     quantity: number;
     buyingPrice: string;
     sellingPrice: string;
     send_email?: boolean;
     notices?: string;
}

export class ShoesModel {
     public id_assort?: number;
     public name?: string;
     public id_contractor?: number;
     public rozmiar?: string;
     public quantity?: number;
     public buying_price?: string;
     public selling_price?: string;
     public send_email?: boolean;
}
