import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class MyorderFabricForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               id_stock: ['', [Validators.required]],
          });
     }

     public get id_stock(): AbstractControl | null {
          return this.frm.get('id_stock');
     }
}
