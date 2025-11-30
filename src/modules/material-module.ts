import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  exports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSliderModule,
  ],
  providers: [MatDatepickerModule],
})
export class MaterialModule {}
