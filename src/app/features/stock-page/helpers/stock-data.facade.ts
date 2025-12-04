import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockService } from '@features/stock-page/services/stock.service';
import { ContractorsService } from '@features/contractors-page/services/contractor-service';
import { WarehouseService } from '@features/warehouse-page/services/warehouse-service';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { Stock } from '../models/stock.interface';
import { List } from '@shared/interfaces/list.interface';
import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { AssortsService } from '@features/assorts-page/services/assorts.service';

@Injectable()
export class StockDataFacade {
     public tableData$: Observable<Stock[]> = this.stockService.getListData();
     public warehousesList$: Observable<Warehouse[]> = this.warehouseService.getList();
     public contractorsList$: Observable<Contractor[]> = this.contractorsService.getList();
     public patternsList$: Observable<List[]> = this.stockService.getPatterns();
     public assortsList$: Observable<AssortList[]> = this.assortsService.getAssortsList();
     public optionsList$: Observable<List[]> = this.stockService.getStockOptionList();

     constructor(
          private stockService: StockService,
          private contractorsService: ContractorsService,
          private warehouseService: WarehouseService,
          private assortsService: AssortsService
     ) {}
}
