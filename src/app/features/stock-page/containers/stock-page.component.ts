import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map, of, switchMap, tap } from 'rxjs';
import { StockService } from '../services/stock.service';
import { STOCK_ORDER_OPTIONS } from '../enums/stock-order-options.enum';
import { Stock } from '../models/stock.interface';
import { List } from '@shared/interfaces/list.interface';
import { StockDataFacade } from '../helpers/stock-data.facade';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { STOCK_API_OPTIONS } from '../enums/stock.paths.enum';
import { Contractor } from '@features/contractors-page/models/contractor.interface';
import { STOCK_ASSORTS_ID } from '../enums/stock-options.enum';
// import { FabricService } from '@features/fabric-page/services/fabric-service';
import { FabricList } from '@features/fabric-page/models/fabric.interface';
// import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogsHelper } from '@shared/components/confirm-dialog/confirm-dialog.helper';
// import { ContractorsDataStore } from '@features/contractors-page/services/contractors-data-store';
import { StockEditAssortStore } from '../services/stock-edit-assort-store';
// import { StockDataStore } from '../services/stock-data-store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AssortsService } from '@features/assorts-page/services/assorts.service';
import { ContractorsService } from '@features/contractors-page/services/contractor-service';
import { WarehouseService } from '@features/warehouse-page/services/warehouse-service';
import { StockModalsHelper } from '../helpers/stock-modals.helper';
import { OrdersStockModalHelper } from '../helpers/orders-stock-modal.helper';
import { FabricService } from '@features/fabric-page/services/fabric-service';
import { StockCrudFacade } from '../services/stock-crud-facade';
import { ContractorsCrudFacade } from '@features/contractors-page/services/contractors-crud-facade';
import { StockPageNavigationComponent } from '../components/stock-page-navigation/stock-page-navigation.component';
import { StockTableComponent } from '../components/tables/stock-table/stock-table.component';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { CommonModule } from '@angular/common';
import { ContractorModalHelper } from '@features/contractors-page/helpers/contractor-modal.helper';

@Component({
     selector: 'app-stock-page',
     templateUrl: './stock-page.component.html',
     styleUrls: ['./stock-page.component.scss'],
     imports: [
          CommonModule,
          StockPageNavigationComponent,
          TableHeaderComponent,
          StockTableComponent,
     ],
     providers: [
          StockService,
          StockDataFacade,
          AssortsService,
          ContractorsService,
          WarehouseService,
          FabricService,
          StockModalsHelper,
          OrdersStockModalHelper,
          StockCrudFacade,
          StockEditAssortStore,
          ContractorsCrudFacade,
          ContractorModalHelper,
     ],
})
export class StockPageComponent implements OnInit {
     public tableTitle$: Observable<string | null> = of(null);

     public tableData$: Observable<Stock[] | null> = of(null);
     public filteredTableData$: Observable<Stock[] | null> = of(null);

     public readonly warehousesList$: Observable<Warehouse[]> =
          this.stockDataFacade.warehousesList$;
     public readonly assortsList$: Observable<AssortList[]> = this.stockDataFacade.assortsList$;
     public readonly optionsList$: Observable<List[]> = this.stockDataFacade.optionsList$;
     public readonly patternsList$: Observable<List[]> = this.stockDataFacade.patternsList$;

     public contractorsList: Contractor[] = <Contractor[]>{};
     public warehousesList: Warehouse[] = <Warehouse[]>{};
     public assortsList: AssortList[] = <AssortList[]>{};
     public fabricList: FabricList[] = <FabricList[]>{};
     public patternsList: List[] = <List[]>{};
     public optionsList: List[] = <List[]>{};
     public isNotOrderedAssorts: boolean = false;
     public assortId: number;
     public dataLength = 0;

     private plnToEuroActualValue = '4.34';
     private confirmDialogsHelper: ConfirmDialogsHelper = new ConfirmDialogsHelper();

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly route: ActivatedRoute,
          // private readonly dialog: MatDialog,
          private readonly stockService: StockService,
          private readonly fabricService: FabricService,
          private readonly stockCrudFacade: StockCrudFacade,
          private readonly stockEditAssortStore: StockEditAssortStore,
          private readonly stockDataFacade: StockDataFacade,
          private readonly contractorsDataStore: ContractorsCrudFacade
     ) {}

     public ngOnInit(): void {
          this.getListsData();
     }

     private getStockData(): void {
          this.route.params
               .pipe(
                    tap((param) => {
                         if (param && param['id']) {
                              this.isNotOrderedAssorts = param['id'] === '101' ? true : false;
                              this.tableTitle$ = this.getTableTitle(param['id']);
                         }
                    }),
                    switchMap((param) => {
                         const option = STOCK_API_OPTIONS.STATUS;
                         return this.stockCrudFacade.getStockData(option, Number(param['id'])).pipe(
                              tap((data) => {
                                   this.tableData$ = of(data);
                                   this.filteredTableData$ = this.tableData$;
                              })
                         );
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public stockNewOrder($option: STOCK_ORDER_OPTIONS): void {
          switch ($option) {
               case STOCK_ORDER_OPTIONS.SHOES: {
                    this.openShoesModal();
                    break;
               }
               case STOCK_ORDER_OPTIONS.ADD_FABRICS: {
                    this.openAddFabricModal();
                    break;
               }
               case STOCK_ORDER_OPTIONS.ASSORTS: {
                    this.openAssortsModal();
                    break;
               }
               case STOCK_ORDER_OPTIONS.ORDER_FABRIC: {
                    this.openOrderFabricModal();
                    break;
               }
          }
     }

     private openShoesModal(stock?: Stock): void {
          this.stockCrudFacade
               .openShoesModal(this.contractorsList, stock)
               .pipe(
                    tap((data) => {
                         console.log(data);
                         data ? this.getStockData() : null;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )

               .subscribe();
     }

     private openAddFabricModal(stock?: Stock): void {
          this.stockCrudFacade
               .openAddFabricModal(
                    this.contractorsList,
                    this.warehousesList,
                    this.patternsList,
                    stock
               )
               .pipe(
                    tap((data) => {
                         data ? this.getStockData() : null;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     private openAssortsModal(): void {
          this.stockCrudFacade
               .openAssortsModal(this.contractorsList, this.assortsList)
               .pipe(
                    tap((data) => {
                         data ? this.getStockData() : null;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }
     private openOrderFabricModal(): void {
          this.stockCrudFacade
               .openOrderFabricModal('3.45', this.contractorsList, this.patternsList)
               .pipe(
                    tap((data) => {
                         data ? this.getStockData() : null;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public updatAssortDetails(stock: Stock): void {
          switch (stock.assortId) {
               case STOCK_ASSORTS_ID.SHOES: {
                    this.stockEditAssortStore
                         .openShoesModal(stock, this.contractorsList)
                         .pipe(
                              tap((data) => {
                                   data ? this.getStockData() : null;
                              }),
                              takeUntilDestroyed(this.destroyRef)
                         )
                         .subscribe();
                    break;
               }
               case STOCK_ASSORTS_ID.FABRIC: {
                    this.stockEditAssortStore
                         .openFabricModal(
                              stock,
                              this.contractorsList,
                              this.warehousesList,
                              this.patternsList
                         )
                         .pipe(
                              tap((data) => {
                                   data ? this.getStockData() : null;
                              }),
                              takeUntilDestroyed(this.destroyRef)
                         )
                         .subscribe();
                    break;
               }
               case STOCK_ASSORTS_ID.TIE: {
                    this.stockEditAssortStore
                         .openAssortModal(stock, this.contractorsList, this.assortsList)
                         .pipe(
                              tap((data) => {
                                   data ? this.getStockData() : null;
                              }),
                              takeUntilDestroyed(this.destroyRef)
                         )
                         .subscribe();
                    break;
               }
          }
     }

     private getTableTitle(id: number): Observable<string> {
          return of(
               this.optionsList
                    .filter((s) => Number(s.id) === Number(id))
                    .map((c) => c.name)
                    .toString()
          );
     }

     public onWarehouseFormChange(warehouseId: number): void {
          const option = STOCK_API_OPTIONS.WAREHOUSE;
          this.setStockTableData(option, warehouseId);
     }

     public onOptionFormChange(optionId: number): void {
          const option = STOCK_API_OPTIONS.STATUS;
          this.tableTitle$ = of(
               this.optionsList
                    .filter((s) => Number(s.id) === Number(optionId))
                    .map((c) => c.name)
                    .toString()
          );
          this.setStockTableData(option, optionId);
     }

     public onAssortFormChange(assortId: number): void {
          const option = STOCK_API_OPTIONS.ASSORT;
          this.setStockTableData(option, assortId);
     }

     private setStockTableData(option: STOCK_API_OPTIONS, assortId: number): void {
          this.tableData$ = this.stockService.getListData(option, assortId);
          this.filteredTableData$ = this.tableData$;
     }

     public confirmMoveToStock($id: number): void {
          this.stockCrudFacade
               .confirmMoveToStock($id)
               .pipe(takeUntilDestroyed(this.destroyRef))
               .subscribe();
     }

     private getListsData(): void {
          combineLatest([
               this.stockDataFacade.contractorsList$,
               this.stockDataFacade.warehousesList$,
               this.assortsList$,
               this.patternsList$,
               this.optionsList$,
               this.fabricService.getList(),
          ])
               .pipe(
                    tap(
                         ([
                              contractorsList,
                              warehousesList,
                              assortsList,
                              patternsList,
                              optionsList,
                              fabricList,
                         ]) => {
                              this.contractorsList = contractorsList;
                              this.warehousesList = warehousesList;
                              this.assortsList = assortsList;
                              this.patternsList = patternsList;
                              this.optionsList = optionsList;
                              this.fabricList = fabricList;
                              this.getStockData();
                         }
                    ),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onFilterData($event: string): void {
          this.filteredTableData$ = this.tableData$.pipe(
               map((items) => {
                    // filter(Boolean),
                    return items!.filter((item) => {
                         return (
                              item.contractor?.includes($event) ||
                              item.materialNr?.includes($event) ||
                              item.addDate?.includes($event) ||
                              item.orderDate?.includes($event) ||
                              item.priceEuro?.includes($event) ||
                              item.buyingPrice?.includes($event) ||
                              item.artName.includes($event) ||
                              item.quantity?.toString().includes($event) ||
                              item.modelName?.toString().includes($event)
                         );
                    });
               })
          );
     }

     public contractorDetails(id: number): void {
          this.contractorsDataStore.openDetailsModal(id);
     }
}
