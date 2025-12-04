import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@shared/modules/material-module';
import { ProductionDataModalComponent } from '../components/modals/production-data/production-data-modal.component';
import { ProductionNrModalComponent } from '../components/modals/production-nr/production-nr-modal.component';
import { ProductionNrFormComponent } from '../components/forms/production-nr-form/production-nr-form.component';
import { ProductionDateFormComponent } from '../components/forms/production-date-form/production-date-form.component';
import { ProductionDateModalComponent } from '../components/modals/production-date/production-date-modal.component';
import { DirectivesModule } from '@shared/modules/directives.module';
import { ProductionEditFormComponent } from '../components/forms/production-edit-form/production-edit-form.component';

const COMPONENTS = [
     ProductionDataModalComponent,
     ProductionNrModalComponent,
     ProductionNrFormComponent,
     ProductionDateFormComponent,
     ProductionDateModalComponent,
     ProductionEditFormComponent,
];

@NgModule({
     declarations: [COMPONENTS],
     imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, DirectivesModule],
     exports: [COMPONENTS],
})
export class ProductionModalsModule {}
