import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import { BaseForm } from './base.form';
// import { RegexPatterns } from '@shared/enums/regex-patterns.enum';

export class ProductionNrForm extends BaseForm {
     protected override frm: FormGroup = this.createForm();

     protected createForm(): FormGroup {
          return this.fb.group({
               prod_order: ['', [Validators.required]],
          });
     }
     //, Validators.pattern(RegexPatterns.PRODUCTION_NR)
     public get prod_order(): AbstractControl | null {
          return this.frm.get('prod_order');
     }
}
