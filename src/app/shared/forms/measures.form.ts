import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class MeasuresForm extends BaseForm {
     private numberValidators: ValidatorFn = Validators.pattern('^[0-9]*$');
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               wzrost: ['', [this.numberValidators]],
               obwod_klatki_piersiowej: ['', [this.numberValidators]],
               obwod_pasa_marynarki: ['', [this.numberValidators]],
               pas_spodni: ['', []],
               szerokosc_przodu: ['', [this.numberValidators]],
               szerokosc_tylu: ['', [this.numberValidators]],
               bark_rekaw: ['', []],
               obwod_uda: ['', [this.numberValidators]],
               szerokosc_barkow: ['', [this.numberValidators]],
               długosc_plecow: ['', [this.numberValidators]],
               obwod_bicepsu: ['', [this.numberValidators]],
               obwod_bioder: ['', [this.numberValidators]],
               dl_zewn_nogawki_bez_paska: ['', [this.numberValidators]],
               uwagi: ['', [Validators.maxLength(500)]],
          });
     }

     public get wzrost(): AbstractControl | null {
          return this.frm.get('wzrost');
     }

     public get obwod_klatki_piersiowej(): AbstractControl | null {
          return this.frm.get('obwod_klatki_piersiowej');
     }

     public get obwod_pasa_marynarki(): AbstractControl | null {
          return this.frm.get('obwod_pasa_marynarki');
     }

     public get pas_spodni(): AbstractControl | null {
          return this.frm.get('pas_spodni');
     }

     public get szerokosc_przodu(): AbstractControl | null {
          return this.frm.get('szerokosc_przodu');
     }

     public get szerokosc_tylu(): AbstractControl | null {
          return this.frm.get('szerokosc_tylu');
     }

     public get bark_rekaw(): AbstractControl | null {
          return this.frm.get('bark_rekaw');
     }

     public get obwod_uda(): AbstractControl | null {
          return this.frm.get('obwod_uda');
     }

     public get szerokosc_barkow(): AbstractControl | null {
          return this.frm.get('szerokosc_barkow');
     }

     public get długosc_plecow(): AbstractControl | null {
          return this.frm.get('długosc_plecow');
     }

     public get obwod_bicepsu(): AbstractControl | null {
          return this.frm.get('obwod_bicepsu');
     }

     public get obwod_bioder(): AbstractControl | null {
          return this.frm.get('obwod_bioder');
     }

     public get dl_zewn_nogawki_bez_paska(): AbstractControl | null {
          return this.frm.get('dl_zewn_nogawki_bez_paska');
     }

     public get uwagi(): AbstractControl | null {
          return this.frm.get('uwagi');
     }
}
