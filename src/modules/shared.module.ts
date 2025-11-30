import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MaterialModule } from './material-module';
import { BootstrapModule } from './bootstrap.module';
import { DirectivesModule } from './directives.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { ConfirmDialogComponent } from '@shared/components/confirm-dialog/confirm-dialog.component';
// import { DataTableModule } from './data-table/data-table.module';

const MODULES = [
     CommonModule,
     MaterialModule,
     BootstrapModule,
     FormsModule,
     ReactiveFormsModule,
     DirectivesModule,
     NgxDatatableModule,
     NgxSpinnerModule,
     ToastrModule,
     // DirectivesModule,
     // DataTableModule,
];
// const COMPONENTS = [ConfirmDialogComponent];

@NgModule({
     //declarations: [COMPONENTS],
     imports: [MODULES, ToastrModule.forRoot()],
     //  exports: [MODULES, COMPONENTS, ToastrModule],
})
export class SharedModule {}
