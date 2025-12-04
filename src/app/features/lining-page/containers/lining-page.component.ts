import { Component, DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { TITLES } from '../enums/titles.enum';
import { Lining } from '../models/lining.interface';
import { LiningDataStore } from '../services/lining-data-store';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { LiningTableComponent } from '../components/tables/linings-table.component';
import { LiningService } from '../services/lining.service';
import { LiningPageRoutingModule } from '../lining-page-routing.module';
import { CommonModule } from '@angular/common';
import { LiningModalHelper } from '../helpers/lining-modal.helper';
@Component({
     selector: 'app-lining-page',
     templateUrl: './lining-page.component.html',
     styleUrls: ['./lining-page.component.scss'],
     imports: [CommonModule, TableHeaderComponent, LiningTableComponent, LiningPageRoutingModule],
     providers: [LiningService, LiningDataStore, LiningModalHelper],
})
export class LiningPageComponent {
     private tableData$: Observable<Lining[] | null> = this.liningDataStore.getList();
     public tableTitle = TITLES.TABLE_TITLE;
     public filteredTableData$: Observable<Lining[] | null> = this.tableData$;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly liningDataStore: LiningDataStore
     ) {}

     public showDetails(modalData: Lining): void {
          this.liningDataStore
               .openDetails(modalData)
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.liningDataStore.getList()) : null;
                         this.filteredTableData$ = this.tableData$;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onAddNew(): void {
          this.liningDataStore
               .onAddNew()
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.liningDataStore.getList()) : null;
                         this.filteredTableData$ = this.tableData$;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onFilterData(filterData: string): void {
          this.filteredTableData$ = this.tableData$.pipe(
               filter(Boolean),
               map((items) => {
                    return items?.filter((item) => {
                         return item.name.includes(filterData);
                    });
               })
          );
     }
}
