import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class Notice extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               notices: ['', [Validators.maxLength(500)]],
          });
     }

     public get notices(): AbstractControl | null {
          return this.form.get('notices');
     }
}
