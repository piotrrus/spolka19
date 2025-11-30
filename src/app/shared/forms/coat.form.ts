import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class CoatForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               model: ['', Validators.required, Validators.minLength(3)],
               wylogi: [''],
               pockets: [''],
               iloscGuzikow: [''],
               iloscRozporkow: [''],
               amf: [''],
          });
     }

     public get model(): AbstractControl | null {
          return this.frm.get('model');
     }
     public get wylogi(): AbstractControl | null {
          return this.frm.get('wylogi');
     }
     public get pockets(): AbstractControl | null {
          return this.frm.get('pockets');
     }
     public get iloscGuzikow(): AbstractControl | null {
          return this.frm.get('iloscGuzikow');
     }
     public get iloscRozporkow(): AbstractControl | null {
          return this.frm.get('iloscRozporkow');
     }
     public get amf(): AbstractControl | null {
          return this.frm.get('amf');
     }
}
