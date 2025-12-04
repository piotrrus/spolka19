import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { List } from '@shared/interfaces/list.interface';
import { StockFabric } from '@features/stock-page/models/stock-fabric.interface';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { Stock } from './stock.interface';

export interface StockFabricModalData {
     title: string;
     stock: Stock;
     fabric?: StockFabric;
     fabricList: List[];
     contractorsList: Contractor[];
     warehousesList: Warehouse[];
     patternsList: List[];
}
