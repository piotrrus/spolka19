import { Stock } from '@features/stock-page/models/stock.interface';
import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface FabricListApi extends RestResponse {
     data: FabricList[];
}
export interface Fabric {
     id: number;
     clientNr: string;
     name: string;
     idType: number;
     isFemine: boolean;
}

export interface FabricStock extends Stock {
     idAssort: string;
     idContractor: string;
     idWarehouse: string;
     materialNr: string;
     pattern: string;
     fabricComposition: string;
}

export interface FabricList {
     id: number;
     name: string;
     material_nr: string;
     contractor: string;
}
