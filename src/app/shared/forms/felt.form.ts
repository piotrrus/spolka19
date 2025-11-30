import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class FeltForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               name: ['', [Validators.required, Validators.maxLength(10)]],
          });
     }

     public get name(): AbstractControl | null {
          return this.frm.get('name');
     }
}
