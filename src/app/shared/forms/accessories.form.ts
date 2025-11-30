import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class AccessoriesForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     public createForm(): FormGroup {
          return this.fb.group({
               notices: ['', [Validators.maxLength(500)]],
          });
     }

     public get notices(): AbstractControl | null {
          return this.frm.get('notices');
     }
}
