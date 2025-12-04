import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/modules/shared.module';
import { LiningModalComponent } from './components/modals/lining-modal.component';
import { LiningFormComponent } from './components/forms/lining-form.component';
import { LiningDataStore } from './services/lining-data-store';
import { LiningModalHelper } from './helpers/lining-modal.helper';

@NgModule({
     declarations: [LiningModalComponent, LiningFormComponent],
     imports: [SharedModule],
     providers: [LiningDataStore, LiningModalHelper],
})
export class LiningModalModule {}
