import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface ContractorsApi extends RestResponse {
     data: Contractor[];
}

export interface ContractorApi extends RestResponse {
     data: Contractor;
}

export interface Contractor {
     id: number;
     name: string;
     email: string;
     address?: string;
     phone?: string;
     id_group?: number;
     contact_person_a?: string;
     contact_person_b?: string;
     language?: string;
     nip?: string;
     updated_at: string;
     created_at: string;
}
