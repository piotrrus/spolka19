import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeaderComponent } from '../data-table/table-header/table-header.component';
import { SimpleFilterFormComponent } from '../data-table/simple-filter-form/simple-filter-form.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule];
const COMPONENTS = [TableHeaderComponent, SimpleFilterFormComponent];

@NgModule({
     declarations: [COMPONENTS],
     imports: [CommonModule, MODULES],
     exports: [COMPONENTS],
})
export class DataTableModule {}
