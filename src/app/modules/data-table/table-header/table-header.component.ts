import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SimpleFilterFormComponent } from '../simple-filter-form/simple-filter-form.component';

@Component({
     selector: 'app-table-header',
     templateUrl: './table-header.component.html',
     styleUrls: ['./table-header.component.scss'],
     imports: [CommonModule, MatButtonModule, SimpleFilterFormComponent],
})
export class TableHeaderComponent {
     @Input() title: string | null;
     @Input() noadd = true;
     @Input() isFiltered = true;

     @Output() public filterData = new EventEmitter<string>();
     @Output() public addNewItem = new EventEmitter<boolean>();

     public onFormChange($event: string): void {
          this.filterData.emit($event);
     }

     public addNew(): void {
          this.addNewItem.emit(true);
     }
}
