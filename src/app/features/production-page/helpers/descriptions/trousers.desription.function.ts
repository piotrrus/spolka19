import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../../models/production-description.model';

export function createTrousersSection(data: ProductionDescriptionModel): Content {
     const size = data.rozmiar ? data.rozmiar : '';
     return [
          { text: 'Spodnie rozm.' + size },
          { text: data.zaszewki_w_przodzie ? data.zaszewki_w_przodzie : '', style: 'list' },
          { text: data.spodnie_zaszewki_w_tyle ? data.spodnie_zaszewki_w_tyle : '', style: 'list' },
          { text: data.spodnie_podtrzymacze ? data.spodnie_podtrzymacze : 'bez podtrzymaczy', style: 'list' },
          {
               text: data.spodnie_imitacja_zegarowki
                    ? 'bez imitacji zegarkówki'
                    : 'imitacja zegarkówki z prawej strony',
               style: 'list',
          },
          { text: '2 kieszenie tylne' + data.spodnie_patka ? ' bez patek' : ' z patkami', style: 'list' },
          {
               text: data.spodnie_kieszen
                    ? 'Kieszeń boczna ' + data.spodnie_kieszen
                    : 'Kieszeń boczna cięta zaszyta',
               style: 'list',
          },
          {
               text: data.spodnie_sekretna_kieszen
                    ? 'ze sekretną kiszonką na przodzie wymiar szer.9cm dł.8cm (na gotowo)'
                    : '',
               style: 'list',
          },
          {
               text: data.wnetrze
                    ? 'Czarne wnętrze (kolanówka + kieszeniówka)'
                    : 'Białe wnętrze (kolanówka + kieszeniówka)',
               style: 'list',
          },
     ];
}
