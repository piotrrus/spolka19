import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssortPrice } from '@features/myorder-page/models/assorts-prices.interface';

export class AssortPricesForm {
     public pricesForm: FormGroup = this.createPriceForm();

     constructor(private fb: FormBuilder) {}

     public get itemsArray(): FormArray {
          return this.pricesForm.get('items') as FormArray;
     }

     private createPriceForm(): FormGroup {
          return this.fb.group({
               orderId: ['', [Validators.required]],
               totalPrice: [''],
               rabat: [''],
               zaliczka: [''],
               items: new FormArray([]),
          });
     }

     public addAssortPrice(data?: AssortPrice): void {
          const price: AssortPrice = {
               assortId: data?.assortId ? data?.assortId : null,
               price: data?.price ? data?.price : null,
               assort: data?.assort ? data?.assort : null,
          };
          this.itemsArray.push(this.createAssortPriceForm(price));
     }

     private createAssortPriceForm(data?: AssortPrice): FormGroup {
          return this.fb.group({
               assortId: [data?.assortId, [Validators.required]],
               price: [data?.price],
               assort: [data?.assort],
          });
     }

     public getItemsControls(): AbstractControl[] {
          return (this.pricesForm.get('items') as FormArray).controls;
     }

     public get orderId(): AbstractControl | null {
          return this.form.get('orderId');
     }

     public get rabat(): AbstractControl | null {
          return this.form.get('rabat');
     }
     public get zaliczka(): AbstractControl | null {
          return this.form.get('zaliczka');
     }

     public get totalPrice(): AbstractControl | null {
          return this.form.get('totalPrice');
     }

     get form(): FormGroup {
          return this.form;
     }

     set form(value: FormGroup) {
          this.form = value;
     }
}
