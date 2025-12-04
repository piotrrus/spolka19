import { NgModule } from '@angular/core';
import { ContractorModalComponent } from './components/modals/contractor-modal.component';
import { ContractorFormComponent } from './components/forms/contractor-form.component';
import { SharedModule } from '@shared/modules/shared.module';
import { ContractorsDataStore } from './services/contractors-crud-facade';
import { ContractorModalHelper } from './helpers/contractor-modal.helper';

@NgModule({
     declarations: [ContractorModalComponent, ContractorFormComponent],
     imports: [SharedModule],
     exports: [ContractorModalComponent, ContractorFormComponent],
     providers: [ContractorsDataStore, ContractorModalHelper],
})
export class ContractorsModalModule {}
