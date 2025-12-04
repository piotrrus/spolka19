import { Component, DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Felt } from '../models/felt.interface';
import { Titles } from '../enums/titles.enum';
import { FeltsCrudFacade } from '../services/felts-crud-facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { FeltsTableComponent } from '../components/tables/felts-table.component';
import { CommonModule } from '@angular/common';
import { FeltsService } from '../services/felts-services';
import { FeltModalHelper } from '../helpers/felt-modal.helper';
import { FeltsPageRoutingModule } from '../felts-page-routing.module';
@Component({
     selector: 'app-felts-page',
     templateUrl: './felts-page.component.html',
     styleUrls: ['./felts-page.component.scss'],
     imports: [CommonModule, FeltsPageRoutingModule, TableHeaderComponent, FeltsTableComponent],
     providers: [FeltsService, FeltsCrudFacade, FeltModalHelper],
})
export class FeltsPageComponent {
     public tableTitle = Titles.TABLE_TITLE;
     public tableData$: Observable<Felt[] | null> = this.feltsCrudFacade.getList();
     public filteredTableData$: Observable<Felt[] | null> = this.tableData$;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly feltsCrudFacade: FeltsCrudFacade
     ) {}

     public showDetails(modalData: Felt): void {
          this.feltsCrudFacade
               .openDetails(modalData)
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.feltsCrudFacade.getList()) : null;
                         this.filteredTableData$ = this.tableData$;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onAddNew(): void {
          this.feltsCrudFacade
               .onAddNew()
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.feltsCrudFacade.getList()) : null;
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
