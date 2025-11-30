import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class StockFilterForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               warehouseId: ['', [Validators.required]],
               assortId: ['', [Validators.required]],
               optionId: ['', [Validators.required]],
          });
     }

     public get warehouseId(): AbstractControl | null {
          return this.form.get('warehouseId');
     }
     public get assortId(): AbstractControl | null {
          return this.form.get('assortId');
     }
     public get optionId(): AbstractControl | null {
          return this.form.get('optionId');
     }
}
