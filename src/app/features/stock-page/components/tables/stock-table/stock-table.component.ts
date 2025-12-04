import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stock } from '@features/stock-page/models/stock.interface';
import { BaseTableComponent } from '@shared/abstract/base-table.component';
import { StockTableColumns } from './stock-table-columns';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
     selector: 'app-stock-table',
     templateUrl: './stock-table.component.html',
     styleUrls: ['./stock-table.component.scss'],
     imports: [CommonModule, NgxDatatableModule],
})
export class StockTableComponent extends BaseTableComponent {
     @Input() public override tableData: Stock[] | null;

     @Output() public articleDetails = new EventEmitter<Stock>();
     @Output() public contractorDetails = new EventEmitter<number>();
     @Output() public moveToStock = new EventEmitter<number>();

     public dataTableColumns = StockTableColumns;

     public openArticleDetails(stock: Stock): void {
          this.articleDetails.emit(stock);
     }

     public openContractorDetails(id: number): void {
          this.contractorDetails.emit(id);
     }
     public onMoveToStock(id: number): void {
          this.moveToStock.emit(id);
     }
}
