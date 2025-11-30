import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class JacketForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     public createForm(): FormGroup {
          return this.fb.group({
               marynarka_model: ['', Validators.required],
               marynarka_wylogi: [''],
               marynarka_kieszen: [''],
               marynarka_ilosc_guzikow: [''],
               marynarka_ilosc_rozporkow: [''],
               marynarka_amf: ['true'],
          });
     }

     public get marynarka_model(): AbstractControl | null {
          return this.frm.get('marynarka_model');
     }
     public get marynarka_wylogi(): AbstractControl | null {
          return this.frm.get('marynarka_wylogi');
     }
     public get marynarka_kieszen(): AbstractControl | null {
          return this.frm.get('marynarka_kieszen');
     }
     public get marynarka_ilosc_guzikow(): AbstractControl | null {
          return this.frm.get('marynarka_ilosc_guzikow');
     }
     public get marynarka_ilosc_rozporkow(): AbstractControl | null {
          return this.frm.get('marynarka_ilosc_rozporkow');
     }
     public get marynarka_amf(): AbstractControl | null {
          return this.frm.get('marynarka_amf');
     }
}
