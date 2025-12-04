import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../../models/production-description.model';

export function createJacketCommonSection(data: ProductionDescriptionModel): Content {
     return [
          { text: 'Piersiówka', style: 'list' },
          { text: 'Rękawy rozpinane; 5 dziurek rozmieszczonych jodełkowo.', style: 'list' },
          { text: 'French', style: 'list' },
          {
               text: '4 kieszenie wewnętrzne zamocowane czerwonymi, półokrągłymi ryglami (worki z kieszeniówki-czarne, wypustki i podkłady z rękawówki)',
               style: 'list',
          },

          {
               text: 'Górna część przodu podszewki z rękawówki (na przodzie zakładka zaprasowana do dołu na 2cm)',
               style: 'list',
          },
          { text: 'IMF wewnętrzny czerwony wokół obłożenia i podkroju szyi', style: 'list' },

          { text: 'Rękawówka w prążek', style: 'list' },
          { text: 'Zaszewki z przodu', style: 'list' },
          {
               text: data.felt,

               style: 'list',
          },
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
