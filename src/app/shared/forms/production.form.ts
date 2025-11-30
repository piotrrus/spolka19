import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';

export class ProductionForm extends BaseForm {
     protected override frm = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               id_assort: ['', Validators.required],
               art_name: [''],
               probe: [''],
               marynarka_rozmiar: [''],
               spodnie_rozmiar: [''],
               kamizelka_rozmiar: [''],
               rozmiar: [''],

               spodnie_zaszewki_w_tyle: [''],
               zaszewki_w_przodzie: [''],
               obwod_pasa: [''],
               nici: [''],
               wnetrze: [''],
               prod_order: [''],
          });
     }

     public get id_assort(): AbstractControl | null {
          return this.frm.get('id_assort');
     }
     public get art_name(): AbstractControl | null {
          return this.frm.get('art_name');
     }
     public get probe(): AbstractControl | null {
          return this.frm.get('probe');
     }
     public get marynarka_rozmiar(): AbstractControl | null {
          return this.frm.get('marynarka_rozmiar');
     }
     public get spodnie_rozmiar(): AbstractControl | null {
          return this.frm.get('spodnie_rozmiar');
     }
     public get kamizelka_rozmiar(): AbstractControl | null {
          return this.frm.get('kamizelka_rozmiar');
     }
     public get rozmiar(): AbstractControl | null {
          return this.frm.get('rozmiar');
     }
     public get spodnie_zaszewki_w_tyle(): AbstractControl | null {
          return this.frm.get('spodnie_zaszewki_w_tyle');
     }
     public get zaszewki_w_przodzie(): AbstractControl | null {
          return this.frm.get('zaszewki_w_przodzie');
     }
     public get obwod_pasa(): AbstractControl | null {
          return this.frm.get('obwod_pasa');
     }
     public get nici(): AbstractControl | null {
          return this.frm.get('nici');
     }
     public get wnetrze(): AbstractControl | null {
          return this.frm.get('wnetrze');
     }
     public get prod_order(): AbstractControl | null {
          return this.frm.get('prod_order');
     }
}
