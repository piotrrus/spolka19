import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { Assort } from '@features/stock-page/models/assort.interface';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-assorts-table',
     templateUrl: './assorts-table.component.html',
     styleUrls: ['./assorts-table.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [CommonModule, NgxDatatableModule],
})
export class AssortsTableComponent extends BaseTableComponent {
     // @Input() public tableTitle = '';
     @Input() public override tableData: AssortList[] | null = [];
     @Output() public showDetailsAction = new EventEmitter<Assort>();

     public showDetails($event: Assort): void {
          this.showDetailsAction.emit($event);
     }
}
