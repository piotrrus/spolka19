import { Component, DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { TITLES } from '../enums/titles.enum';
import { Warehouse } from '../models/warehouse.interface';
import { WarehouseDataStore } from '../services/warehouse-data-store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WarehousePageRoutingModule } from '../warehouse-page-routing.module';
import { WarehouseModalHelper } from '../helpers/warehouse-modal.helper';
import { ContractorsCrudFacade } from '@features/contractors-page/services/contractors-crud-facade';
import { WarehouseService } from '../services/warehouse-service';
import { WarehousesTableComponent } from '../components/tables/warehouses-table.component';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { CommonModule } from '@angular/common';

@Component({
     selector: 'app-warehouse-page',
     templateUrl: './warehouse-page.component.html',
     styleUrls: ['./warehouse-page.component.scss'],
     imports: [
          CommonModule,
          WarehousePageRoutingModule,
          WarehousesTableComponent,
          TableHeaderComponent,
     ],
     providers: [WarehouseService, WarehouseDataStore, WarehouseModalHelper, ContractorsCrudFacade],
})
export class WarehousePageComponent {
     public tableTitle = TITLES.TABLE_TITLE;
     public tableData$: Observable<Warehouse[] | null> = this.warehouseDataStore.getList();
     public filteredTableData$: Observable<Warehouse[] | null> = this.tableData$;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly warehouseDataStore: WarehouseDataStore
     ) {}

     public showDetails(modalData: Warehouse): void {
          this.warehouseDataStore
               .openDetails(modalData)
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.warehouseDataStore.getList()) : null;
                         this.filteredTableData$ = this.tableData$;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onAddNew(): void {
          this.warehouseDataStore
               .onAddNew()
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.warehouseDataStore.getList()) : null;
                         this.filteredTableData$ = this.tableData$;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onFilterData($event: string): void {
          this.filteredTableData$ = this.tableData$.pipe(
               filter(Boolean),
               map((items) => {
                    return items?.filter((item) => {
                         return item.name.includes($event);
                    });
               })
          );
     }
}
