import { Content } from 'pdfmake/interfaces';

export function createSmokingSection(): Content {
     return [
          { text: 'Fason: szpic czarny ryps', style: 'list' },
          { text: 'Kieszeń boczna bez patki z czarnego rypsu', style: 'list' },
          { text: 'bez amf ', style: 'list' },
     ];
}
