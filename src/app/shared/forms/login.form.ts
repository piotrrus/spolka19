import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class LoginForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               login: ['', [Validators.required]],
               // email: ['', [Validators.required, Validators.email]],
               password: ['', [Validators.required]],
          });
     }

     // public get email(): AbstractControl | null {
     //      return this.form.get('email');
     // }

     public get login(): AbstractControl | null {
          return this.form.get('login');
     }

     public get password(): AbstractControl | null {
          return this.form.get('password');
     }
}
