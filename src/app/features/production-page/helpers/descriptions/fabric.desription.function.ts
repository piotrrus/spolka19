import { Content } from 'pdfmake/interfaces';
import { ProductionDescriptionModel } from '../../models/production-description.model';
import { DESCRIPTIONS } from '../../enums/descriptions.enum';

export function createFabricSection(data: ProductionDescriptionModel): Content {
     const lining: string = data.lining ? data.lining : '';
     const composition: string = data.fabric_composition ? data.fabric_composition : '';
     const contractor: string = data.contractor ? data.contractor : '';
     const materialNr: string = data.material_nr ? data.material_nr : '';
     const color: string = data.tonacja ? data.tonacja : '';
     const fabric = `${contractor} ${materialNr} ${color} ${composition}`;

     return [
          { text: `${DESCRIPTIONS.FABRIC} ${fabric}`, style: 'fabric' },
          { text: `${DESCRIPTIONS.THREAD} ${data.nici}`, style: 'fabric' },
          { text: `${DESCRIPTIONS.LININGS} ${lining}`, style: 'fabric' },
     ];
}
