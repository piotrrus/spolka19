import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Assort } from '@features/stock-page/models/assort.interface';

export interface OrderAssortModalData {
     title: string;
     data: Assort;
     contractors: Contractor[];
     assorts: AssortList[];
}
