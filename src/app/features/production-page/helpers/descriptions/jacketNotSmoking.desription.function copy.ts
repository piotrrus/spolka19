import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../../models/production-description.model';

export function createJacketNotSmokingSection(data: ProductionDescriptionModel): Content {
     return [
          { text: 'Fason ' + data.marynarka_wylogi, style: 'list' },
          { text: 'Kieszeń boczna: ' + data.marynarka_kieszen, style: 'list' },
          {
               text: data.marynarka_amf
                    ? 'AMF zewnętrzny na patkach, piersiówce, krawędziach przodu i kołnierzu'
                    : 'Bez amf',
               style: 'list',
          },
          // { text: '2 kieszenie tylne' + data.spodnie_patka ? ' bez patek' : ' z patkami', style: 'list' },

          // {
          //      text: data.spodnie_kieszen
          //           ? 'Kieszeń boczna ' + data.spodnie_kieszen
          //           : 'Kieszeń boczna cięta zaszyta',
          //      style: 'list',
          // },
          // {
          //      text: data.spodnie_sekretna_kieszen
          //           ? 'ze sekretną kiszonką na przodzie wymiar szer.9cm dł.8cm (na gotowo)'
          //           : '',
          //      style: 'list',
          // },
          // {
          //      text: data.felt,

          //      style: 'list',
          // },
     ];
}
