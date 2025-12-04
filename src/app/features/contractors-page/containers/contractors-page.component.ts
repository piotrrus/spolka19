import { Component, DestroyRef } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Contractor } from '../models/contractor.interface';
import { TITLES } from '../enums/contractor-titles.enum';
import { ContractorsCrudFacade } from '../services/contractors-crud-facade';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ContractorsTableComponent } from '../components/tables/contractors-table.component';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { CommonModule } from '@angular/common';
import { ContractorsService } from '../services/contractor-service';
import { ContractorModalHelper } from '../helpers/contractor-modal.helper';
import { ContractorPageRoutingModule } from '../contractor-page-routing.module';
@Component({
     selector: 'app-contractors-page',
     templateUrl: './contractors-page.component.html',
     styleUrls: ['./contractors-page.component.scss'],
     imports: [
          CommonModule,
          ContractorPageRoutingModule,
          ContractorsTableComponent,
          TableHeaderComponent,
     ],
     providers: [ContractorsService, ContractorsCrudFacade, ContractorModalHelper],
})
export class ContractorsPageComponent {
     public tableData$: Observable<Contractor[] | null> = this.contractorsCrudFacade.getList();

     public tableTitle = TITLES.TABLE_TITLE;
     public filteredTableData$: Observable<Contractor[] | null> = this.tableData$;

     constructor(
          private readonly destroyRef: DestroyRef,
          private readonly contractorsCrudFacade: ContractorsCrudFacade
     ) {}

     public showDetails(modalData: Contractor): void {
          this.contractorsCrudFacade
               .openDetails(modalData)
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.contractorsCrudFacade.getList()) : null;
                         this.filteredTableData$ = this.tableData$;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public addNew(): void {
          this.contractorsCrudFacade
               .onAddNew()
               .pipe(
                    tap((data) => {
                         data ? (this.tableData$ = this.contractorsCrudFacade.getList()) : null;
                         this.filteredTableData$ = this.tableData$;
                    }),
                    takeUntilDestroyed(this.destroyRef)
               )
               .subscribe();
     }

     public onFilterData(filterData = ''): void {
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
