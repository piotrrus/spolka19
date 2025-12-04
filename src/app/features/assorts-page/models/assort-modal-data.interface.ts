import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Assort } from '@features/stock-page/models/assort.interface';

export interface AssortModalData {
     title: string;
     data: Assort;
     contractors: Contractor[];
}
