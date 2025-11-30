import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class ProductionDateForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               data_przek_do_prod: [
                    '',
                    [
                         Validators.required,
                         Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
                    ],
               ],
          });
     }

     public get data_przek_do_prod(): AbstractControl | null {
          return this.frm.get('data_przek_do_prod');
     }
}
