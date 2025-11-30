import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class WarehouseForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
               address: ['', [Validators.maxLength(250)]],
               phone: ['', [Validators.maxLength(20), Validators.pattern('^[0-9]+$')]],
          });
     }

     public get name(): AbstractControl | null {
          return this.form.get('name');
     }

     public get address(): AbstractControl | null {
          return this.form.get('address');
     }

     public get phone(): AbstractControl | null {
          return this.form.get('phone');
     }

     public get myForm(): FormGroup {
          return this.form;
     }
}
