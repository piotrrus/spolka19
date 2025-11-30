import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class UserForm extends BaseForm {
     private clientValidators: ValidatorFn[] = [Validators.minLength(8), Validators.maxLength(30)];

     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               name: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
               role_id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
               email: ['', [Validators.email, Validators.maxLength(50)]],
               is_active: [''],
          });
     }

     public get name(): AbstractControl | null {
          return this.frm.get('firstname');
     }

     public get role_id(): AbstractControl | null {
          return this.frm.get('role_id');
     }

     public get email(): AbstractControl | null {
          return this.frm.get('email');
     }

     public get is_active(): AbstractControl | null {
          return this.frm.get('is_active');
     }
}
