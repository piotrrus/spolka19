import {
     Component,
     Input,
     Output,
     EventEmitter,
     OnInit,
     ChangeDetectionStrategy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientMeasures } from '@features/clients-page/models/client-measures.interface';
import { BaseFormComponent } from '@shared/abstract/base-form.component';
import { MeasuresForm } from '@shared/forms/measures.form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
@Component({
     selector: 'app-client-measures-form',
     templateUrl: './client-measures-form.component.html',
     styleUrls: ['./client-measures-form.component.scss'],
     changeDetection: ChangeDetectionStrategy.OnPush,
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          MatFormFieldModule,
          MatInputModule,
          TextFieldModule,
     ],
})
export class ClientMeasuresFormComponent extends BaseFormComponent implements OnInit {
     @Input() set clientMeasures(measures: ClientMeasures | null) {
          if (measures) {
               this.setValues(measures);
               this.isFormValid.emit(this.form.form.valid);
          }
     }

     @Output() public formChange = new EventEmitter<ClientMeasures>();
     @Output() public isFormValid = new EventEmitter<boolean>();

     public form: MeasuresForm = new MeasuresForm(this.fb);

     constructor(private fb: FormBuilder) {
          super();
     }

     public ngOnInit(): void {
          this.checkFormAndEmit();
     }

     private setValues(measures: ClientMeasures): void {
          if (measures) {
               this.form.wzrost?.setValue(measures.wzrost);
               this.form.obwod_klatki_piersiowej?.setValue(measures.obwod_klatki_piersiowej);
               this.form.obwod_pasa_marynarki?.setValue(measures.obwod_pasa_marynarki);
               this.form.obwod_uda?.setValue(measures.obwod_uda);
               this.form.szerokosc_przodu?.setValue(measures.szerokosc_przodu);
               this.form.szerokosc_tylu?.setValue(measures.szerokosc_tylu);
               this.form.pas_spodni?.setValue(measures.pas_spodni);
               this.form.bark_rekaw?.setValue(measures.bark_rekaw);
               this.form.szerokosc_barkow?.setValue(measures.szerokosc_barkow);
               this.form.długosc_plecow?.setValue(measures.długosc_plecow);
               this.form.obwod_bioder?.setValue(measures.obwod_bioder);
               this.form.dl_zewn_nogawki_bez_paska?.setValue(measures.dl_zewn_nogawki_bez_paska);
               this.form.obwod_bicepsu?.setValue(measures.obwod_bicepsu);

               this.form.uwagi?.setValue(measures.uwagi);
          }
     }
}
