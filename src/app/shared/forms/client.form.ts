import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class ClientForm extends BaseForm {
     private clientValidators: ValidatorFn[] = [Validators.minLength(2), Validators.maxLength(30)];

     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               firstname: ['', [Validators.required, ...this.clientValidators]],
               lastname: ['', [Validators.required, ...this.clientValidators]],
               client_nr: ['', [Validators.required, Validators.maxLength(20)]],
               email: ['', [Validators.email, Validators.maxLength(50)]],
               phone: ['', [Validators.maxLength(12)]],
          });
     }

     public get firstname(): AbstractControl | null {
          return this.frm.get('firstname');
     }

     public get lastname(): AbstractControl | null {
          return this.frm.get('lastname');
     }

     public get client_nr(): AbstractControl | null {
          return this.frm.get('client_nr');
     }

     public get email(): AbstractControl | null {
          return this.frm.get('email');
     }

     public get phone(): AbstractControl | null {
          return this.frm.get('phone');
     }
}
