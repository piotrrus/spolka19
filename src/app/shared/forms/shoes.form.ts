import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';
import { Shoes } from '@features/stock-page/models/shoes.interface';

export class ShoesForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     public setFormValues(shoes: Shoes): void {
          this.size?.setValue(shoes.size);
          this.contractorId?.setValue(shoes.contractorId);
          this.buyingPrice?.setValue(shoes.buyingPrice);
          this.sellingPrice?.setValue(shoes.sellingPrice);
          this.quantity?.setValue(shoes.quantity);
          this.name?.setValue(shoes.name);
          this.notices?.setValue(shoes.notices);
     }

     protected createForm(): FormGroup {
          return this.fb.group({
               name: ['', Validators.required],
               size: ['', Validators.required],
               contractorId: ['', Validators.required],
               sellingPrice: [],
               buyingPrice: [],
               quantity: [],
               notices: ['', [Validators.maxLength(500)]],
          });
     }

     public get name(): AbstractControl | null {
          return this.frm.get('name');
     }

     public get size(): AbstractControl | null {
          return this.frm.get('size');
     }

     public get contractorId(): AbstractControl | null {
          return this.frm.get('contractorId');
     }

     public get notices(): AbstractControl | null {
          return this.frm.get('notices');
     }

     public get sellingPrice(): AbstractControl | null {
          return this.frm.get('sellingPrice');
     }
     public get buyingPrice(): AbstractControl | null {
          return this.frm.get('buyingPrice');
     }
     public get quantity(): AbstractControl | null {
          return this.frm.get('quantity');
     }
}
