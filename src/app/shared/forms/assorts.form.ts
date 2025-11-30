import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Assort } from '@features/stock-page/models/assort.interface';
import { BaseForm } from './base.form';

export class AssortsForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     public setFormValues(assort: Assort): void {
          this.assortId?.setValue(assort.assortId);
          this.contractorId?.setValue(assort.contractorId);
          this.buyingPrice?.setValue(assort.buyingPrice);
          this.sellingPrice?.setValue(assort.sellingPrice);
          this.quantity?.setValue(assort.quantity);
          this.model?.setValue(assort.model);
     }

     protected createForm(): FormGroup {
          return this.fb.group({
               assortId: ['', Validators.required],
               contractorId: ['1', Validators.required],
               quantity: ['', [Validators.required]],
               sellingPrice: ['', Validators.required],
               buyingPrice: ['', Validators.required],
               model: [''],
          });
     }

     public get assortId(): AbstractControl | null {
          return this.frm.get('assortId');
     }
     public get contractorId(): AbstractControl | null {
          return this.frm.get('contractorId');
     }
     public get quantity(): AbstractControl | null {
          return this.frm.get('quantity');
     }
     public get sellingPrice(): AbstractControl | null {
          return this.frm.get('sellingPrice');
     }
     public get buyingPrice(): AbstractControl | null {
          return this.frm.get('buyingPrice');
     }
     public get model(): AbstractControl | null {
          return this.frm.get('model');
     }
}
