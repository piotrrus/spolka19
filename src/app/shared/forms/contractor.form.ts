import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class ContractorForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
               nip: ['', [Validators.maxLength(10)]],
               address: ['', [Validators.maxLength(250)]],
               email: ['', [Validators.email]],
               phone: ['', [Validators.maxLength(20)]],
               contactPersonA: ['', []],
               idGroup: ['70', []],
          });

          //Validators.required Validators.maxLength(30)
     }
     //Validators.pattern('^[0-9]+$')]
     public get name(): AbstractControl | null {
          return this.frm.get('name');
     }
     public get nip(): AbstractControl | null {
          return this.frm.get('nip');
     }
     public get address(): AbstractControl | null {
          return this.frm.get('address');
     }
     public get email(): AbstractControl | null {
          return this.frm.get('email');
     }
     public get phone(): AbstractControl | null {
          return this.frm.get('phone');
     }
     public get contactPersonA(): AbstractControl | null {
          return this.frm.get('contactPersonA');
     }
     public get idGroup(): AbstractControl | null {
          return this.frm.get('idGroup');
     }
}
