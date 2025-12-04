export class DetailsModel {
     kamizelka_rozmiar: number;
     obwod_pasa: string;
     //   lining: string;
     marynarka_model: string;
     marynarka_kieszen: string;
     marynarka_wylogi: number;
     marynarka_amf: string;
     marynarka_ilosc_guzikow: number;
     marynarka_ilosc_rozporkow: number;
     podtrzymacze: number;
     polpodszewka: number;
     probe: boolean | null;
     prod_order: string;
     produkcja: string;
     spodnie_model: string;
     spodnie_kieszen: string;
     spodnie_podtrzymacze: string;
     spodnie_patka: string;
     spodnie_sekretna_kieszen: string;
     spodnie_rozmiar: number;
     spodnie_imitacja_zegarowki: string;
     rozmiar: number;
     wnetrze: string;
     zaszewki_w_przodzie: string;
     spodnie_zaszewki_w_tyle: string;
}

export interface ProductionDescriptionApi {
     data: ProductionDescriptionModel;
}
export class ProductionDescriptionModel extends DetailsModel {
     title: string;
     id_assort: number;
     clothe_type: string;
     client_nr: string;
     deliveryDate: string;
     contractor: string;
     felt: string;
     invoice_nr: string;
     model: string;
     material_nr: string;
     tonacja: string;
     is_jacket: number;
     is_trousers: number;
     is_vest: number;
     fabric_composition: string;
     lining: string;
     nici: string;
     notices: string;
}

export class ProductionDescriptionDetailsApi {
     data: ProductionDescriptionModel;
}

export class ProductionDescriptionModelApi {
     data: ProductionDescriptionModel[];
}
