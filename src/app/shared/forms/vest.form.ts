import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class VestForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     public createForm(): FormGroup {
          return this.fb.group({
               kamizelka_model: ['', Validators.required],
               kamizelka_kieszenie: [''],
          });
     }

     public get kamizelka_model(): AbstractControl | null {
          return this.frm.get('kamizelka_model');
     }

     public get kamizelka_kieszenie(): AbstractControl | null {
          return this.frm.get('kamizelka_kieszenie');
     }
}
