import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../../models/production-description.model';
import { DESCRIPTIONS } from '../../enums/descriptions.enum';

export function createHeaderSection(data: ProductionDescriptionModel): Content {
     const client = data.client_nr ? `kl. ${data.client_nr}` : '';
     const prodOrder = data.prod_order ? data.prod_order : '';
     return [
          {
               text: `${DESCRIPTIONS.TITLE} ${client} ${DESCRIPTIONS.ORDER} ${prodOrder}`,
               style: 'header',
          },
     ];
}
