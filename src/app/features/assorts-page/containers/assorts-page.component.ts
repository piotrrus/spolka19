import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TITLES } from '../enums/table-name.enum';
import { AssortsService } from '../services/assorts.service';
import { AssortList } from '../models/assorts.interface';
import { TableHeaderComponent } from 'src/app/modules/data-table/table-header/table-header.component';
import { AssortsTableComponent } from '../components/tables/assorts-table.component';
import { CommonModule } from '@angular/common';

@Component({
     selector: 'app-assorts-page',
     templateUrl: './assorts-page.component.html',
     styleUrls: ['./assorts-page.component.scss'],
     imports: [CommonModule, TableHeaderComponent, AssortsTableComponent],
     providers: [AssortsService],
})
export class AssortsPageComponent {
     public tableTitle = TITLES.TABLE_TITLE;

     public tableData$: Observable<AssortList[]> = this.assortsService.getAllAssortsList();
     public newTableData$: Observable<AssortList[]> = this.tableData$;

     constructor(private assortsService: AssortsService) {}

     public onFilterData(filterData = 'ac'): void {
          this.newTableData$ = this.tableData$.pipe(
               map((items) => {
                    return items.filter((item) => {
                         return item.name.includes(filterData);
                    });
               })
          );
     }
}
