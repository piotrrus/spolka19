import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class ShirtForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               koszula_model: ['', [Validators.required]],
               koszula_mankiet: [''],
               koszula_kolnierzyk: [''],
               koszula_zaszewki: [''],
               koszula_listwa: [''],
               monogram: [''],
               monogram_kolor: [''],
               monogram_inicjaly: [''],
               rozmiar_kolnierzyka: [''],
               rozmiar_korpusu: [''],
               dlugosc_rekawa: [''],
               notices: ['', [Validators.maxLength(500)]],
          });
     }

     public get koszula_model(): AbstractControl | null {
          return this.frm.get('koszula_model');
     }
     public get koszula_mankiet(): AbstractControl | null {
          return this.frm.get('koszula_mankiet');
     }
     public get koszula_kolnierzyk(): AbstractControl | null {
          return this.frm.get('koszula_kolnierzyk');
     }
     public get koszula_zaszewki(): AbstractControl | null {
          return this.frm.get('koszula_zaszewki');
     }
     public get koszula_listwa(): AbstractControl | null {
          return this.frm.get('koszula_listwa');
     }
     public get monogram(): AbstractControl | null {
          return this.frm.get('monogram');
     }
     public get monogram_kolor(): AbstractControl | null {
          return this.frm.get('monogram_kolor');
     }
     public get monogram_inicjaly(): AbstractControl | null {
          return this.form.get('monogram_inicjaly');
     }
     public get rozmiar_kolnierzyka(): AbstractControl | null {
          return this.frm.get('rozmiar_kolnierzyka');
     }
     public get rozmiar_korpusu(): AbstractControl | null {
          return this.frm.get('rozmiar_korpusu');
     }
     public get dlugosc_rekawa(): AbstractControl | null {
          return this.frm.get('dlugosc_rekawa');
     }

     public setMonogramValidators(isSet: boolean): void {
          if (isSet === true) {
               this.monogram_inicjaly?.setValidators([
                    Validators.required,
                    Validators.maxLength(5),
               ]);
          } else {
               this.monogram_inicjaly?.setValidators([]);
               this.monogram_inicjaly?.setValue('');
               this.monogram_kolor?.setValue('');
          }

          this.monogram_inicjaly?.updateValueAndValidity();
     }
}
