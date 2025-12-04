import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../../models/production-description.model';

export function createSizeJacketSection(data: ProductionDescriptionModel): Content {
     const size = data.rozmiar ? data.rozmiar : '';
     // createSmokingSection
     return [
          { text: `Marynarka rozm. ${size}`, style: 'article' },
          { text: 'Guziki: ' + data.marynarka_ilosc_guzikow, style: 'list' },
          { text: 'Rozporki: ' + data.marynarka_ilosc_rozporkow, style: 'list' },

          // { text: 'Fason ' + data.marynarka_wylogi, style: 'list' },
          // { text: 'Kieszeń boczna: ' + data.marynarka_kieszen, style: 'list' },

          // {
          //      text: data.marynarka_amf
          //           ? 'AMF zewnętrzny na patkach, piersiówce, krawędziach przodu i kołnierzu'
          //           : 'Bez amf',
          //      style: 'list',
          // },
          // { text: '2 kieszenie tylne' + data.spodnie_patka ? ' bez patek' : ' z patkami', style: 'list' },

          // {
          //      text: data.spodnie_kieszen
          //           ? 'Kieszeń boczna ' + data.spodnie_kieszen
          //           : 'Kieszeń boczna cięta zaszyta',
          //      style: 'list',
          // },
          {
               text: data.spodnie_sekretna_kieszen
                    ? 'ze sekretną kiszonką na przodzie wymiar szer.9cm dł.8cm (na gotowo)'
                    : '',
               style: 'list',
          },
          // {
          //      text: data.felt,

          //      style: 'list',
          // },
     ];
}

/*
6
Piersiówka
NULL
NULL
12
6
Rękawy rozpinane; 5 dziurek rozmieszczonych jodełk...
NULL
NULL
13
6
french
NULL
NULL
17
6
4 kieszenie wewnętrzne zamocowane czerwonymi, póło...
NULL
NULL
14
6
Górna część przodu podszewki z rękawówki (na przod...
NULL
NULL
15
6
IMF wewnętrzny czerwony wokół obłożenia i podkroju...
NULL
NULL
16
6
Rękawówka w prążek
*/
// BRAK:
// Piersiówka
// Rękawy rozpinane; 5 dziurek rozmieszczonych jodełkowo
// french
// Górna część przodu podszewki z rękawówki (na przodzie zakładka zaprasowana do dołu na 2cm)
// IMF wewnętrzny czerwony wokół obłożenia i podkroju szyi
// Rękawówka w prążek
// 4 kieszenie wewnętrzne zamocowane czerwonymi, półokrągłymi ryglami
// (worki z kieszeniówki-czarne, wypustki i podkłady z rękawówki)
// Filc: 318 JEDNOL

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
