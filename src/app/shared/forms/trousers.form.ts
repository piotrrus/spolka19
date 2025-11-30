import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class TrousersForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     public createForm(): FormGroup {
          return this.fb.group({
               spodnie_model: ['', Validators.required],
               spodnie_kieszen_boczna: ['', Validators.required],
               spodnie_podtrzymacze: [''],
               spodnie_imitacja_zegarowki: [''],
               spodnie_podwyzszony_pas: [''],
               spodnie_patka: [''],
               spodnie_sekretna_kieszen: [''],
          });
     }

     public get spodnie_model(): AbstractControl | null {
          return this.frm.get('spodnie_model');
     }
     public get spodnie_kieszen_boczna(): AbstractControl | null {
          return this.frm.get('spodnie_kieszen_boczna');
     }
     public get spodnie_podtrzymacze(): AbstractControl | null {
          return this.frm.get('spodnie_podtrzymacze');
     }
     public get spodnie_imitacja_zegarowki(): AbstractControl | null {
          return this.frm.get('spodnie_imitacja_zegarowki');
     }
     public get spodnie_podwyzszony_pas(): AbstractControl | null {
          return this.frm.get('spodnie_podwyzszony_pas');
     }
     public get spodnie_patka(): AbstractControl | null {
          return this.frm.get('spodnie_patka');
     }
     public get spodnie_sekretna_kieszen(): AbstractControl | null {
          return this.frm.get('spodnie_sekretna_kieszen');
     }
}
