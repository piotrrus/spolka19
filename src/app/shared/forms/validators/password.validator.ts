import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { RegisterForm } from '../register.form';

export function passwordMatchValidator(control: AbstractControl): void {
     const password: string = control.get('password')?.value as string;
     const confirmPassword: string = control.get('confirmPassword')?.value as string;

     if (password !== confirmPassword) {
          control.get('confirmPassword')?.setErrors({ noPassswordMatch: true });
     }
}

export function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
     return (control: AbstractControl): { [key: string]: string } | null => {
          if (!control.value) {
               return null;
          }
          const valid: boolean = regex?.test(control?.value as string);
          return valid ? null : error;
     };
}

export function passwordUserDataValidator(form: RegisterForm, error: ValidationErrors): ValidatorFn {
     return (control: AbstractControl): { [key: string]: string } | null => {
          if (!control.value) {
               return null;
          }

          const password: string = form.password?.value as string;
          const name: string = form.name?.value as string;
          const valid: boolean = password.indexOf(name) === -1;

          if (!valid) {
               form.password?.setErrors({ PasswordHasUserData: true });
          }
          return valid ? null : error;
     };
}
