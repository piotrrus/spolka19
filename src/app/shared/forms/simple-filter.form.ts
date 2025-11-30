import { AbstractControl, FormGroup } from '@angular/forms';
import { BaseForm } from './base.form';

export class SimpleFilterForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               searchedText: [''],
          });
     }

     public get searchedText(): AbstractControl | null {
          return this.frm.get('searchedText');
     }
}
