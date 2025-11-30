import { AbstractControl, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';

export class ShirtDescriptionForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               id: ['', []],
               description: ['', []],
               name: [],
          });
     }

     public get description(): AbstractControl | null {
          return this.frm.get('description');
     }

     public get name(): AbstractControl | null {
          return this.frm.get('name');
     }
}
