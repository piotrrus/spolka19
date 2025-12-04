export interface ProductionApi {
     data: ProductionByWeeks;
}

export interface ProductionArchivesApi {
     data: Production[];
}

export interface ProductionByWeeks {
     actualWeek: Production[];
     fourWeeksBefore: Production[];
     threeWeeksBefore: Production[];
     twoWeeksBefore: Production[];
     weekBefore: Production[];
}

export interface Production {
     id: number;
     art_name: string;
     client_nr: string;
     data_przek_do_prod: string;
     dostawca: string;
     id_client: number;
     id_order: number;
     id_assort: number;
     isfemine: boolean;
     material_nr: string;
     model_name: string;
     podszewka: string;
     probe: boolean;
     probex: string;
     prod_order: string;
     produkcja: number;
     tonacja: string;
     week_prod_date: string;
}

export interface AfterProductionApi {
     data: AfterProduction;
}

export interface AfterProduction {
     id: number;
     id_assort: number;
     id_order: number;
     probe?: boolean;
     art_name: string;
     zaszewki_w_przodzie?: string;
     spodnie_zaszewki_w_tyle?: string;
     marynarka_rozmiar?: number;
     spodnie_rozmiar?: string;
     kamizelka_rozmiar?: string;
     rozmiar?: string;
     coat_size?: string;
     nici?: string;
     obwod_pasa?: string;
     wnetrze?: string;
     prod_order?: string;
     data_przek_do_prod?: string;
     hasSize: boolean;
}

export interface productionPrint {
     // o.id, o.id_order, prod_order, o.id_assort id_assort, invoice_nr, co.id_status id_status,
     // model, marynarka_model, s.material_nr material_nr, co.id_client id_client,	o.rozmiar rozmiar,	s.fabric_composition,
     // zaszewki_w_przodzie, spodnie_zaszewki_w_tyle, kamizelka_rozmiar,
     // marynarka_ilosc_guzikow, marynarka_ilosc_rozporkow, spodnie_kieszen_boczna,
     // nici, obwod_pasa, wnetrze,
     //    (SELECT name FROM main_stuff WHERE id=o.id_assort) art_name, probe,
     //    (SELECT d.name FROM dictionary d WHERE s.pattern=d.id) tonacja,
     //    (SELECT name FROM contractors WHERE id=id_contractor) dostawca,
     //   (SELECT name FROM podszewka WHERE id=id_podszewka) podszewka,
     //    (SELECT polpodszewka FROM podszewka WHERE id=id_podszewka) polpodszewka,
     //   (SELECT name FROM filc WHERE id=id_filc) filc, o.notices notices,
     //    (SELECT (CASE WHEN marynarka_amf <> 0 THEN 'tak' ELSE 'nie' END) As Value) marynarka_amf,
     //   (SELECT (CASE WHEN spodnie_imitacja_zegarowki <> 0 THEN '1' ELSE '0' END) As Value) spodnie_imitacja_zegarowki,
     //  (SELECT (CASE WHEN spodnie_podtrzymacze <> 0 THEN '1' ELSE '0' END) As Value) podtrzymacze,
     // (SELECT (CASE WHEN spodnie_podtrzymacze <> 0 THEN 'bez podtrzymaczy' ELSE '8 podtrzymaczy' END) As Value) spodnie_podtrzymacze,
     //  (SELECT (CASE WHEN spodnie_patka <> 0 THEN 'tak' ELSE 'nie' END) As Value) spodnie_patka,
     //  (SELECT (CASE WHEN spodnie_podwyższony_pas <> 0 THEN 'tak' ELSE 'nie' END) As Value) spodnie_podwyższony_pas,
     //    (SELECT name FROM dictionary WHERE id_group=20 AND id=kamizelka_model) kam_model,
     //    (SELECT name FROM dictionary WHERE id_group=20 AND id=marynarka_model) marynarka_model,
     //    (SELECT name FROM dictionary WHERE id_group=5 AND id=marynarka_kieszen) marynarka_kieszen,
     //    (SELECT name FROM dictionary WHERE id_group=4 AND id=marynarka_wylogi) marynarka_wylogi,
     //    (SELECT name FROM dictionary WHERE id_group=7 AND id=spodnie_kieszen_boczna) spodnie_kieszen,
     //    (SELECT name FROM dictionary WHERE id_group=6 AND id=spodnie_model) spodnie_model, spodnie_rozmiar,
     //    (SELECT (CASE WHEN spodnie_sekretna_kieszen <> 0 THEN 'tak' ELSE 'nie' END) As Value) spodnie_sekretna_kieszen,
     //    (SELECT client_nr FROM clients c WHERE c.id=co.id_client) client_nr,
     //    (SELECT produkcja FROM main_stuff WHERE id=o.id_assort) produkcja,
     // DATE_FORMAT(co.delivery_date,'%Y-%m-%d')delivery_date
     client_nr: string;
     probe: boolean;
     art_name: string;
     material_nr: string;

     nici: string;
     obwod_pasa: string;
     wnetrze: string;

     tonacja: string;
     podszewka: string;
     polpodszewka: string;
     notices: string;

     marynarka_amf: string;
     spodnie_imitacja_zegarowki: string;
     podtrzymacze: string;
     spodnie_podtrzymacze: string;
     spodnie_patka: string;
     spodnie_podwyższony_pas: string;
     kam_model: string;
     marynarka_model: string;
     marynarka_kieszen: string;
     marynarka_wylogi: number;

     spodnie_kieszen: string;
     spodnie_model: string;
     spodnie_sekretna_kieszen: string;
     zaszewki_w_przodzie: string;
     spodnie_zaszewki_w_tyle: string;
     marynarka_rozmiar: number;
     spodnie_rozmiar: string;
     kamizelka_rozmiar: string;
     produkcja: string;
     delivery_date: string;
}
