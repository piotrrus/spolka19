import { RestResponse } from '@shared/interfaces/rest-response.interface';

export interface ClientMeasuresApi extends RestResponse {
     data: ClientMeasures;
}

export interface ClientMeasures {
     id: number;
     id_client: number;
     data_pomiaru: string;
     obwod_klatki_piersiowej: string;
     obwod_pasa_marynarki: string;
     obwod_uda: string;
     obwod_bioder: string;
     obwod_bicepsu: string;
     szerokosc_przodu: string;
     szerokosc_tylu: string;
     szerokosc_barkow: string;
     pas_spodni: string;
     bark_rekaw: string;
     długosc_plecow: string;
     dl_zewn_nogawki_bez_paska: string;
     wzrost: string;
     uwagi: string;
     client_nr: string;
     firstname: string;
     lastname: string;
}

export interface ClientMeasuresModalData {
     title: string;
     data: ClientMeasures;
}

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

export class ClientMeasuresSaveModel {
     public id_client: number;
     public wzrost: string;
     public obwod_klatki_piersiowej: string;
     public obwod_pasa_marynarki: string;
     public obwod_uda: string;
     public szerokosc_przodu: string;
     public szerokosc_tylu: string;
     public obwod_bicepsu: string;
     public uwagi: string;
}

export interface ClientMeasureDescription {
     value: string;
     label: string;
     description: string;
}

export interface ClientMeasuresList {
     name: string;
     value: string;
}

export interface ClientMeasuresListModalData {
     title: string;
     data: ClientMeasuresList;
}
