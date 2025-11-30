import { AbstractControl, FormGroup, Validators } from '@angular/forms';
// import { BaseForm } from './BaseForm';
import {
     passwordMatchValidator,
     // passwordUserDataValidator,
     patternValidator,
} from './validators/password.validator';
import { BaseForm } from './base.form';

export class RegisterForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group(
               {
                    name: [
                         '',
                         [Validators.required, Validators.minLength(8), Validators.maxLength(20)],
                    ],
                    email: ['', [Validators.required, Validators.email]],
                    password: [
                         '',
                         [
                              Validators.minLength(8),
                              Validators.required,
                              patternValidator(
                                   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/,
                                   {
                                        hasAllRequiredCharacters: true,
                                   }
                              ),
                              //passwordUserDataValidator(this, { passwordHasUserData: true }),
                         ],
                    ],
                    c_password: ['', [Validators.minLength(8), Validators.required]],
               },
               {
                    validator: passwordMatchValidator,
               }
          );
     }

     public get email(): AbstractControl | null {
          return this.frm.get('email');
     }

     public get name(): AbstractControl | null {
          return this.frm.get('name');
     }

     public get password(): AbstractControl | null {
          return this.frm.get('password');
     }

     public get c_password(): AbstractControl | null {
          return this.frm.get('c_password');
     }
}
