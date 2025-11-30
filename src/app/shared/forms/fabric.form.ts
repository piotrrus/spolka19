import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class FabricForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               currency: [],
               materialNr: ['', [Validators.required, Validators.maxLength(25)]],
               contractorId: ['1', [Validators.required]],
               pattern: [''],
               warehouseId: ['1'],
               fabricComposition: ['', [Validators.maxLength(250)]],

               quantity: ['', [Validators.required]],
               priceEuro: ['', [Validators.required]],
               buyingPrice: ['', [Validators.required]],
          });
     }

     public get currency(): AbstractControl | null {
          return this.frm.get('currency');
     }

     public get materialNr(): AbstractControl | null {
          return this.frm.get('materialNr');
     }

     public get contractorId(): AbstractControl | null {
          return this.frm.get('contractorId');
     }

     public get pattern(): AbstractControl | null {
          return this.frm.get('pattern');
     }

     public get warehouseId(): AbstractControl | null {
          return this.frm.get('warehouseId');
     }

     public get fabricComposition(): AbstractControl | null {
          return this.frm.get('fabricComposition');
     }

     public get quantity(): AbstractControl | null {
          return this.frm.get('quantity');
     }

     public get priceEuro(): AbstractControl | null {
          return this.frm.get('priceEuro');
     }

     public get buyingPrice(): AbstractControl | null {
          return this.frm.get('buyingPrice');
     }
}
