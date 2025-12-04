import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../../models/production-description.model';

export function createVestSection(data: ProductionDescriptionModel): Content {
     return [
          { text: 'Kamizelka rozm.' + data.kamizelka_rozmiar },

          { text: 'Guziki: ' + data.marynarka_ilosc_guzikow, style: 'list' },
          { text: 'Rozporki: ' + data.marynarka_ilosc_rozporkow, style: 'list' },
          { text: 'Fason ' + data.marynarka_wylogi, style: 'list' },
          { text: 'Kieszeń boczna: ' + data.marynarka_kieszen, style: 'list' },
          {
               text: data.marynarka_amf
                    ? 'AMF zewnętrzny na patkach, piersiówce, krawędziach przodu i kołnierzu'
                    : 'Bez amf',
               style: 'list',
          },
          {
               text: data.spodnie_sekretna_kieszen
                    ? 'ze sekretną kiszonką na przodzie wymiar szer.9cm dł.8cm (na gotowo)'
                    : '',
               style: 'list',
          },
          {
               text: data.felt,
               style: 'list',
          },
     ];
}

// guziki: 1
// rozporki: 2
// Fason prosty
// Kieszeń boczna: patki
// AMF zewnętrzny na patkach, piersiówce, krawędziach przodu i kołnierzu
// Piersiówka
// Rękawy rozpinane; 5 dziurek rozmieszczonych jodełkowo
// french
// Górna część przodu podszewki z rękawówki (na przodzie zakładka zaprasowana do dołu na 2cm)
// IMF wewnętrzny czerwony wokół obłożenia i podkroju szyi
// Rękawówka w prążek
// 4 kieszenie wewnętrzne zamocowane czerwonymi, półokrągłymi ryglami
// (worki z kieszeniówki-czarne, wypustki i podkłady z rękawówki)
// Filc: 318 JEDNOL
