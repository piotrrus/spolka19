export class ClientModel {
     public id: string;
     public client_nr: string;
     public firstname: string;
     public lastname: string;
     public email: string;
     public phone: string;
     public contact: string;
     public consumption_standard: string;
     public date: string;
     public notices: string;
}
export class ClientDetailsSaveModel {
     public id: number;
     public client_nr: string;
     public email: string;
     public firstname: string;
     public lastname: string;
     public notices?: string;
     public phone?: string;
}
