import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Shoes } from '@features/stock-page/models/shoes.interface';
import { List } from '@shared/interfaces/list.interface';

export interface ShoesModalData {
     title: string;
     shoes: Shoes;
     contractors: Contractor[];
     sizes: List[];
}
