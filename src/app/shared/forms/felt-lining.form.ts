import { AbstractControl, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';

export class FeltLiningForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               feltId: ['', []],
               liningId: ['', []],
          });
     }

     public get feltId(): AbstractControl | null {
          return this.frm.get('feltId');
     }

     public get liningId(): AbstractControl | null {
          return this.frm.get('liningId');
     }
}
