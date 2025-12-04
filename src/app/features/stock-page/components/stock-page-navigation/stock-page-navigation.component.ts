import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AssortList } from '@features/assorts-page/models/assorts.interface';
import { STOCK_ORDER_OPTIONS } from '@features/stock-page/enums/stock-order-options.enum';
import { Warehouse } from '@features/warehouse-page/models/warehouse.interface';
import { StockFilterForm } from '@shared/forms/stockFilter.form';
import { List } from '@shared/interfaces/list.interface';

@Component({
     selector: 'app-stock-page-navigation',
     templateUrl: './stock-page-navigation.component.html',
     styleUrls: ['./stock-page-navigation.component.scss'],
     imports: [
          CommonModule,
          FormsModule,
          MatFormFieldModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatSelectModule,
     ],
})
export class StockPageNavigationComponent {
     @Input() public assortsList: AssortList[] | null;
     @Input() public optionsList: List[] | null;
     @Input() public warehousesList: Warehouse[] | null;

     @Input() public tableTitle: string | null;
     @Input() public dataLength: number;

     @Output() public warehouseFormChange = new EventEmitter<number>();
     @Output() public assortFormChange = new EventEmitter<number>();
     @Output() public optionFormChange = new EventEmitter<number>();

     @Output() public stockNewOrder = new EventEmitter<STOCK_ORDER_OPTIONS>();

     public form: StockFilterForm = new StockFilterForm(this.fb);
     public stockOrderOptions = STOCK_ORDER_OPTIONS;

     constructor(private fb: FormBuilder) {}

     public onWarehouseChange($event: number): void {
          this.warehouseFormChange.emit($event);
     }

     public onAssortChange($event: number): void {
          this.assortFormChange.emit($event);
     }

     public onOptionChange($event: number): void {
          this.optionFormChange.emit($event);
     }

     public openNewModal($option: STOCK_ORDER_OPTIONS): void {
          this.stockNewOrder.emit($option);
     }
}
