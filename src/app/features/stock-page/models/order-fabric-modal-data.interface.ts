import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { StockFabric } from '@features/stock-page/models/stock-fabric.interface';
import { List } from '@shared/interfaces/list.interface';

export interface OrderFabricModalData {
     title: string;
     fabric: StockFabric;
     contractors: Contractor[];
     patterns: List[];
     plnToEuroActualValue: string;
}
