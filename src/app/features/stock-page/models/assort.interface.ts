export interface Assort {
     assortId: number;
     contractorId: number;
     name: string;
     buyingPrice: string;
     sellingPrice: string;
     quantity: number;
     model: string;
     send_email?: boolean;
     movedToStock?: string;
}

export class AssortModel {
     public id_assort?: number;
     public id_contractor?: number;
     public name?: string;
     public buying_price?: string;
     public selling_price?: string;
     public quantity?: number;
     public model?: string;
}
